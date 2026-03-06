---
sidebar_position: 1
---
# 开发环境搭建

本章节将讲解 T113s3-pro(XR829版本) 和 T113s3-pro(WiFi6增强版aic8800d80) 两款开发板 Tina4-SDK 的环境搭建。

> 两款开发板的环境搭建不一样，需要找到下面对应开发板章节。

## 获取Tina4-SDK源码

> 注意：两款开发板SDK源码一样，补丁包不一样。

查看[源码工具文档手册]()，下载 `Tina4-SDK源码` 压缩包，上传至ubuntu，创建文件夹用来保存源码：

~~~bash
ubuntu@ubuntu1804:~$ mkdir Tina_SDK
ubuntu@ubuntu1804:~$ cd Tina_SDK/
ubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1
.
├── tina-d1-h.tar.bz2.00
├── tina-d1-h.tar.bz2.01
├── tina-d1-h.tar.bz2.02
├── tina-d1-h.tar.bz2.03
├── tina-d1-h.tar.bz2.04
├── tina-d1-h.tar.bz2.05
├── tina-d1-h.tar.bz2.06
├── tina-d1-h.tar.bz2.07
└── tina-d1-h.tar.bz2.08

0 directories, 9 files
~~~

查看所有文件MD5校验值：

~~~ bash
ubuntu@ubuntu1804:~/Tina_SDK$ md5sum tina-d1-h.tar.bz2.*
e755bae00cd76afc3fb276b4e3fd86ba  tina-d1-h.tar.bz2.00
cb60ecfdb51c624ff3cbd7b24552866f  tina-d1-h.tar.bz2.01
54e56a4cf1cef46ca0a94b85ea1d33a1  tina-d1-h.tar.bz2.02
4988fa08827c0f7af2dc170145e24b26  tina-d1-h.tar.bz2.03
a0463bcf8e73db27b5ecafaac593a919  tina-d1-h.tar.bz2.04
a87382ca16a8c12b3a94f1cad99ce77e  tina-d1-h.tar.bz2.05
5973530baa3b282108351818641c27fd  tina-d1-h.tar.bz2.06
ccd63e1d16534b364a101d2d44416261  tina-d1-h.tar.bz2.07
e0d72713565f4424ea43c07e15a38139  tina-d1-h.tar.bz2.08
~~~

确保校验值对上。否则需要重新上传。

解压源码：

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ cat tina-d1-h.tar.bz2.* | tar -jxv
~~~

等待一段时间，即可解压完成。

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1
.
├── tina-d1-h
├── tina-d1-h.tar.bz2.00
├── tina-d1-h.tar.bz2.01
├── tina-d1-h.tar.bz2.02
├── tina-d1-h.tar.bz2.03
├── tina-d1-h.tar.bz2.04
├── tina-d1-h.tar.bz2.05
├── tina-d1-h.tar.bz2.06
├── tina-d1-h.tar.bz2.07
└── tina-d1-h.tar.bz2.08

1 directory, 9 files
ubuntu@ubuntu1804:~/Tina_SDK$ mv tina-d1-h ~/
~~~

## T113s3-pro(XR829版)补丁获取

T113s3-pro（XR829版）按照如下方式获取扩展支持仓库，然后加以应用：

~~~bash
ubuntu@ubuntu1804:~/Tina_SDK$ cd ~/
ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/100ASK_T113-Pro_TinaSDK.git
ubuntu@ubuntu1804:~$ cd 100ASK_T113-Pro_TinaSDK/
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ ls
device  lichee  package  prebuilt  README.md  target
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ git submodule update --init
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ cp ./* -rfvd ~/tina-d1-h
~~~

## T113s3-pro(WiFi6增强版)补丁获取

T113s3-pro（WiFi6增强版）按照如下方式获取扩展支持仓库，然后加以应用：

~~~bash
ubuntu@ubuntu1804:~$ git clone -b spi-nand-512M https://github.com/DongshanPI/100ASK_T113-Pro_TinaSDK.git
ubuntu@ubuntu1804:~$ cd 100ASK_T113-Pro_TinaSDK/
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ ls
device  lichee  package  target
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ git submodule update --init
ubuntu@ubuntu1804:~/100ASK_T113-Pro_TinaSDK$ cp ./* -rfvd ~/tina-d1-h
~~~

## 编译出固件

编译固件之前，先安装一些依赖，否则编译会报错：

~~~bash
sudo apt-get install build-essential subversion git libncurses5-dev zlib1g-dev gawk flex quilt libssl-dev xsltproc libxml-parser-perl mercurial bzr ecj cvs unzip lib32z1 lib32z1-dev lib32stdc++6 libstdc++6 libc6:i386 libstdc++6:i386 lib32ncurses5 lib32z1 -y
~~~

进入源码目录，执行：

~~~bash
ubuntu@ubuntu1804:~$ cd tina-d1-h/
ubuntu@ubuntu1804:~/tina-d1-h$ source build/envsetup.sh 
Setup env done! Please run lunch next.
ubuntu@ubuntu1804:~/tina-d1-h$ lunch

You're building on Linux

Lunch menu... pick a combo:
     1. d1-h_nezha_min-tina
     2. d1-h_nezha-tina
     3. d1s_nezha-tina
     4. t113_100ask-tina


Which would you like? [Default t113_100ask]: 4
============================================
TINA_BUILD_TOP=/home/ubuntu/tina-d1-h
TINA_TARGET_ARCH=arm
TARGET_PRODUCT=t113_100ask
TARGET_PLATFORM=t113
TARGET_BOARD=t113-100ask
TARGET_PLAN=100ask
TARGET_BUILD_VARIANT=tina
TARGET_BUILD_TYPE=release
TARGET_KERNEL_VERSION=5.4
TARGET_UBOOT=u-boot-2018
TARGET_CHIP=sun8iw20p1
============================================
clean buildserver
[1] 24251
ubuntu@ubuntu1804:~/tina-d1-h$ make
...
#### make completed successfully (01:16 (mm:ss)) ####
ubuntu@ubuntu1804:~/tina-d1-h$ pack
~~~

打包成功后，镜像文件保存在`/home/ubuntu/tina-d1-h/out/t113-100ask/tina_t113-100ask_uart3.img`。

> 注意：每次创建一个新的终端，都需要执行source build/envsetup.sh 和 lunch 操作，否则无法初始化环境变量。

## 烧录固件

烧录固件，参考[快速开始使用]()。