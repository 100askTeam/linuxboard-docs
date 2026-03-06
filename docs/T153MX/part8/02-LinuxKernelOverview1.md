---
sidebar_position: 2
---
# Linux内核开发流程

## 1. Linux内核开发流程

### 构建Linux内核流程

主要分为两部分

1. 环境配置： 选择合适的编译主机环境 系统非常重要
   1. 安装对Linux内核源码构建所需的环境依赖
   2. 设置你需要构建的目标单板的架构 工具链
2. 内核构建
   1. make构建可以给bootloader使用的 内核镜像
   2. make构建 dtb设备树文件（可选 `x86架构不需要`）
   3.  make 构建内核模块驱动
   4. 安装到合适的位置，替换原有的版本

![image-20240307115608709](images\image-20240307115608709.png)

1. Host下配置开发环境

   - 安装必要依赖包
   
   
      - 解压配置合适的工具链
   
2. 获取配套的交叉编译工具链

   - SOC原厂提供: NXP ST  Rockchip Amlogic Allwinnertech 等。
   
   
      - 社区下载： Linrao Debian ARM Bootlin
   
3. 下载kernel源码

   - 获取Linux Kernel主线LTS源码

     - Git方式获取: git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git

     - 压缩版下载: https://mirrors.edge.kernel.org/pub/linux/kernel/
   
   
      - 获取芯片原厂Kernel源码
   
4. 指定编译板子配置文件 `make BOARDNAME_defconfig`

5. 编译

   - 编译内核镜像 `make –jN`
   
   
      - 编译设备树`make dtbs`
   
   
      - 编译安装模块驱动 `make modules`
   
6. 安装驱动模块至目标kernel位置


### 获取适合的Linux内核

Kernel源码区别

- Linus Torvalds 发布的 Linux 内核的官方（主线）版本可在 https://kernel.org 获得。

  - 这些版本遵循内核的开发模式流程。但是，它们可能尚未包含特定领域的最新特性。某些开发中的功能可能尚未准备好用于主线版本。

- 许多芯片供应商提供自己的内核源

  - 他们优先关注硬件支持。与主线 Linux 有一个非常重要的增量支持。
  - 仅在主线还没有支持时有用。 许多SOC供应商同时投入于主线内核开发。
  
- 许多内核子社区维护自己的内核版本，通常具有更新 但不够稳定。

  - 架构社区（ARM、MIPS、PowerPC 等）、设备驱动社区（I2C、SPI、USB、PCI、网络等），其他社区（如real-time等）

  - 无官方发布，仅用于分享工作和为主线版本做出贡献。

## 2. 使用主线Linuxkernel演示

### 1. 获取主线Linuxkernel

- 所有版本压缩包下载：https://kernel.org/pub/linux/kernel/

![image-20240307120213924](images\image-20240307120213924.png)

- Git仓库源码地址：git clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git 

![image-20240307120230164](images\image-20240307120230164.png)

### 2. Kernel源码目录作用

| kernel源码目录 | 目录功能作用介绍                           |
| -------------- | :----------------------------------------: |
| **arch**       | 包含体系结构的文件。子目录下有不同的架构。 |
| **Documentation** | 包含内核文档。如果您想找到有关 Linux 某个方面的更多信息，可以直接从这里寻找 |
| **drivers** | 包含设备驱动程序 - 数以千计。 有一个每种驱动程序的子目录。 |
| **fs** | 包含文件系统代码。 |
| **include** | 包含内核头文件，包括那些工具链需要的文件。 |
| **init** | 包含内核启动代码。 |
| **kernel**： | 包含核心功能，包括调度、锁、定时器、电源管理和调试/代码跟踪等。 |
| **mm** | 包含内存管理。 |
| **net** | 包含网络协议。 |
| **scripts** | 包含许多有用的脚本，包括设备树编译器 (DTC)等。 |
| **tools** | 包含许多有用的工具，包括 Linux 性能计数器工具 perf，分析和追踪等。 |

### 3. 配置Kernel编译环境

#### 1. 安装Host依赖

- Ubuntu16+ 系统 LinuxKernel编译依赖

> sudo apt-get install libc6-armel-cross libc6-dev-armel-cross libncurses5-dev build-essential bison flex libssl-dev bc libelf-dev

#### 2. 设置ARCH

首先，指定要构建的内核的架构将 ARCH 设置为 arch/ 下的目录名称：` export ARCH=arm` 默认情况下，内核构建系统假定内核是为主机架构配置和构建的（在我们的例子中为 x86，那么ARCH默认就是x86)。内核构建镜像时将使用此设置。使用目标架构的配置项。使用目标架构的源代码和头文件编译内核。

