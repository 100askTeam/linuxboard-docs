---
sidebar_position: 1
sidebar_label: HelloWorld 快速入门
---

# HelloWorld 快速入门

本章节将讲解如何为 OmniGate-T153 编写、交叉编译并运行第一个 Linux 应用程序。

## 编写程序

在 **Ubuntu 主机**新建一个工作目录：

```bash
mkdir -p ~/t153-app/hello
cd ~/t153-app/hello
```

创建 `helloworld.c`：

```c
#include <stdio.h>

int main(void)
{
    printf("OmniGate-T153 Hello World!\n");
    return 0;
}
```

## 找到交叉编译工具链

普通 Ubuntu `gcc` 生成的是 x86 程序，不能直接在 Arm 开发板运行。先进入 **T153MX SDK 根目录**并加载环境：

```bash
source build/envsetup.sh
```

当前 SDK 已确认的编译器为：

```text
out/toolchain/gcc-linaro-11.3.1-2022.06-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-gcc
```

把工具链加入当前终端：

```bash
export T153_TOOLCHAIN="$PWD/out/toolchain/gcc-linaro-11.3.1-2022.06-x86_64_arm-linux-gnueabihf/bin"
export PATH="$T153_TOOLCHAIN:$PATH"
arm-linux-gnueabihf-gcc --version
```

可以看到 GCC 11.3.1 版本信息。

## 编译程序

回到 HelloWorld 目录执行：

```bash
arm-linux-gnueabihf-gcc helloworld.c -o helloworld
file helloworld
```

预期输出包含：

```text
ELF 32-bit LSB executable, ARM, EABI5
interpreter /lib/ld-linux-armhf.so.3
```

看到 `ARM` 表示生成的是开发板程序；如果显示 `x86-64`，说明误用了主机 `gcc`。

## 上传程序

使用 USB 数据线连接开发板 OTG/Device 口。在 **Ubuntu 主机**执行：

```bash
adb devices
adb push helloworld /tmp/
```

设备列表中出现序列号并显示 `device`，随后会提示文件上传成功。

## 在开发板运行

可以通过串口进入开发板，也可以执行：

```bash
adb shell
```

在 **开发板 Linux Shell**运行：

```bash
chmod +x /tmp/helloworld
/tmp/helloworld
```

可以看到：

```text
OmniGate-T153 Hello World!
```

出现以上内容，说明交叉编译、USB 上传和板端运行都已经完成。

## 测试通过标准

- `arm-linux-gnueabihf-gcc --version` 能正常输出编译器版本。
- `file helloworld` 显示 ARM 32 位 EABI 可执行程序，而不是 x86-64。
- 文件能够通过 ADB 上传到开发板。
- 板端运行后准确输出 `OmniGate-T153 Hello World!`。

如果出现 `not found` 但文件确实存在，使用 `file` 和 `readelf -l` 检查程序架构及动态加载器；如果提示 `Permission denied`，先执行 `chmod +x /tmp/helloworld`。
