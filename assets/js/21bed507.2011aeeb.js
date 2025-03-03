"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9441],{25240:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>f,metadata:()=>t,toc:()=>a});var i=r(85893),s=r(11151);const f={sidebar_position:2},d="LinuxFB\u4ecb\u7ecd",t={id:"T113s3-SdNand/part5/part5-1/LinuxFBIntroduction",title:"LinuxFB\u4ecb\u7ecd",description:"\u4ec0\u4e48\u662f Linux Framebuffer\uff1f",source:"@site/docs/T113s3-SdNand/part5/part5-1/02-LinuxFBIntroduction.md",sourceDirName:"T113s3-SdNand/part5/part5-1",slug:"/T113s3-SdNand/part5/part5-1/LinuxFBIntroduction",permalink:"/docs/T113s3-SdNand/part5/part5-1/LinuxFBIntroduction",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-SdNand/part5/part5-1/02-LinuxFBIntroduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"t113s3sdnandSidebar",previous:{title:"\u4ea4\u53c9\u7f16\u8bd1",permalink:"/docs/T113s3-SdNand/part5/part5-1/CrossedIntersecting"},next:{title:"aic8800\u7f51\u5361\u5f00\u542fAP\u6a21\u5f0f",permalink:"/docs/T113s3-SdNand/part5/part5-1/AIC8800APMode"}},l={},a=[{value:"\u4ec0\u4e48\u662f Linux Framebuffer\uff1f",id:"\u4ec0\u4e48\u662f-linux-framebuffer",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u529f\u80fd\u548c\u7279\u6027",id:"\u529f\u80fd\u548c\u7279\u6027",level:2},{value:"\u6838\u5fc3\u7ec4\u6210\u90e8\u5206",id:"\u6838\u5fc3\u7ec4\u6210\u90e8\u5206",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"T113s3\u4f7f\u7528\u6848\u4f8b",id:"t113s3\u4f7f\u7528\u6848\u4f8b",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linuxfb\u4ecb\u7ecd",children:"LinuxFB\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-linux-framebuffer",children:"\u4ec0\u4e48\u662f Linux Framebuffer\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"Linux Framebuffer\uff08\u7b80\u79f0 LinuxFB\uff09\u662f\u4e00\u4e2a\u4e3a Linux \u7cfb\u7edf\u63d0\u4f9b\u7684\u663e\u793a\u6846\u67b6\uff0c\u7528\u4e8e\u5904\u7406\u56fe\u5f62\u663e\u793a\u3002\u5b83\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u4e00\u4e2a\u62bd\u8c61\u5c42\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5728\u4e0d\u540c\u7684\u786c\u4ef6\u4e0a\u4ee5\u4e00\u81f4\u7684\u65b9\u5f0f\u8fdb\u884c\u56fe\u50cf\u6e32\u67d3\u3002Framebuffer \u662f\u4e00\u4e2a\u5185\u5b58\u533a\u57df\uff0c\u901a\u5e38\u662f\u7269\u7406\u663e\u793a\u5668\u7684\u56fe\u50cf\u7f13\u51b2\u533a\uff0c\u901a\u8fc7\u8be5\u7f13\u51b2\u533a\u663e\u793a\u56fe\u50cf\u5185\u5bb9\u3002Framebuffer \u76f4\u63a5\u4e0e\u663e\u793a\u8bbe\u5907\u4ea4\u4e92\uff0c\u80fd\u591f\u63d0\u4f9b\u9ad8\u6548\u7684\u56fe\u50cf\u6e32\u67d3\u529f\u80fd\uff0c\u5c24\u5176\u9002\u7528\u4e8e\u5d4c\u5165\u5f0f\u7cfb\u7edf\u3001\u88f8\u673a\u5e94\u7528\u7b49\u6ca1\u6709\u56fe\u5f62\u684c\u9762\u73af\u5883\u7684\u73af\u5883\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,i.jsx)(n.p,{children:"Framebuffer \u4f5c\u4e3a\u4e00\u4e2a\u5185\u5b58\u533a\u57df\uff0c\u901a\u5e38\u7531\u56fe\u5f62\u786c\u4ef6\u6620\u5c04\u5230\u7269\u7406\u663e\u793a\u5c4f\u4e0a\u7684\u50cf\u7d20\u9635\u5217\u4e2d\u3002\u56fe\u5f62\u663e\u793a\u65f6\uff0c\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u5bf9 framebuffer \u5185\u5b58\u7684\u64cd\u4f5c\u6765\u63a7\u5236\u663e\u793a\u5185\u5bb9\u3002Framebuffer \u901a\u5e38\u4e0e\u56fe\u5f62\u786c\u4ef6\u7d27\u5bc6\u7ed3\u5408\uff0c\u64cd\u4f5c\u7cfb\u7edf\u901a\u8fc7\u6307\u5b9a\u663e\u793a\u8bbe\u5907\u7684\u53c2\u6570\uff08\u5982\u5206\u8fa8\u7387\u3001\u989c\u8272\u6df1\u5ea6\u7b49\uff09\u6765\u914d\u7f6e framebuffer\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Linux \u7cfb\u7edf\u4e2d\uff0cFramebuffer \u8bbe\u5907\u901a\u5e38\u4ee5 ",(0,i.jsx)(n.code,{children:"/dev/fb0"}),"\uff08\u6216\u5176\u4ed6 ",(0,i.jsx)(n.code,{children:"/dev/fbX"}),"\uff09\u7684\u5f62\u5f0f\u5b58\u5728\u3002Linux \u5185\u6838\u901a\u8fc7\u9a71\u52a8\u7a0b\u5e8f\u6765\u63d0\u4f9b framebuffer \u8bbe\u5907\u652f\u6301\u3002\u7528\u6237\u7a7a\u95f4\u7684\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u7279\u5b9a\u7684\u63a5\u53e3\uff08\u5982 ioctl()\uff09\u6765\u64cd\u4f5c framebuffer\uff0c\u4ece\u800c\u8fbe\u5230\u663e\u793a\u56fe\u50cf\u3001\u66f4\u65b0\u5185\u5bb9\u7b49\u76ee\u7684\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd\u548c\u7279\u6027",children:"\u529f\u80fd\u548c\u7279\u6027"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u72ec\u7acb\u4e8e\u786c\u4ef6\u5e73\u53f0"}),"\uff1aFramebuffer \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u786c\u4ef6\u65e0\u5173\u7684\u663e\u793a\u63a5\u53e3\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5904\u7406\u663e\u793a\uff0c\u800c\u4e0d\u5fc5\u5173\u5fc3\u5e95\u5c42\u786c\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\u3002\u65e0\u8bba\u662f\u57fa\u4e8e x86 \u67b6\u6784\u7684\u4e2a\u4eba\u8ba1\u7b97\u673a\uff0c\u8fd8\u662f\u5d4c\u5165\u5f0f ARM \u7cfb\u7edf\uff0cFramebuffer \u90fd\u80fd\u63d0\u4f9b\u4e00\u81f4\u7684 API \u63a5\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u652f\u6301\u591a\u79cd\u989c\u8272\u683c\u5f0f"}),"\uff1aFramebuffer \u652f\u6301\u591a\u79cd\u989c\u8272\u6df1\u5ea6\u548c\u989c\u8272\u683c\u5f0f\uff0c\u5e38\u89c1\u7684\u989c\u8272\u6df1\u5ea6\u5305\u62ec 8-bit\u300116-bit\u300124-bit \u548c 32-bit\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u989c\u8272\u6df1\u5ea6\u3002\u4f8b\u5982\uff0c\u5728\u5d4c\u5165\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u901a\u5e38\u4f7f\u7528 16-bit \u8272\u6df1\uff08RGB565 \u683c\u5f0f\uff09\u6765\u5e73\u8861\u663e\u793a\u6548\u679c\u548c\u5185\u5b58\u6d88\u8017\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u652f\u6301\u50cf\u7d20\u64cd\u4f5c"}),"\uff1a\u901a\u8fc7\u76f4\u63a5\u5bf9 framebuffer \u5185\u5b58\u7684\u64cd\u4f5c\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u8fdb\u884c\u50cf\u7d20\u7ea7\u522b\u7684\u64cd\u4f5c\u3002\u8fd9\u4f7f\u5f97\u4e00\u4e9b\u4f4e\u7ea7\u7684\u56fe\u5f62\u6e32\u67d3\u64cd\u4f5c\uff08\u5982\u81ea\u5b9a\u4e49\u56fe\u6807\u7ed8\u5236\u3001\u5c4f\u5e55\u5237\u65b0\uff09\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u517c\u5bb9\u6027"}),"\uff1aFramebuffer \u9a71\u52a8\u662f Linux \u5185\u6838\u7684\u4e00\u90e8\u5206\uff0c\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u786c\u4ef6\u5e73\u53f0\uff0c\u5305\u62ec\u4e3b\u6d41\u7684\u96c6\u6210\u663e\u5361\uff08\u5982 Intel\u3001AMD\u3001NVIDIA\uff09\u4ee5\u53ca\u5d4c\u5165\u5f0f\u56fe\u5f62\u82af\u7247\uff08\u5982 ARM\u3001Mali\u3001Vivante \u7b49\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4e0d\u4f9d\u8d56\u684c\u9762\u73af\u5883"}),"\uff1aFramebuffer \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u663e\u793a\u6280\u672f\uff0c\u5b83\u4e0d\u9700\u8981\u56fe\u5f62\u684c\u9762\u73af\u5883\uff08\u5982 X Window \u6216 Wayland\uff09\u3002\u8fd9\u79cd\u7279\u6027\u4f7f\u5176\u975e\u5e38\u9002\u5408\u5d4c\u5165\u5f0f\u7cfb\u7edf\u3001\u6700\u5c0f\u5316\u64cd\u4f5c\u7cfb\u7edf\u6216\u8005\u7528\u4e8e\u88f8\u673a\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6838\u5fc3\u7ec4\u6210\u90e8\u5206",children:"\u6838\u5fc3\u7ec4\u6210\u90e8\u5206"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Framebuffer \u8bbe\u5907\uff08/dev/fbX\uff09"}),"\uff1a\u6bcf\u4e2a\u663e\u793a\u8bbe\u5907\u90fd\u7531\u4e00\u4e2a framebuffer \u8bbe\u5907\u8282\u70b9\u6765\u8868\u793a\u3002\u5728 Linux \u4e2d\uff0cFramebuffer \u8bbe\u5907\u8282\u70b9\u901a\u5e38\u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"/dev"})," \u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"/dev/fb0"}),"\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00\u8be5\u8bbe\u5907\u8282\u70b9\u5e76\u5bf9\u5176\u8fdb\u884c\u8bfb\u53d6\u3001\u5199\u5165\u64cd\u4f5c\u6765\u63a7\u5236\u663e\u793a\u5185\u5bb9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Framebuffer \u9a71\u52a8\u7a0b\u5e8f"}),"\uff1a\u6bcf\u4e2a\u56fe\u5f62\u786c\u4ef6\u901a\u5e38\u9700\u8981\u4e00\u4e2a\u76f8\u5e94\u7684 framebuffer \u9a71\u52a8\u7a0b\u5e8f\uff0c\u4ee5\u4fbf Linux \u5185\u6838\u80fd\u591f\u8bc6\u522b\u5e76\u652f\u6301\u8be5\u786c\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Framebuffer \u5b57\u7b26\u8bbe\u5907\u63a5\u53e3"}),"\uff1aFramebuffer \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b57\u7b26\u8bbe\u5907\u63a5\u53e3\uff0c\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u8bfb\u53d6\u548c\u5199\u5165\u8be5\u8bbe\u5907\u8282\u70b9\uff0c\u5411 framebuffer \u5185\u5b58\u4e2d\u5199\u5165\u56fe\u50cf\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Framebuffer \u5185\u5b58"}),"\uff1aFramebuffer \u662f\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u533a\u57df\uff0c\u901a\u5e38\u6620\u5c04\u5230\u663e\u793a\u786c\u4ef6\u7684\u663e\u5b58\u533a\u57df\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u56fe\u50cf\u6e32\u67d3"}),"\uff1a\u6e32\u67d3\u56fe\u50cf\u901a\u5e38\u5305\u62ec\u50cf\u7d20\u586b\u5145\u3001\u989c\u8272\u8c03\u6574\u3001\u900f\u660e\u5ea6\u5904\u7406\u7b49\uff0c\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u8bbe\u7f6e\u50cf\u7d20\u503c\u3001\u7ed8\u5236\u56fe\u5f62\u7b49\u65b9\u5f0f\u6765\u66f4\u65b0 framebuffer \u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u4f5c\u6d41\u7a0b",children:"\u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u521d\u59cb\u5316"}),"\uff1a\u5f53\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u5185\u6838\u4f1a\u8bc6\u522b\u5e76\u521d\u59cb\u5316\u4e0e\u663e\u793a\u76f8\u5173\u7684\u786c\u4ef6\u8bbe\u5907\uff0c\u52a0\u8f7d\u76f8\u5e94\u7684 framebuffer \u9a71\u52a8\u7a0b\u5e8f\uff0c\u5e76\u521b\u5efa framebuffer \u8bbe\u5907\u8282\u70b9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6253\u5f00\u8bbe\u5907"}),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u6253\u5f00 ",(0,i.jsx)(n.code,{children:"/dev/fb0"})," \u6216\u5176\u4ed6 framebuffer \u8bbe\u5907\u8282\u70b9\u6765\u4e0e framebuffer \u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5199\u5165\u56fe\u50cf\u6570\u636e"}),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u5199\u5165 framebuffer \u8bbe\u5907\u6765\u66f4\u65b0\u663e\u793a\u5185\u5bb9\uff0c\u76f4\u63a5\u64cd\u4f5c framebuffer \u5185\u5b58\uff0c\u66f4\u65b0\u663e\u793a\u533a\u57df\u7684\u50cf\u7d20\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5237\u65b0\u663e\u793a"}),"\uff1a\u663e\u793a\u786c\u4ef6\u81ea\u52a8\u6216\u624b\u52a8\u5c06 framebuffer \u7684\u6570\u636e\u66f4\u65b0\u5230\u7269\u7406\u663e\u793a\u5668\u4e0a\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5173\u95ed\u8bbe\u5907"}),"\uff1a\u5e94\u7528\u7ed3\u675f\u65f6\uff0c\u5173\u95ed framebuffer \u8bbe\u5907\uff0c\u91ca\u653e\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5d4c\u5165\u5f0f\u7cfb\u7edf"}),"\uff1aFramebuffer \u9002\u5408\u5728\u5d4c\u5165\u5f0f\u7cfb\u7edf\u4e2d\u4f7f\u7528\uff0c\u5d4c\u5165\u5f0f\u8bbe\u5907\u901a\u5e38\u5177\u6709\u7279\u5b9a\u7684\u663e\u793a\u9700\u6c42\uff08\u5982\u5c0f\u5c4f\u5e55\u3001\u4f4e\u529f\u8017\u663e\u793a\uff09\uff0c\u4f7f\u7528 framebuffer \u53ef\u4ee5\u8282\u7701\u7cfb\u7edf\u8d44\u6e90\u5e76\u63d0\u9ad8\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u88f8\u673a\u56fe\u5f62\u5e94\u7528"}),"\uff1a\u5728\u4e00\u4e9b\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u7684\u5e94\u7528\u4e2d\uff0cFramebuffer \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u63a5\u4e0e\u663e\u793a\u786c\u4ef6\u4ea4\u4e92\u7684\u63a5\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6700\u5c0f\u5316\u64cd\u4f5c\u7cfb\u7edf"}),"\uff1a\u5bf9\u4e8e\u4e00\u4e9b\u6700\u5c0f\u5316\u7684 Linux \u53d1\u884c\u7248\uff0cFramebuffer \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u6709\u6548\u7684\u56fe\u5f62\u63a5\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u865a\u62df\u5316\u73af\u5883"}),"\uff1aFramebuffer \u4e5f\u53ef\u4ee5\u5728\u865a\u62df\u673a\u4e2d\u4f7f\u7528\uff0c\u901a\u8fc7\u865a\u62df framebuffer\uff0c\u865a\u62df\u673a\u80fd\u591f\u4ee5\u8f83\u4f4e\u7684\u5f00\u9500\u63d0\u4f9b\u56fe\u5f62\u663e\u793a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"t113s3\u4f7f\u7528\u6848\u4f8b",children:"T113s3\u4f7f\u7528\u6848\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"c\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <sys/types.h>                //open\u9700\u8981\u7684\u5934\u6587\u4ef6\n#include <sys/stat.h>\n#include <fcntl.h>\n#include <unistd.h>                //write\n#include <sys/types.h>\n#include <sys/mman.h>                //mmap  \u5185\u5b58\u6620\u5c04\u76f8\u5173\u51fd\u6570\u5e93\n#include <stdlib.h>                //malloc free \u52a8\u6001\u5185\u5b58\u7533\u8bf7\u548c\u91ca\u653e\u51fd\u6570\u5934\u6587\u4ef6\n#include <string.h>         \n#include <linux/fb.h>\n#include <sys/ioctl.h>\n\n//32\u4f4d\u7684\u989c\u8272\n#define Black         0x00000000\n#define White         0xffFFFFFF\n#define Red         0xffFF0000\n#define Green         0xff00ff00\n#define Blue         0xff99ffff\n\nint fd;\nunsigned int *fb_mem  = NULL;        //\u8bbe\u7f6e\u663e\u5b58\u7684\u4f4d\u6570\u4e3a32\u4f4d\nstruct fb_var_screeninfo var;\nstruct fb_fix_screeninfo fix;\n\nint main(void)\n{\n        unsigned int i;\n        int ret;\n\n        /*--------------\u7b2c\u4e00\u6b65--------------*/\n        fd = open("/dev/fb0",O_RDWR);                        //\u6253\u5f00framebuffer\u8bbe\u5907\n        if(fd == -1){\n                perror("Open LCD");\n                return -1;\n        }\n\n        /*--------------\u7b2c\u4e8c\u6b65--------------*/\n        //\u83b7\u53d6\u5c4f\u5e55\u7684\u53ef\u53d8\u53c2\u6570\n        ioctl(fd, FBIOGET_VSCREENINFO, &var);\n        //\u83b7\u53d6\u5c4f\u5e55\u7684\u56fa\u5b9a\u53c2\u6570\n        ioctl(fd, FBIOGET_FSCREENINFO, &fix);\n       \n          //\u6253\u5370\u5206\u8fa8\u7387\n        printf("xres= %d,yres= %d \\n",var.xres,var.yres);\n         //\u6253\u5370\u603b\u5b57\u8282\u6570\u548c\u6bcf\u884c\u7684\u957f\u5ea6\n        printf("line_length=%d,smem_len= %d \\n",fix.line_length,fix.smem_len);\n        printf("xpanstep=%d,ypanstep= %d \\n",fix.xpanstep,fix.ypanstep);\n\n        /*--------------\u7b2c\u4e09\u6b65--------------*/\n        \n  fb_mem = (unsigned int *)mmap(NULL, var.xres*var.yres*4,                 //\u83b7\u53d6\u663e\u5b58\uff0c\u6620\u5c04\u5185\u5b58\n                        PROT_READ |  PROT_WRITE, MAP_SHARED, fd, 0);  \n  \n        if(fb_mem == MAP_FAILED){\n                perror("Mmap LCD");\n                return -1;        \n        }\n\n        memset(fb_mem,0xff,var.xres*var.yres*4);                //\u6e05\u5c4f\n        sleep(1);\n\n        /*--------------\u7b2c\u56db\u6b65--------------*/\n        //\u5c06\u5c4f\u5e55\u5168\u90e8\u8bbe\u7f6e\u6210\u84dd\u8272\n        for(i=0;i< var.xres*var.yres ;i++)\n                fb_mem[i] = Blue;\n        sleep(2);\n        memset(fb_mem,0x00,var.xres*var.yres*4);                //\u6e05\u5c4f\n        \n        munmap(fb_mem,var.xres*var.yres*4); //\u6620\u5c04\u540e\u7684\u5730\u5740\uff0c\u901a\u8fc7mmap\u8fd4\u56de\u7684\u503c        \n        close(fd);                         //\u5173\u95edfb0\u8bbe\u5907\u6587\u4ef6\n        return 0;                        \n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee3\u7801\u8fd0\u884c\u6548\u679c\u5c4f\u5e55\u53d8\u6210\u84dd\u8272\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20250303092408471",src:r(61765).Z+"",width:"863",height:"591"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},61765:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/image-20250303092408471-2036f8c07fc5c848e438ca47915bdd3e.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>d});var i=r(67294);const s={},f=i.createContext(s);function d(e){const n=i.useContext(f);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(f.Provider,{value:n},e.children)}}}]);