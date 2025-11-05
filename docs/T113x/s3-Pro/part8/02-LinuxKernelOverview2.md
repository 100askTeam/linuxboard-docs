---
sidebar_position: 3
---
# 如何启动Kernel

## 如何启动Kernel

## 3. 如何启动Kernel

启动 Linux 内核通常是由引导加载程序（Boot Loader）来完成的。引导加载程序负责加载内核镜像并将控制权转交给内核，从而启动操作系统。以下是一般情况下 Linux 内核启动的主要步骤：

1. **引导加载程序的配置：**
   - 首先，你需要选择和配置引导加载程序。一些常见的引导加载程序包括 GRUB、LILO、Syslinux  uboot 等。这些引导加载程序有不同的配置文件，用于指定内核的位置和启动参数。
2. **内核镜像的位置：**
   - 内核镜像通常位于系统的引导分区中，例如 `/boot` 目录。引导加载程序需要知道内核的位置以及如何加载它。
3. **引导加载程序加载内核：**
   - 引导加载程序通过读取配置文件，找到内核镜像的位置，然后将内核加载到系统内存中。这通常涉及到加载 `vmlinuz` 或 `bzImage` 文件。
4. **内核初始化：**
   - 一旦内核加载到内存，控制权就会转交给内核。内核开始执行初始化过程，设置硬件、初始化内存管理、加载必要的驱动程序等。
5. **用户空间初始化：**
   - 内核完成初始化后，启动用户空间。通常，第一个用户空间程序是 `/sbin/init` 或 `/usr/lib/systemd/systemd`，它是用户空间的第一个进程。
6. **用户空间初始化完成：**
   - 一旦用户空间初始化完成，系统就会进入可操作状态，用户可以登录并开始使用操作系统。

### 1. 使用uboot引导嵌入式设备

嵌入式设备启动 Linux 内核的过程与常规计算机有些许不同，通常涉及到特定的引导加载程序和启动方式。以下是一个简化的嵌入式 Linux 内核启动过程的步骤：

1. **引导加载程序：**
   - 嵌入式系统通常使用特定的引导加载程序，例如 U-Boot（Universal Boot Loader）或 Barebox。这些引导加载程序能够加载内核映像并配置启动参数。
2. **配置引导加载程序（ENV）：**
   - 在引导加载程序中，需要配置引导命令，指定内核映像的位置、启动参数以及设备树（Device Tree）等信息。这通常在引导加载程序的环境变量中进行配置。
3. **加载设备树（Device Tree）：**
   - 对于许多嵌入式系统，设备树是一个重要的概念。设备树描述了硬件的结构和配置信息，使得相同的内核映像可以在不同的硬件平台上运行。引导加载程序可能会加载设备树文件并传递给内核。
4. **加载内核映像：**
   - 引导加载程序通过网络、存储设备或其他途径加载 Linux 内核映像到内存中。这通常是 zImage 或 Image 文件。
5. **设置启动参数(bootargs)：**
   - 引导加载程序设置启动参数，例如 root 文件系统的位置、内核命令行参数等。这些参数可能包括根文件系统的位置、内核的命令行参数等 。
6. **转交控制权给内核：**
   - 引导加载程序将控制权转交给内核，使得内核可以开始执行。内核初始化过程中会进行硬件初始化、加载驱动程序等操作。
7. **用户空间初始化：**
   - 内核初始化完成后，启动用户空间进程。这可能涉及到使用 init 程序或其他初始化系统(busybox)。
8. **用户空间操作系统启动：**
   - 一旦用户空间初始化完成，操作系统开始运行，用户可以开始使用嵌入式系统(APP)。

因此，典型的启动过程是：

1. 在内存中的地址 X 加载 zImage

2. 在内存中的地址 Y 加载`<board>.dtb`

3. 用bootz X – Y 启动内核（中间的 - 表示没有 initramfs）

### 2. kernel启动命令行参数

Kernel command line是一行字符串，是由内核传递给内核用来启动，通常情况下可以通过设置u-boot内bootargs变量来传递kernel 命令行，它也可以在设备树中定义或者在内核配置 CONFIG_CMDLINE 中进行设置。除了编译时配置外，无需重新编译内核也可以使用命令来设置 kernel command line

内核命令行是一个字符串，它定义了内核的各种参数：

