---
sidebar_position: 1
sidebar_label: 单板介绍
description: YuzukiNeko F101 是什么、板上有什么、怎么开始用。原理图以 V1.4 为准。
slug: /F101-YuzukiNeko/
hide_title: true
---

import boardHero from './images/f101-yuzukineko.png';

<div
  style={{
    background: 'linear-gradient(180deg, #ffdcc8 0%, #eaf5fc 52%, #f7fbfe 100%)',
    margin: '0 0 1.6rem',
    padding: '1.4rem 1.2rem 0',
  }}>
  <h1 style={{color: '#122b69', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2, margin: '0 0 0.55rem'}}>YuzukiNeko F101</h1>
  <p style={{color: '#1a3a63', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 1rem'}}>
    全志 F101（sun252iw2）· 玄铁 C907 RV32 · FreeRTOS。16MB SPI NOR 启动，Type-C 烧录和 ADB 调试。
  </p>
  <img src={boardHero} alt="YuzukiNeko F101" style={{display: 'block', width: '100%'}} />
</div>

YuzukiNeko 是一块面向显示、人机交互和实时控制的 F101 开发板。本文档当前覆盖 **FreeRTOS SDK**。Linux、Zephyr 源码已公开，文档见 [Linux 开发](./04-Linux开发/00-Overview.md)、[Zephyr 开发](./05-Zephyr开发/00-Overview.md)。

原理图以 **V1.4** 为准。V1.3 从 PD10 起网络名写偏了两号，对照见 [排针 GPIO](./03-FreeRTOS开发/04-外设测试/04-GPIO.md)。

## 规格

| 项目 | 规格 |
|:---|:---|
| 芯片 | 全志 F101 / sun252iw2p1 |
| CPU | 玄铁 C907，RV32 |
| 系统 | FreeRTOS 10.4.3（Tina-RT） |
| 存储 | SPI NOR 16MB（PY25Q128HA），同时提供 `/res`、`/data` |
| 调试 | USB Type-C，CherryUSB ADB |
| 晶振 | 24MHz |

## 板载资源

| 资源 | 说明 |
|:---|:---|
| Type-C（J3） | 烧录（FEL）和 ADB，走 `USB_DP` / `USB_DM` |
| SPI NOR（U8） | 启动介质与用户分区 |
| MicroSD（U9） | TF 卡槽，SDC0 |
| H1 / H2 | 2×20 排针，引出 GPIO、GPADC、HPOUT、3V3、GND |
| HPOUT | 模拟耳机输出 |
| LED1 | 电源指示，上电常亮，**不能用软件控制** |
| FEL 键 | 进烧录模式。板上没有复位键，重新上电靠拔插 Type-C |

引脚明细、复用和占用情况不在本页展开，见 [排针 GPIO](./03-FreeRTOS开发/04-外设测试/04-GPIO.md)。

## 使用注意

- 板上没有独立的调试串口座。日常看打印、敲命令用 Type-C 上的 **ADB**。需要串口时，排针是 H2-11（PB0/TX）、H2-10（PB1/RX），115200；SDK 默认把 UART1 配到这两脚。它们和 Type-C SBU 同源，插着数据线时串口可能有干扰。
- LED1 是电源指示，上电常亮，不能用软件控制。
- 板上没有复位键。需要重新上电时拔掉 Type-C 再插上。进 FEL 是按住 FEL 键再重新上电。

装驱动、进 shell 的步骤见 [启动开发板](./03-FreeRTOS开发/03-快速上手/01-QuickStart.md)。

## 从这里开始

| 目标 | 路径 |
|:---|:---|
| 只想先把板子跑起来 | [资料获取](./02-资料获取.md) → [安装 USB 驱动](./03-FreeRTOS开发/02-系统烧录/01-UsbDriver.md) → [更新系统固件](./03-FreeRTOS开发/02-系统烧录/02-FlashSystem.md) → [启动开发板](./03-FreeRTOS开发/03-快速上手/01-QuickStart.md) |
| 要改代码、自己编译 | [工程介绍](./03-FreeRTOS开发/00-工程介绍.md) → [环境搭建](./03-FreeRTOS开发/01-环境搭建/01-HostEnv.md) → [编译与打包](./03-FreeRTOS开发/01-环境搭建/02-Build.md) |

SDK 目录、lunch 工程名和板级配置位置写在 [工程介绍](./03-FreeRTOS开发/00-工程介绍.md)。
