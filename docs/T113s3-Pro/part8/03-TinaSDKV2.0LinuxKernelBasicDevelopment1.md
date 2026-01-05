---
sidebar_position: 6
---
# 单独编译Tina Linux

## 单独编译Tina Linux

在TinaSDK内，单独编译LinuxKernel 只需要在源码 根 目录下执行 ` mkernel`命令即可开始针对于 kernel的编译操作，这里需要注意的是，mkernel  命令默认是没有生效的，您如果关闭了之前编译的终端/host系统，则需要重新 执行 `source build/envsetup.sh `命令来初始化 TinaSDK的编译环境。并且因为缓存问题，强烈建议 你 执行`make clean` 后执行，`lunch `命令，输入 4  重新选择我们的 **4. t113_100ask-tina** 单板 

``` shell
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
[2]+  Killed                  $T/tools/build/buildserver --path $T 2> /dev/null 1>&2
[1] 49529
ubuntu@ubuntu1804:~/tina-d1-h$ 
```

### 单独编译kernel

前面介绍，在TinaSDK 环境内，单独编译 Linux kernel只需要 `mkernel`一个命令即可，如下图所示：

```shell
ubuntu@ubuntu1804:~/tina-d1-h$ mkernel
===This's tina environment.===
special target, skip mboot,marisc
make[1]: Entering directory '/home/ubuntu/tina-d1-h'
make[2]: Entering directory '/home/ubuntu/tina-d1-h/target/allwinner'
make[3]: Entering directory '/home/ubuntu/tina-d1-h/target/allwinner/t113-100ask'
/home/ubuntu/tina-d1-h/scripts/kconfig.pl  + /home/ubuntu/tina-d1-h/target/allwinner/generic/config-5.4 /home/ubuntu/tina-d1-h/device/config/chips/t113/configs/100ask/linux/config-5.4 > /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target
awk '/^(#[[:space:]]+)?CONFIG_KERNEL/{sub("CONFIG_KERNEL_","CONFIG_");print}' /home/ubuntu/tina-d1-h/.config >> /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target
echo "# CONFIG_KALLSYMS_EXTRA_PASS is not set" >> /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target
echo "# CONFIG_KALLSYMS_ALL is not set" >> /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target
echo "CONFIG_KALLSYMS_UNCOMPRESSED=y" >> /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target
/home/ubuntu/tina-d1-h/scripts/metadata.pl kconfig /home/ubuntu/tina-d1-h/tmp/.packageinfo /home/ubuntu/tina-d1-h/.config 5.4 > /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.override
/home/ubuntu/tina-d1-h/scripts/kconfig.pl 'm+' '+' /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.target /dev/null /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.override > /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.set
......
rm -f /home/ubuntu/tina-d1-h/out/t113-100ask/rootfs.img
rm -f /home/ubuntu/tina-d1-h/out/t113-100ask/usr.img
dd if=/home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/root.squashfs of=/home/ubuntu/tina-d1-h/out/t113-100ask/rootfs.img bs=128k conv=sync
282+1 records in
283+0 records out
37093376 bytes (37 MB, 35 MiB) copied, 0.0216129 s, 1.7 GB/s
( cd /home/ubuntu/tina-d1-h/out/t113-100ask ; find -maxdepth 1 -type f \! -name 'md5sums'  -printf "%P\n" | sort | xargs md5sum --binary > md5sums )
( cd /home/ubuntu/tina-d1-h/out/t113-100ask ; find -maxdepth 1 -type f \! -name 'md5sums'  -printf "%P\n" | sort | xargs openssl dgst -sha256 > sha256sums )
make[4]: Leaving directory '/home/ubuntu/tina-d1-h/target/allwinner/generic/image'
make[3]: Leaving directory '/home/ubuntu/tina-d1-h/target/allwinner/t113-100ask'
make[2]: Leaving directory '/home/ubuntu/tina-d1-h/target/allwinner'
make[1]: Leaving directory '/home/ubuntu/tina-d1-h'

#### make completed successfully (25 seconds) ####

```

如果你得 kernel没有修改，整个编译过程非常快，TinaSDK系统默认会检查配置文件，看是否有改动，如果有改动，则会编译改动位置，如果无改动，就会直接跳过进行后续的头处理 打包处理。

### Kconfig 配置方法
如果你需要修改内核配置项，可以在TinaSDK源码目录下执行 `make kernel_menuconfig`命令来进入到 内核的菜单选项界面。

对于menuconfig是一种图形化配置工具，这里以 `kernel menuconfig` 作为例子，讲解如何使用 Kconfig 基础配置方法。

首先我们进入 `kernel menuconfig`

