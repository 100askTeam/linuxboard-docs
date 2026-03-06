---
sidebar_position: 1
---
# WiFi联网

本章节来讲解如何在 T113s3ProV1.3 **(wifi6增强版)** 开发板上通过WiFi模块进行联网。

## 准备工作

**硬件：**
- T113s3 开发板（WiFi6增强版）
- usb typeC线 x2
- ipex 2.4G/5G天线 x1

**软件：**
- 全志线刷工具：[AllwinnertechPhoeniSuit.zip](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnertechPhoeniSuit.zip)
- 全志USB烧录驱动：[AllwinnerUSBFlashDeviceDriver.zip](https://dl.100ask.net/Hardware/MPU/T113i-Industrial/Tools/AllwinnerUSBFlashDeviceDriver.zip)
- 镜像：[T113s3-WiFi6-DefaultSysterm.7z](https://dl.100ask.net/Hardware/MPU/100ask_t113-pro/Images/T113s3-WiFi6-DefaultSysterm.7z)

> 镜像说明：支持T113s3-pro WiFi6增强版除摄像头外的板载功能；
> 
> 对应MD5值：06fad98039980b2bda9b817ea8efabad

## 连接开发板

如果不清楚如何连接开发板，并登录串口终端，请参考 快速启动中《启动开发板》章节。

### 安装天线

连接开发板后，在执行联网操作前，需要先安装一根天线，否则有可能会扫不到WiFi设备。

## 装载WiFi驱动模块

进入串口终端，在开发板 `/lib/modules/5.4.61` 路径下，可以看到开发板的WiFi驱动模块，

~~~bash
root@TinaLinux:/# cd /lib/modules/5.4.61/
root@TinaLinux:/lib/modules/5.4.61# ls
aic8800_bsp.ko    aic8800_fdrv.ko   sunxi_gpadc.ko
aic8800_btlpm.ko  gt9xxnew_ts.ko    usb-storage.ko
~~~

在当前目录下，**严格按照以下顺序来装载wifi驱动模块**，

~~~bash
insmod aic8800_bsp.ko
insmod aic8800_fdrv.ko
~~~

依次执行后，会出现以下打印信息：

~~~bash
root@TinaLinux:/lib/modules/5.4.61# insmod aic8800_bsp.ko
[ 1806.962880] aicbsp_init
[ 1806.965639] RELEASE_DATE:2023_0904_1726
root@TinaLinux:/lib/modules/5.4.61# insmod aic8800_fdrv.ko
[ 1843.145204] AICWFDBG(LOGTRACE)       >>> rwnx_mod_init()
[ 1843.150641] AICWFDBG(LOGINFO)        rwnx v6.4.3.0 - - 241c091M (master)
...
...
...
[ 1844.878491] AICWFDBG(LOGINFO)        rwnx_plat_nvram_set_value_v3:command=lvl_11ax_mcs9_5g 
[ 1847.702259] ieee80211 phy0:
[ 1847.702259] *******************************************************
[ 1847.702259] ** CAUTION: USING PERMISSIVE CUSTOM REGULATORY RULES **
[ 1847.702259] *******************************************************
[ 1847.726556] AICWFDBG(LOGTRACE)       >>> rwnx_send_me_chan_config_req()
[ 1847.733421] AICWFDBG(LOGTRACE)       rwnx_send_msg (5123)ME_CHAN_CONFIG_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[ 1847.744958] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:05b1dbfd
[ 1847.753089] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:05b1dbfd
[ 1847.760263] AICWFDBG(LOGTRACE)       >>> rwnx_dbgfs_register()
[ 1847.766327] AICWFDBG(LOGINFO)        fw_log_init: c582c000, c582e800
[ 1847.772871] AICWFDBG(LOGINFO)        rwnx_interface_add: wlan%d, 2, 10
[ 1847.779754] AICWFDBG(LOGINFO)        interface add:e8 51 9e dc 9d c5
[ 1848.196093] AICWFDBG(LOGINFO)        New interface create wlan0
root@TinaLinux:/lib/modules/5.4.61#
~~~

出现以上信息，表示WiFi驱动模块加载成功。执行 `ifconfig -a` 指令，可以看到存在 wlan0 节点，

~~~bash
root@TinaLinux:/lib/modules/5.4.61# ifconfig -a
eth0      Link encap:Ethernet  HWaddr 9E:45:48:98:1E:1A
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:38

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

wlan0     Link encap:Ethernet  HWaddr E8:51:9E:DC:7E:FB
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

root@TinaLinux:/lib/modules/5.4.61#

~~~



## 连接WiFi网络

### 打开wlan0节点

出现 `wlan0` 节点后，执行 `ifconfig wlan0 up` 指令，打开节点，

~~~bash
# ifconfig wlan0 up
[  879.333784] AICWFDBG(LOGTRACE)       >>> rwnx_open()
[  879.338782] AICWFDBG(LOGTRACE)       >>> rwnx_send_start()
[  879.344447] AICWFDBG(LOGTRACE)       rwnx_send_msg (3)MM_START_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[  879.355119] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:b0772898
[  879.363699] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:b0772898
[  879.370865] AICWFDBG(LOGTRACE)       >>> rwnx_send_coex_req()
[  879.376730] AICWFDBG(LOGTRACE)       rwnx_send_msg (102)MM_SET_COEX_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[  879.387884] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:b0772898
[  879.395941] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:b0772898
[  879.403108] AICWFDBG(LOGTRACE)       >>> rwnx_send_add_if()
[  879.408778] AICWFDBG(LOGTRACE)       rwnx_send_msg (7)MM_ADD_IF_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0
[  879.419541] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:b0772898
[  879.427502] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:b0772898
[  879.434667] AICWFDBG(LOGDEBUG)       rwnx_open sta create vif in rwnx_hw->vif_table[0]
#
~~~

### 扫描附近WiFi

接着，执行以下指令，扫描附近WiFi：

~~~bash
iw dev wlan0 scan | grep SSID
~~~

如果不出现报错，会出现附近WiFi节点信息：

~~~bash
SSID: GW
SSID: DIRECT-71-HP Smart Tank 750
SSID: Programmers
SSID: ChinaNet-kRAH
SSID: Redmi_83D1
SSID: pobo
SSID: cx1519
SSID: Guest_An
SSID: WiFi
SSID: ChinaNet-ec7h
SSID: ChinaNet-sqJr
SSID: ChinaNet-Zivk
SSID: HUAWEI-1619
SSID: MERCURY_62A2
SSID: ChinaNet-ccXn
SSID: Programmers7
~~~

这里扫到了本章节需要连接的无线网络 Programmers，说明WiFi模块正常。

### 添加无线网络配置信息

连接无线网络之前，我们需要在配置文件中添加相应的无线网络名以及对应的密码。执行以下指令。

~~~bash
vi /etc/wifi/wpa_supplicant.conf
~~~

添加如下内容：

~~~bash
ctrl_interface=/etc/wifi/sockets
disable_scan_offload=1
update_config=1
wowlan_triggers=any

network={
        ssid="Programmers" 
        psk="100askxxxx"
}

~~~

需要注意，配置文件信息不要填错。

> ssid：无线网络名；psk：对应无线网络的密码

### 验证网络连接

填写配置文件之后，接下来可以执行连接无线网络操作。指令如下：

~~~bash
wpa_supplicant -B -c /etc/wifi/wpa_supplicant.conf -i wlan0
~~~

执行之后，会打印一长串信息。

最后，执行以下指令，测试是否能连接外网。

~~~bash
root@TinaLinux:/lib/modules/5.4.61# udhcpc -i wlan0
udhcpc: started, v1.27.2
udhcpc: sending discover
[  862.756558] AICWFDBG(LOGTRACE)       >>> rwnx_rx_me_tx_credits_update_ind()
udhcpc: sending select for 192.168.1.62
[  863.307453] AICWFDBG(LOGINFO)        reord_init_sta:e8:51:9e:dc:7e:fb
[  863.314058] AICWFDBG(LOGINFO)        paired=fac04, should=fac04
[  863.320026] AICWFDBG(LOGTRACE)       >>> rwnx_send_arpoffload_en_req()
[  863.326773] AICWFDBG(LOGTRACE)       rwnx_send_msg (98)MM_SET_ARPOFFLOAD_CFM reqcfm:1 in_irq:0 in_softirq:512 in_atomic:1
[  863.338591] AICWFDBG(LOGTRACE)       rwnx_cmd_malloc get cmd_array[0]:6fdb3402
[  863.346329] AICWFDBG(LOGTRACE)       >>> cmd_mgr_task_process()
[  863.352679] AICWFDBG(LOGTRACE)       rwnx_cmd_free cmd_array[0]:6fdb3402
udhcpc: lease of 192.168.1.62 obtained, lease time 172800
udhcpc: ifconfig wlan0 192.168.1.62 netmask 255.255.255.0 broadcast +
udhcpc: setting default routers: 192.168.1.1

root@TinaLinux:/lib/modules/5.4.61#
root@TinaLinux:/lib/modules/5.4.61# ping www.baidu.com
PING www.baidu.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: seq=0 ttl=53 time=11.368 ms
64 bytes from 183.2.172.185: seq=1 ttl=53 time=11.880 ms
64 bytes from 183.2.172.185: seq=2 ttl=53 time=14.844 ms
64 bytes from 183.2.172.185: seq=3 ttl=53 time=11.096 ms
64 bytes from 183.2.172.185: seq=4 ttl=53 time=48.975 ms
64 bytes from 183.2.172.185: seq=5 ttl=53 time=67.863 ms
64 bytes from 183.2.172.185: seq=6 ttl=53 time=25.851 ms
~~~

能ping通，表示可以连接外网。