| 参数 | 参数含义                                                  |
| --------- | ------------------------------------------------------------ |
| init=     | 从挂载的根文件系统运行的 init 程序，默认为 /sbin/init。      |
| loglevel= | 将控制台日志级别设置为最高级别 8，以确保您会在控制台上看到所有内核消息。 |
| panic=    | 内核恐慌时的如果大于零，则给出重新启动前的秒数； 如果为零，则永远等待（这是默认值)； 或者如果它小于零，它会立即重新启动。 |
| root= | 挂载根文件系统的设备 |
| console= | 用于内核消息输出的目的地。 |
| quiet= | 将控制台日志级别设置为静默，抑制除紧急消息。由于大多数设备都有串行控制台，因此需要是时候输出所有这些字符串了。减少了使用此选项的消息可减少启动时间。 |
| rdinit= | 从 ramdisk 运行的 init 程序。它默认为 /init |
| ro | 以只读方式安装根设备。对虚拟磁盘没有影响，这始终是读/写。 |
| rootdelay= | 尝试挂载根设备前等待的秒数；默认为零。 |
| rootfstype= | 根设备的文件系统类型。在许多情况下，挂载时会自动检测，但 jffs2 需要文件系统。 |
| rootwait | 无限期等待检测到root设备。通常需要 MMC 设备。 |
| rw | 以读写方式挂载根设备（默认）。 |

例子：`console=ttyS0 root=/dev/mmcblk0p2 rootwait` 更多的配置说明参考内核文档中的 admin-guide/kernel-parameters.txt


Linux 内核命令行是在启动时传递给内核的一组参数，用于配置内核的行为。这些参数通常由引导加载程序传递给内核，并在初始化过程中生效。以下是一些常见的 Linux 内核命令行参数及其用途：

1. **`root=`：**
   - 指定根文件系统的设备或分区。例如，`root=/dev/sda1` 表示根文件系统在 `/dev/sda1` 分区上。
2. **`ro` 和 `rw`：**
   - `ro` 表示以只读模式挂载根文件系统，而 `rw` 表示以读写模式挂载。默认情况下，通常是 `rw`。
3. **`console=`：**
   - 指定系统控制台的位置，例如 `console=ttyS0,115200` 表示使用串口设备作为控制台，波特率为 115200。
4. **`init=`：**
   - 指定用户空间初始化程序的路径。例如，`init=/sbin/init` 指定使用 `/sbin/init` 程序作为第一个用户空间进程。
5. **`single`：**
   - 启动单用户模式，只启动一个 shell 而不启动其他用户空间进程。
6. **`quiet` 和 `splash`：**
   - `quiet` 参数通常用于减少内核启动时的冗长输出，而 `splash` 用于显示启动画面，这两者一般用于改善用户体验。
7. **`vga=xxx`：**
   - 指定 VGA 显示模式，例如 `vga=792` 表示使用 1024x768 分辨率。
8. **`mem=`：**
   - 用于指定系统内存的大小，可以用于限制内核使用的物理内存大小。
9. **`panic=`：**
   - 当系统遇到内核崩溃时，这个参数用于指定内核触发崩溃转储的延迟时间。例如，`panic=10` 表示等待 10 秒后进行转储。
10. **`debug`：**
    - 打开内核调试选项，增加内核输出以进行调试。

这只是一些常见的内核命令行参数，实际使用时可能需要根据具体的需求进行调整。这些参数通常由引导加载程序配置，例如 GRUB 或 U-Boot。要查看系统当前正在使用的内核命令行参数，可以在系统运行时执行以下命令：

```
bashCopy code
cat /proc/cmdline
```

注意：在修改内核命令行参数之前，请确保了解其含义以及对系统的潜在影响，并在必要时备份相关配置。

### 3.启动嵌入式Linux kernel

