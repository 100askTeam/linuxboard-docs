---
sidebar_position: 2
sidebar_label: "测试配置HDMI输出流程"
---
# 测试配置HDMI输出流程

> 评测作者：GzMark · 本篇为社区评测文章，来自开发者实测，未经官方逐字校对。

根据我的步骤，这里先测试下hdmi硬件，先看下输出是否正常。
1. 先配置设备树
  * 查看/home/allwinner/Desktop/tina-d1-h/lichee/linux-5.4/arch/riscv/boot/dts/sunxi/sun20iw1p1.dtsi，如下将status设置为"okay"，开启disp
  ```
  	disp: disp@5000000 {
			compatible = "allwinner,sunxi-disp";
			reg = <0x0 0x05000000 0x0 0x3fffff>,	/* de0 */
			      <0x0 0x05460000 0x0 0xfff>,	/*display_if_top*/
			      <0x0 0x05461000 0x0 0xfff>,	/* tcon-lcd0 */
			      <0x0 0x05470000 0x0 0xfff>,	/* tcon-tv */
			      <0x0 0x05450000 0x0 0x1fff>;	/* dsi0*/
/*			interrupts = <GIC_SPI 90 IRQ_TYPE_LEVEL_HIGH>,tcon-lcd0
				     <GIC_SPI 91 IRQ_TYPE_LEVEL_HIGH>,tcon-tv
				     <GIC_SPI 92 IRQ_TYPE_LEVEL_HIGH>;dsi*/
			interrupts-extended = <&plic0 106 IRQ_TYPE_LEVEL_HIGH>,
					      <&plic0 107 IRQ_TYPE_LEVEL_HIGH>,
					      <&plic0 108 IRQ_TYPE_LEVEL_HIGH>;

			clocks = <&ccu CLK_DE0>,
				 <&ccu CLK_DE0>,
				 <&ccu CLK_BUS_DE0>,
				 <&ccu CLK_BUS_DE0>,
				 <&ccu CLK_BUS_DPSS_TOP0>,
				 <&ccu CLK_BUS_DPSS_TOP0>,
				 <&ccu CLK_MIPI_DSI>,
				 <&ccu CLK_BUS_MIPI_DSI>,
				 <&ccu CLK_TCON_LCD0>,
				 <&ccu CLK_TCON_TV>,
				 <&ccu CLK_BUS_TCON_LCD0>,
				 <&ccu CLK_BUS_TCON_TV>,
				 <&ccu CLK_MIPI_DSI>,
				 <&ccu CLK_BUS_MIPI_DSI>;
			clock-names = "clk_de0",
					"clk_de1",
					"clk_bus_de0",
					"clk_bus_de1",
					"clk_bus_dpss_top0",
					"clk_bus_dpss_top1",
					"clk_mipi_dsi0",
					"clk_bus_mipi_dsi0",
					"clk_tcon0",
					"clk_tcon1",/*tcon-tv actually*/
					"clk_bus_tcon0",
					"clk_bus_tcon1",/*tcon-tv actually*/
					"clk_mipi_dsi0",
					"clk_bus_mipi_dsi0";
			resets = <&ccu RST_BUS_DE0>,
				 <&ccu RST_BUS_DE0>,
				 <&ccu RST_BUS_DPSS_TOP0>,
				 <&ccu RST_BUS_DPSS_TOP0>,
				 <&ccu RST_BUS_MIPI_DSI>,
				 <&ccu RST_BUS_TCON_LCD0>,
				 <&ccu RST_BUS_TCON_TV>,
				 <&ccu RST_BUS_LVDS0>;
			reset-names = "rst_bus_de0",
					"rst_bus_de1",
					"rst_bus_dpss_top0",
					"rst_bus_dpss_top1",
					"rst_bus_mipi_dsi0",
					"rst_bus_tcon0",
					"rst_bus_tcon1",
					"rst_bus_lvds0";

			assigned-clocks = <&ccu CLK_DE0>,
			<&ccu CLK_MIPI_DSI>,
			<&ccu CLK_TCON_LCD0>,
			<&ccu CLK_TCON_TV>;
			assigned-clock-parents = <&ccu CLK_PLL_PERIPH0_2X>,
			<&ccu CLK_PLL_PERIPH0>,
			<&ccu CLK_PLL_VIDEO0_4X>,
			<&ccu CLK_PLL_VIDEO1_4X>;
			assigned-clock-rates = <300000000>,
			<150000000>,
			<0>,
			<0>;

			boot_disp = <0>;
			boot_disp1 = <0>;
			boot_disp2 = <0>;
			fb_base = <0>;
			iommus = <&mmu_aw 2 0>;
			status = "okay";
		};
```
  将hdmi的status设置为"okay"，如下：
