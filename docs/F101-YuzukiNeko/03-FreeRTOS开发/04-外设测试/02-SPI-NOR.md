---
sidebar_position: 2
sidebar_label: SPI NOR
description: 核对 16MB SPI NOR 的分区、文件系统和环境变量，并做读写检查。
---

# SPI NOR 测试

板载 SPI NOR 16MB，接在 SPI0/SPIF（PC0–PC5）。下面的分区表示例来自当前 SDK 默认的 16MB NOR 方案，**以实际烧录的镜像为准**。

| 验证项 | 通过判据 |
|:---|:---|
| 容量 | `part_info` 中 `nor` 总大小为 `0x1000000`（16MB） |
| 分区 | 能列出 `boot0`、`env`、`env-redund`、`bootA`、`res`、`UDISK` |
| 挂载 | `/res` 和 `/data` 都能 `ls` 出内容 |
| 读写 | 往 `/data` 写文件再读回，内容一致 |
| 掉电保留 | 重新上电后文件仍在 |

## 查看分区

```bash
adb shell part_info
```

默认 16MB NOR 镜像的示例：

```text
blkpart: nor             (nor0    ):bytes 0x1000000         off 0x0
blkpart: boot0           (nor0p1  ):bytes 0xc0000           off 0x0
blkpart: env             (nor0p2  ):bytes 0x10000           off 0xc0000
blkpart: env-redund      (nor0p3  ):bytes 0x10000           off 0xd0000
blkpart: bootA           (nor0p4  ):bytes 0x240000          off 0xe0000
blkpart: res             (nor0p5  ):bytes 0x80000           off 0x320000
blkpart: UDISK           (nor0p6  ):bytes 0xc60000          off 0x3a0000
```

各段的含义：

| 分区 | 大小 | 用途 |
|:---|:---|:---|
| `boot0` | 768KB（含 boot0、boot_param、U-Boot、GPT） | 引导链，由 `pack` 从 `board/f101s3/yuzukineko/bin/` 的 boot 文件写入 |
| `env` / `env-redund` | 各 64KB | U-Boot 环境变量，**一份主一份备份**，损坏时可用另一份恢复 |
| `bootA` | 2304KB | RTOS 固件本体（`rtos_pkg_nor.fex`），`boot_partition=bootA` 就从这里启动 |
| `res` | 512KB | 资源分区，只读性质，挂载在 `/res` |
| `UDISK` | 12672KB | 用户分区，挂载在 `/data`，可读写 |

分区大小都在 `board/f101s3/yuzukineko/configs/sys_partition_nor.fex` 里定义，位置说明见 [工程介绍](../00-工程介绍.md)。

## 查看挂载和文件系统

```bash
adb shell df
adb shell ls /res
adb shell ls /data
```

| 挂载点 | 分区 | 文件系统 | `df` 应显示 |
|:---|:---|:---|:---|
| `/res` | res | elmfat | 略小于分区容量（含文件系统开销） |
| `/data` | UDISK | littlefs | 与分区大小一致或接近 |

两个挂载点用的是**不同的文件系统**：`/res` 由 `elmfat_mount_spinor()` 挂载，`/data` 由 `littlefs_mount()` 挂载。这也是为什么 `df` 里两个数字的口径不完全一样。

## 读写验证

先做一次不掉电的读写：

```bash
adb shell echo nor-rw-test /data/nor_test.txt
adb shell cat /data/nor_test.txt
```

板端 `echo` 的用法是 `echo 字符串 文件名`，不是 Linux 的 `>` 重定向。读回来的内容和写入的一致即通过。

再做掉电保留验证：**拔掉 Type-C 或断电，重新上电，再读一次**：

```bash
adb shell cat /data/nor_test.txt
```

内容还在，说明 NOR 用户分区可读写且掉电保留。

想直接对 NOR 做读写校验，固件里有一个专门命令：

```bash
adb shell help | grep -i spinor
adb shell spinor_rwcheck
```

:::tip 命令名以设备为准

命令是随固件裁剪的，不同配置下注册的命令不一样。先用 `adb shell help` 看当前固件实际有哪些命令，再执行。

:::

## 环境变量

```bash
adb shell fw_printenv
```

默认镜像里常见的项：

```text
boot_partition=bootA
ota_result=success
bootcmd=sunxi_flash read 0x40800000 ${boot_partition}; boot_rtos 0x40800000 0x40010000
```

`boot_partition=bootA` 表示从 RTOS 分区启动。具体键值以 `adb shell fw_printenv` 的输出为准，默认来自 `board/f101s3/yuzukineko/configs/env_nor.cfg`。

:::danger 不要随意擦除

`part_erase` 会把分区内容擦掉。`env` 有备份分区，但 `bootA` 和 `boot0` 擦掉之后板子就起不来了，需要重新进 FEL 烧录才能恢复。要验证读写，用上面的 `/data` 文件测试或 `spinor_rwcheck`，不要用擦除。

:::

## 出问题怎么查

| 现象 | 可能原因 | 处理 |
|:---|:---|:---|
| `part_info` 列不出分区 | 固件不对或 flash 初始化失败 | 确认烧的是 YuzukiNeko 的 16MB NOR 镜像；`df` 看是否挂载成功 |
| `/data` 写不进去 | 空间满或挂载失败 | `adb shell df` 看剩余空间 |
| 掉电后文件丢了 | 写到了非持久化路径 | 确认写在 `/data` 下，而不是 `/tmp` 之类 |
| NOR 读写校验失败 | 硬件或供电问题 | 换 USB 口/线保证供电稳定，重试 |
