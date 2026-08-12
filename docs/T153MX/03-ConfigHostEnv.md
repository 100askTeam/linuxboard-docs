---
sidebar_position: 3
sidebar_label: 安装并配置开发环境
---

# 安装并配置开发环境

本章节说明 OmniGate-T153 开发主机的基本要求。SDK 的完整编译步骤见[Tina SDK 开发环境搭建](./part3/01-DevelopmentEnvironmentSetup.md)。

## 准备 Ubuntu 主机

推荐使用 Ubuntu 20.04 或 22.04 64 位系统，预留不少于 100 GB 可用磁盘空间。SDK 不要放在 NTFS/FAT 共享目录，也不要使用包含空格和中文的路径。

在 **Ubuntu 主机**执行：

```bash
uname -m
lsb_release -ds
df -h .
```

`uname -m` 应输出 `x86_64`。

## 安装编译依赖

```bash
sudo apt update
sudo apt install -y build-essential gcc-multilib g++-multilib \
  git gawk flex bison gettext texinfo libncurses5-dev libncursesw5-dev \
  libssl-dev python3 python-is-python3 rsync unzip zlib1g-dev file bc \
  cpio wget curl patch device-tree-compiler adb
```

## 安装串口工具

```bash
sudo apt install -y picocom
```

连接 USB 转串口后查看设备：

```bash
ls -l /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

找到实际串口后，以 115200 8N1 打开：

```bash
sudo picocom -b 115200 <SERIAL_DEVICE>
```

`<SERIAL_DEVICE>` 替换为实际节点，例如 `/dev/ttyUSB0`。按 `Ctrl+A`、再按 `Ctrl+X` 退出 picocom。
