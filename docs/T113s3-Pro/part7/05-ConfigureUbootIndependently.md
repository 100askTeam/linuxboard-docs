---
sidebar_position: 5
---
#  单独配置uboot

### 1. uboot设备树文件 环境变量

```bash
ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask$ ls -la
-rw-rw-r-- 1 ubuntu ubuntu  2106 Mar 17 04:19 env.cfg
-rwxrwxr-x 1 ubuntu ubuntu  8123 Mar 17 04:19 sys_config.fex
-rwxrwxr-x 1 ubuntu ubuntu 12929 Mar 17 04:19 uboot-board.dts
```

### 2. uboot所有源码所在位置

```bash
ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018$ ls -l
total 424
drwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 api
drwxrwxr-x  15 ubuntu ubuntu   4096 May 25  2022 arch
drwxrwxr-x 187 ubuntu ubuntu   4096 May 25  2022 board
drwxrwxr-x   7 ubuntu ubuntu  12288 Mar 27 03:43 cmd
drwxrwxr-x   5 ubuntu ubuntu   4096 Mar 27 03:43 common
-rw-rw-r--   1 ubuntu ubuntu   2304 May 25  2022 config.mk
drwxrwxr-x   2 ubuntu ubuntu   4096 Mar 17 04:19 configs
drwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 disk
drwxrwxr-x  10 ubuntu ubuntu  12288 May 25  2022 doc
drwxrwxr-x   3 ubuntu ubuntu   4096 May 25  2022 Documentation
drwxrwxr-x  63 ubuntu ubuntu   4096 Mar 27 03:43 drivers
drwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 dts
drwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 env
drwxrwxr-x   4 ubuntu ubuntu   4096 May 25  2022 examples
drwxrwxr-x  13 ubuntu ubuntu   4096 Mar 27 03:43 fs
drwxrwxr-x  35 ubuntu ubuntu  20480 Mar 17 04:22 include
-rw-rw-r--   1 ubuntu ubuntu   1863 May 25  2022 Kbuild
-rw-rw-r--   1 ubuntu ubuntu  15943 May 25  2022 Kconfig
drwxrwxr-x  19 ubuntu ubuntu   4096 Mar 27 03:43 lib
drwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 Licenses
-rw-rw-r--   1 ubuntu ubuntu  14760 May 25  2022 MAINTAINERS
-rw-rw-r--   1 ubuntu ubuntu  67193 May 25  2022 Makefile
-rw-rw-r--   1 ubuntu ubuntu   2826 May 25  2022 make_nand
drwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 net
drwxrwxr-x   5 ubuntu ubuntu   4096 May 25  2022 post
-rw-rw-r--   1 ubuntu ubuntu 181900 May 25  2022 README
drwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 rtos
drwxrwxr-x   6 ubuntu ubuntu   4096 May 25  2022 scripts
-rw-rw-r--   1 ubuntu ubuntu     17 May 25  2022 snapshot.commit
drwxrwxr-x   5 ubuntu ubuntu   4096 Mar 27 03:43 sprite
drwxrwxr-x  11 ubuntu ubuntu   4096 Mar 27 03:43 test
drwxrwxr-x  14 ubuntu ubuntu   4096 Mar 27 03:43 tools
ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018$
```


### 3.  开发板uboot配置文件位置

``` bash
ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018/configs$ ls -lh
total 28K
-rw-rw-r-- 1 ubuntu ubuntu 5.1K May 25  2022 sun20iw1p1_defconfig
-rw-rw-r-- 1 ubuntu ubuntu 2.2K May 25  2022 sun20iw1p1_nor_defconfig
-rw-rw-r-- 1 ubuntu ubuntu 4.9K Mar 17 04:19 sun8iw20p1_defconfig
-rw-rw-r-- 1 ubuntu ubuntu 3.0K Mar 17 04:19 sun8iw20p1_nor_defconfig
-rw-rw-r-- 1 ubuntu ubuntu 2.4K Mar 17 04:19 sun8iw20p1_uart3_defconfig
ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018/configs$
```



### 4.  Tina系统指定配置文件

```shell
ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask$ cat BoardConfig.mk
LICHEE_CHIP:=sun8iw20p1
LICHEE_ARCH:=arm
LICHEE_BRANDY_VER:=2.0
LICHEE_BRANDY_DEFCONF:=sun8iw20p1_uart3_defconfig
LICHEE_KERN_VER:=5.4
LICHEE_KERN_DEFCONF:=sun8iw20p1smp_defconfig
LICHEE_REDUNDANT_ENV_SIZE:=0x20000
```



### 5. 编译打包与更新

```bash
ubuntu@ubuntu1804:~/tina-d1-h$ mboot
t113_100ask t113 t113-100ask
build_boot platform:sun8iw20p1_uart3 o_option:uboot
Prepare toolchain ...
build for sun8iw20p1_uart3_defconfig ...
  CLEAN   dts/../arch/arm/dts
  CLEAN   dts
  CLEAN   examples/standalone
  CLEAN   tools
  CLEAN   tools/lib tools/common
  CLEAN   board/sunxi/sunxi_challenge.c u-boot.lds u-boot.dtb u-boot.cfg.configs u-boot.map u-boot-nodtb.bin u-boot.srec u-boot.cfg u-boot.bin u-boot-dtb.dts u-boot-sun8iw20p1.bin u-boot-dtb.bin u-boot u-boot.sym System.map
  CLEAN   scripts/basic
  CLEAN   scripts/kconfig
  CLEAN   include/config include/generated
  CLEAN   .config include/autoconf.mk.dep include/autoconf.mk include/config.h
ubuntu@ubuntu1804:~/tina-d1-h$ make -j32

ubuntu@ubuntu1804:~/tina-d1-h$ pack
```

使用 `PhoenixSuit` 将编译生成的镜像烧录至开发板内以实现更新uboot作用。