---
sidebar_position: 3
sidebar_label: 源码、工具与手册
description: OmniGate-T153 SDK、板级适配、烧录工具和硬件资料的统一下载入口。
---

# 源码、工具与手册

本页集中列出 OmniGate-T153 开发需要的 SDK、适配包、烧录工具和硬件资料。先根据目标选择资料，
不必一次下载全部内容。

| 本页适用环境 | 软件基线 |
| --- | --- |
| Ubuntu 24.04 LTS x86_64 | Tina Linux 5.0、Linux 5.10、Buildroot 2022.05 |

## 先确认你要做什么

| 目标 | 需要准备 | 可以暂不下载 | 下一步 |
| --- | --- | --- | --- |
| 体验板卡 | 已打包的 `.img` 固件、烧录工具 | 完整 SDK、硬件设计资料 | [更新系统固件](./part1/02-FlashSystem.md) |
| 修改驱动或系统 | Tina 5.0 基础 SDK、OmniGate 适配包 | 与当前任务无关的原厂手册 | [SDK 环境与编译](./part3/01-DevelopmentEnvironmentSetup.md) |
| 调试或设计硬件 | 当前批次原理图、BOM、模块规格书 | 完整 SDK（仅接线检查时） | 先核对接口、电平和引脚复用 |

:::tip 先建立统一工作目录

推荐在 Ubuntu 24.04 主机建立统一工作目录，后续文档都按这个布局举例：

```bash
mkdir -p "$HOME/T153-workspace"
cd "$HOME/T153-workspace"
pwd
```

预期最后输出类似 `/home/你的用户名/T153-workspace`。

:::

## 下载清单

