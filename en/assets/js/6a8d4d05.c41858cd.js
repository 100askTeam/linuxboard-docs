"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8018],{16873:(A,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var i=e(85893),r=e(11151);const t={sidebar_position:5},o="\u5185\u5b58\u5212\u5206",s={id:"TinyVision/part5/MemoryPartitioning",title:"\u5185\u5b58\u5212\u5206",description:"\u5728\u8bbe\u5907\u6811\u914d\u7f6e\u5c0f\u6838\u5fc3\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u5305\u62ec\u5c0f\u6838\u81ea\u5df1\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u8bbe\u5907\u901a\u4fe1\u5185\u5b58\uff0c\u56de\u73af\u5185\u5b58\u7b49\u7b49\uff0c\u8fd9\u91ccE907 \u8fd0\u884c\u5728 DRAM \u5185\u3002\u5185\u5b58\u8d77\u59cb\u5730\u5740\u53ef\u4ee5\u5728\u6570\u636e\u624b\u518c\u67e5\u5230\u3002",source:"@site/docs/TinyVision/part5/5-MemoryPartitioning.md",sourceDirName:"TinyVision/part5",slug:"/TinyVision/part5/MemoryPartitioning",permalink:"/en/docs/TinyVision/part5/MemoryPartitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part5/5-MemoryPartitioning.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"v851seSidebar",previous:{title:"\u8f6f\u4ef6\u9002\u914d",permalink:"/en/docs/TinyVision/part5/SoftwareAdaptation"},next:{title:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838",permalink:"/en/docs/TinyVision/part5/ConfigureAndStartTheLittleCore"}},d={},c=[];function a(A){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.a)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5185\u5b58\u5212\u5206",children:"\u5185\u5b58\u5212\u5206"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8bbe\u5907\u6811\u914d\u7f6e\u5c0f\u6838\u5fc3\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u5305\u62ec\u5c0f\u6838\u81ea\u5df1\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u8bbe\u5907\u901a\u4fe1\u5185\u5b58\uff0c\u56de\u73af\u5185\u5b58\u7b49\u7b49\uff0c\u8fd9\u91ccE907 \u8fd0\u884c\u5728 DRAM \u5185\u3002\u5185\u5b58\u8d77\u59cb\u5730\u5740\u53ef\u4ee5\u5728\u6570\u636e\u624b\u518c\u67e5\u5230\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230215131405440",src:e(82369).Z+"",width:"737",height:"96"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u5e38\u6765\u8bf4\u6211\u4eec\u628a\u5185\u5b58\u5730\u5740\u8bbe\u7f6e\u5230\u672b\u5c3e\uff0c\u4f8b\u5982\u8fd9\u91cc\u4f7f\u7528\u7684 V851s\uff0c\u62e5\u6709 64MByte \u5185\u5b58\uff0c\u5219\u5185\u5b58\u8303\u56f4\u4e3a ",(0,i.jsx)(n.code,{children:"0x40000000 - 0x44000000"}),"\uff0c\u8fd9\u91cc\u914d\u7f6e\u5230 ",(0,i.jsx)(n.code,{children:"0x43c00000"})," \u5373\u53ef\u3002\u5bf9\u4e8e V853s \u62e5\u6709 128M \u5185\u5b58\u5219\u53ef\u4ee5\u8bbe\u7f6e\u5230 ",(0,i.jsx)(n.code,{children:"0x47C00000"}),"\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u5bf9\u4e8e\u4ea4\u6362\u533a\u5185\u5b58\u5219\u53ef\u4ee5\u914d\u7f6e\u5728\u9644\u8fd1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'reserved-memory {                               // \u914d\u7f6e\u9884\u7559\u5185\u5b58\u533a\u95f4\n\te907_dram: riscv_memserve {                 // riscv \u6838\u5fc3\u4f7f\u7528\u7684\u5185\u5b58\n\t\treg = <0x0 0x43c00000 0x0 0x00400000>;  // \u8d77\u59cb\u5730\u5740 0x43c00000 \u957f\u5ea6 4MB\n\t\tno-map;\n\t};\n\n\tvdev0buffer: vdev0buffer@0x43000000 {       // vdev\u8bbe\u5907buffer\u9884\u7559\u5185\u5b58\n\t\tcompatible = "shared-dma-pool";\n\t\treg = <0x0 0x43000000 0x0 0x40000>;\n\t\tno-map;\n\t};\n\n\tvdev0vring0: vdev0vring0@0x43040000 {       // \u901a\u8baf\u4f7f\u7528\u7684vring\u8bbe\u59070\n\t\treg = <0x0 0x43040000 0x0 0x20000>;\n\t\tno-map;\n\t};\n\n\tvdev0vring1: vdev0vring1@0x43060000 {       // \u901a\u8baf\u4f7f\u7528\u7684vring\u8bbe\u59071\n\t\treg = <0x0 0x43060000 0x0 0x20000>;\n\t\tno-map;\n\t};\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u9700\u8981\u914d\u7f6e\u4e0b ",(0,i.jsx)(n.code,{children:"e907"})," \u7684\u94fe\u63a5\u811a\u672c\uff0c\u627e\u5230 ",(0,i.jsx)(n.code,{children:"e907_rtos/rtos/source/projects/v851-e907-lizard/kernel.lds"}),"  \u5c06 ",(0,i.jsx)(n.code,{children:"ORIGIN"})," \u914d\u7f6e\u4e3a\u4e0a\u9762\u9884\u7559\u7684\u5185\u5b58\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MEMORY\n{\n   /*DRAM_KERNEL: 4M */\n   DRAM_SEG_KRN (rwx) : ORIGIN = 0x43c00000, LENGTH = 0x00400000\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u914d\u7f6e\u5c0f\u6838\u7684 ",(0,i.jsx)(n.code,{children:"defconfig"})," \u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"e907_rtos/rtos/source/projects/v851-e907-lizard/configs/defconfig"})," \u914d\u7f6e\u4e0e\u5176\u5bf9\u5e94\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CONFIG_DRAM_PHYBASE=0x43c00000\nCONFIG_DRAM_VIRTBASE=0x43c00000\nCONFIG_DRAM_SIZE=0x0400000\n"})})]})}function u(A={}){const{wrapper:n}={...(0,r.a)(),...A.components};return n?(0,i.jsx)(n,{...A,children:(0,i.jsx)(a,{...A})}):a(A)}},82369:(A,n,e)=>{e.d(n,{Z:()=>i});const i="data:image/png;base64,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"},11151:(A,n,e)=>{e.d(n,{Z:()=>s,a:()=>o});var i=e(67294);const r={},t=i.createContext(r);function o(A){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function s(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:o(A.components),i.createElement(t.Provider,{value:n},A.children)}}}]);