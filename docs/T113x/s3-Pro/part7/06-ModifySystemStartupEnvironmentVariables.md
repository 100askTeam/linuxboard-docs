---
sidebar_position: 6
---
# 修改系统启动环境变量

### 查看uboot默认env

首先连接好开发板的串口终端，在开发板上后，一直快速短按 ` 空格键` 即可进入 uboot的 shell 交互命令行内。在命令行内输入  `print `命令，可以看到当前系统的所有环境变量。

``` bash
=> print
aw-ubi-spinand.ubootblks=24
boot_dsp0=sunxi_flash read 45000000 ${dsp0_partition};bootr 45000000 0 0
boot_fastboot=fastboot
boot_normal=sunxi_flash read 45000000 ${boot_partition};bootm 45000000
boot_partition=boot
boot_recovery=sunxi_flash read 45000000 recovery;bootm 45000000
bootcmd=run setargs_nand_ubi boot_normal
bootdelay=1
cma=8M
console=ttyS3,115200
dsp0_partition=dsp0
earlyprintk=sunxi-uart,0x02500C00
fdtcontroladdr=43e83e70
filesize=10000
force_normal_boot=1
init=/pseudo_init
initcall_debug=0
keybox_list=widevine,ec_key,ec_cert1,ec_cert2,ec_cert3,rsa_key,rsa_cert1,rsa_cert2,rsa_cert3
loglevel=8
mmc_root=/dev/mmcblk0p5
mtd_name=sys
nand_root=/dev/ubiblock0_5
partitions=mbr@ubi0_0:boot-resource@ubi0_1:env@ubi0_2:env-redund@ubi0_3:boot@ubi0_4:rootfs@ubi0_5:private@ubi0_6:rootfs_data@ubi0_7:UDISK@ubi0_8:
root_partition=rootfs
rootfstype=squashfs
setargs_mmc=setenv  bootargs earlyprintk=${earlyprintk} clk_ignore_unused initcall_debug=${initcall_debug} console=${console} loglevel=${loglevel} root=${mmc_root}  init=${init} partitions=${partitions} cma=${cma} snum=${snum} mac_addr=${mac} wifi_mac=${wifi_mac} bt_mac=${bt_mac} specialstr=${specialstr} gpt=1
setargs_nand=setenv bootargs ubi.mtd=${mtd_name} ubi.block=0,${root_partition} earlyprintk=${earlyprintk} clk_ignore_unused initcall_debug=${initcall_debug} console=${console} loglevel=${loglevel} root=${nand_root} rootfstype=${rootfstype} init=${init} partitions=${partitions} cma=${cma} snum=${snum} mac_addr=${mac} wifi_mac=${wifi_mac} bt_mac=${bt_mac} specialstr=${specialstr} gpt=1
setargs_nand_ubi=setenv bootargs ubi.mtd=${mtd_name} ubi.block=0,${root_partition} earlyprintk=${earlyprintk} clk_ignore_unused initcall_debug=${initcall_debug} console=${console} loglevel=${loglevel} root=${nand_root} rootfstype=${rootfstype} init=${init} partitions=${partitions} cma=${cma} snum=${snum} mac_addr=${mac} wifi_mac=${wifi_mac} bt_mac=${bt_mac} specialstr=${specialstr} gpt=1
ubi_attach_mtdnum=3

Environment size: 2033/131067 bytes
=>

```

* 修改 系统启动等待时间

1. 在uboot shell下 输入命令`env set bootdelay 3`，可更改环境变量bootdelay（即 boot 启动时 log 中的倒计时延迟时间）值的大小。

2. 输入命令`env save`，即可将上述更改进行保存，保存后重新上电，或输入命令`reset`，即可看到上述更改bootdelay的延时时间被更改生效。

### 设置为默认配置

首先进入到Tina-SDK `device/config/chips/t113/configs/100ask`目录，可以看到一个 ` env.cfg`配置文件，这个文件就是系统默认的env环境变量配置文件，我们可以修改这个，通过系统编译打包转换，可以直接永久烧录至系统内。

![image-20230331182558384](images\image-20230331182558384.png)

* 修改增加 mac=20:0D:B0:33:9D:7E  永久环境变量

  1. 修改 env.cfg 文件，删除掉 原来的 `mac=`在相同位置增加 `mac=20:0D:B0:33:9D:7E `之后保存退出。

  2. 修改完成后如下图所示

     ![image-20230331183348887](images\image-20230331183348887.png)

  3. 之后，回退到 tina-sdk根目录下，执行` make `命令等待自动编译构建，等待结束后，再次执行 `pack`命令，最后将编译出来的系统烧录至开发板内，即可完成更新设置，烧录成功后，可以进入uboot 命令行，输入 print 来查看是否设置成功。