---
sidebar_position: 1
sidebar_label: 启动开发板
---

# 启动 OmniGate-T153

本章带你完成第一次上电：连接 UART0 调试串口、观察完整启动日志、进入 Linux Shell，并确认
ADB 可用。全程约 10 分钟，不需要先安装 SDK。

| 项目 | 说明 |
| --- | --- |
| 操作位置 | Ubuntu/Windows 主机 + 开发板 |
| 最终结果 | 串口能进入 Shell，主机执行 `adb devices` 能看到设备 |
| 最重要的接线 | UART0 的 GND、TXD、RXD；USB 转串口的 VCC 不接 |

## 1. 准备硬件和软件

**硬件：**

- OmniGate-T153 开发板；
- 与当前板卡要求匹配的稳定电源；
- 支持 **3.3 V TTL** 的 USB 转串口模块；
- 一根支持数据传输的 USB 线，用于 ADB 或烧录。

**Ubuntu 主机安装工具：**

```bash
sudo apt update
sudo apt install -y picocom adb
```

Windows 可以使用 MobaXterm 或 PuTTY 打开串口，并安装对应的 ADB 工具和 USB 驱动。

:::danger 先确认电平，再接线

UART0 是 3.3 V TTL 串口，不能接传统 ±12 V RS232 接口。USB 转串口模块的 VCC/5V/3V3
不要连接到开发板，开发板应从自己的电源接口供电。

:::

## 2. 连接 UART0 调试串口

开发板外观如下，接口的准确位置和方向以当前批次 PCB 丝印、原理图为准：

![OmniGate-T153 开发板接口](../images/DshanPI-OminiGate-1.png)

断电状态下按下表连接：

```text
USB 转串口                 OmniGate-T153 UART0
GND          ------------  GND
TXD          ------------  RXD
RXD          ------------  TXD
VCC/5V/3V3   ------------  不连接
```

TXD 和 RXD 必须交叉连接。只接 TX/RX 而不共地，通常会出现无输出或乱码。

## 3. 找到主机串口设备

先拔下 USB 转串口模块，在 **Ubuntu 主机**执行一次：

```bash
ls -l /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

插入模块后再次执行。新出现的节点就是串口，例如 `/dev/ttyUSB0`。也可以查看最近日志：

```bash
dmesg | tail -n 20
```

如果当前用户没有串口权限，可以临时使用 `sudo`，或把用户加入 `dialout` 组后重新登录：

```bash
sudo usermod -aG dialout "$USER"
```

## 4. 打开串口终端

下面假设设备是 `/dev/ttyUSB0`，请按实际结果替换：

```bash
sudo picocom -b 115200 --flow n /dev/ttyUSB0
```

串口参数为 **115200、8 数据位、无校验、1 停止位、无流控（115200 8N1）**。

- 退出 picocom：先按 `Ctrl+A`，松开后再按 `Ctrl+X`；
- 看不到刚输入的字符不一定是故障，Linux Shell 可能关闭了本地回显；
- 出现 `Terminal ready` 后保持窗口打开，再给开发板上电。

## 5. 上电并进入 Linux

确认没有短路或反接后给开发板上电。正常情况下串口会依次看到：

```text
Boot0 / DRAM 初始化
U-Boot
Starting kernel ...
Linux 内核和驱动日志
Buildroot 启动服务
Linux Shell 提示符 #
```

第一次启动可能比后续启动稍慢。日志仍在滚动时先等待，不要连续复位。看到 `#` 后按一次 Enter，
然后在 **开发板 Linux Shell**执行：

```bash
uname -a
uname -m
cat /proc/cmdline
cat /proc/partitions
```

预期特征：

- `uname -a` 包含 Linux 5.10；
- `uname -m` 输出 `armv7l`；
- `/proc/partitions` 中能看到板载 eMMC 及其分区；
- 输入 `echo OK` 能立即返回 `OK`。

## 6. 连接 ADB

保持串口连接，再用 USB 数据线连接开发板的 **OTG/Device 接口**与 Ubuntu 主机。等待几秒后在
**Ubuntu 主机**执行：

```bash
adb kill-server
adb start-server
adb devices
```

正常输出类似：

```text
List of devices attached
0402101560    device
```

序列号会因设备而不同。接着验证 Shell 和文件传输：

```bash
adb shell uname -a
printf 'OmniGate ADB OK\n' > /tmp/omnigate-adb.txt
adb push /tmp/omnigate-adb.txt /tmp/
adb shell cat /tmp/omnigate-adb.txt
```

:::info 串口和 ADB 各自有什么用

- **UART0 串口**从 Boot0 开始就有日志，适合启动失败、驱动问题和烧录排查；
- **ADB**必须等 Linux 和 USB Gadget 启动后才能连接，适合上传程序和日常调试；
- ADB 连不上时，不要放弃串口。串口日志通常能说明系统是否真正启动。

:::

## 7. 做一次系统体检

在 **开发板 Linux Shell**执行：

```bash
ip -br link
ls /sys/class/leds
hciconfig -a 2>/dev/null | head
ip -details link show can0 2>/dev/null | head
```

当前完整固件通常能看到 `eth0`、`eth1`、`wlan0`、`can0`、`can1`，三个 `t153:led*` LED，
以及处于 `UP RUNNING` 的 `hci0`。某个选配器件没有安装时，对应设备不存在不代表整机启动失败。

## 启动成功检查表

- [ ] UART0 从上电开始持续输出可读日志；
- [ ] 最终出现 Linux Shell，命令能正常执行；
- [ ] `uname -m` 为 `armv7l`，eMMC 分区可见；
- [ ] `adb devices` 显示一个状态为 `device` 的序列号；
- [ ] 已保存一次完整启动日志，后续出问题时可用于对比。

串口无输出、乱码、ADB 不识别或系统停在启动阶段时，转到
[启动与烧录常见问题](./03-CommonIssues.md)逐项排查。确认启动正常后，建议继续测试
[双网口](../part2/01-Ethernet.md)或[Wi-Fi](../part2/02-WiFiBluetooth.md)。
