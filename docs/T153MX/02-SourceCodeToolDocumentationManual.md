---
sidebar_position: 2
sidebar_label: 源码、工具与手册
---

# 源码、工具与手册

本页面汇总 OmniGate-T153 开发所需的 SDK、板级适配、烧录工具和参考资料。

## 基础 SDK

- 网盘文件夹：`DshanPI-OminiGate_T153MX`
- 下载链接：[百度网盘](https://pan.baidu.com/s/1ai6yzYs5ujDba-luz-JeXw)
- 提取码：`6mtk`

下载并解压后，能同时看到 `build/envsetup.sh`、`build.sh`、`device/`、`kernel/` 和 `buildroot/` 的目录才是 SDK 根目录。

## OmniGate 板级适配

- 板级仓库：[T153MX-Tina5SDK_OmniGate](https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate)
- 编译方案：`t153_omnigate_mmc-buildroot`
- Linux：5.10.198
- Buildroot：2022.05

基础 SDK 和板级适配不是同一份资料。先准备完整 SDK，再按仓库说明应用 OmniGate overlay。

## 烧录和串口工具

| 主机 | 工具 | 用途 |
| --- | --- | --- |
| Ubuntu | SDK `tools/OpenixCLI/openixcli` | 扫描设备、检查镜像、烧录 |
| Windows | PhoenixSuit | 全志完整镜像烧录 |
| Ubuntu | picocom/minicom | UART0 串口终端 |
| Windows | MobaXterm/PuTTY | UART0 串口终端 |

## 硬件资料

OmniGate-T153 原理图、位号图和不同批次 BOM：`TODO: 待补充发布链接`。

在链接补齐前，CAN、RS485、4G、显示和摄像头的具体连接器脚位以随板资料和 PCB 丝印为准，不从相似型号推断。

## 文档入口

- [快速启动](./part1/01-QuickStart.md)
- [板载功能体验](./part2/01-Ethernet.md)
- [Tina SDK 开发](./part3/01-DevelopmentEnvironmentSetup.md)
- [应用开发](./part4/01-HelloWorld.md)
- [进阶专题](./part5/01-USB.md)
