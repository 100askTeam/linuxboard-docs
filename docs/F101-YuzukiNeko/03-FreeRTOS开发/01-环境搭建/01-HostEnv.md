---
sidebar_position: 1
sidebar_label: 安装并配置开发环境
description: 在 Ubuntu 或 WSL 上准备 F101 FreeRTOS SDK 的编译依赖。
---

# 安装并配置开发环境

F101 SDK 是 **FreeRTOS / Tina-RT**，可以在 Ubuntu 或 WSL2 里编译、打包。烧录在 Windows 上用 OpenixSuit，工具在 [资料获取](../../02-资料获取.md) 的 QQ 群文件里。

如果只烧录群文件里的固件、不自己编译，可以跳过本页，从 [安装 USB 驱动](../02-系统烧录/01-UsbDriver.md) 开始。

## 主机要求

| 项目 | 建议配置 |
|:---|:---|
| 系统 | Ubuntu 22.04 / 24.04 x86_64，或 WSL2 中的 Ubuntu |
| CPU | 4 核或以上 |
| 内存 | 8 GB 以上 |
| 磁盘 | SDK 所在分区建议 30 GB 以上可用空间 |
| 文件系统 | ext4 等 Linux 原生文件系统；不要把 SDK 放在 `/mnt/d` 上直接编译 |

:::warning 不要在 Windows 盘上编译

`/mnt/d/...` 是 NTFS/DrvFs。大量小文件编译会很慢，也容易遇到权限和符号链接问题。请把 SDK 拷到 WSL 家目录，例如 `$HOME/work/AW-F101/freertos-f101-v1.1`。

:::

## 安装依赖

```bash
sudo apt update
sudo apt install -y build-essential git make python3 python-is-python3 \
  libncurses-dev flex bison gawk wget unzip rsync file bc \
  libc6-i386 lib32stdc++6 lib32gcc-s1 busybox mtools
```

说明：

| 软件包 | 用途 |
|:---|:---|
| `python-is-python3` | SDK 的 dbuild 调用 `/usr/bin/python` |
| `libc6-i386` 等 | 打包工具 `dragon` 是 32 位程序 |
| `busybox` | `pack` 脚本使用 `busybox unix2dos` |
| `mtools` | 打包 res/UDISK 的 FAT 镜像需要 `mcopy` |

没有 `python-is-python3` 时，也可以：

```bash
sudo ln -sf /usr/bin/python3 /usr/bin/python
python --version
```

应显示 Python 3.x。

## 解压 SDK

从 [资料获取](../../02-资料获取.md) 下到的压缩包先放到 Windows 目录，例如 `D:\100ask\work\AW-F101`。WSL 里对应 `/mnt/d/100ask/work/AW-F101`，**不要在 Windows 盘上直接编译**。

拷到 Linux 盘再解压：

```bash
mkdir -p ~/work/AW-F101
cp /mnt/d/100ask/work/AW-F101/freertos-f101-v1.1.tar.xz ~/work/AW-F101/
cd ~/work/AW-F101
tar -xJf freertos-f101-v1.1.tar.xz
ls ~/work/AW-F101/freertos-f101-v1.1/envsetup.sh
```

能列出 `envsetup.sh` 即解压成功。

解压出来的目录里各是什么、交叉编译器在哪、工程源码在哪，见 [工程介绍](../00-工程介绍.md)。接下来 [编译与打包](./02-Build.md)。