| 资料 | 是否必需 | 用途 |
| --- | --- | --- |
| Tina 5.0 基础 SDK | 修改系统时必需 | 编译 U-Boot、Linux、Buildroot 和 E907 固件 |
| OmniGate overlay | 必需 | 加入当前板卡设备树、驱动、根文件系统和离线依赖 |
| [默认系统固件](https://dl.100ask.net/Hardware/MPU/OmniGate-T153/images/) | 只体验板卡时必需 | 不编译 SDK 也能直接烧录 |
| OpenixCLI 或 PhoenixSuit | 烧录时二选一 | 把 `.img` 写入板载 eMMC |
| 原理图和模块规格书 | 调试硬件时必需 | 确认接口、电平、复用和供电 |

## 默认系统固件

只需要体验或恢复板卡时，不必先下载和编译整套 SDK。从下面的公开目录下载默认固件：

- 下载目录：[OmniGate-T153 默认固件](https://dl.100ask.net/Hardware/MPU/OmniGate-T153/images/)
- 固件压缩包：`t153_linux_omnigate_DefaultSystem.7z`

在 Ubuntu 主机下载并解压：

```bash
sudo apt install -y p7zip-full
mkdir -p "$HOME/OmniGate-T153/firmware"
cd "$HOME/OmniGate-T153/firmware"
wget -c https://dl.100ask.net/Hardware/MPU/OmniGate-T153/images/t153_linux_omnigate_DefaultSystem.7z
7z x t153_linux_omnigate_DefaultSystem.7z -oDefaultSystem
find "$PWD/DefaultSystem" -type f -name '*.img' -print
```

最后一条命令应显示一个可烧录的完整 `.img` 固件。下载中断时重新执行 `wget -c` 会继续传输，
不需要从头下载。解压完成后继续按[更新系统固件](./part1/02-FlashSystem.md)操作。

## 基础 SDK

- 网盘文件夹：`DshanPI-OminiGate_T153MX`
- 下载链接：[百度网盘](https://pan.baidu.com/s/1ai6yzYs5ujDba-luz-JeXw)
- 提取码：`6mtk`

下载并解压后，能同时看到 `build/envsetup.sh`、`build.sh`、`device/`、`kernel/` 和 `buildroot/` 的目录才是 SDK 根目录。

本文实测工作区的 SDK 根目录是：

```text
/home/ubuntu/T153_Tina5SDK-V1
```

路径只是示例，不要求所有用户完全相同；后续命令必须先 `cd` 到自己实际的 SDK 根目录。

下载完成后建议记录压缩包校验值，避免后续误用损坏或不同版本的 SDK：

```bash
sha256sum <下载的SDK压缩包>
```

## OmniGate 板级适配

- 板级仓库：[T153MX-Tina5SDK_OmniGate](https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate)
- 编译方案：`t153_omnigate_mmc-buildroot`
- Linux：5.10.198
- Buildroot：2022.05

基础 SDK 和板级适配不是同一份资料。先准备完整 SDK，再按仓库说明应用 OmniGate overlay。

推荐把二者放在同一级目录：

```text
~/workspace/
├── T153_Tina5SDK-V1/              完整 SDK
└── T153MX-Tina5SDK_OmniGate/      板级 overlay
```

进入 SDK 根目录后应用 overlay：

```bash
../T153MX-Tina5SDK_OmniGate/scripts/apply_overlay.sh "$PWD"
```

脚本会先校验 overlay 中的文件和预置离线源码包。看到校验通过后，再执行 SDK 配置和编译。

## 烧录和串口工具

| 主机 | 工具 | 用途 |
| --- | --- | --- |
| Ubuntu | [OpenixCLI](https://github.com/YuzukiTsuru/OpenixCLI) | 扫描设备、检查镜像、烧录 |
| Windows | [PhoenixSuit](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnertechPhoeniSuit.zip) | 全志完整镜像烧录 |
| Windows | [全志 USB 烧录驱动](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnerUSBFlashDeviceDriver.zip) | 让 Windows 识别 FEL/FES 设备 |
| Ubuntu | picocom/minicom | UART0 串口终端 |
| Windows | MobaXterm/PuTTY | UART0 串口终端 |

:::info OpenixCLI 是单独的项目

当前 Tina SDK 不自带 `tools/OpenixCLI/openixcli`。请使用预编译版本，或在 Ubuntu 安装 Rust 和
`libusb-1.0-0-dev` 后，从源码执行 `cargo build --release`。生成的程序位于
`target/release/openixcli`。

:::

在 Ubuntu 上准备源码版 OpenixCLI：

```bash
sudo apt install -y build-essential pkg-config libusb-1.0-0-dev cargo
git clone https://github.com/YuzukiTsuru/OpenixCLI.git
cd OpenixCLI
cargo build --release
./target/release/openixcli --help
```

若所在网络无法访问 GitHub，应由交付方提前提供 overlay 和 OpenixCLI 压缩包，不要在客户现场
临时依赖外网下载。OmniGate overlay 已包含当前 4G Buildroot 软件包使用的离线源码归档。

## 硬件资料

OmniGate-T153 原理图、位号图和不同批次 BOM 随对应硬件批次提供。CAN、RS485、4G、显示和
摄像头的具体连接器脚位必须以随板资料和 PCB 丝印为准，不从相似型号推断。公开资料与手中板卡
批次不一致时，先向板卡提供方确认版本。

## 下载完成后的自检

在 **SDK 根目录** 执行：

```bash
test -f build/.tinatopdir && echo 'SDK root: OK'
test -f device/config/chips/t153/configs/omnigate/buildroot/BoardConfig.mk \
  && echo 'OmniGate overlay: OK'
test -x ../T153MX-Tina5SDK_OmniGate/scripts/verify_overlay.sh \
  && echo 'Overlay verifier: OK'
```

三项都通过后，再进入[SDK 环境搭建与固件编译](./part3/01-DevelopmentEnvironmentSetup.md)。

一次正常的检查应类似：

```console
ubuntu@ubuntu2404:~/T153_Tina5SDK-V1$ test -f build/.tinatopdir && echo 'SDK root: OK'
SDK root: OK
ubuntu@ubuntu2404:~/T153_Tina5SDK-V1$ test -f device/config/chips/t153/configs/omnigate/buildroot/BoardConfig.mk && echo 'OmniGate overlay: OK'
OmniGate overlay: OK
```

如果第一行没有任何输出，通常是当前目录不对；先执行 `pwd` 和 `ls`，不要急着运行编译命令。

## 文档入口

- [快速启动](./part1/01-QuickStart.md)
- [板载功能体验](./part2/01-Ethernet.md)
- [Tina SDK 开发](./part3/01-DevelopmentEnvironmentSetup.md)
- [应用开发](./part4/01-HelloWorld.md)
- [进阶专题](./part5/01-USB.md)