```shell
U-Boot 2020.01-stm32mp-r1 (May 07 2021 - 08:09:44 +0000)

CPU: STM32MP151AAC Rev.Z
Model: MYIRTECH MYD-YA151C-256D-t Development Board
Board: stm32mp1 in trusted mode (st,stm32mp15xc-ya151c-t)
DRAM:  256 MiB
NAND:  256 MiB
MMC:   STM32 SD/MMC: 0, STM32 SD/MMC: 1
Loading Environment from UBI... Read 8192 bytes from volume uboot_config to cdae8b80
Hit any key to stop autoboot:  0
Boot over nand0!
Scanning ubi 0:...
Found /nand0_extlinux/stm32mp15xc-ya151c-t_extlinux.conf
Retrieving file: /nand0_extlinux/stm32mp15xc-ya151c-t_extlinux.conf
653 bytes read in 32 ms (19.5 KiB/s)
Retrieving file: /splash.bmp
46180 bytes read in 39 ms (1.1 MiB/s)
Retrieving file: /uImage
7957144 bytes read in 1808 ms (4.2 MiB/s)
append: ubi.mtd=UBI rootfstype=ubifs root=ubi0:rootfs rootwait rw console=ttySTM0,115200
Retrieving file: /stm32mp15xc-ya151c-hdmi-t.dtb
70634 bytes read in 38 ms (1.8 MiB/s)
## Booting kernel from Legacy Image at c2000000 ...
   Image Name:   Linux-5.4.31
   Created:      2021-04-21   9:46:03 UTC
   Image Type:   ARM Linux Kernel Image (uncompressed)
   Data Size:    7957080 Bytes = 7.6 MiB
   Load Address: c2000040
   Entry Point:  c2000040
   Verifying Checksum ... OK
## Flattened Device Tree blob at c4000000
   Booting using the fdt blob at 0xc4000000
   XIP Kernel Image
   Loading Device Tree to cdad6000, end cdaea3e9 ... OK
FDT: cpu 1 node remove for STM32MP151AAC Rev.Z
Starting kernel ...

[    0.000000] Booting Linux on physical CPU 0x0
[    0.000000] Linux version 5.4.31 (oe-user@oe-host) (gcc version 9.3.0 (GCC)) #1 SMP PREEMPT Wed Apr 21 09:46:03 UTC 2021
[    0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[    0.000000] CPU: div instructions available: patching division code
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
[    0.000000] OF: fdt: Machine model: MYIR YA15XC-HDMI-T www.myir-tech.com
[    0.000000] Memory policy: Data cache writealloc
[    0.000000] Reserved memory: created DMA memory pool at 0x10000000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node mcuram2@10000000, compatible id shared-dma-pool
[    0.000000] Reserved memory: created DMA memory pool at 0x10040000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node vdev0vring0@10040000, compatible id shared-dma-pool
[    0.000000] Reserved memory: created DMA memory pool at 0x10041000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node vdev0vring1@10041000, compatible id shared-dma-pool
[    0.000000] Reserved memory: created DMA memory pool at 0x10042000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node vdev0buffer@10042000, compatible id shared-dma-pool
[    0.000000] Reserved memory: created DMA memory pool at 0x30000000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node mcuram@30000000, compatible id shared-dma-pool
[    0.000000] Reserved memory: created DMA memory pool at 0x38000000, size 0 MiB
[    0.000000] OF: reserved mem: initialized node retram@38000000, compatible id shared-dma-pool
[    0.000000] cma: Reserved 128 MiB at 0xc5800000
[    0.000000] psci: probing for conduit method from DT.
[    0.000000] psci: PSCIv1.1 detected in firmware.
[    0.000000] psci: Using standard PSCI v0.2 function IDs
[    0.000000] psci: MIGRATE_INFO_TYPE not supported.
[    0.000000] psci: SMC Calling Convention v1.0
[    0.000000] percpu: Embedded 20 pages/cpu s50124 r8192 d23604 u81920
[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 64960
[    0.000000] Kernel command line: ubi.mtd=UBI rootfstype=ubifs root=ubi0:rootfs rootwait rw console=ttySTM0,115200
[    0.000000] Dentry cache hash table entries: 32768 (order: 5, 131072 bytes, linear)

```

## 扩展-如何修改内核配置

- 内核包含数千个设备驱动程序、文件系统、驱动程序、网络协议和其他可配置项。

- 数以千计的选项可供选择，用于有选择地编译部分内核源代码。

- 内核配置是定义 要编译内核选项集的过程。

- 内核选项集取决于 在目标架构和您的硬件上（对于设备驱动程序等）。

- 关于希望赋予内核的功能（网络功能、文件系统、实时等）。 此类通用选项可用于所有架构。

### menuconfig界面

内核源码目录下执行 `make menuconfig`

- menuconfig在没有可用桌面环境时很有用。

- 非常高效的界面。

- 与其他工具相同的界面：BusyBox、Buildroot…

- 支持快捷键，可直接跳转到搜索结果。

- 需要安装 Debian 软件包：libncurses-dev

![image-20240308131750752](images\image-20240308131750752.png)

### linux Kernel Kconfig类型

- 在 Kconfig 文件中定义了不同类型的选项：

  - bool 选项，它们只有 是或者否。

    - true（在内核中包含该功能）。

    - false（从内核中移除该功能）。

  - tristate(三态)选项，它们存在三种类型：

    - true（将此功能包含在内核映像中）。

    - module（将该功能作为内核模块包含在内）。

    - false（从内核中移除该功能）。

  - int 选项，指定整数值。

  - hex(16进制)选项，指定十六进制值。
    - 示例：CONFIG_PAGE_OFFSET=0xC0000000

  - string(字符串)选项，指定字符串值。
    - 示例：CONFIG_LOCALVERSION=-no-network (用于区分从不同选项构建的两个内核)。

