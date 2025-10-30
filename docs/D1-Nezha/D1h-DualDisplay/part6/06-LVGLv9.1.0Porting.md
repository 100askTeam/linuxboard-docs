---
sidebar_position: 7
---
# LVGLv9.1.0移植

## 1. 移植步骤

### 1.1 下载LVGL源码

|     名称      |                 仓库地址                  |                       描述                        |
| :-----------: | :---------------------------------------: | :-----------------------------------------------: |
| lv_port_linux | https://github.com/lvgl/lv_port_linux.git | 适配有framebuffer、DRM/KMS和SDL2的linux系统的接口 |

在ubuntu上，新建终端，克隆上面的仓库地址：

~~~bash
ubuntu@ubuntu1804:~$ git clone https://github.com/lvgl/lv_port_linux.git
ubuntu@ubuntu1804:~$ cd lv_port_linux/
ubuntu@ubuntu1804:~/lv_port_linux$ git submodule update --init --recursive
Cloning into '/home/ubuntu/lv_port_linux/lvgl'...
Submodule path 'lvgl': checked out 'e29d35b43c509b6d7189f5dac87139441669ae66'
Submodule path 'lvgl': checked out 'e29d35b43c509b6d7189f5dac87139441669ae66'
~~~

查看目录结构：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ tree -L 2
.
├── CMakeLists.txt
├── LICENSE
├── lv_conf.h
├── lvgl
│   ├── CMakeLists.txt
│   ├── CMakePresets.json
│   ├── component.mk
│   ├── demos
│   ├── docs
│   ├── env_support
│   ├── examples
│   ├── idf_component.yml
│   ├── Kconfig
│   ├── library.json
│   ├── library.properties
│   ├── LICENCE.txt
│   ├── lv_conf_template.h
│   ├── lvgl.h
│   ├── lvgl.mk
│   ├── lvgl.pc.in
│   ├── README.md
│   ├── SConscript
│   ├── scripts
│   ├── src
│   └── tests
├── main.c
├── Makefile
├── mouse_cursor_icon.c
└── README.md

8 directories, 21 files
~~~

查看如果发现lvgl的库是9.0.1版本的，那就删除lvgl/文件夹，重新克隆：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ rm lvgl/ -rf
ubuntu@ubuntu1804:~/lv_port_linux$ git clone https://github.com/lvgl/lvgl.git
Cloning into 'lvgl'...
remote: Enumerating objects: 104172, done.
remote: Counting objects: 100% (15487/15487), done.
remote: Compressing objects: 100% (1633/1633), done.
remote: Total 104172 (delta 14432), reused 13985 (delta 13854), pack-reused 88685
Receiving objects: 100% (104172/104172), 332.99 MiB | 12.14 MiB/s, done.
Resolving deltas: 100% (79168/79168), done.
Checking out files: 100% (2894/2894), done.
ubuntu@ubuntu1804:~/lv_port_linux$
~~~

可以看到：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ cd lvgl/
ubuntu@ubuntu1804:~/lv_port_linux/lvgl$ vim lv_conf_template.h 

/**
 * @file lv_conf.h
 * Configuration file for v9.1.1-dev
 */
~~~

源码获取完毕！接下来就是编译了。

### 1.2 编译

想要在开发板上运行，当然是需要指定相应的交叉编译工具的了。

创建一个文件`toolchain.cmake`，用于指定交叉编译工具:

~~~bash
set(CMAKE_SYSTEM_NAME Linux)
#如果是arm,就写arm;这里是riscv
set(CMAKE_SYSTEM_PROCESSOR riscv)

set(tools "/home/ubuntu/tina-d1-h/prebuilt/gcc/linux-x86/riscv/toolchain-thead-glibc/riscv64-glibc-gcc-thead_20200702")
set(CMAKE_C_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-gcc)
set(CMAKE_CXX_COMPILER ${tools}/bin/riscv64-unknown-linux-gnu-g++)
~~~

为了方便编译，编写一个脚本`build.sh`：

~~~bash
rm -rf build
mkdir -p build
cd build/
cmake -DCMAKE_TOOLCHAIN_FILE="../toolchain.cmake" ..
make -j8
~~~

