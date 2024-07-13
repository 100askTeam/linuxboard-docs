"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8790],{22384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>f,default:()=>u,frontMatter:()=>R,metadata:()=>o,toc:()=>a});var i=n(85893),r=n(11151);const R={sidebar_position:4},f="\u663e\u793a Linux \u7ec8\u7aef",o={id:"TinyVision/part8/DisplayLinuxTerminal",title:"\u663e\u793a Linux \u7ec8\u7aef",description:"\u524d\u5f80\u9a71\u52a8\u52fe\u9009\u5982\u4e0b\u9009\u9879",source:"@site/docs/TinyVision/part8/4-DisplayLinuxTerminal.md",sourceDirName:"TinyVision/part8",slug:"/TinyVision/part8/DisplayLinuxTerminal",permalink:"/docs/TinyVision/part8/DisplayLinuxTerminal",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part8/4-DisplayLinuxTerminal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"v851seSidebar",previous:{title:"Linux 4.9 \u5185\u6838\u9002\u914d",permalink:"/docs/TinyVision/part8/Linux4.9KernelAdaptation"},next:{title:"WIFI\u9a71\u52a8\u5f00\u53d1",permalink:"/docs/category/wifi\u9a71\u52a8\u5f00\u53d1"}},s={},a=[];function v(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u663e\u793a-linux-\u7ec8\u7aef",children:"\u663e\u793a Linux \u7ec8\u7aef"}),"\n",(0,i.jsx)(t.p,{children:"\u524d\u5f80\u9a71\u52a8\u52fe\u9009\u5982\u4e0b\u9009\u9879"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Device Drivers  ---\x3e\n\tGraphics support  ---\x3e\n\t\tFrame buffer Devices  ---\x3e\n\t\t\t<*> Support for frame buffer devices\n\t\tConsole display driver support  ---\x3e\n\t\t\t[*] Framebuffer Console support\n\t\t\t[*]   Map the console to the primary display device\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240117101158050",src:n(17427).Z+"",width:"495",height:"120"})}),"\n",(0,i.jsxs)(t.p,{children:["\u7136\u540e\u5728 ",(0,i.jsx)(t.code,{children:"bootargs"})," \u6dfb\u52a0\u4e00\u884c ",(0,i.jsx)(t.code,{children:"console=tty0"})," \u5373\u53ef\u663e\u793a\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},17427:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>f});var i=n(67294);const r={},R=i.createContext(r);function f(e){const t=i.useContext(R);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:f(e.components),i.createElement(R.Provider,{value:t},e.children)}}}]);