内核选项（功能）之间存在依赖关系：

- 例如，启用网络驱动程序需要启用网络堆栈

  - 两种类型的依赖：

    - depends on(依赖某个选项)。 在这种情况下，在启用选项 A 之前，依赖于选项 A 的选项 B 需要先启用。

    - select (选择依赖项)。 在这种情况下，选项 B 取决于选项 A，当启用选项 A 时，选项 B 将会自动启用。 特别对于此类依赖项用于声明硬件架构支持哪些功能。

![image-20240308131818205](images\image-20240308131818205.png)



## 扩展-如何创建自己单板配置

### 创建自己的配置文件

`make  savedefconfig`

这将创建一个最小配置（非默认设置）。

`mv defconfig arch/<arch>/configs/myboard_defconfig`

这样，您可以在内核源代码中共享参考配置，保存为自己的配置文件。

### 自定义新设备树

  首先要做的是为板卡创建一个设备树并对其进行修改以描述 Nova 板卡的附加或更改的硬件。 在这个简单的例子中，我们只需将` am335x-boneblack.dts `复制到 nova.dts 并将模型名称更改为 Nova，如下所示：

``` shell
/dts-v1/;

#include "am33xx.dtsi"
#include "am335x-bone-common.dtsi"
#include "am335x-boneblack-common.dtsi"
/ {
model = "Nova";
compatible = "ti,am335x-bone-black",
"ti,am335x-bone", "ti,am33xx";
};

[…]
```

接下来可以直接在内核源码目录下执行编译设备树命令`make ARCH=arm   nova.dtb`

如果我们希望在选择 AM33xx 目标时通过 make ARCH=arm dtbs 编译 Nova 的设备树，我们可以在 **arch/arm/boot/dts/Makefile** 中添加一个依赖项，如下所示：

``` shell
[…]

dtb-$(CONFIG_SOC_AM33XX) +=
nova.dtb

[…]

```

那么它就会在使用 AM33xx 系列开发板配置时，编译设备树文件自动帮您编译这个设备树镜像。

## 扩展-如何升级Kernel子版本

### 获取源码补丁文件

- 完整的压缩包版本

​	包含完整的内核源代码：下载和解压需要很长时间，但必须至少完成一次。例如4.20内核版本：https://kernel.org/pub/linux/kernel/v4.x/linux-4.20.13.tar.xz 

​	解压命令：tar xf linux-4.20.13.tar.xz

- 版本之间的增量补丁
  - 假设您已经有一个基本版本，并且您按照正确的顺序应用了正确的补丁以升级到下一个版本。那么可以参考快速下载补丁并应用。

​		例子：https://kernel.org/pub/linux/kernel/v4.x/patch-4.20.xz （从 4.19 到 4.20）https://kernel.org/pub/linux/kernel/v4.x/patch-4.20.13.xz  （从 4.20 到 4.20.13）所有以前的内核版本都可以在 https://kernel.org/pub/linux/kernel/

### 查看补丁文件

- 补丁是两个源代码版本之间的差异

- 使用 diff 工具或更复杂的版本控制系统生成

- 它们在开源社区中使用非常普遍。

- 参考 https://en.wikipedia.org/wiki/Diff

补丁摘录：

```shell
diff -Nru a/Makefile b/Makefile
--- a/Makefile 2005-03-04 09:27:15 -08:00
+++ b/Makefile 2005-03-04 09:27:15 -08:00
@@ -1,7 +1,7 @@
VERSION = 2
PATCHLEVEL = 6
SUBLEVEL = 11
-EXTRAVERSION =
+EXTRAVERSION = .1
NAME=Woozy Numbat
\# *DOCUMENTATION*
```

```shell
标题表示每个修改过的文件时间等
diff -Nru a/Makefile b/Makefile
--- a/Makefile 2005-03-04 09:27:15 -08:00
+++ b/Makefile 2005-03-04 09:27:15 -08:00
文件的每个修改部分都有一个子节(大块)，以标题开头，其中会包含修改起始行号和更改大块使用的行数
@@ -1,7 +1,7 @@
更改前的三行内容上下文
VERSION = 2
PATCHLEVEL = 6
SUBLEVEL = 11
更改本身
-EXTRAVERSION =
+EXTRAVERSION = .1
更改后的三行内容上下文
NAME=Woozy Numbat
# *DOCUMENTATION*
```

### patc命令使用

patch 命令：

- 在标准输入上获取补丁内容。

- 将补丁描述的 修改应用到当前目录。

Pacth命令使用示例：

