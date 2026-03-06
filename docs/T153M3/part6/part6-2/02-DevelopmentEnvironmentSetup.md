---
sidebar_position: 1
---
# 开发环境搭建

本章节将讲解 T113s3-pro 开发板 Tina5-SDK 的环境搭建。

## 获取Tina5-SDK源码

查看[源码工具文档手册]()，下载 `Tina5-SDK源码` 压缩包，上传至ubuntu，创建文件夹用来保存源码：

~~~bash
ubuntu@ubuntu1804:~$ mkdir Tina_SDK
ubuntu@ubuntu1804:~$ cd Tina_SDK/
ubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1
.
├── md5.txt
├── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.00
├── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.01
└── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.02

0 directories, 4 files
~~~

查看所有文件MD5校验值：

~~~ bash
ubuntu@ubuntu1804:~/Tina_SDK$ md5sum 100ASK_T113s3-PRO_TinaSDK5.tar.gz.0*
35577ee74334ee8bd9c5fcca844795b3  100ASK_T113s3-PRO_TinaSDK5.tar.gz.00
3420eef596165883cde2e14a41a12358  100ASK_T113s3-PRO_TinaSDK5.tar.gz.01
ad730f3b76e3943652b56c8c5335f52c  100ASK_T113s3-PRO_TinaSDK5.tar.gz.02
~~~

确保校验值对上。否则需要重新上传。

解压源码：

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ cat 100ASK_T113s3-PRO_TinaSDK5.tar.gz.0* | tar -xzvf -
~~~

等待一段时间，即可解压完成。

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1
.
├── 100ASK_T113s3-PRO_TinaSDK5
├── md5.txt
├── 100ASK_T113s3-PRO_TinaSDK5.00
├── 100ASK_T113s3-PRO_TinaSDK5.01
└── 100ASK_T113s3-PRO_TinaSDK5.02

1 directory, 4 files
ubuntu@ubuntu1804:~/Tina_SDK$ mv 100ASK_T113s3-PRO_TinaSDK5 ~/
~~~

## T113s3-pro(WiFi6增强版)补丁获取

> 注意区分：补丁包名 和 SDK源码包名 有点类似。
>
> 补丁包名：   100ASK_T113-PRO_TinaSDK5
> 
> SDK源码包名：100ASK_T113s3-PRO_TinaSDK5

