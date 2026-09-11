---
sidebar_position: 1
sidebar_label: 启动开发板
description: 上电后用 ADB 进入 FreeRTOS 命令行，确认分区和文件系统。
---

# 启动开发板

第一次上电不需要先装 SDK。用 Type-C 连接电脑，通过 ADB 进入 FreeRTOS CLI。

| 项目 | 说明 |
|:---|:---|
| 操作位置 | Windows 或 WSL 主机 + 开发板 |
| 最终结果 | `adb devices` 显示 `device`，`adb shell ls /` 能列出目录 |
| 注意 | 这是 FreeRTOS 命令行，不是 Linux Shell |

## 1. 连接

1. 用 Type-C 数据线连接开发板和电脑（要能传数据，不要只用充电线）。
2. 给开发板上电。
3. 设备管理器中应出现 ADB 设备（名称常见为 CherryADB，以实际为准）。

Windows 可直接使用 Android platform-tools 里的 `adb.exe`。

## 2. 确认 ADB

```bash
adb devices -l
```

能列出设备、状态是 `device` 即可。序列号每块板不一样：

```text
List of devices attached
<序列号>                device
```

若是 `unauthorized` 或空白，换线、换口，或重新上电。

## 3. 进入命令行

```bash
adb shell
help
ls /
```

`ls /` 通常能看到 `dev`、`res`、`data` 等目录，具体以当前镜像为准。能列出目录，说明镜像起来了、ADB 通路正常。

这是 FreeRTOS 命令行，不是 Linux Shell。`uname`、`id`、`ps` 这类 Linux 命令一般没有。输入 `help` 查看当前固件实际注册的命令。

分区、文件系统、环境变量的核对属于 [SPI NOR](../04-外设测试/02-SPI-NOR.md) 那页，那里有完整的输出对照。

## 4. 让打印输出走 ADB

控制台默认走调试串口：排针 H2-11（PB0/TX）、H2-10（PB1/RX），115200。这两脚也接到 Type-C 的 SBU，插着数据线时串口可能不干净。没有接 USB-TTL 时，在 `adb shell` 里执行：

```bash
adb_enter
```

之后 `printf` 会出现在这个 ADB 会话里。切回串口用 `adb_exit`。说明见 [USB 与 ADB](../04-外设测试/01-USB-ADB.md)。

## 外设验证

USB/ADB、SPI NOR、TF 卡、排针 GPIO 的验证步骤见 [外设测试](../04-外设测试/01-USB-ADB.md)。要改代码、自己编译，先看 [工程介绍](../00-工程介绍.md)。