```shell
patch -p <n> < diff_file
cat diff_file | patch -p <n>
xzcat diff_file.xz | patch –p <n>
zcat diff_file.gz | patch –p <n>
```

**注意事项：**

>  n : 文件路径中要跳过的目录级别数。 (-p: prune)

>  您可以使用 -R 选项反向应用补丁。

> 您可以使用 --dry-run 选项测试补丁。

### 应用Linux Patch补丁

两种类型的 Linux 补丁：

- 要么适用于之前的稳定版本（从 x.< y-1 > 至 x.y ）

- 或者对当前稳定版本进行修复（从 x.y 至  x.y.z）

可以下载 gzip 或 xz（小得多）压缩文件。始终为patch -p1 生成。

需要在顶层内核源码目录下运行patch命令。

![image-20240308132347340](images\image-20240308132347340.png)

```she
cd linux-5.7
# From 5.7 to 5.8.6
xzcat ../patch-5.8.xz | patch -p1
xzcat ../patch-5.8.6.xz | patch -p1
# Back to 5.8 from 5.8.6
xzcat ../patch-5.8.6.xz | patch -R -p1
# From 5.8 to 5.8.7
xzcat ../patch-5.8.7.xz | patch -p1
# Renaming directory
cd ..; mv linux-5.7 linux-5.8.7
```

## 扩展-内核模块使用

### 内核模块依赖

一些内核模块可以依赖其他模块，需要先加载。

- 示例：ubifs 模块依赖于 ubi 和 mtd 模块。
  - 依赖关系在` /lib/modules /<kernel-version>/modules.dep** 和  **/lib/modules/<kernel-version>/modules.dep.bin`（二进制散列格式）。这些文件是在运行` make modules_install` 时生成的。

### 内核模块工具

`<module_name>`：不带后缀 .ko 的模块文件名。

- `modinfo <module_name>`（用于查看/lib/modules 中的模块）

  - `modinfo <module_path>.ko`它获取有关模块的信息而不加载它：参数、许可证、描述和依赖。

  - `sudo insmod <module_path>.ko`  尝试加载指定的模块。 但必须给出模块目标文件的完整路径。

- `modprobe <top_module_name> modprobe` 最常见的用法：
  - 尝试加载顶层模块的所有依赖项，然后加载此模块。 modprobe 会自动在` /lib/modules/<version>/ `中查找与安装模块名称对应的目标模块文件。

- `lsmod` 显示所有加载的模块列表将其输出显示，可以与 **/proc/modules**  内容进行比较。

- `sudo rmmod <module_name> `尝试删除给定的模块。仅当模块不再使用时才允许（例如，不再有进程打开设备文件）

- `sudo modprobe -r <top_module_name>` 尝试卸载给定的顶级模块及其所有不再需要的依赖项

### 向内核模块传递参数

- 查看模块可用参数：  `modinfo usb-storage`

- 使用 insmod：   sudo insmod ./usb-storage.ko delay_use=0

- 使用 modprobe：   在 /etc/modprobe.conf 或 /etc/modprobe.d/ 中设置参数：选项 usb-storage delay_use=0

- 通过kernel command line (内核命令行)，当驱动程序被静态构建到内核中时增加: usb-storage.delay_use=0

  - **usb-storage** 是驱动名

  - **delay_use** 是驱动参数名称。 它指定访问 USB 存储设备之前的延迟。

  - **0** 为驱动参数值。

### 检查内核模块参数值

如何查找/编辑已加载模块参数的当前值？

- 检查 `/sys/module/<name>/parameters`。

- 每个参数都有一个文件，里面包含参数值。如果这些文件具有写入权限（取决于内核模块代码）也可以直接更改参数值。

- 例子：` echo 0 > /sys/module/usb_storage/parameters/delay_use`

### 装载内核模块常见问题

当加载模块失败时，insmod 通常不会提供足够的打印信息。

但是内核日志中通常会提供详细信息。比如：

```shell
 $ sudo insmod ./intr_monitor.ko
	insmod: error inserting './intr_monitor.ko': -1 Device or resource busy

 $ dmesg
	[17549774.552000] Failed to register handler for irq channel 2
```

### 文件系统自动装载内核模块

**mdev**：这是一个 BusyBox 小程序，用于使用设备节点填充目录并根据需要创建新的节点。 有一个配置文件 /etc/mdev.conf，其中包含所有者和节点模块的规则。

**udev**：这是 mdev 的另一个新版本。 您可以在桌面 Linux 和一些嵌入式设备中找到它。 它非常灵活，是高端嵌入式设备的不错选择。 它现在是 systemd 的一部分。

