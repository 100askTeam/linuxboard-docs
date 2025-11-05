---
sidebar_position: 3
---
# 适配TFT屏与HDMI功能

本章节将讲解如何基于 Tina5 v1.2 SDK 在 T113s3-i 开发板上实现TFT屏与HDMI显示功能。

---

如果需要先查看显示效果，可以下载下面这个镜像：

[T113i-DevKit-Support-MIPI-To-HDMI](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Images/T113i-DevKit-Support-MIPI-To-HDMI.7z)

硬件可以准备这些：

[韦东山全志T113i嵌入式Linux开发板超高性价比板载WIFI MIPI显示-tmall.com天猫](https://detail.tmall.com/item.htm?id=795375482080&skuId=6054280651964&spm=a21xtw.29178619.0.0)

## 一、获取Tina5-V1.2_SDK源码

### 1. 获取源码

获取源码链接如下：
https://pan.baidu.com/s/1A_HER2QyTk0BIVxOuGoAyQ?pwd=n8ii

上传至虚拟机~/Downloads/ 。获取文件如下：
~~~bash
.
├── md5.txt
├── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.00
├── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.01
└── 100ASK_T113s3-PRO_TinaSDK5.tar.gz.02

0 directories, 4 files
~~~

执行以下指令，查看MD5校验值：

~~~bash
md5sum 100ASK_T113s3-PRO_TinaSDK5.tar.gz.0*
~~~

如下：

~~~bash
35577ee74334ee8bd9c5fcca844795b3  100ASK_T113s3-PRO_TinaSDK5.tar.gz.00
3420eef596165883cde2e14a41a12358  100ASK_T113s3-PRO_TinaSDK5.tar.gz.01
ad730f3b76e3943652b56c8c5335f52c  100ASK_T113s3-PRO_TinaSDK5.tar.gz.02
~~~

确保校验值对上。否则需要重新上传。

### 2. 解压源码

执行以下指令，解压源码：

~~~bash
cat 100ASK_T113s3-PRO_TinaSDK5.tar.gz.0* | tar -xzvf -
~~~

等待一段时间，即可解压完成。如下所示：
~~~bash
.
├── 100ASK_T113s3-PRO_TinaSDK5
├── md5.txt
├── 100ASK_T113s3-PRO_TinaSDK5.00
├── 100ASK_T113s3-PRO_TinaSDK5.01
└── 100ASK_T113s3-PRO_TinaSDK5.02

1 directory, 4 files
~~~

我们现在用的开发板是 T113-i，给SDK换个名称，并移动到 ~/ 目录。执行指令如下：

~~~bash
mv 100ASK_T113s3-PRO_TinaSDK5 T113i-Tina5.0-v1.2-SDK
mv T113i-Tina5.0-v1.2-SDK ~/
~~~

## 二、拉取SDK补丁包

### 1. 获取补丁包

补丁仓库目前已经更新，获取相应的补丁包，执行如下指令：

~~~bash
cd ~
git clone -b tft-and-hdmi --single-branch https://github.com/DongshanPI/T113i_DevKitF_Tina5SDK.git
~~~

### 2. 拷贝补丁包

执行以下指令，拷贝补丁包：

~~~bash
cd ~/T113i_DevKitF_Tina5SDK
cp * ~/T113i-Tina5.0-v1.2-SDK -rfvd
~~~

## 三、编译SDK

### 1. 下载编译环境依赖

编译SDK需要依赖虚拟机的环境，为了顺利编译SDK，执行如下指令：

~~~bash
sudo apt-get update
sudo apt-get install build-essential subversion git libncurses5-dev zlib1g-dev gawk flex quilt libssl-dev xsltproc libxml-parser-perl mercurial bzr ecj cvs unzip lib32z1 lib32z1-dev lib32stdc++6 libstdc++6 libc6:i386 libstdc++6:i386 lib32ncurses5 lib32z1 bison -y
~~~

### 2. 编译固件

进入源码目录，执行：

~~~bash
cd ~/T113i-Tina5.0-v1.2-SDK
source build/envsetup.sh
~~~

打印信息如下：

~~~bash
ubuntu@ubuntu1804:~/T113i-Tina5.0-v1.2-SDK$ source build/envsetup.sh
NOTE: The SDK(/home/ubuntu/T113i-Tina5.0-v1.2-SDK) was successfully loaded
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

接下来是板级配置，根据以下选项选择（**如果发现序号不一样，只选择与下面同名字的选项**）：

- All available platform: `linux`
- All available linux_dev: `buildroot`
- All available ic: `t113_i`
- All available board: `evb1_auto`
- All available flash: `default`

执行指令如下：

~~~bash
./build.sh config
~~~

相关打印信息如下：

~~~bash
ubuntu@ubuntu1804:~/T113i-Tina5.0-v1.2-SDK$ ./build.sh config
08-01 06:25:47.354    4934 D mkcommon  : ========ACTION List: mk_config ;========
08-01 06:25:47.355    4934 D mkcommon  : options :
All available platform:
   0. android
   1. linux
Choice [linux]: 1
All available linux_dev:
   0. bsp
   1. buildroot
   2. openwrt
Choice [buildroot]: 1
All available ic:
   0. t113
   1. t113_i
Choice [t113_i]: 1
All available board:
   0. evb1_auto
Choice [evb1_auto]: 0
All available flash:
   0. default
   1. nor
Choice [default]: 0
08-01 06:26:02.140    4934 I mkcommon  : kernel relative recovery defconfig: ../../../../../device/config/chips/t113_i/configs/evb1_auto/linux-5.4/config-5.4-recovery
08-01 06:26:02.141    4934 I mkcommon  : kernel absolute recovery defconfig: /home/ubuntu/T113i-Tina5.0-v1.2-SDK/device/config/chips/t113_i/configs/evb1_auto/linux-5.4/config-5.4-recovery
08-01 06:26:02.158    4934 I mkcommon  : Prepare toolchain ...
08-01 06:26:02.193    4934 I mkcommon  : kernel defconfig: generate /home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i/kernel/build/.config by /home/ubuntu/T113i-Tina5.0-v1.2-SDK/device/config/chips/t113_i/configs/evb1_auto/linux-5.4/config-5.4
08-01 06:26:02.195    4934 I mkcommon  : Prepare toolchain ...
08-01 06:26:02.231    4934 D mkcommon  : make: Entering directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/kernel/linux-5.4'
08-01 06:26:02.235    4934 D mkcommon  : make[1]: Entering directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i/kernel/build'
08-01 06:26:02.379    4934 D mkcommon  : GEN     Makefile
08-01 06:26:02.402    4934 D mkcommon  : *** Default configuration is based on '../../../../../device/config/chips/t113_i/configs/evb1_auto/linux-5.4/config-5.4'
08-01 06:26:02.798    4934 D mkcommon  : #
08-01 06:26:02.799    4934 D mkcommon  : # No change to .config
08-01 06:26:02.800    4934 D mkcommon  : #
08-01 06:26:02.801    4934 D mkcommon  : make[1]: Leaving directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i/kernel/build'
08-01 06:26:02.803    4934 D mkcommon  : make: Leaving directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/kernel/linux-5.4'
make: Entering directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/buildroot/buildroot-201902'
  GEN     /home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i/evb1_auto/buildroot/buildroot/Makefile
../config/buildroot/allwinner/display/gpu_um_pub/Config.in:21:warning: config symbol defined without type
Config.in.legacy:1769:warning: choice value used outside its choice group
#
# configuration written to /home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i/evb1_auto/buildroot/buildroot/.config
#
make: Leaving directory '/home/ubuntu/T113i-Tina5.0-v1.2-SDK/buildroot/buildroot-201902'
08-01 06:26:03.152    4934 I mkcommon  : buildroot defconfig is sun8iw20p1_t113_defconfig
08-01 06:26:03.439    4934 I mkcommon  : clean buildserver
08-01 06:26:03.442    4934 I mkcommon  : prepare_buildserver
~~~

接着，开始编译SDK，执行以下指令（这里打印信息省略）：

~~~bash
./build.sh
~~~

出现以下信息，即是编译成功：

~~~bash
08-01 06:29:51.482    6805 D mkcommon  : root (0)
08-01 06:29:51.483    6805 D mkcommon  : Number of gids 1
08-01 06:29:51.484    6805 D mkcommon  : root (0)
08-01 06:29:51.486    6805 I mkcommon  : pack rootfs ok ...
08-01 06:29:51.487    6805 I mkcommon  : ----------------------------------------
08-01 06:29:51.488    6805 I mkcommon  : build OK.
08-01 06:29:51.490    6805 I mkcommon  : ----------------------------------------
~~~

编译完成后，打包固件，执行指令如下：

~~~bash
./build.sh pack
~~~

最后，固件会存放在 `/home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i_linux_evb1_auto_uart0.img`：

~~~bash
08-01 06:30:52.516   28395 D pack      : FileLength=c0381c4
08-01 06:30:52.518   28395 D pack      : BuildImg0
08-01 06:30:52.519   28395 D pack      : Dragon execute image.cfg SUCCESS !
08-01 06:30:52.772   28395 D pack      : ----------image is at----------
08-01 06:30:52.773   28395 I pack      : 275M   /home/ubuntu/T113i-Tina5.0-v1.2-SDK/out/t113_i_linux_evb1_auto_uart0.img
08-01 06:30:52.775   28395 D pack      : pack finish
~~~

### 3. 烧录固件

参考 [更新系统固件 | 东山Π](https://docs.100ask.net/dshanpi/docs/T113i-Industrial/part1/03-1_FlashSystem) 文档进行烧录我们编译出来的固件。

## 四、TFT和HDMI屏幕显示效果

烧录固件之后，默认会启动程序。

可以看到TFT屏显示如下：

![image-20250801183628556](images/image-20250801183628556.png)

接上HDMI屏幕，显示如下：

![image-20250801183724637](images/image-20250801183724637.png)