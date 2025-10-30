---
sidebar_position: 1
---
# HelloWorld快速入门

本章节将讲解如何在T113s3ProV1.3SdNand 开发板上进行简单的应用开发。

## 编写程序

在 ubuntu 上，编写程序 `helloworld.c`，填入以下内容，

~~~bash
#include <stdio.h>

int main()
{
        printf("T113s3ProV1.3SdNand Hello World!\n");
        return 0;
}

~~~

保存退出。

## 交叉编译工具链准备

在 ubuntu 中可以执行以下命令编译、执行：

~~~bash
gcc -o hello helloworld.c
./hello
Hello, world!
~~~

上述命令编译得到的可执行程序 hello 可以在 Ubuntu 中运行，但是如果把它放到 ARM板子上去，它是无法执行的。因为它是使用 gcc 编译的，是给 PC 机编译的，里面的机器指令是 x86 的。

我们要想给 ARM 板编译出 hello 程序，需要使用相应的交叉编译工具链。T113s3ProV1.3SdNand开发板的交叉编译工具是(实际路径不一定相同)：

~~~bash
/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/bin/arm-linux-gnueabi-gcc
~~~

## 编译程序

编写代码完成后，可以使用上面提到的交叉编译工具来进行编译，

~~~bash
/home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/host/bin/arm-linux-gnueabi-gcc helloworld.c -o helloworld
~~~

执行指令后，会出现一个可执行文件，就是应用程序 `helloworld`，可以看到helloworld程序的文件类型如下，

~~~bash
ubuntu@ubuntu1804:~/C-Test/Hello$ file helloworld
helloworld: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.3, for GNU/Linux 3.2.0, BuildID[sha1]=28c0d7033e0cd411b5a21eca3c31a04f2115c37c, with debug_info, not stripped
ubuntu@ubuntu1804:~/C-Test/Hello$
~~~

## 登录串口终端

如果不清楚如何连接开发板登录串口，请参考 快速启动 中的《启动开发板》章节。

## 上传程序并运行

程序编译之后，通过adb工具上传可执行程序`helloworld`。这里上传至开发板 `/mnt/UDISK/` 路径下，

> 执行adb之前，需要把开发板otg接口连接至ubuntu。

~~~bash
ubuntu@ubuntu1804:~/C-Test/Hello$ adb devices
List of devices attached
* daemon not running; starting now at tcp:5037
* daemon started successfully
0402101560	device

ubuntu@ubuntu1804:~/C-Test/Hello$ adb push helloworld /mnt/UDISK/
helloworld: 1 file pushed. 4.1 MB/s (9988 bytes in 0.002s)
~~~

打开串口终端，可以在开发板的`/mnt/udisk/`目录下，看到可执行程序`helloworld`

~~~bash
# ls
helloworld
#
~~~

运行程序，信息如下，

~~~bash
# ./helloworld
T113s3ProV1.3SdNand Hello World!
#
~~~

程序运行成功，欢迎开启嵌入式应用之旅！！！