```

    hdmi: hdmi@5500000 {
        compatible = "allwinner,sunxi-hdmi";
        reg = <0x0 0x05500000 0x0 0xfffff>;
        interrupts-extended = <&plic0 93 IRQ_TYPE_LEVEL_HIGH>;
        clocks = <&ccu CLK_BUS_HDMI>,
            <&ccu CLK_HDMI_24M>,
            <&ccu CLK_HDMI_CEC>,
            <&ccu CLK_TCON_TV>;
        clock-names = "clk_bus_hdmi",
                "clk_ddc",
                "clk_cec",
                "clk_tcon_tv";
        resets = <&ccu RST_BUS_HDMI_SUB>,
            <&ccu RST_BUS_HDMI_MAIN>;
        reset-names = "rst_bus_sub",
                    "rst_bus_main";
        assigned-clocks = <&ccu CLK_HDMI_CEC>;
        assigned-clock-parents = <&ccu CLK_HDMI_CEC_32K>;
        assigned-clock-rates = <0>;
        status = "okay";
    };
```
* 查看板级dts，路径：/home/allwinner/Desktop/tina-d1-h/device/config/chips/d1-h/configs/nezha/board.dts

根据需要将HDMI设置如下：
```
&hdmi {
	hdmi_used = <1>;
	hdmi_power_cnt = <0>;
	hdmi_cts_compatibility = <1>;
	hdmi_hdcp_enable = <1>;
	hdmi_hdcp22_enable = <0>;
	hdmi_cec_support = <1>;
	hdmi_cec_super_standby = <0>;

	ddc_en_io_ctrl = <0>;
	power_io_ctrl = <0>;
};
```
一些主要参数说明:

|参数|说明|
-|-
hdmi_cec_super_standby|开启此功能可以使系统休眠时， cec 不休眠，接收端可以通过 cec唤醒发送端；
hdmi_hdcp_enable|当需要开启 hdcp 时，必须置 1 该参数；
hdmi_hdcp22_enable|置 0 时，只开启 hdcp1.4 功能，置 1 时，开启 hdcp2.2 的功能；
ddc_en_io_ctrl|控制是否使用 ddc contrl io 功能（即下面的 ddc_io_ctrl 引脚配置），由硬件平台决定。
ddc_control_io |在 hdmi 插入时输出 1，在 hdmi 拔出时输出 0，可以使 ddc 的光电特性更加符合 CTS 测试的要求。
2. 修改config文件，
*  执行make menuconfig
```
 .config - Tina Configuration
 > Kernel modules > Video Support ────────────────────────────────────────────────────────────────────────────────────────────────
  ┌────────────────────────────────────────────────────── Video Support ───────────────────────────────────────────────────────┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty submenus ----).  Highlighted letters are hotkeys.  │  
  │  Pressing <Y> includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to exit, <?> for Help, </> for Search.   │  
  │  Legend: [*] built-in  [ ] excluded  <M> module  < > module capable                                                        │  
  │                                                                                                                            │  
  │ ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │  
  │ │                         < > kmod-backlight-pwm................................. PWM Backlight support                  │ │  
  │ │                         < > kmod-fb.............................................. Framebuffer support                  │ │  
  │ │                         < > kmod-fb-cfb-copyarea.............. Framebuffer software copy area support                  │ │  
  │ │                         < > kmod-fb-cfb-fillrect...... Framebuffer software rectangle filling support                  │ │  
  │ │                         < > kmod-fb-cfb-imgblt............... Framebuffer software image blit support                  │ │  
  │ │                         < > kmod-fb-sys-fops.................... Framebuffer software sys ops support                  │ │  
  │ │                         < > kmod-fbcon................................... Framebuffer Console support                  │ │  
  │ │                         < > kmod-ge8300-km-opencl............................... GE8300 Device Driver                  │ │  
  │ │                         -*- kmod-sunxi-disp....................................... sunxi-disp support                  │ │  
  │ │                         <*> kmod-sunxi-g2d......................................... sunxi-g2d support                  │ │  
  │ │                         <*> kmod-sunxi-hdmi....................................... sunxi-hdmi support                  │ │  
  │ │                         <*> kmod-sunxi-uvc......................................... sunxi-uvc support                  │ │  
  │ │                         < > kmod-sunxi-vin......................................... sunxi-vin support                  │ │  
  │ │                         < > kmod-video-core...................................... Video4Linux support  
  ```
  保存退出
