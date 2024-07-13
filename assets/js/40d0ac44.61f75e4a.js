"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4941],{32407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(85893),s=t(11151);const r={sidebar_position:14},o="USB \u6444\u50cf\u5934\u8f93\u5165",c={id:"TinyVision/part3/USBCameraInput",title:"USB \u6444\u50cf\u5934\u8f93\u5165",description:"\u6709\u4e9b\u573a\u666f\u9700\u8981\u4f7f\u7528 USB \u6444\u50cf\u5934\u8f93\u5165\uff0c\u914d\u7f6e\u5982\u4e0b",source:"@site/docs/TinyVision/part3/14-USBCameraInput.md",sourceDirName:"TinyVision/part3",slug:"/TinyVision/part3/USBCameraInput",permalink:"/docs/TinyVision/part3/USBCameraInput",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part3/14-USBCameraInput.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"v851seSidebar",previous:{title:"\u7ebf\u5237\u56fa\u4ef6",permalink:"/docs/TinyVision/part3/FlashTheFirmware"},next:{title:"\u642d\u5efa RTSP \u670d\u52a1\u4f5c\u4e3a\u7f51\u7edc\u6444\u50cf\u5934",permalink:"/docs/TinyVision/part3/SetUpAnRTSPServerToActAsANetworkCamera"}},a={},d=[];function p(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"usb-\u6444\u50cf\u5934\u8f93\u5165",children:"USB \u6444\u50cf\u5934\u8f93\u5165"}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u4e9b\u573a\u666f\u9700\u8981\u4f7f\u7528 USB \u6444\u50cf\u5934\u8f93\u5165\uff0c\u914d\u7f6e\u5982\u4e0b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u542f USB UVC \u652f\u6301 ",(0,i.jsx)(n.code,{children:"m kernel_menuconfig"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-> Device Drivers\n\t-> Multimedia support (MEDIA_SUPPORT [=y])\n\t\t-> Media USB Adapters (MEDIA_USB_SUPPORT [=y])\n\t\t\t-> USB Video Class (UVC) (USB_VIDEO_CLASS [=y]) \n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u540e\u7f16\u8bd1\u7cfb\u7edf\uff0c\u542f\u52a8\uff0c\u5c06 USB \u5207\u6362\u4e3a HOST \u6a21\u5f0f\uff08\u9ed8\u8ba4\u662f Device\uff09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/devices/platform/soc/usbc0/usb_host\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6d4b\u8bd5\u4f7f\u7528\u7684\u662f\u91c7\u96c6\u5361\uff0c\u8f93\u51fa\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230 Video0 \u5df2\u7ecf\u51fa\u6765\u4e86"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240613193430159",src:t(61079).Z+"",width:"1006",height:"770"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6d4b\u8bd5\u6444\u50cf\u5934\uff0c\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"camerademo"})," \u62cd\u7167\uff0c\u62cd\u6444\u7684\u7167\u7247\u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"/tmp"})," \u6587\u4ef6\u5939\u4e0b"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240613200649722",src:t(56764).Z+"",width:"874",height:"630"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},61079:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20240613193430159-2e16ff49370537463246442cedaa8d25.png"},56764:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20240613200649722-5cecb01844399cc0a24f2b92365c84fb.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);