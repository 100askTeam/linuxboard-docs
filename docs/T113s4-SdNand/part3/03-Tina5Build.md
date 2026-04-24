---
sidebar_position: 3
---

# Tina5 编译系统

本章节将讲解如何编译 Tina5 SDK 并打包固件。

---

## 编译前准备

### 1. 进入 SDK 根目录

```bash
cd t113-tin5-v1.2/
```

### 2. 清除旧配置（如有）

```bash
rm .buildconfig
```

### 3. 初始化环境变量

```bash
source build/envsetup.sh
```

初始化成功后会显示可用的命令和编译选项。

---

## 配置编译选项

首次编译需要配置单板选项：

```bash
./build.sh config
```

根据提示依次选择：

```
All available platform:
   0. android
   1. linux
Choice [linux]: 1

All available linux_dev:
   0. bsp
   1. buildroot
   2. openwrt
Choice [buildroot]: 1

All available ic:
   0. t113_s4
Choice [t113_s4]: 0

All available board:
   0. 100ask
   1. 100ask_linux5_10
Choice [100ask]: 0

All available flash:
   0. default
   1. nor
Choice [default]: 0
```

---

## 编译固件

配置完成后，执行编译：

```bash
./build.sh
```

**编译内容：**
- Bootloader（U-Boot）
- Linux 内核
- Buildroot 根文件系统
- C906 RTOS（RISC-V 核心固件）

> **提示**：首次编译耗时约 30～90 分钟，具体取决于电脑性能。

### 常用编译命令

| 命令 | 说明 |
|:---|:---|
| `./build.sh` | 编译所有内容 |
| `./build.sh bootloader` | 仅编译 U-Boot |
| `./build.sh kernel` | 仅编译内核 |
| `./build.sh buildroot_rootfs` | 仅编译 Buildroot |
| `./build.sh menuconfig` | 配置内核 |
| `./build.sh buildroot_menuconfig` | 配置 Buildroot |
| `./build.sh clean` | 清理编译产物 |
| `./build.sh distclean` | 彻底清理 |

### 快捷目录切换命令

| 命令 | 切换至 |
|:---|:---|
| `croot` | SDK 根目录 |
| `cboot` | U-Boot 目录 |
| `ckernel` | Linux 内核目录 |
| `cbr` | Buildroot 目录 |
| `cdts` | 内核设备树目录 |
| `cout` | 产品输出目录 |

---

## 打包固件

编译完成后，执行打包：

```bash
./build.sh pack
```

打包完成后，进入镜像输出目录：

```bash
cout
```

生成的固件镜像位于该目录下，可用于烧录到开发板。

---

## 烧录固件

参考《快速入门》中的「更新系统固件」章节进行烧录。
