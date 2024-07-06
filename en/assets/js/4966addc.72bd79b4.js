"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3597],{3601:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=e(5893),t=e(1151);const r={sidebar_position:14},a="TinyVision \u4f7f\u7528 SyterKit \u542f\u52a8 Linux 6.7 \u4e3b\u7ebf\u5185\u6838",c={id:"TinyVision/TinyVision_SysterKitBuringKernel",title:"TinyVision \u4f7f\u7528 SyterKit \u542f\u52a8 Linux 6.7 \u4e3b\u7ebf\u5185\u6838",description:"SyterKit \u662f\u4e00\u4e2a\u7eaf\u88f8\u673a\u6846\u67b6\uff0c\u7528\u4e8e TinyVision \u6216\u8005\u5176\u4ed6 v851se/v851s/v851s3/v853 \u7b49\u82af\u7247\u7684\u5f00\u53d1\u677f\uff0cSyterKit \u4f7f\u7528 CMake \u4f5c\u4e3a\u6784\u5efa\u7cfb\u7edf\u6784\u5efa\uff0c\u652f\u6301\u591a\u79cd\u5e94\u7528\u4e0e\u591a\u79cd\u5916\u8bbe\u9a71\u52a8\u3002\u540c\u65f6 SyterKit \u4e5f\u5177\u6709\u542f\u52a8\u5f15\u5bfc\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u66ff\u4ee3 U-Boot \u5b9e\u73b0\u5feb\u901f\u542f\u52a8",source:"@site/docs/TinyVision/14-TinyVision_SysterKitBuringKernel.md",sourceDirName:"TinyVision",slug:"/TinyVision/TinyVision_SysterKitBuringKernel",permalink:"/en/docs/TinyVision/TinyVision_SysterKitBuringKernel",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/14-TinyVision_SysterKitBuringKernel.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"v851seSidebar",previous:{title:"TinyVision \u624b\u52a8\u6784\u5efa Linux 6.1 + Debian 12 \u955c\u50cf",permalink:"/en/docs/TinyVision/TinyVision_BuildDebian"}},l={},d=[{value:"\u83b7\u53d6 SyterKit \u6e90\u7801",id:"\u83b7\u53d6-syterkit-\u6e90\u7801",level:2},{value:"\u4ece\u96f6\u6784\u5efa SyterKit",id:"\u4ece\u96f6\u6784\u5efa-syterkit",level:2},{value:"\u642d\u5efa Kernel \u76f8\u5173\u73af\u5883",id:"\u642d\u5efa-kernel-\u76f8\u5173\u73af\u5883",level:2},{value:"\u79fb\u690d clk \u9a71\u52a8",id:"\u79fb\u690d-clk-\u9a71\u52a8",level:2},{value:"\u79fb\u690d pinctrl \u9a71\u52a8",id:"\u79fb\u690d-pinctrl-\u9a71\u52a8",level:2},{value:"\u7f16\u5199\u8bbe\u5907\u6811",id:"\u7f16\u5199\u8bbe\u5907\u6811",level:2},{value:"\u5b89\u88c5 genimage",id:"\u5b89\u88c5-genimage",level:3},{value:"\u4f7f\u7528 genimage \u6253\u5305\u56fa\u4ef6",id:"\u4f7f\u7528-genimage-\u6253\u5305\u56fa\u4ef6",level:3}];function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"tinyvision-\u4f7f\u7528-syterkit-\u542f\u52a8-linux-67-\u4e3b\u7ebf\u5185\u6838",children:"TinyVision \u4f7f\u7528 SyterKit \u542f\u52a8 Linux 6.7 \u4e3b\u7ebf\u5185\u6838"}),"\n",(0,s.jsx)(i.h1,{id:"syterkit",children:"SyterKit"}),"\n",(0,s.jsx)(i.p,{children:"SyterKit \u662f\u4e00\u4e2a\u7eaf\u88f8\u673a\u6846\u67b6\uff0c\u7528\u4e8e TinyVision \u6216\u8005\u5176\u4ed6 v851se/v851s/v851s3/v853 \u7b49\u82af\u7247\u7684\u5f00\u53d1\u677f\uff0cSyterKit \u4f7f\u7528 CMake \u4f5c\u4e3a\u6784\u5efa\u7cfb\u7edf\u6784\u5efa\uff0c\u652f\u6301\u591a\u79cd\u5e94\u7528\u4e0e\u591a\u79cd\u5916\u8bbe\u9a71\u52a8\u3002\u540c\u65f6 SyterKit \u4e5f\u5177\u6709\u542f\u52a8\u5f15\u5bfc\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u66ff\u4ee3 U-Boot \u5b9e\u73b0\u5feb\u901f\u542f\u52a8"}),"\n",(0,s.jsx)(i.h2,{id:"\u83b7\u53d6-syterkit-\u6e90\u7801",children:"\u83b7\u53d6 SyterKit \u6e90\u7801"}),"\n",(0,s.jsx)(i.p,{children:"SyterKit \u6e90\u7801\u4f4d\u4e8eGitHub\uff0c\u53ef\u4ee5\u524d\u5f80\u4e0b\u8f7d\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git clone https://github.com/YuzukiHD/SyterKit.git\n"})}),"\n",(0,s.jsx)(i.h2,{id:"\u4ece\u96f6\u6784\u5efa-syterkit",children:"\u4ece\u96f6\u6784\u5efa SyterKit"}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u5efa SyterKit \u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5b89\u88c5\u914d\u7f6e\u73af\u5883\u5373\u53ef\u7f16\u8bd1\u3002SyterKit \u9700\u8981\u7684\u8f6f\u4ef6\u5305\u6709\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"gcc-arm-none-eabi"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"CMake"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u4e8e\u5e38\u7528\u7684 Ubuntu \u7cfb\u7edf\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get install gcc-arm-none-eabi cmake build-essential -y\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u7136\u540e\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5b58\u653e\u7f16\u8bd1\u7684\u8f93\u51fa\u6587\u4ef6\uff0c\u5e76\u4e14\u8fdb\u5165\u8fd9\u4e2a\u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"mkdir build\ncd build\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u7136\u540e\u8fd0\u884c\u547d\u4ee4\u7f16\u8bd1 SyterKit"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"cmake ..\nmake\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216174136154.png",alt:"image-20231216174136154"})}),"\n",(0,s.jsxs)(i.p,{children:["\u7f16\u8bd1\u540e\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e ",(0,s.jsx)(i.code,{children:"build/app"})," \u4e2d\uff0c\u8fd9\u91cc\u5305\u62ec SyterKit \u7684\u591a\u79cdAPP\u53ef\u4f9b\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216173846369.png",alt:"image-20231216173846369"})}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,s.jsx)(i.code,{children:"syter_boot"})," \u4f5c\u4e3a\u542f\u52a8\u5f15\u5bfc\u3002\u8fdb\u5165 syter_boot \u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u6587\u4ef6"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216174210790.png",alt:"image-20231216174210790"})}),"\n",(0,s.jsxs)(i.p,{children:["\u7531\u4e8e TinyVision \u662f TF \u5361\u542f\u52a8\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u7528\u5230 ",(0,s.jsx)(i.code,{children:"syter_boot_bin_card.bin"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216174311727.png",alt:"image-20231216174311727"})}),"\n",(0,s.jsx)(i.h1,{id:"\u79fb\u690d-linux-67-\u4e3b\u7ebf",children:"\u79fb\u690d Linux 6.7 \u4e3b\u7ebf"}),"\n",(0,s.jsxs)(i.p,{children:["\u6709\u4e86\u542f\u52a8\u5f15\u5bfc\uff0c\u63a5\u4e0b\u6765\u662f\u79fb\u690d Linux 6.7 \u4e3b\u7ebf\uff0c\u524d\u5f80 ",(0,s.jsx)(i.a,{href:"https://kernel.org/",children:"https://kernel.org/"})," \u627e\u5230 Linux 6.7\uff0c\u9009\u62e9 ",(0,s.jsx)(i.code,{children:"tarball"})," \u4e0b\u8f7d"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216174444070.png",alt:"image-20231216174444070"})}),"\n",(0,s.jsx)(i.p,{children:"\u4e0b\u8f7d\u540e\u89e3\u538b\u7f29"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"tar xvf linux-6.7-rc5.tar.gz\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fdb\u5165 linux 6.7 \u76ee\u5f55\uff0c\u5f00\u59cb\u79fb\u690d\u76f8\u5173\u9a71\u52a8\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u642d\u5efa-kernel-\u76f8\u5173\u73af\u5883",children:"\u642d\u5efa Kernel \u76f8\u5173\u73af\u5883"}),"\n",(0,s.jsx)(i.p,{children:"Kernel \u7f16\u8bd1\u9700\u8981\u4e00\u4e9b\u8f6f\u4ef6\u5305\uff0c\u9700\u8981\u63d0\u524d\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"sudo apt-get update && sudo apt-get install -y gcc-arm-none-eabi gcc-arm-linux-gnueabihf g++-arm-linux-gnueabihf build-essential libncurses5-dev zlib1g-dev gawk flex bison quilt libssl-dev xsltproc libxml-parser-perl mercurial bzr ecj cvs unzip lsof\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\u53ef\u4ee5\u5c1d\u8bd5\u7f16\u8bd1\u4e00\u4e0b\uff0c\u770b\u770b\u80fd\u4e0d\u80fd\u7f16\u8bd1\u901a\u8fc7\uff0c\u5148\u5e94\u7528\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm sunxi_defconfig\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216181640653.png",alt:"image-20231216181640653"})}),"\n",(0,s.jsx)(i.p,{children:"\u7136\u540e\u5c1d\u8bd5\u7f16\u8bd1"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\u53ef\u4ee5\u7528 ",(0,s.jsx)(i.code,{children:"-j32"})," \u6765\u52a0\u901f\u7f16\u8bd1\uff0c",(0,s.jsx)(i.code,{children:"32"})," \u6307\u7684\u662f\u4f7f\u752832\u7ebf\u7a0b\u7f16\u8bd1\uff0c\u4e00\u822ccpu\u6709\u51e0\u4e2a\u6838\u5fc3\u5c31\u8bbe\u7f6e\u51e0\u7ebf\u7a0b"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm -j32\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u6b63\u5e38\u7f16\u8bd1"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216183011911.png",alt:"image-20231216183011911"})}),"\n",(0,s.jsx)(i.h2,{id:"\u79fb\u690d-clk-\u9a71\u52a8",children:"\u79fb\u690d clk \u9a71\u52a8"}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u91cc\u63d0\u4f9b\u5df2\u7ecf\u9002\u914d\u4fee\u6539\u540e\u7684\u9a71\u52a8\uff1a",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver",children:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver"})," \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/bsp/drivers/clk",children:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/bsp/drivers/clk"})," \u4e2d\u7684\u9a71\u52a8\u79fb\u690d\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u8fdb\u5165\u6587\u4ef6\u5939 ",(0,s.jsx)(i.code,{children:"include/dt-bindings/clock/"})," \u65b0\u5efa\u6587\u4ef6 ",(0,s.jsx)(i.code,{children:"sun8i-v851se-ccu.h"})," \uff0c\u5c06 CLK \u586b\u5165"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216182350741.png",alt:"image-20231216182350741"})}),"\n",(0,s.jsxs)(i.p,{children:["\u8fdb\u5165 ",(0,s.jsx)(i.code,{children:"include/dt-bindings/reset"})," \u65b0\u5efa\u6587\u4ef6 ",(0,s.jsx)(i.code,{children:"sun8i-v851se-ccu.h"})," \u5c06 RST \u586b\u5165"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216182941392.png",alt:"image-20231216182941392"})}),"\n",(0,s.jsxs)(i.p,{children:["\u8fdb\u5165 ",(0,s.jsx)(i.code,{children:"drivers/clk/sunxi-ng"})," \u627e\u5230 ",(0,s.jsx)(i.code,{children:"sunxi-ng"})," clk \u9a71\u52a8\uff0c\u590d\u5236\u6587\u4ef6",(0,s.jsx)(i.code,{children:"ccu-sun20i-d1.c"})," \u548c ",(0,s.jsx)(i.code,{children:"ccu-sun20i-d1.h"})," \u6587\u4ef6\u5e76\u6539\u540d\u4e3a ",(0,s.jsx)(i.code,{children:"ccu-sun8i-v851se.c"})," \uff0c",(0,s.jsx)(i.code,{children:"ccu-sun8i-v851se.h"})," \u4f5c\u4e3a\u6a21\u677f\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216180413415.png",alt:"image-20231216180413415"})}),"\n",(0,s.jsxs)(i.p,{children:["\u5c06\u6587\u4ef6\u4e2d\u7684 ",(0,s.jsx)(i.code,{children:"SUN20I_D1"})," \u6539\u4e3a ",(0,s.jsx)(i.code,{children:"SUN8I_V851SE"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216180653502.png",alt:"image-20231216180653502"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6253\u5f00\u82af\u7247\u6570\u636e\u624b\u518c",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/blob/main/docs/hardware/TinyVision/datasheet/V851SX_Datasheet_V1.2.pdf",children:"V851SX_Datasheet_V1.2.pdf"}),"\uff0c\u627e\u5230 CCU \u7ae0\u8282"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216180748419.png",alt:"image-20231216180748419"})}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u7167\u624b\u518c\u7f16\u5199\u9a71\u52a8\u6587\u4ef6\u9002\u914d V851se \u5e73\u53f0\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u7136\u540e\u627e\u5230 ",(0,s.jsx)(i.code,{children:"drivers/clk/sunxi-ng/Kconfig"})," \u6587\u4ef6\uff0c\u589e\u52a0\u521a\u624d\u7f16\u5199\u7684\u9a71\u52a8\u7684 Kconfig \u8bf4\u660e"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216181118674.png",alt:"image-20231216181118674"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:'config SUN8I_V851SE_CCU\n\ttristate "Support for the Allwinner V851se CCU"\n\tdefault y\n\tdepends on MACH_SUN8I || COMPILE_TEST\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u540c\u65f6\u6253\u5f00 ",(0,s.jsx)(i.code,{children:"drivers/clk/sunxi-ng/Makefile"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216181248375.png",alt:"image-20231216181248375"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"obj-$(CONFIG_SUN8I_V851SE_CCU)\t+= sun8i-v851se-ccu.o\n\nsun8i-v851se-ccu-y\t\t+= ccu-sun8i-v851se.o\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6765\u68c0\u67e5\u4e00\u4e0b\u662f\u5426\u79fb\u690d\u6210\u529f\uff0c\u5148\u67e5\u770b ",(0,s.jsx)(i.code,{children:"menuconfig"}),"\uff0c\u627e\u5230 ",(0,s.jsx)(i.code,{children:"Device Drivers > Common Clock Framework"}),"\uff0c\u67e5\u770b\u662f\u5426\u6709 V851se \u5e73\u53f0\u9009\u9879\u51fa\u73b0"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm menuconfig\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216183207387.png",alt:"image-20231216183207387"})}),"\n",(0,s.jsx)(i.p,{children:"\u7f16\u8bd1\u6d4b\u8bd5\uff0c\u6709\u51e0\u5904\u672a\u4f7f\u7528\u7684\u53d8\u91cf\u7684\u8b66\u544a\uff0c\u65e0\u89c6\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm \n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216183406918.png",alt:"image-20231216183406918"})}),"\n",(0,s.jsx)(i.p,{children:"\u6b63\u5e38\u7f16\u8bd1\u6210\u529f"}),"\n",(0,s.jsx)(i.h2,{id:"\u79fb\u690d-pinctrl-\u9a71\u52a8",children:"\u79fb\u690d pinctrl \u9a71\u52a8"}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u91cc\u63d0\u4f9b\u5df2\u7ecf\u9002\u914d\u4fee\u6539\u540e\u7684\u9a71\u52a8\uff1a",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver",children:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver"})," \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u524d\u5f80",(0,s.jsx)(i.code,{children:"drivers/pinctrl/sunxi/"})," \u65b0\u5efa\u6587\u4ef6 ",(0,s.jsx)(i.code,{children:"pinctrl-sun8i-v851se.c"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216183716548.png",alt:"image-20231216183716548"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6253\u5f00 ",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/blob/main/docs/hardware/TinyVision/datasheet/V851SE_PINOUT_V1.0.xlsx",children:"V851SE_PINOUT_V1.0.xlsx"})," \u5bf9\u7167\u586b\u5165PIN\u7684\u503c\u4e0e\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216183825726.png",alt:"image-20231216183825726"})}),"\n",(0,s.jsxs)(i.p,{children:["\u540c\u6837\u7684\uff0c\u4fee\u6539 ",(0,s.jsx)(i.code,{children:"drivers/pinctrl/sunxi/Kconfig"})," \u589e\u52a0\u9009\u9879"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216184038601.png",alt:"image-20231216184038601"})}),"\n",(0,s.jsxs)(i.p,{children:["\u4fee\u6539 ",(0,s.jsx)(i.code,{children:"drivers/pinctrl/sunxi/Makefile"})," \u589e\u52a0\u8def\u5f84"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216184126988.png",alt:"image-20231216184126988"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6765\u68c0\u67e5\u4e00\u4e0b\u662f\u5426\u79fb\u690d\u6210\u529f\uff0c\u5148\u67e5\u770b ",(0,s.jsx)(i.code,{children:"menuconfig"}),"\uff0c\u627e\u5230 ",(0,s.jsx)(i.code,{children:"> Device Drivers > Pin controllers"}),"\uff0c\u67e5\u770b\u662f\u5426\u6709 V851se \u5e73\u53f0\u9009\u9879\u51fa\u73b0"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm menuconfig\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216184259987.png",alt:"image-20231216184259987"})}),"\n",(0,s.jsx)(i.p,{children:"\u7f16\u8bd1\u6d4b\u8bd5\uff0c\u7f16\u8bd1\u901a\u8fc7"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"CROSS_COMPILE=arm-linux-gnueabihf- make ARCH=arm \n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216184649676.png",alt:"image-20231216184649676"})}),"\n",(0,s.jsx)(i.h2,{id:"\u7f16\u5199\u8bbe\u5907\u6811",children:"\u7f16\u5199\u8bbe\u5907\u6811"}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u91cc\u63d0\u4f9b\u5df2\u7ecf\u9002\u914d\u4fee\u6539\u540e\u7684\u9a71\u52a8\uff1a",(0,s.jsx)(i.a,{href:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver/dts",children:"https://github.com/YuzukiHD/TinyVision/tree/main/kernel/linux-6.7-driver/dts"})," \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216185413254.png",alt:"image-20231216185413254"})}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u90e8\u5206\u76f4\u63a5\u7ed9\u7ed3\u679c\u4e86\uff0c\u628a\u4e0a\u9762\u9002\u914d\u7684\u8bbe\u5907\u6811\u653e\u5230",(0,s.jsx)(i.code,{children:"/home/yuzuki/WorkSpace/aa/linux-6.7-rc5/arch/arm/boot/dts/allwinner/"})," \uff0c\u4fee\u6539 ",(0,s.jsx)(i.code,{children:"/home/yuzuki/WorkSpace/aa/linux-6.7-rc5/arch/arm/boot/dts/allwinner/Makefile"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216185113539.png",alt:"image-20231216185113539"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"sun8i-v851se-tinyvision.dtb\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216185530270.png",alt:"image-20231216185530270"})}),"\n",(0,s.jsx)(i.h1,{id:"\u751f\u6210\u5237\u673a\u955c\u50cf",children:"\u751f\u6210\u5237\u673a\u955c\u50cf"}),"\n",(0,s.jsxs)(i.p,{children:["\u7f16\u8bd1\u5185\u6838\u540e\uff0c\u53ef\u4ee5\u5728\u6587\u4ef6\u5939 ",(0,s.jsx)(i.code,{children:"arch/arm/boot/dts/allwinner"})," \u751f\u6210",(0,s.jsx)(i.code,{children:"sun8i-v851se-tinyvision.dtb"})," \uff0c\u5728\u6587\u4ef6\u5939",(0,s.jsx)(i.code,{children:"arch/arm/boot"})," \u751f\u6210 ",(0,s.jsx)(i.code,{children:"zImage"})," \uff0c\u628a\u4ed6\u4eec\u62f7\u8d1d\u51fa\u6765\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216191248458.png",alt:"image-20231216191248458"})}),"\n",(0,s.jsxs)(i.p,{children:["\u7136\u540e\u5c06 ",(0,s.jsx)(i.code,{children:"sun8i-v851se-tinyvision.dtb"})," \u6539\u540d\u4e3a ",(0,s.jsx)(i.code,{children:"sunxi.dtb"})," \uff0c\u8fd9\u4e2a\u8bbe\u5907\u6811\u540d\u79f0\u662f\u5b9a\u4e49\u5728 SyterKit \u6e90\u7801\u4e2d\u7684\uff0c\u5982\u679c\u4e4b\u524d\u4fee\u6539\u4e86 SyterKit \u7684\u6e90\u7801\u9700\u8981\u4fee\u6539\u5230\u5bf9\u5e94\u7684\u540d\u79f0\uff0cSyterKit \u4f1a\u53bb\u8bfb\u53d6\u8fd9\u4e2a\u8bbe\u5907\u6811\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u7136\u540e\u7f16\u5199\u4e00\u4e2a ",(0,s.jsx)(i.code,{children:"config.txt"})," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"[configs]\nbootargs=cma=4M root=/dev/mmcblk0p2 init=/sbin/init console=ttyS0,115200 earlyprintk=sunxi-uart,0x02500000 rootwait clk_ignore_unused \nmac_addr=4a:13:e4:f9:79:75\nbootdelay=3\n"})}),"\n",(0,s.jsx)(i.h3,{id:"\u5b89\u88c5-genimage",children:"\u5b89\u88c5 genimage"}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 genimage \u4f5c\u4e3a\u6253\u5305\u5de5\u5177"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"sudo apt-get install libconfuse-dev #\u5b89\u88c5genimage\u4f9d\u8d56\u5e93\nsudo apt-get install genext2fs      # \u5236\u4f5c\u955c\u50cf\u65f6genimage\u5c06\u4f1a\u7528\u5230\ngit clone https://github.com/pengutronix/genimage.git\ncd genimage\n./autogen.sh                        # \u914d\u7f6e\u751f\u6210configure\n./configure                         # \u914d\u7f6e\u751f\u6210makefile\nmake\nsudo make install\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u7f16\u8bd1\u540e\u8fd0\u884c\u8bd5\u4e00\u8bd5\uff0c\u8fd9\u91cc\u6b63\u5e38"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216192512837.png",alt:"image-20231216192512837"})}),"\n",(0,s.jsx)(i.h3,{id:"\u4f7f\u7528-genimage-\u6253\u5305\u56fa\u4ef6",children:"\u4f7f\u7528 genimage \u6253\u5305\u56fa\u4ef6"}),"\n",(0,s.jsx)(i.p,{children:"\u7f16\u5199 genimage.cfg \u4f5c\u4e3a\u6253\u5305\u7684\u914d\u7f6e"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cfg",children:'image boot.vfat {\n\tvfat {\n\t\tfiles = {\n\t\t\t"zImage",\n\t\t\t"sunxi.dtb",\n\t\t\t"config.txt"\n\t\t}\n\t}\n\tsize = 8M\n}\n\nimage sdcard.img {\n\thdimage {}\n\n\tpartition boot0 {\n\t\tin-partition-table = "no"\n\t\timage = "syter_boot_bin_card.bin"\n\t\toffset = 8K\n\t}\n\n\tpartition boot0-gpt {\n\t\tin-partition-table = "no"\n\t\timage = "syter_boot_bin_card.bin"\n\t\toffset = 128K\n\t}\n\n\tpartition kernel {\n\t\tpartition-type = 0xC\n\t\tbootable = "true"\n\t\timage = "boot.vfat"\n\t}\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u7531\u4e8egenimage\u7684\u811a\u672c\u6bd4\u8f83\u590d\u6742\uff0c\u6240\u4ee5\u7f16\u5199\u4e00\u4e2a ",(0,s.jsx)(i.code,{children:"genimage.sh"})," \u4f5c\u4e3a\u7b80\u6613\u4f7f\u7528\u7684\u5de5\u5177"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:'#!/usr/bin/env bash\n\ndie() {\n  cat <<EOF >&2\nError: $@\n\nUsage: ${0} -c GENIMAGE_CONFIG_FILE\nEOF\n  exit 1\n}\n\n# Parse arguments and put into argument list of the script\nopts="$(getopt -n "${0##*/}" -o c: -- "$@")" || exit $?\neval set -- "$opts"\n\nGENIMAGE_TMP="${BUILD_DIR}/genimage.tmp"\n\nwhile true ; do\n\tcase "$1" in\n\t-c)\n\t  GENIMAGE_CFG="${2}";\n\t  shift 2 ;;\n\t--) # Discard all non-option parameters\n\t  shift 1;\n\t  break ;;\n\t*)\n\t  die "unknown option \'${1}\'" ;;\n\tesac\ndone\n\n[ -n "${GENIMAGE_CFG}" ] || die "Missing argument"\n\n# Pass an empty rootpath. genimage makes a full copy of the given rootpath to\n# ${GENIMAGE_TMP}/root so passing TARGET_DIR would be a waste of time and disk\n# space. We don\'t rely on genimage to build the rootfs image, just to insert a\n# pre-built one in the disk image.\n\ntrap \'rm -rf "${ROOTPATH_TMP}"\' EXIT\nROOTPATH_TMP="$(mktemp -d)"\nGENIMAGE_TMP="$(mktemp -d)"\nrm -rf "${GENIMAGE_TMP}"\n\ngenimage \\\n\t--rootpath "${ROOTPATH_TMP}"     \\\n\t--tmppath "${GENIMAGE_TMP}"    \\\n\t--inputpath "${BINARIES_DIR}"  \\\n\t--outputpath "${BINARIES_DIR}" \\\n\t--config "${GENIMAGE_CFG}"\n'})}),"\n",(0,s.jsx)(i.p,{children:"\u51c6\u5907\u5b8c\u6210\uff0c\u6587\u4ef6\u5982\u4e0b\u6240\u793a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216192612594.png",alt:"image-20231216192612594"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fd0\u884c\u547d\u4ee4\u8fdb\u884c\u6253\u5305"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-plaintext",children:"chmod 777 genimage.sh\n./genimage.sh -c genimage.cfg\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216192702018.png",alt:"image-20231216192702018"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6253\u5305\u5b8c\u6210\uff0c\u53ef\u4ee5\u627e\u5230 ",(0,s.jsx)(i.code,{children:"sdcard.img"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216192757467.png",alt:"image-20231216192757467"})}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u8f6f\u4ef6\u70e7\u5f55\u56fa\u4ef6\u5230TF\u5361\u4e0a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216192825808.png",alt:"image-20231216192825808"})}),"\n",(0,s.jsx)(i.h1,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,s.jsx)(i.p,{children:"\u63d2\u5361\uff0c\u4e0a\u7535\uff0c\u6210\u529f\u542f\u52a8\u7cfb\u7edf"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216193758046.png",alt:"image-20231216193758046"})}),"\n",(0,s.jsx)(i.p,{children:"\u53ef\u4ee5\u770b\u5230 Linux \u7248\u672c\u662f 6.7.0"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://photos.100ask.net/dongshanpi/TinyVision/yuzukihd/image-20231216193814799.png",alt:"image-20231216193814799"})})]})}function h(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>c,a:()=>a});var s=e(7294);const t={},r=s.createContext(t);function a(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);