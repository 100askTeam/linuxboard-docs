"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7368],{1361:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>u,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var e=t(5893),o=t(1151);const s={sidebar_position:2},u="\u83b7\u53d6\u5e76\u7f16\u8bd1buildroot",r={id:"TinyVision/part7/QuickStart",title:"\u83b7\u53d6\u5e76\u7f16\u8bd1buildroot",description:"\u83b7\u53d6\u6e90\u7801",source:"@site/docs/TinyVision/part7/01-QuickStart.md",sourceDirName:"TinyVision/part7",slug:"/TinyVision/part7/QuickStart",permalink:"/docs/TinyVision/part7/QuickStart",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part7/01-QuickStart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"v851seSidebar",previous:{title:"\u4e3b\u7ebfBuildroot\u5f00\u53d1",permalink:"/docs/category/\u4e3b\u7ebfbuildroot\u5f00\u53d1"},next:{title:"LCD\u6a21\u7ec4\u9a71\u52a8\u5f00\u53d1",permalink:"/docs/category/lcd\u6a21\u7ec4\u9a71\u52a8\u5f00\u53d1"}},l={},d=[{value:"\u83b7\u53d6\u6e90\u7801",id:"\u83b7\u53d6\u6e90\u7801",level:2},{value:"\u89e3\u538b\u914d\u7f6e",id:"\u89e3\u538b\u914d\u7f6e",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u70e7\u5199",id:"\u70e7\u5199",level:2}];function c(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"\u83b7\u53d6\u5e76\u7f16\u8bd1buildroot",children:"\u83b7\u53d6\u5e76\u7f16\u8bd1buildroot"}),"\n",(0,e.jsx)(i.h2,{id:"\u83b7\u53d6\u6e90\u7801",children:"\u83b7\u53d6\u6e90\u7801"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["BaiduYUN \u94fe\u63a5\uff1a",(0,e.jsx)(i.a,{href:"https://pan.baidu.com/s/19QFDR_ssy6SJeRMzm5lVDw?pwd=b4nh",children:"https://pan.baidu.com/s/19QFDR_ssy6SJeRMzm5lVDw?pwd=b4nh"})," \u63d0\u53d6\u7801\uff1ab4nh"]}),"\n",(0,e.jsxs)(i.li,{children:["Github\u4ed3\u5e93\uff1a ",(0,e.jsx)(i.a,{href:"https://github.com/DongshanPI/buildroot-external-tinyvision",children:"https://github.com/DongshanPI/buildroot-external-tinyvision"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u89e3\u538b\u914d\u7f6e",children:"\u89e3\u538b\u914d\u7f6e"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-shell",children:"ubuntu@ubuntu1804:~$ cd buildroot-2023.02.8/\nubuntu@ubuntu1804:~/buildroot-2023.02.8$ ls\narch   boot     Config.in         configs  DEVELOPERS  docs  linux     Makefile.legacy  package  support  toolchain\nboard  CHANGES  Config.in.legacy  COPYING  dl          fs    Makefile  output           README   system   utils\nubuntu@ubuntu1804:~/buildroot-2023.02.8$ ls configs/tinyvision_defconfig \nconfigs/tinyvision_defconfig\nubuntu@ubuntu1804:~/buildroot-2023.02.8$  \n"})}),"\n",(0,e.jsx)(i.h2,{id:"\u7f16\u8bd1",children:"\u7f16\u8bd1"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-shell",children:'ubuntu@ubuntu1804:~/buildroot-2023.02.8$  make tinyvision_defconfig\n#\n# configuration written to /home/ubuntu/buildroot-2023.02.8/.config\n#\nubuntu@ubuntu1804:~/buildroot-2023.02.8$ make\n/usr/bin/make -j1  O=/home/ubuntu/buildroot-2023.02.8/output HOSTCC="/usr/bin/gcc" HOSTCXX="/usr/bin/g++" syncconfig\n\n'})}),"\n",(0,e.jsx)(i.p,{children:"\u6ce8\u610f\uff1a \u4e0d\u8981\u4f7f\u7528 make clean\u547d\u4ee4 \u6e05\u7406\u4ed3\u5e93\u3002"}),"\n",(0,e.jsx)(i.h2,{id:"\u70e7\u5199",children:"\u70e7\u5199"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-shell",children:"ubuntu@ubuntu1804:~/buildroot-2023.02.8$ ls output/images/\nboot.vfat    rootfs.ext4  sun8i-v851se-tinyvision.dtb  sunxi.dtb           tinyvision_sdcard.img\nrootfs.ext2  rootfs.tar   sun8i-v851s-tinyvision.dtb   syter_boot_bin.bin  zImage\nubuntu@ubuntu1804:~/buildroot-2023.02.8$ \n"})}),"\n",(0,e.jsxs)(i.p,{children:["\u7cfb\u7edf\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u955c\u50cf\u8f93\u51fa\u5728 ",(0,e.jsx)(i.code,{children:"output/images/"})," \u76ee\u5f55\u4e0b\uff0c\u540d\u79f0\u4e3a ",(0,e.jsx)(i.code,{children:"tinyvision_sdcard.img"}),"  \u4f7f\u7528 dd if \u547d\u4ee4 \u5b8c\u6574\u5199\u5165sd\u5361\u8bbe\u5907\uff0c\u6216\u8005 \u4f7f\u7528 wind32diskimage\u5de5\u5177\u3002 \u6216\u8005\u4f7f\u7528 balenaEtcher \u7b49 \u8fdb\u884c\u70e7\u5f55\u3002"]})]})}function a(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},1151:(n,i,t)=>{t.d(i,{Z:()=>r,a:()=>u});var e=t(7294);const o={},s=e.createContext(o);function u(n){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:u(n.components),e.createElement(s.Provider,{value:i},n.children)}}}]);