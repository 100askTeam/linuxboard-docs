"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6848],{8180:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(5893),r=i(1151);const t={sidebar_position:6},o="\u914d\u7f6e\u542f\u52a8\u5c0f\u6838",c={id:"TinyVision/part5/ConfigureAndStartTheLittleCore",title:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838",description:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838\u7684\u6d41\u7a0b\u5982\u4e0b\uff0c\u8fd9\u91cc\u53ea\u8ba8\u8bba\u4f7f\u7528 linux \u542f\u52a8\u5c0f\u6838\u7684\u60c5\u51b5\uff0c\u4e0d\u8ba8\u8bba\u5feb\u542f\u76f8\u5173\u3002",source:"@site/docs/TinyVision/part5/6-ConfigureAndStartTheLittleCore.md",sourceDirName:"TinyVision/part5",slug:"/TinyVision/part5/ConfigureAndStartTheLittleCore",permalink:"/docs/TinyVision/part5/ConfigureAndStartTheLittleCore",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part5/6-ConfigureAndStartTheLittleCore.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"v851seSidebar",previous:{title:"\u5185\u5b58\u5212\u5206",permalink:"/docs/TinyVision/part5/MemoryPartitioning"},next:{title:"\u52a0\u8f7d\u56fa\u4ef6",permalink:"/docs/TinyVision/part5/LoadFirmware"}},d={},l=[];function a(n){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838",children:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838"}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838\u7684\u6d41\u7a0b\u5982\u4e0b\uff0c\u8fd9\u91cc\u53ea\u8ba8\u8bba\u4f7f\u7528 linux \u542f\u52a8\u5c0f\u6838\u7684\u60c5\u51b5\uff0c\u4e0d\u8ba8\u8bba\u5feb\u542f\u76f8\u5173\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:i(6822).Z+"",width:"817",height:"500"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u52a0\u8f7d\u56fa\u4ef6","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"firmware"})," \u63a5\u53e3\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u56fa\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6790\u56fa\u4ef6\u7684 ",(0,s.jsx)(e.code,{children:"resource_table"})," \u6bb5\uff0c\u8be5\u6bb5\u6709\u5982\u4e0b\u5185\u5bb9","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u58f0\u660e\u9700\u8981\u7684\u5185\u5b58\uff08",(0,s.jsx)(e.code,{children:"Linux"})," \u4e3a\u5176\u5206\u914d\uff0c\u8bbe\u5907\u6811\u914d\u7f6e\uff09"]}),"\n",(0,s.jsxs)(e.li,{children:["\u58f0\u660e\u4f7f\u7528\u7684 ",(0,s.jsx)(e.code,{children:"vdev"}),"\uff08\u56fa\u5b9a\u4e3a\u4e00\u4e2a\uff09"]}),"\n",(0,s.jsxs)(e.li,{children:["\u58f0\u660e\u4f7f\u7528\u7684 ",(0,s.jsx)(e.code,{children:"vring"}),"\uff08\u56fa\u5b9a\u4e3a\u4e24\u4e2a\uff09"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u5c06\u56fa\u4ef6\u52a0\u8f7d\u5230\u6307\u5b9a\u5730\u5740"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6ce8\u518c ",(0,s.jsx)(e.code,{children:"rpmsg virtio"})," \u8bbe\u5907","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u63d0\u4f9b ",(0,s.jsx)(e.code,{children:"vdev->ops"}),"\uff08\u57fa\u4e8e ",(0,s.jsx)(e.code,{children:"virtio"})," \u63a5\u53e3\u5b9e\u73b0\u7684\uff09"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e0e ",(0,s.jsx)(e.code,{children:"rpmsg_bus"})," \u9a71\u52a8\u5339\u914d\uff0c\u5b8c\u6210 ",(0,s.jsx)(e.code,{children:"rpmsg"})," \u521d\u59cb\u5316"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u542f\u52a8\u5c0f\u6838","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"rproc->ops->start"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},6822:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/2022-07-19-15-33-28-image-d25abb3ac23e3ae502ae7516a6b15c63.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>o});var s=i(7294);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);