---
sidebar_position: 7
---
# Uboot支持的命令

在uboot终端下输入 ？ 号即可查看当前uboot支持的所有 命令

```bash
=> ?
?       - alias for 'help'
base    - print or set address offset
bdinfo  - print Board Info structure
boot    - boot default, i.e., run 'bootcmd'
bootd   - boot default, i.e., run 'bootcmd'
bootm   - boot application image from memory
bootr   - boot application image from memory
chpart  - change active partition
cmp     - memory compare
colorbar- show colorbar
coninfo - print console devices and information
cp      - memory copy
crc32   - checksum calculation
disp    - show display status
echo    - echo args to console
editenv - edit environment variable
efex    - run to efex
env     - environment handling commands
erase   - erase FLASH memory
fastboot- fastboot - enter USB Fastboot protocol
fatinfo - print information about filesystem
fatload - load binary file from a dos filesystem
fatls   - list files in a directory (default /)
fatsize - determine a file's size
fatwrite- write file into a dos filesystem
fdt     - flattened device tree utility commands
flinfo  - print FLASH memory information
gpt     - GUID Partition Table
help    - print command description/usage
i2c     - I2C sub-system
itest   - return true/false on integer compare
loadb   - load binary file over serial line (kermit mode)
loads   - load S-Record file over serial line
loadx   - load binary file over serial line (xmodem mode)
loady   - load binary file over serial line (ymodem mode)
logo    - show default logo
loop    - infinite loop on address range
md      - memory display
memtester- start application at address 'addr'
mm      - memory modify (auto-incrementing address)
mmc     - MMC sub system
mmcinfo - display MMC info
mtdparts- define flash/nand partitions
mw      - memory write (fill)
nm      - memory modify (constant address)
part    - disk partition related commands
pbread  - read data from private data
printenv- print environment variables
protect - enable or disable FLASH write protection
pst     - read data from secure storageerase flag in secure storage
reset   - Perform RESET of the CPU
run     - run commands in an environment variable
saveenv - save environment variables to persistent storage
set_working_fdt- set_working_fdt fdt_addr
setenv  - set environment variables
setexpr - set environment variable as the result of eval expression
sleep   - delay execution for some time
source  - run script from memory
sprite_test- do a sprite test
sunxi_bmp_info- manipulate BMP image data
sunxi_bmp_show- manipulate BMP image data
sunxi_card0_probe- probe sunxi card0 device
sunxi_dma- do dma test
sunxi_flash- sunxi_flash sub-system
sunxi_so- sunxi_so sub-system
timer_test- do a timer and int test
timer_test1- do a timer and int test
ubi     - ubi commands
ubifsload- load file from an UBIFS filesystem
ubifsls - list files in a directory
ubifsmount- mount UBIFS volume
ubifsumount- unmount UBIFS volume
uburn   - do a burn from boot
version - print monitor, compiler and linker version
```

###  Fat 命令说明

fat命令可以对 FAT 文件系统的相关存储设备进行查询及文件读写操作，在打包固件的时候, 我们会制作启动资源分区镜像, 把指定的目录下的文件按照文件系统的格式排布，文件中包括了原来目录中的所有文件，并完全按照目录结构排列。当把这个镜像文件烧写到存储设备上的某一个分区的时候，可以看到这个分区和原有目录的内容一样。使用fat可以方便地以文件和目录的方式对小机 flash 进行数据访问，如显示 logo。这些指令基本上要和 U 盘或者 SD 卡同时使用，主要用于读取这些移动存储器上的 FAT 分区。其相关操作命令如下：

#### fatls 

 列出相应设备目录上的所有文件，示例如下图：

![img](images\LinuxU-bootDevelopmentGuide_004.png)

**补充说明，fatls mmc 2:2 中的第一个 2 表示的是 emmc 设备，2 表示其分区号，其说明如下图：**

![img](images\LinuxU-bootDevelopmentGuide_005.png)

#### fatinfo

 打印出相应设备目录的文件系统信息，示例如下图：

![img](images\LinuxU-bootDevelopmentGuide_006.png)

#### fatload

从 FAT 文件系统中读取二进制文件到 RAM 存储中，示例如下：

```
sunxi#usb start
(Re)start USB...
USB0: start sunxi ehci1...
config usb pin success
config usb clk ok
sunxi ehci1 init ok...
USB EHCI 1.00
scanning bus 0 for devices... 3 USB Device(s) found
scanning usb for storage devices... 1 Storage Device(s) found
sunxi#fatls usb 0:1 /
16024600 sandisksecureaccessv3_win.exe
sandisk secureaccess/
lost.dir/
Android/
test/
video test/
amapauto/
0 vid_20161017_160818.ts
phoenixsuit/
system volume information/
0 vid_20161017_160919.ts
video/
156672 wifi pro_com su.exe
495 sys.ini
1035 pr_80211g_all.ini
config/
158208 wifi pro_new.exe
158208 wifi pro.exe
0 vid_20161017_164822.ts
0 vid_20161017_164906.ts
sunxi-tvd/
71149 sys_config.fex
vga/
397836884 system.img
14180352 boot.img
13 file(s), 13 dir(s)
sunxi#fatload usb 0:1 0x42000000 boot.img
reading boot.img
14180352 bytes read in 1149 ms (11.8 MiB/s)
sunxi#mmc dev 2
mmc2(part 0) is current device
sunxi#mmc write 0x42000000 0x15000 5000
MMC write: dev # 2, block # 86016, count 20480 ... 20480 blocks written: OK
```

说明：以上操作即将 U 盘的boot.img写到对应的 mmc 分区地址处。

1. fatwrite: 从内存中将对应的文件写到设备文件系统中。

### md 命令说明

md命令可以对指定内存的数据进行查看，方便了解内存的数据情况及调试工作。其使用方法如下：

```
md 0xF0000000： 即用md命令查看内存DRAM 0xF0000000处内容
```