```
make kernel_menuconfig
```
```shell
ubuntu@ubuntu1804:~/tina-d1-h$ make kernel_menuconfig
===This's tina environment.===
special target, skip mboot,marisc
export MAKEFLAGS= ;make V=ss -C target/allwinner menuconfig
make[1]: Entering directory '/home/ubuntu/tina-d1-h/target/allwinner'
make[2]: Entering directory '/home/ubuntu/tina-d1-h/target/allwinner/t113-100ask'
rm -f /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config.prev
rm -f /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.configured
/home/ubuntu/tina-d1-h/scripts/kconfig.pl  + /home/ubuntu/tina-d1-h/target/allwinner/generic/config-5.4 /home/ubuntu/tina-d1-h/device/config/chips/t113/configs/100ask/linux/config-5.4 > /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61/.config
export MAKEFLAGS= ;make -C /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61 -C /home/ubuntu/tina-d1-h/out/t113-100ask/compile_dir/target/linux-t113-100ask/linux-5.4.61 HOSTCFLAGS="-O2 -I/home/ubuntu/tina-d1-h/out/host/include -I/home/ubuntu/tina-d1-h/out/host/usr/include  -Wall -Wmissing-prototypes -Wstrict-prototypes" CROSS_COMPILE="arm-openwrt-linux-muslgnueabi-" ARCH="arm" KBUILD_HAVE_NLS=no KBUILD_BUILD_USER="" KBUILD_BUILD_HOST="" CONFIG_SHELL="bash" V=''  CC="arm-openwrt-linux-muslgnueabi-gcc" menuconfig
make[3]: Entering directory '/home/ubuntu/tina-d1-h/lichee/linux-5.4'
--define-variable argument does not have a value for the variable
--define-variable argument does not have a value for the variable
scripts/kconfig/mconf  Kconfig
configuration written to .config

*** End of the configuration.
*** Execute 'make' to start the build or try 'make help'.

make[3]: Leaving directory '/home/ubuntu/tina-d1-h/lichee/linux-5.4'
make[2]: Leaving directory '/home/ubuntu/tina-d1-h/target/allwinner/t113-100ask'
make[1]: Leaving directory '/home/ubuntu/tina-d1-h/target/allwinner'

#### make completed successfully (6 seconds) ####

```
这里就是 `kernel menuconfig` 的主目录。其具体的操作方法如下图所示。

![image-20220711114825681](images\image-20220711105637061.png)

我们再进入较为常用的 `Device Driver` ，看一下各个符号的含义。

![image-20220711115616754](images\image-20220711115616754.png)

其中，可以使用 `空格键` 选中各个选项，这里以 `Multimedia support` 选项为例：

![image-20220711120726186](images\image-20220711120726186.png)

也可以使用 `Y` `M` `N` 键来修改选项：

![image-20220711120802522](images\image-20220711120802522.png)

遇到被其他依赖选择的选项，可以查看 Help 页面检查被什么选项所依赖。

![image-20220711125703598](images\image-20220711121418636.png)

进入 Help 页面后，便可以查看这个选项的依赖情况。需要注意的是，有些选项是作为底层依赖无法随意取消，例如这里示例的 `Hardware Monitoring support` 选项。

![image-20220711125333193](images\image-20220711125333193.png)

Kconfig 所创建的界面还有一个功能，就是搜索功能，方便快速的找到目标选项。这里以搜索 LCD 屏幕 `icn6202` 驱动为例。

在 Kconfig 的界面中按 `/` 键，进入搜索页面。

![image-20220711130647390](images\image-20220711130647390.png)


### Kconfig修改配置示例

调整 kernel打印等级默认为7

![image-20240312191931286](images\image-20240312191931286.png)

默认不知道 kernel的printk打印等级配置在哪里，通过搜索得到路径，上面那个  Enable support for printk 并不是 我们要找到的 调整系统默认打印等级的配置项。继续往下，找到了 一个 Delay each boot printk message by N milliseconds 通过查看这个也不是，这个配置和是 用来 调整 因为系统信息显示过快 而 调整 每个 printk的打印间隔时间的。

还有一个 Early printk  看着类似，但是也不是，不过我们可以大概 知道 是在  Kernel hacking这个 类目内，

![image-20240312192151522](images\image-20240312192151522.png)



![image-20240312192917118](images\image-20240312192917118.png)

![image-20240312192951669](images\image-20240312192951669.png)

CONFIG_MESSAGE_LOGLEVEL_DEFAULT

![image-20240312193020080](images\image-20240312193020080.png)

![image-20240312193152213](images\image-20240312193152213.png)

![image-20240313095953057](images\image-20240313095953057.png)



![image-20240312193802741](images\image-20240312193802741.png)

### 打包kernel

编译完成后，执行 `pack` 命令即可开始打包系统操作，打包完成后，最后会 提示 **pack finish** 以及使用 红色背景色 告诉你 最终输出的镜像文件。

我们通过 ssh / vmware 拖拽等工具，将其 copy 出来即可。

![image-20240312193833770](images\image-20240312193833770.png)

### 烧写更新

根据之前烧写的文章进行镜像烧录操作。

### 启动验证

启动系统后，执行 `cat /proc/sys/kernel/printk`来查看系统默认是否已经把 printk 打印等级调整到了最高。如果如下图 红色箭头 7 所示，就表示已经成功。

![image-20240313100416526](images\image-20240313100416526.png)

