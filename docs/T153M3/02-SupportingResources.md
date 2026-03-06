---
sidebar_position: 2
---

# 源码工具文档手册

## 手册文档工具

TinaSDK开发文档：https://tina.100ask.net/

开发板使用文档：https://allwinner-docs.100ask.net/

**教程示例:**

一板懂百板通：https://www.bilibili.com/video/BV1Nx4y1w7AF/?spm_id_from=333.999.0.0

T113 LVGLUI开发：https://www.bilibili.com/video/BV1a94y1X7gP/?spm_id_from=333.999.0.0

### 硬件文件
📙T113s3-Pro V1.3 核心板部分原理图：

    https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/100ASK_T113-Pro_Core-SCH_V1.2-OPEN.pdf

📙T113s3-Pro V1.3 开发板底板原理图: 

    https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/100ASK_T113-Pro_Base-SCH_V1.3.pdf

📙T113s3-Pro V1.3 核心板AD封装库: 

    https://dl.100ask.net/Hardware/MPU/T113s3-Industrial/T113s3_Core-PCB-AD_PackageLibrary.zip


### 芯片手册
📙T113-S3 芯片规格书: 

    http://dl.100ask.net/Hardware/MPU/100ask_t113-pro/t113-s3_brief.pdf

📙T113-S3 芯片数据手册: 

    http://dl.100ask.net/Hardware/MPU/100ask_t113-pro/T113-s3_datasheet_v1.6.pdf

📙T113-S3 芯片CPU开发手册: 

    https://www.100ask.net/hard/parameter/100ASK_T113-PRO_Introduce

### Tina-SDK源码

注意甄别以下SDK版本，t113s3-pro(xr829版本wifi5)目前仅支持 tina4，t113s3-pro(aic8800d80版本wifi6)支持 tina4 和 tina5 。

> 区别：简单来说，使用tina5，就可以用上buildroot。

#### Tina4
📙Tina4-SDK 源码网盘链接：https://pan.baidu.com/s/13uKlqDXImmMl9cgKc41tZg?pwd=qcw7

📙T113s3-Pro 开发板扩展补丁`(仅支持 tina4sdk)`： https://github.com/DongshanPI/100ASK_T113-Pro_TinaSDK

#### Tina5
📙Tina5-SDK 源码网盘链接：https://pan.baidu.com/s/1A_HER2QyTk0BIVxOuGoAyQ?pwd=n8ii

📙T113s3-Pro 开发板扩展补丁`(仅支持 tina5sdk)`：https://github.com/DongshanPI/100ASK_T113-PRO_TinaSDK5