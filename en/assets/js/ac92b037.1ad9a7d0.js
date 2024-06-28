"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1584],{999:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=i(5893),t=i(1151);const l={sidebar_position:4},d="\u7ea2\u5916\u63a7\u5236LVGL\u754c\u9762\u5207\u6362",c={id:"D1h-DualDisplay/part6/InfraredControlLVGLInterfaceSwitching",title:"\u7ea2\u5916\u63a7\u5236LVGL\u754c\u9762\u5207\u6362",description:"1. \u6d4b\u8bd5\u7ea2\u5916\u529f\u80fd",source:"@site/docs/D1h-DualDisplay/part6/04-InfraredControlLVGLInterfaceSwitching.md",sourceDirName:"D1h-DualDisplay/part6",slug:"/D1h-DualDisplay/part6/InfraredControlLVGLInterfaceSwitching",permalink:"/en/docs/D1h-DualDisplay/part6/InfraredControlLVGLInterfaceSwitching",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/D1h-DualDisplay/part6/04-InfraredControlLVGLInterfaceSwitching.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"d1hdSidebar",previous:{title:"\u64ad\u653e\u7f51\u7edc\u89c6\u9891",permalink:"/en/docs/D1h-DualDisplay/part6/PlayNetworkVideo"},next:{title:"WIFI\u6295\u5c4f",permalink:"/en/docs/D1h-DualDisplay/part6/WIFIScreenProjection"}},r={},a=[{value:"1. \u6d4b\u8bd5\u7ea2\u5916\u529f\u80fd",id:"1-\u6d4b\u8bd5\u7ea2\u5916\u529f\u80fd",level:2},{value:"1.1 \u914d\u7f6e\u8bbe\u5907\u6811",id:"11-\u914d\u7f6e\u8bbe\u5907\u6811",level:3},{value:"1.2 \u914d\u7f6e\u5185\u6838\u914d\u7f6e\u6587\u4ef6",id:"12-\u914d\u7f6e\u5185\u6838\u914d\u7f6e\u6587\u4ef6",level:3},{value:"1.3 \u9a8c\u8bc1\u7ea2\u5916\u529f\u80fd",id:"13-\u9a8c\u8bc1\u7ea2\u5916\u529f\u80fd",level:3},{value:"1.4 \u7f16\u5199\u7ea2\u5916\u63a5\u6536\u6d4b\u8bd5\u7a0b\u5e8f",id:"14-\u7f16\u5199\u7ea2\u5916\u63a5\u6536\u6d4b\u8bd5\u7a0b\u5e8f",level:3},{value:"2. lvgl9\u79fb\u690d",id:"2-lvgl9\u79fb\u690d",level:2},{value:"2.1 \u51c6\u5907\u79fb\u690d\u8d44\u6e90",id:"21-\u51c6\u5907\u79fb\u690d\u8d44\u6e90",level:3},{value:"2,2 \u79fb\u690d\u6b65\u9aa4",id:"22-\u79fb\u690d\u6b65\u9aa4",level:3},{value:"2.3 \u7f16\u8bd1",id:"23-\u7f16\u8bd1",level:3},{value:"3. lvgl\u8f93\u5165\u8bbe\u5907\u9002\u914d",id:"3-lvgl\u8f93\u5165\u8bbe\u5907\u9002\u914d",level:2},{value:"3.1 \u79fb\u690d\u7ea2\u5916\u8f93\u5165\u8bbe\u5907",id:"31-\u79fb\u690d\u7ea2\u5916\u8f93\u5165\u8bbe\u5907",level:3},{value:"3.2 \u6d4b\u8bd5",id:"32-\u6d4b\u8bd5",level:3}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u7ea2\u5916\u63a7\u5236lvgl\u754c\u9762\u5207\u6362",children:"\u7ea2\u5916\u63a7\u5236LVGL\u754c\u9762\u5207\u6362"}),"\n",(0,s.jsx)(e.h2,{id:"1-\u6d4b\u8bd5\u7ea2\u5916\u529f\u80fd",children:"1. \u6d4b\u8bd5\u7ea2\u5916\u529f\u80fd"}),"\n",(0,s.jsx)(e.h3,{id:"11-\u914d\u7f6e\u8bbe\u5907\u6811",children:"1.1 \u914d\u7f6e\u8bbe\u5907\u6811"}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u539f\u7406\u56fe\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240619094740276",src:i(2873).Z+"",width:"776",height:"384"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u7ea2\u5916\u5bf9\u5e94\u7684\u5f15\u811a\u53f7\u662f",(0,s.jsx)(e.code,{children:"PG16"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fdb\u5165\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd /home/ubuntu/tina-d1-h/device/config/chips/d1-h/configs/nezha/linux-5.4\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539",(0,s.jsx)(e.code,{children:"board.dts"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"vim board.dts\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4fee\u6539\u5f15\u811a\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240619095122322",src:i(9678).Z+"",width:"575",height:"303"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee5\u4e0b\u8282\u70b9\u662f",(0,s.jsx)(e.code,{children:"\u7ea2\u5916\u63a5\u6536"}),"\u7684\u8bbe\u5907\u6811\u8282\u70b9\uff0c\u6ca1\u6709\u4f7f\u80fd\u7684\u8bdd\uff0c\u9700\u8981\u4f7f\u80fd\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240619095309642",src:i(3600).Z+"",width:"599",height:"172"})}),"\n",(0,s.jsx)(e.h3,{id:"12-\u914d\u7f6e\u5185\u6838\u914d\u7f6e\u6587\u4ef6",children:"1.2 \u914d\u7f6e\u5185\u6838\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c",(0,s.jsx)(e.code,{children:"ckernel"}),"\uff0c\u8fdb\u5165\u5185\u6838\u76ee\u5f55\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6253\u5f00\u5185\u6838\u914d\u7f6e\u754c\u9762\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"m kernel_menuconfig\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ea2\u5916\u6709\u5f88\u591a\u79cd\u534f\u8bae\uff0cNEC\u7ea2\u5916\u534f\u8bae\u662f\u6700\u5e38\u7528\u7684\u4e00\u79cd\uff0c\u9ed8\u8ba4\u9009\u4e0a\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240619102048624",src:i(2022).Z+"",width:"1780",height:"788"})}),"\n",(0,s.jsx)(e.p,{children:"\u6dfb\u52a0\u7ea2\u5916\u63a5\u6536\u9a71\u52a8\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240619102320611",src:i(8785).Z+"",width:"1784",height:"778"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4fdd\u5b58\uff0c\u56de\u5230SDK\u6839\u76ee\u5f55\uff0c\u7f16\u8bd1",(0,s.jsx)(e.code,{children:"make"}),"\u3001\u6253\u5305",(0,s.jsx)(e.code,{children:"pack"}),"\u548c\u70e7\u5f55\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"13-\u9a8c\u8bc1\u7ea2\u5916\u529f\u80fd",children:"1.3 \u9a8c\u8bc1\u7ea2\u5916\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f00\u53d1\u677f\u4e0a\uff0c\u6267\u884c",(0,s.jsx)(e.code,{children:"cat proc/bus/input/devices"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'root@TinaLinux:/# cat proc/bus/input/devices\nI: Bus=0019 Vendor=0001 Product=0001 Version=0100\nN: Name="sunxi-keyboard"\nP: Phys=sunxikbd/input0\nS: Sysfs=/devices/virtual/input/input0\nU: Uniq=\nH: Handlers=kbd event0\nB: PROP=0\nB: EV=3\nB: KEY=100000000 0 0 100000000800 4000000000000 10000000\n\nI: Bus=0019 Vendor=0001 Product=0001 Version=0100\nN: Name="sunxi-ir"\nP: Phys=sunxi-ir/input0\nS: Sysfs=/devices/platform/soc@3000000/7040000.s_cir/rc/rc0/s_cir_rx\nU: Uniq=\nH: Handlers=kbd event1\nB: PROP=20\nB: EV=100017\nB: KEY=2\nB: REL=3\nB: MSC=10\n\nI: Bus=0000 Vendor=0000 Product=0000 Version=0000\nN: Name="audiocodec sunxi Audio Jack"\nP: Phys=ALSA\nS: Sysfs=/devices/platform/soc@3000000/2030340.sound/sound/card0/input2\nU: Uniq=\nH: Handlers=kbd event2\nB: PROP=0\nB: EV=23\nB: KEY=40 0 0 0 0 0 400000000 0 c000000000000 0\nB: SW=14\n\nI: Bus=0018 Vendor=0000 Product=0000 Version=0000\nN: Name="fts_ts"\nP: Phys=\nS: Sysfs=/devices/platform/soc@3000000/sunxi-i2c2/i2c-2/2-0038/input/input3\nU: Uniq=\nH: Handlers=event3\nB: PROP=2\nB: EV=b\nB: KEY=400 0 0 0 0 0\nB: ABS=661800000000000\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230",(0,s.jsx)(e.code,{children:"/dev/input/event1"}),"\u5c31\u662f\u7ea2\u5916\u63a5\u6536\u7684\u8bbe\u5907\u8282\u70b9\u4e86\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"hexdump /dev/input/event1\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u662f\u5426\u63a5\u6536\u6b63\u5e38\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/# hexdump /dev/input/event1\n0000000 0d07 0000 0000 0000 4ab4 000c 0000 0000\n0000010 0004 0004 0007 0000 0d07 0000 0000 0000\n0000020 4ab4 000c 0000 0000 0000 0000 0000 0000\n0000030 0d08 0000 0000 0000 4a1b 000e 0000 0000\n0000040 0004 0004 0009 0000 0d08 0000 0000 0000\n0000050 4a1b 000e 0000 0000 0000 0000 0000 0000\n0000060 0d0a 0000 0000 0000 5968 0009 0000 0000\n0000070 0004 0004 0007 0000 0d0a 0000 0000 0000\n0000080 5968 0009 0000 0000 0000 0000 0000 0000\n0000090 0d0b 0000 0000 0000 cf50 0004 0000 0000\n00000a0 0004 0004 0009 0000 0d0b 0000 0000 0000\n00000b0 cf50 0004 0000 0000 0000 0000 0000 0000\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6536\u5230\u6570\u636e\u5c31\u662f\u63a5\u6536\u6b63\u5e38\u7684\u73b0\u8c61\u3002\u4e0b\u9762\u53ef\u4ee5\u7f16\u5199\u6d4b\u8bd5\u7a0b\u5e8f\u4e86\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"14-\u7f16\u5199\u7ea2\u5916\u63a5\u6536\u6d4b\u8bd5\u7a0b\u5e8f",children:"1.4 \u7f16\u5199\u7ea2\u5916\u63a5\u6536\u6d4b\u8bd5\u7a0b\u5e8f"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u7f16\u5199\u7684\u6d4b\u8bd5\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/C_Source/C_IRTest$ tree -L 2\n.\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251c\u2500\u2500 build\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeCache.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeFiles\n\u2502\xa0\xa0 \u251c\u2500\u2500 cmake_install.cmake\n\u2502\xa0\xa0 \u2514\u2500\u2500 Makefile\n\u251c\u2500\u2500 build.sh\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 inc\n\u2502\xa0\xa0 \u2514\u2500\u2500 ir_test.h\n\u251c\u2500\u2500 main.c\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 ir_test.c\n\u2514\u2500\u2500 toolchain.cmake\n\n5 directories, 10 files\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3b\u51fd\u6570",(0,s.jsx)(e.code,{children:"main.c"}),"\u5982\u4e0b:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\n#include "ir_test.h"\n\nint main(int argc,char ** argv)\n{\n        int rang_low = 0, rang_high = 0;\n        return test_keyboard(DEV_PATH);\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7ea2\u5916\u6a21\u5757\u6d4b\u8bd5\u7a0b\u5e8f",(0,s.jsx)(e.code,{children:"/src/ir_test.c"}),"\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include "ir_test.h"\n\nstatic const int key_exit = 102;\nstatic int keys_fd = 0;\n\nunsigned int test_keyboard(const char * event_file)\n{\n        int code = 0, i;\n        struct input_event data={0};\n        keys_fd=open(DEV_PATH, O_RDONLY);\n        if(keys_fd <= 0)\n        {\n                printf("open %s error!\\n", DEV_PATH);\n                return -1;\n        }\n        fcntl(keys_fd,F_SETFL,O_NONBLOCK);\n        for(;;)\n        {\n                read(keys_fd, &data, sizeof(data));\n                if(data.value){\n                        printf("%d\\r\\n",data.value);\n                        code = data.value;\n                }\n        }\n        close(keys_fd);\n        return 0;\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6240\u7528\u5230\u7684\u5934\u6587\u4ef6",(0,s.jsx)(e.code,{children:"/inc/ir_test.h"}),"\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#ifndef IR_TEST_H\n#define IR_TEST_H\n\n#include <stdio.h>\n#include <linux/input.h>\n#include <stdlib.h>\n#include <sys/types.h>\n#include <sys/stat.h>\n#include <fcntl.h>\n#include <sys/time.h>\n#include <limits.h>\n#include <unistd.h>\n#include <signal.h>\n\n#define DEV_PATH "/dev/input/event1" //difference is possible\n\nunsigned int test_keyboard(const char * event_file);\n\n#endif\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528CMake\u6765\u6784\u5efa\u5de5\u7a0b\u4f1a\u66f4\u52a0\u65b9\u4fbf\u4e00\u4e9b\uff0c",(0,s.jsx)(e.code,{children:"CMakeLists.txt"}),"\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cmake",children:'cmake_minimum_required(VERSION 3.10)\nproject(ir)\n\nset(CMAKE_C_STANDARD 99)\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nset(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)\n\ninclude_directories(${PROJECT_SOURCE_DIR}/inc)\n\nfile(GLOB SRC_FILES "src/*.c")\n\nadd_executable(main main.c ${SRC_FILES})\n\n#target_link_libraries(target_name lib1 lib2 ...)\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6307\u5b9a\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\uff0c",(0,s.jsx)(e.code,{children:"toolchain.cmake"}),"\u5982\u4e0b:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'set(CMAKE_SYSTEM_NAME Linux)\nset(CMAKE_SYSTEM_PROCESSOR riscv)\n\nset(tools "/home/ubuntu/tina-d1-h/prebuilt/gcc/linux-x86/riscv/toolchain-thead-glibc/riscv64-glibc-gcc-thead_20200702")\nset(CMAKE_C_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-gcc)\nset(CMAKE_CXX_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-g++)\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3a\u4e86\u66f4\u52a0\u65b9\u4fbf\u7f16\u8bd1\uff0c\u7f16\u5199\u4e00\u4e2a\u811a\u672c\u3002",(0,s.jsx)(e.code,{children:"build.sh"}),"\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'rm -rf build\nmkdir -p build\ncd build/\ncmake -DCMAKE_TOOLCHAIN_FILE="../toolchain.cmake" ..\nmake -j8\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c",(0,s.jsx)(e.code,{children:"./build.sh"}),"\uff0c\u751f\u6210\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\u5728",(0,s.jsx)(e.code,{children:"bin/"}),"\u6587\u4ef6\u4e0b\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528adb\u6765\u63a8\u9001\u5230\u5f00\u53d1\u677f\u4e0a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"adb push bin/main /mnt/UDISK/\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5f00\u53d1\u677f\u4e0a\u6267\u884c",(0,s.jsx)(e.code,{children:"/mnt/UDISK/main"}),"\uff0c\u5373\u53ef\u9a8c\u8bc1\u7ea2\u5916\u63a5\u6536\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/mnt/UDISK# ./main\n7\n9\n7\n9\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u540e\u9762\u5b9e\u73b0\u7ea2\u5916\u5207\u6362LVGL\u754c\u9762\u505a\u51c6\u5907\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"2-lvgl9\u79fb\u690d",children:"2. lvgl9\u79fb\u690d"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"lvgl\u7684\u754c\u9762\u51c6\u5907\u4f7f\u75289.0\u7248\u672c\u53bb\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e4b\u524d\uff0c\u9700\u8981\u5148\u79fb\u690dlvgl9.0\u7248\u672c\u4f8b\u7a0b\u5230\u5f00\u53d1\u677f\u4e0a\uff0c\u4e3a\u540e\u9762\u79fb\u690d\u754c\u9762\u505a\u51c6\u5907\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u53c2\u8003\u6587\u7ae0\uff1a",(0,s.jsx)(e.a,{href:"https://blog.csdn.net/weixin_63773568/article/details/136913352?spm=1001.2014.3001.5501",children:"\u79fb\u690dlvgl v9\u5230\u5d4c\u5165\u5f0flinux\u8bbe\u5907_lvgl9 linux-CSDN\u535a\u5ba2"})]}),"\n",(0,s.jsx)(e.h3,{id:"21-\u51c6\u5907\u79fb\u690d\u8d44\u6e90",children:"2.1 \u51c6\u5907\u79fb\u690d\u8d44\u6e90"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u6587\u4ef6\u662f\u4eceLVGL\u5b98\u65b9\u4ed3\u5e93\uff0c\u4e0b\u8f7d\u4e24\u4e2a\u4ed3\u5e93\uff1a"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u90fd\u8981\u9009\u62e9v9.0\u7248\u672c\uff01\uff01"}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"\u540d\u79f0"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"\u4ed3\u5e93\u5730\u5740"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"lvgl"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.a,{href:"https://github.com/lvgl/lvgl.git",children:"https://github.com/lvgl/lvgl.git"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"\u5305\u542b\u4e86LVGL\u56fe\u5f62\u754c\u9762\u63a7\u4ef6\u6e90\u7801\u3001\u9a71\u52a8\u63a5\u53e3\u6e90\u4ee3\u7801\u4ee5\u53ca\u4f8b\u7a0b"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"lv_port_linux"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.a,{href:"https://github.com/lvgl/lv_port_linux.git",children:"https://github.com/lvgl/lv_port_linux.git"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"\u9002\u914d\u6709framebuffer\u7684linux\u7cfb\u7edf\u7684\u63a5\u53e3"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4e8e\u7248\u672c\u66f4\u65b0\uff0c\u76f4\u63a5\u5728ubuntu\u4e0a\u514b\u9686\u662f\u6700\u65b0\u7248\u672c\u7684\uff0c\u7f16\u8bd1\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5efa\u8bae\u5728window\u4e0a\u90fd\u9009\u62e9V9.0\u7248\u672c\u4e0b\u8f7d\u4e0a\u9762\u4e24\u4e2a\u4ed3\u5e93\uff0c\u6700\u540e\u7528lvgl\u4ed3\u5e93\u4ee3\u66fflv_port_linux_frame_buffer\u7684lvgl\u6587\u4ef6\u5939\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lv_port_linux"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240624164131544",src:i(1004).Z+"",width:"1620",height:"890"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lvgl"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240624164340846",src:i(4157).Z+"",width:"1597",height:"877"})}),"\n",(0,s.jsx)(e.h3,{id:"22-\u79fb\u690d\u6b65\u9aa4",children:"2,2 \u79fb\u690d\u6b65\u9aa4"}),"\n",(0,s.jsx)(e.p,{children:"\u66ff\u6362\u597d\u5de5\u7a0b\u540e\uff0c\u4e0a\u4f20\u5230ubuntu\uff0c\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u8be5\u5de5\u7a0b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0$ tree -L 1\n.\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 lv_conf.h\n\u251c\u2500\u2500 lvgl\n\u251c\u2500\u2500 main.c\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 mouse_cursor_icon.c\n\u2514\u2500\u2500 README.md\n\n1 directory, 7 files\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u652f\u6301\u89e6\u6478\u529f\u80fd\uff0c\u4fee\u6539",(0,s.jsx)(e.code,{children:"lv_conf.h"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"888 /*Driver for evdev input devices*/\n889 #define LV_USE_EVDEV    1\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"mian.c"}),"\u4e2d\u6dfb\u52a0\u89e6\u6478\u8f93\u5165\uff1a"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u786e\u5b9a\u8bbe\u5907\u7684\u89e6\u6478\u8282\u70b9\uff08\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"cat /dev/input/event3"}),"\u6d4b\u8bd5\uff09"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'int main(void)\n{\n    lv_init();\n\n    /*Linux frame buffer device init*/\n    lv_display_t * disp = lv_linux_fbdev_create();\n    lv_linux_fbdev_set_file(disp, "/dev/fb0");\n\n    /*input touch device init*/\n    lv_indev_t *touch;\n    touch = lv_evdev_create(LV_INDEV_TYPE_POINTER,"/dev/input/event3");\n\n    /*Create a Demo*/\n    lv_demo_widgets();\n    //lv_demo_widgets_start_slideshow();\n\n    /*Handle LVGL tasks*/\n    while(1) {\n        lv_timer_handler();\n        usleep(5000);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"23-\u7f16\u8bd1",children:"2.3 \u7f16\u8bd1"}),"\n",(0,s.jsxs)(e.p,{children:["\u6307\u5b9a\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\uff0c\u7f16\u5199\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"toolchain.cmake"}),"\u5982\u4e0b:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'set(CMAKE_SYSTEM_NAME Linux)\nset(CMAKE_SYSTEM_PROCESSOR riscv)\n\nset(tools "/home/ubuntu/tina-d1-h/prebuilt/gcc/linux-x86/riscv/toolchain-thead-glibc/riscv64-glibc-gcc-thead_20200702")\nset(CMAKE_C_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-gcc)\nset(CMAKE_CXX_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-g++)\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3a\u4e86\u65b9\u4fbf\u7f16\u8bd1\uff0c\u7f16\u5199\u4e00\u4efd\u811a\u672c",(0,s.jsx)(e.code,{children:"build.sh"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'rm -rf build\nmkdir -p build\ncd build/\ncmake -DCMAKE_TOOLCHAIN_FILE="../toolchain.cmake" ..\nmake -j8\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u8bd1\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0$ ls\nbin  build  build.sh  CMakeLists.txt  LICENSE  lv_conf.h  lvgl  main.c  Makefile  mouse_cursor_icon.c  README.md  toolchain.cmake\nubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0$\nubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux$ sudo chmod +x build.sh\nubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0$ ./build.sh \n-- The C compiler identification is GNU 8.1.0\n-- The CXX compiler identification is GNU 8.1.0\n-- Detecting C compiler ABI info\n-- Detecting C compiler ABI info - done\n...\n[ 99%] Linking C static library liblvgl_examples.a\n[ 99%] Built target lvgl_examples\n[ 99%] Building C object CMakeFiles/main.dir/main.c.o\n[ 99%] Building C object CMakeFiles/main.dir/mouse_cursor_icon.c.o\n[100%] Linking CXX executable /home/ubuntu/lvgl_demo/lv_port_linux-release-v9.0/bin/main\n[100%] Built target main\nubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0$ \n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u53ef\u6267\u884c\u7a0b\u5e8f\u4fdd\u5b58\u5728bin/\u76ee\u5f55\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0/bin$ file main \nmain: ELF 64-bit LSB executable, UCB RISC-V, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64xthead-lp64d.so.1, for GNU/Linux 4.15.0, with debug_info, not stripped\nubuntu@ubuntu1804:~/lvgl_demo/lv_port_linux-release-v9.0/bin$\n"})}),"\n",(0,s.jsx)(e.h2,{id:"3-lvgl\u8f93\u5165\u8bbe\u5907\u9002\u914d",children:"3. lvgl\u8f93\u5165\u8bbe\u5907\u9002\u914d"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u524d\u9762\u7684\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u786e\u8ba4\u7ea2\u5916\u529f\u80fd\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u63a7\u5236lvgl\u7684\u754c\u9762\u5207\u6362\uff0c\u9700\u8981\u628a\u7ea2\u5916\u7ed1\u5b9a\u5230lvgl\u7684\u8f93\u5165\u8bbe\u5907\u6846\u67b6\u91cc\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"31-\u79fb\u690d\u7ea2\u5916\u8f93\u5165\u8bbe\u5907",children:"3.1 \u79fb\u690d\u7ea2\u5916\u8f93\u5165\u8bbe\u5907"}),"\n",(0,s.jsx)(e.p,{children:"\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://lvgl.100ask.net/9.0/porting/indev.html",children:"Input device interface\uff08\u8f93\u5165\u8bbe\u5907\u63a5\u53e3\uff09 \u2014 LVGL \u6587\u6863 (100ask.net)"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u8981\u521b\u5efa\u8f93\u5165\u8bbe\u5907\uff0c\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"/*Register at least one display before you register any input devices*/\nlv_indev_t * indev = lv_indev_create();\nlv_indev_set_type(indev, LV_INDEV_TYPE_...);   /*See below.*/\nlv_indev_set_read_cb(indev, read_cb);  /*See below.*/\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d",(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_"}),"\u6210\u5458\u53ef\u4ee5\u662f\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_POINTER"}),"\uff1a\u89e6\u6478\u5c4f\u6216\u9f20\u6807"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_KEYPAD"}),"\uff1a\u952e\u76d8\u6216\u952e\u57ab"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_ENCODER"}),"\uff1a\u5177\u6709\u5de6\u53f3\u65cb\u8f6c\u53ca\u6309\u4e0b\u9009\u9879\u7684\u7f16\u7801\u5668"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_BUTTON"}),"\uff1a\u5916\u90e8\u6309\u94ae\u865a\u62df\u6309\u538b\u5c4f\u5e55"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"read_cb"})," \u662f\u4e00\u4e2a\u51fd\u6570\u6307\u9488\uff0c\u5b83\u5c06\u5b9a\u671f\u88ab\u8c03\u7528\u4ee5\u62a5\u544a\u8f93\u5165\u8bbe\u5907\u5f53\u524d\u7684\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6bcf\u79cd\u7c7b\u578b\uff0c\u5b98\u7f51\u90fd\u7b80\u5355\u5199\u4e86\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"read_cb"}),"\u6240\u6307\u5411\u7684\u51fd\u6570\u7684\u7528\u6cd5\u3002\u53ef\u4ee5\u53c2\u8003\u5b83\u7684\uff0c\u628a\u7ea2\u5916\u9002\u914d\u4e0a\u53bb\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\uff0c\u7ea2\u5916\u4f7f\u7528\u7684\u662f",(0,s.jsx)(e.code,{children:"LV_INDEV_TYPE_BUTTON"}),"\u7c7b\u578b\uff0c\u5b98\u7f51\u4e2d\u7684",(0,s.jsx)(e.code,{children:"read_cb"}),"\u6307\u5411\u7684\u51fd\u6570\u662f\u8fd9\u6837\u4f7f\u7528\u7684\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"void button_read(lv_indev_t * indev, lv_indev_data_t*data){\n    static uint32_t last_btn = 0;   /*Store the last pressed button*/\n    int btn_pr = my_btn_read();     /*Get the ID (0,1,2...) of the pressed button*/\n    if(btn_pr >= 0) {               /*Is there a button press? (E.g. -1 indicated no button was pressed)*/\n       last_btn = btn_pr;           /*Save the ID of the pressed button*/\n       data->state = LV_INDEV_STATE_PRESSED;  /*Set the pressed state*/\n    } else {\n       data->state = LV_INDEV_STATE_RELEASED; /*Set the released state*/\n    }\n    data->btn_id = last_btn;         /*Save the last button*/\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u9700\u8981\u628a",(0,s.jsx)(e.code,{children:"my_btn_read"}),"\u4fee\u6539\u6210\u4e0a\u4e00\u7ae0\u9a8c\u8bc1\u8fc7\u7684\u7ea2\u5916\u6d4b\u8bd5\u63a5\u53e3 \uff0c\u52a0\u4ee5\u4fee\u6539\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"static int ir_pressed(void)\n{\n    struct input_event data={0};\n    int cnt = 0;\n\n    read(keys_fd, &data, sizeof(data));\n    if(data.value == 7)\n    {\n        cnt = 0;\n        return cnt;\n    }else if(data.value == 9)\n    {\n        cnt = 1;\n        return cnt;\n    }\n\n    return -1;\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u6837\uff0c",(0,s.jsx)(e.code,{children:"read_cb"}),"\u6240\u6307\u5411\u7684\u51fd\u6570\u5c31\u53d8\u6210\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'static void read_cb(lv_indev_t * indev, lv_indev_data_t*data)\n{\n    static uint32_t last_btn = 0;                       /*Store the last pressed button*/\n    int btn_pr = ir_pressed();                                  /*Get the ID (0,1,2...) of the pressed button*/\n    if(btn_pr >= 0) {                                   /*Is there a button press? (E.g. -1 indicated no button was pressed)*/\n        last_btn = btn_pr;                              /*Save the ID of the pressed button*/\n        data->state = LV_INDEV_STATE_PRESSED;    /*Set the pressed state*/\n            printf("last_btn : %d\\n",last_btn);\n    } else {\n        data->state = LV_INDEV_STATE_RELEASED;   /*Set the released state*/\n                //printf("RELEASED\\n");\n    }\n        data->btn_id = last_btn;                                /*Save the last button*/\n        //printf("data->btn_id : %d\\n",data->btn_id);\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ir_pressed"}),"\u8fd4\u56de\u7684\u6bcf\u4e2a\u7d22\u5f15\u90fd\u5206\u914d\u4e86\u76f8\u5e94\u7684\u5750\u6807\uff0c\u4f7f\u7528\u4e86",(0,s.jsx)(e.code,{children:"lv_indev_set_button_points(my_indev, points_array)"}),"\uff0c ",(0,s.jsx)(e.code,{children:"points_array"})," \u5e94\u8be5\u770b\u8d77\u6765\u50cf ",(0,s.jsx)(e.code,{children:"const lv_point_t points_array[] = { {12,30},{60,90}, ...}"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6dfb\u52a0\u4e0a\u521d\u59cb\u5316\uff0c\u5c31\u53ef\u4ee5\u7528\u7ea2\u5916\u63a7\u5236lvgl\u754c\u9762\u5207\u6362\u4e86\uff08\u754c\u9762\u9700\u8981\u5728lvgl9\u79fb\u690d\u7684\u5de5\u7a0b\u4e0a\u989d\u5916\u7f16\u5199\uff09\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'static const lv_point_t points_array[] = {{20,20},{120,20}};\n\nvoid ir_init(void)\n{\n    keys_fd = open(DEV_PATH, O_RDONLY);\n    if(keys_fd <= 0)\n    {\n        printf("open %s error!\\n", DEV_PATH);\n        return;\n    }\n\n    fcntl(keys_fd,F_SETFL,O_NONBLOCK);\n\n    lv_indev_t * indev = lv_indev_create();\n    lv_indev_set_type(indev,LV_INDEV_TYPE_BUTTON);\n    lv_indev_set_read_cb(indev,read_cb);\n    lv_indev_set_button_points(indev,points_array);\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6574\u4e2a\u5de5\u7a0b\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ubuntu@ubuntu1804:~/C_Source/lvgl_v9_demo_irtest$ tree -L 2\n.\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251c\u2500\u2500 build\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeCache.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeFiles\n\u2502\xa0\xa0 \u251c\u2500\u2500 cmake_install.cmake\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 lvgl\n\u2502\xa0\xa0 \u2514\u2500\u2500 Makefile\n\u251c\u2500\u2500 build.sh\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 inc\n\u2502\xa0\xa0 \u251c\u2500\u2500 anim.h\n\u2502\xa0\xa0 \u251c\u2500\u2500 calendar.h\n\u2502\xa0\xa0 \u251c\u2500\u2500 ir_test.h\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_lvgl_demo_irtest.h\n\u251c\u2500\u2500 lv_conf.h\n\u251c\u2500\u2500 lvgl\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 component.mk\n\u2502\xa0\xa0 \u251c\u2500\u2500 demos\n\u2502\xa0\xa0 \u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 env_support\n\u2502\xa0\xa0 \u251c\u2500\u2500 examples\n\u2502\xa0\xa0 \u251c\u2500\u2500 idf_component.yml\n\u2502\xa0\xa0 \u251c\u2500\u2500 Kconfig\n\u2502\xa0\xa0 \u251c\u2500\u2500 library.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 library.properties\n\u2502\xa0\xa0 \u251c\u2500\u2500 LICENCE.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 lv_conf_template.h\n\u2502\xa0\xa0 \u251c\u2500\u2500 lvgl.h\n\u2502\xa0\xa0 \u251c\u2500\u2500 lvgl.mk\n\u2502\xa0\xa0 \u251c\u2500\u2500 lvgl.pc.in\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 SConscript\n\u2502\xa0\xa0 \u251c\u2500\u2500 scripts\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u251c\u2500\u2500 main.c\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 mouse_cursor_icon.c\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 anim.c\n\u2502\xa0\xa0 \u251c\u2500\u2500 calendar.c\n\u2502\xa0\xa0 \u251c\u2500\u2500 ir_test.c\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_lvgl_demo_irtest.c\n\u2514\u2500\u2500 toolchain.cmake\n\n15 directories, 32 files\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c",(0,s.jsx)(e.code,{children:"./build.sh"}),"\u53ef\u4ee5\u76f4\u63a5\u7f16\u8bd1\u7a0b\u5e8f\uff0c\u53ef\u6267\u884c\u7a0b\u5e8f",(0,s.jsx)(e.code,{children:"main"}),"\u653e\u5728bin/\u6587\u4ef6\u91cc\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u63a8\u9001\u5230\u5f00\u53d1\u677f\u4e0a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"adb push bin/main /mnt/UDISK/\n"})}),"\n",(0,s.jsx)(e.h3,{id:"32-\u6d4b\u8bd5",children:"3.2 \u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u5f00\u53d1\u677f\u4e0a\u6267\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@TinaLinux:/mnt/UDISK# ./main\nlast_btn : 0\nlast_btn : 0\nlast_btn : 1\nlast_btn : 1\nlast_btn : 0\nlast_btn : 1\nlast_btn : 0\nlast_btn : 1\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u754c\u9762\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image-20240620103617224",src:i(2431).Z+"",width:"683",height:"427"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"0"}),"\u662f\u5f80\u524d\u8fd4\u56de\u4e0a\u4e00\u4e2a\u754c\u9762\uff0c",(0,s.jsx)(e.code,{children:"1"}),"\u662f\u5f80\u4e0b\u4e00\u4e2a\u754c\u9762\u8d70\uff0c\u641e\u5b9a\u3002"]})]})}function o(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},2873:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240619094740276-92280646ba518cd2ad456eb6ada8291e.png"},9678:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240619095122322-110531efcf671e8607cf8b881022d6d4.png"},3600:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240619095309642-1bea8e231fbd3cebe98dbfbb2a39556b.png"},2022:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240619102048624-068ad591c53bb1cb46886a2e5b1b1341.png"},8785:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240619102320611-11230ae9d214da1c608ae0c82be54b57.png"},2431:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240620103617224-19e832055aa0f392821ee50bbc79d124.png"},1004:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240624164131544-52e06f85be6d05d209b99a4b5740b56b.png"},4157:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/image-20240624164340846-b2948992346b23d562859a9088174005.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>d});var s=i(7294);const t={},l=s.createContext(t);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);