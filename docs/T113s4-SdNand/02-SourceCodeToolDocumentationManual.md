#  源码工具文档手册

> 本文档提供 T113s4-SdNand 开发板所需的芯片手册、原理图、SDK 源码等开发资源下载链接。

---

## 📚 硬件资料

### 原理图与位号图

| 资料名称 | 下载链接 |
|:---|:---|
| 📐 开发板底板原理图（V1.3） | [PDF 下载](https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/100ASK_T113-Pro_Base-SCH_V1.3.pdf) |
| 📐 开发板底板位号图（V1.3） | [PDF 下载](https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/100ASK_T113-Pro_Base-BitMAP_V1.3.pdf) |

> **说明**：T113s4-SdNand 底板规格与 T113s3-PRO V1.3 一致，因此共用同一套原理图和位号图。

---

## 📖 芯片手册

| 资料名称 | 下载链接 |
|:---|:---|
| 📋 T113-S3 芯片规格书（简要版） | [PDF 下载](https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/t113-s3_brief.pdf) |
| 📋 T113-S3 芯片数据手册（完整版） | [PDF 下载](https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/T113-s3_datasheet_v1.6.pdf) |

> **说明**：T113s4 基于 T113s3 架构，增加了 C906 RISC-V 核心和 256MB 内存，芯片引脚和基础外设与 T113s3 兼容。

---

## 💻 SDK 源码

### Tina5 SDK

T113s4-SdNand 使用 **Tina5 V1.2 SDK**（Buildroot 构建系统）。

| 资源名称 | 链接 |
|:---|:---|
| 🔧 T113s4-SdNand 扩展补丁 | [GitHub 仓库](https://github.com/DongshanPI/T113S3-PRO_TinaSDK5) |
| 📦 Tina5 SDK 基础包 | [论坛下载](https://forums.100ask.net/t/topic/7393) |

### SDK 说明

- **Tina5 SDK 基础包**：全志官方提供的 Tina5 基础 SDK，包含 U-Boot、Linux 内核、Buildroot 构建系统等核心组件
- **扩展补丁仓库**：针对 T113s4-SdNand 开发板的适配补丁，包含设备树、WiFi 驱动、应用示例等

### 获取与使用

1. 从论坛下载 Tina5 SDK 基础包
2. 克隆扩展补丁仓库到 SDK 目录
3. 参考《开发环境搭建》章节完成环境配置
4. 参考《Buildroot 系统构建》章节进行编译打包

---

## 🛠️ 常用开发工具

| 工具名称 | 用途 | 下载链接 |
|:---|:---|:---|
| 全志线刷工具（PhoenixSuit） | 固件烧录 | [下载](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnertechPhoeniSuit.zip) |
| USB 烧录驱动 | FEL 模式烧录驱动 | [下载](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnerUSBFlashDeviceDriver.zip) |
| ADB 工具 | OTG 调试与文件传输 | [下载](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/ADB.7z) |
