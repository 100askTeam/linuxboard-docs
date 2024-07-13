"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1095],{68909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(85893),i=n(11151);const a={sidebar_position:7},o="\u52a0\u8f7d\u56fa\u4ef6",s={id:"TinyVision/part5/LoadFirmware",title:"\u52a0\u8f7d\u56fa\u4ef6",description:"\u9a71\u52a8\u4f4d\u4e8e kernel/linux-4.9/drivers/remoteproc/sunxirprocfirmware.c",source:"@site/docs/TinyVision/part5/7-LoadFirmware.md",sourceDirName:"TinyVision/part5",slug:"/TinyVision/part5/LoadFirmware",permalink:"/docs/TinyVision/part5/LoadFirmware",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part5/7-LoadFirmware.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"v851seSidebar",previous:{title:"\u914d\u7f6e\u542f\u52a8\u5c0f\u6838",permalink:"/docs/TinyVision/part5/ConfigureAndStartTheLittleCore"},next:{title:"\u914d\u7f6e\u65f6\u949f",permalink:"/docs/TinyVision/part5/ConfigureTheClocks"}},d={},c=[];function f(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u52a0\u8f7d\u56fa\u4ef6",children:"\u52a0\u8f7d\u56fa\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:["\u9a71\u52a8\u4f4d\u4e8e ",(0,r.jsx)(t.code,{children:"kernel/linux-4.9/drivers/remoteproc/sunxi_rproc_firmware.c"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u9996\u5148\u8c03\u7528 ",(0,r.jsx)(t.code,{children:"sunxi_request_firmware"})," \u51fd\u6570"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'int sunxi_request_firmware(const struct firmware **fw, const char *name, struct device *dev)\n{\n\tint ret, index;\n\tstruct firmware *fw_p = NULL;\n\tu32 img_addr, img_len;\n\n\tret = sunxi_find_firmware_storage();\n\tif (ret < 0) {\n\t\tdev_warn(dev, "Can\'t finded boot_package head\\n");\n\t\treturn -ENODEV;\n\t}\n\n\tindex = ret;\n\n\tret = sunxi_firmware_get_info(dev, index, name, &img_addr, &img_len);\n\tif (ret < 0) {\n\t\tdev_warn(dev, "failed to read boot_package item\\n");\n\t\tret = -EFAULT;\n\t\tgoto out;\n\t}\n\n\tret = sunxi_firmware_get_data(dev, index, img_addr, img_len, &fw_p);\n\tif (ret < 0) {\n\t\tdev_err(dev, "failed to read Firmware\\n");\n\t\tret = -ENOMEM;\n\t\tgoto out;\n\t}\n\n\t*fw = fw_p;\nout:\n\treturn ret;\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u9a71\u52a8\u4f1a\u4ece\u56fa\u4ef6\u7684\u7279\u5b9a\u4f4d\u7f6e\u8bfb\u53d6\uff0c\u4f7f\u7528\u51fd\u6570 ",(0,r.jsx)(t.code,{children:"sunxi_find_firmware_storage"}),"\uff0c\u8fd9\u91cc\u4f1a\u53bb\u56fa\u5b9a\u7684\u4f4d\u7f6e\u67e5\u627e\u56fa\u4ef6\uff0c\u4f4d\u7f6e\u5305\u62ec ",(0,r.jsx)(t.code,{children:"lib/firmware"}),"\uff0c",(0,r.jsx)(t.code,{children:"/dev/mtd0"}),". ",(0,r.jsx)(t.code,{children:"/dev/mtd1"}),", ",(0,r.jsx)(t.code,{children:"/dev/mmcblk0"})," \u7b49\u4f4d\u7f6e\u3002\u5bf9\u4e8eLinux\u542f\u52a8\u6211\u4eec\u53ea\u9700\u8981\u653e\u7f6e\u4e8e ",(0,r.jsx)(t.code,{children:"lib/firmware "})," \u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'static int sunxi_find_firmware_storage(void)\n{\n\tstruct firmware_head_info *head;\n\tint i, len, ret;\n\tloff_t pos;\n\tconst char *path;\n\tu32 flag;\n\n\tlen = sizeof(*head);\n\thead = kmalloc(len, GFP_KERNEL);\n\tif (!head)\n\t\treturn -ENOMEM;\n\n\tret = sunxi_get_storage_type();\n\n\tfor (i = 0; i < ARRAY_SIZE(firmware_storages); i++) {\n\t\tpath = firmware_storages[i].path;\n\t\tpos = firmware_storages[i].head_off;\n\t\tflag = firmware_storages[i].flag;\n\n\t\tif (flag != ret)\n\t\t\tcontinue;\n\n\t\tpr_debug("try to open %s\\n", path);\n\n\t\tret = sunxi_firmware_read(path, head, len, &pos, flag);\n\t\tif (ret < 0)\n\t\t\tpr_err("open %s failed,ret=%d\\n", path, ret);\n\n\t\tif (ret != len)\n\t\t\tcontinue;\n\n\t\tif (head->magic == FIRMWARE_MAGIC) {\n\t\t\tkfree(head);\n\t\t\treturn i;\n\t\t}\n\t}\n\n\tkfree(head);\n\n\treturn -ENODEV;\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);