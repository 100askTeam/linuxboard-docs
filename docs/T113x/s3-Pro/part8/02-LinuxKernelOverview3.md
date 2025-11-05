---
sidebar_position: 4
---
# 扩展-如何修改内核配置

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

