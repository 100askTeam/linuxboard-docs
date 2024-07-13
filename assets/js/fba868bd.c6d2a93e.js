"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6801],{43251:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=i(85893),t=i(11151);const a={sidebar_position:2},r="Linux 4.9 \u5185\u6838\u9a71\u52a8\u79fb\u690d",c={id:"TinyVision/part9/Linux4.9KernelDriverPorting",title:"Linux 4.9 \u5185\u6838\u9a71\u52a8\u79fb\u690d",description:"Linux 4.9 BSP \u5185\u6838\u9a71\u52a8",source:"@site/docs/TinyVision/part9/2-Linux4.9KernelDriverPorting.md",sourceDirName:"TinyVision/part9",slug:"/TinyVision/part9/Linux4.9KernelDriverPorting",permalink:"/docs/TinyVision/part9/Linux4.9KernelDriverPorting",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part9/2-Linux4.9KernelDriverPorting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"v851seSidebar",previous:{title:"WIFI\u9a71\u52a8\u5f00\u53d1",permalink:"/docs/category/wifi\u9a71\u52a8\u5f00\u53d1"},next:{title:"Linux 5.15 \u5185\u6838\u9a71\u52a8\u79fb\u690d",permalink:"/docs/TinyVision/part9/Linux5.15KernelDriverPorting"}},d={},l=[{value:"Linux 4.9 BSP \u5185\u6838\u9a71\u52a8",id:"linux-49-bsp-\u5185\u6838\u9a71\u52a8",level:3},{value:"Linux 4.9 BSP \u5185\u6838\u8bbe\u5907\u6811",id:"linux-49-bsp-\u5185\u6838\u8bbe\u5907\u6811",level:3},{value:"Tina SDK \u79fb\u690d",id:"tina-sdk-\u79fb\u690d",level:3},{value:"WIFI \u56fa\u4ef6\u79fb\u690d",id:"wifi-\u56fa\u4ef6\u79fb\u690d",level:4},{value:"\u914d\u7f6e\u81ea\u52a8\u88c5\u8f7d\u6a21\u5757",id:"\u914d\u7f6e\u81ea\u52a8\u88c5\u8f7d\u6a21\u5757",level:4},{value:"\u914d\u7f6e\u7f51\u7edc\u8fdb\u7a0b",id:"\u914d\u7f6e\u7f51\u7edc\u8fdb\u7a0b",level:4},{value:"\u914d\u7f6e WIFI \u56fa\u4ef6",id:"\u914d\u7f6e-wifi-\u56fa\u4ef6",level:4},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3}];function o(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"linux-49-\u5185\u6838\u9a71\u52a8\u79fb\u690d",children:"Linux 4.9 \u5185\u6838\u9a71\u52a8\u79fb\u690d"}),"\n",(0,s.jsx)(n.h3,{id:"linux-49-bsp-\u5185\u6838\u9a71\u52a8",children:"Linux 4.9 BSP \u5185\u6838\u9a71\u52a8"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f7d\u9a71\u52a8\u540e\u83b7\u5f97\u9a71\u52a8\u7684 ",(0,s.jsx)(n.code,{children:"tar.gz"})," \u538b\u7f29\u5305"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115145222134",src:i(72400).Z+"",width:"173",height:"33"})}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u538b\u540e\u627e\u5230\u5982\u4e0b\u9a71\u52a8\u4e0e\u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115145406939",src:i(77780).Z+"",width:"245",height:"166"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fdb\u5165\u5185\u6838\uff0c\u627e\u5230 ",(0,s.jsx)(n.code,{children:"linux-4.9/drivers/net/wireless"})," \u6587\u4ef6\u5939\u4e2d\uff0c\u65b0\u5efa\u6587\u4ef6\u5939",(0,s.jsx)(n.code,{children:"aic8800"})," \u5e76\u4e14\u628a\u4e0a\u9762\u7684\u9a71\u52a8\u4e0e\u6587\u4ef6\u5939\u653e\u5165\u521a\u521a\u521b\u5efa\u597d\u7684 ",(0,s.jsx)(n.code,{children:"aic8800"})," \u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115145530599",src:i(11774).Z+"",width:"348",height:"326"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"linux-4.9/drivers/net/wireless/Kconfig"})," \uff0c\u589e\u52a0\u4e00\u884c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'source "drivers/net/wireless/aic8800/Kconfig"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115145601334",src:i(23659).Z+"",width:"607",height:"180"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"linux-4.9/drivers/net/wireless/Makefile"})," \uff0c\u589e\u52a0\u4e00\u884c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"obj-$(CONFIG_AIC_WLAN_SUPPORT) += aic8800/\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115145650592",src:i(35736).Z+"",width:"482",height:"117"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165\u5185\u6838\u914d\u7f6e\u9875\uff0c\u627e\u5230\u5e76\u52fe\u9009\u5982\u4e0b\u9009\u9879\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Device Drivers  ---\x3e\n\t[*] Network device support  ---\x3e\n\t\t[*]   Wireless LAN  ---\x3e\n\t\t\t[*]   AIC wireless Support\n\t\t\t\t  Enable Chip Interface (SDIO interface support)  ---\x3e\n\t\t\t<M>   AIC8800 wlan Support\n\t\t\t<M>   AIC8800 bluetooth Support (UART)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115150856511",src:i(28907).Z+"",width:"647",height:"150"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u540e\u53ef\u4ee5\u627e\u5230\u5bf9\u5e94\u7684\u9a71\u52a8\u7a0b\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115150831849",src:i(95635).Z+"",width:"418",height:"146"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u52a0\u8f7d\u987a\u5e8f\u662f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"insmod aic8800_bsp.ko\ninsmod aic8800_fdrv.ko\ninsmod aic8800_btlpm.ko\n"})}),"\n",(0,s.jsx)(n.h3,{id:"linux-49-bsp-\u5185\u6838\u8bbe\u5907\u6811",children:"Linux 4.9 BSP \u5185\u6838\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u5907\u6811\u914d\u7f6e\u5982\u4e0b\uff0c\u53c2\u8003\u7535\u8def\u539f\u7406\u56fe\uff0cREG_ON \u4e3a PE6\uff0cHOSTWAKE \u4e3a PE7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dts",children:'wlan: wlan@0 {\n\tcompatible    = "allwinner,sunxi-wlan";\n\tpinctrl-names = "default";\n\tclock-names   = "32k-fanout0";\n\tclocks        = <&clk_fanout0>;\n\twlan_busnum   = <0x1>;\n\twlan_regon    = <&pio PE 6 1 0x1 0x2 0>;\n\twlan_hostwake = <&pio PE 7 14 0x1 0x2 0>;\n\tchip_en;\n\tpower_en;\n\tstatus        = "okay";\n\twakeup-source;\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115151211548",src:i(50633).Z+"",width:"671",height:"327"})}),"\n",(0,s.jsx)(n.h3,{id:"tina-sdk-\u79fb\u690d",children:"Tina SDK \u79fb\u690d"}),"\n",(0,s.jsx)(n.p,{children:"Tina SDK \u57fa\u4e8eOpenWrt \u63d0\u4f9b\u4e86\u4e00\u4e9b\u81ea\u52a8\u5316\u65b9\u6848\uff0c\u53ef\u4ee5\u53c2\u8003 OpenWrt \u7684\u65b9\u6cd5\u6765\u79fb\u690d\u8fd9\u4e9b\u9a71\u52a8\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"wifi-\u56fa\u4ef6\u79fb\u690d",children:"WIFI \u56fa\u4ef6\u79fb\u690d"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5f97\u5230 ",(0,s.jsx)(n.code,{children:"aic8800-firmware.tar.gz"})," \u8fd9\u91cc\u9762\u5305\u542b\u7740 WIFI \u4f7f\u7528\u7684\u56fa\u4ef6"]}),"\n",(0,s.jsx)(n.p,{children:"!> \u6ce8\u610f\uff0c\u5982\u679c\u60a8\u7684WIFI\u6a21\u5757\u662f AIC8800D80 \u8bf7\u4e0b\u8f7d AIC8800D80 \u7684\u56fa\u4ef6\uff082024\u5e744\u6708\u540e WIFI \u6a21\u5757\u5747\u5347\u7ea7\u4e3a AIC8800D80 \u6a21\u5757\uff09"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115151604351",src:i(26652).Z+"",width:"190",height:"23"})}),"\n",(0,s.jsxs)(n.p,{children:["\u89e3\u538b\u540e\u62f7\u8d1d\u5230 ",(0,s.jsx)(n.code,{children:"openwrt/openwrt/package/firmware/linux-firmware/aic8800"})," \u5373\u53ef\uff08Tina 5.0\u5df2\u7ecf\u5185\u7f6e\uff0c\u5ba2\u670d\u7ed9\u76844.0\u624d\u9700\u8981\u8fd9\u6837\uff09"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115151709361",src:i(62764).Z+"",width:"368",height:"500"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u627e\u5230 ",(0,s.jsx)(n.code,{children:"target/allwinner/v851se-common/modules.mk"})," \u6587\u4ef6\uff0c\u5728\u672b\u5c3e\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-makefile",children:"define KernelPackage/net-aic8800\n  SUBMENU:=$(WIRELESS_MENU)\n  TITLE:=aic8800 support (staging)\n  DEPENDS:=+@IPV6 +@USES_AICSEMI\n  KCONFIG:=\\\n    CONFIG_AIC8800_BTLPM_SUPPORT=m \\\n    CONFIG_AIC8800_WLAN_SUPPORT=m \\\n    CONFIG_AIC_WLAN_SUPPORT=m \\\n    CONFIG_PM=y \\\n    CONFIG_RFKILL=y \\\n    CONFIG_RFKILL_PM=y \\\n    CONFIG_RFKILL_GPIO=y\n\n  FILES+=$(LINUX_DIR)/drivers/net/wireless/aic8800/aic8800_bsp/aic8800_bsp.ko\n  FILES+=$(LINUX_DIR)/drivers/net/wireless/aic8800/aic8800_btlpm/aic8800_btlpm.ko\n  FILES+=$(LINUX_DIR)/drivers/net/wireless/aic8800/aic8800_fdrv/aic8800_fdrv.ko\n  AUTOLOAD:=$(call AutoProbe,aic8800_bsp aic8800_btlpm aic8800_fdrv)\nendef\n\ndefine KernelPackage/net-aic8800/description\n Kernel modules for aic8800 support\nendef\n\n$(eval $(call KernelPackage,net-aic8800))\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u5185\u5bb9\u53ef\u4ee5\u4f7f Tina \u81ea\u52a8\u53bb\u5185\u6838\u6587\u4ef6\u5939\u5c06 ko \u6253\u5305\u8fdb\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115151917530",src:i(57076).Z+"",width:"842",height:"500"})}),"\n",(0,s.jsx)(n.h4,{id:"\u914d\u7f6e\u81ea\u52a8\u88c5\u8f7d\u6a21\u5757",children:"\u914d\u7f6e\u81ea\u52a8\u88c5\u8f7d\u6a21\u5757"}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539\u6587\u4ef6\uff1a",(0,s.jsx)(n.code,{children:"target/allwinner/v851se-tinyvision/busybox-init-base-files/etc/init.d/rc.modules"})," \u589e\u52a0\u5982\u4e0b\u5185\u5bb9\uff0c\u6bcf\u6b21\u5f00\u673a\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u88c5\u8f7d\u6a21\u5757"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#!/bin/sh\ninsmod /lib/modules/4.9.191/aic8800_bsp.ko\ninsmod /lib/modules/4.9.191/aic8800_fdrv.ko\ninsmod /lib/modules/4.9.191/aic8800_btlpm.ko\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u914d\u7f6e\u7f51\u7edc\u8fdb\u7a0b",children:"\u914d\u7f6e\u7f51\u7edc\u8fdb\u7a0b"}),"\n",(0,s.jsxs)(n.p,{children:["\u65b0\u5efa\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"target/allwinner/v851se-tinyvision/busybox-init-base-files/etc/init.d/S50wifidaemon"})," \u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff0c\u6bcf\u6b21\u5f00\u673a\u88c5\u8f7d\u6a21\u5757\u540e\u4fbf\u521d\u59cb\u5316WIFI\u548c\u914d\u7f6eWIFI\u6a21\u5f0f"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'#!/bin/sh\n#\n# Start wifi_daemon....\n#\n\nstart() {\n      printf "Starting wifi_daemon....: "\n\t  wifi_daemon\n\t  sleep 2\n\t  wifi -o sta\n}\n\nstop() {\n\tprintf "Stopping wifi_daemon: "\n}\n\ncase "$1" in\n    start)\n\tstart\n\t;;\n    stop)\n\tstop\n\t;;\n    restart|reload)\n\tstop\n\tstart\n\t;;\n  *)\n\techo "Usage: $0 {start|stop|restart}"\n\texit 1\nesac\n\nexit $?\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u914d\u7f6e-wifi-\u56fa\u4ef6",children:"\u914d\u7f6e WIFI \u56fa\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165 Tina \u914d\u7f6e\u9875\u9762\uff0c\u6253\u5f00\u5982\u4e0b\u529f\u80fd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Allwinner  ---\x3e\n\tWireless  ---\x3e\n\t\t<*> wifimanager-v2.0................................... Tina wifimanager-v2.0\n\t\t-*- wirelesscommon............................. Allwinner Wi-Fi/BT Public lib\n\nFirmware  ---\x3e \n\t<*> aic8800-firmware.................................... AIC aic8800 firmware\n\nKernel modules  ---\x3e\n\tWireless Drivers  ---\x3e\n\t\t<*> kmod-net-aic8800............................... aic8800 support (staging)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u7535\u542f\u52a8\uff0c\u53ef\u4ee5\u770b\u5230 LOG \u6b63\u5e38\u6302\u8f7d WIFI"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115152521341",src:i(39159).Z+"",width:"1065",height:"543"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u6b63\u5e38\u521d\u59cb\u5316\u8fdb\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240115152554437",src:i(93535).Z+"",width:"759",height:"248"})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},72400:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAAhCAYAAACr3SvgAAAFXUlEQVR4nO2cT2gTWRzHP7O4ePHcDbIVV6YHRXrpHIIRCsEKccvSzWGhgVyykB720GLppYiLRQJLiTTgHhywIIUEeoga1IALAcFKD8klSIXtrASzSNaLFy+yh9lDZpJJMv/SaJu47wNDMvm9/PJ7r9/5vd97k1TSdV3HgQ8fPvD27VvevXvHx48fnZoBcPz4ccbGxjh58iQnTpxwbSsQDILkJlqBYBj56qgDEAj6RYhWMHIcM5+o1aMMQyDwzzHrydQ3RxWGQOCfY95N2igB/23LjX5DEQj84SnaykPJcqbjZ69BkrzbCAQHxVW0lYcSly79xZkz7wFYWGi+bhWlrveeCwSfE8fdg8pDiampJO/f/0alolKpqB12qzh1fUCx1jIkAiFytQF8HBWlBZTZDHUn+yj3bUhx3fKamkp2HG5I0iFk2VqGREBCMY5UyaeNIqmWrVtAbjbBMOJjn7ZiOdpYS4KBBXt6kc3GDvOn3RoVSQWXkLM65YZOOZskH1tgx9OmkZu9gra2b9jOkw76sX0ifPVtEDRys90X6ZfNgW4u2JUDknQYC7Ak02HjaXiOKC95U/Ow1R7zRznJz0nZsK2wrKg8K3nYBEPLgUTbLVBTxJ7Z1mkKr2VIBKwZzjplSyRUDYgQX3vJXVVrNik9IB+/ZmQwF9vrParxOUIt3zKnzoKmae42RzpjU2LWWt/Mekab2Qz1Vt+atoTa9l1XQ5Z62K7PDj47YpkgXYZ8zGJzLJXcfNn1L0RObdfsdTXU7rd5rBRdxurzMFCm7a8k0Mj9DjcadlO4lSKpgGXKbuhsmpkQqF6faIllcmKi4512trr20jEiN5s9zdgwy5CGTibe2yofe8B0Q6f8aJHx1qsy81eTVAuPDaFoPC+8IHp1kXGKpAI3+W7X9LvPTGGiY8q39xlhtbHPsgLRrGnzHmd7X3b9uweF9kU5ntxp9bucTYKywf31SJ9jODh9i9bMsm6HPTLz64tgXq0x1b5Z6QF5ZYMbFqECUMvw63VYbv1hnyBfN/6wLrZx+bxjX9xstgs0I7Z4uN0qFOldoEazdyzZ20J4jmh5m+eWsmU6bPjlBemg+XnN7GnN+I4+e/AeZ0dfPf1rXmg91DIkYpDpEf3h0NcdMb2swhTNNVn3I1ChQjC4ye7f//a+uZYhEVyCtX3KDdk43/P92fWn21Tj19hsLWgiTMfhrqZR15xtyMCrP6kTMQZY480rkCPGReFok1lt6Kxag3jtO1wHIkzHr3D3qcZFtmHtXls8ygb3bUXgVqrYMOA4e1MkFdxmZnfH50X06fHOtBXLo4tgPXm9R9WSQetPt7H9jk54jmh5ia3W1Fgkp2qMX/6Jya2bli2pIs+2QJZlVxvhFZax+Cutk8bIJm42X7Fp5G45zBgOhH7ZgMI6WwWYuWwuALv9ws6Kyy6G296v33G28+XZv+ZuC9nPuRvijfsdMfOGglW4do9+CK+wfGuCHwNLAEzGk0zaNoywurtBIiihAJAk07gDLLKZ3UMJSqSNltGszmoYD5vM/O1uf2ZGc7M5xJZNosQk8gBcYHktCYU+xuH098ywRPrsE8qWmaGzz0b8vhzKXPzhAumYRF7Z4P4jv+NsR3ccnf3bWWmWLbT6D8SfUD7kurb1ywW12vstr+C3Xx/IqW15IBhNSgsot845lC5Hg2umFeL7v6GRm13n1CNzoVYkFVOZXNsfGsFCnwsxwZeOzPztcyQCEovGK5Nr+x1bjsOAa3kgEAwj4jdigpFDiFYwcnTUtJV/jioMgcA/4p91CEYOUR4IRg4hWsHIIUQrGDmEaAUjhxCtYOQQohWMHP8BcQngqYr+VbUAAAAASUVORK5CYII="},77780:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,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"},11774:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115145530599-4fdfbbb98c62cccb3f9b96fd7c31193f.png"},23659:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115145601334-d1c96c78b0162f07777055c5217b8618.png"},35736:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115145650592-3d42a57e99054c5690ff6d18f30ab9fd.png"},95635:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115150831849-11c3034dd5b52dda6a0bf33677db82c3.png"},28907:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115150856511-e07dd8a93b4722d8f4e0cfbf0cbec6bd.png"},50633:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115151211548-ffa29319c70ae6325d482a389be117ee.png"},26652:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAXCAYAAAC1Z/W7AAAFiUlEQVR4nO2aT2jbVhzHPxobu+42H+aSDbnQUnyJDiYpFEIT8BpClkMgBjPwwD5skFCTSygZDcEwgkMM2aGCBkaGDTm4aWgraMFQmEsO9iWEBGatM/EY3qmX3XbQDpJsxZZlK3a9pdUHhC3/nt6f3/u+n35PsqBpmkYH/vy7k8XD43LzoZPx59NhdcPDY7g4Cv+Tj2H002F1xcNjeDgKvxckX+9lS/V+W/PwGAwXEn75sWA50+i8S2giCN3LeHgMC9fCLz8WuH37N7744g0AiYT+u1XYmtZ+7uHxf+IDN4XLjwVGR+O8efMD5bJMuSyfs1sFrml9Cr6aIeYbJ1fto46hoZKbFpB8Ain5MvX7/cWV8AFGR+PnDicEYQjRvpoh5tNFJ/kEUoUebSikGrZWoTrZ2qnJX5O+9oxSXWNlamAj83iLuBa+TtlyNLGmN32LfmSRnXqRhRGnQgqp0BJiVqNU1yhl4+QjCYpdbSq56S9R1yqG7QbpUC82e84qrwgGAi76fRnQ72Lng8W7wwWF345daiMIw9jUxrk1YXydmGWOY86qXWzVp7woxfkmLhq2ZZKSzMtCF5vHO8PAhN8qcnMhdI36ndKRaoaYzxppremHQExWgTDRtWMeyqpepLBPPnrPiLYOttcnHEVnGW/ULXLlGqiq6myzobgssLgLR6sBJF+C4rl+m1HT6Pt0hhoKKd84uUJz3KkCUEi0jE2v2/xujr/hn0LCqM/Bh7btd/KlFYWUL0C6BPmI0Ec7rXVa0ke52f+aPN6os3EsK7b+HhQDj/ju0huV3I9wv26XjlhRSPks6UddY8eMyJiiE5AicjPlcLDV1OOOPXKy2TG+oZGJQnCtQqn+wLJgmuQj+9yqa5SeLOIH4BXpTWPc2bguLmVWH9vhFqxuUASuBMY4qlT0Sgr7qNJYYwEWFZngzB38PfjwfPsKKd86nx8a5esVJg8CLSlNmJV6haQEc1nzOrftWNHnDzPtrP8EB80HI/54sTGvpWwcpC0ebYRdzYNbBiJ8M9o7HfaILGwsgrniI7J9scI+eWmL+xaxA1DN8P0qJBuT+Axx1ZhEB5tfvNFxLE42t5tek7ls64IYI7ltiGNiljnGSH5rTPTIVUQjJfNPzRPc3acIFJVjJrfvIR48pYbK2ekYk1MivfjwXPuFffK8Ih0yx6FH9k53tCYu27FizF/UTDsRWbhr82CkmiEWgUzbwhk8fb+51UoyjKLvc1s/gTJlQqEdDv/4p/3iaoZYaAnWKpTqonF+0nPbted7HEXvsdPYSIa5FYWHqkpN7WxDBE5/pUbYcLDK2SmIYWNhdbSJrNQ1Vnp3T3+M3GFS2uOsqvD76TzRkQCwzi8FeME890e4mA+lLR65FVefc9UdhVRoj8nDov3iGTAXi/hly6eD6Lvy+oQjSySvPd/jyK7cxCxzpSV2G7djhZysGhFx3RJ5FV7ugiiKjjYmlkliqa+wQRojIjnZho7IzRl48d06+WtX8Zvnm3swc0cXbq8+NGnzJRSXjZTF6d2J23asdbW1qZLbtN4x9CdpZIf3NMz9m1vzpZVV/HafvTCxTHIzwFe+JQCC0ThB24JhVg63iIUEJADiZOoPgEV2sidIIYG0UXIuq7EyQRebyMJ2a31mBHSyDR//1DysLjF3N2w532Ny2/LUqScfmrT60vBLWzmRmzNjpCMCeWmLR0/ctuPU5hjJtTgc6Nbisp5uERHIm5dEn1F6i3m+4PR/fPmo/d+Zoc8+ulBDtqmOx/tLIYG0ed19yjUgXEd8T8Ae7lHJTW9w5Ym5+VVIRWSCa5X/7E7a9+bWw6M7Igvb14n5BBaNX4JrlXOPpIeN61THw+NdYGAvsDw8LhOe8D3eS7rm+OW/htEND4/h8i8dIhzgPwiezAAAAABJRU5ErkJggg=="},62764:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115151709361-1092f9cb4375ceb7104781c636ed8066.png"},57076:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115151917530-fb9c19dfcd568bb23d70fd4a4a7eed96.png"},39159:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115152521341-84c39a18fb0840b8dcd3e18876142eb7.png"},93535:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240115152554437-02e67bd55b51636e2c71c9381a59b028.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);