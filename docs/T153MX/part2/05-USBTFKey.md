---
sidebar_position: 5
sidebar_label: USB、TF 卡与按键
description: 通过 ADB、U 盘、TF 卡热插拔和 input 事件验证 OmniGate-T153 的 USB 与按键功能。
---

# USB、TF 卡与按键测试

本章测试 USB Device/ADB、USB Host、TF 卡热插拔与板载按键。USB Type-A Host 和 OTG/Device
接口用途不同：U 盘接 Host，主机 ADB 接 Device，插错接口不会自动切换角色。

| 功能 | 使用的接口或节点 | 通过条件 |
| --- | --- | --- |
| ADB | OTG/Device 口 | 主机显示 `device`，可 `adb push` 和 `adb shell` |
| USB Host | Type-A Host 口 | 外设枚举，U 盘出现分区并可读写 |
| TF 卡 | TF 卡座 | 插卡自动挂载，拔卡后挂载被清理 |
| 按键 | `/dev/input/event*` | 按下和松开均上报事件 |

## 准备工作

- 一根 USB 数据线
- 一个普通 USB U 盘或读卡器
- 一张没有重要数据的 TF 卡
- 已通过串口进入 Linux Shell

## USB ADB 测试

使用 USB 数据线连接开发板 OTG/Device 口和 Ubuntu 主机。

在 **Ubuntu 主机**执行：

```bash
adb devices
```

设备列表中出现序列号和 `device`，表示 ADB 连接成功。

上传一个文本文件：

```bash
echo 'OmniGate-T153 USB test' > /tmp/t153-usb.txt
adb push /tmp/t153-usb.txt /tmp/
adb shell cat /tmp/t153-usb.txt
```

板端输出相同文字，说明 USB 数据传输正常。

## USB Host 测试

当前固件已启用 USB1 的 EHCI（USB 2.0 High-Speed）和 OHCI（Full/Low-Speed）控制器。插入 U 盘
前，在 **开发板 Linux Shell**运行：

```bash
dmesg -w
```

把 U 盘插入 Type-A Host 口，预期依次看到 `new high-speed USB device`、`usb-storage`、`sda` 和
分区如 `sda1`。另一个终端执行：

```bash
lsusb
lsblk 2>/dev/null || cat /proc/partitions
```

### 一次真实的 U 盘操作记录

插入一只 64 GB USB 存储设备后，内核输出如下。新手只需先找到四类关键词：

```console
usb 1-1.3: new high-speed USB device number 3 using sunxi-ehci
usb 1-1.3: New USB device found, idVendor=14cd, idProduct=1212
usb 1-1.3: Product: Mass Storage Device
usb-storage 1-1.3:1.0: USB Mass Storage device detected
scsi 0:0:0:0: Direct-Access     Mass     Storage Device
sd 0:0:0:0: [sda] 124735488 512-byte logical blocks: (63.9 GB/59.5 GiB)
 sda: sda1
sd 0:0:0:0: [sda] Attached SCSI removable disk
usb 1-1.3: USB disconnect, device number 3
```

- `new high-speed USB device`：Host 控制器已经检测到外设；
- `Mass Storage device`：USB 存储驱动已经匹配；
- `[sda]` 和 `sda1`：整盘节点为 `/dev/sda`，第一分区为 `/dev/sda1`；
- `USB disconnect`：拔出动作已经被内核识别。

设备编号 `3`、拓扑 `1-1.3` 和磁盘名 `sda` 都可能变化，不要把这些值写死在脚本里。板载 Hub 的
另一个下行口实测会显示为 `1-1.4`，这表示换了 Hub 端口，不是出现了第二块磁盘。

若要手动读写：

```bash
mkdir -p /mnt/usb
mount /dev/sda1 /mnt/usb
ls -al /mnt/usb
sync
umount /mnt/usb
```

设备节点可能不是 `sda1`，必须根据本次插入新增的分区替换。卸载成功后再拔 U 盘。

:::info 为什么 `lsusb` 默认会显示多个设备

`Bus 001 Device 001`、`Bus 002 Device 001` 通常是 Linux 为 EHCI/OHCI 注册的根 Hub，不是外接
设备。板载 CH334F USB Hub 会再显示为一个设备，插入 U 盘后会出现新的 Device 编号。

:::

本次 ADB 采集时 Host 口没有外接设备，基线输出为：

```console
# lsusb
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 002: ID 1a86:8091
Bus 002 Device 001: ID 1d6b:0001
```

`1d6b:0002` 是 EHCI 根 Hub，`1d6b:0001` 是 OHCI 根 Hub，`1a86:8091` 是板载 CH334F Hub。
这证明 Host 控制器和板载 Hub 已枚举，但仍需插入 U 盘才能验证下行端口、5 V 供电和存储读写。