![image-20240307120502837](images\image-20240307120502837.png)

#### 3. 设置 CROOS_COMPILE

在编译镜像时，内核Makefile调用的编译器是`$(CROSS_COMPILE)gcc` 在配置时需要已经指定过编译器，因为某些内核配置选项取决于编译器的功能。

- 本地编译时: 保持CROSS_COMPILE 变量未定义，内核将使用 默认的gcc 为主机架构进行本地编译。

- 使用交叉编译器时: 为了与本机编译器有所不同，交叉编译器名称的可执行文件以 目标系统、体系结构或着有时是库的名称作为前缀。例如：
  - mips-linux-gcc ：前缀名称是 mips-linux-
  -  arm-linux-gnueabi-gcc ：前缀名称是 arm-linux-gnueabi-
  -  riscv64-unknown-linux-gnu-gcc : 前缀名称是 riscv64-unknown-linux-gnu- 
  - 因此，您可以按如下方式指定您的交叉编译器：export  CROSS_COMPILE=arm-linux-gnueabi-

> CROSS_COMPILE 其实就是交叉编译工具的前缀名称（gcc、as、ld、objcopy、strip...）。

实际上有两种定义 ARCH 和 CROSS_COMPILE 的方式：

- 方式一：在 make 命令行上传递 ARCH 和 CROSS_COMPILE ：

  - `make  ARCH=arm CROSS_COMPILE=arm-linux- ...`

  - 缺点：当您运行任何 make 命令时很容易忘记传递这些变量，从而导致您的构建和配置被破坏。

- 方式二：定义 ARCH 和 CROSS_COMPILE 作为系统环境变量：

  - `export ARCH=arm   export CROSS_COMPILE=arm-linux-`

  - 缺点：它只能在当前 shell 或终端内工作。 您可以将这些设置放在每次开始处理项目时都提供的 文件中。 如果您只使用始终相同的工具链在单一架构上工作，您甚至可以将这些设置放在您的`  ~/.bashrc `文件中，使它们在任何终端上永久可见,设置后使用` source ~/.bashrc `命令生效。

### 3. 指定目标单板配置

一开始我们很难找到哪种内核配置完全适用于您的硬件和根文件系统，那么可以从如下两个方面入手。

1. 对于PC桌面设备或服务器设备：
   - 建议从配置您正在运行的内核开始，通常可以在 /boot目录下找到  cp /boot/config-`uname -r` .config

2. 嵌入式平台案例（至少是 ARM 32 位）：
   - 默认配置文件可用，通常适用于每个 CPU 系列。
   - 它们存储在 `arch/<arch>/configs/` 中 ，并且只是最小的 .config 文件（仅与默认设置有一些不同）。
   - 运行 make help 以查找是否可用于您的平台。要加载默认配置文件，只需运行。 ` make  <CPU>_defconfig` 这将覆盖您现有的 .config 文件！

配置之后，可以进入配置菜单界面进行配置更改（make menuconfig  默认可以不用修改）。

![image-20240307120628998](images\image-20240307120628998.png)

### 4. 编译安装内核

#### 1. 编译内核镜像

在配置完成上述 步骤后，需要在内核源码目录中执行。下执行 `make `命令即可开始编译内核镜像。对于x86架构 或者本地目标单板环境，我们不用过多关心是否包含参数问题，但是在嵌入式设备，因为不同的芯片厂家支持的 内核 镜像格式不同，所以我们需要在编译内核镜像之前 先确定 bootloader 支持引导的内核镜像是那种！

- 如果您有多个 CPU 内核/线程，请记住个数。同时我们建议：ncpus * 2 或 ncpus + 2，以最大化利用CPU 和 I/O资源。
  - 示例(4个CPU/单核四线程)：make -j 8

- 编译内核无需以 root 身份运行！

- 如需要 更快地重新编译：
  - 使用 ccache 编译器缓存：export  CROSS_COMPILE="ccache riscv64-linux-"

#### 2. 确认内核镜像

| 内核镜像名称 | 内核镜像功能作用                                                |
| :-----: | :--------------------------------------------------------: |
| vmlinux | 未压缩的原始内核映像，ELF 格式，用于调试目的，但无法启动。 |
| `arch/<arch>/boot/*Image` | 通常是最终可以启动的压缩后的内核镜像文件 |
| `arch/<arch>/boot/bzImage` | for x86, |
| `arch/<arch>/boot/zImage` | for ARM, |
| `arch/<arch>/boot/Image.gz` | for RISC-V, |
| `arch/<arch>/boot/vmlinux.bin.gz` | for ARC等。 |
| `arch/<arch>/boot/Image` | 也可以引导的未压缩内核映像。 |
| `arch/<arch>/boot/dts/*.dtb` | 编译的设备树文件（某些架构）。 |


