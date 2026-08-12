---
sidebar_position: 2
sidebar_label: 更新系统固件
---

# 更新系统固件

本章节将讲解如何把 T153MX `.img` 固件烧写到 OmniGate-T153 的 eMMC。

:::danger 烧录会覆盖板载系统

烧录前备份开发板上的重要文件，并确认选择的是 OmniGate-T153 固件。

:::

## 准备工作

**硬件：**

- OmniGate-T153 开发板
- 稳定电源
- USB 数据线
- 调试串口

**固件：**

自己编译的固件位于：

```text
out/t153/omnigate/buildroot/t153_linux_omnigate_uart0.img
```

启用无线变体时也可能生成：

```text
out/t153/omnigate/buildroot/t153_linux_omnigate_uart0-wifi1.img
```

不要只根据文件名猜测，选择本次 `./build.sh pack` 生成的镜像。

## 烧录前检查固件

在 **Ubuntu 主机、SDK 根目录**执行：

```bash
ls -lh out/t153/omnigate/buildroot/*.img
sha256sum out/t153/omnigate/buildroot/<FIRMWARE>.img
```

记录镜像名称和 SHA-256。复制到其他烧录电脑后再次计算，结果应该相同。

## 连接开发板

1. 接好 UART0 调试串口，并打开 115200 8N1 串口终端。
2. 使用 USB 数据线连接开发板烧录/OTG 接口和主机。
3. 保持开发板使用稳定电源。

烧录接口和进入 FEL/FES 的按键操作以当前板卡丝印为准。

## Ubuntu 使用 OpenixCLI 烧录

SDK 已包含 OpenixCLI。在 **Ubuntu 主机、SDK 根目录**执行：

```bash
tools/OpenixCLI/openixcli scan
```

如果开发板已经进入 FEL/FES，命令会扫描到全志设备。

先查看工具帮助，确认当前版本参数：

```bash
tools/OpenixCLI/openixcli flash --help
```

然后按帮助信息选择本次镜像执行烧录。烧录过程中不要拔 USB、断电或复位。

## Windows 使用 PhoenixSuit 烧录

1. 安装全志 USB 烧录驱动和 PhoenixSuit。
2. 在 PhoenixSuit 中选择本次 `.img` 固件。
3. 让开发板进入 FEL/FES 模式。
4. 等待进度达到 100%，工具提示烧录成功后再断开连接。

## 启动系统

烧录完成后复位或重新上电。串口终端会打印 U-Boot 和 Linux 启动信息。

进入 **开发板 Linux Shell**后执行：

```bash
uname -a
cat /proc/partitions
df -h
```

能够正常进入 Shell，并看到 Linux 5.10 和 eMMC 分区，说明固件烧录成功。接下来可以进入[板载功能体验](../part2/01-Ethernet.md)。

## 常见问题

### 扫描不到设备

- 确认使用的是数据线，不是仅充电线。
- 换一个主机 USB 口。
- 重新执行板卡的 FEL/FES 进入操作。
- 保留串口日志，确认开发板当前停在哪个启动阶段。

### 烧录成功但不能启动

- 确认固件属于 `t153_omnigate_mmc-buildroot`。
- 检查镜像复制前后的 SHA-256 是否一致。
- 保存从上电开始的完整串口日志，根据 Boot0、U-Boot 或 Kernel 停止位置排查。
