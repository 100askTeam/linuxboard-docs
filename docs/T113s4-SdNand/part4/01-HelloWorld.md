---
sidebar_position: 1
---

# HelloWorld 快速入门

本章节将指导你在 T113s4-SdNand 开发板上运行第一个应用程序。

---

## 编写程序

在 Ubuntu 上创建并编辑 `helloworld.c`：

```c
#include <stdio.h>

int main()
{
    printf("T113s4-SdNand Hello World!\n");
    return 0;
}
```

---

## 交叉编译

### 为什么需要交叉编译？

使用 `gcc` 编译的程序只能在 Ubuntu（x86 架构）上运行，无法在 ARM 开发板上执行。

我们需要使用交叉编译工具链为 ARM 架构编译程序。

### 交叉编译工具链路径

```bash
/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/host/bin/arm-linux-gnueabi-gcc
```

### 编译程序

```bash
/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/host/bin/arm-linux-gnueabi-gcc helloworld.c -o helloworld
```

### 验证文件格式

```bash
file helloworld
```

输出示例：

```
helloworld: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.3
```

看到 `ARM` 字样说明编译正确。

---

## 上传并运行

### 1. 登录串口终端

参考《快速入门》中的「启动开发板」章节。

### 2. 上传程序到开发板

通过 ADB 工具上传（需将开发板 OTG 接口连接到 Ubuntu）：

```bash
adb devices
adb push helloworld /mnt/UDISK/
```

### 3. 运行程序

在开发板的串口终端中执行：

```bash
cd /mnt/UDISK/
chmod +x helloworld
./helloworld
```

输出：

```
T113s4-SdNand Hello World!
```

程序运行成功，欢迎开启嵌入式应用开发之旅！
