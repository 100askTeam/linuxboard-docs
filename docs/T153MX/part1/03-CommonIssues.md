---
sidebar_position: 3
sidebar_label: 启动与烧录问题
---

# 启动与烧录常见问题

本页集中处理首次启动和烧录阶段最常遇到的问题。排查原则是先确认供电和接线，再判断问题
停在 Boot0、U-Boot、Linux 内核还是用户空间。请保留从上电开始的完整串口日志，不要只截取
最后一行报错。

## 先判断卡在哪一层

| 现象 | 最可能的范围 | 下一步 |
| --- | --- | --- |
| 上电后完全无串口输出 | 供电、UART 接线、串口电平或端口选错 | 检查电源、共地、TX/RX 和 115200 8N1 |
| 有 Boot0，没有 U-Boot | 启动介质、Boot0 或 DRAM 初始化 | 保存上电起的全部日志，先回刷基准镜像 |
| 有 U-Boot，停在 `Starting kernel` 附近 | Kernel/DTB、启动参数或根文件系统 | 对比基准镜像和 `/proc/cmdline` |
| Linux 启动完成，但 ADB 不出现 | USB 线、OTG 接口、Gadget 或 `S50adb_start` | 用串口检查服务和 USB 日志 |
| 能进 Shell，只有某个接口不能用 | 对应设备树、驱动、供电或用户空间配置 | 进入该外设章节按层排查 |

## 串口没有任何输出

依次确认：

1. 开发板供电正常，电源规格与当前板卡要求一致。
2. USB 转串口使用 3.3 V TTL 电平，而不是 RS232 电平。
3. GND 已连接，TXD 与 RXD 已交叉连接。
4. 选择了实际出现的 `/dev/ttyUSB*` 或 `/dev/ttyACM*`。
5. 串口参数为 115200、8 数据位、无校验、1 停止位、无流控。

## 串口输出乱码

先关闭当前终端，再用 115200 波特率重新打开。如果仍然乱码，确认连接的是 UART0 调试口，而不是 RS485 或其他复用串口。

## OpenixCLI 扫描不到设备

- 确认连接的是烧录/OTG 接口，并使用支持数据传输的 USB 线。
- 更换主机 USB 口，避免使用供电不足的扩展坞。
- 按当前板卡的按键操作重新进入 FEL/FES 模式。
- 在 Ubuntu 主机执行 `lsusb`，确认 USB 设备是否发生变化。

继续收集主机信息：

```bash
lsusb
sudo dmesg -w
```

保持 `dmesg -w` 运行，再让开发板进入 FEL。若主机日志完全没有新 USB 设备，优先检查数据线、
接口和进 FEL 的按键时序，而不是反复重装烧录工具。

## ADB 显示 `no permissions`

先临时确认是否为权限问题：

```bash
sudo adb kill-server
sudo adb start-server
sudo adb devices
```

如果使用 `sudo` 后能识别，应为设备添加 udev 规则并重新插拔 USB，而不是长期用 root 启动 ADB。

## ADB 显示 `offline` 或列表为空

在 **Ubuntu 主机**执行：

```bash
adb kill-server
adb start-server
adb devices
```

仍为空时，在 **开发板串口 Shell**检查：

```bash
ps | grep adbd
ls /etc/init.d/S50adb_start
dmesg | grep -Ei 'usb|udc|gadget'
```

确认使用的是 OTG/Device 口和支持数据的 USB 线。板载 USB Host Type-A 口不能用于主机 ADB。

## 烧录成功但系统不能启动

1. 确认镜像属于 `t153_omnigate_mmc-buildroot` 方案。
2. 对比镜像复制前后的 SHA-256，排除文件损坏。
3. 根据串口日志判断停止在 Boot0、U-Boot 还是 Linux 内核阶段。
4. 如果修改过设备树、分区表或根文件系统，重新使用未修改的基准镜像验证硬件。

## 进入 Shell 后没有预期设备

先确认运行的是本次烧录的固件：

```bash
uname -a
cat /proc/cmdline
cat /proc/partitions
```

某个接口没有设备节点时，再检查对应驱动、设备树状态和启动日志。板级配置中**已配置**不等于当前镜像已经启用并完成实板验证。

建议一次性保存基础状态：

```bash
ip -br link
lsusb
lsmod
dmesg > /tmp/dmesg.txt
```

可通过 `adb pull /tmp/dmesg.txt` 把完整日志取回主机。

## 修改后现象没有变化

这通常不是代码没有生效，而是构建或烧录的不是预期产物。依次检查：

```bash
# Ubuntu 主机，SDK 根目录
stat out/t153/omnigate/buildroot/*.img
sha256sum out/t153/omnigate/buildroot/*.img
grep -E 'LICHEE_(BOARD|KERN_VER|LINUX_DEV)=' .buildconfig
```

确认修改了 `linux-5.10-origin` 对应的文件，执行过 `./build.sh` 和 `./build.sh pack`，烧录时选择的
镜像时间戳属于本次构建。只编译内核但仍烧录旧 `.img`，板端现象不会变化。

## 安全反馈问题模板

```text
板卡型号/批次：
固件文件名与 SHA-256：
主机系统：
连接方式：UART0 / ADB
预期结果：
实际结果：
完整复现步骤：
从上电开始的串口日志：
接线照片或示意：
```

问题仍无法定位时，请同时保存固件文件名及 SHA-256、板卡批次、接线照片、完整串口日志和复现步骤。
