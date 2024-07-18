"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[312],{89495:(u,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>e,metadata:()=>b,toc:()=>s});var r=t(85893),o=t(11151);const e={sidebar_position:5},a="\u5355\u72ec\u914d\u7f6euboot",b={id:"T113s3-Industrial/part7/ConfigureUbootIndependently",title:"\u5355\u72ec\u914d\u7f6euboot",description:"1. uboot\u8bbe\u5907\u6811\u6587\u4ef6 \u73af\u5883\u53d8\u91cf",source:"@site/docs/T113s3-Industrial/part7/05-ConfigureUbootIndependently.md",sourceDirName:"T113s3-Industrial/part7",slug:"/T113s3-Industrial/part7/ConfigureUbootIndependently",permalink:"/docs/T113s3-Industrial/part7/ConfigureUbootIndependently",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-Industrial/part7/05-ConfigureUbootIndependently.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"t113s3Sidebar",previous:{title:"\u5355\u72ec\u7f16\u8bd1bootloader\u90e8\u5206",permalink:"/docs/T113s3-Industrial/part7/CompileTheBootloaderSeparately"},next:{title:"\u4fee\u6539\u7cfb\u7edf\u542f\u52a8\u73af\u5883\u53d8\u91cf",permalink:"/docs/T113s3-Industrial/part7/ModifySystemStartupEnvironmentVariables"}},i={},s=[{value:"1. uboot\u8bbe\u5907\u6811\u6587\u4ef6 \u73af\u5883\u53d8\u91cf",id:"1-uboot\u8bbe\u5907\u6811\u6587\u4ef6-\u73af\u5883\u53d8\u91cf",level:3},{value:"2. uboot\u6240\u6709\u6e90\u7801\u6240\u5728\u4f4d\u7f6e",id:"2-uboot\u6240\u6709\u6e90\u7801\u6240\u5728\u4f4d\u7f6e",level:3},{value:"3.  \u5f00\u53d1\u677fuboot\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e",id:"3--\u5f00\u53d1\u677fuboot\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e",level:3},{value:"4.  Tina\u7cfb\u7edf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6",id:"4--tina\u7cfb\u7edf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6",level:3},{value:"5. \u7f16\u8bd1\u6253\u5305\u4e0e\u66f4\u65b0",id:"5-\u7f16\u8bd1\u6253\u5305\u4e0e\u66f4\u65b0",level:3}];function d(u){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...u.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5355\u72ec\u914d\u7f6euboot",children:"\u5355\u72ec\u914d\u7f6euboot"}),"\n",(0,r.jsx)(n.h3,{id:"1-uboot\u8bbe\u5907\u6811\u6587\u4ef6-\u73af\u5883\u53d8\u91cf",children:"1. uboot\u8bbe\u5907\u6811\u6587\u4ef6 \u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask$ ls -la\n-rw-rw-r-- 1 ubuntu ubuntu  2106 Mar 17 04:19 env.cfg\n-rwxrwxr-x 1 ubuntu ubuntu  8123 Mar 17 04:19 sys_config.fex\n-rwxrwxr-x 1 ubuntu ubuntu 12929 Mar 17 04:19 uboot-board.dts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-uboot\u6240\u6709\u6e90\u7801\u6240\u5728\u4f4d\u7f6e",children:"2. uboot\u6240\u6709\u6e90\u7801\u6240\u5728\u4f4d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018$ ls -l\ntotal 424\ndrwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 api\ndrwxrwxr-x  15 ubuntu ubuntu   4096 May 25  2022 arch\ndrwxrwxr-x 187 ubuntu ubuntu   4096 May 25  2022 board\ndrwxrwxr-x   7 ubuntu ubuntu  12288 Mar 27 03:43 cmd\ndrwxrwxr-x   5 ubuntu ubuntu   4096 Mar 27 03:43 common\n-rw-rw-r--   1 ubuntu ubuntu   2304 May 25  2022 config.mk\ndrwxrwxr-x   2 ubuntu ubuntu   4096 Mar 17 04:19 configs\ndrwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 disk\ndrwxrwxr-x  10 ubuntu ubuntu  12288 May 25  2022 doc\ndrwxrwxr-x   3 ubuntu ubuntu   4096 May 25  2022 Documentation\ndrwxrwxr-x  63 ubuntu ubuntu   4096 Mar 27 03:43 drivers\ndrwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 dts\ndrwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 env\ndrwxrwxr-x   4 ubuntu ubuntu   4096 May 25  2022 examples\ndrwxrwxr-x  13 ubuntu ubuntu   4096 Mar 27 03:43 fs\ndrwxrwxr-x  35 ubuntu ubuntu  20480 Mar 17 04:22 include\n-rw-rw-r--   1 ubuntu ubuntu   1863 May 25  2022 Kbuild\n-rw-rw-r--   1 ubuntu ubuntu  15943 May 25  2022 Kconfig\ndrwxrwxr-x  19 ubuntu ubuntu   4096 Mar 27 03:43 lib\ndrwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 Licenses\n-rw-rw-r--   1 ubuntu ubuntu  14760 May 25  2022 MAINTAINERS\n-rw-rw-r--   1 ubuntu ubuntu  67193 May 25  2022 Makefile\n-rw-rw-r--   1 ubuntu ubuntu   2826 May 25  2022 make_nand\ndrwxrwxr-x   2 ubuntu ubuntu   4096 Mar 27 03:43 net\ndrwxrwxr-x   5 ubuntu ubuntu   4096 May 25  2022 post\n-rw-rw-r--   1 ubuntu ubuntu 181900 May 25  2022 README\ndrwxrwxr-x   2 ubuntu ubuntu   4096 May 25  2022 rtos\ndrwxrwxr-x   6 ubuntu ubuntu   4096 May 25  2022 scripts\n-rw-rw-r--   1 ubuntu ubuntu     17 May 25  2022 snapshot.commit\ndrwxrwxr-x   5 ubuntu ubuntu   4096 Mar 27 03:43 sprite\ndrwxrwxr-x  11 ubuntu ubuntu   4096 Mar 27 03:43 test\ndrwxrwxr-x  14 ubuntu ubuntu   4096 Mar 27 03:43 tools\nubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018$\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3--\u5f00\u53d1\u677fuboot\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e",children:"3.  \u5f00\u53d1\u677fuboot\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018/configs$ ls -lh\ntotal 28K\n-rw-rw-r-- 1 ubuntu ubuntu 5.1K May 25  2022 sun20iw1p1_defconfig\n-rw-rw-r-- 1 ubuntu ubuntu 2.2K May 25  2022 sun20iw1p1_nor_defconfig\n-rw-rw-r-- 1 ubuntu ubuntu 4.9K Mar 17 04:19 sun8iw20p1_defconfig\n-rw-rw-r-- 1 ubuntu ubuntu 3.0K Mar 17 04:19 sun8iw20p1_nor_defconfig\n-rw-rw-r-- 1 ubuntu ubuntu 2.4K Mar 17 04:19 sun8iw20p1_uart3_defconfig\nubuntu@ubuntu1804:~/tina-d1-h/lichee/brandy-2.0/u-boot-2018/configs$\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4--tina\u7cfb\u7edf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6",children:"4.  Tina\u7cfb\u7edf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ubuntu@ubuntu1804:~/tina-d1-h/device/config/chips/t113/configs/100ask$ cat BoardConfig.mk\nLICHEE_CHIP:=sun8iw20p1\nLICHEE_ARCH:=arm\nLICHEE_BRANDY_VER:=2.0\nLICHEE_BRANDY_DEFCONF:=sun8iw20p1_uart3_defconfig\nLICHEE_KERN_VER:=5.4\nLICHEE_KERN_DEFCONF:=sun8iw20p1smp_defconfig\nLICHEE_REDUNDANT_ENV_SIZE:=0x20000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"5-\u7f16\u8bd1\u6253\u5305\u4e0e\u66f4\u65b0",children:"5. \u7f16\u8bd1\u6253\u5305\u4e0e\u66f4\u65b0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/tina-d1-h$ mboot\nt113_100ask t113 t113-100ask\nbuild_boot platform:sun8iw20p1_uart3 o_option:uboot\nPrepare toolchain ...\nbuild for sun8iw20p1_uart3_defconfig ...\n  CLEAN   dts/../arch/arm/dts\n  CLEAN   dts\n  CLEAN   examples/standalone\n  CLEAN   tools\n  CLEAN   tools/lib tools/common\n  CLEAN   board/sunxi/sunxi_challenge.c u-boot.lds u-boot.dtb u-boot.cfg.configs u-boot.map u-boot-nodtb.bin u-boot.srec u-boot.cfg u-boot.bin u-boot-dtb.dts u-boot-sun8iw20p1.bin u-boot-dtb.bin u-boot u-boot.sym System.map\n  CLEAN   scripts/basic\n  CLEAN   scripts/kconfig\n  CLEAN   include/config include/generated\n  CLEAN   .config include/autoconf.mk.dep include/autoconf.mk include/config.h\nubuntu@ubuntu1804:~/tina-d1-h$ make -j32\n\nubuntu@ubuntu1804:~/tina-d1-h$ pack\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"PhoenixSuit"})," \u5c06\u7f16\u8bd1\u751f\u6210\u7684\u955c\u50cf\u70e7\u5f55\u81f3\u5f00\u53d1\u677f\u5185\u4ee5\u5b9e\u73b0\u66f4\u65b0uboot\u4f5c\u7528\u3002"]})]})}function c(u={}){const{wrapper:n}={...(0,o.a)(),...u.components};return n?(0,r.jsx)(n,{...u,children:(0,r.jsx)(d,{...u})}):d(u)}},11151:(u,n,t)=>{t.d(n,{Z:()=>b,a:()=>a});var r=t(67294);const o={},e=r.createContext(o);function a(u){const n=r.useContext(e);return r.useMemo((function(){return"function"==typeof u?u(n):{...n,...u}}),[n,u])}function b(u){let n;return n=u.disableParentContext?"function"==typeof u.components?u.components(o):u.components||o:a(u.components),r.createElement(e.Provider,{value:n},u.children)}}}]);