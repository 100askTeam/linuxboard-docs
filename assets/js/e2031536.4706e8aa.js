"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9063],{91866:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),i=t(11151);const s={sidebar_position:2},d="\u5f00\u53d1\u73af\u5883\u642d\u5efa",r={id:"T113s3-Industrial/part6/DevelopmentEnvironmentSetup",title:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",description:"\u83b7\u53d6TinaSDK\u6e90\u7801",source:"@site/docs/T113s3-Industrial/part6/02-DevelopmentEnvironmentSetup.md",sourceDirName:"T113s3-Industrial/part6",slug:"/T113s3-Industrial/part6/DevelopmentEnvironmentSetup",permalink:"/docs/T113s3-Industrial/part6/DevelopmentEnvironmentSetup",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-Industrial/part6/02-DevelopmentEnvironmentSetup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"t113s3Sidebar",previous:{title:"Tina-SDK\u5f00\u53d1",permalink:"/docs/category/tina-sdk\u5f00\u53d1"},next:{title:"Bootloader\u5f00\u53d1",permalink:"/docs/category/bootloader\u5f00\u53d1"}},u={},c=[{value:"\u83b7\u53d6TinaSDK\u6e90\u7801",id:"\u83b7\u53d6tinasdk\u6e90\u7801",level:3},{value:"\u7f16\u8bd1\u51fa\u56fa\u4ef6",id:"\u7f16\u8bd1\u51fa\u56fa\u4ef6",level:3},{value:"\u70e7\u5f55\u56fa\u4ef6",id:"\u70e7\u5f55\u56fa\u4ef6",level:3}];function o(n){const e={code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\n",(0,a.jsx)(e.h3,{id:"\u83b7\u53d6tinasdk\u6e90\u7801",children:"\u83b7\u53d6TinaSDK\u6e90\u7801"}),"\n",(0,a.jsx)(e.p,{children:"\u67e5\u770b\u4e0a\u9762\u6e90\u7801\u5de5\u5177\u6587\u6863\u624b\u518c\uff0c\u4e0b\u8f7dTinaSDK\u6e90\u7801\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240709104317300",src:t(40958).Z+"",width:"761",height:"171"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e0a\u4f20\u5230ubuntu\uff0c\u521b\u5efa\u6587\u4ef6\u5939\u7528\u6765\u4fdd\u5b58\u6e90\u7801\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~$ mkdir Tina_SDK\nubuntu@ubuntu1804:~$ cd Tina_SDK/\nubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1\n.\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.00\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.01\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.02\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.03\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.04\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.05\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.06\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.07\n\u2514\u2500\u2500 tina-d1-h.tar.bz2.08\n\n0 directories, 9 files\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u67e5\u770b\u6240\u6709\u6587\u4ef6MD5\u6821\u9a8c\u503c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/Tina_SDK$ md5sum tina-d1-h.tar.bz2.*\ne755bae00cd76afc3fb276b4e3fd86ba  tina-d1-h.tar.bz2.00\ncb60ecfdb51c624ff3cbd7b24552866f  tina-d1-h.tar.bz2.01\n54e56a4cf1cef46ca0a94b85ea1d33a1  tina-d1-h.tar.bz2.02\n4988fa08827c0f7af2dc170145e24b26  tina-d1-h.tar.bz2.03\na0463bcf8e73db27b5ecafaac593a919  tina-d1-h.tar.bz2.04\na87382ca16a8c12b3a94f1cad99ce77e  tina-d1-h.tar.bz2.05\n5973530baa3b282108351818641c27fd  tina-d1-h.tar.bz2.06\nccd63e1d16534b364a101d2d44416261  tina-d1-h.tar.bz2.07\ne0d72713565f4424ea43c07e15a38139  tina-d1-h.tar.bz2.08\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u786e\u4fdd\u6821\u9a8c\u503c\u5bf9\u4e0a\u3002\u5426\u5219\u9700\u8981\u91cd\u65b0\u4e0a\u4f20\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u89e3\u538b\u6e90\u7801\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/Tina_SDK$ cat tina-d1-h.tar.bz2.* | tar -jxv\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u5373\u53ef\u89e3\u538b\u5b8c\u6210\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/Tina_SDK$ tree -L 1\n.\n\u251c\u2500\u2500 tina-d1-h\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.00\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.01\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.02\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.03\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.04\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.05\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.06\n\u251c\u2500\u2500 tina-d1-h.tar.bz2.07\n\u2514\u2500\u2500 tina-d1-h.tar.bz2.08\n\n1 directory, 9 files\nubuntu@ubuntu1804:~/Tina_SDK$ mv tina-d1-h ../\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u83b7\u53d6\u6269\u5c55\u652f\u6301\u4ed3\u5e93\uff0c\u7136\u540e\u52a0\u4ee5\u5e94\u7528\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/100ASK_T113s3-Industrial-Devkit_TinaSDK\nubuntu@ubuntu1804:~$ cd 100ASK_T113s3-Industrial-Devkit_TinaSDK/\nubuntu@ubuntu1804:~/100ASK_T113s3-Industrial-Devkit_TinaSDK$ ls\ndevice  lichee  package  prebuilt  README.md  target\nubuntu@ubuntu1804:~/100ASK_T113s3-Industrial-Devkit_TinaSDK$ git submodule update --init\nubuntu@ubuntu1804:~/100ASK_T113s3-Industrial-Devkit_TinaSDK$ cp ./* -rfvd ~/tina-d1-h\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7f16\u8bd1\u51fa\u56fa\u4ef6",children:"\u7f16\u8bd1\u51fa\u56fa\u4ef6"}),"\n",(0,a.jsx)(e.p,{children:"\u8fdb\u5165\u6e90\u7801\u76ee\u5f55\uff0c\u6267\u884c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~$ cd tina-d1-h/\nubuntu@ubuntu1804:~/tina-d1-h$ source build/envsetup.sh \nSetup env done! Please run lunch next.\nubuntu@ubuntu1804:~/tina-d1-h$ lunch\n\nYou're building on Linux\n\nLunch menu... pick a combo:\n     1. d1-h_nezha_min-tina\n     2. d1-h_nezha-tina\n     3. d1s_cvbs-tina\n     4. d1s_nezha-tina\n     5. t113_100ask-tina\n\nWhich would you like? [Default t113_100ask]: 5\n============================================\nTINA_BUILD_TOP=/home/ubuntu/tina-d1-h\nTINA_TARGET_ARCH=arm\nTARGET_PRODUCT=t113_100ask\nTARGET_PLATFORM=t113\nTARGET_BOARD=t113-100ask\nTARGET_PLAN=100ask\nTARGET_BUILD_VARIANT=tina\nTARGET_BUILD_TYPE=release\nTARGET_KERNEL_VERSION=5.4\nTARGET_UBOOT=u-boot-2018\nTARGET_CHIP=sun8iw20p1\n============================================\nclean buildserver\n[1] 24251\nubuntu@ubuntu1804:~/tina-d1-h$ make\n...\n#### make completed successfully (01:16 (mm:ss)) ####\nubuntu@ubuntu1804:~/tina-d1-h$ pack\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6253\u5305\u6210\u529f\u540e\uff0c\u955c\u50cf\u6587\u4ef6\u4fdd\u5b58\u5728",(0,a.jsx)(e.code,{children:"/home/ubuntu/tina-d1-h/out/t113-100ask/tina_t113-100ask_uart3.img"}),"\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u70e7\u5f55\u56fa\u4ef6",children:"\u70e7\u5f55\u56fa\u4ef6"}),"\n",(0,a.jsxs)(e.p,{children:["\u628a\u955c\u50cf\u6587\u4ef6\u4f20\u5230PC\u7aef\uff0c\u6253\u5f00\u5168\u5fd7\u7ebf\u5237\u5de5\u5177 ",(0,a.jsx)(e.strong,{children:"AllwinnertechPhoeniSuit"}),"\uff0c\u627e\u5230",(0,a.jsx)(e.strong,{children:"PhoenixSuit.exe"})," \uff0c\u53cc\u51fb\u8fd0\u884c\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240709111952653",src:t(653).Z+"",width:"800",height:"600"})}),"\n",(0,a.jsxs)(e.p,{children:["\u9009\u62e9",(0,a.jsx)(e.code,{children:"\u4e00\u952e\u5237\u673a"}),":"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240709112026606",src:t(95371).Z+"",width:"800",height:"600"})}),"\n",(0,a.jsx)(e.p,{children:"\u627e\u5230\u955c\u50cf\u8def\u5f84\uff0c\u9009\u62e9\u5168\u76d8\u64e6\u9664\u5347\u7ea7\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240709112117543",src:t(81293).Z+"",width:"800",height:"600"})}),"\n",(0,a.jsxs)(e.p,{children:["\u70b9\u51fb\u5b8c\u6210\u540e\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u754c\u9762\u64cd\u4f5c\uff0c\u8fd9\u65f6\u62ff\u8d77\u5df2\u7ecf\u8fde\u63a5\u597d\u7684\u5f00\u53d1\u677f\uff0c\u5148\u6309\u4f4f ",(0,a.jsx)(e.strong,{children:"FEL"})," \u70e7\u5199\u6a21\u5f0f\u6309\u952e\uff0c\u4e4b\u540e\u6309\u4e00\u4e0b ",(0,a.jsx)(e.strong,{children:"RESET"})," \u7cfb\u7edf\u590d\u4f4d\u952e\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u8fdb\u5165\u70e7\u5199\u6a21\u5f0f\u5e76\u5f00\u59cb\u70e7\u5199\u3002"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"image-20240709112322292",src:t(18981).Z+"",width:"800",height:"600"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e32\u53e3\u6253\u5370\u4fe1\u606f\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"...\ninsmod: can't insert '/lib/modules/5.4.61/xr829.ko': Operation timed out\nSuccessfully initialized wpa_supplicant\nCould not read interface wlan0 flags: No such device\nnl80211: Driver does not support authentication/association or connect commands\nnl80211: deinit ifname=wlan0 disabled_11b_rates=0\nCould not read interface wlan0 flags: No such device\nwlan0: Failed to initialize driver interface\n------run rc.final file-----\nnumid=30,iface=MIXER,name='Headphone Switch'\n  ; type=BOOLEAN,access=rw------,values=1\n  : values=on\n\n\nBusyBox v1.27.2 () built-in shell (ash)\n\n------run profile file-----\n _____  _              __     _\n|_   _||_| ___  _ _   |  |   |_| ___  _ _  _ _\n  | |   _ |   ||   |  |  |__ | ||   || | ||_'_|\n  | |  | || | || _ |  |_____||_||_|_||___||_,_|\n  |_|  |_||_|_||_|_|  Tina is Based on OpenWrt!\n ---------------------------[    9.916991] file system registered\n-------------------\n Tina Linux (Neptune, 61CC0487)\n ----------------------------------------------\nMon Feb  6 00:00:00 GMT 2023\nnodev   debugfs\nroot@TinaLinux:/# [    9.941016] configfs-gadget 4100000.udc-controller: failed to start g1: -19\nsh: write error: No such device\n[   11.008518] sunxi_usb_udc 4100000.udc-controller: 4100000.udc-controller supply udc not found, using dummy regulator\n[   11.024290] read descriptors\n[   11.027508] read strings\n[   11.254062] android_work: sent uevent USB_STATE=CONNECTED\n[   11.471404] configfs-gadget gadget: high-speed config #1: c\n[   11.477684] android_work: sent uevent USB_STATE=CONFIGURED\n[   11.498279] android_work: sent uevent USB_STATE=DISCONNECTED\n[   11.555679] android_work: sent uevent USB_STATE=CONNECTED\n\nroot@TinaLinux:/#\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},40958:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/image-20240709104317300-76002808a05f4152f55e944dccfb65ec.png"},653:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/image-20240709111952653-f1f28c7149dc01118720752d46129b5f.png"},95371:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/image-20240709112026606-71afde8f370c24c11cc8a9c1460c5a99.png"},81293:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/image-20240709112117543-04cd3998eb303880301aeb2cbc192650.png"},18981:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/image-20240709112322292-90cead89655d1843038a15e58310641f.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>d});var a=t(67294);const i={},s=a.createContext(i);function d(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);