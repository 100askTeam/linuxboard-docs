"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9330],{21987:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>a,toc:()=>t});var s=i(85893),d=i(11151);const c={},r="\u652f\u6301WiFi\u4e0e4G\u6a21\u7ec4\u8054\u7f51",a={id:"T113s3-SdNand/part5/WiFiAnd4G",title:"\u652f\u6301WiFi\u4e0e4G\u6a21\u7ec4\u8054\u7f51",description:"\u80cc\u666f",source:"@site/docs/T113s3-SdNand/part5/03-WiFiAnd4G.md",sourceDirName:"T113s3-SdNand/part5",slug:"/T113s3-SdNand/part5/WiFiAnd4G",permalink:"/docs/T113s3-SdNand/part5/WiFiAnd4G",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-SdNand/part5/03-WiFiAnd4G.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"t113s3sdnandSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883\u642d\u5efa\u4e0e\u70e7\u5f55",permalink:"/docs/T113s3-SdNand/part5/SettingEnvironment"},next:{title:"\u652f\u6301\u7f51\u7edc\u900f\u4f20",permalink:"/docs/T113s3-SdNand/part5/SupportNetworkTrans"}},l={},t=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"WiFi\u6a21\u7ec4\u9002\u914d",id:"wifi\u6a21\u7ec4\u9002\u914d",level:2},{value:"WiFi\u6a21\u7ec4\u4ecb\u7ecd",id:"wifi\u6a21\u7ec4\u4ecb\u7ecd",level:3},{value:"\u6a21\u7ec4\u79fb\u690d\u9002\u914d",id:"\u6a21\u7ec4\u79fb\u690d\u9002\u914d",level:3},{value:"\u6253\u5f00\u9a71\u52a8\u7f16\u8bd1\u652f\u6301",id:"\u6253\u5f00\u9a71\u52a8\u7f16\u8bd1\u652f\u6301",level:4},{value:"\u6a21\u7ec4\u6d4b\u8bd5",id:"\u6a21\u7ec4\u6d4b\u8bd5",level:4},{value:"Wi-Fi \u6a21\u7ec4\u7684\u4f7f\u7528",id:"wi-fi-\u6a21\u7ec4\u7684\u4f7f\u7528",level:3},{value:"Wi-Fi \u5de5\u4f5c\u7684\u51e0\u79cd\u6a21\u5f0f",id:"wi-fi-\u5de5\u4f5c\u7684\u51e0\u79cd\u6a21\u5f0f",level:4},{value:"STA\u6a21\u5f0f",id:"sta\u6a21\u5f0f",level:4},{value:"AP\u6a21\u5f0f",id:"ap\u6a21\u5f0f",level:4},{value:"1. \u5b89\u88c5\u5fc5\u8981\u7684\u8f6f\u4ef6",id:"1-\u5b89\u88c5\u5fc5\u8981\u7684\u8f6f\u4ef6",level:5},{value:"2. \u914d\u7f6e Hostapd",id:"2-\u914d\u7f6e-hostapd",level:5},{value:"3. \u914d\u7f6e DHCP/DNS \u670d\u52a1",id:"3-\u914d\u7f6e-dhcpdns-\u670d\u52a1",level:5},{value:"4. \u542f\u7528\u7f51\u7edc\u8f6c\u53d1",id:"4-\u542f\u7528\u7f51\u7edc\u8f6c\u53d1",level:5},{value:"5. \u6d4b\u8bd5\u8fde\u63a5",id:"5-\u6d4b\u8bd5\u8fde\u63a5",level:5},{value:"4G\u6a21\u7ec4\u9002\u914d",id:"4g\u6a21\u7ec4\u9002\u914d",level:2},{value:"4G\u6a21\u7ec4\u4ecb\u7ecd",id:"4g\u6a21\u7ec4\u4ecb\u7ecd",level:3},{value:"\u652f\u63014G\u6a21\u7ec4\u8054\u7f51",id:"\u652f\u63014g\u6a21\u7ec4\u8054\u7f51",level:3},{value:"1. kernel\u914d\u7f6e",id:"1-kernel\u914d\u7f6e",level:4},{value:"2. buildroot\u914d\u7f6e",id:"2-buildroot\u914d\u7f6e",level:4},{value:"3. \u7cfb\u7edf\u5185\u914d\u7f6e",id:"3-\u7cfb\u7edf\u5185\u914d\u7f6e",level:4},{value:"3.1. \u65b0\u5efagprs-connect-chat\u6587\u4ef6",id:"31-\u65b0\u5efagprs-connect-chat\u6587\u4ef6",level:5},{value:"3.2. \u65b0\u5efagprsdial\u811a\u672c",id:"32-\u65b0\u5efagprsdial\u811a\u672c",level:5},{value:"3.3. \u6267\u884cpppd\u62e8\u53f7\u6d4b\u8bd5",id:"33-\u6267\u884cpppd\u62e8\u53f7\u6d4b\u8bd5",level:5},{value:"3.4. \u4e0d\u540c\u8fd0\u8425\u5546APN\u548c\u62e8\u53f7\u914d\u7f6e",id:"34-\u4e0d\u540c\u8fd0\u8425\u5546apn\u548c\u62e8\u53f7\u914d\u7f6e",level:5},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u652f\u6301wifi\u4e0e4g\u6a21\u7ec4\u8054\u7f51",children:"\u652f\u6301WiFi\u4e0e4G\u6a21\u7ec4\u8054\u7f51"}),"\n",(0,s.jsx)(e.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u57fa\u4e8e4G\u6a21\u7ec4/WiFi\u7f51\u7edc\u7684\u76ee\u6807\uff0c\u9700\u8981\u9996\u5148\u5728T113s3Pro-V1.3-SdNand \u5de5\u4e1a\u5957\u4ef6\u4e0a\u628a4G\u6a21\u7ec4\u8054\u7f51\uff0c\u548cWiFi\u529f\u80fd\u652f\u6301\u8d77\u6765\uff0c\u7136\u540e\u518d\u53bb\u5b9e\u73b0\u5176\u4ed6\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"wifi\u6a21\u7ec4\u9002\u914d",children:"WiFi\u6a21\u7ec4\u9002\u914d"}),"\n",(0,s.jsx)(e.h3,{id:"wifi\u6a21\u7ec4\u4ecb\u7ecd",children:"WiFi\u6a21\u7ec4\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"T113s3Pro-V1.3-SdNand \u5de5\u4e1a\u5957\u4ef6\uff0c\u677f\u8f7d\u7684AIC8800\u662f\u5177\u6709\u53cc\u9891WiFi6\u548cBT\u4e8c\u5408\u4e00\u6a21\u5757\uff0c\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u6a21\u7ec4\u79fb\u690d\u9002\u914d",children:"\u6a21\u7ec4\u79fb\u690d\u9002\u914d"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u767e\u95ee\u7f51\u5f00\u53d1\u7f51\u7ad9\u63d0\u4f9b\u7684\u8865\u4e01\u5305\uff0c\u6253\u5165\u5b8c\u6210\u540e\uff0c\u5177\u6709\u4e86WiFi\u6a21\u7ec4\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"T113S3-PRO_TinaSDK5\n\u251c\u2500\u2500 kernel\n\u2502\xa0\xa0 \u2514\u2500\u2500 linux-5.4\n\u2502\xa0\xa0     \u2514\u2500\u2500 drivers\n\u2502\xa0\xa0         \u2514\u2500\u2500 net\n\u2502\xa0\xa0             \u2514\u2500\u2500 wireless\n\u2502\xa0\xa0                 \u2514\u2500\u2500 aic8800\n\u2502\xa0\xa0                     \u251c\u2500\u2500 Kconfig\n\u2502\xa0\xa0                     \u251c\u2500\u2500 Makefile\n\u2502\xa0\xa0                     \u251c\u2500\u2500 aic8800_bsp\n\u2502\xa0\xa0                     \u2502\xa0\xa0 \u251c\u2500\u2500 Makefile\n\u2502\xa0\xa0                     \u2502\xa0\xa0 \u251c\u2500\u2500 aic8800d80_compat.c\n\u2502\xa0\xa0                     \u2502\xa0\xa0 \u251c\u2500\u2500 aic8800d80_compat.h\n\u2502\xa0\xa0                     \u2502\xa0\xa0 \u251c\u2500\u2500 aic8800dc_compat.c\n\u2502\xa0\xa0                     \u2502\xa0\xa0 \u251c\u2500\u2500 aic8800dc_compat.h\n...\n\u2502\xa0\xa0                     \u2514\u2500\u2500 aic8800_fdrv\n\u2502\xa0\xa0                         \u251c\u2500\u2500 sdio_host.h\n\u2502\xa0\xa0                         \u251c\u2500\u2500 usb_host.c\n\u2502\xa0\xa0                         \u2514\u2500\u2500 usb_host.h\n\u2514\u2500\u2500 platform\n    \u2514\u2500\u2500 allwinner\n        \u2514\u2500\u2500 wireless\n            \u2514\u2500\u2500 firmware\n                \u2514\u2500\u2500 aic8800\n                    \u2514\u2500\u2500 aic8800d80\n                        \u251c\u2500\u2500 aic_userconfig_8800d80.txt\n                        \u251c\u2500\u2500 fmacfw_8800d80_u02.bin\n                        \u251c\u2500\u2500 fw_adid_8800d80_u02.bin\n                        \u251c\u2500\u2500 fw_patch_8800d80_u02.bin\n                        \u251c\u2500\u2500 fw_patch_table_8800d80_u02.bin\n                        \u2514\u2500\u2500 lmacfw_rf_8800d80_u02.bin\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u6253\u5f00\u9a71\u52a8\u7f16\u8bd1\u652f\u6301",children:"\u6253\u5f00\u9a71\u52a8\u7f16\u8bd1\u652f\u6301"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"WiFi\u6a21\u7ec4\u9a71\u52a8\u914d\u7f6e\u8def\u5f84",src:i(55111).Z+"",width:"612",height:"267"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"AIC8800\u6a21\u7ec4\u539f\u7406\u56fe",src:i(91837).Z+"",width:"545",height:"133"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ea\u9700\u8981\u5728kernel\u7684\u7f51\u7edc\u8bbe\u5907-\u65e0\u7ebf\u8bbe\u5907\u4e0b\u9762\u6253\u5f00AIC\u65e0\u7ebf\u7684\u652f\u6301\u5373\u53ef\uff0c\u8fd9\u4e2a\u5728\u6253\u5165\u767e\u95ee\u7f51\u5bf9xx\u9002\u914d\u7684\u8865\u4e01\u5305\u540e\uff0c\u5c31\u5df2\u7ecf\u9ed8\u8ba4\u6253\u5f00\u4e86\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u6a21\u7ec4\u6d4b\u8bd5",children:"\u6a21\u7ec4\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6d4b\u8bd5\u524d\uff0c\u8981\u5148\u52a0\u8f7dWiFi\u6a21\u7ec4\u7684\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# insmod /lib/modules/5.4.61/aic8800_bsp.ko\n[  203.391853] aicbsp_init\n[  203.394607] RELEASE_DATE:2023_0904_1726\n# insmod /lib/modules/5.4.61/aic8800_fdrv.ko\n[  209.944090] AICWFDBG(LOGTRACE)\t>>> rwnx_mod_init()\n[  209.949624] AICWFDBG(LOGINFO)\trwnx v6.4.3.0 - - 241c091M (master)\n[  209.956473] AICWFDBG(LOGINFO)\tRELEASE_DATE:2023_0904_1725 \n[  209.962767] AICWFDBG(LOGTRACE)\trwnx_init_cmd_array Enter \n...\n[  214.498858] ieee80211 phy0: \n[  214.498858] *******************************************************\n[  214.498858] ** CAUTION: USING PERMISSIVE CUSTOM REGULATORY RULES **\n[  214.498858] *******************************************************\n[  214.523161] AICWFDBG(LOGTRACE)\t>>> rwnx_send_me_chan_config_req()\n[  214.530025] AICWFDBG(LOGTRACE)\trwnx_send_msg (5123)ME_CHAN_CONFIG_CFM reqcfm:1 in_irq:0 in_softirq:0 in_atomic:0\n[  214.541558] AICWFDBG(LOGTRACE)\trwnx_cmd_malloc get cmd_array[0]:127c02ad \n[  214.549705] AICWFDBG(LOGTRACE)\trwnx_cmd_free cmd_array[0]:127c02ad \n[  214.556836] AICWFDBG(LOGTRACE)\t>>> rwnx_dbgfs_register()\n[  214.562964] AICWFDBG(LOGINFO)\tfw_log_init: c520c000, c520e800\n[  214.569476] AICWFDBG(LOGINFO)\trwnx_interface_add: wlan%d, 2, 10\n[  214.576375] AICWFDBG(LOGINFO)\tinterface add:e8 51 9e dc 7a 7f\n[  215.256714] AICWFDBG(LOGINFO)\tNew interface create wlan0 \n...\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u51fa\u73b0\u4ee5\u4e0a\u4fe1\u606f\uff0c\u8868\u793aWiFi\u9a71\u52a8\u6a21\u5757\u52a0\u8f7d\u6210\u529f\u3002\u6267\u884c ",(0,s.jsx)(e.code,{children:"ifconfig -a"})," \u6307\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230\u5b58\u5728 wlan0 \u8282\u70b9\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# ifconfig wlan0\nwlan0     Link encap:Ethernet  HWaddr EE:90:92:F2:D6:E2  \n          UP BROADCAST MULTICAST  MTU:1500  Metric:1\n          RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"wi-fi-\u6a21\u7ec4\u7684\u4f7f\u7528",children:"Wi-Fi \u6a21\u7ec4\u7684\u4f7f\u7528"}),"\n",(0,s.jsx)(e.h4,{id:"wi-fi-\u5de5\u4f5c\u7684\u51e0\u79cd\u6a21\u5f0f",children:"Wi-Fi \u5de5\u4f5c\u7684\u51e0\u79cd\u6a21\u5f0f"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u76ee\u524dTina\u5e73\u53f0\u4e0a\u7684Wi-Fi\u4e00\u822c\u53ef\u5904\u4e8e3\u79cd\u5de5\u4f5c\u6a21\u5f0f\uff0c\u5206\u522b\u662f STA\uff0cAP\uff0cMONITOR"}),"\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"STATION\uff1a\u8fde\u63a5\u65e0\u7ebf\u7f51\u7edc\u7684\u7ec8\u7aef\uff0c\u5927\u90e8\u5206\u65e0\u7ebf\u7f51\u5361\u9ed8\u8ba4\u90fd\u5904\u4e8e\u8be5\u6a21\u5f0f\uff0c\u4e5f\u662f\u5e38\u7528\u7684\u4e00\u79cd\u6a21\u5f0f\u3002"}),"\n",(0,s.jsx)(e.li,{children:"AP\uff1a\u65e0\u7ebf\u63a5\u5165\u70b9\uff0c\u5e38\u79f0\u70ed\u70b9\uff0c\u6bd4\u5982\u8def\u7531\u5668\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(e.li,{children:"MONITOR\uff1a\u4e5f\u79f0\u4e3a\u6df7\u6742\u8bbe\u5907\u76d1\u542c\u6a21\u5f0f\uff0c\u6240\u6709\u6570\u636e\u5305\u65e0\u8fc7\u6ee4\u4f20\u8f93\u5230\u4e3b\u673a\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5b8c\u6210\u672c\u8bc4\u6d4b\uff0c\u53ea\u4f7f\u7528\u5230\u4e86AP\u6a21\u5f0f\uff0c\u5b8c\u6210\u5c40\u57df\u7f51\u5185\u7684\u7ec8\u7aef\u7684\u65e0\u7ebf\u63a5\u5165\u5373\u53ef\uff0c\u5f53\u7136\u8be5\u6a21\u7ec4\u4e5f\u662f\u652f\u6301STATION\u6a21\u5f0f\uff0c\u5e76\u4e14\u662f\u53cc\u9891\u6a21\u5f0f\uff085G+2.4GHZ\uff09\uff0c\u4f46\u662fAP\u6a21\u5f0f\u53ea\u80fd\u4f7f\u75282.4G\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\uff1a\u4e0e\u767e\u95ee\u7f51\u5f00\u53d1\u5927\u4f6c\u786e\u8ba4\u8fc7\uff0cAP\u53ea\u80fd\u4f7f\u75282.4GHz\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"sta\u6a21\u5f0f",children:"STA\u6a21\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u53ea\u9700\u8981\u589e\u52a0wpa_supplicant\u7684\u914d\u7f6e\u7a0b\u5e8f\uff0c\u7136\u540e\u8fd0\u884cwpa_supplicant\u5373\u53ef\u3002\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# \u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0\u8fde\u63a5\u7684AP\u7684SSID\u548cPASSWORD\n$ cat /etc/wpa_supplicant.conf\n...\nnetwork={\n    ssid="YourSSID"\n    psk="YourPassword"\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#\u6ce8\u610f\uff1adev=wlan0\n\n# \u52a0\u8f7dWiFi\u6a21\u7ec4\u9a71\u52a8\ninsmod /lib/modules/5.4.61/aic8800_bsp.ko && insmod /lib/modules/5.4.61/aic8800_fdrv.ko\n# \u4f7f\u80fd\u8bbe\u5907\nprintf "Starting network: "\n/sbin/ifconfig $dev up\n[ $? = 0 ] && echo "$dev up OK" || echo "$dev up FAIL"\n# \u4f7f\u7528wpa_supplicant\u8fde\u63a5AP\nwpa_supplicant -B -Dnl80211 -i$dev -c/etc/wpa_supplicant.conf\nsleep 3\n\n# \u4f7f\u7528udhcpc\u83b7\u53d6IP\nudhcpc -i $dev -q\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8bc4\u6d4b\u4e3b\u8981\u4f7f\u7528AP\u6a21\u5f0f\uff0c\u8fd9\u91cc\u4e0d\u518d\u8fc7\u591a\u4ecb\u7ecd\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u53ef\u4ee5\u4e92\u8054\u7f51\u641c\u7d22\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"ap\u6a21\u5f0f",children:"AP\u6a21\u5f0f"}),"\n",(0,s.jsx)(e.h5,{id:"1-\u5b89\u88c5\u5fc5\u8981\u7684\u8f6f\u4ef6",children:"1. \u5b89\u88c5\u5fc5\u8981\u7684\u8f6f\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u5305\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"hostapd"}),"\uff1a\u7528\u4e8e\u521b\u5efa\u65e0\u7ebf\u63a5\u5165\u70b9\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"dnsmasq"})," \u6216\u5176\u4ed6 DHCP/DNS \u670d\u52a1\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"iptables"})," (\u7528\u4e8e\u7f51\u7edc\u8f6c\u53d1\uff0c\u5177\u4f53\u89c6\u9700\u6c42\u800c\u5b9a)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h5,{id:"2-\u914d\u7f6e-hostapd",children:"2. \u914d\u7f6e Hostapd"}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,s.jsx)(e.code,{children:"hostapd"})," \u914d\u7f6e\u6587\u4ef6\uff08\u901a\u5e38\u5728 ",(0,s.jsx)(e.code,{children:"/etc/hostapd/hostapd.conf"}),"\uff0c\u82e5\u4e0d\u5b58\u5728\u53ef\u624b\u52a8\u521b\u5efa\uff09\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"interface=wlan0\ndriver=nl80211\nssid=MyWiFiAP         # \u8bbe\u7f6e\u65e0\u7ebf\u7f51\u7edc\u540d\u79f0\nhw_mode=g             # \u6a21\u5f0f (a=5GHz, g=2.4GHz)\nchannel=6             # \u4fe1\u9053\nauth_algs=1\nwpa=2\nwpa_passphrase=12345678 # \u8bbe\u7f6e\u65e0\u7ebf\u5bc6\u7801\nwpa_key_mgmt=WPA-PSK\nrsn_pairwise=CCMP\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5c06 ",(0,s.jsx)(e.code,{children:"interface=wlan0"})," \u66ff\u6362\u4e3a\u60a8\u7684\u65e0\u7ebf\u7f51\u5361\u540d\u79f0\uff08\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"ifconfig"})," \u6216 ",(0,s.jsx)(e.code,{children:"ip a"})," \u83b7\u53d6\uff09\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06 ",(0,s.jsx)(e.code,{children:"hostapd"})," \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u5199\u5165\u9ed8\u8ba4\u6587\u4ef6\u4e2d\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'sudo nano /etc/default/hostapd\n# \u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0/\u4fee\u6539\uff1a\nDAEMON_CONF="/etc/hostapd/hostapd.conf"\n'})}),"\n",(0,s.jsx)(e.h5,{id:"3-\u914d\u7f6e-dhcpdns-\u670d\u52a1",children:"3. \u914d\u7f6e DHCP/DNS \u670d\u52a1"}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,s.jsx)(e.code,{children:"dnsmasq"})," \u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo nano /etc/dnsmasq.conf\n# \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a\ninterface=wlan0\ndhcp-range=192.168.10.10,192.168.10.100,255.255.255.0,24h\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd0\u884c\u62a5\u9519\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# dnsmasq -C /etc/dnsmasq.conf\n\ndnsmasq: failed to create inotify: Function not implemented\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u9700\u8981\u6309\u7167\u5982\u4e0b\u793a\u4f8b\u6253\u5f00inotify\u652f\u6301\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"kernel\u90e8\u5206"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"inotify\u5185\u6838\u5c42\u914d\u7f6e",src:i(81994).Z+"",width:"633",height:"214"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7528\u6237\u5c42\u90e8\u5206"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"inotify\u7528\u6237\u5c42\u914d\u7f6e",src:i(59981).Z+"",width:"602",height:"185"})}),"\n",(0,s.jsx)(e.h5,{id:"4-\u542f\u7528\u7f51\u7edc\u8f6c\u53d1",children:"4. \u542f\u7528\u7f51\u7edc\u8f6c\u53d1"}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,s.jsx)(e.code,{children:"/etc/sysctl.conf"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo nano /etc/sysctl.conf\n# \u53d6\u6d88\u6ce8\u91ca\u6216\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff1a\n# net.ipv4.ip_forward=1\nsudo sysctl -p\n\n# \u6216\u8005\u6bcf\u6b21\u542f\u52a8\uff0c\u52a8\u6001\u8bbe\u7f6e\necho 1 > /proc/sys/net/ipv4/ip_forward\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u914d\u7f6e ",(0,s.jsx)(e.code,{children:"iptables"})," \u89c4\u5219\uff0c\u5c06\u6d41\u91cf\u4ece\u65e0\u7ebf\u63a5\u53e3\u8f6c\u53d1\u5230\u6709\u7ebf\u63a5\u53e3\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"echo 1 > /proc/sys/net/ipv4/ip_forward\n# \u8fd9\u91cc\u6d4b\u8bd5\u4f7f\u7528eth0\u4f5c\u4e3aWAN\uff0c\u8fd9\u91cc\u9700\u8981\u6839\u636e\u5b9e\u9645\u7684\u7f51\u7edc\u51fa\u53e3\u63a5\u53e3\u586b\u5199\nsudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\n"})}),"\n",(0,s.jsx)(e.h5,{id:"5-\u6d4b\u8bd5\u8fde\u63a5",children:"5. \u6d4b\u8bd5\u8fde\u63a5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# ifconfig wlan0 192.168.10.1 netmask 255.255.255.0\nip addr add 192.168.10.1/24 dev wlan0\nip route add 192.168.10.0/24 dev wlan0\n\n#\u8fd9\u91cc\u6253\u5f00hostapd\u521b\u5efa\u65e0\u7ebf\u8fde\u63a5\uff0c\u7136\u540e\u4f7f\u7528dnsmasq\u5728ap\u63a5\u53e3\u5f00\u542fdhcp\u670d\u52a1\uff0c\u4e3a\u8fde\u63a5\u4e0a\u7684station\u5206\u914dIP\ndnsmasq -C /root/dnsmasq.conf\nhostapd -B hostapd.conf\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4g\u6a21\u7ec4\u9002\u914d",children:"4G\u6a21\u7ec4\u9002\u914d"}),"\n",(0,s.jsx)(e.h3,{id:"4g\u6a21\u7ec4\u4ecb\u7ecd",children:"4G\u6a21\u7ec4\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"EC20-CE Mini PCIe\u662f\u4e00\u6b3e\u652f\u6301PCI Express Mini Card \u6807\u51c6\u63a5\u53e3\u7684LTE\u6a21\u5757\u3002\u91c7\u7528LTE 3GPP Release 11 \u6280\u672f\uff0c\u652f\u6301\u6700\u5927\u4e0b\u884c\u901f\u7387150 Mbps\u548c\u6700\u5927\u4e0a\u884c\u901f\u738750 Mbps\uff1b\u540c\u65f6\u5728\u5c01\u88c5\u4e0a\u517c\u5bb9\u79fb\u8fdc\u901a\u4fe1\u591a\u7f51\u7edc\u5236\u5f0fLTE Cat 4 EG25-G Mini PCIe \u6a21\u5757\uff0c\u5b9e\u73b0\u4e86\u4ece3G\u7f51\u7edc\u54114G\u7f51\u7edc\u7684\u8f7b\u677e\u5e73\u6ed1\u8fc7\u6e21\u3002EC20-CE Mini PCIe\u6a21\u5757\u80fd\u591f\u5411\u540e\u517c\u5bb9\u73b0\u5b58\u7684EDGE\u548cGSM/GPRS\u7f51\u7edc\uff0c\u4ee5\u786e\u4fdd\u5728\u7f3a\u4e4f3G\u548c4G\u7f51\u7edc\u7684\u504f\u8fdc\u5730\u533a\u4e5f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u5d4c\u5165\u5f0fLinux\u800c\u8a00\uff0c\u5927\u591a\u6570\u76844G\u6a21\u5757\u63a5\u53e3\u90fd\u662fMiniPCIE\u63a5\u53e3\uff0c\u4f46\u662f\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u5c31\u4f1a\u53d1\u73b0\uff0c4G\u6a21\u5757\u7684\u901a\u4fe1\u63a5\u53e3\u90fd\u662fUSB\uff0c\u6240\u4ee54G\u6a21\u5757\u7684\u9a71\u52a8\u5c31\u662fUSB\u9a71\u52a8\uff0c\u53ea\u8981USB\u9a71\u52a8\u6b63\u5e38\uff0c4G\u6a21\u5757\u5728\u786c\u4ef6\u4e0a\u5c31\u80fd\u6b63\u5e38\u901a\u4fe1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9ed8\u8ba4kernel\u914d\u7f6e\u4e2d\u662f\u6253\u5f00\u4e86USB\u9a71\u52a8\u652f\u6301\u7684\uff0c\u4e0d\u7528\u518d\u8fdb\u884c\u989d\u5916\u914d\u7f6e\uff0c\u542f\u52a8\u540e\u4f1a\u51fa\u73b04\u4e2a\u4ea4\u4e92\u7684\u4e32\u53e3\uff0c\u5177\u4f53\u914d\u7f6e\u89c1\u4e0b\u9762\u7684\u7ae0\u8282\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u652f\u63014g\u6a21\u7ec4\u8054\u7f51",children:"\u652f\u63014G\u6a21\u7ec4\u8054\u7f51"}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u7ec4\u63a5\u5165\u540e\u5728\u7cfb\u7edf\u4e0b\u67094\u4e2a\u4ea4\u4e92\u7684USB\u4e32\u53e3\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ ls -al /dev/ttyUSB*\ncrw-rw----    1 root     root      188,   0 Jan  1 01:27 /dev/ttyUSB0\ncrw-rw----    1 root     root      188,   1 Jan  1 01:27 /dev/ttyUSB1\ncrw-rw----    1 root     root      188,   2 Jan  1 01:29 /dev/ttyUSB2\ncrw-rw----    1 root     root      188,   3 Jan  1 01:27 /dev/ttyUSB3\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u6587\u6863Quectel_WCDMA&LTE_Linux_USB_Driver_User_Guide_V1.8.pdf"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u6a21\u7ec4\u64cd\u4f5c\u63a5\u53e3",src:i(32998).Z+"",width:"750",height:"312"})}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4e0a\u53ef\u77e5\uff0cttyUSB2\u662f\u7528\u6765\u53d1\u9001AT\u6307\u4ee4\u7684\uff0cttyUSB3\u662f\u7528\u6765\u53d1\u9001ppp\u7684\u3002\u53ef\u4ee5\u5148\u7b80\u5355\u7684\u4f7f\u7528AT\u6d4b\u8bd5\u547d\u4ee4\uff0c\u5224\u65ad\u6a21\u7ec4\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u6a21\u7ec4AT\u6307\u4ee4\u64cd\u4f5c\u793a\u4f8b",src:i(89424).Z+"",width:"336",height:"173"})}),"\n",(0,s.jsx)(e.h4,{id:"1-kernel\u914d\u7f6e",children:"1. kernel\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"./build.sh menuconfig"})}),"\n",(0,s.jsx)(e.li,{children:"\u6309\u7167\u4e0b\u56fe\u9009\u62e9\u5bf9\u5e94\u7684\u9009\u9879"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ppp\u5185\u6838\u914d\u7f6e",src:i(93706).Z+"",width:"689",height:"274"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"./build.sh savemenuconfig"})}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"2-buildroot\u914d\u7f6e",children:"2. buildroot\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"./build.sh buildroot_menuconfig"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6309\u7167\u4e0b\u56fe\u9009\u62e9\u5bf9\u5e94\u7684\u9009\u9879"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ppp\u7528\u6237\u5c42\u914d\u7f6e",src:i(39309).Z+"",width:"650",height:"495"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"./build.sh buildroot_saveconfig"})}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"3-\u7cfb\u7edf\u5185\u914d\u7f6e",children:"3. \u7cfb\u7edf\u5185\u914d\u7f6e"}),"\n",(0,s.jsx)(e.h5,{id:"31-\u65b0\u5efagprs-connect-chat\u6587\u4ef6",children:"3.1. \u65b0\u5efagprs-connect-chat\u6587\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# cat /etc/ppp/gprs-connect-chat\n#Chat script for China Mobile, used SIMCOM sim4100 TD module.\nTIMEOUT 15\nABORT "DELAYED"\nABORT "BUSY"\nABORT "ERROR"\nABORT "NO DIALTONE"\nABORT "NO CARRIER"\nTIMEOUT 40\n\'\' \\rAT\nOK ATS0=0\nOK ATE0V1\n\n# use "CMNET" if china mobile; use "3GNET" if china unicom;\n# use \nOK AT+CGDCONT=1,"IP","CMNET"\n\nOK AT+CGEQREQ=1,2,128,384,,,0,,,,,,\nOK ATDT*99*1#\nCONNECT\n'})}),"\n",(0,s.jsx)(e.h5,{id:"32-\u65b0\u5efagprsdial\u811a\u672c",children:"3.2. \u65b0\u5efagprsdial\u811a\u672c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# cat /etc/ppp/peers/gprsdial\n# This is pppd script for China Mobile, used SIMCOM SIM7100 Module\n# Usage: root>pppd call gprs\n#Interface should be used is the interface which connects physics interface of S\n/dev/ttyUSB3\n115200\ncrtscts\nmodem\n#noauth\ndebug\nnodetach\n#hide-password\nusepeerdns\nnoipdefault\ndefaultroute\nuser \"cmnet\"\n0.0.0.0:0.0.0.0\n#ipcp-accept-local\n#ipcp-accept-remote\n#lcp-echo-failure 12\n#lcp-echo-interval 3\n#noccp\n#novj\n#novjccomp\n#persist\nconnect '/usr/sbin/chat -s -v -f /etc/ppp/gprs-connect-chat'\n#disconnect '/bin/chat -v -f /etc/ppp/gprs-disconnect-chat'\n"})}),"\n",(0,s.jsx)(e.h5,{id:"33-\u6267\u884cpppd\u62e8\u53f7\u6d4b\u8bd5",children:"3.3. \u6267\u884cpppd\u62e8\u53f7\u6d4b\u8bd5"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f00\u53d1\u677f\u8fde\u63a5\u597d4G\u6a21\u5757\u540e\u4f7f\u7528\u5982\u4e0b\u6307\u4ee4\u8fdb\u884c\u62e8\u53f7\u4e0a\u7f51\uff0c\u7cfb\u7edf\u5185\u9ed8\u8ba4\u652f\u6301\u7684\u6307\u4ee4\u4e3a\u4e2d\u56fd\u8054\u901a\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5e76\u975e\u662f\u8054\u901a\u5361\uff0c\u8bf7\u4fee\u6539",(0,s.jsx)(e.code,{children:"/etc/ppp/gprs-connect-chat "}),"\u6587\u4ef6\u5185\u5bb9\u4e3a\u4f60SIM\u5361\u8fd0\u8425\u5546\u7684\u62e8\u53f7\u4e0a\u7f51\u6307\u4ee4\uff0c\u7136\u540e\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pppd call gprsdial > /dev/null &2>1\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\u5982\u679c\u6709\u7c7b\u4f3c\u5982\u4e0b\u6253\u5370\u4fe1\u606f\uff0c\u8868\u660e4G\u6a21\u5757\u62e8\u53f7\u8054\u7f51\u6210\u529f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sent [IPCP ConfNak id=0x6 <addr 0.0.0.0>]\nrcvd [IPCP ConfRej id=0x1 <compress VJ 0f 01>]\nsent [IPCP ConfReq id=0x2 <addr 0.0.0.0> <ms-dns1 0.0.0.0> <ms-dns2 0.0.0.0>]\nrcvd [IPCP ConfReq id=0x7]\nsent [IPCP ConfAck id=0x7]\nrcvd [IPCP ConfNak id=0x2 <addr 10.109.36.245> <ms-dns1 223.87.253.100> <ms-dns2 223.87.253.253>]\nsent [IPCP ConfReq id=0x3 <addr 10.109.36.245> <ms-dns1 223.87.253.100> <ms-dns2 223.87.253.253>]\nrcvd [IPCP ConfAck id=0x3 <addr 10.109.36.245> <ms-dns1 223.87.253.100> <ms-dns2 223.87.253.253>]\nCould not determine remote IP address: defaulting to 10.64.64.64\nlocal  IP address 10.109.36.245\nremote IP address 10.64.64.64\nprimary   DNS address 223.87.253.100\nsecondary DNS address 223.87.253.253\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e2a\u65f6\u5019\u89c2\u5bdf\u7f51\u7edc\u63a5\u53e3\uff0c\u4f1a\u6709\u4e00\u4e2a\u65b0\u7684\u63a5\u53e3ppp0\uff0c\u5982\u4e0b\u6240\u793a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# ifconfig\nlo        Link encap:Local Loopback\n          inet addr:127.0.0.1  Mask:255.0.0.0\n          inet6 addr: ::1/128 Scope:Host\n          UP LOOPBACK RUNNING  MTU:65536  Metric:1\n          RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n\nppp0      Link encap:Point-to-Point Protocol\n          inet addr:10.109.36.245  P-t-P:10.64.64.64  Mask:255.255.255.255\n          UP POINTOPOINT RUNNING NOARP MULTICAST  MTU:1500  Metric:1\n          RX packets:5 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:6 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:3\n          RX bytes:62 (62.0 B)  TX bytes:101 (101.0 B)\n"})}),"\n",(0,s.jsx)(e.h5,{id:"34-\u4e0d\u540c\u8fd0\u8425\u5546apn\u548c\u62e8\u53f7\u914d\u7f6e",children:"3.4. \u4e0d\u540c\u8fd0\u8425\u5546APN\u548c\u62e8\u53f7\u914d\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u4e0d\u540c\u8fd0\u8425\u5546APN\u548c\u62e8\u53f7\u914d\u7f6e",src:i(91409).Z+"",width:"738",height:"752"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"http://wiki.100ask.net/How_to_use_pppd_to_dial_up_the_Internet_for_supporting_4G_modules#.E4.BD.BF.E7.94.A8.E7.A7.BB.E8.BF.9CEC20_4G.E6.A8.A1.E5.9D.97",children:"pppoe\u62e8\u53f7\u4e0a\u7f51-\u767e\u95ee\u7f51wiki"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},91409:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/APN\u914d\u7f6e-40f77f9cca1cb95018377c75afe17a23.png"},55111:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/WiFi\u6a21\u7ec4\u9a71\u52a8\u914d\u7f6e\u8def\u5f84-831c459e29f3e8b4662cbd44eefd1b9a.png"},81994:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/inotify\u5185\u6838\u5c42\u914d\u7f6e-79294d9be7b49d3fa91b11ca4490a05a.png"},59981:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/inotify\u7528\u6237\u5c42\u914d\u7f6e-1922868f38145600aaf18854a6ef8837.png"},93706:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/ppp\u5185\u6838\u914d\u7f6e-d9da4c4f8f45f6d86b73a3ce86f30a55.png"},39309:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/ppp\u7528\u6237\u5c42\u914d\u7f6e-2347ea2d9c9ad87493a6d4b4772cb5ad.png"},91837:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/wifi\u6a21\u7ec4kernel\u914d\u7f6e-186f5459c6c4a80bd1bb04f68154709d.png"},89424:(n,e,i)=>{i.d(e,{Z:()=>s});const s="data:image/png;base64,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"},32998:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/\u6a21\u7ec4\u5f00\u53d1\u6587\u6863-bc9084f4272bee7adf6c013d27b2bcac.png"},11151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var s=i(67294);const d={},c=s.createContext(d);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);