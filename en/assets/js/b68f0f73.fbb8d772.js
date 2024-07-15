"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9575],{85667:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>r});var s=i(85893),c=i(11151);const d={sidebar_position:2},l="MIPI\u5c4f\u9002\u914d",a={id:"D1h-DualDisplay/part6/MIPIScreenAdaptation",title:"MIPI\u5c4f\u9002\u914d",description:"100ASK-D1-H_DualDisplay-DevKit V11",source:"@site/docs/D1h-DualDisplay/part6/01-MIPIScreenAdaptation.md",sourceDirName:"D1h-DualDisplay/part6",slug:"/D1h-DualDisplay/part6/MIPIScreenAdaptation",permalink:"/en/docs/D1h-DualDisplay/part6/MIPIScreenAdaptation",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/D1h-DualDisplay/part6/01-MIPIScreenAdaptation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"d1hdSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/en/docs/D1h-DualDisplay/part6/DevelopmentEnvironmentSetup"},next:{title:"XR829\u82af\u7247\u9002\u914d",permalink:"/en/docs/D1h-DualDisplay/part6/XR829ChipAdaptation"}},t={},r=[{value:"1. \u663e\u793a\u9002\u914d",id:"1-\u663e\u793a\u9002\u914d",level:2},{value:"1.1 \u4fee\u6539\u8bbe\u5907\u6811",id:"11-\u4fee\u6539\u8bbe\u5907\u6811",level:3},{value:"1.1.1 \u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",id:"111-\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",level:4},{value:"1.1.2 \u4fee\u6539uboot\u8bbe\u5907\u6811",id:"112-\u4fee\u6539uboot\u8bbe\u5907\u6811",level:4},{value:"1.2 \u5185\u6838\u914d\u7f6e",id:"12-\u5185\u6838\u914d\u7f6e",level:3},{value:"1.3 uboot\u914d\u7f6e",id:"13-uboot\u914d\u7f6e",level:3},{value:"1.4 \u663e\u793a\u6d4b\u8bd5",id:"14-\u663e\u793a\u6d4b\u8bd5",level:3},{value:"2. \u89e6\u6478\u9002\u914d",id:"2-\u89e6\u6478\u9002\u914d",level:2},{value:"2.1 \u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",id:"21-\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",level:3},{value:"2.2 \u6dfb\u52a0\u89e6\u6478\u9a71\u52a8",id:"22-\u6dfb\u52a0\u89e6\u6478\u9a71\u52a8",level:3},{value:"2.3 \u4fee\u6539\u89e6\u6478\u9a71\u52a8",id:"23-\u4fee\u6539\u89e6\u6478\u9a71\u52a8",level:3},{value:"2.4 \u4fee\u6539lvgl\u9a71\u52a8\u914d\u7f6e\u6587\u4ef6",id:"24-\u4fee\u6539lvgl\u9a71\u52a8\u914d\u7f6e\u6587\u4ef6",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mipi\u5c4f\u9002\u914d",children:"MIPI\u5c4f\u9002\u914d"}),"\n",(0,s.jsx)(n.p,{children:"100ASK-D1-H_DualDisplay-DevKit V11"}),"\n",(0,s.jsx)(n.h2,{id:"1-\u663e\u793a\u9002\u914d",children:"1. \u663e\u793a\u9002\u914d"}),"\n",(0,s.jsx)(n.h3,{id:"11-\u4fee\u6539\u8bbe\u5907\u6811",children:"1.1 \u4fee\u6539\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(n.h4,{id:"111-\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",children:"1.1.1 \u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /home/ubuntu/tina-d1-h/device/config/chips/d1-h/configs/nezha/linux-5.4\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539",(0,s.jsx)(n.code,{children:"board.dts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'&lcd0 {\n        lcd_used            = <1>;\n\n        lcd_driver_name     = "tft08006";\n        lcd_backlight       = <100>;\n        lcd_if              = <4>;\n\n        lcd_x               = <480>;\n        lcd_y               = <800>;\n        lcd_width           = <52>;\n        lcd_height          = <52>;\n        lcd_dclk_freq       = <25>;\n\n        lcd_pwm_used        = <1>;\n        lcd_pwm_ch          = <0>;\n        lcd_pwm_freq        = <1000>;\n        lcd_pwm_pol         = <0>;\n        lcd_pwm_max_limit   = <255>;\n\n        lcd_hbp             = <10>;\n        lcd_ht              = <515>;\n        lcd_hspw            = <5>;\n        lcd_vbp             = <20>;\n        lcd_vt              = <830>;\n        lcd_vspw            = <5>;\n\n        lcd_dsi_if          = <0>;\n        lcd_dsi_lane        = <2>;\n        lcd_lvds_if         = <0>;\n        lcd_lvds_colordepth = <0>;\n        lcd_lvds_mode       = <0>;\n        lcd_frm             = <0>;\n        lcd_hv_clk_phase    = <0>;\n        lcd_hv_sync_polarity= <0>;\n        lcd_gamma_en        = <0>;\n        lcd_bright_curve_en = <0>;\n        lcd_cmap_en         = <0>;\n        lcd_fsync_en        = <0>;\n        lcd_fsync_act_time  = <1000>;\n        lcd_fsync_dis_time  = <1000>;\n        lcd_fsync_pol       = <0>;\n\n        deu_mode            = <0>;\n        lcdgamma4iep        = <22>;\n        smart_color         = <90>;\n\n        lcd_gpio_0 =  <&pio PG 13 GPIO_ACTIVE_HIGH>;\n        pinctrl-0 = <&dsi4lane_pins_a>;\n        pinctrl-1 = <&dsi4lane_pins_b>;\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u539f\u7406\u56fe\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612100907483",src:i(80356).Z+"",width:"1178",height:"985"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u67e5\u770b\u5230\uff0cmipi\u5c4f\u7684pwm\u901a\u9053\u5f15\u811a\u662fPB5\uff0c\u8bbe\u5907\u6811\u4e2d\u641c\u7d22PB5\uff0c\u53d1\u73b0\u6709I2C\u8bbe\u5907\u6811\u8282\u70b9\u5360\u7528\uff0c\u9700\u8981\u628a",(0,s.jsx)(n.code,{children:"status"}),"\u4f4d\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"disabled"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612101517315",src:i(24032).Z+"",width:"634",height:"535"})}),"\n",(0,s.jsxs)(n.p,{children:["lcd0\u8bbe\u5907\u6811\u8282\u70b9\u4e2d\u7684pwm\u901a\u9053\u662fpwm0\uff0c\u5373\u628apwm0\u8bbe\u5907\u6811\u8282\u70b9\u7684\u5f15\u811a\u6539\u4e3a\u76f8\u5e94\u7684",(0,s.jsx)(n.code,{children:"PB5"}),"\u5f15\u811a:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612102006981",src:i(9763).Z+"",width:"670",height:"385"})}),"\n",(0,s.jsx)(n.h4,{id:"112-\u4fee\u6539uboot\u8bbe\u5907\u6811",children:"1.1.2 \u4fee\u6539uboot\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/home/ubuntu/tina-d1-h/device/config/chips/d1-h/configs/nezha\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539",(0,s.jsx)(n.code,{children:"uboot-board.dts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'&lcd0 {\n        lcd_used            = <1>;\n\n        lcd_driver_name     = "tft08006";\n        lcd_backlight       = <100>;\n        lcd_if              = <4>;\n\n        lcd_x               = <480>;\n        lcd_y               = <800>;\n        lcd_width           = <52>;\n        lcd_height          = <52>;\n        lcd_dclk_freq       = <25>;\n\n        lcd_pwm_used        = <1>;\n        lcd_pwm_ch          = <0>;\n        lcd_pwm_freq        = <1000>;\n        lcd_pwm_pol         = <0>;\n        lcd_pwm_max_limit   = <255>;\n\n        lcd_hbp             = <10>;\n        lcd_ht              = <515>;\n        lcd_hspw            = <5>;\n        lcd_vbp             = <20>;\n        lcd_vt              = <830>;\n        lcd_vspw            = <5>;\n\n        lcd_dsi_if          = <0>;\n        lcd_dsi_lane        = <2>;\n        lcd_lvds_if         = <0>;\n        lcd_lvds_colordepth = <0>;\n        lcd_lvds_mode       = <0>;\n        lcd_frm             = <0>;\n        lcd_hv_clk_phase    = <0>;\n        lcd_hv_sync_polarity= <0>;\n\t\tlcd_io_phase        = <0x0000>;\n\t\tlcd_dsi_te\t        = <0>;\n        lcd_gamma_en        = <0>;\n        lcd_bright_curve_en = <0>;\n        lcd_cmap_en         = <0>;\n        lcd_fsync_en        = <0>;\n        lcd_fsync_act_time  = <1000>;\n        lcd_fsync_dis_time  = <1000>;\n        lcd_fsync_pol       = <0>;\n\n        deu_mode            = <0>;\n        lcdgamma4iep        = <22>;\n        smart_color         = <90>;\n\n        lcd_gpio_0 =  <&pio PG 13 GPIO_ACTIVE_HIGH>;\n        pinctrl-0 = <&dsi4lane_pins_a>;\n        pinctrl-1 = <&dsi4lane_pins_b>;\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"12-\u5185\u6838\u914d\u7f6e",children:"1.2 \u5185\u6838\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u5185\u6838\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/tina-d1-h/lichee/linux-5.4/drivers/video/fbdev/sunxi/disp2/disp/lcd\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc",(0,s.jsx)(n.a,{href:"https://forums.100ask.net/t/topic/3153",children:"100ASK_T113-PRO\u5f00\u53d1\u677f\u9002\u914d4\u5bf8MIPI\u5c4f-Tina SDK - Allwinner / T113s3-PRO - \u5d4c\u5165\u5f0f\u5f00\u53d1\u95ee\u7b54\u793e\u533a"}),"\u53ef\u4ee5\u4e0b\u8f7d\u5230\u76f8\u5e94\u7684\u9a71\u52a8\uff0c\u66ff\u6362\u5230TinaSDK\u91cc\u9762\u7684",(0,s.jsx)(n.code,{children:"tft08006.c"}),"\u548c",(0,s.jsx)(n.code,{children:"tft08006.h"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5e76\u4fee\u6539\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612151024793",src:i(73410).Z+"",width:"1029",height:"452"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"ckernel"}),"\uff0c\u8fdb\u5165\u5185\u6838\u914d\u7f6e\u754c\u9762\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"m kernel_menuconfig\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9009\u4e0a\u5c4f\u5e55\u663e\u793a\u9a71\u52a8",(0,s.jsx)(n.code,{children:"TFT08006"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612103812320",src:i(11430).Z+"",width:"2230",height:"1064"})}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u4e0a\u652f\u6301\u663e\u793a\u6846\u67b6\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612104726602",src:i(21843).Z+"",width:"2222",height:"1083"})}),"\n",(0,s.jsx)(n.p,{children:'"DISP Driver Support"\u5173\u4e4e\u663e\u793a\u9a71\u52a8\u6846\u67b6\u7684\u6574\u4f53\u542f\u7528\uff0c\u800c"LCD panels select"\u5219\u4e13\u6ce8\u4e8e\u5728\u8fd9\u4e2a\u6846\u67b6\u4e0b\u9009\u62e9\u548c\u914d\u7f6e\u5177\u4f53\u7684LCD\u9762\u677f\u786c\u4ef6\u3002\u524d\u8005\u662f\u57fa\u7840\u652f\u6301\u5c42\uff0c\u540e\u8005\u662f\u5177\u4f53\u5e94\u7528\u5c42\u3002'}),"\n",(0,s.jsx)(n.h3,{id:"13-uboot\u914d\u7f6e",children:"1.3 uboot\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539uboot\u4e0b\u7684\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/tina-d1-h/lichee/brandy-2.0/u-boot-2018/drivers/video/sunxi/disp2/disp/lcd\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc",(0,s.jsx)(n.a,{href:"https://forums.100ask.net/t/topic/3153",children:"100ASK_T113-PRO\u5f00\u53d1\u677f\u9002\u914d4\u5bf8MIPI\u5c4f-Tina SDK - Allwinner / T113s3-PRO - \u5d4c\u5165\u5f0f\u5f00\u53d1\u95ee\u7b54\u793e\u533a"}),"\u53ef\u4ee5\u4e0b\u8f7d\u5230\u76f8\u5e94\u7684\u9a71\u52a8\uff0c\u66ff\u6362\u5230TinaSDK\u91cc\u9762\u7684",(0,s.jsx)(n.code,{children:"tft08006.c"}),"\u548c",(0,s.jsx)(n.code,{children:"tft08006.h"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5e76\u4fee\u6539\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612151222377",src:i(27838).Z+"",width:"1093",height:"471"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"cboot"}),"\uff0c\u8fdb\u5165uboot\u914d\u7f6e\u754c\u9762\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make menuconfig\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u4e0a\u5c4f\u5e55\u663e\u793a\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612105444757",src:i(57508).Z+"",width:"2224",height:"1072"})}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u4e0a\u652f\u6301\u663e\u793a\u6846\u67b6\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612105619723",src:i(65789).Z+"",width:"2228",height:"1064"})}),"\n",(0,s.jsx)(n.p,{children:"mipi\u5c4f\u5e55\u663e\u793a\u9700\u8981\u5148\u5728uboot\u9636\u6bb5\u521d\u59cb\u5316\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"14-\u663e\u793a\u6d4b\u8bd5",children:"1.4 \u663e\u793a\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u6d4b\u8bd5\u5c4f\u5e55\u663e\u793a\uff0c\u53ef\u4ee5\u9009\u4e0aTinaSDK\u81ea\u5e26\u7684lvgl\u4f8b\u7a0b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"croot"}),"\uff0c\u8fdb\u5165\u914d\u7f6e\u754c\u9762\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make menuconfig\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u4e0alvgl\u4f8b\u7a0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612110411286",src:i(56637).Z+"",width:"2223",height:"1062"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7f16\u8bd1",(0,s.jsx)(n.code,{children:"make"}),"\uff0c\u6253\u5305",(0,s.jsx)(n.code,{children:"pack"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u70e7\u5f55\u5230\u677f\u5b50\u540e\uff0c\u6267\u884c",(0,s.jsx)(n.code,{children:"lv_examples 1"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612160004693",src:i(14767).Z+"",width:"891",height:"516"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u89e6\u6478\u9002\u914d",children:"2. \u89e6\u6478\u9002\u914d"}),"\n",(0,s.jsx)(n.h3,{id:"21-\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811",children:"2.1 \u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u539f\u7406\u56fe\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612165243110",src:i(91121).Z+"",width:"1213",height:"820"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u67e5\u770b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"TP_INT\u2192PB6\uff1bTP_RESET\u2192PB4\uff1bDSI_SCL\u2192PB0\uff1bDSI_SDA\u2192PB1\uff1b"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi /home/ubuntu/tina-d1-h/device/config/chips/d1-h/configs/nezha/linux-5.4/board.dts\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612165938653",src:i(84321).Z+"",width:"594",height:"283"})}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u5230PB0\u3001PB1\u5f15\u811a\u5bf9\u5e94\u7684\u662ftwi2\u8bbe\u5907\u6811\u8282\u70b9\u3002\u6240\u4ee5\u9700\u8981\u5728twi2\u8bbe\u5907\u6811\u8282\u70b9\u4e2d\u6dfb\u52a0\u89e6\u6478\u5c4f\u8bbe\u5907\u6811\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'&twi2 {\n        clock-frequency = <400000>;\n        pinctrl-0 = <&twi2_pins_a>;\n        pinctrl-1 = <&twi2_pins_b>;\n        pinctrl-names = "default", "sleep";\n        dmas = <&dma 45>, <&dma 45>;\n        dma-names = "tx", "rx";\n        status = "okay";\n\n        ctp@38 {\n                compatible = "focaltech,fts";\n                reg = <0x38>;\n                status = "okay";\n                interrupt-parent = <&pio>;\n                interrupts = <PB 6 IRQ_TYPE_LEVEL_LOW>;\n                focaltech,reset-gpio = <&pio PB 4 GPIO_ACTIVE_HIGH>;\n                focaltech,irq-gpio = <&pio PB 6 IRQ_TYPE_LEVEL_LOW>;\n                focaltech,max-touch-number = <5>;\n                focaltech,display-coords = <0 0 480 800>;\n                focaltech,reg_vdd = <0x0000001f>;\n\t\t\t\tfocaltech,reg_avdd = <0x0000001f>;\n        };\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u539f\u6765\u6709\u540c\u6837\u5730\u5740\u4e3a0x38\u7684I2C\u8bbe\u5907\u548c\u89e6\u6478\u8bbe\u5907\u7684\u8282\u70b9\u65f6\uff0c\u53ef\u4ee5\u6ce8\u91ca\u6216\u8005\u5220\u9664\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"22-\u6dfb\u52a0\u89e6\u6478\u9a71\u52a8",children:"2.2 \u6dfb\u52a0\u89e6\u6478\u9a71\u52a8"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Tina_SDK\u81ea\u5e26\u76f8\u5e94\u7684\u89e6\u6478\u9a71\u52a8\uff0c\u53ea\u9700\u4fee\u6539\u5185\u6838\u914d\u7f6e\uff0c\u628a\u9a71\u52a8\u7f16\u8bd1\u8fdb\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"ckernel"}),"\u8fdb\u5165\u5185\u6838\u76ee\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"m kernel_menuconfig"}),"\uff0c\u8fdb\u5165\u5185\u6838\u914d\u7f6e\u754c\u9762\uff0c\u9009\u4e0a",(0,s.jsx)(n.code,{children:"Focaltech Touchscreen "}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612173551080",src:i(29147).Z+"",width:"2227",height:"1061"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"croot"}),"\uff0c\u8fdb\u5165SDK\u6839\u76ee\u5f55\uff0c\u6267\u884c",(0,s.jsx)(n.code,{children:"make menuconfig"}),"\u8fdb\u5165\u914d\u7f6e\u754c\u9762\uff0c\u628a\u89e6\u6478\u9a71\u52a8\u6a21\u5757\u6dfb\u52a0\u8fdb\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612173955162",src:i(10426).Z+"",width:"2226",height:"1060"})}),"\n",(0,s.jsx)(n.h3,{id:"23-\u4fee\u6539\u89e6\u6478\u9a71\u52a8",children:"2.3 \u4fee\u6539\u89e6\u6478\u9a71\u52a8"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u89e6\u6478\u70b9\uff08x,y\uff09\u4e0d\u5bf9\uff0c\u9700\u8981\u4fee\u6539\u9a71\u52a8\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u76ee\u5f55:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tina-d1-h/lichee/linux-5.4/drivers/input/touchscreen/focaltech_touch\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim focaltech_core.c\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e24\u5904\u4fee\u6539\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728",(0,s.jsx)(n.code,{children:"fts_input_dev_report_a"}),"\u51fd\u6570\u4e2d\u4fee\u6539\uff0c\u627e\u5230\u76f8\u5e94\u7684\u4f4d\u7f6e\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#\u539f\u6765\u7684\ninput_report_abs(data->input_dev, ABS_MT_POSITION_X, event->au16_x[i]);\ninput_report_abs(data->input_dev, ABS_MT_POSITION_Y, event->au16_y[i]);\n\n#\u4fee\u6539\u7684\ninput_report_abs(data->input_dev, ABS_MT_POSITION_X, -(event->au16_x[i] - 480));\ninput_report_abs(data->input_dev, ABS_MT_POSITION_Y, -(event->au16_y[i] - 800));\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728",(0,s.jsx)(n.code,{children:"fts_input_dev_report_b"}),"\u51fd\u6570\u4e2d\u4fee\u6539\uff0c\u627e\u5230\u76f8\u5e94\u7684\u4f4d\u7f6e\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#\u539f\u6765\u7684\ninput_report_abs(data->input_dev, ABS_MT_POSITION_X, event->au16_x[i]);\ninput_report_abs(data->input_dev, ABS_MT_POSITION_Y, event->au16_y[i]);\n\n#\u4fee\u6539\u7684\ninput_report_abs(data->input_dev, ABS_MT_POSITION_X, -(event->au16_x[i] - 480));\ninput_report_abs(data->input_dev, ABS_MT_POSITION_Y, -(event->au16_y[i] - 800));\n"})}),"\n",(0,s.jsx)(n.h3,{id:"24-\u4fee\u6539lvgl\u9a71\u52a8\u914d\u7f6e\u6587\u4ef6",children:"2.4 \u4fee\u6539lvgl\u9a71\u52a8\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5728lvgl\u7684\u4f8b\u7a0b\u4e0a\u6d4b\u8bd5\u89e6\u6478\u529f\u80fd\uff0c\u9700\u8981\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /home/ubuntu/tina-d1-h/package/gui/littlevgl-8/lv_examples/src\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim lv_drv_conf.h\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240612180115093",src:i(1398).Z+"",width:"1977",height:"742"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4e4b\u524d\u914d\u7f6e\u8fc7lvgl\u4f8b\u7a0b\uff0c\u9700\u8981\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /home/ubuntu/tina-d1-h/out/d1-h-nezha/compile_dir/target\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664",(0,s.jsx)(n.code,{children:"lv_examples"}),"\uff0c\u518d\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\u70e7\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u4e0a\u6267\u884c",(0,s.jsx)(n.code,{children:"lv_examples 0"}),"\uff0c\u6d4b\u8bd5\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240613115843250",src:i(5878).Z+"",width:"1016",height:"602"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},80356:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-1-5dfb952995fe4e58c221becb78d5c787.png"},27838:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-10-2f5b17a22179dcff26730270081f99cd.png"},14767:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-11-89589ffad716ae631e3e63d4b500987e.png"},91121:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-12-73ae3a5ca4a71c4f4eee5e4d57e1e118.png"},84321:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-13-b06138f07240f0cc432b08d056343c95.png"},29147:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-14-fc573aa9a076a73040d658517f58fcad.png"},10426:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-15-34742ebedd62366f89ae05c415637a6f.png"},1398:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-16-c3e96748f6c06b9c0a95fd9af61db644.png"},5878:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-17-81bc9525f4aae1741836d23158638b06.png"},24032:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-2-cd221b5bae9c7659db444123d02db9b9.png"},9763:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-3-7849e748e61e0254d018cc8625281e48.png"},11430:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-4-279a7d73427b9e8a53a3e76f2d824045.png"},21843:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-5-6be131d6bb06bc91c1e8ec7b60299a31.png"},57508:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-6-8dd2741ee3b8d4ee3017c2aa43e62060.png"},65789:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-7-0c31dfb066f393ccbde1deed9fa14176.png"},56637:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-8-7abbf1f3e4667d6826fd6850e0e8dc12.png"},73410:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-9-a200d281249a0488add0d2e8e852750a.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(67294);const c={},d=s.createContext(c);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);