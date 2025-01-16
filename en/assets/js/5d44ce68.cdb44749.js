"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5158],{5328:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var l=t(85893),i=t(11151);const d={sidebar_position:8},s="Uboot\u67e5\u770b\u5e76\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811\u8282\u70b9",r={id:"T113s3-Pro/part7/ViewAndModifyKernelDeviceTreeNodesInUboot",title:"Uboot\u67e5\u770b\u5e76\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811\u8282\u70b9",description:"FDT\u547d\u4ee4\u8bf4\u660e",source:"@site/docs/T113s3-Pro/part7/08-ViewAndModifyKernelDeviceTreeNodesInUboot.md",sourceDirName:"T113s3-Pro/part7",slug:"/T113s3-Pro/part7/ViewAndModifyKernelDeviceTreeNodesInUboot",permalink:"/en/docs/T113s3-Pro/part7/ViewAndModifyKernelDeviceTreeNodesInUboot",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/T113s3-Pro/part7/08-ViewAndModifyKernelDeviceTreeNodesInUboot.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"t113s3proSidebar",previous:{title:"Uboot\u652f\u6301\u7684\u547d\u4ee4",permalink:"/en/docs/T113s3-Pro/part7/UbootSupportedCommands"},next:{title:"\u4f7f\u7528fastboot\u66f4\u65b0\u90e8\u5206\u7cfb\u7edf",permalink:"/en/docs/T113s3-Pro/part7/UpdatePartsOfTheSystemUsingFastboot"}},c={},a=[{value:"FDT\u547d\u4ee4\u8bf4\u660e",id:"fdt\u547d\u4ee4\u8bf4\u660e",level:3},{value:"1.  \u67e5\u8be2\u914d\u7f6e",id:"1--\u67e5\u8be2\u914d\u7f6e",level:3},{value:"2. \u4fee\u6539\u914d\u7f6e",id:"2-\u4fee\u6539\u914d\u7f6e",level:3},{value:"2.1 \u4fee\u6539\u6574\u6570\u914d\u7f6e",id:"21-\u4fee\u6539\u6574\u6570\u914d\u7f6e",level:4},{value:"2.2 \u4fee\u6539\u5b57\u7b26\u4e32\u914d\u7f6e",id:"22-\u4fee\u6539\u5b57\u7b26\u4e32\u914d\u7f6e",level:4},{value:"3. GPIO \u6216\u8005 PIN \u914d\u7f6e\u7279\u6b8a\u8bf4\u660e",id:"3-gpio-\u6216\u8005-pin-\u914d\u7f6e\u7279\u6b8a\u8bf4\u660e",level:3},{value:"3.1 PIN \u914d\u7f6e\u8bf4\u660e",id:"31-pin-\u914d\u7f6e\u8bf4\u660e",level:4},{value:"3.2 \u67e5\u770b PIN \u914d\u7f6e",id:"32-\u67e5\u770b-pin-\u914d\u7f6e",level:4},{value:"3.3 \u4fee\u6539 PIN \u914d\u7f6e",id:"33-\u4fee\u6539-pin-\u914d\u7f6e",level:4},{value:"3.4 GPIO \u914d\u7f6e\u8bf4\u660e",id:"34-gpio-\u914d\u7f6e\u8bf4\u660e",level:4}];function x(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"uboot\u67e5\u770b\u5e76\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811\u8282\u70b9",children:"Uboot\u67e5\u770b\u5e76\u4fee\u6539\u5185\u6838\u8bbe\u5907\u6811\u8282\u70b9"}),"\n",(0,l.jsx)(e.h3,{id:"fdt\u547d\u4ee4\u8bf4\u660e",children:"FDT\u547d\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:"FDT\uff1aflattened device tree \u7684\u7f29\u5199\u5728 U-Boot \u63a7\u5236\u53f0\u505c\u4e0b\u540e\uff0c\u8f93\u5165fdt\uff0c\u53ef\u4ee5\u67e5\u770bfdt\u547d\u4ee4\u5e2e\u52a9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"sunxi#fdt\nfdt - flattened device tree utility commands\nUsage:\nfdt addr [-c] <addr> [<length>] - Set the [control] fdt location to <addr>\nfdt move <fdt> <newaddr> <length> - Copy the fdt to <addr> and make it active\nfdt resize - Resize fdt to size + padding to 4k addr\nfdt print <path> [<prop>] - Recursive print starting at <path>\nfdt list <path> [<prop>] - Print one level starting at <path>\nfdt get value <var> <path> <prop> - Get <property> and store in <var>\nfdt get name <var> <path> <index> - Get name of node <index> and store in <var>\nfdt get addr <var> <path> <prop> - Get start address of <property> and store in <var>\nfdt get size <var> <path> [<prop>] - Get size of [<property>] or num nodes and store in <var>\nfdt set <path> <prop> [<val>] - Set <property> [to <val>]\nfdt mknode <path> <node> - Create a new node after <path>\nfdt rm <path> [<prop>] - Delete the node or <property>\nfdt header\nfdt bootcpu <id> - Set boot cpuid\nfdt memory <addr> <size> - Add/Update memory node\nfdt rsvmem print - Show current mem reserves\nfdt rsvmem add <addr> <size> - Add a mem reserve\nfdt rsvmem delete <index> - Delete a mem reserves\nfdt chosen [<start> <end>] - Add/update the /chosen branch in the tree\n<start>/<end> - initrd start/end addr\nNOTE: Dereference aliases by omiting the leading '/', e.g. fdt print ethernet0\u3002\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5176\u4e2d\u5e38\u7528\u7684\u547d\u4ee4\u5c31\u662ffdt list \u548c fdt set,fdt list \u7528\u6765\u67e5\u8be2\u8282\u70b9\u914d\u7f6e,fdt set \u7528\u6765\u4fee\u6539\u8282\u70b9\u914d\u7f6e\u3002"})}),"\n",(0,l.jsx)(e.h3,{id:"1--\u67e5\u8be2\u914d\u7f6e",children:"1.  \u67e5\u8be2\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\u786e\u5b9a\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u5728 device tree \u7684\u8def\u5f84\uff0c\u5982\u679c\u4e0d\u77e5\u9053\u8def\u5f84\uff0c\u5219\u9700\u8981\u7528fdt\u547d\u4ee4\u6309\u4ee5\u4e0b\u6b65\u9aa4\u8fdb"}),"\n",(0,l.jsx)(e.p,{children:"\u884c\u67e5\u8be2\u30021. \u5728\u6839\u76ee\u5f55\u4e0b\u67e5\u627e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /\n/ {\n    model = "{LICHEE_CHIP}";\n    compatible = "arm,{LICHEE_CHIP}", "arm,{LICHEE_CHIP}";\n    interrupt-parent = <0x00000001>;\n    #address-cells = <0x00000002>;\n    #size-cells = <0x00000002>;\n    ......................\n    cpuscfg {\n    };\n    ion {\n    };\n    dram {\n    };\n    memory@40000000 {\n    };\n    interrupt-controller@1c81000 {\n    };\n    sunxi-chipid@1c14200 {\n    };\n    timer {\n    };\n    pmu {\n    };\n    dvfs_table {\n    };\n    dramfreq {\n    };\n    gpu@0x01c40000 {\n    };\n    wlan {\n    };\n    bt {\n    };\n    btlpm {\n    };\n};\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u627e\u5230\u9700\u8981\u7684\u914d\u7f6e\uff0c\u6bd4\u5982wlan\u7684\u914d\u7f6e\uff0c\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /wlan //\u6ce8\u610f\u8def\u5f84\u4e2d\u7684 /\nwlan {\n    compatible = "allwinner,sunxi-wlan";\n    clocks = <0x00000096>;\n    wlan_power = "vcc-wifi";\n    wlan_io_regulator = "vcc-wifi-io";\n    wlan_busnum = <0x00000001>;\n    status = "okay";\n    device_type = "wlan";\n    wlan_regon = <0x00000077 0x0000000b 0x00000002 0x00000001 0xffffffff 0xffffffff 0\n    x00000000>;\n    wlan_hostwake = <0x00000077 0x0000000b 0x00000003 0x00000006 0xffffffff 0xffffffff\n    0x00000000>;\n};\n'})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728 soc\u76ee\u5f55\u4e0b\u627e\u3002\u5982\u679c\u5728\u7b2c\u4e00\u6b65\u4e2d\u6ca1\u6709\u53d1\u73b0\u8981\u627e\u7684\u914d\u7f6e\uff0c\u6bd4\u5982nand0\u7684\u914d\u7f6e\uff0c\u5219\u8be5\u914d\u7f6e\u53ef\u80fd\u5728soc\u76ee\u5f55\u4e0b\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /soc\nsoc@01c00000 {\n    compatible = "simple-bus";\n    #address-cells = <0x00000002>;\n    #size-cells = <0x00000002>;\n    ranges;\n    device_type = "soc";\n    ......................\n    hdmi@01ee0000 {\n    };\n    tr@01000000 {\n    };\n    pwm@01c21400 {\n    };\n    nand0@01c03000 {\n    };\n    thermal_sensor {\n    };\n    cpu_budget_cool {\n    };\n    .......................\n};\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540e\u7528\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u5373\u53ef:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /soc/nand0\nnand0@01c03000 {\n    compatible = "allwinner,sun50i-nand";\n    device_type = "nand0";\n    reg = <0x00000000 0x01c03000 0x00000000 0x00001000>;\n    interrupts = <0x00000000 0x00000046 0x00000004>;\n    clocks = <0x00000004 0x0000007e>;\n    pinctrl-names = "default", "sleep";\n    pinctrl-1 = <0x00000081>;\n    nand0_regulator1 = "vcc-nand";\n    nand0_regulator2 = "none";\n    nand0_cache_level = <0x55aaaa55>;\n    nand0_flush_cache_num = <0x55aaaa55>;\n    nand0_capacity_level = <0x55aaaa55>;\n    nand0_id_number_ctl = <0x55aaaa55>;\n    nand0_print_level = <0x55aaaa55>;\n    nand0_p0 = <0x55aaaa55>;\n    nand0_p1 = <0x55aaaa55>;\n    nand0_p2 = <0x55aaaa55>;\n    nand0_p3 = <0x55aaaa55>;\n    status = "disabled";\n    nand0_support_2ch = <0x00000000>;\n    pinctrl-0 = <0x000000a9 0x000000aa>;\n};\n'})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528\u8def\u5f84\u522b\u540d\u67e5\u627e\u3002\u522b\u540d\u662f device tree \u4e2d\u5b8c\u6574\u8def\u5f84\u7684\u4e00\u4e2a\u7b80\u5199\uff0c\u6709\u4e00\u4e2a\u4e13\u95e8\u7684\u8282\u70b9 ( /aliases) \u6765\u8868\u793a\u522b\u540d\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u7528\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u7cfb\u7edf\u4e2d\u522b\u540d\u7684\u914d\u7f6e\u60c5\u51b5\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /aliases\naliases {\n    serial0 = "/soc@01c00000/uart@01c28000";\n    ..............\n    mmc0 = "/soc@01c00000/sdmmc@01c0f000";\n    mmc2 = "/soc@01c00000/sdmmc@01C11000";\n    nand0 = "/soc@01c00000/nand0@01c03000";\n    disp = "/soc@01c00000/disp@01000000";\n    lcd0 = "/soc@01c00000/lcd0@01c0c000";\n    hdmi = "/soc@01c00000/hdmi@01ee0000";\n    pwm = "/soc@01c00000/pwm@01c21400";\n    boot_disp = "/soc@01c00000/boot_disp";\n};\nsunxi#\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e\u914d\u7f6e\u4e86nand0\u8282\u70b9\u7684\u8def\u5f84\u522b\u540d\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u663e\u793anand0\u7684\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list nand0\nnand0@01c03000 {\n    compatible = "allwinner,sun50i-nand";\n    device_type = "nand0";\n    reg = <0x00000000 0x01c03000 0x00000000 0x00001000>;\n    ..................\n    pinctrl-names = "default", "sleep";\n    pinctrl-1 = <0x00000081>;\n};\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\uff1a\u5728fdt\u7684\u6240\u6709\u547d\u4ee4\u4e2d\uff0calias \u53ef\u4ee5\u7528\u4f5cpath\u53c2\u6570\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"fdt list <path> [<prop>] - Print one level starting at <path>\nfdt set <path> <prop> [<val>] - Set <property> [to <val>]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u4fee\u6539\u914d\u7f6e",children:"2. \u4fee\u6539\u914d\u7f6e"}),"\n",(0,l.jsx)(e.h4,{id:"21-\u4fee\u6539\u6574\u6570\u914d\u7f6e",children:"2.1 \u4fee\u6539\u6574\u6570\u914d\u7f6e"}),"\n",(0,l.jsxs)(e.p,{children:["\u547d\u4ee4\u683c\u5f0f\uff1afdt set path prop \u793a\u4f8b\uff1afdt set /wlan wlan_busnum ",(0,l.jsx)(e.code,{children:"<0x2>"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /wlan\nwlan {\n    compatible = "allwinner,sunxi-wlan";\n    clocks = <0x00000096>;\n    wlan_power = "vcc-wifi";\n    wlan_io_regulator = "vcc-wifi-io";\n    wlan_busnum = <0x00000001>;\n    status = "disable";\n    device_type = "wlan";\n};\nsunxi#fdt set /wlan wlan_busnum <0x2>\nsunxi#fdt list /wlan\nwlan {\n    compatible = "allwinner,sunxi-wlan";\n    clocks = <0x00000096>;\n    wlan_power = "vcc-wifi";\n    wlan_io_regulator = "vcc-wifi-io";\n    wlan_busnum = <0x00000002>; //\u4fee\u6539\u540e\n    status = "disable";\n    device_type = "wlan";\n};\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6ce8\uff1a\u4fee\u6539\u6574\u6570\u65f6\uff0c\u6839\u636e\u9700\u8981\u4e5f\u53ef\u914d\u7f6e\u4e3a\u6570\u7ec4\u5f62\u5f0f\uff0c\u9700\u8981\u7528\u7a7a\u683c\u6765\u5206\u9694\u3002\u547d\u4ee4\u683c\u5f0f\uff1afdt set path prop ",(0,l.jsx)(e.code,{children:"<0x1 0x2 0x3>"})]}),"\n",(0,l.jsx)(e.h4,{id:"22-\u4fee\u6539\u5b57\u7b26\u4e32\u914d\u7f6e",children:"2.2 \u4fee\u6539\u5b57\u7b26\u4e32\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:'\u547d\u4ee4\u683c\u5f0f\uff1afdt set path prop "xxxxx" \u793a\u4f8b\uff1afdt set /wlan status "disable"'}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /wlan\nwlan {\n    compatible = "allwinner,sunxi-wlan";\n    clocks = <0x00000096>;\n    wlan_power = "vcc-wifi";\n    wlan_io_regulator = "vcc-wifi-io";\n    wlan_busnum = <0x00000001>;\n    status = "okay";\n    device_type = "wlan";\n};\nsunxi#fdt set /wlan status "disable"\nsunxi#fdt list /wlan\nwlan {\n    compatible = "allwinner,sunxi-wlan";\n    clocks = <0x00000096>;\n    wlan_power = "vcc-wifi";\n    wlan_io_regulator = "vcc-wifi-io";\n    wlan_busnum = <0x00000001>;\n    status = "disable"; //\u4fee\u6539\u540e\n    device_type = "wlan";\n};\nsunxi#\n'})}),"\n",(0,l.jsx)(e.p,{children:'\u6ce8\uff1a\u4fee\u6539\u5b57\u7b26\u4e32\u65f6\uff0c\u6839\u636e\u9700\u8981\u4e5f\u53ef\u914d\u7f6e\u4e3a\u6570\u7ec4\u5f62\u5f0f\uff0c\u9700\u8981\u7528\u7a7a\u683c\u6765\u5206\u9694\u3002\u547d\u4ee4\u683c\u5f0f\uff1afdt set path prop "string1" "string2"'}),"\n",(0,l.jsx)(e.h3,{id:"3-gpio-\u6216\u8005-pin-\u914d\u7f6e\u7279\u6b8a\u8bf4\u660e",children:"3. GPIO \u6216\u8005 PIN \u914d\u7f6e\u7279\u6b8a\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u53e3\u5bf9\u5e94\u7684\u6570\u5b57\u7f16\u53f7\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"#define PA 0\n#define PB 1\n#define PC 2\n#define PD 3\n#define PE 4\n#define PF 5\n#define PG 6\n#define PH 7\n#define PI 8\n#define PJ 9\n#define PK 10\n#define PL 11\n#define PM 12\n#define PN 13\n#define PO 14\n#define PP 15\n#define default 0xffffffff\n"})}),"\n",(0,l.jsxs)(e.p,{children:["Sysconfig \u4e2d\u63cf\u8ff0 gpio \u7684\u5f62\u5f0f\u5982\u4e0b\uff1a",(0,l.jsx)(e.code,{children:"Port:\u7aef\u53e3+\u7ec4\u5185\u5e8f\u53f7<\u529f\u80fd\u5206\u914d><\u5185\u90e8\u7535\u963b\u72b6\u6001><\u9a71\u52a8\u80fd\u529b><\u8f93\u51fa\u7535\u5e73\u72b6\u6001>"})]}),"\n",(0,l.jsx)(e.h4,{id:"31-pin-\u914d\u7f6e\u8bf4\u660e",children:"3.1 PIN \u914d\u7f6e\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:"Pinctrl \u8282\u70b9\u5206\u4e3a cpux \u548c cpus\uff0c\u5bf9\u5e94\u7684\u8282\u70b9\u8def\u5f84\u5982\u4e0b\uff1aCpux : /soc/pinctrl@01c20800 Cpus:/soc/pinctrl@01f02c00"}),"\n",(0,l.jsx)(e.h4,{id:"32-\u67e5\u770b-pin-\u914d\u7f6e",children:"3.2 \u67e5\u770b PIN \u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"PIN \u914d\u7f6e\u5c5e\u6027\u5b57\u6bb5\u8bf4\u660e:"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5c5e\u6027\u5b57\u6bb5"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u542b\u4e49"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,function"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5bf9\u5e94\u4e8e sysconfig \u4e2d\u7684\u4e3b\u952e\u540d"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,pins"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5bf9\u5e94\u4e8e sysconfig \u4e2d\u6bcf\u4e2a gpio \u914d\u7f6e\u4e2d\u7684\u7aef\u53e3\u540d"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,pname"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5bf9\u5e94\u4e8e sysconfig \u4e2d\u4e3b\u952e\u4e0b\u9762\u5b50\u952e\u540d\u5b57"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,muxsel"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u529f\u80fd\u5206\u914d"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,pull"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5185\u90e8\u7535\u963b\u72b6\u6001"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,drive"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u9a71\u52a8\u80fd\u529b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"allwinner,data"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8f93\u51fa\u7535\u5e73\u72b6\u6001"})]})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5176\u4e2d0xffffffff\u8868\u793a\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"})}),"\n",(0,l.jsx)(e.p,{children:"\u6309\u4ee5\u4e0b\u65b9\u6cd5\u67e5\u770bcpux\u7684 PIN \u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /soc/pinctrl@01c20800/lcd0\nlcd0@0 {\n    linux,phandle = <0x000000ab>;\n    phandle = <0x000000ab>;\n    allwinner,pins = "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", "PD18", "PD19", "PD20", "PD21";\n    allwinner,function = "lcd0";\n    allwinner,pname = "lcdd0", "lcdd1", "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", "lcdd8", "lcdd9";\n    allwinner,muxsel = <0x00000003>;\n    allwinner,pull = <0x00000000>;\n    allwinner,drive = <0xffffffff>;\n    allwinner,data = <0xffffffff>;\n};\nsunxi#\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6309\u4ee5\u4e0b\u65b9\u6cd5\u67e5\u770bcpus\u7684 PIN \u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi# fdt list /soc/pinctrl@01f02c00/s_uart0\ns_uart0@0 {\n    linux,phandle = <0x000000b4>;\n    phandle = <0x000000b4>;\n    allwinner,pins = "PL2", "PL3";\n    allwinner,function = "s_uart0";\n    allwinner,pname = "s_uart0_tx", "s_uart0_rx";\n    allwinner,muxsel = <0x00000002>;\n    allwinner,pull = <0xffffffff>;\n    allwinner,drive = <0xffffffff>;\n    allwinner,data = <0xffffffff>;\n};\nsunxi#\n'})}),"\n",(0,l.jsx)(e.h4,{id:"33-\u4fee\u6539-pin-\u914d\u7f6e",children:"3.3 \u4fee\u6539 PIN \u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528fdt set\u547d\u4ee4\u53ef\u4ee5\u4fee\u6539 PIN \u4e2d\u76f8\u5173\u5c5e\u6027\u5b57\u6bb5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt set /soc/pinctrl@01c20800/lcd0 allwinner,drive <0x1>\nsunxi#fdt list /soc/pinctrl@01c20800/lcd0\nlcd0@0 {\n    linux,phandle = <0x000000ab>;\n    phandle = <0x000000ab>;\n    allwinner,pins = "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", "PD18", "PD19", "PD20", "PD21";\n    allwinner,function = "lcd0";\n    allwinner,pname = "lcdd0", "lcdd1", "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", "lcdd8", "lcdd9";\n    allwinner,muxsel = <0x00000003>;\n    allwinner,pull = <0x00000000>;\n    allwinner,drive = <0x00000001>;\n    allwinner,data = <0xffffffff>;\n};\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793a\u4f8b\u4e2d\u8be5\u5904\u4fee\u6539\u4f1a\u5f71\u54cdallwinner,pins\u8868\u793a\u7684\u6240\u6709\u7aef\u53e3\u7684\u9a71\u52a8\u80fd\u529b\u914d\u7f6e\uff0c\u4fee\u6539allwinner,muxsel, allwinner,pull,allwinner,data\u7684\u503c\u4e5f\u4f1a\u4ea7\u751f\u7c7b\u4f3c\u6548\u679c\u3002"})}),"\n",(0,l.jsx)(e.h4,{id:"34-gpio-\u914d\u7f6e\u8bf4\u660e",children:"3.4 GPIO \u914d\u7f6e\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:"Device tree \u4e2d GPIO \u5bf9\u5e94\u5173\u7cfb\uff0c\u4ee5 usb \u4e2dusb_id_gpio\u4e3a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt list /soc/usbc0\nusbc0@0 {\n    test = <0x00000002 0x00000003 0x12345678>;\n    device_type = "usbc0";\n    compatible = "allwinner,sun50i-otg-manager";\n    ........\n    usb_serial_unique = <0x00000000>;\n    usb_serial_number = "20080411";\n    rndis_wceis = <0x00000001>;\n    status = "okay";\n    usb_id_gpio = <0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0xffffffff 0xffffffff>;\n};\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5bf9\u5e94\u4e8e device tree \u4e2d usb_id_gpio = ",(0,l.jsx)(e.code,{children:"<0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0xffffffff 0xffffffff>"}),"\uff0c\u89e3\u91ca\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5c5e\u6027\u6570\u503c"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u542b\u4e49"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0x00000030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"device tree \u5185\u90e8\u4e00\u4e2a\u8282\u70b9\u76f8\u5173\u4fe1\u606f\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7565\u8fc7"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0x00000007"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7aef\u53e3 PH, \u5373 #define PH 7"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0x00000009"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u7ec4\u5185\u5e8f\u53f7, \u5373 PH09"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0x00000000"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u529f\u80fd\u5206\u914d, \u5373\u5c06 PH09 \u914d\u4e3a\u8f93\u5165"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0x00000001"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u5185\u90e8\u7535\u963b\u72b6\u6001, \u5373\u914d\u4e3a\u4e0a\u62c9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0xffffffff"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u9a71\u52a8\u80fd\u529b, \u9ed8\u8ba4\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"0xffffffff"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8f93\u51fa\u7535\u5e73, \u9ed8\u8ba4\u503c"})]})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u4fee\u6539 usb_id_gpio\u7684\u914d\u7f6e\uff0c\u53ef\u6309\u5982\u4e0b\u65b9\u5f0f\uff08\u793a\u4f8b\u4fee\u6539\u4e86\u9a71\u52a8\u80fd\u529b\uff0c\u8f93\u51fa\u7535\u5e73\u4e24\u9879\uff09\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'sunxi#fdt set /soc/usbc0 usb_id_gpio `<0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0x2 0x1>`\nsunxi#fdt list\nusbc0@0 {\n    test = <0x00000002 0x00000003 0x12345678>;\n    device_type = "usbc0";\n    compatible = "allwinner,sun50i-otg-manager";\n    ........\n    usb_serial_unique = <0x00000000>;\n    usb_serial_number = "20080411";\n    rndis_wceis = <0x00000001>;\n    status = "okay";\n    usb_id_gpio = <0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0x00000002 0x00000001>; //\u4fee\u6539ok\n};\nsunxi#\n'})})]})}function f(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var l=t(67294);const i={},d=l.createContext(i);function s(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);