目录结构如下：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ tree -L 1
.
├── build.sh
├── CMakeLists.txt
├── LICENSE
├── lv_conf.h
├── lvgl
├── main.c
├── Makefile
├── mouse_cursor_icon.c
├── README.md
└── toolchain.cmake

1 directory, 9 files
~~~

经过编译测试，需要修改`CMakeLists.txt`，否则编译会报错，注释掉下面几个：

~~~bash
--- CMakeLists.txt-bak	2024-06-24 22:11:40.077461049 -0400
+++ CMakeLists.txt	2024-06-24 22:12:16.549404544 -0400
@@ -12,12 +12,12 @@
 
 add_executable(main main.c mouse_cursor_icon.c)
 
-include(${CMAKE_CURRENT_LIST_DIR}/lvgl/tests/FindLibDRM.cmake)
-include_directories(${Libdrm_INCLUDE_DIRS})
+#include(${CMAKE_CURRENT_LIST_DIR}/lvgl/tests/FindLibDRM.cmake)
+#include_directories(${Libdrm_INCLUDE_DIRS})
 
-find_package(SDL2)
-find_package(SDL2_image)
-include_directories(${SDL2_INCLUDE_DIRS} ${SDL2_IMAGE_INCLUDE_DIRS})
+#find_package(SDL2)
+#find_package(SDL2_image)
+#include_directories(${SDL2_INCLUDE_DIRS} ${SDL2_IMAGE_INCLUDE_DIRS})
 
 target_link_libraries(main lvgl lvgl::examples lvgl::demos lvgl::thorvg ${SDL2_LIBRARIES} ${SDL2_IMAGE_LIBRARIES} ${Libdrm_LIBRARIES} m pthread)
 add_custom_target (run COMMAND ${EXECUTABLE_OUTPUT_PATH}/main DEPENDS main)
~~~

执行`./build.sh`，编译：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ sudo chmod +x build.sh
ubuntu@ubuntu1804:~/lv_port_linux$ ./build.sh 
-- The C compiler identification is GNU 8.1.0
-- The CXX compiler identification is GNU 8.1.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
...
[ 99%] Linking C static library ../lib/liblvgl_examples.a
[ 99%] Built target lvgl_examples
[ 99%] Linking C static library ../lib/liblvgl_demos.a
[ 99%] Built target lvgl_demos
[ 99%] Building C object CMakeFiles/main.dir/mouse_cursor_icon.c.o
[ 99%] Building C object CMakeFiles/main.dir/main.c.o
[100%] Linking CXX executable /home/ubuntu/lv_port_linux/bin/main
[100%] Built target main
ubuntu@ubuntu1804:~/lv_port_linux$
~~~

编译成功，可执行程序保存在bin/目录下：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ file bin/main 
bin/main: ELF 64-bit LSB executable, UCB RISC-V, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64xthead-lp64d.so.1, for GNU/Linux 4.15.0, with debug_info, not stripped
ubuntu@ubuntu1804:~/lv_port_linux$
~~~

### 1.3 测试

使用adb推送到D1H开发板上即可：

~~~bash
ubuntu@ubuntu1804:~/lv_port_linux$ adb push bin/main /mnt/UDISK/
bin/main: 1 file pushed. 1.4 MB/s (2297184 bytes in 1.601s)
ubuntu@ubuntu1804:~/lv_port_linux$
~~~

开发板上执行`./main`，会出现警告，还会感觉卡卡的：

~~~bash
root@TinaLinux:/mnt/UDISK# ./main
[Warn]  (0.000, +0)      lv_init: Memory integrity checks are enabled via LV_USE_ASSERT_MEM_INTEGRITY which makes LVGL much slower lv_init.c:232
[Warn]  (0.000, +0)      lv_init: Object sanity checks are enabled via LV_USE_ASSERT_OBJ which makes LVGL much slower lv_init.c:236
[Warn]  (0.000, +0)      lv_init: Style sanity checks are enabled that uses more RAM lv_init.c:240
~~~

根据警告，修改`lv_conf.h`：