如果购买的是 T113s3-pro(WiFi6增强版) 按照如下方式获取扩展支持仓库，然后加以应用：

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ cd ~/
ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/100ASK_T113-PRO_TinaSDK5.git
ubuntu@ubuntu1804:~$ cd 100ASK_T113-PRO_TinaSDK5/
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ ls
buildroot  device  kernel  platform  README.md
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ git submodule update --init
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ cp ./* -rfvd ~/100ASK_T113s3-PRO_TinaSDK5
~~~

## T113s3-pro(XR829版)补丁获取

> 注意区分：补丁包名 和 SDK源码包名 有点类似。
>
> 补丁包名：   100ASK_T113-PRO_TinaSDK5
>
> SDK源码包名：100ASK_T113s3-PRO_TinaSDK5

如果购买的是 T113s3-pro(XR829版) 按照如下方式获取扩展支持仓库，然后加以应用：

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ cd ~/
ubuntu@ubuntu1804:~$ git clone -b tina5v1p2-xr829 https://github.com/DongshanPI/100ASK_T113-PRO_TinaSDK5.git
ubuntu@ubuntu1804:~$ cd 100ASK_T113-PRO_TinaSDK5/
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ ls
buildroot  device  kernel
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ git submodule update --init
ubuntu@ubuntu1804:~/100ASK_T113-PRO_TinaSDK5$ cp ./* -rfvd ~/100ASK_T113s3-PRO_TinaSDK5
~~~

## 编译出固件

编译固件之前，先安装一些依赖，否则编译会报错：

~~~bash
sudo apt-get update
sudo apt-get install build-essential subversion git libncurses5-dev zlib1g-dev gawk flex quilt libssl-dev xsltproc libxml-parser-perl mercurial bzr ecj cvs unzip lib32z1 lib32z1-dev lib32stdc++6 libstdc++6 libc6:i386 libstdc++6:i386 lib32ncurses5 lib32z1 bison -y
~~~

进入源码目录，执行：

~~~bash
ubuntu@ubuntu1804:~$ cd ~/100ASK_T113s3-PRO_TinaSDK5/
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$ source build/envsetup.sh 
NOTE: The SDK(/home/ubuntu/100ASK_T113s3-PRO_TinaSDK5) was successfully loaded
load openwrt... ok
Please run lunch next for openwrt.
load buildroot,bsp...ok
Invoke . build/quick.sh from your shell to add the following functions to your environment:
    croot / cl                     - Changes directory to the top of the tree
    cbrandy                        - Changes directory to the brandy
    cspl / cboot0                  - Changes directory to the spl
    csbi[10|14] / copensbi[10|14]  - Changes directory to the opensbi
    cu / cuboot / cboot            - Changes directory to the uboot
    cubsp / cubootbsp / cbootbsp   - Changes directory to the uboot-bsp
    carisc                         - Changes directory to the arisc
    ck / ckernel                   - Changes directory to the kernel
    cbsp                           - Changes directory to the bsp
    cbsptest                       - Changes directory to the bsptest
    cdts                           - Changes directory to the kernel's dts
    cchip / cchips                 - Changes directory to the chip
    cbin                           - Changes directory to the chip's bin
    cboard / cconfigs / cbd        - Changes directory to the board
    crootfs                        - Changes directory to the rootfs
    cdsp                           - Changes directory to the dsp
    crtos                          - Changes directory to the rtos
    crtoshal / crtos-hal           - Changes directory to the rtos-hal
    cbuild                         - Changes directory to the build
    cbr                            - Changes directory to the buildroot
    copenssl                       - Changes directory to the product's openssl-1.0.0
    cout                           - Changes directory to the product's output
    ckout / ckernelout             - Changes directory to the kernel output
    ctarget                        - Changes directory to the target
    chostbin                       - Changes directory to the hostbin
    cplat                          - Changes directory to the platform
    ccommon                        - Changes directory to the common
Usage: build.sh [args]
    build.sh                       - default build all
    build.sh bootloader            - only build bootloader
    build.sh kernel                - only build kernel
    build.sh buildroot_rootfs      - only build buildroot
    build.sh uboot_menuconfig       - edit uboot menuconfig
    build.sh uboot_saveconfig       - save uboot menuconfig
    build.sh menuconfig            - edit kernel menuconfig
    build.sh saveconfig            - save kernel menuconfig
    build.sh recovery_menuconfig   - edit recovery menuconfig
    build.sh recovery_saveconfig   - save recovery menuconfig
    build.sh buildroot_menuconfig  - edit buildroot menuconfig
    build.sh buildroot_saveconfig  - save buildroot menuconfig
    build.sh clean                 - clean all
    build.sh distclean             - distclean all
    build.sh pack                  - pack firmware
    build.sh pack_debug            - pack firmware with debug info output to card0
    build.sh pack_secure           - pack firmware with secureboot
Usage: pack [args]
    pack                           - pack firmware
    pack -d                        - pack firmware with debug info output to card0
    pack -s                        - pack firmware with secureboot
    pack -sd                       - pack firmware with secureboot and debug info output to card0
~~~

板级配置，根据以下选项选择（如果序号不一样，只选择与下面同名字的选项）：

* All available platform: `linux`
* All available linux_dev: `buildroot`
* All available ic: `t113`
* All available board: `evb1_auto_nand`
* All available flash: `default`

如下：
~~~ 
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$ ./build.sh config 
04-10 22:14:33.326  499364 D mkcommon  : ========ACTION List: mk_config ;========
04-10 22:14:33.330  499364 D mkcommon  : options : 
All available platform:
   0. android
   1. linux
Choice [android]: 1
All available linux_dev:
   0. bsp
   1. buildroot
   2. openwrt
Choice [bsp]: 1
All available ic:
   0. t113
Choice [t113]: 0
All available board:
   0. evb1_auto_nand
Choice [evb1_auto_nand]: 0
All available flash:
   0. default
   1. nor
Choice [default]: 0
...略
04-10 22:16:43.413  499364 I mkcommon  : buildroot defconfig is sun8iw20p1_t113_nand_defconfig 
04-10 22:16:44.178  499364 I mkcommon  : clean buildserver
04-10 22:16:44.183  499364 I mkcommon  : prepare_buildserver
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$
~~~

编译：
~~~
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$ ./build.sh
~~~
编译完成后，进行打包：
~~~
ubuntu@ubuntu1804:~/100ASK_T113s3-PRO_TinaSDK5$ ./build.sh pack
~~~

打包成功后，镜像文件保存在`<SDK>/out/t113/evb1_auto_nand/buildroot/t113_linux_evb1_auto_nand_uart0.img`。

> 注意：每次创建一个新的终端，都需要执行source build/envsetup.sh ，否则无法初始化环境变量。

## 烧录固件

烧录固件，参考[快速开始使用]()。