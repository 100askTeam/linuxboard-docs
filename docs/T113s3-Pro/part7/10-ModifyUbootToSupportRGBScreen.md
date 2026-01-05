---
sidebar_position: 10
---
# 修改uboot支持RGB屏幕

### 1. 修改uboot设备树

   在Tina-SDK目录下，进入到` device/config/chips/t113/configs/100ask`目录，找到`uboot-board.dts`文件，这个文件就是 uboot使用的 设备树配置文件,我们需要在这个设备树内增加对应的 7寸 RGB显示屏 设备树节点。

```shell
ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask$ ls -la uboot-board.dts
-rwxrwxr-x 1 ubuntu ubuntu 11096 Mar 31 04:32 uboot-board.dts
```

节点信息如下，可以通过 vim gedit nano等工具进行编辑增加。

注意： 要删除掉原来的 `&lcd0 `配置。

```bash
&lcd0 {
        /* part 1 */
        lcd_used            = <1>;
        lcd_driver_name     = "default_lcd";
        lcd_backlight       = <100>;
        /* part 2 */
        lcd_if = <0>;
        lcd_hv_if = <0>;
        /* part 3 */
        lcd_x               = <1024>;
        lcd_y               = <600>;
        lcd_width           = <154>;
        lcd_height          = <85>;
        lcd_dclk_freq       = <51>;
        lcd_hbp             = <140>;
        lcd_ht              = <1344>;
        lcd_hspw            = <20>;
        lcd_vbp             = <20>;
        lcd_vt              = <635>;
        lcd_vspw            = <3>;
        lcd_pwm_used        = <1>;
        lcd_pwm_ch          = <7>;
        lcd_pwm_freq        = <500>;
        lcd_pwm_pol         = <1>;
        /* part 5 */
        lcd_frm = <1>;
        lcd_io_phase = <0x0000>;
        lcd_gamma_en = <0>;
        lcd_cmap_en = <0>;
        lcd_hv_clk_phase = <0>;
        lcd_hv_sync_polarity= <0>;
        /* part 6 */
        lcd_power = "vcc-lcd";
        lcd_pin_power = "vcc-pd";
        pinctrl-0 = <&rgb18_pins_a>;
        pinctrl-1 = <&rgb18_pins_b>;
};

```

添加成功后类似下图所示，之后保存退出。

![image-20230331184514308](images\image-20230331184514308.png)

继续返回到 Tina-SDK 源码根目录，我们修改 uboot配置来增加 对应的 驱动模块 支持。

### 2. 修改uboot配置

前面我们已经介绍uboot源码在 Tina-SDK 目录 `lichee/brandy-2.0/u-boot-2018`目录内，进入目录后，使用 vim nano gedit等命令，编辑 `configs/sun8iw20p1_uart3_defconfig`配置文件，在最底部增加 如下配置项，配置成功后保存退出。

``` bash
CONFIG_CMD_SUNXI_BMP=y
CONFIG_LZMA=y
CONFIG_DISP2_SUNXI=y
CONFIG_HDMI2_DISP2_SUNXI=y
CONFIG_AW_PHY=y
CONFIG_BOOT_GUI=y
```

之后返回到Tina-SDK 目录，先执行 `mboot `命令，可以看到重新编译uboot 源码。

![image-20230331185335366](images\image-20230331185335366.png)

等待单独编译 Bootloader部分完成后，再次执行 `make `命令进行完整编译，最后通过 `pack`命令进行打包。 将最终生成的镜像烧写至开发板内即可成功支持 显示屏驱动。

注意： 这一步只是在uboot增加了 显示屏的驱动节点支持，但是因为uboot并未去操作显示屏进行图像显示，所以启动时只能看到背光有亮。

在接下来一步，我们将在uboot下增加一个 开机 logo 作为演示。