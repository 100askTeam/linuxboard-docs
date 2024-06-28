"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2958],{3029:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=r(5893),s=r(1151);const t={sidebar_position:5},u="WIFI\u6295\u5c4f",a={id:"D1h-DualDisplay/part6/WIFIScreenProjection",title:"WIFI\u6295\u5c4f",description:"\u53c2\u8003\u54ea\u5412D1\u7f16\u8bd1\u914d\u7f6eDLNA\u5ba2\u6237\u7aef\u8fdb\u884cB\u7ad9\u6295\u5c4f / \u5168\u5fd7 SOC / WhyCan Forum(\u54c7\u9177\u5f00\u53d1\u8005\u793e\u533a)\u5b9e\u73b0wifi\u6295\u5c4f\u529f\u80fd\u3002",source:"@site/docs/D1h-DualDisplay/part6/05-WIFIScreenProjection.md",sourceDirName:"D1h-DualDisplay/part6",slug:"/D1h-DualDisplay/part6/WIFIScreenProjection",permalink:"/docs/D1h-DualDisplay/part6/WIFIScreenProjection",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/D1h-DualDisplay/part6/05-WIFIScreenProjection.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"d1hdSidebar",previous:{title:"\u7ea2\u5916\u63a7\u5236LVGL\u754c\u9762\u5207\u6362",permalink:"/docs/D1h-DualDisplay/part6/InfraredControlLVGLInterfaceSwitching"},next:{title:"LVGLv9.1.0\u79fb\u690d",permalink:"/docs/D1h-DualDisplay/part6/LVGLv9.1.0Porting"}},c={},o=[{value:"1. \u5e38\u89c1\u7684\u6295\u5c4f\u534f\u8bae",id:"1-\u5e38\u89c1\u7684\u6295\u5c4f\u534f\u8bae",level:2},{value:"2. \u914d\u7f6eDLNA\u5ba2\u6237\u7aef",id:"2-\u914d\u7f6edlna\u5ba2\u6237\u7aef",level:2},{value:"2.1 \u83b7\u53d6\u6e90\u7801\u8d44\u6599",id:"21-\u83b7\u53d6\u6e90\u7801\u8d44\u6599",level:3},{value:"2.2 \u4ea4\u53c9\u7f16\u8bd1",id:"22-\u4ea4\u53c9\u7f16\u8bd1",level:3},{value:"3. \u6d4b\u8bd5\u6295\u5c4f\u529f\u80fd",id:"3-\u6d4b\u8bd5\u6295\u5c4f\u529f\u80fd",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"wifi\u6295\u5c4f",children:"WIFI\u6295\u5c4f"}),"\n",(0,i.jsxs)(e.p,{children:["\u53c2\u8003",(0,i.jsx)(e.a,{href:"https://whycan.com/p_97704.html",children:"\u54ea\u5412D1\u7f16\u8bd1\u914d\u7f6eDLNA\u5ba2\u6237\u7aef\u8fdb\u884cB\u7ad9\u6295\u5c4f / \u5168\u5fd7 SOC / WhyCan Forum(\u54c7\u9177\u5f00\u53d1\u8005\u793e\u533a)"}),"\u5b9e\u73b0wifi\u6295\u5c4f\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"1-\u5e38\u89c1\u7684\u6295\u5c4f\u534f\u8bae",children:"1. \u5e38\u89c1\u7684\u6295\u5c4f\u534f\u8bae"}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u73b0\u8be5\u529f\u80fd\u524d\uff0c\u53ef\u4ee5\u4e86\u89e3\u4e00\u4e0b\u5e38\u89c1\u7684\u6295\u5c4f\u534f\u8bae\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"AirPlay"}),"\uff1a\u7531\u82f9\u679c\u516c\u53f8\u5f00\u53d1\u7684\u65e0\u7ebf\u663e\u793a\u534f\u8bae\uff0c\u5141\u8bb8\u5c06iPhone\u3001iPad\u6216Mac\u7684\u5c4f\u5e55\u5185\u5bb9\u6295\u5c4f\u5230Apple TV\u6216\u652f\u6301AirPlay\u7684Android\u7535\u89c6\u76d2\u5b50\u4e0a\u3002AirPlay\u652f\u6301\u955c\u50cf\u6a21\u5f0f\u548c\u6d41\u6a21\u5f0f\u4e24\u79cd\u5de5\u4f5c\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Miracast"}),"\uff1a\u7531Wi-Fi\u8054\u76df\u5236\u5b9a\u7684Wi-Fi\u6295\u5c4f\u884c\u4e1a\u6807\u51c6\uff0c\u57fa\u4e8eWi-Fi Direct\u6280\u672f\uff0c\u53ef\u4ee5\u5728Android 4.2\u53ca\u4ee5\u4e0a\u7248\u672c\u548cWindows 8.1\u6216Windows 10\u7cfb\u7edf\u4e2d\u4f7f\u7528\uff0c\u5b9e\u73b0\u65e0\u7ebf\u8fde\u63a5\u548c\u6570\u636e\u4f20\u8f93\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"DLNA"}),"\uff1a\u7531\u6570\u5b57\u751f\u6d3b\u7f51\u7edc\u8054\u76df\uff08Digital Living Network Alliance\uff09\u521b\u5efa\u7684\u6295\u5c4f\u534f\u8bae\uff0c\u57fa\u4e8eUPnP\u534f\u8bae\uff0c\u4e3b\u8981\u7528\u4e8e\u5728\u8bbe\u5907\u4e4b\u95f4\u5171\u4eab\u591a\u5a92\u4f53\u5185\u5bb9\u3002DLNA\u4e0d\u662f\u65e0\u7ebf\u663e\u793a\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u662f\u5728\u4e00\u53f0\u8bbe\u5907\u4e0a\u83b7\u53d6\u5185\u5bb9\u5e76\u5728\u53e6\u4e00\u53f0\u8bbe\u5907\u4e0a\u64ad\u653e\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Chromecast"}),"\uff1a\u7531\u8c37\u6b4c\u5f00\u53d1\u7684\u65e0\u7ebf\u6295\u5c4f\u6280\u672f\uff0c\u4e0eAirPlay\u76f8\u6bd4\uff0cChromecast\u7684\u4f53\u9a8c\u66f4\u63a5\u8fd1\u4e8eDLNA\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"WiDi"}),"\uff1a\u652f\u6301Windows 10\u7b14\u8bb0\u672c\u7684\u65e0\u7ebf\u6295\u5c4f\u65b9\u5f0f\uff0c\u65e0\u9700\u5b89\u88c5\u8f6f\u4ef6\u5373\u53ef\u5b9e\u73b0\u65e0\u7ebf\u6295\u5c4f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\u914d\u7f6edlna\u5ba2\u6237\u7aef",children:"2. \u914d\u7f6eDLNA\u5ba2\u6237\u7aef"}),"\n",(0,i.jsx)(e.p,{children:"DLNA\u5ba2\u6237\u7aef\u53ef\u4ee5\u63a5\u6536\u5e76\u64ad\u653e\u4ee5DLNA\u534f\u8bae\u63a8\u9001\u7684\u6d41\u5a92\u4f53\uff0c\u800cB\u7ad9\u53ef\u4ee5\u5c06\u89c6\u9891\u901a\u8fc7DLNA\u534f\u8bae\u6765\u63a8\u9001\u3002\n\u6240\u4ee5\u9700\u8981\u7ed9D1h\u5f00\u53d1\u677f\u914d\u7f6eDLNA\u5ba2\u6237\u7aef\uff0c\u5c31\u53ef\u4ee5\u5728\u540c\u4e00\u7f51\u7edc\u4e0b\u5b9e\u73b0B\u7ad9\u6295\u5c4f\u4e86\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6545\u4e8b\u60c5\u8282\uff1a"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6709\u4e2a\u535a\u4e3b\u4f7f\u7528",(0,i.jsx)(e.code,{children:"gmrender-resurrect"}),"\u7528\u6765\u505aDLNA\u5ba2\u6237\u7aef\u3002\n",(0,i.jsx)(e.code,{children:"gmrender-resurrect"}),"\u662f\u57fa\u4e8e GStreamer \u6846\u67b6\u5f00\u53d1\u7684\u9879\u76ee\uff0c\u4e13\u95e8\u7528\u4e8e\u5b9e\u73b0 DLNA/UPnP-AV \u5a92\u4f53\u64ad\u653e\u529f\u80fd\u3002\nGStreamer\u662f\u4e00\u4e2a\u5168\u9762\u7684\u591a\u5a92\u4f53\u6846\u67b6\uff0c\u63d0\u4f9b\u4e86\u4e00\u6574\u5957\u5de5\u5177\u548c\u7ec4\u4ef6\u6765\u5904\u7406\u5404\u79cd\u5a92\u4f53\u4efb\u52a1\u3002\n\u4f46\u662f\u535a\u4e3b\u53d1\u73b0\u4f7f\u7528GStreamer\u6765\u89e3\u7801B\u7ad9\u6295\u5c4f\u7684\u89c6\u9891\u4f1a\u51fa\u73b0\u95ea\u5c4f\u548c\u4e0d\u80fd\u81ea\u52a8\u786c\u4ef6\u7f29\u653e\u95ee\u9898\u3002\n\u4e8e\u662f\u5c31\u5bf9",(0,i.jsx)(e.code,{children:"gmrender-resurrect"}),"\u8fdb\u884c\u4e86\u9b54\u6539\uff0c\u628aGStreamer \u6539\u6210\u4e86tina\u81ea\u5e26\u7684tplayer\u6765\u64ad\u653e\u89c6\u9891\u3002\n",(0,i.jsx)(e.code,{children:"gmrender-resurrect"}),"\u81ea\u6b64\u4fbf\u6210\u4e86",(0,i.jsx)(e.code,{children:"tprender"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728tina\u7684package\u91cc\u9762\u6ca1\u6709\u76f8\u5173\u7684\u5e93\uff0c\u4e0b\u9762\u5c06\u624b\u52a8\u4ea4\u53c9\u7f16\u8bd1",(0,i.jsx)(e.code,{children:"tprender"}),"\u548cDLNA\u7684\u5e95\u5c42upnp\u5e93\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"21-\u83b7\u53d6\u6e90\u7801\u8d44\u6599",children:"2.1 \u83b7\u53d6\u6e90\u7801\u8d44\u6599"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u767e\u95ee\u7f51\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u6e90\u7801\u548c\u8865\u4e01\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/DongshanPI/DongshannezhaSTU_DLNA_ScreenProjection.git",children:"https://github.com/DongshanPI/DongshannezhaSTU_DLNA_ScreenProjection.git"})]}),"\n",(0,i.jsx)(e.p,{children:"\u8fdb\u5165ubuntu\uff0c\u628a\u6e90\u7801\u514b\u9686\u4e0b\u6765\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/DongshannezhaSTU_DLNA_ScreenProjection.git\nubuntu@ubuntu1804:~$ tree DongshannezhaSTU_DLNA_ScreenProjection -L 1\nDongshannezhaSTU_DLNA_ScreenProjection\n\u251c\u2500\u2500 libupnp-1.14.12\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tprender\n\n2 directories, 1 file\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4ea4\u53c9\u7f16\u8bd1\u6e90\u7801\u4e4b\u524d\uff0c\u5148\u628a\u8865\u4e01\u4e5f\u514b\u9686\u4e0b\u6765\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/Tina-sdk_dongshannezhastu\nubuntu@ubuntu1804:~$ tree Tina-sdk_dongshannezhastu -L 1\nTina-sdk_dongshannezhastu\n\u251c\u2500\u2500 config_gstreamer\n\u251c\u2500\u2500 device\n\u251c\u2500\u2500 package\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 target\n\n3 directories, 2 files\nubuntu@ubuntu1804:~$ cd tina-d1-h/\nubuntu@ubuntu1804:~/tina-d1-h$ source build/envsetup.sh \nSetup env done! Please run lunch next.\nubuntu@ubuntu1804:~/tina-d1-h$ lunch\n\nYou're building on Linux\n\nLunch menu... pick a combo:\n     1. d1-h_nezha_min-tina\n     2. d1-h_nezha-tina\n     3. d1s_nezha-tina\n\nWhich would you like? [Default d1-h_nezha]: 2\n============================================\nTINA_BUILD_TOP=/home/ubuntu/tina-d1-h\nTINA_TARGET_ARCH=riscv\nTARGET_PRODUCT=d1-h_nezha\nTARGET_PLATFORM=d1-h\nTARGET_BOARD=d1-h-nezha\nTARGET_PLAN=nezha\nTARGET_BUILD_VARIANT=tina\nTARGET_BUILD_TYPE=release\nTARGET_KERNEL_VERSION=5.4\nTARGET_UBOOT=u-boot-2018\nTARGET_CHIP=sun20iw1p1\n============================================\nclean buildserver\n[2] 90293\nubuntu@ubuntu1804:~/tina-d1-h$ rm .config\nubuntu@ubuntu1804:~/tina-d1-h$ rm out/ -rf\nubuntu@ubuntu1804:~/tina-d1-h$ cp ../Tina-sdk_dongshannezhastu/* -rfvd ./\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u6267\u884c\u4e86",(0,i.jsx)(e.code,{children:"rm .config"}),"\u548c",(0,i.jsx)(e.code,{children:"rm out/ -rf"}),"\uff0c\u540e\u7eed\u70e7\u5f55\u7cfb\u7edf\u9700\u8981wifi\u529f\u80fd\uff0c\u5c31\u5f97\u91cd\u65b0\u6839\u636e\u4e4b\u524d\u7684\u6587\u7ae0",(0,i.jsx)(e.code,{children:"\u91cd\u65b0\u914d\u7f6e"}),"wifi\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u62f7\u8d1d\u5b8c\u6210\u540e\uff0c\u6267\u884c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h$ cp config_gstreamer.txt .config\nubuntu@ubuntu1804:~/tina-d1-h$ make\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u8bb0\u5f97\u8fdb\u884c\u6253\u5305",(0,i.jsx)(e.code,{children:"pack"}),"\u64cd\u4f5c\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h$ pack\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5426\u5219out/\u65e0\u6cd5\u66f4\u65b0\u3002\u5c31\u4f1a\u5f71\u54cd\u5230",(0,i.jsx)(e.code,{children:"tprender"}),"\u7684\u7f16\u8bd1\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"22-\u4ea4\u53c9\u7f16\u8bd1",children:"2.2 \u4ea4\u53c9\u7f16\u8bd1"}),"\n",(0,i.jsxs)(e.p,{children:["\u65b0\u5efa\u4e00\u4e2a\u7ec8\u7aef\uff0c\u8fdb\u5165",(0,i.jsx)(e.code,{children:"DongshannezhaSTU_DLNA_ScreenProjection"}),"\u76ee\u5f55\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u4e34\u65f6\u4ea4\u53c9\u7f16\u8bd1\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection$ export PATH=$PATH:/home/ubuntu/tina-d1-h/prebuilt/gcc/linux-x86/riscv/toolchain-thead-glibc/riscv64-glibc-gcc-thead_20200702/bin\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection$ cd libupnp-1.14.12/\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ ./configure --host=riscv64-unknown-linux-gnu\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ make\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ mkdir tmp\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ make install DESTDIR=$(pwd)/tmp/\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ ls -lh tmp/usr/local/lib\ntotal 8.4M\n-rw-r--r-- 1 ubuntu ubuntu 1.1M Jun 20 23:34 libixml.a\n-rwxr-xr-x 1 ubuntu ubuntu  929 Jun 20 23:34 libixml.la\nlrwxrwxrwx 1 ubuntu ubuntu   17 Jun 20 23:34 libixml.so -> libixml.so.11.1.2\nlrwxrwxrwx 1 ubuntu ubuntu   17 Jun 20 23:34 libixml.so.11 -> libixml.so.11.1.2\n-rwxr-xr-x 1 ubuntu ubuntu 205K Jun 20 23:34 libixml.so.11.1.2\n-rw-r--r-- 1 ubuntu ubuntu 6.0M Jun 20 23:34 libupnp.a\n-rwxr-xr-x 1 ubuntu ubuntu  955 Jun 20 23:34 libupnp.la\nlrwxrwxrwx 1 ubuntu ubuntu   17 Jun 20 23:34 libupnp.so -> libupnp.so.17.1.3\nlrwxrwxrwx 1 ubuntu ubuntu   17 Jun 20 23:34 libupnp.so.17 -> libupnp.so.17.1.3\n-rwxr-xr-x 1 ubuntu ubuntu 1.2M Jun 20 23:34 libupnp.so.17.1.3\ndrwxrwxr-x 2 ubuntu ubuntu 4.0K Jun 20 23:34 pkgconfig\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ \n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5c31\u53ef\u4ee5\u5728\u5f53\u524d\u7684tmp/\u76ee\u5f55\u4e0b\u5f97\u5230\u76f8\u5e94\u7684\u52a8\u6001\u5e93\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fdb\u5165tprender/\u76ee\u5f55\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/libupnp-1.14.12$ cd ../tprender/\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ cp ../libupnp-1.14.12/tmp/usr/local/lib/libixml.so.11.1.2 libs/libixml.so\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ cp ../libupnp-1.14.12/tmp/usr/local/lib/libixml.so.11.1.2 libs/libixml.so.11\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ cp ../libupnp-1.14.12/tmp/usr/local/lib/libupnp.so.17.1.3 libs/libupnp.so\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ cp ../libupnp-1.14.12/tmp/usr/local/lib/libupnp.so.17.1.3 libs/libupnp.so.17\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u6539CMakeLists.txt\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ gedit CMakeLists.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image-20240621152444609",src:r(9085).Z+"",width:"1842",height:"647"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4fdd\u5b58\u9000\u51fa\uff0c\u7f16\u8bd1\u5373\u53ef\u5f97\u5230\u53ef\u6267\u884c\u7a0b\u5e8f",(0,i.jsx)(e.code,{children:"tprender"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ rm -rf CMakeFiles cmake_install.cmake  CMakeCache.txt tags\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ cmake .\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ make \nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ file tprender\ntprender: ELF 64-bit LSB executable, UCB RISC-V, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64xthead-lp64d.so.1, for GNU/Linux 4.15.0, with debug_info, not stripped\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ \n"})}),"\n",(0,i.jsx)(e.h2,{id:"3-\u6d4b\u8bd5\u6295\u5c4f\u529f\u80fd",children:"3. \u6d4b\u8bd5\u6295\u5c4f\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u626b\u63cf\u9644\u8fd1wifi\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/# wifi_scan_results_test\n\n*********************************\n***Start scan!***\n*********************************\nbssid / frequency / signal level / flags / ssid\n94:d9:b3:b7:c9:0a       2442    -36     [WPA-PSK-CCMP+TKIP][WPA2-PSK-CCMP+TKIP][ESS]    Programmers\nd6:84:09:1e:9b:95       2412    -59     [WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]      Guest_An\nd4:84:09:1d:9b:95       2412    -61     [WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]      Voform\n4a:0e:ec:50:95:83       2437    -62     [WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]      1415\\xe5\\xa4\\x87\\xe7\\x94\\xa8\n48:0e:ec:50:95:83       2437    -66     [WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]      A1415\nf0:92:b4:a6:03:91       2452    -38     [WPA-PSK-CCMP+TKIP][WPA2-PSK-CCMP+TKIP][ESS]    ChinaNet-kRAH\na4:a9:30:ba:83:16       2457    -51     [WPA2-PSK-CCMP][WPS][ESS]       wifi1\n1c:68:7e:bc:25:0a       2412    -58     [WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]      \\xe9\\xa1\\xba\\xe6\\x88\\x90\\xe5\\x8a\\xb3\\xe5\\x8a\\xa1\n34:12:f9:87:a6:48       2427    -61     [WPA2-PSK-CCMP][WPS][ESS]       Redmi_83D1\n34:12:f9:87:a6:49       2427    -62     [WPA2-PSK-CCMP][ESS]    \\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\na4:39:b3:73:ac:74       2427    -63     [WPA2-PSK-CCMP][WPS][ESS]       Redmi_83D1\nb4:77:48:a7:52:45       2437    -63     [WPA2-PSK-CCMP][ESS]    VANTEN\n98:0d:51:10:78:31       2437    -70     [WPA2-PSK-CCMP][WPS][ESS]\naa:a9:30:ba:83:16       2457    -61     [ESS]\na6:39:b3:63:ac:74       2427    -62     [ESS]\n******************************\nWifi get_scan_results: Success!\n******************************\nroot@TinaLinux:/#\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8fd9\u91cc\u51c6\u5907\u7528\u624b\u673a\u7684B\u7ad9\u6765\u8fdb\u884c\u6295\u5c4f\uff0c\u5f00\u53d1\u677f\u9700\u8981\u8fde\u63a5\u548c\u624b\u673a\u540c\u4e00\u4e2awifi\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/# wifi_connect_ap_test <wifi\u540d> <wifi\u5bc6\u7801>\nroot@TinaLinux:/# ifconfig\nbr-lan    Link encap:Ethernet  HWaddr 46:6C:D2:EA:24:03\n          inet addr:192.168.100.100  Bcast:192.168.100.255  Mask:255.255.255.0\n          inet6 addr: fd18:7ee6:608a::1/60 Scope:Global\n          UP BROADCAST MULTICAST  MTU:1500  Metric:1\n          RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n\nlo        Link encap:Local Loopback\n          inet addr:127.0.0.1  Mask:255.0.0.0\n          inet6 addr: ::1/128 Scope:Host\n          UP LOOPBACK RUNNING  MTU:65536  Metric:1\n          RX packets:3 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:3 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:108 (108.0 B)  TX bytes:108 (108.0 B)\n\nwlan0     Link encap:Ethernet  HWaddr 00:65:D8:1D:B6:8E\n          inet addr:192.168.0.127  Bcast:192.168.0.255  Mask:255.255.255.0\n          inet6 addr: fe80::265:d8ff:fe1d:b68e/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:103820 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:18352 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:69417258 (66.2 MiB)  TX bytes:3751190 (3.5 MiB)\n\nroot@TinaLinux:/#\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fde\u63a5\u6210\u529f\u540e\uff0cwlan0\u8282\u70b9\u4f1a\u6709ip\u5730\u5740\u3002\u6d4b\u8bd5wifi\u529f\u80fd\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/# ping www.baidu.com\nPING www.baidu.com (183.2.172.185): 56 data bytes\n64 bytes from 183.2.172.185: seq=0 ttl=52 time=13.684 ms\n64 bytes from 183.2.172.185: seq=1 ttl=52 time=18.239 ms\n64 bytes from 183.2.172.185: seq=2 ttl=52 time=14.803 ms\n^C\n--- www.baidu.com ping statistics ---\n3 packets transmitted, 3 packets received, 0% packet loss\nround-trip min/avg/max = 13.684/15.575/18.239 ms\nroot@TinaLinux:/#\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728ubuntu\u4e0a\uff0c\u63a8\u9001",(0,i.jsx)(e.code,{children:"\u53ef\u6267\u884c\u7a0b\u5e8f"}),"\u4e0e",(0,i.jsx)(e.code,{children:"\u52a8\u6001\u5e93"}),"\u5230D1h\u5f00\u53d1\u677f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$ adb push libs/ tprender /root/\nlibs/: 4 files pushed. 1.4 MB/s (2738288 bytes in 1.887s)\ntprender: 1 file pushed. 1.3 MB/s (116984 bytes in 0.087s)\n5 files pushed. 1.3 MB/s (2855272 bytes in 2.143s)\nubuntu@ubuntu1804:~/DongshannezhaSTU_DLNA_ScreenProjection/tprender$\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5f00\u53d1\u677f\u4e0a\u8fdb\u5165/root\u76ee\u5f55\uff0c\u6267\u884c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:~# ./tprender -f \"D1-H\"\nWARNING: awplayer <cdx_log_set_level:30>: cdx Set log level to 6\nINFO   : cedarc <CedarPluginVDInit:79>: register h264 decoder success!\nINFO   : cedarc <CedarPluginVDInit:84>: register mjpeg decoder success!\nINFO   : cedarc <CedarPluginVDInit:86>: register mpeg2 decoder success!\nINFO   : cedarc <CedarPluginVDInit:92>: register mpeg4dx decoder success!\nINFO   : cedarc <CedarPluginVDInit:79>: register mpeg4H263 decoder success!\nINFO   : cedarc <CedarPluginVDInit:90>: register mpeg4Normal decoder success!\nINFO   : cedarc <CedarPluginVDInit:74>: register vc1 decoder success!\nINFO   : cedarc <CedarPluginVDInit:85>: register h265 decoder success!\ngmrender-resurrect started [ gmediarender 0.0.9 (libupnp-1.14.10; glib-2.50.1; withou[14742.072053] [SNDCODEC][sunxi_card_hw_params][620]:stream_flag: 0\nt gstreamer.) ].\nLogging switched off. Enable with --logfile=<filename> (or --logfile=stdout for console)\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> tina_multimedia <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\ntag   : tina3.5\nbranch: tina-dev\ndate  : Mon Jul 15 19:04:59 2019 +0800\nChange-Id: I5f6c8a88d7b387a312b7744797a0d5f8ab07ee7a\n-------------------------------------------------------------------------------\nxplayer:process message XPLAYER_COMMAND_SET_AUDIOSINK.\nxplayer:process message XPLAYER_COMMAND_SET_SURFACE.\nxplayer:process message XPLAYER_COMMAND_SET_SUBCTRL.\nxplayer:process message XPLAYER_COMMAND_SET_DI.\ndd: writing '/dev/fb0': No space left on device\n32401+0 records in\n32400+0 records out\nERROR [2024-06-21 15:45:10.824354 | webserver] Could not stat './/grender-64x64.png': No such file or directory\nERROR [2024-06-21 15:45:10.824939 | webserver] Could not stat './/grender-128x128.png': No such file or directory\noutput_set_volume\nReady for rendering.\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6253\u5f00\u624b\u673aB\u7ad9APP\uff0c\u5728\u6295\u5c4f\u529f\u80fd\u4e0a\u5c31\u53ef\u4ee5\u770b\u89c1",(0,i.jsx)(e.code,{children:"D1-H"}),"\u8fd9\u4e2a\u8bbe\u5907\u4e86\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image-20240621154740447",src:r(6617).Z+"",width:"408",height:"898"})}),"\n",(0,i.jsxs)(e.p,{children:["\u70b9\u51fb",(0,i.jsx)(e.code,{children:"D1-H"}),"\u5373\u53ef\u5728hdmi\u5c4f\u5e55\u4e0a\u8fdb\u884cwifi\u6295\u5c4f\u4e86\u3002"]})]})}function l(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},9085:(n,e,r)=>{r.d(e,{Z:()=>i});const i=r.p+"assets/images/image-20240621152444609-a6c1689a5980d5625b98cc590940d8e2.png"},6617:(n,e,r)=>{r.d(e,{Z:()=>i});const i=r.p+"assets/images/image-20240621154740447-beaccc1434c6e007e983c2517a9d7041.png"},1151:(n,e,r)=>{r.d(e,{Z:()=>a,a:()=>u});var i=r(7294);const s={},t=i.createContext(s);function u(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:u(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);