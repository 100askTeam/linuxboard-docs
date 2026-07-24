---
sidebar_position: 11
sidebar_label: PWMCS
description: PWM 捕获接口与使用。
toc_max_heading_level: 3
---

# PWMCS

:::info 文档说明

- **原始页数：** 13 页
- **原始文件：** [查看或下载 PDF](/pdfs/T153MX/10-pwmcs.pdf)

正文按原始 PDF 的文本层、书签层级和页面顺序转换，仅移除重复页眉、页脚与水印，不改写技术内容。

:::

<!-- PDF page 4 -->

## 1 前言

### 1.1 文档简介

介绍HAL_V2 中PWMCS 驱动的接口及使用方法，为PWMCS 使用者提供参考。

### 1.2 目标读者

PWMCS 驱动的开发/维护人员。

### 1.3 适用范围

表1-1: 适用产品列表

| 产品名称 | 内核版本 | 驱动文件 |
| --- | --- | --- |
| T153 | FreeRTOS | hal_pwmcs.c |

### 1.4 文档约定

#### 1.4.1 标志说明

注意

- 提醒操作中应注意的事项。不当的操作可能会损坏器件，影响可靠性、降低性能等。

说明

为准确理解文中指令、正确实施操作而提供的补充或强调信息。

技巧

一些容易忽视的小功能、技巧。了解这些功能或技巧能帮助解决特定问题或者节省操作时间。

<!-- PDF page 5 -->

### 1.5 相关术语介绍

| 术语 | 解释说明 |
| --- | --- |
| Sunxi | 指Allwinner 的一系列SOC 硬件平台 |
| PWMCS | Pulse Width Modulation Control System 即脉宽调制控制系统 |

<!-- PDF page 6 -->

## 2 模块介绍

### 2.1 模块功能介绍

脉宽调制控制系统（PWMCS）模块支持单端、AB 相、脉冲+ 方向、CW/CCW 等波形输出，支持输入波形捕获功能用于检测输入脉冲信号。系统域共有2 套PWMCS，最大支持16 个独立输出通

6 个独立捕获通道。

说明

halv2 pwmcs 驱动仅支持单端波形输出。

### 2.2 模块配置介绍

menuconfig 配置项

Drivers V2 Config ---&gt;PWMCS Driver ---&gt;

```text
[*] enable pwmcs driver
enablepwmcshalAPIstestcommand
```

### 2.3 模块源码结构

1. 驱动源码

```text
hal_v2/hal/source/pwmcs/
├──common_pwmcs.h
├──hal_pwmcs.c
├──Kconfig
├──Makefile
├──platform
│   └──pwmcs_sun8iw22.h
└──platform_pwmcs.h
```

2. 驱动APIs 声明头文件

```text
hal_v2/include/hal/
└──hal_pwmcs.h
```

3. 驱动APIs 测试代码

<!-- PDF page 7 -->

```text
hal_v2/hal/examples/pwmcs/
├──Makefile
└──pwmcs_cycle_mode
 ├──Makefile
 └──pwmcs_cycle_mode.c
```

<!-- PDF page 8 -->

## 3 模块接口说明

### 3.1 hal_pwmcs_init

- 原型：pwm_status_t hal_pwmcs_init(hal_pwmcs_port_t port,uint32_t channel,

pwmcs_config_t *pwm_config);

能：pwmcs 初始化

- 参数：

-port：pwm 端口号-channel：通道号-pwm_config：初始化结构体指针

- 返回值：

-0：成功--1：失败

### 3.2 hal_pwmcs_channel_enable

- 原型：int hal_pwmcs_channel_enable(hal_pwmcs_port_t port, uint32_t channel);

- 功能：pwm 通道使能

- 参数：

-port：pwm 端口号-channel：通道号

- 返回值：

-0：成功--1：失败

### 3.3 hal_pwmcs_channel_disable

- 原型：int hal_pwmcs_channel_disable(hal_pwmcs_port_t port, uint32_t channel);

- 功能：关闭pwm 通道

- 参数：

<!-- PDF page 9 -->

-port：pwm 端口号-channel：通道号

- 返回值：

-0：成功--1：失败

<!-- PDF page 10 -->

## 4 模块使用范例

可参考驱动APIs 测试代码（hal_v2/hal/examples/pwmcs/）：

```c
#ifdef CONFIG_KERNEL_BAREMETAL
#include <include.h>
#else
#include <sunxi_hal_common.h>
#endif
de<hal_gpio.h>
#include <hal_reset.h>
#include <hal_clk.h>
#include <hal_pwmcs.h>
static int pwm_clk_init(void)
{
 int ret;
 hal_rst_t rst;
 rst_number_t rst_num;
 hal_clk_t clk;
 clk_number_t clk_num;
 rst_num = MAKE_RSTn(AW_SYS_CCU, RST_BUS_PWMCS0);
 clk_num = MAKE_CLKn(AW_SYS_CCU, CLK_PWM0);
```

