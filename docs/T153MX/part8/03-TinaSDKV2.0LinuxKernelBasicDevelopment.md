---
sidebar_position: 5
---

# Tina Linux Kerenl目录结构

Tina-SDK Linux系统启动流程：

![image-20240713180705739](images/image-20240713180705739.png)

## Linux Kerenl目录结构

### 设备树配置文件位置

- 100ASK_T113s3-Pro开发板LinuxKernel配置文件： **device/config/chips/t113/configs/100ask/linux/config-5.4**

![image-20240311160545443](images\image-20240311160545443.png)

- 100ASK_T113s3-Pro开发板LinuxKernel设备树文件： **device/config/chips/t113/configs/100ask/board.dts**

![image-20240311160623153](images\image-20240311160623153.png)

可以在tina-sdk source后，在tina-sdk任意目录内执行 `cconfigs`命令直接切换到板级 Linux 设备树 和 配置文件目录。

![image-20240311170614919](images\image-20240311170614919.png)

- 100ASK_T113s3-Pro开发板设备树 board.dts 父级设备树名称 `sun8iw20p1.dtsi`

![image-20240311155903965](images\image-20240311155903965.png)

### 内核源码位置

- Linux-5.4内核源码：**lichee/linux-5.4**

![image-20240311155604678](images\image-20240311155604678.png)

可以在tina-sdk source后，在tina-sdk任意目录内执行 `ckernel`命令直接切换到linux内核源码目录下。

![image-20240311170943094](images\image-20240311170943094.png)

- 100ASK_T113s3-Pro开发板父级设备树  `sun8iw20p1.dtsi`所在位置  **lichee/linux-5.4/arch/arm/boot/dts**

![image-20240311160012185](images\image-20240311160012185.png)

可以在tina-sdk source后，在tina-sdk任意目录内执行 `cdts`命令直接切换到linux内核源码设备树目录下。

![image-20240311170845624](images\image-20240311170845624.png)

### env环境变量

- 100ASK_T113s3-Pro开发板启动环境变量：**device/config/chips/t113/configs/100ask/env.cfg**

![image-20240311164800885](images\image-20240311164800885.png)

### 设备树打包

boot_package.cfg 文件描述了，Linux内核设备树所在位置。

1. 为了在启动内核前更新参数到内核dts 和可以在U-Boot 控制台查看修改dts。按阶段划分可以分为使用内部dts 阶段和使用内核dts 阶段。如下图所示。

![image-20240311171632180](images\image-20240311171632180.png)

2. 可以通过命令set_working_fdt来切换当前生效的fdt。

```shell
[04.562]update bootcmd
[04.576]change working_fdt 0x7bebee58 to 0x7be8ee58
[04.587]update dts
Hit any key to stop autoboot: 0
=> set
set_working_fdt setenv setexpr
=> set_working_fdt 0x7bebee58
change working_fdt 0x7be8ee58 to 0x7bebee58
=>
```

> 参考：D1-H_Tina_Linux_U-Boot_开发指南.pdf

