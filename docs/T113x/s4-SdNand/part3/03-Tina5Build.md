---
sidebar_position: 2
---

# Tina5编译系统



## 编译固件

进入 sdk 源码根目录 `t113-tin5-v1.2` ，执行以下指令，删除配置文件：

~~~bash
ubuntu@ubuntu1804:~$ cd t113-tin5-v1.2/
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ rm .buildconfig
~~~

继续在当前路径下，执行指令，初始化环境变量，

```bash
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ source build/envsetup.sh
```

~~~bash

NOTE: The SDK(/home/ubuntu/t113-tin5-v1.2) was successfully loaded
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

![image-20251106114416322](./images/image-20251106114416322.png)

~~~bash
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ ./build.sh config
11-05 22:42:48.281    2929 D mkcommon  : ========ACTION List: mk_config ;========
11-05 22:42:48.282    2929 D mkcommon  : options : 
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
   0. t113_s4
Choice [t113_s4]: 0
All available board:
   0. 100ask
   1. 100ask_linux5_10
Choice [100ask]: 0
All available flash:
   0. default
   1. nor
Choice [default]: 0
11-05 22:42:58.438    2929 I mkcommon  : kernel relative recovery defconfig: ../../../../../device/config/chips/t113_s4/configs/100ask/linux-5.4/config-5.4-recovery
11-05 22:42:58.438    2929 I mkcommon  : kernel absolute recovery defconfig: /home/ubuntu/t113-tin5-v1.2/device/config/chips/t113_s4/configs/100ask/linux-5.4/config-5.4-recovery
11-05 22:42:58.487    2929 I mkcommon  : Prepare toolchain ...
11-05 22:42:58.494    2929 D mkcommon  : Uncompressing '/home/ubuntu/t113-tin5-v1.2/prebuilt/kernelbuilt/arm/gcc-linaro-5.3.1-2016.05-x86_64_arm-linux-gnueabi.tar.xz' to '/home/ubuntu/t113-tin5-v1.2/out/toolchain/gcc-linaro-5.3.1-2016.05-x86_64_arm-linux-gnueabi' ...
11-05 22:43:14.850    2929 I mkcommon  : kernel defconfig: generate /home/ubuntu/t113-tin5-v1.2/out/t113_s4/kernel/build/.config by /home/ubuntu/t113-tin5-v1.2/device/config/chips/t113_s4/configs/100ask/linux-5.4/config-5.4
11-05 22:43:14.851    2929 I mkcommon  : Prepare toolchain ...
11-05 22:43:14.932    2929 D mkcommon  : make: Entering directory '/home/ubuntu/t113-tin5-v1.2/kernel/linux-5.4'
11-05 22:43:14.934    2929 D mkcommon  : make[1]: Entering directory '/home/ubuntu/t113-tin5-v1.2/out/t113_s4/kernel/build'
11-05 22:43:15.055    2929 D mkcommon  : GEN     Makefile
11-05 22:43:15.062    2929 D mkcommon  : HOSTCC  scripts/basic/fixdep
11-05 22:43:15.472    2929 D mkcommon  : HOSTCC  scripts/kconfig/conf.o
11-05 22:43:15.601    2929 D mkcommon  : HOSTCC  scripts/kconfig/confdata.o
11-05 22:43:15.842    2929 D mkcommon  : HOSTCC  scripts/kconfig/expr.o
11-05 22:43:16.017    2929 D mkcommon  : LEX     scripts/kconfig/lexer.lex.c
11-05 22:43:16.040    2929 D mkcommon  : YACC    scripts/kconfig/parser.tab.[ch]
11-05 22:43:16.080    2929 D mkcommon  : HOSTCC  scripts/kconfig/lexer.lex.o
11-05 22:43:16.247    2929 D mkcommon  : HOSTCC  scripts/kconfig/parser.tab.o
11-05 22:43:16.562    2929 D mkcommon  : HOSTCC  scripts/kconfig/preprocess.o
11-05 22:43:16.662    2929 D mkcommon  : HOSTCC  scripts/kconfig/symbol.o
11-05 22:43:16.931    2929 D mkcommon  : HOSTLD  scripts/kconfig/conf
11-05 22:43:16.949    2929 D mkcommon  : *** Default configuration is based on '../../../../../device/config/chips/t113_s4/configs/100ask/linux-5.4/config-5.4'
11-05 22:43:17.611    2929 D mkcommon  : #
11-05 22:43:17.612    2929 D mkcommon  : # configuration written to .config
11-05 22:43:17.613    2929 D mkcommon  : #
11-05 22:43:17.616    2929 D mkcommon  : make[1]: Leaving directory '/home/ubuntu/t113-tin5-v1.2/out/t113_s4/kernel/build'
11-05 22:43:17.618    2929 D mkcommon  : make: Leaving directory '/home/ubuntu/t113-tin5-v1.2/kernel/linux-5.4'
make: Entering directory '/home/ubuntu/t113-tin5-v1.2/buildroot/buildroot-201902'
mkdir -p /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/lxdialog
PKG_CONFIG_PATH="" make CC="/usr/bin/gcc" HOSTCC="/usr/bin/gcc" \
    obj=/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config -C support/kconfig -f Makefile.br conf
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -I/usr/include/ncursesw -DCURSES_LOC="<ncurses.h>" -DNCURSES_WIDECHAR=1 -DLOCALE  -I/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config -DCONFIG_=\"\"  -MM *.c > /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/.depend 2>/dev/null || :
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -I/usr/include/ncursesw -DCURSES_LOC="<ncurses.h>" -DNCURSES_WIDECHAR=1 -DLOCALE  -I/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config -DCONFIG_=\"\"   -c conf.c -o /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/conf.o
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -I/usr/include/ncursesw -DCURSES_LOC="<ncurses.h>" -DNCURSES_WIDECHAR=1 -DLOCALE  -I/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config -DCONFIG_=\"\"  -I. -c /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/zconf.tab.c -o /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/zconf.tab.o
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -I/usr/include/ncursesw -DCURSES_LOC="<ncurses.h>" -DNCURSES_WIDECHAR=1 -DLOCALE  -I/home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config -DCONFIG_=\"\"   /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/conf.o /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/zconf.tab.o  -o /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/conf
rm /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/build/buildroot-config/zconf.tab.c
  GEN     /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/Makefile