~~~bash
231 /*Enable asserts if an operation is failed or an invalid data is found.
232  *If LV_USE_LOG is enabled an error message will be printed on failure*/
233 #define LV_USE_ASSERT_NULL          0   /*Check if the parameter is NULL. (Very fast, recommended)*/
234 #define LV_USE_ASSERT_MALLOC        0   /*Checks is the memory is successfully allocated or no. (Very fast, recommended)*/
235 #define LV_USE_ASSERT_STYLE         0   /*Check if the styles are properly initialized. (Very fast, recommended)*/
236 #define LV_USE_ASSERT_MEM_INTEGRITY 0   /*Check the integrity of `lv_mem` after critical operations. (Slow)*/
237 #define LV_USE_ASSERT_OBJ           0   /*Check the object's type and existence (e.g. not deleted). (Slow)*/
~~~

再次编译`./build.sh`，上传执行即可。

## 2. 支持触摸

### 2.1 修改lv_conf.h

如果想要支持触摸功能，修改`lv_conf.h`：

~~~bash
888 /*Driver for evdev input devices*/
889 #define LV_USE_EVDEV    1
~~~

### 2.2 修改main.c

在`main.c`，添加触摸初始化：

~~~c
int main(void)
{
    lv_init();

    /*Linux display device init*/
    lv_linux_disp_init();

    /*input touch device init*/
    lv_indev_t * indev = lv_evdev_create(LV_INDEV_TYPE_POINTER, "/dev/input/event3");

    /*Create a Demo*/
    lv_demo_widgets();
    //lv_demo_widgets_start_slideshow();

    /*Handle LVGL tasks*/
    while(1) {
        lv_timer_handler();
        usleep(5000);
    }

    return 0;
}
~~~

### 2.3 测试

如果不知道哪个是触摸的设备节点，用最简单的方式去测试。

执行`hexdump /dev/input/event*`，一个一个设备节点去试，用手触碰屏幕：

~~~bash
root@TinaLinux:/mnt/UDISK# hexdump /dev/input/event3
0000000 0f0e 0000 0000 0000 aa0f 0006 0000 0000
0000010 0003 0039 0000 0000 0f0e 0000 0000 0000
0000020 aa0f 0006 0000 0000 0003 003a 0002 0000
0000030 0f0e 0000 0000 0000 aa0f 0006 0000 0000
0000040 0003 0030 0008 0000 0f0e 0000 0000 0000
0000050 aa0f 0006 0000 0000 0003 0035 0192 0000
0000060 0f0e 0000 0000 0000 aa0f 0006 0000 0000
0000070 0003 0036 01cd 0000 0f0e 0000 0000 0000
0000080 aa0f 0006 0000 0000 0001 014a 0001 0000
0000090 0f0e 0000 0000 0000 aa0f 0006 0000 0000
00000a0 0000 0000 0000 0000 0f0e 0000 0000 0000
00000b0 d808 0006 0000 0000 0003 003a 0003 0000
00000c0 0f0e 0000 0000 0000 d808 0006 0000 0000
00000d0 0000 0000 0000 0000 0f0e 0000 0000 0000
00000e0 05a1 0007 0000 0000 0003 003a 0004 0000
00000f0 0f0e 0000 0000 0000 05a1 0007 0000 0000
0000100 0000 0000 0000 0000 0f0e 0000 0000 0000
0000110 332e 0007 0000 0000 0003 003a 0005 0000
0000120 0f0e 0000 0000 0000 332e 0007 0000 0000
0000130 0000 0000 0000 0000 0f0e 0000 0000 0000
0000140 60bc 0007 0000 0000 0003 003a 0006 0000
0000150 0f0e 0000 0000 0000 60bc 0007 0000 0000
0000160 0003 0030 0007 0000 0f0e 0000 0000 0000
0000170 60bc 0007 0000 0000 0000 0000 0000 0000
0000180 0f0e 0000 0000 0000 8983 0007 0000 0000
0000190 0003 0039 ffff ffff 0f0e 0000 0000 0000
00001a0 8983 0007 0000 0000 0001 014a 0000 0000
00001b0 0f0e 0000 0000 0000 8983 0007 0000 0000
~~~

有数据说明就是这个设备节点了。

OK，编译再次上传执行，完毕！

