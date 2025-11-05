---
sidebar_position: 2
---

# 开发环境搭建

本章节将讲解如何在 **ubuntu18.04.6** 搭建 T113s4prov1.3 sdnand版本的开发环境。

## 获取Tina5源码

首先，在Windows上访问下面的论坛地址，打开Tina5-SDK基础包获取：通过网盘分享的文件：T113s4sdnand-SDK
链接: https://pan.baidu.com/s/1JhS8JNbhPgcCiaVDay_rYw?pwd=bdz2 提取码: bdz2 

> 通过百度网盘下载，大小约21.81G，名称为t113s4-tin5SDK-8939a92cf6401f1d2e156bc1e248d5e4.tar.gz 下载完成后通过网络等方式拷贝到虚拟机目录下。

把基础包拷贝到虚拟机之后，执行以下指令，进行解压：

~~~bash
ubuntu@ubuntu1804:~$ tar -xvf t113s4-tin5SDK-8939a92cf6401f1d2e156bc1e248d5e4.tar.gz -c tina5sdk-bsp
~~~

解压后，sdk基础包的命名是`t113s4-tin5SDK`。

出现以上文件，说明Tina5-SDK源码获取成功。

## 获取补丁包


基于T113s4pro v1.3 sdnand版本开发板，我们提供了一个扩展补丁包，执行以下指令，获取扩展支持仓库，然后加以应用，

