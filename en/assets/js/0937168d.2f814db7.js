"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[621],{7719:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(85893),i=t(11151);const a={sidebar_position:11},s="Uboot\u4e0b\u589e\u52a0\u542f\u52a8LOGO\u56fe",r={id:"T113s3-Pro/part7/AddABootLogoImageInUboot",title:"Uboot\u4e0b\u589e\u52a0\u542f\u52a8LOGO\u56fe",description:"1.  \u51c6\u5907\u5408\u9002\u5c3a\u5bf8\u56fe\u7247",source:"@site/docs/T113s3-Pro/part7/11-AddABootLogoImageInUboot.md",sourceDirName:"T113s3-Pro/part7",slug:"/T113s3-Pro/part7/AddABootLogoImageInUboot",permalink:"/en/docs/T113s3-Pro/part7/AddABootLogoImageInUboot",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-Pro/part7/11-AddABootLogoImageInUboot.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"t113s3proSidebar",previous:{title:"\u4fee\u6539uboot\u652f\u6301RGB\u5c4f\u5e55",permalink:"/en/docs/T113s3-Pro/part7/ModifyUbootToSupportRGBScreen"},next:{title:"\u4fdd\u5b58\u5e76\u4fee\u6539\u81ea\u5df1\u7684uboot\u914d\u7f6e",permalink:"/en/docs/T113s3-Pro/part7/SaveAndModifyYourOwnUbootConfiguration"}},d={},c=[{value:"1.  \u51c6\u5907\u5408\u9002\u5c3a\u5bf8\u56fe\u7247",id:"1--\u51c6\u5907\u5408\u9002\u5c3a\u5bf8\u56fe\u7247",level:3},{value:"2.  \u8f6c\u6362\u56fe\u7247\u683c\u5f0f",id:"2--\u8f6c\u6362\u56fe\u7247\u683c\u5f0f",level:3},{value:"3.  \u62f7\u8d1d\u5230\u7279\u5b9a\u76ee\u5f55",id:"3--\u62f7\u8d1d\u5230\u7279\u5b9a\u76ee\u5f55",level:3},{value:"4.  \u7f16\u8bd1\u6253\u5305\u4f7f\u7528",id:"4--\u7f16\u8bd1\u6253\u5305\u4f7f\u7528",level:3},{value:"\u542f\u52a8\u5f00\u53d1\u677f\u67e5\u770b",id:"\u542f\u52a8\u5f00\u53d1\u677f\u67e5\u770b",level:3},{value:"\u8c03\u6574\u56fe\u50cf\u5927\u5c0f",id:"\u8c03\u6574\u56fe\u50cf\u5927\u5c0f",level:3}];function u(n){const e={code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"uboot\u4e0b\u589e\u52a0\u542f\u52a8logo\u56fe",children:"Uboot\u4e0b\u589e\u52a0\u542f\u52a8LOGO\u56fe"}),"\n",(0,o.jsx)(e.h3,{id:"1--\u51c6\u5907\u5408\u9002\u5c3a\u5bf8\u56fe\u7247",children:"1.  \u51c6\u5907\u5408\u9002\u5c3a\u5bf8\u56fe\u7247"}),"\n",(0,o.jsx)(e.p,{children:"\u5728Tina-SDK uboot\u4e0b\uff0c\u5982\u679c\u589e\u52a0 logo\u56fe\u7247\uff0c\u5219\u9700\u8981\u51c6\u5907\u4e00\u4e2a \u548c\u5c4f\u5e55\u5206\u8fa8\u7387\u5927\u5c0f\u7c7b\u4f3c \u6216\u8005\u6bd4\u4ed6\u5c0f\u7684BMP\u56fe\u7247\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u5df2\u77e5 7\u5bf8RGB\u5c4f\u5e55\u7684\u5206\u8fa8\u7387\u662f1024 x 600 \uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5148\u627e\u5230\u4e00\u5f20 \u5c0f\u4e8e\u6216\u7b49\u4e8e 1024 x 600 \u7684\u56fe\uff08\u4e3a\u4e86\u52a0\u5feb\u663e\u793a\uff0c\u5c3d\u91cf\u51c6\u5907\u5c0f\u4e8e500k\u7684\u56fe\uff0c\u56fe\u7247\u4f1a\u81ea\u52a8\u7b49\u6bd4\u4f8b\u5c45\u4e2d\u663e\u793a\uff09\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u4e0b \u6211\u51c6\u5907\u4e86 \u4e00\u5f20 \u5206\u8fa8\u7387 \u5c3a\u5bf8 \u4e3a 782x276 \u5206\u8fa8\u7387\u7684\u56fe\uff0c\u90a3\u4e48\u6211\u9700\u8981\u5148\u8c03\u6574\u56fe\u7247\u5c3a\u5bf8\u5927\u5c0f\uff0c\u518d\u8fdb\u884c\u8f6c\u6362\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Snipaste_2023-03-31_19-04-16",src:t(84274).Z+"",width:"782",height:"276"})}),"\n",(0,o.jsx)(e.h3,{id:"2--\u8f6c\u6362\u56fe\u7247\u683c\u5f0f",children:"2.  \u8f6c\u6362\u56fe\u7247\u683c\u5f0f"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331190636951",src:t(92168).Z+"",width:"1043",height:"800"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331190710565",src:t(85116).Z+"",width:"851",height:"766"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331190800358",src:t(23617).Z+"",width:"1174",height:"255"})}),"\n",(0,o.jsx)(e.h3,{id:"3--\u62f7\u8d1d\u5230\u7279\u5b9a\u76ee\u5f55",children:"3.  \u62f7\u8d1d\u5230\u7279\u5b9a\u76ee\u5f55"}),"\n",(0,o.jsx)(e.p,{children:"~/tina-d1-h/device/config/chips/t113/configs/100ask/configs"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331190943659",src:t(47386).Z+"",width:"1571",height:"152"})}),"\n",(0,o.jsx)(e.h3,{id:"4--\u7f16\u8bd1\u6253\u5305\u4f7f\u7528",children:"4.  \u7f16\u8bd1\u6253\u5305\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask/configs$ cd ~/tina-d1-h/\nubuntu@ubuntu1804:~/tina-d1-h$ ls\nbuild  config  Config.in  device  dl  lichee  Makefile  out  package  prebuilt  README.md  rules.mk  scripts  target  tmp  toolchain  tools\nubuntu@ubuntu1804:~/tina-d1-h$ make -j32\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331191011867",src:t(7558).Z+"",width:"1971",height:"115"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'#### make completed successfully (01:24 (mm:ss)) ####\n\nubuntu@ubuntu1804:~/tina-d1-h$\nubuntu@ubuntu1804:~/tina-d1-h$ pack\n--==========--\nPACK_CHIP         sun8iw20p1\nPACK_PLATFORM     tina\nPACK_BOARD        t113-100ask\nPACK_KERN\nPACK_DEBUG        uart3\nPACK_SIG          none\nPACK_SECURE       none\nPACK_MODE         normal\nPACK_FUNC         android\nPACK_PROGRAMMER   none\nPACK_TAR_IMAGE    none\nPACK_TOPDIR       /home/ubuntu/tina-d1-h\n--==========--\nNo kernel param, parse it from t113\ncopying tools file\ncopying configs file\nstorage_type value is 5\nrm /home/ubuntu/tina-d1-h/out/t113-100ask/image/sys_partition_nor.fex\nrm /home/ubuntu/tina-d1-h/out/t113-100ask/image/image_nor.cfg\ncopying boot resource\n\nLZMA 4.65 : Igor Pavlov : Public domain : 2009-02-03\ncopying boot file\nmake user resource for : /home/ubuntu/tina-d1-h/out/t113-100ask/image/sys_partition.fex\nhandle partition user-res\nno user resource partitions\nAPP_PART_DOWNLOAD_FILE = /home/ubuntu/tina-d1-h/out/t113-100ask/image/app.fex\nNeed size of filesystem\nno data resource partitions\ndon\'t build dtbo ...\nupdate_chip\npack boot package\nGetPrivateProfileSection read to end\ncontent_count=3\nLICHEE_REDUNDANT_ENV_SIZE config in BoardConfig.mk\n--mkenvimage create redundant env data!--\n---redundant env data size 0x20000---\npacking for tina linux\nnormal\nmbr count = 4\n\npartitation file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/sys_partition.bin\nmbr_name file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/sunxi_mbr.fex\ndownload_name file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/dlinfo.fex\n\nmbr size = 16384\nmbr magic softw411\ndisk name=boot-resource\ndisk name=env\ndisk name=env-redund\ndisk name=boot\ndisk name=rootfs\ndisk name=private\ndisk name=rootfs_data\ndisk name=UDISK\nthis is not a partition key\nupdate_for_part_info 0\ncrc 0 = 619ffc7\ncrc 1 = 93a4ae9a\ncrc 2 = f6125b3c\ncrc 3 = 63af0a61\ngpt_head->header_crc32 = 0x5b727ca2\nGPT----part num 8---\ngpt_entry: 128\ngpt_header: 92\nGPT:boot-resource: 12000         137c5\nGPT:env         : 137c6         139bd\nGPT:env-redund  : 139be         13bb5\nGPT:boot        : 13bb6         159b5\nGPT:rootfs      : 159b6         27ac5\nGPT:private     : 27ac6         2a2c5\nGPT:rootfs_data : 2a2c6         2cac5\nGPT:UDISK       : 2cac6         ffffffde\nupdate gpt file ok\nupdate mbr file ok\ntemp = 20\nmbr count = 4 total_sectors = 15269888 logic_offset = 40960\n\npartitation file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/sys_partition.bin\nmbr_name file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/sunxi_mbr.fex\ndownload_name file Path=/home/ubuntu/tina-d1-h/out/t113-100ask/image/dlinfo.fex\n\nmbr size = 16384\nmbr magic softw411\ndisk name=boot-resource\ndisk name=env\ndisk name=env-redund\ndisk name=boot\ndisk name=rootfs\ndisk name=private\ndisk name=rootfs_data\ndisk name=UDISK\nthis is not a partition key\nupdate_for_part_info 0\ncrc 0 = 619ffc7\ncrc 1 = 93a4ae9a\ncrc 2 = f6125b3c\ncrc 3 = 63af0a61\ngpt_head->header_crc32 = 0xc176d530\nGPT----part num 8---\ngpt_entry: 128\ngpt_header: 92\nGPT:boot-resource: 12000         137c5\nGPT:env         : 137c6         139bd\nGPT:env-redund  : 139be         13bb5\nGPT:boot        : 13bb6         159b5\nGPT:rootfs      : 159b6         27ac5\nGPT:private     : 27ac6         2a2c5\nGPT:rootfs_data : 2a2c6         2cac5\nGPT:UDISK       : 2cac6         e8ffde\nupdate gpt file ok\nupdate mbr file ok\n====================================\nshow "sys_partition_for_dragon.fex" message\n------------------------------------\n  [mbr]\n  mbr_size  : 16384 Kbyte\n------------------------------------\n  partition_name  : boot-resource\n  partition_size  : 6086\n  downloadfile  : boot-resource.fex\n  boot-resource.fex size : 2.0M byte\n------------------------------------\n  partition_name  : env\n  partition_size  : 504\n  downloadfile  : env.fex\n  env.fex size : 128K byte\n------------------------------------\n  partition_name  : env-redund\n  partition_size  : 504\n  downloadfile  : env.fex\n  env.fex size : 128K byte\n------------------------------------\n  partition_name  : boot\n  partition_size  : 7680\n  downloadfile  : boot.fex\n  boot.fex -> /home/ubuntu/tina-d1-h/out/t113-100ask/boot.img\n  boot.img size : 3.7M byte\n------------------------------------\n  partition_name  : rootfs\n  partition_size  : 74000\n  downloadfile  : rootfs.fex\n  rootfs.fex -> /home/ubuntu/tina-d1-h/out/t113-100ask/rootfs.img\n  rootfs.img size : 37M byte\n------------------------------------\n  partition_name  : private\n  partition_size  : 10240\n------------------------------------\n  partition_name  : rootfs_data\n  partition_size  : 10240\n------------------------------------\n  partition_name  : UDISK\n  partition_name  : rootfs_data\n  partition_size  : 10240\n------------------------------------\n/home/ubuntu/tina-d1-h/out/host/bin/\n/home/ubuntu/tina-d1-h/out/t113-100ask/image\nBegin Parse sys_partion.fex\nAdd partion boot-resource.fex BOOT-RESOURCE_FEX\nAdd partion very boot-resource.fex BOOT-RESOURCE_FEX\nFilePath: boot-resource.fex\nFileLength=1fb400Add partion env.fex ENV_FEX000000000\nAdd partion very env.fex ENV_FEX000000000\nFilePath: env.fex\nFileLength=20000Add partion env.fex ENV_FEX000000000\nAdd partion very env.fex ENV_FEX000000000\nFilePath: env.fex\nFileLength=20000Add partion boot.fex BOOT_FEX00000000\nAdd partion very boot.fex BOOT_FEX00000000\nFilePath: boot.fex\nFileLength=3ad800Add partion rootfs.fex ROOTFS_FEX000000\nAdd partion very rootfs.fex ROOTFS_FEX000000\nFilePath: rootfs.fex\nFileLength=2420000BuildImg 0\nDragon execute image.cfg SUCCESS !\n----------image is for nand/emmc----------\n----------image is at----------\n\n/home/ubuntu/tina-d1-h/out/t113-100ask/tina_t113-100ask_uart3.img\n\npack finish\nubuntu@ubuntu1804:~/tina-d1-h$\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u62f7\u8d1d\u6b64\u955c\u50cf\u81f3Windows\u7cfb\u7edf  /home/ubuntu/tina-d1-h/out/t113-100ask/tina_t113-100ask_uart3.img  \u4f7f\u7528 PhoenixSuit\u70e7\u5f55\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u542f\u52a8\u5f00\u53d1\u677f\u67e5\u770b",children:"\u542f\u52a8\u5f00\u53d1\u677f\u67e5\u770b"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331191513392",src:t(22525).Z+"",width:"1916",height:"861"})}),"\n",(0,o.jsx)(e.h3,{id:"\u8c03\u6574\u56fe\u50cf\u5927\u5c0f",children:"\u8c03\u6574\u56fe\u50cf\u5927\u5c0f"}),"\n",(0,o.jsx)(e.p,{children:"7\u5bf8\u5c4f\u5e55\u5c3a\u5bf8\u662f1024x600\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u505a\u4e00\u4e2a 2/1\u5c3a\u5bf8\u5927\u5c0f\u7684\u56fe\u50cf\uff0c\u5e76\u4e14\u80cc\u666f\u8272\u6539\u4e3a \u9ed1\u8272\uff0c\u4e5f\u5c31\u662f\u9700\u8981\u505a\u4e00\u4e2a 512 x 300\u5206\u8fa8\u7387\u5de6\u53f3\u7684\u9ed1\u8272\u80cc\u666f logo \u56fe\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u7c7b\u4f3c\u4e0b\u56fe\u6240\u793a\uff0c\u53ea\u6709 312KB"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"bootlogo-24bit",src:t(79612).Z+"",width:"400",height:"200"})}),"\n",(0,o.jsx)(e.p,{children:"\u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u539f\u6765\u7684 bootlogo.bmp \u66ff\u6362\uff0c\u7136\u540e\u7f16\u8bd1\u70e7\u5f55\u8fdb\u53bb\uff0c\u542f\u52a8\u7cfb\u7edf\u53ef\u4ee5\u770b\u5230 \u65b0\u7684\u56fe\u7247 \u52a0\u8f7d\u542f\u52a8\u90fd\u5f88\u5feb\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"image-20230331192602059",src:t(26037).Z+"",width:"1374",height:"868"})})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},84274:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/Snipaste_2023-03-31_19-04-16-b38d197653ca3b673d3961dadfff39ce.png"},79612:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/bootlogo-24bit-a0798d036d1055ddb58a1d9c7765e22f.bmp"},92168:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331190636951-a30ff93ebbd0b2bef3b575d6d093811e.png"},85116:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331190710565-895e7ea43c8bf44d980456f994ff1400.png"},23617:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331190800358-e4607aaad49f270db663c0bd835a53da.png"},47386:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331190943659-43583a2f4b1a29acd4d291731a0c4c53.png"},7558:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331191011867-28d5b73a2b1a4003d1726d389001d288.png"},22525:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331191513392-ea26e634198bc75c15c5ec879c5c88b6.png"},26037:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-20230331192602059-8fb0c5d1f2006eb588e9b0784c20eaba.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);