* 执行make kernel_menuconfig,选中如下
```
 .config - Linux/riscv 5.4.61 Kernel Configuration
 > Device Drivers > Graphics support > Frame buffer Devices > Video support for sunxi ────────────────────────────────────────────
  ┌───────────────────────────────────────────────── Video support for sunxi ──────────────────────────────────────────────────┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty submenus ----).  Highlighted letters are hotkeys.  │  
  │  Pressing <Y> includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to exit, <?> for Help, </> for Search.   │  
  │  Legend: [*] built-in  [ ] excluded  <M> module  < > module capable                                                        │  
  │                                                                                                                            │  
  │ ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │  
  │ │                         [ ] Framebuffer Console Support(sunxi)                                                         │ │  
  │ │                         <*> DISP Driver Support(sunxi-disp2)                                                           │ │  
  │ │                             DISP2 Framebuffer rotation support (Disable rotation)  --->                                │ │  
  │ │                         [*] Framebuffer show bootlogo from lzma file                                                   │ │  
  │ │                         < > HDMI Driver Support(sunxi-disp2)                                                           │ │  
  │ │                         <*> HDMI2.0 Driver Support(sunxi-disp2)  ----                                                  │ │  
  │ │                             HDMI2.0 PHY SELECT. (Allwinner PHY)  --->                                                  │ │  
  │ │                         < > HDMI EP952 Driver Support(sunxi-disp2)                                                     │ │  
  │ │                         [ ] HDMI2.0 HDCP  ----                                                                         │ │  
  │ │                         [*] HDMI2.0 CEC  --->                                                                          │ │  
  │ │                         [ ] new frequency spread spectrum(hershey) of sunxi                                            │ │  
  │ │                         < > TV Driver Support(sunxi-disp2)                                                             │ │  
  │ │                         < > VDPO Driver Support(sunxi-disp2)                                                           │ │  
  │ │                         < > EDP Driver Support(sunxi-disp2)                                                            │ │  
  │ │                         [ ] boot colorbar Support for disp driver(sunxi-disp2)                                         │ │  
  │ │                         [*] debugfs support for disp driver(sunxi-disp2)                                               │ │  
  │ │                         [ ] composer support for disp driver(sunxi-disp2)                                              │ │  
  │ │                         [ ] ESD detect support for LCD panel                                                           │ │  
  │ │                         < > Framebuffer implementaion without display hardware of AW                                   │ │  
  │ │                         [ ] Enable LCD_FB FB_DEFERRED_IO                                                               │ │  
  │ │                             LCD panels select  --->                                                                    │ │  
  │ │                             Display engine feature select  --->                                                        │ │  
  │ │                                                                                                                        │ │  
  │ │                                                                                                                        │ │  
  │ │                                                                                                                        │ │  
  ```
  保存退出
  make，然后pack打包，最后烧录完成，这时，按照默认sdk的配置，hdmi这里应该还是黑的
  用串口终端（我这里用的是MobaXterm，很全的一款终端调试工具）打开板子的调试串口，波特率呢选1152000,
  等待日志停下来，然后在终端回车，进入root的shell下