## TF 卡测试

当前板卡 PF6 硬件检测信号不可靠，设备树保留了 PF6 配置注释，并使用 `broken-cd` 轮询 SD 总线。
因此支持热插拔，但从插拔到日志出现会有短暂延迟。

插入 TF 卡后，在 **开发板 Linux Shell**执行：

```bash
dmesg | tail -n 30
cat /proc/partitions
```

正常日志应包含 `new ... SDXC card` 和 `mmcblk1: p1`。当前固件会通过 udev 自动挂载第一分区。

本次从实板 `dmesg` 中读到的一次完整插拔记录为：

```console
mmc1: host does not support reading read-only switch, assuming write-enable
mmc1: new ultra high speed SDR104 SDXC card at address aaaa
mmcblk1: mmc1:aaaa SD64G 59.5 GiB
 mmcblk1: p1
exFAT-fs (mmcblk1p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
mmc1: card aaaa removed
```

这组记录表明识别、分区发现和拔卡检测均发生过。`Volume was not properly unmounted` 是卡内 exFAT
文件系统上一次未安全卸载的提示，不是本次热插拔检测失败；有重要数据时仍应先运行文件系统检查。

```bash
mount | grep mmcblk1
ls -al /mnt/sdcard/mmcblk1p1
```

通常不需要手动 mount。主动拔卡前仍建议先同步并卸载，避免文件系统损坏：

```bash
sync
umount /mnt/sdcard/mmcblk1p1
```

如果直接拔卡，热插拔脚本会做延迟卸载，但它无法保证刚写入缓存的数据不丢失。出现：

```text
exFAT-fs (mmcblk1p1): Volume was not properly unmounted
```

表示这张卡上一次没有正常卸载。只读测试通常可以继续，但有重要数据时应在电脑上运行文件系统
检查；不要长期忽略该提示。拔卡后还持续出现 `cmd 13, RTO` 时，轮询最终应识别 `card removed`
并停止，若长时间不停再保存完整日志排查。

## 按键测试

查看输入设备：

```bash
cat /proc/bus/input/devices
ls -l /dev/input/event*
```

当前设备树定义了 Power、Volume Up、Volume Down 按键。根据 `Handlers=` 找到实际事件节点，然后执行：

```bash
od -Ax -tx1 /dev/input/event0
```

`event0` 只是示例，必须替换成 `/proc/bus/input/devices` 中对应按键的 `Handlers=` 节点。按下和
释放时终端出现新的事件数据，说明输入正常。按 `Ctrl+C` 结束测试。

### 一次真实的按键操作记录

先查看输入设备，实测按键设备和触摸设备会同时出现：

```console
# cat /proc/bus/input/devices
I: Bus=0019 Vendor=0001 Product=0001 Version=0100
N: Name="sunxi-gpadc1/channel6/input0"
H: Handlers=event0
B: EV=100003
B: KEY=800 c0000 0 0 0

I: Bus=0018 Vendor=0416 Product=03c7 Version=1060
N: Name="Goodix Capacitive TouchScreen"
H: Handlers=event1
```

由 `Name` 和 `Handlers` 可知，本次按键对应 `/dev/input/event0`，Goodix 触摸屏对应 `event1`。
因此本次执行：

```console
# cat /dev/input/event0 | hexdump
0000000 3f5a 0000 52cb 000a 0001 0073 0001 0000
0000010 3f5a 0000 52cb 000a 0000 0000 0000 0000
0000020 3f5a 0000 3f00 000c 0001 0073 0000 0000
...
^C
```

每次按下和松开都有新行，说明驱动已经上报输入事件。十六进制内容不适合人工直接识别键名；
这里的目标只是确认**按键有事件**。若系统带 `evtest`，使用 `evtest /dev/input/event0` 会显示更
直观的事件类型、键值和按下/释放状态。

## 测试通过标准

| 功能 | 通过条件 |
| --- | --- |
| USB ADB | 主机能识别设备，文件上传后板端读取内容一致 |
| USB Host | 外设枚举，存储分区可以挂载、读取并安全卸载 |
| TF 卡 | 插卡产生内核日志并自动挂载，拔卡后挂载点被清理 |
| 按键 | 按下和释放时对应 event 节点持续产生输入事件 |

ADB 不识别时先确认连接的是 OTG/Device 口以及当前固件已启用 Gadget；USB Host 插入无反应时
检查 `ehci1`、`ohci1` 和 5 V 供电；TF 卡测试禁止直接格式化包含重要数据的卡；按键无事件时
根据 `/proc/bus/input/devices` 重新确认节点。
