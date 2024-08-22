"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[906],{79736:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=i(85893),t=i(11151);const d={sidebar_position:7},o="XR829\u6a21\u7ec4\u9002\u914d",r={id:"T113i-Industrial/part3/XR829ChipAdaptation",title:"XR829\u6a21\u7ec4\u9002\u914d",description:"\u672c\u7ae0\u8282\u5c06\u8bb2\u89e3\u5982\u4f55\u5728 TinaSDK5 \u9002\u914d xr829 \u6a21\u7ec4\uff0c\u5e76\u751f\u6210\u955c\u50cf\u3002",source:"@site/docs/T113i-Industrial/part3/07-XR829ChipAdaptation.md",sourceDirName:"T113i-Industrial/part3",slug:"/T113i-Industrial/part3/XR829ChipAdaptation",permalink:"/docs/T113i-Industrial/part3/XR829ChipAdaptation",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113i-Industrial/part3/07-XR829ChipAdaptation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"t113iSidebar",previous:{title:"MIPI\u5c4f\u9002\u914d",permalink:"/docs/T113i-Industrial/part3/MIPIScreenAdaptation"},next:{title:"\u5e94\u7528\u5f00\u53d1",permalink:"/docs/category/\u5e94\u7528\u5f00\u53d1"}},c={},a=[{value:"\u83b7\u53d6\u73af\u5883\u53d8\u91cf",id:"\u83b7\u53d6\u73af\u5883\u53d8\u91cf",level:2},{value:"\u5185\u6838\u8bbe\u5907\u6811\u4fee\u6539",id:"\u5185\u6838\u8bbe\u5907\u6811\u4fee\u6539",level:2},{value:"\u5185\u6838\u914d\u7f6e\u9009\u62e9",id:"\u5185\u6838\u914d\u7f6e\u9009\u62e9",level:2},{value:"Tina\u914d\u7f6e\u9009\u62e9",id:"tina\u914d\u7f6e\u9009\u62e9",level:2},{value:"1.\u6dfb\u52a0xr829\u56fa\u4ef6",id:"1\u6dfb\u52a0xr829\u56fa\u4ef6",level:3},{value:"2.\u5f00\u542fodhcp6c",id:"2\u5f00\u542fodhcp6c",level:3},{value:"\u7f16\u8bd1\u6253\u5305\u66f4\u65b0",id:"\u7f16\u8bd1\u6253\u5305\u66f4\u65b0",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"xr829\u6a21\u7ec4\u9002\u914d",children:"XR829\u6a21\u7ec4\u9002\u914d"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5c06\u8bb2\u89e3\u5982\u4f55\u5728 TinaSDK5 \u9002\u914d xr829 \u6a21\u7ec4\uff0c\u5e76\u751f\u6210\u955c\u50cf\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u83b7\u53d6\u73af\u5883\u53d8\u91cf",children:"\u83b7\u53d6\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(n.p,{children:"\u5728ubuntu\u4e0a\uff0c\u65b0\u5efa\u4e00\u4e2a\u7ec8\u7aef\uff0c\u8fdb\u5165TinaSDK5\u6839\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source build/envsetup.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"source build/envsetup.sh \uff1a\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/T113-i/tina5sdk-bsp$ source build/envsetup.sh \nNOTE: The SDK(/home/ubuntu/T113-i/tina5sdk-bsp) was successfully loaded\nload openwrt... ok\nPlease run lunch next for openwrt.\nload buildroot,bsp...ok\nInvoke . build/quick.sh from your shell to add the following functions to your environment:\n    croot                          - Changes directory to the top of the tree\n    cbsp                           - Changes directory to the bsp\n    cbsptest                       - Changes directory to the bsptest\n    ckernel                        - Changes directory to the kernel\n    cbrandy                        - Changes directory to the brandy\n    cboot                          - Changes directory to the uboot\n    cbr                            - Changes directory to the buildroot\n    cchips                         - Changes directory to the board\n    cconfigs                       - Changes directory to the board's config\n    cbin                           - Changes directory to the board's bin\n    cdts                           - Changes directory to the kernel's dts\n    ckernelout                     - Changes directory to the kernel output\n    cout                           - Changes directory to the product's output\n    copenssl                       - Changes directory to the product's openssl-1.0.0\nUsage: build.sh [args]\n    build.sh                       - default build all\n    build.sh bootloader            - only build bootloader\n    build.sh kernel                - only build kernel\n    build.sh buildroot_rootfs      - only build buildroot\n    build.sh menuconfig            - edit kernel menuconfig\n    build.sh saveconfig            - save kernel menuconfig\n    build.sh recovery_menuconfig   - edit recovery menuconfig\n    build.sh recovery_saveconfig   - save recovery menuconfig\n    build.sh buildroot_menuconfig  - edit buildroot menuconfig\n    build.sh buildroot_saveconfig  - save buildroot menuconfig\n    build.sh clean                 - clean all\n    build.sh distclean             - distclean all\n    build.sh pack                  - pack firmware\n    build.sh pack_debug            - pack firmware with debug info output to card0\n    build.sh pack_secure           - pack firmware with secureboot\nUsage: pack [args]\n    pack                           - pack firmware\n    pack -d                        - pack firmware with debug info output to card0\n    pack -s                        - pack firmware with secureboot\n    pack -sd                       - pack firmware with secureboot and debug info output to card0\nubuntu@ubuntu1804:~/T113-i/tina5sdk-bsp$\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u76f8\u5e94\u7684\u6307\u4ee4\u6765\u914d\u7f6exr829\u6a21\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u6838\u8bbe\u5907\u6811\u4fee\u6539",children:"\u5185\u6838\u8bbe\u5907\u6811\u4fee\u6539"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u67e5\u770b\u539f\u7406\u56fe"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8ewifi\u529f\u80fd\u9700\u8981\u67e5\u770b\u7684\u5f15\u811a\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722094736975",src:i(39567).Z+"",width:"1719",height:"597"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u56fe\u53ef\u77e5\uff0c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WL_REG_ON"}),"   \u5bf9\u5e94\u7684\u5f15\u811a\u662f ==> ",(0,s.jsx)(n.code,{children:"PB12"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WL_WAKE_AP"})," \u5bf9\u5e94\u7684\u5f15\u811a\u662f ==> ",(0,s.jsx)(n.code,{children:"PG10"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u84dd\u7259\u529f\u80fd\u9700\u8981\u67e5\u770b\u7684\u5f15\u811a\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722100210725",src:i(91984).Z+"",width:"1339",height:"788"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u56fe\u53ef\u77e5\uff0c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BT_RST_N"})," \u5bf9\u5e94\u7684\u5f15\u811a\u662f ==> ",(0,s.jsx)(n.code,{children:"PG18"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728TinaSDK\u6e90\u7801\u4e2d\uff0c\u8fdb\u5165\u76ee\u5f55",(0,s.jsx)(n.code,{children:"/device/config/chips/t113_i/configs/evb1_auto/linux-5.4"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539\u76ee\u5f55\u4e0b\u7684\u5185\u6838\u8bbe\u5907\u6811\u6587\u4ef6",(0,s.jsx)(n.code,{children:"board.dts"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim board.dts\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8ewifi\u8bbe\u5907\u6811\u8282\u70b9\u4fee\u6539\u5bf9\u5e94\u7684\u5f15\u811a\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u666e\u901a\u6a21\u5f0f\u4e0b\uff0c\u952e\u76d8\u8f93\u5165",(0,s.jsx)(n.code,{children:"/wlan"}),"\uff0c\u627e\u5230wlan\u8bbe\u5907\u6811\u8282\u70b9\uff0c\u70b9\u51fb\u952e\u76d8\u4e0a\u7684",(0,s.jsx)(n.code,{children:"i"}),"\u952e\uff0c\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u4fee\u6539\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722095001631",src:i(47064).Z+"",width:"1278",height:"497"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u84dd\u7259\u8bbe\u5907\u6811\u8282\u70b9\u4fee\u6539\u5bf9\u5e94\u7684\u5f15\u811a\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u952e\u76d8\u7684",(0,s.jsx)(n.code,{children:"esc"}),"\u952e\u8fdb\u5165\u666e\u901a\u6a21\u5f0f\uff0c\u8f93\u5165",(0,s.jsx)(n.code,{children:"/bt"}),"\uff0c\u627e\u5230\u84dd\u7259\u8bbe\u5907\u6811\u8282\u70b9\uff0c\u70b9\u51fb\u952e\u76d8\u4e0a\u7684",(0,s.jsx)(n.code,{children:"i"}),"\u952e\uff0c\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u4fee\u6539\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722100324084",src:i(22630).Z+"",width:"1146",height:"332"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u666e\u901a\u6a21\u5f0f\u4e0b\uff0c\u8f93\u5165",(0,s.jsx)(n.code,{children:":wq"}),"\uff0c\u56de\u8f66\u4e4b\u540e\uff0c\u5373\u53ef\u4fdd\u5b58\u9000\u51fa\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u6838\u914d\u7f6e\u9009\u62e9",children:"\u5185\u6838\u914d\u7f6e\u9009\u62e9"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u5165TinaSDK\u6e90\u7801\u76ee\u5f55\uff0c"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"./build.sh menuconfig"}),"\u8fdb\u5165\u5185\u6838\u914d\u7f6e\u754c\u9762\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"Device Drivers"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722173759419",src:i(66280).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:" Network device support"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722173929498",src:i(95406).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:" Wireless LAN"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174010522",src:i(97474).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"XR829 WLAN support"}),"\uff0c\u6309\u4f4f\u952e\u76d8",(0,s.jsx)(n.code,{children:"M"}),"\uff0c\u9009\u4e3a\u7f16\u8bd1\u6210\u5185\u6838\u6a21\u5757\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174031444",src:i(57678).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a7\u5236\u952e\u76d8\u4e0a\u7684\u65b9\u5411\u952e\uff0c\u9009\u62e9",(0,s.jsx)(n.code,{children:"Save"}),"\uff0c\u4e00\u8def\u56de\u8f66\uff0c\u4fdd\u5b58\u5b8c\u6bd5\u540e\uff0c\u6700\u540e\u9009\u62e9",(0,s.jsx)(n.code,{children:"Exit"}),"\uff0c\u76f4\u5230\u9000\u51fa\u4e3a\u6b62\u9000\u51fa\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728TinaSDK\u6e90\u7801\u76ee\u5f55\u4e0b\uff0c\u6267\u884c",(0,s.jsx)(n.code,{children:"./build.sh kernel"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ubuntu@dshanpi:~/meihao/t113i_tinasdk5.0-v1$ ./build.sh kernel\n========ACTION List: build_kernel ;========\noptions :\nINFO: build kernel ...\nINFO: prepare_buildserver\nINFO: Prepare toolchain ...\nBuilding kernel\n...\nCopy boot.img to output directory ...\n\nsun8iw20p1 compile all(Kernel+modules+boot.img) successful\n\n\nINFO: build dts ...\nINFO: Prepare toolchain ...\nremoved '/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/buildroot/.board.dtb.d.dtc.tmp'\nremoved '/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/buildroot/.board.dtb.dts.tmp'\n'/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/kernel/build/arch/arm/boot/dts/.board.dtb.d.dtc.tmp' -> '/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/buildroot/.board.dtb.d.dtc.tmp'\n'/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/kernel/build/arch/arm/boot/dts/.board.dtb.dts.tmp' -> '/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/buildroot/.board.dtb.dts.tmp'\n'/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/kernel/staging/sunxi.dtb' -> '/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/buildroot/sunxi.dtb'\nubuntu@dshanpi:~/meihao/t113i_tinasdk5.0-v1$\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tina\u914d\u7f6e\u9009\u62e9",children:"Tina\u914d\u7f6e\u9009\u62e9"}),"\n",(0,s.jsx)(n.h3,{id:"1\u6dfb\u52a0xr829\u56fa\u4ef6",children:"1.\u6dfb\u52a0xr829\u56fa\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728TinaSDK\u6e90\u7801\u76ee\u5f55\u4e0b\uff0c\u6267\u884c",(0,s.jsx)(n.code,{children:"./build.sh buildroot_menuconfig"}),"\uff0c\u8fdb\u5165Tina\u914d\u7f6e\u754c\u9762\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"Target packages"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174546971",src:i(68867).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"allwinner platform private package select"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174640109",src:i(62355).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"wireless"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174724011",src:i(31645).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"firmware"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174751600",src:i(48206).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5148\u70b9\u51fb\u952e\u76d8",(0,s.jsx)(n.code,{children:"y"}),"\uff0c\u9009\u62e9",(0,s.jsx)(n.code,{children:"xr829-firmware"}),"\uff0c\u7136\u540e\u9009\u62e9",(0,s.jsx)(n.code,{children:"xr829_24M"}),"\uff0c\u56e0\u4e3a\u677f\u5b50\u4e0axr829\u82af\u7247\u65c1\u8fb9\u7528\u7684\u6676\u632f\u662f24M\u7684\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722174821908",src:i(73639).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsx)(n.h3,{id:"2\u5f00\u542fodhcp6c",children:"2.\u5f00\u542fodhcp6c"}),"\n",(0,s.jsx)(n.p,{children:"odhcp6c\u7684\u6838\u5fc3\u4f5c\u7528\u5728\u4e8e\u7b80\u5316\u5e76\u81ea\u52a8\u5316IPv6\u7f51\u7edc\u73af\u5883\u4e0b\u7684\u5730\u5740\u914d\u7f6e\u8fc7\u7a0b\uff0c\u786e\u4fdd\u8bbe\u5907\u80fd\u591f\u987a\u5229\u63a5\u5165\u5e76\u901a\u4fe1\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u7740\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u9000\u51fa\u5230",(0,s.jsx)(n.code,{children:"Target packages"}),"\u4e0b\uff0c\u627e\u5230",(0,s.jsx)(n.code,{children:"Networking applications"}),"\uff0c\u8fdb\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722175208320",src:i(43191).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u627e\u5230",(0,s.jsx)(n.code,{children:"odhcp6c"}),"\uff0c\u70b9\u51fb\u952e\u76d8",(0,s.jsx)(n.code,{children:"y"}),"\uff0c\u9009\u4e0a\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240722175256342",src:i(49010).Z+"",width:"1659",height:"890"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a7\u5236\u952e\u76d8\u7684\u65b9\u5411\u952e\uff0c\u9009\u62e9",(0,s.jsx)(n.code,{children:"Save"}),"\uff0c\u4e00\u8def\u56de\u8f66\uff0c\u4fdd\u5b58\u5b8c\u6bd5\u540e\uff0c\u6700\u540e\u9009\u62e9",(0,s.jsx)(n.code,{children:"Exit"}),"\uff0c\u76f4\u5230\u9000\u51fa\u4e3a\u6b62\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7f16\u8bd1\u6253\u5305\u66f4\u65b0",children:"\u7f16\u8bd1\u6253\u5305\u66f4\u65b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728TinaSDK\u6e90\u7801\u76ee\u5f55\u4e0b\uff0c\u6267\u884c",(0,s.jsx)(n.code,{children:"./build.sh"}),"\u7f16\u8bd1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240819163057762",src:i(33567).Z+"",width:"1453",height:"786"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u8f93\u5165",(0,s.jsx)(n.code,{children:"./build.sh pack"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ubuntu@dshanpi:~/meihao/t113i_tinasdk5.0-v1$ ./build.sh pack\n========ACTION List: mk_pack ;========\noptions :\nINFO: packing firmware ...\nINFO: /home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/common/keys\ncopying tools file\ncopying configs file\ncopying product configs file\nlinux copying boardt&linux_kernel_version configs file\n...\nupdate gpt file ok\nupdate mbr file ok\n/home/ubuntu/meihao/t113i_tinasdk5.0-v1/tools/pack/pctools/linux/eDragonEx/\n/home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i/evb1_auto/pack_out\nBegin Parse sys_partion.fex\nAdd partion boot-resource.fex BOOT-RESOURCE_FEX\nAdd partion very boot-resource.fex BOOT-RESOURCE_FEX\nFilePath: boot-resource.fex\nFileLength=dad400Add partion env.fex ENV_FEX000000000\nAdd partion very env.fex ENV_FEX000000000\nFilePath: env.fex\nFileLength=20000Add partion env.fex ENV_FEX000000000\nAdd partion very env.fex ENV_FEX000000000\nFilePath: env.fex\nFileLength=20000Add partion boot.fex BOOT_FEX00000000\nAdd partion very boot.fex BOOT_FEX00000000\nFilePath: boot.fex\nFileLength=920800Add partion rootfs.fex ROOTFS_FEX000000\nAdd partion very rootfs.fex ROOTFS_FEX000000\nFilePath: rootfs.fex\nFileLength=b260880Add partion amp_rv0.fex AMP_RV0_FEX00000\nAdd partion very amp_rv0.fex AMP_RV0_FEX00000\nFilePath: amp_rv0.fex\nFileLength=29eb8BuildImg 0\nDragon execute image.cfg SUCCESS !\n----------image is at----------\n\n266M    /home/ubuntu/meihao/t113i_tinasdk5.0-v1/out/t113_i_linux_evb1_auto_uart0.img\n\npack finish\nubuntu@dshanpi:~/meihao/t113i_tinasdk5.0-v1$\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5305\u5b8c\u6210\u540e\uff0c\u6839\u636e\u524d\u9762",(0,s.jsx)(n.code,{children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\u7ae0\u8282\u7684\u70e7\u5199\u65b9\u5f0f\u628a\u955c\u50cf ",(0,s.jsx)(n.code,{children:"t113_i_linux_evb1_auto_uart0.img"})," \u70e7\u5199\u5230\u5f00\u53d1\u677f\u4e0a\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},39567:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722094736975-9c5915f10b888dfe3b6501762fee430a.png"},47064:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722095001631-6522e1230773f969e8e75a321fea9f97.png"},91984:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722100210725-2f6bda3aaf44621512630c081330d852.png"},22630:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722100324084-fda53eee086fe5f55361d00493c36f23.png"},66280:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722173759419-c7d30db2cb437d37d74aabe47f703aaf.png"},95406:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722173929498-0b378a43ed66ddd07bc916426ef64414.png"},97474:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174010522-751a8d1c23371dc88cb3f1453a5354ef.png"},57678:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174031444-ede3d4a155e76771a868c39ab6fdce07.png"},68867:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174546971-0ce6fa0ac40c55bc83d4f9f59e0b947c.png"},62355:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174640109-ee426025fc87ae13ad390df215f15d0c.png"},31645:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174724011-e26a03666bc001626ed0ae7dd7b87fc5.png"},48206:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174751600-ff188cce69f89932b2e9552d01c97fa2.png"},73639:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722174821908-a24116b6f09fb76da0dd87630be5c42d.png"},43191:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722175208320-c96fb9731c8114ad033143e3c0e05449.png"},49010:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240722175256342-5d896ed8e95e4ca40935ca2505c58148.png"},33567:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image-20240819163057762-7a770f4da70db3374cc7956c98a60913.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(67294);const t={},d=s.createContext(t);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);