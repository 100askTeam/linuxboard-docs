---
sidebar_position: 1
---
# 交叉编译

## 交叉编译概述

在嵌入式系统开发中，交叉编译是一种关键技术。它允许我们在一种架构上（通常是开发主机，例如 x86）编译代码，以生成能够在另一种架构（通常是嵌入式目标设备，例如 ARM、MIPS 等）上运行的二进制文件。由于嵌入式设备通常具有特定的硬件和系统环境，直接在目标设备上编译往往不切实际，因此交叉编译成为一种必要手段，尤其是对于硬件资源有限、性能要求较高的嵌入式系统，交叉编译能够确保目标平台的架构和操作系统与开发环境相匹配，并且能够在性能更强的主机上生成适合目标平台的二进制文件，从而在开发主机上进行开发和调试，然后将生成的代码部署到目标设备上运行。

## 交叉编译的基本概念

交叉编译涉及以下主要环节：

1. **源代码**
   源代码是开发者撰写的程序或库代码，它是交叉编译的起点。

2. **交叉编译工具链**
   这是交叉编译的核心。它是在主机平台上运行的工具集合，包括编译器、链接器、调试器和构建工具等，用于将源代码编译为目标平台的可执行文件、库和其他二进制文件。例如，GCC 是一个常用的交叉编译工具链，它能够为 ARM 架构生成可执行文件。

3. **目标平台**
   这是代码运行的目标设备，一般是嵌入式系统。编译得到的二进制文件通过文件传输协议（如 SCP）上传到目标设备后即可运行。

## 交叉编译工具链

交叉编译工具链是实现交叉编译的关键，它包含以下组件：

1. **交叉编译器**
   这是一种特殊的编译器，能够将源代码编译为目标平台的机器代码。例如，`aarch64-linux-gnu-gcc` 用于生成 ARM64 架构的代码。

2. **链接器**
   它将编译生成的目标文件和库文件链接成一个完整的可执行文件。

3. **标准库**
   这是与目标平台匹配的 C 库（如 glibc），以确保生成的二进制文件能够在目标平台上正确运行。

4. **调试工具**
   如 GDB，它可以在目标平台上进行程序调试。

5. **构建系统**
   这些工具（如 make、CMake、Autotools 等）可自动化构建流程，调用交叉编译工具链中的工具来生成目标平台的可执行文件。

## 交叉编译的准备工作

1. **选择交叉编译工具链**
   首先要根据目标架构选择合适的工具链。比如针对 ARM 架构的工具链、针对 x86 架构的工具链，或者通过官方发布的工具链，自定义工具链。常见的工具链包括：

   > - **GNU 工具链**：包括 `gcc`、`binutils` 和 `glibc` 等。
   > - **Yocto 项目工具链**：Yocto 提供了一个强大的交叉编译环境，并且能够自动化构建和配置交叉编译工具链。
   > - **Linaro 工具链**：Linaro 提供了针对 ARM 架构优化的工具链。

2. **设置交叉编译环境**
   需要为交叉编译设置适当的环境变量。例如，设置交叉编译器路径、目标平台的系统根路径、目标平台的库路径等。
   例如：

   ~~~bash
   export CROSS_COMPILE=arm-linux-gnueabihf-
   export ARCH=arm
   export SYSROOT=/opt/arm-linux-gnueabihf/sysroot
   export CC=${CROSS_COMPILE}gcc
   export CXX=${CROSS_COMPILE}g++
   ~~~

3. **选择目标平台的操作系统**
   嵌入式平台通常运行精简版的操作系统。例如基于 Linux 的系统或 RTOS（实时操作系统）。交叉编译时需要确保目标平台的操作系统的核心库（如 C 库）和头文件与主机编译时使用的相匹配，以避免兼容性问题。

4. **获取目标平台的工具链**
   有时需要从开发板厂商或相关社区获取已经编译好的交叉编译工具链。如果找不到合适的预构建工具链，也可以从开源项目中获取交叉编译工具链。

## 交叉编译的流程

交叉编译的完整流程包括以下几个步骤：

1. **安装交叉编译工具链**
   首先在主机平台上安装交叉编译工具链。这可以通过下载预构建工具链包或从源码编译工具链来完成。

2. **配置源代码**
   配置源代码以便使用交叉编译工具链进行编译。例如，对于使用 GNU 系列构建系统的项目，可以通过指定交叉编译器和目标平台的 `--host` 参数来完成配置，例如：

   ~~~bash
   ./configure --host=arm-linux
   ~~~

3. **编译源代码**
   配置完成后，使用 make 或其他构建工具编译源代码。例如：

   ~~~bash
   make
   ~~~

   此时需要确保构建系统能够调用交叉编译工具链来生成正确的目标平台可执行文件。

4. **传输文件到目标设备**
   编译完成后，将生成的二进制文件（如可执行文件、库文件等）传输到目标设备上，可以使用 SSH、SCP 或其他文件传输协议。例如：

   ~~~bash
   scp executable_file user@target_device:/destination_folder
   ~~~