../config/buildroot/allwinner/display/gpu_um_pub/Config.in:21:warning: config symbol defined without type
Config.in.legacy:1769:warning: choice value used outside its choice group
#
# configuration written to /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot/buildroot/.config
#
make: Leaving directory '/home/ubuntu/t113-tin5-v1.2/buildroot/buildroot-201902'
11-05 22:43:25.031    2929 I mkcommon  : buildroot defconfig is sun8iw20p1_t113_defconfig 
11-05 22:43:25.352    2929 I mkcommon  : clean buildserver
11-05 22:43:25.353    2929 I mkcommon  : prepare_buildserve
~~~

配置完成后，可以执行 ./build.sh 开始编译。

~~~bash
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ ./build.sh
11-05 22:46:00.269    6893 D mkcommon  : ========ACTION List: build_linuxdev;========
11-05 22:46:00.270    6893 D mkcommon  : options : 
11-05 22:46:00.271    6893 I mkcommon  : ----------------------------------------
11-05 22:46:00.271    6893 I mkcommon  : build linuxdev ...
11-05 22:46:00.272    6893 I mkcommon  : chip: sun8iw20p1
11-05 22:46:00.273    6893 I mkcommon  : platform: linux
11-05 22:46:00.275    6893 I mkcommon  : kernel: linux-5.4
11-05 22:46:00.276    6893 I mkcommon  : board: 100ask
11-05 22:46:00.277    6893 I mkcommon  : output: /home/ubuntu/t113-tin5-v1.2/out/t113_s4/100ask/buildroot
11-05 22:46:00.278    6893 I mkcommon  : ----------------------------------------
11-05 22:46:00.288    6893 I mkcommon  : build rtos ...
11-05 22:46:00.325    6893 D mkcommon  : Setup env done!
11-05 22:46:00.327    6893 D mkcommon  : Run lunch_rtos to select project
11-05 22:46:00.360    6893 D mkcommon  : last=t113_s4_c906_evb1_auto
11-05 22:46:00.361    6893 D mkcommon  : select=t113_s4_c906_evb1_auto...
11-05 22:46:00.362    6893 D mkcommon  : t113_s4_c906/evb1_auto
11-05 22:46:00.366    6893 D mkcommon  : '/home/ubuntu/t113-tin5-v1.2/rtos/lichee/rtos/projects/t113_s4_c906/evb1_auto/defconfig' -> '/home/ubuntu/t113-tin5-v1.2/rtos/lichee/rtos/.config'
11-05 22:46:00.381    6893 D mkcommon  : ============================================
11-05 22:46:00.382    6893 D mkcommon  : RTOS_BUILD_TOP=/home/ubuntu/t113-tin5-v1.2/rtos
11-05 22:46:00.383    6893 D mkcommon  : RTOS_TARGET_ARCH=riscv
11-05 22:46:00.384    6893 D mkcommon  : RTOS_TARGET_CHIP=sun8iw20p1
11-05 22:46:00.385    6893 D mkcommon  : RTOS_TARGET_DEVICE=t113_s4_c906
11-05 22:46:00.386    6893 D mkcommon  : RTOS_PROJECT_NAME=t113_s4_c906_evb1_auto
11-05 22:46:00.386    6893 D mkcommon  : ============================================
11-05 22:46:00.392    6893 D mkcommon  : Run mrtos_menuconfig to config rtos
11-05 22:46:00.393    6893 D mkcommon  : Run m or mrtos to build rtos
11-05 22:46:00.393    6893 D mkcommon  : build rtos ...
11-05 22:46:00.408    6893 D mkcommon  : Dark Builder

~~~

等待一段时间（约30~90分）具体根据电脑性能而定，编译完成后，在当前目录下，执行以下指令，进行镜像打包，

~~~bash
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ ./build.sh pack
~~~

镜像打包完成后，执行 `cout` 会进入到镜像生成的路径。