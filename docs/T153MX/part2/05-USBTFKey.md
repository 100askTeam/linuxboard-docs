---
sidebar_position: 5
sidebar_label: USB、TF 卡与按键
---

# USB、TF 卡与按键测试

本章节测试 OmniGate-T153 的 USB 数据连接、TF 卡热插拔和板载按键输入。

## 准备工作

- 一根 USB 数据线
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

## TF 卡测试

插入 TF 卡后，在 **开发板 Linux Shell**执行：

```bash
dmesg | tail -n 30
cat /proc/partitions
```

根据新增分区找到实际节点，例如 `/dev/mmcblkXp1`。挂载并读取：

```bash
mkdir -p /mnt/tf
mount <TF_PARTITION> /mnt/tf
ls -al /mnt/tf
```

测试完成后先卸载再拔卡：

```bash
umount /mnt/tf
```

## 按键测试

查看输入设备：

```bash
cat /proc/bus/input/devices
ls -l /dev/input/event*
```

当前设备树定义了 Power、Volume Up、Volume Down 按键。根据 `Handlers=` 找到实际事件节点，然后执行：

```bash
od -Ax -tx1 <EVENT_NODE>
```

按下和释放按键时终端出现新的事件数据，说明按键输入正常。按 `Ctrl+C` 结束测试。

## 测试通过标准

| 功能 | 通过条件 |
| --- | --- |
| USB ADB | 主机能识别设备，文件上传后板端读取内容一致 |
| TF 卡 | 插卡产生内核日志，分区可挂载和读取，卸载后可安全拔出 |
| 按键 | 按下和释放时对应 event 节点持续产生输入事件 |

ADB 不识别时先确认连接的是 OTG/Device 口以及当前固件已启用 Gadget；TF 卡测试禁止直接格式化包含重要数据的卡；按键无事件时根据 `/proc/bus/input/devices` 重新确认节点。