5. **在目标设备上调试和测试**
   在目标设备上运行和调试编译生成的程序，以确保其能够正确工作。如果发现问题，可以通过串口、网络调试或使用 JTAG 调试器等方式进行调试。例如，使用 GDB 进行远程调试：

   ~~~bash
   gdb executable_file
   ~~~

## 交叉编译的挑战与解决方案

- **不同架构之间的差异**
  不同的架构之间可能会存在差异，比如字节序、数据类型的大小等。为避免这些问题，开发者通常需要确保交叉编译时使用的工具链能够正确处理这些差异。例如，选择适合目标架构的工具链。

- **目标平台的依赖库问题**
  目标平台可能不具备某些开发环境中已经存在的库或功能。为了解决这个问题，开发者需要为目标平台提供所有必需的依赖库，可以通过静态链接库或交叉编译这些依赖库来解决。

- **调试困难**
  在嵌入式系统上进行调试相对较为困难。可以通过串口、网络调试或使用 JTAG 调试器等方式进行调试。例如，使用 GDB 与目标设备进行远程调试：

  ~~~bash
  gdbserver :1234 executable_file
  ~~~

  然后在主机上连接目标设备进行调试：
  ~~~bash
  gdb executable_file
  ~~~

  之后通过远程调试命令连接目标设备。

- **优化目标平台性能**
  嵌入式系统通常资源有限，编译时需要对代码进行优化，以减少程序的内存占用和提升执行速度。例如，使用编译器的优化选项（如 `-O2`）来提高程序性能，或者通过减少库依赖来减少程序的体积。

## 常用的交叉编译工具

1. **GNU 工具链**
   GNU 提供了多种交叉编译工具，如 GCC（GNU C 编译器）和 Binutils（GNU 二进制工具）。它们是构建交叉编译工具链的基础。

2. **Yocto 项目**
   Yocto 是一个开源项目，旨在为嵌入式设备提供定制化的 Linux 系统。Yocto 提供了一个强大的交叉编译环境，并且能够自动化构建和配置交叉编译工具链。

3. **Linaro 工具链**
   Linaro 提供了针对 ARM 架构的优化交叉编译工具链，常用于 ARM 设备开发。

4. **Buildroot**
   Buildroot 是一个轻量级的构建系统，旨在为嵌入式系统提供交叉编译支持。它能够帮助开发者快速生成交叉编译工具链和目标平台的根文件系统。

## 总结

交叉编译是嵌入式系统开发中不可或缺的一个环节。通过交叉编译，开发者能够在性能更强大的主机上生成适合目标平台的二进制文件，并将其运行在嵌入式设备上。正确配置交叉编译工具链和构建环境是保证嵌入式系统开发顺利进行的关键。尽管交叉编译有一定的难度，但通过熟练掌握交叉编译的流程和常用工具，可以有效提升嵌入式开发的效率和可靠性。

## eg: 实际案例

在 T113s3 的 SDK 中，`tplayerdemo` 的交叉编译需要使用特定的 `Makefile` 进行配置和构建。

**Makefile 示例**

```make
CC = /home/ubuntu/tina5sdk-bsp/out/toolchain/gcc-linaro-5.3.1-2016.05-x86_64_arm-linux-gnueabi/bin/arm-linux-gnueabi-gcc

Target = tplayerdemo

SourceIncludePath := \
    -I/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot/usr/include/ \
    -I/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot/usr/include/libcedarx/ \
    -I/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot/usr/include/libcedarc/ \
    -I/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot/usr/include

CompileFlags = $(CFLAGS) $(SourceIncludePath)

LibraryPath := \
    -L/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot/usr/lib \
    -L/home/ubuntu/tina5sdk-bsp/out/toolchain/gcc-linaro-5.3.1-2016.05-x86_64_arm-linux-gnueabi/arm-linux-gnueabi/

ifeq ($(ONLY_ENABLE_AUDIO),y)
CompileFlags += -DONLY_ENABLE_AUDIO
endif

ifeq ($(ONLY_DISABLE_AUDIO),y)
CompileFlags += -DONLY_DISABLE_AUDIO
endif

LoadFlags += $(LibraryPath) -ltplayer -lcdx_base -lrt -lstdc++
LoadFlags += -lpthread

$(Target): tplayerdemo.c
    $(CC) --sysroot=/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/arm-buildroot-linux-gnueabi/sysroot -o $@ $^ $(CompileFlags) $(LDFLAGS) $(LoadFlags)
```

**Makefile 解释**

- `CC`：指定交叉编译器的路径。
- `Target`：定义生成的目标程序名称。
- `SourceIncludePath`：包含目标平台所需的头文件路径。
- `CompileFlags`：编译标志，包含头文件搜索路径 `SourceIncludePath`。
- `LibraryPath`：目标平台的库文件搜索路径。
- `LoadFlags`：加载库文件的标志。
- `ONLY_ENABLE_AUDIO` 和 `ONLY_DISABLE_AUDIO`：用于条件编译，定义特定功能。
- `$(Target): tplayerdemo.c`：指定目标程序的依赖文件。
- `$(CC) --sysroot ...`：使用交叉编译器进行编译，生成目标程序 `tplayerdemo`。

通过这个 `Makefile`，开发者可以方便地对 `tplayerdemo` 进行交叉编译。