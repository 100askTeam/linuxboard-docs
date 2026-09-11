---
sidebar_position: 2
sidebar_label: 编译与打包
description: 选择 f101s3_yuzukineko 工程，编译 FreeRTOS 并 pack 成 16MB NOR 镜像。
---

# 编译与打包

在 Ubuntu / WSL 的 SDK 根目录完成 `lunch`、`m`、`pack`。首次 `lunch` 会解压玄铁工具链（工具链具体在哪、怎么单独调用，见 [工程介绍](../00-工程介绍.md)），之后编译大约只需几分钟。

## 选择工程

必须使用 **bash**：

```bash
cd "$HOME/work/AW-F101/freertos-f101-v1.1"   # 换成你的 SDK 解压目录
source envsetup.sh
lunch_rtos f101s3_yuzukineko
```

成功后终端会打印类似：

```text
RTOS_TARGET_ARCH=riscv
RTOS_TARGET_CHIP=sun252iw2p1
RTOS_TARGET_DEVICE=f101s3
RTOS_PROJECT_NAME=f101s3_yuzukineko
```

YuzukiNeko 的 lunch 名是 `f101s3_yuzukineko`。同芯片还有 `f101s3_evb1` 等工程，那是官方 EVB，引脚和外设和本板不一样。

## 编译 FreeRTOS

```bash
m
```

`m` 等于 `mrtos`。成功标志：

```text
#### make completed successfully
```

产物：

```text
lichee/rtos/build/f101s3_yuzukineko/img/rt_system.elf
lichee/rtos/build/f101s3_yuzukineko/img/rt_system.bin
board/f101s3/yuzukineko/bin/freertos.fex
```

清掉重编：

```bash
mrtos clean
m
```

改内核/组件配置：

```bash
mrtos_menuconfig
m
```

## 打包镜像

```bash
pack
```

成功后会打印 `Dragon execute image.cfg SUCCESS !` 和 `pack finish`。镜像路径：

```text
out/f101s3/yuzukineko/rtos_freertos_f101s3_uart0_16Mnor.img
```

这是给 16MB NOR 用的镜像，文件大小以实际生成为准。检查：

```bash
ls -lh out/f101s3/yuzukineko/rtos_freertos_f101s3_uart0_16Mnor.img
```

`pack` 脚本末尾如果没有 `post-dragon` 钩子，退出码可能是 1，只要已经生成 `.img` 并且日志里有 `pack finish`，镜像可以用。

`mboot` / `muboot` 用于重编 boot0 和 U-Boot。板级 `board/f101s3/yuzukineko/bin/` 里已有现成 boot 文件，日常改应用一般只需要 `m` 和 `pack`。

:::info 改了板级配置也要重新打包烧录

引脚、分区、环境变量这些配置在 `board/f101s3/yuzukineko/configs/` 下的 `.fex` 和 `.cfg` 文件里，它们是**打包进镜像**的。所以改完必须 `m` → `pack` → 重新烧录才会生效，只重新上电不会生效。

各配置文件分别管什么、在哪个目录，见 [工程介绍](../00-工程介绍.md)。

:::

编好后按 [系统烧录](../02-系统烧录/02-FlashSystem.md) 写入板卡。