```
root@TinaLinux:/#
```
这时可以查看模块状态
```
root@TinaLinux:/#  cat /sys/class/disp/disp/attr/sys
screen 0:
de_rate 300000000 hz, ref_fps:58
mgr0: 480x800 fmt[rgb] cs[0x204] range[full] eotf[0x4] bits[8bits] err[0] force_sync[0] unblank direct_show[false] iommu[1]
dmabuf: cache[0] cache max[0] umap skip[0] umap skip max[34]
        lcd output      backlight(100)  fps:59.1         480x 800
        err:1   skip:191        irq:2871        vsync:0 vsync_skip:0
   BUF    enable ch[1] lyr[0] z[16] prem[N] a[pixel 255] fmt[  0] fb[ 480, 800; 480, 800; 480, 800] crop[   0,   0, 480, 800] frame[   0,   0, 480, 800] addr[ffc00000,       0,       0] flags[0x       0] trd[0,0]
depth[ 0] r
```
可以看到当前默认是lcd输出，前面开启了debugfs，那尝试用命令切换到HDMI输出看看能不能行
```
cd /sys/kernel/debug/dispdbg切换到dspdbg目录
目录下有以下参数
command  dbglvl   info     name     param    start
```
根据文档描述呢，参数定义如下
|参数|描述|
-|-
name|disp0/1/2 //表示显示通道0/1/2
command|switch切换显示通道，blank关闭显示
param|type mode,其中type 0(none),1(lcd),2(tv),4(hdmi),8(vga)；mode对应disp_tv_mode
start|1 执行命令
从disp_tv_mode参数看，测试屏幕是1080P，对应mode值为DISP_TV_MOD_1080P_60HZ = 0xa,也就是10，那么命令就是
```
echo disp0 > name;echo switch > command; echo 4 10 > param;echo 1 > start
```
回车，此时输出如下：
```
[  799.576040] disp 0, type 4, mode10

[  799.580705] lcd_close_flow
[  799.583929] lcd_bl_close
[  799.587063] lcd_panel_exit
[  799.752110] lcd_power_off
[  799.932136] [HDMI receive params]: tv mode: 0xa format:0x1 data bits:0x0 eotf:0x4 cs:0x101 dvi_hdmi:2 range:2 scan:0 aspect_ratio:8
[  799.945491] [HDMI2 error]: sink do not support this mode:16
[  800.962142] disp_al_manager_apply ouput_type:0
[  800.967271] disp_al_hdmi_cfg
[  801.081913] HDMI Audio Enable Successfully
[  801.086640] [DISP] disp_device_attached_and_enable,line:233:
[  801.086647] attached ok, mgr0<-->dev0
[  801.097246] [DISP] disp_device_attached_and_enable,line:236:
[  801.097256] type:4,mode:10,fmt:yuv444,bits:8bits,eotf:4,cs:257 dvi_hdmi:2, range:2 scan:0 ratio:8
```
说明执行成功，可以用上面查看模块的命令看一下，执行cat /sys/class/disp/disp/attr/sys
这是输出：
```
screen 0:
de_rate 300000000 hz, ref_fps:60
mgr0: 1920x1080 fmt[yuv444] cs[0x101] range[limit] eotf[0x4] bits[8bits] err[0] force_sync[0] unblank direct_show[false] iommu[1]
dmabuf: cache[0] cache max[0] umap skip[0] umap skip max[34]
        hdmi output mode(10)    fps:60.6        1920x1080
        err:1   skip:193        irq:47406       vsync:0 vsync_skip:0
   BUF    enable ch[1] lyr[0] z[16] prem[N] a[pixel 255] fmt[  0] fb[ 480, 800; 480, 800; 480, 800] crop[   0,   0, 480, 800] frame[   0,   0, 480, 800] addr[ffc00000,       0,       0] flags[0x       0] trd[0,0]
depth[ 0] 

```
但是切换成功，依然黑屏，因为没有内容，还好有colorbar测试,执行如下命令
```
echo 1 > /sys/class/disp/disp/attr/colorbar 
```
此时能看到屏幕上的色条，说明HDMI输出正常，不过有个问题，能不能默认输出HDMI呢？这个肯定可以的，要不咋用呢