~~~ bash
ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/100ASK_T113s4-SdNand_TinaSDK5.git
ubuntu@ubuntu1804:~$ cd ~/tina5sdk-bsp
ubuntu@ubuntu1804:~/tina5sdk-bsp$ cp ./100ASK_T113s4-SdNand_TinaSDK5/* -rfvd .
~~~

## 编译固件

进入 sdk 源码根目录 `tina5sdk-bsp` ，执行以下指令，删除配置文件：

~~~bash
ubuntu@ubuntu1804:~$ cd tina5sdk-bsp/
ubuntu@ubuntu1804:~/tina5sdk-bsp$ rm .buildconfig
~~~

继续在当前路径下，执行指令，初始化环境变量，

~~~bash
ubuntu@ubuntu1804:~/tina5sdk-bsp$ source build/envsetup.sh
NOTE: The SDK(/home/ubuntu/tina5sdk-bsp) was successfully loaded
load openwrt... ok
Please run lunch next for openwrt.
load buildroot,bsp...ok
Invoke . build/quick.sh from your shell to add the following functions to your environment:
    croot                          - Changes directory to the top of the tree
    cbsp                           - Changes directory to the bsp
    cbsptest                       - Changes directory to the bsptest
    ckernel                        - Changes directory to the kernel
    cbrandy                        - Changes directory to the brandy
    cboot                          - Changes directory to the uboot
    cbr                            - Changes directory to the buildroot
    cchips                         - Changes directory to the board
    cconfigs                       - Changes directory to the board's config
    cbin                           - Changes directory to the board's bin
    cdts                           - Changes directory to the kernel's dts
    ckernelout                     - Changes directory to the kernel output
    cout                           - Changes directory to the product's output
    copenssl                       - Changes directory to the product's openssl-1.0.0
Usage: build.sh [args]
    build.sh                       - default build all
    build.sh bootloader            - only build bootloader
    build.sh kernel                - only build kernel
    build.sh buildroot_rootfs      - only build buildroot
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

接着执行编译指令，首次编译需要我们选择相应的单板选项。如下：

~~~bash
ubuntu@ubuntu1804:~/tina5sdk-bsp$ ./build.sh 
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
   1. t113_i
Choice [t113]: 0
All available board:
   0. dev
   1. evb1
   2. evb1_auto
   3. evb1_auto_nor
   4. pro
Choice [dev]: 2
All available flash:
   0. default
   1. nor
Choice [default]: 0
INFO: Prepare toolchain ...
INFO: kernel defconfig: generate /home/ubuntu/tina5sdk-bsp/out/t113/kernel/build/.config by /home/ubuntu/tina5sdk-bsp/device/config/chips/t113/configs/evb1_auto/linux-5.4/config-5.4
INFO: Prepare toolchain ...
make: Entering directory '/home/ubuntu/tina5sdk-bsp/kernel/linux-5.4'
make[1]: Entering directory '/home/ubuntu/tina5sdk-bsp/out/t113/kernel/build'
  GEN     Makefile
*** Default configuration is based on '../../../../../device/config/chips/t113/configs/evb1_auto/linux-5.4/config-5.4'
#
# No change to .config
#
make[1]: Leaving directory '/home/ubuntu/tina5sdk-bsp/out/t113/kernel/build'
make: Leaving directory '/home/ubuntu/tina5sdk-bsp/kernel/linux-5.4'
make: Entering directory '/home/ubuntu/tina5sdk-bsp/buildroot/buildroot-201902'
  GEN     /home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/Makefile
Config.in.legacy:1769:warning: choice value used outside its choice group
#
# configuration written to /home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot/buildroot/.config
#
make: Leaving directory '/home/ubuntu/tina5sdk-bsp/buildroot/buildroot-201902'
INFO: buildroot defconfig is sun8iw20p1_t113_defconfig 
INFO: clean buildserver
INFO: prepare_buildserver
========ACTION List: build_linuxdev;========
options : 
INFO: ----------------------------------------
INFO: build linuxdev ...
INFO: chip: sun8iw20p1
INFO: platform: linux
INFO: kernel: linux-5.4
INFO: board: evb1_auto
INFO: output: /home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot
INFO: ----------------------------------------
INFO: don't build dtbo ...
INFO: build arisc
find: '/home/ubuntu/tina5sdk-bsp/brandy/brandy-2.0/spl': No such file or directory
find: '/home/ubuntu/tina5sdk-bsp/brandy/dramlib': No such file or directory
INFO: build_bootloader: brandy_path=/home/ubuntu/tina5sdk-bsp/brandy/brandy-2.0
INFO: skip build brandy.
INFO: build kernel ...
INFO: prepare_buildserver
INFO: Prepare toolchain ...
Makefile:681: arch//Makefile: No such file or directory
make: *** No rule to make target 'arch//Makefile'.  Stop.
ERROR: build  Failed
INFO: build kernel failed
~~~

首次编译，会出现以上报错，加上参数 `-d` ，接着编译。

~~~bash
ubuntu@ubuntu1804:~/tina5sdk-bsp$ ./build.sh -d
========ACTION List: build_linuxdev;========
options : 
INFO: ----------------------------------------
INFO: build linuxdev ...
INFO: chip: sun8iw20p1
INFO: platform: linux
INFO: kernel: linux-5.4
INFO: board: evb1_auto
INFO: output: /home/ubuntu/tina5sdk-bsp/out/t113/evb1_auto/buildroot
INFO: ----------------------------------------
INFO: don't build dtbo ...
INFO: build arisc
......省略
Exportable Squashfs 4.0 filesystem, xz compressed, data block size 131072
        compressed data, compressed metadata, compressed fragments, no xattrs
        duplicates are removed
Filesystem size 56836.34 Kbytes (55.50 Mbytes)
        38.89% of uncompressed filesystem size (146148.83 Kbytes)
Inode table size 54570 bytes (53.29 Kbytes)
        23.73% of uncompressed inode table size (229985 bytes)
Directory table size 70900 bytes (69.24 Kbytes)
        49.04% of uncompressed directory table size (144579 bytes)
Number of duplicate files found 37
Number of inodes 6685
Number of files 5570
Number of fragments 397
Number of symbolic links  813
Number of device nodes 0
Number of fifo nodes 0
Number of socket nodes 0
Number of directories 302
Number of ids (unique uids + gids) 1
Number of uids 1
        root (0)
Number of gids 1
        root (0)
INFO: pack rootfs ok ...
INFO: ----------------------------------------
INFO: build Tina OK.
INFO: ----------------------------------------
~~~

需要等待一段时间，编译完成后，在当前目录下，执行以下指令，进行镜像打包，

~~~bash
ubuntu@ubuntu1804:~/tina5sdk-bsp$ ./build.sh pack
~~~

镜像打包完成后，执行 `cout` 会进入到镜像生成的路径。