---
sidebar_position: 1
sidebar_label: HelloWorld 快速入门
---

# HelloWorld 快速入门

本章完成最小应用开发闭环：在 Ubuntu 写一个 C 程序，用 SDK 的 Arm 工具链编译，通过 ADB 上传，
最后在开发板运行。全程约 10 分钟。

| 执行位置 | 要做的事 |
| --- | --- |
| Ubuntu 主机 | 写源码、交叉编译、用 `file` 检查架构、ADB 上传 |
| 开发板 Linux Shell | 赋予执行权限并运行程序 |

开始前确认已经完成[启动开发板](../part1/01-QuickStart.md)，并且 SDK 至少成功解压、工具链已经生成。

## 编写程序

在 **Ubuntu 主机**新建一个工作目录：

```bash
mkdir -p ~/t153-app/hello
cd ~/t153-app/hello
```

用熟悉的编辑器创建 `helloworld.c`。例如：

```bash
nano helloworld.c
```

输入以下内容，按 `Ctrl+O` 保存、Enter 确认，再按 `Ctrl+X` 退出：

```c
#include <stdio.h>

int main(void)
{
    printf("OmniGate-T153 Hello World!\n");
    return 0;
}
```

## 找到交叉编译工具链

普通 Ubuntu `gcc` 生成的是 x86 程序，不能直接在 Arm 开发板运行。另开一个终端，进入
**T153MX SDK 根目录**并加载环境。下面路径是示例，请改成你的 SDK 绝对路径：

```bash
cd /home/ubuntu/T153_Tina5SDK-V1
source build/envsetup.sh
```

当前 SDK 已确认的编译器为：

```text
out/toolchain/gcc-linaro-11.3.1-2022.06-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-gcc
```

保存 SDK 和应用目录，随后把工具链加入当前终端：

```bash
export T153_SDK_ROOT="$PWD"
export T153_APP_DIR="$HOME/t153-app/hello"
export T153_TOOLCHAIN="$T153_SDK_ROOT/out/toolchain/gcc-linaro-11.3.1-2022.06-x86_64_arm-linux-gnueabihf/bin"
export PATH="$T153_TOOLCHAIN:$PATH"
arm-linux-gnueabihf-gcc --version
```

可以看到 GCC 11.3.1 版本信息。

## 编译程序

无需切换目录，直接使用绝对变量编译：

```bash
arm-linux-gnueabihf-gcc "$T153_APP_DIR/helloworld.c" -o "$T153_APP_DIR/helloworld"
file "$T153_APP_DIR/helloworld"
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
adb push "$T153_APP_DIR/helloworld" /tmp/
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

## 修改一次再重新编译

把输出文字改成自己的项目名，保存后重复`编译 → push → 运行`三步。ADB 覆盖 `/tmp/helloworld`
时，如果程序正在运行，应先在板端结束进程。

开发板的 `/tmp` 通常位于内存文件系统，重启后文件会消失。这正适合测试；要随固件长期交付，
应把应用加入 Buildroot package 或板级 rootfs overlay，而不是只执行一次 `adb push`。

## 测试通过标准

- `arm-linux-gnueabihf-gcc --version` 能正常输出编译器版本。
- `file helloworld` 显示 ARM 32 位 EABI 可执行程序，而不是 x86-64。
- 文件能够通过 ADB 上传到开发板。
- 板端运行后准确输出 `OmniGate-T153 Hello World!`。

## 常见问题

| 现象 | 处理 |
| --- | --- |
| `arm-linux-gnueabihf-gcc: command not found` | 检查 `T153_TOOLCHAIN` 目录是否存在，并确认 SDK 工具链已经解压 |
| `file` 显示 `x86-64` | 误用了主机 `gcc`，重新用 `arm-linux-gnueabihf-gcc` 编译 |
| `adb devices` 列表为空 | 检查 OTG/Device 口、USB 数据线和板端 `adbd` |
| 板端提示 `Permission denied` | 执行 `chmod +x /tmp/helloworld` |
| 板端提示 `not found`，但文件存在 | 用 `file`、`readelf -l` 检查架构和动态加载器 |
| 板端提示缺少 `.so` | 使用同一 SDK sysroot 重新编译，或把依赖加入 Buildroot；不要复制主机 x86 库 |

需要定位动态加载器时，在 Ubuntu 主机执行：

```bash
readelf -l "$T153_APP_DIR/helloworld" | grep interpreter
```
