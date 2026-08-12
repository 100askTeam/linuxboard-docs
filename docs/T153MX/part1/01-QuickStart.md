---
sidebar_position: 1
sidebar_label: 启动开发板
---

# 启动 OmniGate-T153

本章节将完成 OmniGate-T153 的电源、调试串口和 USB 连接，并进入 Linux Shell。

## 准备工作

**硬件：**

- OmniGate-T153 开发板
- 与板卡要求匹配的稳定电源
- 3.3 V USB 转串口模块
- USB 数据线

**软件：**

- Ubuntu：picocom/minicom
- Windows：MobaXterm/PuTTY

## 连接开发板

开发板外观如下：

![OmniGate-T153 开发板接口](../images/DshanPI-OminiGate-1.png)

调试串口接线：

```text
USB 转串口          OmniGate-T153 UART0
GND       --------  GND
TXD       --------  RXD
RXD       --------  TXD
VCC       --------  不连接
```

TX/RX 需要交叉连接，串口模块必须是 3.3 V TTL 电平，不能使用 RS232 电平。UART0 排针的准确位置以 PCB 丝印和对应批次原理图为准。

## 打开串口终端

在 **Ubuntu 主机**查看串口设备：

```bash
ls -l /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

打开串口：

```bash
sudo picocom -b 115200 <SERIAL_DEVICE>
```

Windows 串口参数同样设置为 115200、8 数据位、无校验、1 停止位、无流控。

## 启动开发板

确认接线无误后接通板卡电源。串口终端会依次打印 Boot0、U-Boot 和 Linux 日志，最后进入 Linux Shell。

在 **开发板 Linux Shell**执行：

```bash
uname -a
uname -m
cat /proc/partitions
```

可以看到 Linux 5.10、`armv7l` 和 eMMC 分区信息，说明开发板已经正常启动。

如果串口完全没有输出，先检查供电、GND、TX/RX 是否接反和串口设备是否选错；如果输出乱码，确认波特率为 115200。