tf("resetinfo,rst_num:%u,rc_id:%u,rst_id:%u\\n",rst_num,RC_ID(rst_num),RST_ID(rst_num));

printf("clk info, clk_num: %u, cc_id: %u, clk_id: %u\\n", clk_num, CC_ID(clk_num), CLK_ID(clk_num));

```text
ret = hal_rst_get_by_rst_num(rst_num, &rst);
if (ret) {
 printf("get reset handle failed, rst_num: %u, ret: %d\n", rst_num, ret);
 return -1;
}
ret = hal_n_clk_get_by_clk_num(clk_num, &clk);
if (ret) {
 printf("get clk(%u) failed, ret: %d\n", clk_num, ret);
 return -1;
}
ret = hal_rst_deassert(rst);
if (ret) {
 printf("deassert reset failed, rst_num: %u, ret: %d\n", rst_num, ret);
 ret = -2;
 goto exit_with_put_rst;
}
ret = hal_n_clk_enable(clk);
if (ret) {
 printf("enable clk(%u) failed, ret: %d\n", clk_num, ret);
 ret = -2;
 goto exit_with_put_clk;
}
```

<!-- PDF page 11 -->

```text
printf("deassert reset success, rst_num: %u\n", rst_num);
tf("enableclk(%u)success\n",clk_num);
ret = 0;
```

exit_with_put_clk:hal_n_clk_put(clk);

exit_with_put_rst:

```c
hal_rst_put(rst);
 return ret;
}
void pwmcs_cycle_mode(void)
{
 /* pwm clk init */
m_clk_init();
 /* pwmcs0_0 PB8 init */
 gpio_init_t gpio_initstruct;
 gpio_initstruct.port = SUNXI_GPIO_B;
 gpio_initstruct.port_num = PIN_8;
 gpio_initstruct.mul_sel = GPB_PWM0;
 hal_gpio_init(&gpio_initstruct);
 pwmcs_config_t pwmcs_initstruct;
 pwmcs_initstruct.output_mode = PWM_MODE_SINGLE;
 pwmcs_initstruct.period_ns = 25000;
 pwmcs_initstruct.duty_ns = 7125;
 pwmcs_initstruct.pulse_num = 0;
 pwmcs_initstruct.polarity = PWM_POLARITY_NORMAL;
pwmcs_init(HAL_CPUX_PWMCS0,0,&pwmcs_initstruct);
 /* enable pwm2_8 and ouput waveform */
 hal_pwmcs_channel_enable(HAL_CPUX_PWMCS0, PWM_CHANNEL_0);
 /* output 5s */
 udelay(5 * 1000 * 1000);
 /* disable pwm0_0 */
 hal_pwmcs_channel_disable(HAL_CPUX_PWMCS0, PWM_CHANNEL_0);
}
```

<!-- PDF page 12 -->

## 5 FAQ

无

<!-- PDF page 13 -->

权声明

本文档及内容受著作权法保护，其著作权由珠海全志科技股份有限公司（“全志”）拥有并保留一切权利。

本文档是全志的原创作品和版权财产，未经全志书面许可，任何单位和个人不得擅自摘抄、复制、修改、发表或传播本文档内容的部分或全部，且不得以任何形式传播。

商标声明

、

、

、

（不完全列

举）均为珠海全志科技股份有限公司的商标或者注册商标。在本文档描述的产品中出现的其它商标，产品名称，和服务名称，均由其各自所有人拥有。

免责声明

您购买的产品、服务或特性应受您与珠海全志科技股份有限公司（“全志”）之间签署的商业合同和条款的约束。本文档中描述的全部或部分产品、服务或特性可能不在您所购买或使用的范围内。使用前请认真阅读合同条款和相关说明，并严格遵循本文档的使用说明。您将自行承担任何不当使用行为（包括但不限于如超压，超频，超温使用）造成的不利后果，全志概不负责。

本文档作为使用指导仅供参考。由于产品版本升级或其他原因，本文档内容有可能修改，如有变

恕不另行通知。全志尽全力在本文档中提供准确的信息，但并不确保内容完全没有错误，因

使用本文档而发生损害（包括但不限于间接的、偶然的、特殊的损失）或发生侵犯第三方权利事件，全志概不负责。本文档中的所有陈述、信息和建议并不构成任何明示或暗示的保证或承诺。

本文档未以明示或暗示或其他方式授予全志的任何专利或知识产权。在您实施方案或使用产品的过程中，可能需要获得第三方的权利许可。请您自行向第三方权利人获取相关的许可。全志不承担也不代为支付任何关于获取第三方许可的许可费或版税（专利税）。全志不对您所使用的第三方许可技术做出任何保证、赔偿或承担其他义务。
