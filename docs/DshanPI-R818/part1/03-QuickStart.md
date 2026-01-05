---
sidebar_position: 1
---
# 启动开发板

开发板启动连接接口如下：

![image-20241216173413391](images/image-20241216173413391.png)

将两个TypeC线分别连至 OTG&串口二合一模块，两根TypeC线的另一端 连接至 电脑USB接口，连接成功后，开发板会被启动。

> 注意：OTG&串口二合一模块一定要背面朝上连接至开发板的正面，否则串口和OTG功能无法使用。
> 注意：OTG&串口二合一模块一定要背面朝上连接至开发板的正面，否则串口和OTG功能无法使用。
> 注意：OTG&串口二合一模块一定要背面朝上连接至开发板的正面，否则串口和OTG功能无法使用。

## windows下使用 ADB登录系统

### 安装windows板ADB
点击链接下载Windows版ADB工具 [adb-tools](https://gitlab.com/dongshanpi/tools/-/raw/main/ADB.7z)
下载完成后解压，可以看到如下目录，

![adb-tools-dir](images/adb-tools-dir.png)

然后 我们单独 拷贝 上一层的 **platform-tools** 文件夹到任意 目录，拷贝完成后，记住这个 目录位置，我们接下来要把这个 路径添加至 Windows系统环境变量里。

![adb-tools-dir](images/adb-tools-dir-001.png)

我这里是把它单独拷贝到了 D盘，我的目录是 `D:\platform-tools` 接下来 我需要把它单独添加到Windows系统环境变量里面才可以在任意位置使用adb命令。

![adb-tools-windows_config_001](images/adb-tools-windows_config_001.png)

添加到 Windows系统环境变量里面
![adb-tools-windows_config_001](images/adb-tools-windows_config_002.png)

### 打开cmd连接开发板
打开CMD Windows 命令提示符方式有两种
方式1：直接在Windows10/11搜索对话框中输入  cmd 在弹出的软件中点击  `命令提示符`
方式2：同时按下 wind + r 键，输入 cmd 命令，按下确认 就可以自动打开 `命令提示符`

![adb-tools-windows_config_003](images/adb-tools-windows_config_003.png)

打开命令提示符，输出 adb命令可以直接看到我们的adb已经配置成功

![adb-tools-windows_config_004](images/adb-tools-windows_config_004.png)

连接好开发板的 OTG 并将其连接至电脑上，然后 输入 adb shell就可以自动登录系统

``` shell
C:\Users\MeiHao>adb shell
adb server version (39) doesn't match this client (41); killing...
* daemon started successfully


BusyBox v1.27.2 () built-in shell (ash)

 _____  _              __     _
|_   _||_| ___  _ _   |  |   |_| ___  _ _  _ _
  | |   _ |   ||   |  |  |__ | ||   || | ||_'_|
  | |  | || | || _ |  |_____||_||_|_||___||_,_|
  |_|  |_||_|_||_|_|  Tina is Based on OpenWrt!
 ----------------------------------------------
 Tina Linux (Neptune, 5C1C9C53)
 ----------------------------------------------
root@TinaLinux:/#
```
ADB 也可以作为文件传输使用，例如：
``` shell
C:\System> adb push badapple.mp4 /mnt/UDISK   # 将 badapple.mp4 上传到开发板 /mnt/UDISK 目录内
C:\System> adb pull /mnt/UDISK/badapple.mp4   # 将 /mnt/UDISK/badapple.mp4 下拉到当前目录内
```

## 使用串口登录系统
### 1. 连接串口线
先根据前面连接图来连接开发板，开发板会自行启动。
开发板启动之后，默认情况下系统会自动安装串口设备驱动，如果没有自动安装，可以使用驱动精灵来自动安装。
* 对于Windows系统
此时Windows设备管理器 在 端口(COM和LPT) 处会多出一个串口设备，一般是以 `USB-SERIAL CH340`开头，您需要留意一下后面的具体COM编号，用于后续连接使用。

![QuickStart-01](images/QuickStart-01.png)

如上图(图片仅供参考)，COM号如果是96，那我们接下来连接所使用的串口号就是96，具体多少根据实际情况决定。

* 对于Linux系统
可以查看是否多出一个/dev/tty 设备,一般情况设备节点为 /dev/ttyACM0  。

![QuickStart-02](images/QuickStart-02.png)

### 2. 打开串口控制台
#### 获取串口工具
使用Putty或者MobaXterm等串口工具来开发板设备。

* 其中putty工具可以访问页面  https://www.chiark.greenend.org.uk/~sgtatham/putty/  来获取。
* MobaXterm可以通过访问页面 https://mobaxterm.mobatek.net/ 获取 (推荐使用)。

#### 使用putty登录串口

![QuickStart-04](images/QuickStart-04.png)

#### 使用Mobaxterm登录串口
打开MobaXterm，点击左上角的**Session**，在弹出的界面选中**Serial**，如下图所示选择端口号（**前面设备管理器实际显示的端口号**）、波特率（Speed 115200）、流控（Flow Control: none）,最后点击**OK**即可。步骤如下图所示(图片仅供参考)。
**注意：流控（Flow Control）一定要选择none，否则你将无法在MobaXterm中向串口输入数据**

![Mobaxterm_serial_set_001](images/Mobaxterm_serial_set_001.png)


### 3. 进入系统shell
使用串口工具成功打开串口后，可以直接按下 Enter 键 进入shell，当然您也可以按下板子上的 `Reset`复位键，来查看完整的系统信息。

``` bash
[47]HELLO! BOOT0 is starting!
[50]BOOT0 commit : e1a64ba
[53]set pll start
[54]periph0 has been enabled
[58]set pll end
[59]PL gpio voltage : 1.8V
[62][pmu]: bus read error
[65]unknow PMU
[66][pmu]: bus read error
[69]PMU: AXP2202
[78]dram return write ok
[80]dram_para[0]:0x378
[82]dram_para[1]:0x8
[85]dram_para[2]:0x7070707
[87]dram_para[3]:0xd0d0d0d
[90]dram_para[4]:0xe0e
[92]dram_para[5]:0xd0a050c
[95]dram_para[6]:0x30fa
[97]dram_para[7]:0x8001000
[100]dram_para[8]:0x0
[102]dram_para[9]:0x34
[104]dram_para[10]:0x1b
[107]dram_para[11]:0x33
[109]dram_para[12]:0x3
[111]dram_para[13]:0x0
[114]dram_para[14]:0x0
[116]dram_para[15]:0x4
[118]dram_para[16]:0x72
[121]dram_para[17]:0x0
[123]dram_para[18]:0x7
[125]dram_para[19]:0x0
[127]dram_para[20]:0x0
[130]dram_para[21]:0x26
[132]dram_para[22]:0x6060606
[135]dram_para[23]:0x84040404
[138]dram_para[24]:0x0
[140]dram_para[25]:0x0
[143]dram_para[26]:0x48000000
[146]dram_para[27]:0x273333
[148]dram_para[28]:0x28231f26
[151]dram_para[29]:0x13161613
[154]dram_para[30]:0x7521
[157]dram_para[31]:0x2023211f
[160]board init ok, set sys_vol to 950mv!
[164]rtc[3] value = 0xb00f
[187]enable_jtag
[189]DRAM BOOT DRIVE INFO: V0.69
[192]the chip id is 0x1000
[195]the chip id is 0x1000
[197]the chip id is 0x1000
[200]the chip id is 0x1000
[203]the chip id is 0x1000
[205]chip id check OK
[209]DRAM_VCC set to 1100 mv
[212]DRAM CLK =888 MHZ
[214]DRAM Type =8 (3:DDR3,4:DDR4,7:LPDDR3,8:LPDDR4)
[224]DRAM SIZE =2048 MBytes, para1 = 30fa, para2 = 8001000, tpr13 = 7521
[235]DRAM simple test OK.
[238]dram size =2048
[241]chipid = 53801000
[243]nsi init ok 2020-4-7
[246]card no is 2
[247]sdcard 2 line count 8
[250][mmc]: mmc driver ver 2020-09-10 15:32
[260][mmc]: Wrong media type 0x0, but host sdc2, try mmc first
[266][mmc]: ***Try MMC card 2***
[291][mmc]: RMCA OK!
[293][mmc]: bias 4
[295][mmc]: mmc 2 bias 4
[320][mmc]: MMC 5.0
[322][mmc]: HSSDR52/SDR25 8 bit
[325][mmc]: 50000000 Hz
[327][mmc]: 15032 MB
[329][mmc]: ***SD/MMC 2 init OK!!!***
[377]Loading boot-pkg Succeed(index=0).
[381]Entry_name        = u-boot
[387]Entry_name        = monitor
[390]Entry_name        = scp
[394]set arisc reset to assert state
[402]set arisc reset to de-assert state
[406]Entry_name        = dtb
[410]tunning data addr:0x4a0003e8
[413]Jump to second Boot.
NOTICE:  BL3-1: v1.0(debug):da6c454
NOTICE:  BL3-1: Built : 15:51:09, 2023-02-21
NOTICE:  BL3-1 commit: 8
NOTICE:  info v0.0
nsi init ok 2022-11-08
NOTICE:  cpuidle init version V1.0
ERROR:   Error initializing runtime service tspd_fast
NOTICE:  BL3-1: Preparing for EL3 exit to normal world
NOTICE:  BL3-1: Next image address = 0x4a000000
▒OTICE:  BL3-1: Next image spsr = 0x1d3

U-Boot 2018.05-g23610e6-dirty (Dec 12 2024 - 20:52:31 -0500) Allwinner Technology

[00.502]CPU:   Allwinner Family
[00.505]Model: sun50iw10
I2C:   ready
[00.621]DRAM:  2 GiB
[00.624]Relocation Offset is: 75f2e000
[00.648]secure enable bit: 0
[00.651]PMU: AXP2202
[00.653]!!! can't find /soc/power_boost in sys_config
[00.658]PMU: pmu_axp2202 found
[00.661]BMU: AXP2202
[00.663]BMU: bmu_axp2202 found
[00.676]gpio_bias, pc_bias: 1800, pc_supply: cldo1_vol
[00.681]gpio_bias, pl_bias: 1800, pl_supply: aldo3_vol
[00.688]dcdc3_vol = 1100, onoff=1
[00.692]aldo1_vol = 2800, onoff=1
[00.696]aldo2_vol = 1800, onoff=1
[00.701]aldo3_vol need to wait stable!
[00.706]/soc@03000000/s_twi@0x07081400 has set pinctrl-1
[00.732]/soc@03000000/s_twi@0x07081400 has set pinctrl-0
[00.737]GPIOL change bias done!
[00.740]aldo3_vol = 1800, onoff=1
[00.745]aldo4_vol = 1800, onoff=1
[00.749]bldo1_vol = 1800, onoff=1
[00.753]bldo2_vol = 1800, onoff=1
[00.758]bldo3_vol = 2800, onoff=1
[00.762]GPIOC change bias done!
[00.765]cldo1_vol = 1800, onoff=1
[00.769]cldo2_vol = 3300, onoff=1
[00.774]cldo3_vol = 3300, onoff=1
[00.778]cldo4_vol = 3300, onoff=1
[00.783]cpusldo_vol = 900, onoff=1
bias_name:pl_bias        bias_vol:1800
bias_name:pc_bias        bias_vol:1800
[00.794]bat_vol=1179, ratio=0
[00.797]EXT: EXT_probe
[00.799]pmu_sy8827g_probe pmic_bus_read fail
[00.803]TCS: TCS_probe
[00.805]pmu_tcs4838_probe pmic_bus_read fail
[00.809]PMU: no found
[00.811]CPU=1008 MHz,PLL6=600 Mhz,AHB=200 Mhz, APB1=100Mhz  MBus=400Mhz
[00.820]gic: sec monitor mode
[00.823]sunxi flash type@2 not support fast burn key
[00.827]flash init start
[00.830]workmode = 0,storage type = 2
[00.833][mmc]: mmc driver ver uboot2018:2021-01-14 19:04:00
[00.839][mmc]: get sdc_type fail and use default host:tm4.
[00.851][mmc]: SUNXI SDMMC Controller Version:0x50300
[00.883][mmc]: Best spd md: 4-HS400, freq: 3-100000000, Bus width: 8
[00.889]sunxi flash init ok
[00.891]non secure, do not need update backup boot0 to toc0
[00.897]init_clocks:finish
[00.934]Loading Environment from SUNXI_FLASH... OK
[00.943]no secure os for keybox operation
[00.946]try to burn key
[00.949]read item0 copy0
[00.960]Item0 (Map) magic is bad
[00.963]the secure storage item0 copy0 magic is bad
[00.976]Item0 (Map) magic is bad
[00.979]the secure storage item0 copy1 magic is bad
[00.983]Item0 (Map) magic is bad
[00.986]the secure storage map is empty
[00.990]no item name key_burned_flag in the map
[00.994]sunxi secure storage has no flag
[00.998]usb burn from boot
delay time 0
weak:otg_phy_config
[01.008]usb prepare ok
[01.811]overtime
[01.816]do_burn_from_boot usb : no usb exist
[01.820][ARISC] :arisc initialize
[01.825][ARISC ERROR] :get [allwinner,sunxi-hwspinlock] device node error
CACHE: Misaligned operation at range [bffa8278, bffa8590]
[01.837][ARISC] :arisc para ok
[SCP] :sunxi-arisc driver begin startup 2
[SCP] :0x1
[SCP] :arisc version: [ramsr-xt-818anit.2v-er-5saelid-e]
[SCP] :arisc startup ready
[SCP] :arisc startup notify message feedback
[SCP] :send hard sync feedback message: 0x900200
[SCP] :sunxi-arisc driver v1.10 is starting
[01.866][ARISC] :sunxi-arisc driver startup succeeded
List file under ULI/factory
** Unrecognized filesystem type **
[01.878]no item name rootwait init in the map
[01.882]no item name rdinit in the map
[01.886]no item name rotpk_status in the map
[01.890]no item name pstore_blk.blkdev in the map
[01.894]no item name pstore.update_ms in the map
root_partition is rootfs
blkoops_partition is pstore
set root to /dev/mmcblk0p5
set blkoops_blkdev to /dev/mmcblk0p9
[01.911]update part info
[01.916]key 0
[01.917]no misc partition is found
[01.920]update bootcmd
[01.922]serial num is: 3c001420a75307c1c10
[01.930](weak)update dtb dram start
[01.934]update dtb dram  end
[01.940]update dts
Hit any key to stop autoboot:  0
[01.950]partinfo: name boot, start 0xbc00, size 0x7800
[02.033]in boot normal mode,pass normal para to cmdline
[02.039]android.hardware = sun50iw10p1
Android's image name: r818-sc3917
[02.115]Starting kernel ...

[02.118][mmc]: mmc exit start
[02.135][mmc]: mmc 2 exit ok
[    0.000000] Booting Linux on physical CPU 0x0
[    0.000000] Linux version 4.9.191 (ubuntu@ubuntu1804) (gcc version 6.4.1 (OpenWrt/Linaro GCC 6.4-2017.11 2017-11) ) #87 SMP PREEMPT Mon Dec 16 06:20:56 UTC 2024
[    0.000000] Boot CPU: AArch64 Processor [410fd034]
[    0.000000] bootconsole [earlycon0] enabled
[    0.000000] cma: Reserved 32 MiB at 0x00000000be000000
[    0.000000] On node 0 totalpages: 524288
[    0.000000]   DMA zone: 8192 pages used for memmap
[    0.000000]   DMA zone: 0 pages reserved
[    0.000000]   DMA zone: 524288 pages, LIFO batch:31
[    0.000000] psci: probing for conduit method from DT.
[    0.000000] psci: PSCIv1.0 detected in firmware.
[    0.000000] psci: Using standard PSCI v0.2 function IDs
[    0.000000] psci: Trusted OS migration not required
[    0.000000] psci: SMC Calling Convention v1.0
[    0.000000] percpu: Embedded 22 pages/cpu s50712 r8192 d31208 u90112
[    0.000000] pcpu-alloc: s50712 r8192 d31208 u90112 alloc=22*4096
[    0.000000] pcpu-alloc: [0] 0 [0] 1 [0] 2 [0] 3
[    0.000000] Detected VIPT I-cache on CPU0
[    0.000000] CPU features: enabling workaround for ARM erratum 845719
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 516096
[    0.000000] Kernel command line: console=ttyS0,115200 root=/dev/mmcblk0p5 rootwait init=/sbin/init rdinit=/rdinit loglevel=8 earlyprintk=sunxi-uart,0x05000000 initcall_debug=0 loglevel=8 partitions=boot-resource@mmcblk0p1:env@mmcblk0p2:env-redund@mmcblk0p3:boot@mmcblk0p4:rootfs@mmcblk0p5:rootfs_data@mmcblk0p6:private@mmcblk0p7:recovery@mmcblk0p8:pstore@mmcblk0p9:UDISK@mmcblk0p10 cma=32M gpt=1 rotpk_status=0 pstore_blk.blkdev=/dev/mmcblk0p9 pstore.update_ms=1000 androidboot.mode=normal androidboot.serialno=3c001420a75307c1c10 androidboot.hardware=sun50iw10p1 boot_type=2 androidboot.boot_type=2 androidboot.secure_os_exist=0 gpt=1 uboot_message=2018.05-g23610e6-dirty(12/12/2024-20:52:31) bootreason=unknow
[    0.000000] log_buf_len individual max cpu contribution: 4096 bytes
[    0.000000] log_buf_len total cpu_extra contributions: 12288 bytes
[    0.000000] log_buf_len min size: 16384 bytes
[    0.000000] log_buf_len: 32768 bytes
[    0.000000] early log buf free: 14208(86%)
[    0.000000] PID hash table entries: 4096 (order: 3, 32768 bytes)
[    0.000000] Dentry cache hash table entries: 262144 (order: 9, 2097152 bytes)
[    0.000000] Inode-cache hash table entries: 131072 (order: 8, 1048576 bytes)
[    0.000000] Memory: 1997876K/2097152K available (7870K kernel code, 1628K rwdata, 2260K rodata, 832K init, 374K bss, 66508K reserved, 32768K cma-reserved)
[    0.000000] Virtual kernel memory layout:
[    0.000000]     modules : 0xffffff8000000000 - 0xffffff8008000000   (   128 MB)
[    0.000000]     vmalloc : 0xffffff8008000000 - 0xffffffbebfff0000   (   250 GB)
[    0.000000]       .text : 0xffffff8008080000 - 0xffffff8008830000   (  7872 KB)
[    0.000000]     .rodata : 0xffffff8008830000 - 0xffffff8008a70000   (  2304 KB)
[    0.000000]       .init : 0xffffff8008a70000 - 0xffffff8008b40000   (   832 KB)
[    0.000000]       .data : 0xffffff8008b40000 - 0xffffff8008cd7008   (  1629 KB)
[    0.000000]        .bss : 0xffffff8008cd7008 - 0xffffff8008d3483c   (   375 KB)
[    0.000000]     fixed   : 0xffffffbefe7fb000 - 0xffffffbefec00000   (  4116 KB)
[    0.000000]     PCI I/O : 0xffffffbefee00000 - 0xffffffbeffe00000   (    16 MB)
[    0.000000]     vmemmap : 0xffffffbf00000000 - 0xffffffc000000000   (     4 GB maximum)
[    0.000000]               0xffffffbf00000000 - 0xffffffbf02000000   (    32 MB actual)
[    0.000000]     memory  : 0xffffffc000000000 - 0xffffffc080000000   (  2048 MB)
[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000]  Build-time adjustment of leaf fanout to 64.
[    0.000000] NR_IRQS:64 nr_irqs:64 0
[    0.000000] clocksource: timer: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 79635851949 ns
[    0.000000] arm_arch_timer: Architected cp15 timer(s) running at 24.00MHz (virt).
[    0.000000] clocksource: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x588fe9dc0, max_idle_ns: 440795202592 ns
[    0.000005] sched_clock: 56 bits at 24MHz, resolution 41ns, wraps every 4398046511097ns
[    0.008229] Console: colour dummy device 80x25
[    0.012415] Calibrating delay loop (skipped), value calculated using timer frequency.. 48.00 BogoMIPS (lpj=96000)
[    0.022619] pid_max: default: 32768 minimum: 301
[    0.027697] Mount-cache hash table entries: 4096 (order: 3, 32768 bytes)
[    0.033900] Mountpoint-cache hash table entries: 4096 (order: 3, 32768 bytes)
[    0.043437] ftrace: allocating 29479 entries in 116 pages
[    0.097641] sched-energy: CPU device node has no sched-energy-costs
[    0.098279] Invalid sched_group_energy for CPU0
[    0.102813] CPU0: update cpu_capacity 1024
[    0.118944] ASID allocator initialised with 32768 entries
[    0.175264] Detected VIPT I-cache on CPU1
[    0.175317] Invalid sched_group_energy for CPU1
[    0.175321] CPU1: update cpu_capacity 1024
[    0.175324] CPU1: Booted secondary processor [410fd034]
[    0.203324] Detected VIPT I-cache on CPU2
[    0.203358] Invalid sched_group_energy for CPU2
[    0.203361] CPU2: update cpu_capacity 1024
[    0.203364] CPU2: Booted secondary processor [410fd034]
[    0.231391] Detected VIPT I-cache on CPU3
[    0.231424] Invalid sched_group_energy for CPU3
[    0.231427] CPU3: update cpu_capacity 1024
[    0.231430] CPU3: Booted secondary processor [410fd034]
[    0.231509] Brought up 4 CPUs
[    0.282146] SMP: Total of 4 processors activated.
[    0.286836] CPU features: detected feature: 32-bit EL0 Support
[    0.292642] CPU features: detected feature: Kernel page table isolation (KPTI)
[    0.302659] CPU: All CPU(s) started at EL1
[    0.303923] alternatives: patching kernel code
[    0.308819] Invalid sched_group_energy for CPU3
[    0.312839] Invalid sched_group_energy for Cluster3
[    0.317688] Invalid sched_group_energy for CPU2
[    0.322195] Invalid sched_group_energy for Cluster2
[    0.327047] Invalid sched_group_energy for CPU1
[    0.331555] Invalid sched_group_energy for Cluster1
[    0.336407] Invalid sched_group_energy for CPU0
[    0.340915] Invalid sched_group_energy for Cluster0
[    0.347035] devtmpfs: initialized
[    0.627664] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
[    0.631789] futex hash table entries: 1024 (order: 5, 131072 bytes)
[    0.639575] atomic64_test: passed
[    0.641297] pinctrl core: initialized pinctrl subsystem
[    0.651887] NET: Registered protocol family 16
[    0.656234] dump_class_init,857, success
[    0.684912] cpuidle: using governor menu
[    0.687414] sunxi iommu: irq = 8
[    0.688300] vdso: 2 pages (1 code @ ffffff8008836000, 1 data @ ffffff8008b44000)
[    0.695095] DMA: preallocated 256 KiB pool for atomic allocations
[    0.712717] sun50iw10p1-r-pinctrl r_pio: initialized sunXi PIO driver
[    0.793447] sun50iw10p1-pinctrl pio: initialized sunXi PIO driver
[    0.807170] iommu: Adding device 1c0e000.ve to group 0
[    0.832043] iommu: Adding device soc@03000000:disp1@1 to group 0
[    0.834561] iommu: Adding device 6000000.disp to group 0
[    0.839110] iommu: Adding device 6400000.eink to group 0
[    0.847088] iommu: Adding device 6480000.g2d to group 0
[    0.863284] iommu: Adding device csi0 to group 0
[    0.864643] iommu: Adding device csi1 to group 0
[    0.870075] iommu: Adding device 2108000.tdm to group 0
[    0.873397] iommu: Adding device 2100000.isp to group 0
[    0.878610] iommu: Adding device 2102000.isp to group 0
[    0.883399] iommu: Adding device 2110000.scaler to group 0
[    0.888844] iommu: Adding device 2110400.scaler to group 0
[    0.894331] iommu: Adding device 2110800.scaler to group 0
[    0.899750] iommu: Adding device 2110c00.scaler to group 0
[    0.907007] iommu: Adding device vinc0 to group 0
[    0.910285] iommu: Adding device vinc1 to group 0
[    1.005186] pwm module init!
[    1.019133] sunxi-pm debug v3.10
[    1.024514] SCSI subsystem initialized
[    1.026084] usbcore: registered new interface driver usbfs
[    1.028441] usbcore: registered new interface driver hub
[    1.033661] usbcore: registered new device driver usb
[    1.039081] sunxi_i2c_adap_init()2672 - init
[    1.043804] sunxi_i2c_probe()2395 - [i2c6] twi_drv_used = 1
[    1.048224] sunxi_i2c_probe()2402 - [i2c6] twi_pkt_interval = 0
[    1.054115] twi6 supply twi not found, using dummy regulator
[    1.059994] twi_request_gpio()458 - [i2c6] init name: (null)
[    1.067607] axp20x-i2c 6-0034: AXP20x variant AXP2202 found
[    1.087274] axp2101-regulator axp2101-regulator.0: Setting DCDC frequency for unsupported AXP variant
[    1.090875] axp2101-regulator axp2101-regulator.0: Error setting dcdc frequency: -22
[    1.167027] axp20x-i2c 6-0034: AXP20X driver loaded
[    1.167138] sunxi_i2c_dma_request()1108 - [i2c6] using dma0chan0 (tx) and dma0chan1 (rx)for DMA transfers
[    1.177010] sunxi_i2c_probe()2395 - [i2c0] twi_drv_used = 1
[    1.181373] sunxi_i2c_probe()2402 - [i2c0] twi_pkt_interval = 0
[    1.187304] twi0 supply twi not found, using dummy regulator
[    1.193156] twi_request_gpio()458 - [i2c0] init name: (null)
[    1.200163] sunxi_i2c_dma_request()1108 - [i2c0] using dma0chan2 (tx) and dma0chan3 (rx)for DMA transfers
[    1.209191] sunxi_i2c_probe()2395 - [i2c3] twi_drv_used = 0
[    1.213628] sunxi_i2c_probe()2402 - [i2c3] twi_pkt_interval = 0
[    1.219534] twi3 supply twi not found, using dummy regulator
[    1.225371] twi_request_gpio()458 - [i2c3] init name: (null)
[    1.232183] media: Linux media interface: v0.10
[    1.235557] Linux video capture interface: v2.00
[    1.242202] ion_parse_dt_heap_common: id 0 type 0 name sys_user align 1000
[    1.247386] ion_parse_dt_heap_common: id 4 type 4 name cma align 1000
[    1.253759] ion_parse_dt_heap_common: id 6 type 6 name secure align 1000
[    1.260745] ion_heap_create: Invalid heap type 6
[    1.265279] Advanced Linux Sound Architecture Driver Initialized.
[    1.273573] Bluetooth: Core ver 2.22
[    1.274152] NET: Registered protocol family 31
[    1.278439] Bluetooth: HCI device and connection manager initialized
[    1.284792] Bluetooth: HCI socket layer initialized
[    1.289644] Bluetooth: L2CAP socket layer initialized
[    1.294767] Bluetooth: SCO socket layer initialized
[    1.304216] input: sunxi-keyboard as /devices/virtual/input/input0
[    1.306451] clocksource: Switched to clocksource arch_sys_counter
[    1.503867] udc_init,0
[    1.508308] NET: Registered protocol family 2
[    1.534919] TCP established hash table entries: 16 (order: -5, 128 bytes)
[    1.536103] TCP bind hash table entries: 16 (order: -4, 256 bytes)
[    1.542252] TCP: Hash tables configured (established 16 bind 16)
[    1.548351] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    1.554043] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    1.560999] NET: Registered protocol family 1
[    1.566128] Unpacking initramfs...
[    1.568043] Initramfs unpacking failed: junk in compressed archive
[    1.582503] workingset: timestamp_bits=61 max_order=19 bucket_order=0
[    1.682035] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    1.684217] ntfs: driver 2.1.32 [Flags: R/W].
[    1.696370] io scheduler noop registered
[    1.696416] io scheduler deadline registered
[    1.700971] io scheduler cfq registered (default)
[    1.712382] [DISP]disp_module_init
[    1.713586] disp soc@03000000:disp1@1: unable to map de registers
[    1.716293] disp: probe of soc@03000000:disp1@1 failed with error -22
[    1.757231] lcd_cfg_panel_info
[    1.757268] tft08006
[    1.757691] display_fb_request,fb_id:0
[    1.762783] [DISP] Fb_copy_boot_fb,line:1633:
[    1.764795] no boot_fb0
[    1.770136] [DISP] lcd_clk_config,line:663:
[    1.771414] disp 0, clk: pll(150000000),clk(150000000),dclk(25000000) dsi_rate(25000000)
[    1.771414]      clk real:pll(288000000),clk(288000000),dclk(72000000) dsi_rate(150000000)
[    1.771749] [DISP]disp_module_init finish
[    1.792093] lcd_open_flow
[    1.794544] lcd_power_on
[    1.797790] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.8▒l(4) is func:dsi0
[    1.810616] uart uart0: get regulator failed
[    1.811346] uart uart0: uart0 error to get fifo size property
[    1.811548] uart0: ttyS0 at MMIO 0x5000000 (irq = 348, base_baud = 1500000) is a SUNXI
[    1.811568] sw_console_setup()2040 - console setup baud 115200 parity n bits 8, flow n
[    1.833375] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833375] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833385] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833385] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833394] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833394] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833404] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833404] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833413] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833413] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833422] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833422] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833432] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833432] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833441] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.833441] sun50iw10p1-pinctrl pio: expect_func as:dsi4lane, but muxsel(4) is func:dsi0
[    1.970745] console [ttyS0] enabled
[    1.970745] console [ttyS0] enabled
[    1.980248] bootconsole [earlycon0] disabled
[    1.980248] bootconsole [earlycon0] disabled
[    1.990795] uart uart1: get regulator failed
[    1.997525] uart1 supply uart not found, using dummy regulator
[    2.002465] lcd_panel_init
[    2.007685] uart uart1: uart1 error to get fifo size property
[    2.014342] uart1: ttyS1 at MMIO 0x5000400 (irq = 349, base_baud = 1500000) is a SUNXI
[    2.025307] uart uart2: get regulator failed
[    2.030161] uart2 supply uart not found, using dummy regulator
[    2.037135] uart uart2: uart2 error to get fifo size property
[    2.043789] uart2: ttyS2 at MMIO 0x5000800 (irq = 350, base_baud = 1500000) is a SUNXI
[    2.055515] misc dump reg init
[    2.064139] [drm] Initialized
[    2.068348] Unable to detect cache hierarchy for CPU 0
[    2.074324] [NAND][NE] Not found valid nand node on dts
[    2.080760] sunxi-bt soc@03000000:bt@0: bt_power_num (4294967232)
[    2.087644] sunxi-bt soc@03000000:bt@0: Missing bt_io_regulator.
[    2.094418] sunxi-bt soc@03000000:bt@0: io_regulator_name ((null))
[    2.101432] sunxi-bt soc@03000000:bt@0: request pincrtl handle for device [soc@03000000:bt@0] failed
[    2.111763] sunxi-bt soc@03000000:bt@0: bt_rst gpio=354  mul-sel=1  pull=1  drv_level=2  data=0
[    2.121612] sunxi-bt soc@03000000:bt@0: clk_name ()
[    2.127186] sunxi-bt soc@03000000:bt@0: clk not config
[    2.134724] sunxi-wlan soc@03000000:wlan@0: wlan_busnum (1)
[    2.141013] sunxi-wlan soc@03000000:wlan@0: wlan power voltage (3300000)
[    2.148567] sunxi-wlan soc@03000000:wlan@0: wlan io voltage (1800000)
[    2.155827] sunxi-wlan soc@03000000:wlan@0: wlan_power_num (1)
[    2.162428] sunxi-wlan soc@03000000:wlan@0: wlan_power_name (axp2202-dcdc4)
[    2.170284] sunxi-wlan soc@03000000:wlan@0: io_regulator_name (axp2202-bldo1)
[    2.178485] sunxi-wlan soc@03000000:wlan@0: request pincrtl handle for device [soc@03000000:wlan@0] failed
[    2.189362] sunxi-wlan soc@03000000:wlan@0: get gpio wlan_vccwifi_ctrl failed
[    2.197440] sunxi-wlan soc@03000000:wlan@0: wlan_regon gpio=357  mul-sel=1  pull=1  drv_level=2  data=0
[    2.208061] sunxi-wlan soc@03000000:wlan@0: get gpio chip_en failed
[    2.215139] sunxi-wlan soc@03000000:wlan@0: wlan_hostwake gpio=360  mul-sel=6  pull=1  drv_level=2  data=0
[    2.226357] sunxi-wlan soc@03000000:wlan@0: clk_name ()
[    2.236641] libphy: Fixed MDIO Bus: probed
[    2.241270] tun: Universal TUN/TAP device driver, 1.6
[    2.246966] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.257699] gmac-power0: NULL
[    2.261063] gmac-power1: NULL
[    2.264411] gmac-power2: NULL
[    2.267776] OF: /soc@03000000/eth@05020000: arguments longer than property
[    2.279085] PPP generic driver version 2.4.2
[    2.284855] PPP BSD Compression module registered
[    2.290178] PPP Deflate Compression module registered
[    2.295893] PPP MPPE Compression module registered
[    2.301294] NET: Registered protocol family 24
[    2.306361] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
[    2.314160] get ehci0-controller, regulator_io is no nocare
[    2.320447] get ehci0-controller wakeup-source is fail.
[    2.326742] sunxi ehci0-controller don't init wakeup source
[    2.333029] [sunxi-ehci0]: probe, pdev->name: 5101000.ehci0-controller, sunxi_ehci: 0xffffff8008d0e790, 0x:ffffff8008d57000, irq_no:163
[    2.346741] [sunxi-ehci0]: Not init ehci0
[    2.351514] get ehci1-controller, regulator_io is no nocare
[    2.357796] get ehci1-controller wakeup-source is fail.
[    2.363883] sunxi ehci1-controller don't init wakeup source
[    2.370165] [sunxi-ehci1]: probe, pdev->name: 5200000.ehci1-controller, sunxi_ehci: 0xffffff8008d0eeb0, 0x:ffffff8008d71000, irq_no:165
[    2.384235] sunxi-ehci 5200000.ehci1-controller: SW USB2.0 'Enhanced' Host Controller (EHCI) Driver
[    2.394544] sunxi-ehci 5200000.ehci1-controller: new USB bus registered, assigned bus number 1
[    2.404999] sunxi-ehci 5200000.ehci1-controller: irq 357, io mem 0xffffffc07a07bc90
[    2.426480] sunxi-ehci 5200000.ehci1-controller: USB 0.0 started, EHCI 1.00
[    2.438205] hub 1-0:1.0: USB hub found
[    2.442570] hub 1-0:1.0: 1 port detected
[    2.449770] ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver
[    2.457232] get ohci0-controller, regulator_io is no nocare
[    2.463537] get ohci0-controller wakeup-source is fail.
[    2.469826] sunxi ohci0-controller don't init wakeup source
[    2.476200] ohci0-controller get usb clk_hosc failed.
[    2.481966] ohci0-controller get usb clk_losc clk failed.
[    2.488081] [sunxi-ohci0]: probe, pdev->name: 5101000.ohci0-controller, sunxi_ohci: 0xffffff8008d0eb20
[    2.498572] [sunxi-ohci0]: Not init ohci0
[    2.503429] get ohci1-controller, regulator_io is no nocare
[    2.509762] get ohci1-controller wakeup-source is fail.
[    2.515897] sunxi ohci1-controller don't init wakeup source
[    2.522335] [sunxi-ohci1]: probe, pdev->name: 5200000.ohci1-controller, sunxi_ohci: 0xffffff8008d0f240
[    2.533169] sunxi-ohci 5200000.ohci1-controller: SW USB2.0 'Open' Host Controller (OHCI) Driver
[    2.542475] lcd_bl_open
[    2.543050] [DISP] disp_device_attached_and_enable,line:232:
[    2.543050] attached ok, mgr0<-->dev0
[    2.543061] [DISP] disp_device_attached_and_enable,line:235:
[    2.543061] type:1,mode:0,fmt:rgb,bits:8bits,eotf:0,cs:0 dvi_hdmi:2, range:0 scan:0 ratio:8
[    2.572155] sunxi-ohci 5200000.ohci1-controller: new USB bus registered, assigned bus number 2
[    2.582129] sunxi-ohci 5200000.ohci1-controller: irq 358, io mem 0xffffff80088a2000
[    2.658258] hub 2-0:1.0: USB hub found
[    2.662599] hub 2-0:1.0: 1 port detected
[    2.669865] usbcore: registered new interface driver uas
[    2.676279] usbcore: registered new interface driver usb-storage
[    2.683241] usbcore: registered new interface driver ums-alauda
[    2.690092] usbcore: registered new interface driver ums-cypress
[    2.697063] usbcore: registered new interface driver ums-datafab
[    2.704023] usbcore: registered new interface driver ums_eneub6250
[    2.711178] usbcore: registered new interface driver ums-freecom
[    2.718130] usbcore: registered new interface driver ums-isd200
[    2.725003] usbcore: registered new interface driver ums-jumpshot
[    2.732059] usbcore: registered new interface driver ums-karma
[    2.738824] usbcore: registered new interface driver ums-onetouch
[    2.745990] usbcore: registered new interface driver ums-realtek
[    2.752964] usbcore: registered new interface driver ums-sddr09
[    2.759822] usbcore: registered new interface driver ums-sddr55
[    2.766681] usbcore: registered new interface driver ums-usbat
[    2.773568] usb_serial_number:20080411
[    2.779774] OF: /soc@03000000/twi@0x05002000/ctp@38: arguments longer than property
[    2.788417] OF: /soc@03000000/twi@0x05002000/ctp@38: arguments longer than property
[    2.798307] input: fts_ts as /devices/platform/soc/twi0/i2c-0/0-0038/input/input1
[    2.807647] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    2.816472] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    2.826181] 0x05002200: 01011001 00000001 00007000 00010002
[    2.832565] 0x05002210: 00008040 00010004 00100010 00000003
[    2.858524] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    2.867345] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    2.877058] 0x05002200: 11011001 00000001 00007100 00000003
[    2.883445] 0x05002210: 00008000 00010004 00030010 00000000
[    2.889867] 0-0038 supply  not found, using dummy regulator
[    2.896434] 0-0038 supply  not found, using dummy regulator
[    2.902797] invalid GPIO -22
[    2.906075] ------------[ cut here ]------------
[    2.911280] WARNING: CPU: 1 PID: 1 at drivers/gpio/gpiolib.c:106 gpio_to_desc+0x6c/0xc8
[    2.920281] Modules linked in:
[    2.923720]
[    2.925397] CPU: 1 PID: 1 Comm: swapper/0 Not tainted 4.9.191 #87
[    2.932248] Hardware name: sun50iw10 (DT)
[    2.936756] task: ffffffc07b5e8080 task.stack: ffffffc07b660000
[    2.943415] PC is at gpio_to_desc+0x6c/0xc8
[    2.948119] LR is at gpio_to_desc+0x6c/0xc8
[    2.952822] pc : [<ffffff800832e8d0>] lr : [<ffffff800832e8d0>] pstate: 80000145
[    2.961138] sp : ffffffc07b663b40
[    2.964863] x29: ffffffc07b663b40 x28: 0000000000000000
[    2.970850] x27: 0000000000000000 x26: 0000000000000000
[    2.976836] x25: 0000000000000000 x24: ffffffc079ca1ea0
[    2.982822] x23: ffffffc079ca1e80 x22: ffffff8008d12000
[    2.988808] x21: ffffff8008cfc000 x20: 00000000ffffffea
[    2.994794] x19: 0000000000000000 x18: 000000000000000a
[    3.000780] x17: 00000000000000c8 x16: 000000000000000e
[    3.006766] x15: 00000000000dc68d x14: ffffff8088cdf95f
[    3.012753] x13: ffffffffffffffff x12: 0000000000000030
[    3.018739] x11: 00000000fffffffe x10: ffffff8008cdf967
[    3.024725] x9 : 0000000005f5e0ff x8 : ffffffc07def8e58
[    3.030710] x7 : 0000000000000000 x6 : 0000000000000000
[    3.036696] x5 : 0000000000000000 x4 : 0000000000000028
[    3.042682] x3 : ffffff80080e8b3c x2 : 0000000000000000
[    3.048668] x1 : ffffffc07b5e8080 x0 : 0000000000000010
[    3.054655]
[    3.054655] SP: 0xffffffc07b663ac0:
[    3.060238] 3ac0  08d12000 ffffff80 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 00000000 00000000
[    3.069503] 3ae0  00000000 00000000 00000000 00000000 00000000 00000000 7b663b40 ffffffc0
[    3.078768] 3b00  0832e8d0 ffffff80 7b663b40 ffffffc0 0832e8d0 ffffff80 80000145 00000000
[    3.088032] 3b20  00000003 00000000 0000000f 00000000 ffffffff ffffffff 2f2f2c2f ff2c3732
[    3.097296] 3b40  7b663b70 ffffffc0 08513a50 ffffff80 08d12ae0 ffffff80 000000c8 00000000
[    3.106560] 3b60  7900cd18 ffffffc0 085140f8 ffffff80 7b663b90 ffffffc0 0851438c ffffff80
[    3.115824] 3b80  797c3898 ffffffc0 79753c80 ffffffc0 7b663be0 ffffffc0 0852c150 ffffff80
[    3.125089] 3ba0  00000000 00000000 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 08513b7c ffffff80
[    3.134355]
[    3.134355] X1: 0xffffffc07b5e8000:
[    3.139937] 8000  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.149201] 8020  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.158465] 8040  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.167729] 8060  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.176993] 8080  00000010 00000000 ffffffff ffffffff 00000000 00000000 00000000 00000000
[    3.186257] 80a0  7b660000 ffffffc0 00000002 00200140 00000000 00000000 00000000 00000000
[    3.195520] 80c0  00000001 00000001 000000ec 00000000 fffedd12 00000000 7b5eaa80 ffffffc0
[    3.204784] 80e0  00000001 00000001 00000078 00000078 00000078 00000000 08838508 ffffff80
[    3.214052]
[    3.214052] X8: 0xffffffc07def8dd8:
[    3.219634] 8dd8  6620746f 646e756f 7375202c 20676e69 6d6d7564 65722079 616c7567 00726f74
[    3.228899] 8df8  aca41608 00000000 002f0040 86000000 30302d30 73203833 6c707075 6e202079
[    3.238163] 8e18  6620746f 646e756f 7375202c 20676e69 6d6d7564 65722079 616c7567 00726f74
[    3.247427] 8e38  ad052c09 00000000 00100020 e2000000 61766e69 2064696c 4f495047 32322d20
[    3.256691] 8e58  ad373300 00000000 00240034 86000000 2d2d2d2d 2d2d2d2d 2d2d2d2d 7563205b
[    3.265956] 8e78  65682074 5d206572 2d2d2d2d 2d2d2d2d 2d2d2d2d ad869d3e 00000000 004b005c
[    3.275220] 8e98  86000000 4e524157 3a474e49 55504320 2031203a 3a444950 61203120 72642074
[    3.284484] 8eb8  72657669 70672f73 672f6f69 6c6f6970 632e6269 3630313a 69706720 6f745f6f
[    3.293756]
[    3.293756] X23: 0xffffffc079ca1e00:
[    3.299436] 1e00  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.308700] 1e20  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.317963] 1e40  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.327227] 1e60  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.336492] 1e80  00380000 00737466 00000000 00000000 00000000 00000000 7a2fe490 ffffffc0
[    3.345756] 1ea0  7a2fe500 ffffffc0 79cc8980 ffffffc0 79cb5200 ffffffc0 7a2f9518 ffffffc0
[    3.355020] 1ec0  7a2fe518 ffffffc0 7a2fe510 ffffffc0 7b775200 ffffffc0 08c62548 ffffff80
[    3.364284] 1ee0  79ccd568 ffffffc0 00000005 00000007 00000000 00000000 08c83620 ffffff80
[    3.373549]
[    3.373549] X24: 0xffffffc079ca1e20:
[    3.379229] 1e20  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.388493] 1e40  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.397758] 1e60  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    3.407022] 1e80  00380000 00737466 00000000 00000000 00000000 00000000 7a2fe490 ffffffc0
[    3.416286] 1ea0  7a2fe500 ffffffc0 79cc8980 ffffffc0 79cb5200 ffffffc0 7a2f9518 ffffffc0
[    3.425550] 1ec0  7a2fe518 ffffffc0 7a2fe510 ffffffc0 7b775200 ffffffc0 08c62548 ffffff80
[    3.434814] 1ee0  79ccd568 ffffffc0 00000005 00000007 00000000 00000000 08c83620 ffffff80
[    3.444078] 1f00  00000000 00030003 79ca1f08 ffffffc0 79ca1f08 ffffffc0 7b5e8080 ffffffc0
[    3.453345]
[    3.453345] X29: 0xffffffc07b663ac0:
[    3.459025] 3ac0  08d12000 ffffff80 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 00000000 00000000
[    3.468289] 3ae0  00000000 00000000 00000000 00000000 00000000 00000000 7b663b40 ffffffc0
[    3.477553] 3b00  0832e8d0 ffffff80 7b663b40 ffffffc0 0832e8d0 ffffff80 80000145 00000000
[    3.486817] 3b20  00000003 00000000 0000000f 00000000 ffffffff ffffffff 2f2f2c2f ff2c3732
[    3.496080] 3b40  7b663b70 ffffffc0 08513a50 ffffff80 08d12ae0 ffffff80 000000c8 00000000
[    3.505344] 3b60  7900cd18 ffffffc0 085140f8 ffffff80 7b663b90 ffffffc0 0851438c ffffff80
[    3.514608] 3b80  797c3898 ffffffc0 79753c80 ffffffc0 7b663be0 ffffffc0 0852c150 ffffff80
[    3.523872] 3ba0  00000000 00000000 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 08513b7c ffffff80
[    3.533136]
[    3.534814] ---[ end trace e800e41b663636a7 ]---
[    3.540005] Call trace:
[    3.542755] Exception stack(0xffffffc07b663950 to 0xffffffc07b663a80)
[    3.550000] 3940:                                   0000000000000000 0000007fffffffff
[    3.558809] 3960: ffffffc07b663b40 ffffff800832e8d0 0000000080000145 000000000000003d
[    3.567618] 3980: 0000000000000000 0000000000000000 0000000000000140 0000000100000008
[    3.576427] 39a0: ffffffc07b663a40 ffffff80080e9304 ffffffc07b663aa0 ffffff8008996568
[    3.585236] 39c0: ffffff8008cfc000 ffffff8008d12000 ffffffc079ca1e80 ffffffc079ca1ea0
[    3.594044] 39e0: 0000000000000000 0000000000000000 0000000000000000 0000000000000000
[    3.602853] 3a00: ffffffc07b663a40 ffffff8008996568 0000000000000010 ffffffc07b5e8080
[    3.611661] 3a20: 0000000000000000 ffffff80080e8b3c 0000000000000028 0000000000000000
[    3.620462] 3a40: 0000000000000000 0000000000000000 ffffffc07def8e58 0000000005f5e0ff
[    3.629270] 3a60: ffffff8008cdf967 00000000fffffffe 0000000000000030 ffffffffffffffff
[    3.638079] [<ffffff800832e8d0>] gpio_to_desc+0x6c/0xc8
[    3.643961] [<ffffff8008513a50>] fts_reset_proc+0x30/0x70
[    3.650035] [<ffffff800851438c>] fts_ts_probe+0x810/0x878
[    3.656109] [<ffffff800852c150>] i2c_device_probe+0x178/0x1e0
[    3.662575] [<ffffff80084077a4>] driver_probe_device+0x1bc/0x274
[    3.669332] [<ffffff80084078e0>] __driver_attach+0x84/0xb4
[    3.675502] [<ffffff8008405a34>] bus_for_each_dev+0x8c/0x9c
[    3.681770] [<ffffff8008407130>] driver_attach+0x30/0x3c
[    3.687737] [<ffffff8008406d6c>] bus_add_driver+0x1a0/0x1e4
[    3.694006] [<ffffff800840852c>] driver_register+0xa0/0xd8
[    3.700177] [<ffffff800852cadc>] i2c_register_driver+0x64/0x80
[    3.706737] [<ffffff8008a9ecc4>] fts_ts_init+0x1c/0x4c
[    3.712519] [<ffffff8008083504>] do_one_initcall+0x124/0x148
[    3.718887] [<ffffff8008a70ce4>] do_initcall_level+0x188/0x18c
[    3.725449] [<ffffff8008a70e60>] kernel_init_freeable+0x178/0x18c
[    3.732306] [<ffffff8008817db8>] kernel_init+0x18/0x100
[    3.738181] [<ffffff8008083180>] ret_from_fork+0x10/0x50
[    3.770469] invalid GPIO -22
[    3.773738] ------------[ cut here ]------------
[    3.778934] WARNING: CPU: 1 PID: 1 at drivers/gpio/gpiolib.c:106 gpio_to_desc+0x6c/0xc8
[    3.787935] Modules linked in:
[    3.791371]
[    3.793047] CPU: 1 PID: 1 Comm: swapper/0 Tainted: G        W       4.9.191 #87
[    3.801266] Hardware name: sun50iw10 (DT)
[    3.805772] task: ffffffc07b5e8080 task.stack: ffffffc07b660000
[    3.812430] PC is at gpio_to_desc+0x6c/0xc8
[    3.817135] LR is at gpio_to_desc+0x6c/0xc8
[    3.821838] pc : [<ffffff800832e8d0>] lr : [<ffffff800832e8d0>] pstate: 80000145
[    3.830154] sp : ffffffc07b663b40
[    3.833879] x29: ffffffc07b663b40 x28: 0000000000000000
[    3.839865] x27: 0000000000000000 x26: 0000000000000000
[    3.845852] x25: 0000000000000000 x24: ffffffc079ca1ea0
[    3.851838] x23: ffffffc079ca1e80 x22: ffffff8008d12000
[    3.857824] x21: ffffff8008cfc000 x20: 00000000ffffffea
[    3.863810] x19: 0000000000000000 x18: 000000000000000a
[    3.869796] x17: 00000000000000c8 x16: 000000000000000e
[    3.875782] x15: 00000000000bc1a5 x14: ffffff8088cdf95f
[    3.881768] x13: ffffffffffffffff x12: 0000000000000030
[    3.887754] x11: 00000000fffffffe x10: ffffff8008cdf967
[    3.893740] x9 : 0000000005f5e0ff x8 : ffffffc07defafdc
[    3.899726] x7 : 0000000000000000 x6 : 0000000000000000
[    3.905712] x5 : 0000000000000000 x4 : 0000000000000028
[    3.911698] x3 : ffffff80080e8b3c x2 : 0000000000000000
[    3.917684] x1 : ffffffc07b5e8080 x0 : 0000000000000010
[    3.923671]
[    3.923671] SP: 0xffffffc07b663ac0:
[    3.929253] 3ac0  08d12000 ffffff80 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 00000000 00000000
[    3.938517] 3ae0  00000000 00000000 00000000 00000000 00000000 00000000 7b663b40 ffffffc0
[    3.947781] 3b00  0832e8d0 ffffff80 7b663b40 ffffffc0 0832e8d0 ffffff80 80000145 00000000
[    3.957045] 3b20  00000000 00000000 00000000 00000000 ffffffff ffffffff 000001a4 00000000
[    3.966309] 3b40  7b663b70 ffffffc0 08513a70 ffffff80 08d12ae0 ffffff80 000000c8 00000000
[    3.975574] 3b60  7900cd18 ffffffc0 000000c8 00000000 7b663b90 ffffffc0 0851438c ffffff80
[    3.984838] 3b80  797c3898 ffffffc0 79753c80 ffffffc0 7b663be0 ffffffc0 0852c150 ffffff80
[    3.994102] 3ba0  00000000 00000000 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 08513b7c ffffff80
[    4.003369]
[    4.003369] X1: 0xffffffc07b5e8000:
[    4.008951] 8000  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.018215] 8020  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.027480] 8040  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.036744] 8060  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.046008] 8080  00000010 00000000 ffffffff ffffffff 00000000 00000000 00000000 00000000
[    4.055272] 80a0  7b660000 ffffffc0 00000002 00200140 00000000 00000000 00000000 00000000
[    4.064536] 80c0  00000001 00000001 000000ec 00000000 fffedd12 00000000 7b5eaa80 ffffffc0
[    4.073800] 80e0  00000001 00000001 00000078 00000078 00000078 00000000 08838508 ffffff80
[    4.083068]
[    4.083068] X8: 0xffffffc07defaf5c:
[    4.088650] af5c  38303038 64373138 5d3e3862 72656b20 5f6c656e 74696e69 3178302b 78302f38
[    4.097915] af7c  00303031 ded020e3 00000000 002c003c e2000000 66663c5b 66666666 38303038
[    4.107179] af9c  31333830 5d3e3038 74657220 6f72665f 6f665f6d 302b6b72 2f303178 30357830
[    4.116443] afbc  e0bccaa2 00000000 00100020 e2000000 61766e69 2064696c 4f495047 32322d20
[    4.125707] afdc  00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
[    4.134971] affc  00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
[    4.144235] b01c  00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
[    4.153498] b03c  00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
[    4.162770]
[    4.162770] X23: 0xffffffc079ca1e00:
[    4.168450] 1e00  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.177714] 1e20  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.186978] 1e40  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.196242] 1e60  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.205506] 1e80  00380000 00737466 00000000 00000000 00000000 00000000 7a2fe490 ffffffc0
[    4.214770] 1ea0  7a2fe500 ffffffc0 79cc8980 ffffffc0 79cb5200 ffffffc0 7a2f9518 ffffffc0
[    4.224034] 1ec0  7a2fe518 ffffffc0 7a2fe510 ffffffc0 7b775200 ffffffc0 08c62548 ffffff80
[    4.233298] 1ee0  79ccd568 ffffffc0 00000005 00000007 00000000 00000000 08c83620 ffffff80
[    4.242564]
[    4.242564] X24: 0xffffffc079ca1e20:
[    4.248243] 1e20  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.257508] 1e40  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.266772] 1e60  cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc cccccccc
[    4.276036] 1e80  00380000 00737466 00000000 00000000 00000000 00000000 7a2fe490 ffffffc0
[    4.285300] 1ea0  7a2fe500 ffffffc0 79cc8980 ffffffc0 79cb5200 ffffffc0 7a2f9518 ffffffc0
[    4.294564] 1ec0  7a2fe518 ffffffc0 7a2fe510 ffffffc0 7b775200 ffffffc0 08c62548 ffffff80
[    4.303828] 1ee0  79ccd568 ffffffc0 00000005 00000007 00000000 00000000 08c83620 ffffff80
[    4.313092] 1f00  00000000 00030003 79ca1f08 ffffffc0 79ca1f08 ffffffc0 7b5e8080 ffffffc0
[    4.322360]
[    4.322360] X29: 0xffffffc07b663ac0:
[    4.328039] 3ac0  08d12000 ffffff80 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 00000000 00000000
[    4.337303] 3ae0  00000000 00000000 00000000 00000000 00000000 00000000 7b663b40 ffffffc0
[    4.346566] 3b00  0832e8d0 ffffff80 7b663b40 ffffffc0 0832e8d0 ffffff80 80000145 00000000
[    4.355830] 3b20  00000000 00000000 00000000 00000000 ffffffff ffffffff 000001a4 00000000
[    4.365094] 3b40  7b663b70 ffffffc0 08513a70 ffffff80 08d12ae0 ffffff80 000000c8 00000000
[    4.374358] 3b60  7900cd18 ffffffc0 000000c8 00000000 7b663b90 ffffffc0 0851438c ffffff80
[    4.383622] 3b80  797c3898 ffffffc0 79753c80 ffffffc0 7b663be0 ffffffc0 0852c150 ffffff80
[    4.392886] 3ba0  00000000 00000000 79ca1e80 ffffffc0 79ca1ea0 ffffffc0 08513b7c ffffff80
[    4.402150]
[    4.403823] ---[ end trace e800e41b663636a8 ]---
[    4.409013] Call trace:
[    4.411762] Exception stack(0xffffffc07b663950 to 0xffffffc07b663a80)
[    4.419006] 3940:                                   0000000000000000 0000007fffffffff
[    4.427815] 3960: ffffffc07b663b40 ffffff800832e8d0 0000000080000145 000000000000003d
[    4.436623] 3980: 0000000000000000 0000000000000000 0000000000000140 0000000100000008
[    4.445433] 39a0: ffffffc07b663a40 ffffff80080e9304 ffffffc07b663aa0 ffffff8008996568
[    4.454241] 39c0: ffffff8008cfc000 ffffff8008d12000 ffffffc079ca1e80 ffffffc079ca1ea0
[    4.463050] 39e0: 0000000000000000 0000000000000000 0000000000000000 0000000000000000
[    4.471858] 3a00: ffffffc07b663a40 ffffff8008996568 0000000000000010 ffffffc07b5e8080
[    4.480666] 3a20: 0000000000000000 ffffff80080e8b3c 0000000000000028 0000000000000000
[    4.489475] 3a40: 0000000000000000 0000000000000000 ffffffc07defafdc 0000000005f5e0ff
[    4.498284] 3a60: ffffff8008cdf967 00000000fffffffe 0000000000000030 ffffffffffffffff
[    4.507093] [<ffffff800832e8d0>] gpio_to_desc+0x6c/0xc8
[    4.512972] [<ffffff8008513a70>] fts_reset_proc+0x50/0x70
[    4.519046] [<ffffff800851438c>] fts_ts_probe+0x810/0x878
[    4.525119] [<ffffff800852c150>] i2c_device_probe+0x178/0x1e0
[    4.531584] [<ffffff80084077a4>] driver_probe_device+0x1bc/0x274
[    4.538341] [<ffffff80084078e0>] __driver_attach+0x84/0xb4
[    4.544512] [<ffffff8008405a34>] bus_for_each_dev+0x8c/0x9c
[    4.550780] [<ffffff8008407130>] driver_attach+0x30/0x3c
[    4.556755] [<ffffff8008406d6c>] bus_add_driver+0x1a0/0x1e4
[    4.563024] [<ffffff800840852c>] driver_register+0xa0/0xd8
[    4.569195] [<ffffff800852cadc>] i2c_register_driver+0x64/0x80
[    4.575757] [<ffffff8008a9ecc4>] fts_ts_init+0x1c/0x4c
[    4.581537] [<ffffff8008083504>] do_one_initcall+0x124/0x148
[    4.587904] [<ffffff8008a70ce4>] do_initcall_level+0x188/0x18c
[    4.594466] [<ffffff8008a70e60>] kernel_init_freeable+0x178/0x18c
[    4.601321] [<ffffff8008817db8>] kernel_init+0x18/0x100
[    4.607199] [<ffffff8008083180>] ret_from_fork+0x10/0x50
[    4.818528] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    4.827353] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    4.837068] 0x05002200: 01011001 00000001 00007100 00010001
[    4.843448] 0x05002210: 00008040 00010004 00010010 00000001
[    4.874522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    4.883353] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    4.893059] 0x05002200: 01011001 00000001 00007100 00010001
[    4.899446] 0x05002210: 00008000 00010004 00010010 00000001
[    4.930522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    4.939353] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    4.949059] 0x05002200: 01011001 00000001 00007100 00010001
[    4.955445] 0x05002210: 00008040 00010004 00010010 00000001
[    4.986522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    4.995345] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.005058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.011437] 0x05002210: 00008000 00010004 00010010 00000001
[    5.042522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.051345] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.061058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.067438] 0x05002210: 00008040 00010004 00010010 00000001
[    5.098522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.107352] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.117058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.123434] random: fast init done
[    5.127277] 0x05002210: 00008000 00010004 00010010 00000001
[    5.158522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.167345] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.177058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.183438] 0x05002210: 00008040 00010004 00010010 00000001
[    5.214522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.223345] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.233058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.239437] 0x05002210: 00008000 00010004 00010010 00000001
[    5.270522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.279353] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.289058] 0x05002200: 01011001 00000001 00007100 00010001
[    5.295445] 0x05002210: 00008040 00010004 00010010 00000001
[    5.326521] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.335352] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.345065] 0x05002200: 01011001 00000001 00007100 00010001
[    5.351444] 0x05002210: 00008000 00010004 00010010 00000001
[    5.382522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.391344] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.401057] 0x05002200: 01011001 00000001 00007100 00010001
[    5.407437] 0x05002210: 00008040 00010004 00010010 00000001
[    5.438522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.447353] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.457059] 0x05002200: 01011001 00000001 00007100 00010001
[    5.463452] 0x05002210: 00008000 00010004 00010010 00000001
[    5.494522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.503351] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.513057] 0x05002200: 01011001 00000001 00007100 00010001
[    5.519443] 0x05002210: 00008040 00010004 00010010 00000001
[    5.550521] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.559343] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.569056] 0x05002200: 01011001 00000001 00007100 00010001
[    5.575436] 0x05002210: 00008000 00010004 00010010 00000001
[    5.606522] sunxi_i2c_drv_core_process()992 - [i2c0] Timeout when sending 9th SCL clk
[    5.615343] i2c_sunxi_drv_complete()1166 - [i2c0] incomplete xfer(status: 0x1, dev addr: 0x38)
[    5.625056] 0x05002200: 01011001 00000001 00007100 00010001
[    5.631436] 0x05002210: 00008040 00010004 00010010 00000001
[    5.671704] input: axp2202-pek as /devices/platform/soc/twi6/i2c-6/6-0034/axp2101-pek.0/input/input2
[    5.683349] sunxi_gpadc_init,1891, success
[    5.690660] sunxi-rtc rtc: rtc core: registered sunxi-rtc as rtc0
[    5.697786] sunxi-rtc rtc: RTC enabled
[    5.702682] i2c /dev entries driver
[    5.708982] lt8912b_driver_init entered.
[    5.713600] sunxi cedar version 0.1
[    5.717816] VE: install start!!!
[    5.717816]
[    5.723343] cedar_ve: cedar-ve the get irq is 346
[    5.729010] VE: line 1811 set the sram data
[    5.729010]
[    5.736338] VE: get debugfs_mpp_root is NULL, please check mpp
[    5.736338]
[    5.744578] VE: sunxi ve debug register driver failed!
[    5.744578]
[    5.752034] VE: install end!!!
[    5.752034]
[    5.787969] Bluetooth: HCI UART driver ver 2.2.74e8f89.20201026-111523
[    5.795405] Bluetooth: HCI UART protocol (null) registered
[    5.801704] Bluetooth: HCI H4 protocol initialized
[    5.807157] Bluetooth: XRadio Bluetooth LPM Mode Driver Ver 01.00.07
[    5.815090] [XR_BT_LPM] bluesleep_probe: bt_wake polarity: 1
[    5.821548] [XR_BT_LPM] bluesleep_probe: host_wake polarity: 1
[    5.828224] [XR_BT_LPM] bluesleep_probe: uart_index(1)
[    5.835561] bt_fdi debugfs_init
[    5.850532] sunxi-mmc sdc2: SD/MMC/SDIO Host Controller Driver(v3.48 2020-9-15 16:01)
[    5.859623] sunxi-mmc sdc2: ***ctl-spec-caps*** 8
[    5.865413] sunxi-mmc sdc2: No vqmmc regulator found
[    5.871013] sunxi-mmc sdc2: No vdmmc regulator found
[    5.876614] sunxi-mmc sdc2: No vd33sw regulator found
[    5.882306] sunxi-mmc sdc2: No vd18sw regulator found
[    5.888004] sunxi-mmc sdc2: No vq33sw regulator found
[    5.893696] sunxi-mmc sdc2: No vq18sw regulator found
[    5.900477] sunxi-mmc sdc2: set host busy
[    5.905101] mmc:failed to get gpios
[    5.909851] sunxi-mmc sdc2: sdc set ios:clk 0Hz bm PP pm UP vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.938477] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.966486] sunxi-mmc sdc2: detmode:alway in(non removable)
[    5.966509] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.974904] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.975998] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm OD pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.986869] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm OD pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.986959] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm OD pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    5.999831] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm OD pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    6.045383] sunxi-mmc sdc1: SD/MMC/SDIO Host Controller Driver(v3.48 2020-9-15 16:01)
[    6.054347] sunxi-mmc sdc1: ***ctl-spec-caps*** 8
[    6.059810] sunxi-mmc sdc1: No vmmc regulator found
[    6.065329] sunxi-mmc sdc1: No vqmmc regulator found
[    6.070938] sunxi-mmc sdc1: No vdmmc regulator found
[    6.076560] sunxi-mmc sdc1: No vd33sw regulator found
[    6.082260] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[    6.093158] sunxi-mmc sdc1: No vd18sw regulator found
[    6.098894] sunxi-mmc sdc1: No vq33sw regulator found
[    6.104588] sunxi-mmc sdc1: No vq18sw regulator found
[    6.111334] sunxi-mmc sdc1: set host busy
[    6.115967] mmc:failed to get gpios
[    6.120732] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm UP vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.131071] sunxi-mmc sdc1: no vqmmc,Check if there is regulator
[    6.138283] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 8 timing LEGACY(SDR12) dt B
[    6.154526] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.166041] sunxi-mmc sdc2: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS200 dt B
[    6.176954] sunxi-mmc sdc2: sdc set ios:clk 100000000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS200 dt B
[    6.187698] sunxi-mmc sdc1: detmode:manually by software
[    6.193749] sunxi-mmc sdc2: sdc set ios:clk 100000000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS(SDR20) dt B
[    6.195942] hidraw: raw HID events driver (C) Jiri Kosina
[    6.196577] usbcore: registered new interface driver usbhid
[    6.196579] usbhid: USB HID core driver
[    6.199340] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.200143] usbcore: registered new interface driver snd-usb-audio
[    6.200188] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.200211] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.202747] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.204673] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.205501] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.206081] sun50iw10p1-pinctrl pio: pin PH9 already requested by gmac0; cannot claim for dmic
[    6.206088] sun50iw10p1-pinctrl pio: pin-233 (dmic) status -22
[    6.206096] sun50iw10p1-pinctrl pio: could not request pin 233 (PH9) from group PH9  on device pio
[    6.206101] sunxi-dmic dmic: Error applying setting, reverse things back
[    6.206303] sunxi-dmic: probe of dmic failed with error -22
[    6.206326] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.207149] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.207174] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm OFF vdd 0 width 1 timing LEGACY(SDR12) dt B
[    6.208263] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm UP vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.208352] sunxi-mmc sdc1: no vqmmc,Check if there is regulator
[    6.211190] sunxi-internal-codec codec: [sunxi_internal_codec_probe] codec probe finished.
[    6.213195] [sunxi_card_init] card init finished.
[    6.216099] sunxi-codec-machine sndcodec: sun50iw10codec <-> 5096000.cpudai-controller mapping ok
[    6.220671] enter to get edev phandle!
[    6.220819] sunxi-codec-machine sndcodec: [sunxi_card_dev_probe] register card finished.
[    6.222760] snddmic snddmic: ASoC: CPU DAI (null) not registered
[    6.222781] snddmic snddmic: snd_soc_register_card() fail: -517
[    6.223126] snddmic: probe of snddmic failed with error -16
[    6.223756] u32 classifier
[    6.223758]     Actions configured
[    6.223765] Netfilter messages via NETLINK v0.30.
[    6.224962] nf_conntrack version 0.5.0 (16384 buckets, 65536 max)
[    6.226272] ctnetlink v0.93: registering with nfnetlink.
[    6.230476] sunxi-mmc sdc1: sdc set ios:clk 300000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.251544] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.252638] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.252657] sunxi-mmc sdc1: sdc set ios:clk 300000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.255257] sunxi-mmc sdc1: sdc set ios:clk 300000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.257433] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.258523] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.259612] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.260702] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.260722] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm OFF vdd 0 width 1 timing LEGACY(SDR12) dt B
[    6.261816] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm UP vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.261906] sunxi-mmc sdc1: no vqmmc,Check if there is regulator
[    6.262173] ip_tables: (C) 2000-2006 Netfilter Core Team
[    6.267904] Initializing XFRM netlink socket
[    6.274266] NET: Registered protocol family 10
[    6.278492] sunxi-mmc sdc1: sdc set ios:clk 200000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.280982] NET: Registered protocol family 17
[    6.282267] Bluetooth: RFCOMM TTY layer initialized
[    6.282307] Bluetooth: RFCOMM socket layer initialized
[    6.282354] Bluetooth: RFCOMM ver 1.11
[    6.282386] 8021q: 802.1Q VLAN Support v1.8
[    6.300103] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.301739] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.301762] sunxi-mmc sdc1: sdc set ios:clk 200000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.304705] sunxi-mmc sdc1: sdc set ios:clk 200000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.307466] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.309093] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.310719] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.312343] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RTO !!
[    6.312367] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm OFF vdd 0 width 1 timing LEGACY(SDR12) dt B
[    6.313476] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm UP vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.313587] sunxi-mmc sdc1: no vqmmc,Check if there is regulator
[    6.327692] sid_rd_ver_reg()471 - ver >= 4, soc ver:4
[    6.328271] sun50i_cpufreq_nvmem: using table: b0
[    6.330490] sunxi-mmc sdc1: sdc set ios:clk 100000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.334758] core: _opp_supported_by_regulators: OPP minuV: 0 maxuV: 0, not supported by regulator
[    6.334768] cpu cpu0: _opp_add: OPP not supported by regulators (1464000000)
[    6.335591] core: _opp_supported_by_regulators: OPP minuV: 0 maxuV: 0, not supported by regulator
[    6.335598] cpu cpu0: _opp_add: OPP not supported by regulators (1608000000)
[    6.335719] cpu cpu1: opp_list_debug_create_link: Failed to create link
[    6.335725] cpu cpu1: _add_opp_dev: Failed to register opp debugfs (-12)
[    6.335790] cpu cpu2: opp_list_debug_create_link: Failed to create link
[    6.335795] cpu cpu2: _add_opp_dev: Failed to register opp debugfs (-12)
[    6.335855] cpu cpu3: opp_list_debug_create_link: Failed to create link
[    6.335861] cpu cpu3: _add_opp_dev: Failed to register opp debugfs (-12)
[    6.338427] get id is fail, 84
[    6.341362] input: gpio_key as /devices/platform/gpio_key/input/input3
[    6.346217] sunxi-rtc rtc: setting system clock to 1970-01-01 00:00:49 UTC (49)
[    6.347163] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[    6.347198] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[    6.347212] snddaudio snddaudio0: snd_soc_register_card failed
[    6.348309] axp2202-dcdc4: disabling
[    6.348924] axp2202-aldo1: disabling
[    6.349532] axp2202-aldo2: disabling
[    6.350140] axp2202-bldo1: disabling
[    6.350835] axp2202-bldo3: disabling
[    6.351825] axp2202-cldo2: disabling
[    6.352577] axp2202-cldo4: disabling
[    6.353233] ALSA device list:
[    6.353235]   #0: audiocodec
[    6.353682] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[    6.355939] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RE RCE !!
[    6.355953] sunxi-mmc sdc1: sdc set ios:clk 100000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.359615] sunxi-mmc sdc1: sdc set ios:clk 100000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[    6.361853] sunxi-mmc sdc1: smc 1 p1 err, cmd 5, RE !!
[    6.361940] sunxi-mmc sdc1: no support for card's volts
[    6.361945] mmc1: error -22 whilst initialising SDIO card
[    6.361952] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm OFF vdd 0 width 1 timing LEGACY(SDR12) dt B
[    6.902159] sunxi-mmc sdc2: sdc set ios:clk 52000000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS(SDR20) dt B
[    6.914148] Waiting for root device /dev/mmcblk0p5...
[    6.920222] sunxi-mmc sdc2: sdc set ios:clk 50000000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS400 dt B
[    6.930924] sunxi_mmc_get_hs400_cmd_dly,222
[    6.935635] sunxi-mmc sdc2: failed to get HS400_cmd used default
[    6.942402] sunxi-mmc sdc2: sdc set ios:clk 100000000Hz bm PP pm ON vdd 23 width 8 timing MMC-HS400 dt B
[    6.953132] sunxi_mmc_get_hs400_cmd_dly,222
[    6.957829] sunxi-mmc sdc2: failed to get HS400_cmd used default
[    6.967515] mmc0: new HS400 MMC card at address 0001
[    6.975192] mmcblk0: mmc0:0001 HAG2e 14.7 GiB
[    6.980950] mmcblk0boot0: mmc0:0001 HAG2e partition 1 4.00 MiB
xterm-256color[    6.988139] mmcblk0boot1: mmc0:0001 HAG2e partition 2 4.00 MiB
xterm-256color[    6.996007] mmcblk0rpmb: mmc0:0001 HAG2e partition 3 4.00 MiB
[    7.007901]  mmcblk0: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10
xterm-256colorxterm-256color[    7.028201] pstore_zone: registered pstore_blk as backend for kmsg(Oops,panic_write)
[    7.036934] pstore: Registered pstore_blk as persistent store backend
[    7.044139] pstore_blk: attached mmcblk0p9
[    7.049159] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[    7.057225] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[    7.064435] snddaudio snddaudio0: snd_soc_register_card failed
[    7.141311] VFS: Mounted root (squashfs filesystem) readonly on device 179:5.
[    7.151599] devtmpfs: mounted
[    7.155454] Freeing unused kernel memory: 832K
[    7.374569]
[    7.374569] insmod_device_driver
[    7.374569]
[    7.381925] device_chose finished 124!
[    7.509771] init: Console is alive
[    7.513873] init: - preinit -
[    7.807313] random: procd: uninitialized urandom read (4 bytes read)
/dev/by-name/UDISK already format by ext4
/dev/by-name/rootfs_data already format by ext4
[    8.046529] mount_root: mounting /dev/root
[    8.052441] mount_root: loading kmods from internal overlay
[    9.597561] pvrsrvkm: loading out-of-tree module taints kernel.
[    9.597565] pvrsrvkm: loading out-of-tree module taints kernel.
[    9.627611] pvrsrvkm gpu: IC version: 0x00000004 , power_idle:0
[    9.634397] pvrsrvkm gpu: gpu core id:0x1000 core:504000000
[    9.640699] pvrsrvkm gpu: set gpu core rate:504000000 freq:504000000-950000uV dfs:0x00000001
[    9.650210] pvrsrvkm gpu: set gpu core rate:504000000 freq:472500000-950000uV dfs:0x00000002
[    9.659726] pvrsrvkm gpu: set gpu core rate:504000000 freq:441000000-950000uV dfs:0x00000004
[    9.669241] pvrsrvkm gpu: set gpu core rate:252000000 freq:252000000-950000uV dfs:0x00000001
[    9.679057] pvrsrvkm gpu: idle:0 dvfs:0 power:0 No mode:1 volt:0 core:504000000
[    9.687637] PVR_K:  971: Read BVNC 22.102.54.38 from HW device registers
[    9.695203] PVR_K:  971: RGX Device registered with BVNC 22.102.54.38
[    9.706977] [drm] Initialized pvr 1.11.5516664 20170530 on minor 0
[    9.714545] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[    9.722644] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[    9.730063] snddaudio snddaudio0: snd_soc_register_card failed
[    9.730103] Found usable fbdev device ():
[    9.730103] range (physical) = 0xffc00000-0xffeee000
[    9.730103] size (bytes)     = 0x2ee000
[    9.730103] xres x yres      = 480x800
[    9.730103] xres x yres (v)  = 480x1600
[    9.730103] img pix fmt      = 89
[    9.730103] flipping?        = 1
[    9.865170] kmodloader: 2 modules could not be probed
[    9.870990] kmodloader: dependency not loaded pvrsrvkm
[    9.876859] kmodloader: - dc_sunxi - 1
[    9.881170] kmodloader: - pvrsrvkm - 0
[    9.948100] block: attempting to load /etc/config/fstab
e2fsck 1.42.12 (29-Aug-2014)
/dev/by-name/rootfs_data: recovering journal
/dev/by-name/rootfs_data: clean, 35/1024 files, 1205/4096 blocks
[   10.158552] EXT4-fs (mmcblk0p6): mounted filesystem with ordered data mode. Opts:
[   10.169700] block: extroot: UUID match (root: a07ec3f8-922e450e-314c2808-08654931, overlay: a07ec3f8-922e450e-314c2808-08654931)
[   10.201504] mount_root: switched to extroot
[   10.218929] procd: - early -
[   10.305499] random: procd: uninitialized urandom read (4 bytes read)
[   10.467915] procd: - ubus -
[   10.472889] procd (1): /proc/1220/oom_adj is deprecated, please use /proc/1220/oom_score_adj instead.
[   10.546660] random: ubusd: uninitialized urandom read (4 bytes read)
[   10.604105] random: ubusd: uninitialized urandom read (4 bytes read)
[   10.632803] procd: - init -
Please press Enter to activate this console.
[   11.002572] udevd[1271]: starting version 3.2.9
[   11.075213] udevd[1271]: specified group 'tty' unknown
[   11.081385] udevd[1271]: specified group 'dialout' unknown
[   11.094002] udevd[1271]: specified group 'kmem' unknown
[   11.126722] udevd[1271]: specified group 'input' unknown
[   11.160534] udevd[1271]: specified group 'video' unknown
[   11.171209] udevd[1271]: specified group 'lp' unknown
[   11.182646] fuse init (API version 7.26)
[   11.191772] udevd[1271]: specified group 'disk' unknown
[   11.191882] udevd[1271]: specified group 'cdrom' unknown
[   11.192042] udevd[1271]: specified group 'tape' unknown
[   11.314582] udevd[1335]: starting eudev-3.2.9
[   11.392419] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.400634] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.407268] file system registered
[   11.408393] [VIN_WARN]sensor_helper_probe: cannot get sensor1_cameravdd supply, setting it to NULL!
[   11.425276] snddaudio snddaudio0: snd_soc_register_card failed
[   11.432761] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.440946] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.440969] snddaudio snddaudio0: snd_soc_register_card failed
[   11.481598] configfs-gadget 5100000.udc-controller: failed to start g1: -19
[   11.628410] read descriptors
[   11.628429] read strings
[   11.816217] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.824384] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.831986] snddaudio snddaudio0: snd_soc_register_card failed
[   11.840002] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.848305] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.856694] snddaudio snddaudio0: snd_soc_register_card failed
[   11.863996] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.882566] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.884146] [VIN_ERR]imx415_mipi request i2c2 adapter failed!
[   11.890669] [sc031gs_mipi]PWR_ON!
[   11.900176] snddaudio snddaudio0: snd_soc_register_card failed
[   11.907559] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   11.907607] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   11.907627] snddaudio snddaudio0: snd_soc_register_card failed
[   11.927411] sunxi_i2c_do_xfer()1946 - [i2c3] incomplete xfer (status: 0x20, dev addr: 0x30)
[   11.932955] sunxi_i2c_do_xfer()1946 - [i2c3] incomplete xfer (status: 0x20, dev addr: 0x30)
[   11.941279] sunxi_i2c_do_xfer()1946 - [i2c3] incomplete xfer (status: 0x20, dev addr: 0x30)
[   11.941294] [VIN_DEV_I2C]sc031gs_mipi sensor read retry = 2
[   11.941298] [sc031gs_mipi] error, chip found is not an target chip.
[   11.941303] [sc031gs_mipi]PWR_OFF!
[   11.947833] [VIN_ERR]registering sc031gs_mipi, No such device!
[   12.061302] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   12.069538] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   12.079474] snddaudio snddaudio0: snd_soc_register_card failed
[   12.304399] aicbsp_init
[   12.307230] RELEASE_DATE:2023_0904_1726
[   12.907102] AICWFDBG(LOGTRACE)       >>> rwnx_mod_init()
[   12.912539] AICWFDBG(LOGINFO)        rwnx v6.4.3.0 - - 241c091M (master)
[   12.912544] AICWFDBG(LOGINFO)        RELEASE_DATE:2023_0904_1725
[   12.912548] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array Enter
[   12.912553] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[0]:ffffff8000a16308
[   12.912557] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[1]:ffffff8000a16368
[   12.912560] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[2]:ffffff8000a163c8
[   12.912563] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[3]:ffffff8000a16428
[   12.912566] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[4]:ffffff8000a16488
[   12.912570] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[5]:ffffff8000a164e8
[   12.912573] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[6]:ffffff8000a16548
[   12.912577] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[7]:ffffff8000a165a8
[   12.912580] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[8]:ffffff8000a16608
[   12.912583] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[9]:ffffff8000a16668
[   12.912587] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[10]:ffffff8000a166c8
[   12.912590] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[11]:ffffff8000a16728
[   12.912594] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[12]:ffffff8000a16788
[   12.912597] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[13]:ffffff8000a167e8
[   12.912601] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[14]:ffffff8000a16848
[   12.912604] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[15]:ffffff8000a168a8
[   12.912607] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[16]:ffffff8000a16908
[   12.912611] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[17]:ffffff8000a16968
[   12.912614] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[18]:ffffff8000a169c8
[   12.912618] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array cmd_queue[19]:ffffff8000a16a28
[   12.912620] AICWFDBG(LOGTRACE)       rwnx_init_cmd_array Exit
[   12.912625] aicbsp: aicbsp_set_subsys, subsys: AIC_WIFI, state to: 1
[   12.912629] aicbsp: aicbsp_set_subsys, power state change to 1 dure to AIC_WIFI
[   12.912631] aicbsp: aicbsp_platform_power_on
[   12.912642] sunxi-wlan soc@03000000:wlan@0: bus_index: 1
[   13.040032] sunxi-wlan soc@03000000:wlan@0: check wlan wlan_power voltage: 3300000
[   13.108962] sunxi-wlan soc@03000000:wlan@0: check wlan io_regulator voltage: 1800000
[   13.169026] sunxi-mmc sdc1: sdc set ios:clk 0Hz bm PP pm UP vdd 21 width 1 timing LEGACY(SDR12) dt B
[   13.169202] sunxi-mmc sdc1: no vqmmc,Check if there is regulator
[   13.186473] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[   13.207335] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[   13.214122] sunxi-mmc sdc1: smc 1 p1 err, cmd 52, RTO !!
[   13.220105] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[   13.233421] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing LEGACY(SDR12) dt B
[   13.254957] sunxi-mmc sdc1: sdc set ios:clk 400000Hz bm PP pm ON vdd 21 width 1 timing SD-HS(SDR25) dt B
[   13.265814] sunxi-mmc sdc1: sdc set ios:clk 50000000Hz bm PP pm ON vdd 21 width 1 timing SD-HS(SDR25) dt B
[   13.276943] sunxi-mmc sdc1: sdc set ios:clk 50000000Hz bm PP pm ON vdd 21 width 4 timing SD-HS(SDR25) dt B
[   13.278914] mmc1: new high speed SDIO card at address 390b
[   13.281379] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   13.281421] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   13.281438] snddaudio snddaudio0: snd_soc_register_card failed
[   13.282764] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   13.282807] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   13.282823] snddaudio snddaudio0: snd_soc_register_card failed
[   13.298422] aicbsp: aicbsp_sdio_probe:1 vid:0xC8A1  did:0x0082
[   13.298925] aicbsp: aicbsp_sdio_probe:2 vid:0xC8A1  did:0x0182
[   13.298929] aicbsp: aicbsp_sdio_probe after replace:1
[   13.298949] AICWFDBG(LOGINFO)        aicwf_sdio_chipmatch USE AIC8800D80
[   13.298954] aicbsp: aicbsp_get_feature, set FEATURE_SDIO_CLOCK 150 MHz
[   13.298957] aicbsp: aicwf_sdio_reg_init
[   13.300459] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   13.300497] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   13.300514] snddaudio snddaudio0: snd_soc_register_card failed
[   13.301296] AICWFDBG(LOGINFO)        aicbsp: aicbsp_driver_fw_init, chip rev: 7
[   13.301315] rwnx_load_firmware :firmware path = /lib/firmware//fw_patch_table_8800d80_u02.bin
[   13.309774] file md5:0e6fd98c0a89c62ebd4c1a430fafa59f
[   13.310359] rwnx_plat_bin_fw_upload_android
[   13.310375] rwnx_load_firmware :firmware path = /lib/firmware//fw_adid_8800d80_u02.bin
[   13.310710] file md5:f546881a81b960d89a672578eb45a809
[   13.311565] rwnx_plat_bin_fw_upload_android
[   13.311585] rwnx_load_firmware :firmware path = /lib/firmware//fw_patch_8800d80_u02.bin
[   13.312154] file md5:9e3808a312cc19925259a6c5163753d5
[   13.335799] aicbt_patch_table_load bt btmode:0
[   13.335803] aicbt_patch_table_load bt uart_baud:1500000
[   13.335806] aicbt_patch_table_load bt uart_flowctrl:1
[   13.335808] aicbt_patch_table_load bt lpm_enable:0
[   13.335811] aicbt_patch_table_load bt tx_pwr:28463
[   13.342495] aicbsp: bt patch version: - Nov 06 2023 12:44:17 - git 1f5d13b
[   13.342776] rwnx_plat_bin_fw_upload_android
[   13.342795] rwnx_load_firmware :firmware path = /lib/firmware//fmacfw_8800d80_u02.bin
[   13.410372] file md5:2aa840eaea976e7fb87e33fd9e82a653
[   13.545888] AICWFDBG(LOGDEBUG)       aicwf_sdio_probe:1
[   13.551208] AICWFDBG(LOGDEBUG)       Class=7
[   13.559804] AICWFDBG(LOGDEBUG)       sdio vendor ID: 0xc8a1
[   13.559808] AICWFDBG(LOGDEBUG)       sdio device ID: 0x0082
[   13.559811] AICWFDBG(LOGDEBUG)       Function#: 1
[   13.559841] AICWFDBG(LOGINFO)        aicwf_sdio_chipmatch USE AIC8800D80
[   13.559847] aicbsp: aicbsp_get_feature, set FEATURE_SDIO_CLOCK 150 MHz
[   13.559850] aicsdio: aicwf_sdio_reg_init
[   13.565078] AICWFDBG(LOGINFO)        sdio ready
[   13.565468] AICWFDBG(LOGINFO)        sdio_bustx_thread the policy of current thread is:0
[   13.565472] AICWFDBG(LOGINFO)        sdio_bustx_thread the rt_priority of current thread is:0
[   13.565476] AICWFDBG(LOGINFO)        sdio_bustx_thread the current pid is:1488
[   13.565575] AICWFDBG(LOGINFO)        sdio_busrx_thread the policy of current thread is:0
[   13.565579] AICWFDBG(LOGINFO)        sdio_busrx_thread the rt_priority of current thread is:0
[   13.565583] AICWFDBG(LOGINFO)        sdio_busrx_thread the current pid is:1489
[   13.565799] AICWFDBG(LOGTRACE)       >>> rwnx_platform_init()
[   13.565802] AICWFDBG(LOGTRACE)       >>> rwnx_cfg80211_init()
[   13.565807] aicbsp: aicbsp_get_feature, set FEATURE_SDIO_CLOCK 150 MHz
[   13.565814] AICWFDBG(LOGINFO)        rwnx_cfg80211_init sizeof(struct rwnx_hw):12576
[   13.565910] AICWFDBG(LOGTRACE)       >>> rwnx_init_aic()
[   13.565914] AICWFDBG(LOGTRACE)       >>> rwnx_cmd_mgr_init()
[   13.567198] AICWFDBG(LOGINFO)        aicwf_prealloc_txq_alloc size is diff will to be kzalloc
[   13.567214] AICWFDBG(LOGINFO)        aicwf_prealloc_txq_alloc txq kzalloc successful
[   13.570583] AICWFDBG(LOGTRACE)       >>> rwnx_send_dbg_mem_read_req()
[   13.570601] AICWFDBG(LOGTRACE)       rwnx_send_msg (1025)DBG_MEM_READ_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.570611] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   13.579420] aicbsp: sdio_err:<aicwf_sdio_bus_pwrctl,1349>: bus down
[   13.579478] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   13.579482] AICWFDBG(LOGTRACE)       >>> rwnx_send_dbg_mem_read_req()
[   13.579497] AICWFDBG(LOGTRACE)       rwnx_send_msg (1025)DBG_MEM_READ_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.579503] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   13.598520] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   13.598527] AICWFDBG(LOGINFO)        FDRV chip_id=7, chip_sub_id=2!!
[   13.598530] AICWFDBG(LOGTRACE)       >>> rwnx_platform_on()
[   13.598534] AICWFDBG(LOGINFO)        userconfig file path:aic_userconfig_8800d80.txt
[   13.598537] AICWFDBG(LOGINFO)        ### Load file aic_userconfig_8800d80.txt
[   13.598556] AICWFDBG(LOGINFO)        rwnx_load_firmware :firmware path = /lib/firmware//aic_userconfig_8800d80.txt
[   13.598830] AICWFDBG(LOGINFO)        file md5:2c9d3ab6e42c03bd2adb9f9e2b6180f2
[   13.598835] AICWFDBG(LOGINFO)        ### Load file done: aic_userconfig_8800d80.txt, size=2448
[   13.598840] AICWFDBG(LOGINFO)        rwnx_plat_userconfig_parsing3: AIC USERCONFIG 2022/0803/1707
[   13.598843] AICWFDBG(LOGINFO)        rwnx_plat_userconfig_parsing3: txpwr_lvl
[   13.598847] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=enable value=1
[   13.598852] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_1m_2g4 value=18
[   13.598857] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_2m_2g4 value=18
[   13.598861] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_5m5_2g4 value=18
[   13.598865] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_11m_2g4 value=18
[   13.598870] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_6m_2g4 value=18
[   13.598874] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_9m_2g4 value=18
[   13.598879] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_12m_2g4 value=18
[   13.598883] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_18m_2g4 value=18
[   13.598888] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_24m_2g4 value=16
[   13.598892] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_36m_2g4 value=16
[   13.598897] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_48m_2g4 value=15
[   13.598902] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11b_11ag_54m_2g4 value=15
[   13.598907] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs0_2g4 value=18
[   13.598911] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs1_2g4 value=18
[   13.598916] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs2_2g4 value=18
[   13.598921] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs3_2g4 value=18
[   13.598926] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs4_2g4 value=16
[   13.598931] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs5_2g4 value=16
[   13.598936] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs6_2g4 value=15
[   13.598941] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs7_2g4 value=15
[   13.598946] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs8_2g4 value=14
[   13.598951] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs9_2g4 value=14
[   13.598957] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs0_2g4 value=18
[   13.598962] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs1_2g4 value=18
[   13.598967] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs2_2g4 value=18
[   13.598972] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs3_2g4 value=18
[   13.598977] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs4_2g4 value=16
[   13.598983] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs5_2g4 value=16
[   13.598988] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs6_2g4 value=15
[   13.598994] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs7_2g4 value=15
[   13.598999] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs8_2g4 value=14
[   13.599005] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs9_2g4 value=14
[   13.599011] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs10_2g4 value=13
[   13.599016] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs11_2g4 value=13
[   13.599022] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_6m_5g value=18
[   13.599029] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_9m_5g value=18
[   13.599035] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_12m_5g value=18
[   13.599040] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_18m_5g value=18
[   13.599047] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_24m_5g value=16
[   13.599053] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_36m_5g value=16
[   13.599060] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_48m_5g value=15
[   13.599066] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11a_54m_5g value=15
[   13.599072] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs0_5g value=18
[   13.599079] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs1_5g value=18
[   13.599085] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs2_5g value=18
[   13.599092] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs3_5g value=18
[   13.599099] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs4_5g value=16
[   13.599106] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs5_5g value=16
[   13.599113] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs6_5g value=15
[   13.599120] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs7_5g value=15
[   13.599127] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs8_5g value=14
[   13.599134] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11n_11ac_mcs9_5g value=14
[   13.599141] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs0_5g value=18
[   13.599148] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs1_5g value=18
[   13.599155] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs2_5g value=18
[   13.599162] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs3_5g value=18
[   13.599169] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs4_5g value=16
[   13.599176] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs5_5g value=16
[   13.599184] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs6_5g value=14
[   13.599191] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs7_5g value=14
[   13.599199] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs8_5g value=13
[   13.599206] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs9_5g value=13
[   13.599214] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs10_5g value=12
[   13.599222] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs11_5g value=12
[   13.599230] AICWFDBG(LOGINFO)        rwnx_plat_userconfig_parsing3: txpwr_loss
[   13.599233] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=loss_enable value=0
[   13.599239] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=loss_value value=2
[   13.599244] AICWFDBG(LOGINFO)        rwnx_plat_userconfig_parsing3: txpwr_ofst
[   13.599247] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_enable value=0
[   13.599253] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_11b_chan_1_4 value=0
[   13.599260] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_11b_chan_5_9 value=0
[   13.599267] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_11b_chan_10_13 value=0
[   13.599273] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_highrate_chan_1_4 value=0
[   13.599280] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_highrate_chan_5_9 value=0
[   13.599287] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_highrate_chan_10_13 value=0
[   13.599295] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_lowrate_chan_1_4 value=0
[   13.599301] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_lowrate_chan_5_9 value=0
[   13.599308] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_2g4_ofdm_lowrate_chan_10_13 value=0
[   13.599316] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_42 value=0
[   13.599322] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_58 value=0
[   13.599329] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_106 value=0
[   13.599336] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_122 value=0
[   13.599342] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_138 value=0
[   13.599350] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_lowrate_chan_155 value=0
[   13.599357] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_42 value=0
[   13.599364] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_58 value=0
[   13.599371] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_106 value=0
[   13.599379] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_122 value=0
[   13.599386] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_138 value=0
[   13.599393] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_highrate_chan_155 value=0
[   13.599401] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_42 value=0
[   13.599408] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_58 value=0
[   13.599416] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_106 value=0
[   13.599424] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_122 value=0
[   13.599431] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_138 value=0
[   13.599439] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=ofst_5g_ofdm_midrate_chan_155 value=0
[   13.599446] AICWFDBG(LOGINFO)        rwnx_plat_userconfig_parsing3: xtal cap
[   13.599449] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=xtal_enable value=0
[   13.599455] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=xtal_cap value=24
[   13.599461] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=xtal_cap_fine value=31
[   13.599474] AICWFDBG(LOGINFO)        userconfig download complete
[   13.599474]
[   13.599491] AICWFDBG(LOGTRACE)       rwnx_send_msg (124)MM_SET_STACK_START_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.599499] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   13.615874] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   13.615882] AICWFDBG(LOGINFO)        is 5g support = 1, vendor_info = 0x00
[   13.615898] AICWFDBG(LOGTRACE)       rwnx_send_msg (129)MM_GET_FW_VERSION_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.615905] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   13.640681] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   13.640687] AICWFDBG(LOGINFO)        Firmware Version: mi Nov 01 2023 19:51:27 - g6a92fae
[   13.640693] AICWFDBG(LOGTRACE)       >>> rwnx_send_txpwr_lvl_v3_req()
[   13.640706] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:enable:1
[   13.640709] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_1m_2g4:18
[   13.640713] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_2m_2g4:18
[   13.640716] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_5m5_2g4:18
[   13.640719] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_11m_2g4:18
[   13.640722] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_6m_2g4:18
[   13.640726] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_9m_2g4:18
[   13.640729] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_12m_2g4:18
[   13.640733] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_18m_2g4:18
[   13.640736] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_24m_2g4:16
[   13.640739] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_36m_2g4:16
[   13.640742] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_48m_2g4:15
[   13.640746] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11b_11ag_54m_2g4:15
[   13.640749] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs0_2g4:18
[   13.640753] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs1_2g4:18
[   13.640756] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs2_2g4:18
[   13.640759] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs3_2g4:18
[   13.640763] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs4_2g4:16
[   13.640766] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs5_2g4:16
[   13.640769] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs6_2g4:15
[   13.640772] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs7_2g4:15
[   13.640775] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs8_2g4:14
[   13.640779] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs9_2g4:14
[   13.640782] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs0_2g4:18
[   13.640785] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs1_2g4:18
[   13.640788] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs2_2g4:18
[   13.640791] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs3_2g4:18
[   13.640795] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs4_2g4:16
[   13.640798] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs5_2g4:16
[   13.640801] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs6_2g4:15
[   13.640804] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs7_2g4:15
[   13.640807] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs8_2g4:14
[   13.640810] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs9_2g4:14
[   13.640813] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs10_2g4:13
[   13.640817] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs11_2g4:13
[   13.640820] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_1m_5g:-128
[   13.640823] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_2m_5g:-128
[   13.640826] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_5m5_5g:-128
[   13.640829] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_11m_5g:-128
[   13.640833] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_6m_5g:18
[   13.640836] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_9m_5g:18
[   13.640839] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_12m_5g:18
[   13.640842] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_18m_5g:18
[   13.640845] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_24m_5g:16
[   13.640848] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_36m_5g:16
[   13.640851] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_48m_5g:15
[   13.640855] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11a_54m_5g:15
[   13.640858] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs0_5g:18
[   13.640861] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs1_5g:18
[   13.640865] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs2_5g:18
[   13.640868] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs3_5g:18
[   13.640871] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs4_5g:16
[   13.640874] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs5_5g:16
[   13.640878] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs6_5g:15
[   13.640881] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs7_5g:15
[   13.640884] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs8_5g:14
[   13.640887] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11n_11ac_mcs9_5g:14
[   13.640890] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs0_5g:18
[   13.640893] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs1_5g:18
[   13.640896] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs2_5g:18
[   13.640900] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs3_5g:18
[   13.640903] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs4_5g:16
[   13.640906] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs5_5g:16
[   13.640909] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs6_5g:14
[   13.640912] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs7_5g:14
[   13.640915] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs8_5g:13
[   13.640919] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs9_5g:13
[   13.640922] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs10_5g:12
[   13.640925] AICWFDBG(LOGINFO)        get_userconfig_txpwr_lvl_v3_in_fdrv:lvl_11ax_mcs11_5g:12
[   13.640928] AICWFDBG(LOGINFO)        get_userconfig_txpwr_loss:loss_enable:0
[   13.640931] AICWFDBG(LOGINFO)        get_userconfig_txpwr_loss:loss_value:2
[   13.640934] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:enable:1
[   13.640937] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_1m_2g4:18
[   13.640940] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_2m_2g4:18
[   13.640943] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_5m5_2g4:18
[   13.640947] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_11m_2g4:18
[   13.640950] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_6m_2g4:18
[   13.640953] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_9m_2g4:18
[   13.640956] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_12m_2g4:18
[   13.640959] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_18m_2g4:18
[   13.640962] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_24m_2g4:16
[   13.640965] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_36m_2g4:16
[   13.640968] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_48m_2g4:15
[   13.640971] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11b_11ag_54m_2g4:15
[   13.640975] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs0_2g4:18
[   13.640978] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs1_2g4:18
[   13.640981] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs2_2g4:18
[   13.640985] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs3_2g4:18
[   13.640988] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs4_2g4:16
[   13.640991] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs5_2g4:16
[   13.640994] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs6_2g4:15
[   13.640997] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs7_2g4:15
[   13.641000] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs8_2g4:14
[   13.641003] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs9_2g4:14
[   13.641006] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs0_2g4:18
[   13.641009] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs1_2g4:18
[   13.641012] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs2_2g4:18
[   13.641016] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs3_2g4:18
[   13.641019] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs4_2g4:16
[   13.641022] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs5_2g4:16
[   13.641025] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs6_2g4:15
[   13.641028] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs7_2g4:15
[   13.641031] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs8_2g4:14
[   13.641034] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs9_2g4:14
[   13.641037] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs10_2g4:13
[   13.641040] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs11_2g4:13
[   13.641043] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_1m_5g:-128
[   13.641046] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_2m_5g:-128
[   13.641049] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_5m5_5g:-128
[   13.641052] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_11m_5g:-128
[   13.641055] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_6m_5g:18
[   13.641059] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_9m_5g:18
[   13.641062] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_12m_5g:18
[   13.641065] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_18m_5g:18
[   13.641068] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_24m_5g:16
[   13.641071] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_36m_5g:16
[   13.641074] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_48m_5g:15
[   13.641077] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11a_54m_5g:15
[   13.641081] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs0_5g:18
[   13.641084] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs1_5g:18
[   13.641087] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs2_5g:18
[   13.641090] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs3_5g:18
[   13.641093] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs4_5g:16
[   13.641096] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs5_5g:16
[   13.641100] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs6_5g:15
[   13.641103] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs7_5g:15
[   13.641106] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs8_5g:14
[   13.641109] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11n_11ac_mcs9_5g:14
[   13.641112] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs0_5g:18
[   13.641115] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs1_5g:18
[   13.641118] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs2_5g:18
[   13.641121] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs3_5g:18
[   13.641125] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs4_5g:16
[   13.641128] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs5_5g:16
[   13.641143] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs6_5g:14
[   13.641146] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs7_5g:14
[   13.641150] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs8_5g:13
[   13.641153] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs9_5g:13
[   13.641156] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs10_5g:12
[   13.641159] AICWFDBG(LOGINFO)        rwnx_send_txpwr_lvl_v3_req:lvl_11ax_mcs11_5g:12
[   13.641165] AICWFDBG(LOGTRACE)       rwnx_send_msg (120)MM_SET_TXPWR_IDX_LVL_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.641171] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   13.662906] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   13.662913] AICWFDBG(LOGTRACE)       >>> rwnx_send_txpwr_ofst2x_req()
[   13.662925] AICWFDBG(LOGINFO)        get_userconfig_txpwr_ofst2x_in_fdrv:enable      :0
[   13.662986] AICWFDBG(LOGINFO)        pwrofst2x 2.4g: [0]:11b, [1]:ofdm_highrate, [2]:ofdm_lowrate
[   13.662986]   chan=  1-4     5-9     10-13AICWFDBG(LOGINFO)
[   13.662986]   [0] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.662986]   [1] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.662986]   [2] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.662986] pwrofst2x 5g: [0]:ofdm_lowrate, [1]:ofdm_highrate, [2]:ofdm_midrate
[   13.662986]   chan=  36-50   51-64   98-114  115-130 131-146 147-166AICWFDBG(LOGINFO)
[   13.662986]   [0] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)             0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.662986]   [1] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)             0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.662986]   [2] =AICWFDBG(LOGINFO)         0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)             0AICWFDBG(LOGINFO)              0AICWFDBG(LOGINFO)
[   13.663002] AICWFDBG(LOGINFO)        rwnx_send_txpwr_ofst2x_req:Do not use txpwr_ofst2x
[   13.663005] AICWFDBG(LOGTRACE)       >>> rwnx_msg_free()
[   13.663013] AICWFDBG(LOGTRACE)       >>> rwnx_send_rf_calib_req()
[   13.663022] AICWFDBG(LOGINFO)        get_userconfig_xtal_cap:enable       :0
[   13.663025] AICWFDBG(LOGINFO)        get_userconfig_xtal_cap:xtal_cap     :0
[   13.663028] AICWFDBG(LOGINFO)        get_userconfig_xtal_cap:xtal_cap_fine:0
[   13.663034] AICWFDBG(LOGTRACE)       rwnx_send_msg (106)MM_SET_RF_CALIB_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   13.663040] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.372441] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.372449] AICWFDBG(LOGTRACE)       >>> rwnx_send_get_macaddr_req()
[   14.372465] AICWFDBG(LOGTRACE)       rwnx_send_msg (116)MM_GET_MAC_ADDR_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.372471] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.401019] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.401027] AICWFDBG(LOGINFO)        get macaddr: e8:51:9e:dc:66:c5
[   14.401031] AICWFDBG(LOGTRACE)       >>> rwnx_send_reset()
[   14.401045] AICWFDBG(LOGTRACE)       rwnx_send_msg (1)MM_RESET_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.401051] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.429593] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.429599] AICWFDBG(LOGTRACE)       >>> rwnx_send_version_req()
[   14.429614] AICWFDBG(LOGTRACE)       rwnx_send_msg (5)MM_VERSION_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.429620] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.458161] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.458168] AICWFDBG(LOGTRACE)       >>> rwnx_set_vers()
[   14.458196] AICWFDBG(LOGTRACE)       >>> rwnx_send_me_config_req()
[   14.458214] ieee80211 phy0: HT supp 1, VHT supp 1, HE supp 0
[   14.458220] AICWFDBG(LOGTRACE)       rwnx_send_msg (5121)ME_CONFIG_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.458226] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.486901] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.487672] AICWFDBG(LOGTRACE)       >>> rwnx_send_me_chan_config_req()
[   14.487690] AICWFDBG(LOGTRACE)       rwnx_send_msg (5123)ME_CHAN_CONFIG_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.487697] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.512253] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.513251] AICWFDBG(LOGINFO)        getRegdomainFromRwnxDB set ccode:00
[   14.513276] AICWFDBG(LOGINFO)        rwnx_get_countrycode_channels support channel:1 2 3 4 5 6 7 8 9 10 11 12 13 14 36 40 44 48 52 56 60 64 100 104 108 112 116 120 124 128 132 136 140 144 149 153 157 161 165
[   14.513380] ieee80211 phy0:
[   14.513380] *******************************************************
[   14.513380] ** CAUTION: USING PERMISSIVE CUSTOM REGULATORY RULES **
[   14.513380] *******************************************************
[   14.513384] AICWFDBG(LOGTRACE)       >>> rwnx_send_me_chan_config_req()
[   14.513399] AICWFDBG(LOGTRACE)       rwnx_send_msg (5123)ME_CHAN_CONFIG_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   14.513407] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   14.538659] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   14.538667] AICWFDBG(LOGTRACE)       >>> rwnx_dbgfs_register()
[   14.538932] AICWFDBG(LOGINFO)        fw_log_init: ffffffc07089c000, ffffffc07089e800
[   14.539056] AICWFDBG(LOGINFO)        rwnx_interface_add: wlan%d, 2, 10
[   14.539223] AICWFDBG(LOGINFO)        interface add:e8 51 9e dc 66 c5
[   14.773960] AICWFDBG(LOGINFO)        New interface create wlan0
[   14.775145] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   14.775186] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   14.775203] snddaudio snddaudio0: snd_soc_register_card failed
[   14.782569] get twi_id is fail, -22
[   14.782573] =========script_get_item_err============
[   14.782576] goodix_ts_init: input_ctp_startup err.
[   14.809788] xt_time: kernel timezone is -0000
[   15.077332] AICWFDBG(LOGTRACE)       >>> rwnx_open()
[   15.077336] AICWFDBG(LOGTRACE)       >>> rwnx_send_start()
[   15.077353] AICWFDBG(LOGTRACE)       rwnx_send_msg (3)MM_START_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   15.077363] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   15.101475] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   15.101482] AICWFDBG(LOGTRACE)       >>> rwnx_send_coex_req()
[   15.101496] AICWFDBG(LOGTRACE)       rwnx_send_msg (102)MM_SET_COEX_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   15.101502] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   15.129782] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   15.129790] AICWFDBG(LOGTRACE)       >>> rwnx_send_add_if()
[   15.129805] AICWFDBG(LOGTRACE)       rwnx_send_msg (7)MM_ADD_IF_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[   15.129811] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:ffffff8000a16308
[   15.157785] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:ffffff8000a16308
[   15.157793] AICWFDBG(LOGDEBUG)       rwnx_open sta create vif in rwnx_hw->vif_table[0]
[   15.277916] e2fsck 1.42.12 (29-Aug-2014)
[   15.298329] /dev/by-name/UDISK: recovering journal
[   15.329110] /dev/by-name/UDISK: clean, 11/956592 files, 102135/3819707 blocks
[   15.348726] EXT4-fs (mmcblk0p10): mounted filesystem with ordered data mode. Opts:
[   15.657591] libphy: gmac0: probed
[   15.703310] snddaudio snddaudio0: codec: ac107.1-0036, codec_dai: ac107-pcm0.
[   15.703349] snddaudio snddaudio0: ASoC: CPU DAI (null) not registered
[   15.703366] snddaudio snddaudio0: snd_soc_register_card failed
[   15.703671] sunxi-gmac gmac0 eth0: eth0: Type(7) PHY ID 001cc916 at 0 IRQ poll (gmac0-0:00)
[   15.719908] IPv6: ADDRCONF(NETDEV_UP): eth0: link is not ready
Trying to connect to SWUpdate...



BusyBox v1.27.2 () built-in shell (ash)

 _____  _              __     _
|_   _||_| ___  _ _   |  |   |_| ___  _ _  _ _
  | |   _ |   ||   |  |  |__ | ||   || | ||_'_|
  | |  | || | || _ |  |_____||_||_|_||___||_,_|
  |_|  |_||_|_||_|_|  Tina is Based on OpenWrt!
 ----------------------------------------------
 Tina Linux (Neptune, 5C1C9C53)
 ----------------------------------------------
root@TinaLinux:/#
```
**系统默认会自己登录 没有用户名 没有密码。**
**系统默认会自己登录 没有用户名 没有密码。**
**系统默认会自己登录 没有用户名 没有密码。**