#### 3. 安装内核镜像

本地安装: `sudo make install` 是否默认为主机系统安装

- 安装至 `/boot/vmlinuz-<version>`

- 压缩的内核映像。 与 `arch/<arch>/boot` 中的相同

- `/boot/System.map-<version>` 为调试目的存储内核符号地址（已过时：此类信息通常存储在内核本身中）

- `/boot/config-<version>` 此版本的内核配置

- 在 GNU/Linux 发行版中，通常会重新运行Boot-Loader配置程序，以使新内核在下次引导时可用。

嵌入式设备安装

- make install 在嵌入式开发中很少使用，因为内核镜像是单个文件，易于处理。另一个原因是没有标准的方式来部署和使用嵌入式设备内核映像。

- 因此，使内核映像对目标可用通常是手动的或通过构建系统中的脚本完成。

- 可以自定义 make install 程序 `arch/<arch>/boot/install.sh`

#### 4. 编译安装设备树

内核源码目录下执行 `make dtbs`

- 目标单板所需的硬件设备信息。

- 一般用于嵌入式设备。

- 设备树文件要与目标单板配套。

- 设备树文件一般和内核镜像存放同一位置。

![image-20240307120923939](images\image-20240307120923939.png)


#### 5. 编译安装内核模块

使用Linux模块的优势

- 使用内核模块可以支持更多不同的设备外设。

- 模块使无需重启即可轻松开发驱动程序：加载、测试、卸载、重建、加载...

- 有助于将内核映像大小保持在最小（在 PC 的 GNU/Linux 发行版中必不可少）。

- 对于减少启动时间也很有用：您无需花时间初始化稍后才需要的设备和内核功能。

- 注意：一旦加载，在系统中拥有完全控制权和权限。 没有特别的保护。 这就是为什么只有 root 用户才能加载和卸载模块。

- 为了提高安全性，可以只允许签名模块，或完全禁用模块支持。

编译驱动模块命令 在内核源码目录下执行  `make modules`

- 内核映像是一个单一文件，由与配置中启用的功能相对应的所有目标文件链接而成。这是由引导加载程序加载到内存中的文件。

- 因此，一旦内核启动，所有包含的功能都可用，此时不存在文件系统概念。但是，某些功能（设备驱动程序、文件系统等）都可以编译为模块。这些是可以动态加载/卸载，在内核添加/删除功能的插件。

- 每个驱动模块在文件系统中存储为一个单独的文件，因此必须访问文件系统才能使用驱动模块。

- 这在内核的早期引导过程中是不可用的，因为没有可用的文件系统。

本地主机模块驱动: `sudo make modules_install`

- 默认为主机系统安装，所以需要以root身份运行

- 将所有模块安装在 `/lib/modules/<version>/kernel/Module .ko`（内核对象）文件，与源文件的目录结构相同。

- `modules.alias, modules.alias.bin` 模块加载实用程序的别名。 用于查找设备的驱动程序。 示例：
- 别名 usb:v066Bp20F9d*dc*dsc*dp*ic*isc*ip*in* asix modules.dep, modules.dep.bin
  
- 模块依赖 modules.symbols, modules.symbols.bin 告诉给定符号属于哪个模块。

嵌入式主机模块驱动

- 在嵌入式开发中，您不能直接使用 make modules_install 。因为它会把驱动模块安装在本地主机上的 /lib/modules 中。

- 此时需要指定 INSTALL_MOD_PATH 变量来生成模块相关文件并将模块安装在 `<目标根文件系统>` 而不是您的 `<主机根文件系统>`中。示例命令：
  - `make INSTALL_MOD_PATH=<dir>/  modules_install`

### 5. 清理编译缓存

- 清理生成的文件（有时在切换版本之前很有用，以避免未跟踪的输出文件，或强制重新编译）：`make clean`

- 删除所有生成的文件。 从一种架构切换到另一种架构时需要。 注意：它还会删除您的 .config 文件！`make mrproper`

- 同时删除编辑器备份和补丁拒绝文件（主要是生成补丁）：`make distclean`

- 如果您在 git 树中，删除 git 未跟踪（和忽略）的所有文件： `git clean -fdx`