3. 设置HDMI为默认输出屏
这里回到前面修改设备树那里，默认输出由设备树配置
路径/home/allwinner/Desktop/tina-d1-h/device/config/chips/d1-h/configs/nezha/board.dts，修改disp部分，下面是原来的
```
&disp {
	disp_init_enable         = <1>;
	disp_mode                = <0>;

	screen0_output_type      = <1>;
	screen0_output_mode      = <4>;

	screen1_output_type      = <3>;
	screen1_output_mode      = <10>;

	screen1_output_format    = <0>;
	screen1_output_bits      = <0>;
	screen1_output_eotf      = <4>;
	screen1_output_cs        = <257>;
	screen1_output_dvi_hdmi  = <2>;
	screen1_output_range     = <2>;
	screen1_output_scan      = <0>;
	screen1_output_aspect_ratio = <8>;

	dev0_output_type         = <1>;
	dev0_output_mode         = <4>;
	dev0_screen_id           = <0>;
	dev0_do_hpd              = <0>;

	dev1_output_type         = <4>;
	dev1_output_mode         = <10>;
	dev1_screen_id           = <1>;
	dev1_do_hpd              = <1>;

	def_output_dev           = <0>;
	hdmi_mode_check          = <1>;

	fb0_format               = <0>;
	fb0_width                = <0>;
	fb0_height               = <0>;

	fb1_format               = <0>;
	fb1_width                = <0>;
	fb1_height               = <0>;
	chn_cfg_mode             = <1>;

	disp_para_zone           = <1>;
	/*VCC-LCD*/
/*	dc1sw-supply = <&reg_dc1sw>;*/
	/*VCC-DSI*/
/*	eldo3-supply = <&reg_eldo3>;*/
	/*VCC-PD*/
/*	dcdc1-supply = <&reg_dcdc1>;*/
};
```
说明在disp上面，也贴出来
|参数|描述|
-|-
disp_mode             |(0:screen0&lt;screen0,fb0>)
screenx_output_type   |(0:none; 1:lcd; 2:tv; 3:hdmi;5:vdpo)
screenx_output_mode   |(used for hdmi output, 0:480i 1:576i 2:480p 3:576p 4:720p50,5:720p60 6:1080i50 7:1080i60 8:1080p24 9:1080p50 10:1080p60)
screenx_output_format |(for hdmi, 0:RGB 1:yuv444 2:yuv422 3:yuv420)
screenx_output_bits   |(for hdmi, 0:8bit 1:10bit 2:12bit 2:16bit)
screenx_output_eotf   |(for hdmi, 0:reserve 4:SDR 16:HDR10 18:HLG)
screenx_output_cs     |(for hdmi, 0:undefined  257:BT709 260:BT601  263:BT2020)
screenx_output_dvi_hdmi |(for hdmi, 0:undefined 1:dvi mode 2:hdmi mode)
screen0_output_range   |(for hdmi, 0:default 1:full 2:limited)
screen0_output_scan    |(for hdmi, 0:no data 1:overscan 2:underscan)
screen0_output_aspect_ratio  |(for hdmi, 8-same as original picture 9-4:3 10-16:9 11-14:9)
fbx format            |(4:RGB655 5:RGB565 6:RGB556 7:ARGB1555 8:RGBA5551 9:RGB888 10:ARGB8888 12:ARGB4444)
fbx pixel sequence    |(0:ARGB 1:BGRA 2:ABGR 3:RGBA)
fb0_scaler_mode_enable|(scaler mode enable, used FE)
fbx_width,fbx_height  |(framebuffer horizontal/vertical pixels, fix to output resolution while equal 0)
lcdx_backlight        |(lcd init backlight,the range:[0,256],default:197
lcdx_yy               |(lcd init screen bright/contrast/saturation/hue, value:0~100, default:50/50/57/50)
lcd0_contrast         |(LCD contrast, 0~100)
lcd0_saturation       |(LCD saturation, 0~100)
lcd0_hue              |(LCD hue, 0~100)
framebuffer software rotation setting:|
disp_rotation_used   |(0:disable; 1:enable,you must set fbX_width to lcd_y,set fbX_height to lcd_x)
degreeX              |(X:screen index; 0:0 degree; 1:90 degree; 3:270 degree)
degreeX_Y             |(X:screen index; Y:layer index 0~15; 0:0 degree; 1:90 degree; 3:270 degree)
devX_output_type  |config output type in bootGUI framework in UBOOT-2018. (0:none; 1:lcd; 2:tv; 4:hdmi;)
devX_output_mode  |config output resolution(see include/video/sunxi_display2.h) of bootGUI framework in UBOOT-2018
devX_screen_id    |config display index of bootGUI framework in UBOOT-2018
devX_do_hpd       |whether do hpd detectation or not in UBOOT-2018
chn_cfg_mode      |Hardware DE channel allocation config. 0:single display with 6 channel, 1:dual display with 4 channel in main display and 2 channel in second display, 2:dual display with 3 channel in main display and 3 channel in second in display.
根据上面，修改如下
```
&disp {
	disp_init_enable         = <1>;
	disp_mode                = <0>;

	screen1_output_type      = <1>;
	screen1_output_mode      = <4>;

	screen0_output_type      = <3>;
	screen0_output_mode      = <10>;

	screen0_output_format    = <0>;
	screen0_output_bits      = <0>;
	screen0_output_eotf      = <4>;
	screen0_output_cs        = <257>;
	screen0_output_dvi_hdmi  = <2>;
	screen0_output_range     = <2>;
	screen0_output_scan      = <0>;
	screen0_output_aspect_ratio = <8>;
/*
;	dev1_output_type         = <1>;
;	dev1_output_mode         = <4>;
;	dev1_screen_id           = <1>;
;	dev1_do_hpd              = <0>;
*/
	dev0_output_type         = <4>;
	dev0_output_mode         = <10>;
	dev0_screen_id           = <0>;
	dev0_do_hpd              = <1>;

	def_output_dev           = <0>;
	hdmi_mode_check          = <1>;

	fb0_format               = <0>;
	fb0_width                = <0>;
	fb0_height               = <0>;

	fb1_format               = <0>;
	fb1_width                = <0>;
	fb1_height               = <0>;
	chn_cfg_mode             = <1>;

	disp_para_zone           = <1>;
	/*VCC-LCD*/
/*	dc1sw-supply = <&reg_dc1sw>;*/
	/*VCC-DSI*/
/*	eldo3-supply = <&reg_eldo3>;*/
	/*VCC-PD*/
/*	dcdc1-supply = <&reg_dcdc1>;*/
};
```
然后对于uboot-board.dts里disp同样的修改（路径：/home/allwinner/Desktop/tina-d1-h/device/config/chips/d1-h/configs/nezha/uboot-board.dts）
经过上面配置，已经可以开机显示在hdmi上了，但是开机部分会有花屏，得设置boot时，加载logo，前面make kernel_menuconfig，我已经选中了[*] Framebuffer show bootlogo from lzma file，但是不会开机加载，需要额外设置下，如下
执行make kernel_menuconfig，将下面bootlogo选中
```
 .config - Linux/riscv 5.4.61 Kernel Configuration
 > Device Drivers > Graphics support ─────────────────────────────────────────────────────────────────────────────────────────────
  ┌───────────────────────────────────────────────────── Graphics support ─────────────────────────────────────────────────────┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty submenus ----).  Highlighted letters are hotkeys.  │  
  │  Pressing <Y> includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to exit, <?> for Help, </> for Search.   │  
  │  Legend: [*] built-in  [ ] excluded  <M> module  < > module capable                                                        │  
  │                                                                                                                            │  
  │ ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │  
  │ │                         [ ] Direct Rendering Manager (XFree86 4.1.0 and higher DRI support)  ----                      │ │  
  │ │                         [ ] Enable DisplayPort CEC-Tunneling-over-AUX HDMI support                                     │ │  
  │ │                             ARM devices  ----                                                                          │ │  
  │ │                             ACP (Audio CoProcessor) Configuration  ----                                                │ │  
  │ │                             Frame buffer Devices  --->                                                                 │ │  
  │ │                             Backlight & LCD device support  --->                                                       │ │  
  │ │                             Console display driver support  --->                                                       │ │  
  │ │                         [*] Bootup logo  --->                                                                          │ │  
  │ │                                                                                                                        │ │  
  │ │                                                                                  
```
此时已经可以开机加载logo了，但是默认的logo图片是竖屏的哪吒，我的hdmi是横屏，显示依然花屏，所以得替换掉，logo路径在/home/allwinner/Desktop/tina-d1-h/device/config/chips/d1-h/configs/nezha/configs/bootlogo.bmp，替换一个bmp就行
最后make，pack，将生成的img文件烧录，应该就ok了
