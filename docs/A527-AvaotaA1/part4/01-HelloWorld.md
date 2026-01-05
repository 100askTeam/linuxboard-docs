---
sidebar_position: 1
---
# HelloWorld快速入门

## 引言

欢迎来到 H616-YuzukiHD-Chameleon 的 HelloWorld快速入门 指南。在本教程中，我们将通过一个简单的hello程序指导您交叉编译应用程序。无论您是初学者还是有一定经验的用户，本指南都将为您提供必要的信息和步骤。

## 准备工作

后面会通过ADB工具把应用程序传输到开发板上，在这之前先登录串口终端(也可以使用ADB登录)，请参考前面快速启动的《启动开发板》章节。

## 编写程序

在 ubuntu 上，编写程序 `helloworld.c`，填入以下内容，

```bash
#include <stdio.h>

int main()
{
        printf("H616-YuzukiHD-Chameleon Hello World!\n");
        return 0;
}
```

## 交叉编译工具链准备

在 ubuntu 中可以执行以下命令编译、执行：

```bash
gcc -o hello helloworld.c
./hello
Hello, world!
```

上述命令编译得到的可执行程序 hello 可以在 Ubuntu 中运行，但是如果把它放到 ARM板子上去，它是无法执行的。因为它是使用 gcc 编译的，是给 PC 机编译的，里面的机器指令是 x86 的。

我们要想给 ARM 板编译出 hello 程序，需要使用相应的交叉编译工具链。H616-YuzukiHD-Chameleon 开发板的交叉编译工具是(**实际路径不一定相同**)：

~~~bash
/data/h616/h616-tina-v0.8/tina/prebuilt/gcc/linux-x86/arm/toolchain-sunxi-glibc/toolchain/bin/arm-openwrt-linux-gcc
~~~

## 编译程序

编写代码完成后，可以使用上面提到的交叉编译工具来进行编译，

```bash
/data/h616/h616-tina-v0.8/tina/prebuilt/gcc/linux-x86/arm/toolchain-sunxi-glibc/toolchain/bin/arm-openwrt-linux-gcc helloworld.c -o helloworld
```

执行指令后，会出现一个可执行文件，就是应用程序 `helloworld`，可以看到helloworld程序的文件类型如下，

```bash
ubuntu@ubuntu1804:~/C-Test/Hello$ file helloworld
hello: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 2.6.32, not stripped
ubuntu@ubuntu1804:~/C-Test/Hello$
```

## 上传程序并运行

程序编译之后，通过adb工具上传可执行程序`helloworld`。这里上传至开发板 `/mnt/UDISK/` 路径下，

> 执行adb之前，需要把开发板otg接口连接至ubuntu。

```bash
ubuntu@ubuntu1804:~/C-Test/Hello$ adb devices
List of devices attached
* daemon not running; starting now at tcp:5037
* daemon started successfully
0402101560	device

ubuntu@ubuntu1804:~/C-Test/Hello$ adb push helloworld /mnt/UDISK/
helloworld: 1 file pushed. 4.1 MB/s (9988 bytes in 0.002s)
```

打开串口终端，可以在开发板的`/mnt/udisk/`目录下，看到可执行程序`helloworld`

```bash
root@TinaLinux:/mnt/UDISK# ls
helloworld
root@TinaLinux:/mnt/UDISK#
```

运行程序，信息如下，

```bash
root@TinaLinux:/mnt/UDISK# ./helloworld
H616-YuzukiHD-Chameleon Hello World!
root@TinaLinux:/mnt/UDISK#
```

## 常见问题解答 (FAQ)

暂无。

## 总结

恭喜您！您已经成功地在 H616-YuzukiHD-Chameleon 上运行你的第一个应用程序。现在，欢迎开启嵌入式应用之旅。

## 反馈和改进

如果您有任何疑问或建议，请随时联系我们。我们期待您的反馈，以便我们不断改进本指南。有任何学习上的问题可以在论坛上发帖子。

论坛地址：[最新Allwinner话题 - 嵌入式开发问答社区](https://forums.100ask.net/c/aw/15)

