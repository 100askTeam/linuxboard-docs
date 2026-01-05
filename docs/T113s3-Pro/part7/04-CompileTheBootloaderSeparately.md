---
sidebar_position: 4
---
# 单独编译bootloader部分

### 1. 准备编译工具链

准备编译工具链接执行步骤如下：

```
cd lichee/brandy-2.0/
./build.sh -t
```

### 2.  快速编译 boot0 及 U-Boot

在tina-sdk的 lichee/brandy-2.0/目录下，执行 ./build.sh -p 平台名称，可以快速完成整个 boot 编译动作。这个平台名称是指，LICHEE_CHIP。

```
./build.sh -p {LICHEE_CHIP}            //快速编译spl/U-Boot
```

### 3. 编译 U-Boot

cd lichee/brandy-2.0/u-boot-2018 进入 u-boot-2018 目录。以sun8iw20p1_uart3_defconfig为例，依次执行如下操作即可。

```
make sun8iw20p1_uart3_defconfig
make -jN
```



### 4. 编译 boot0/fes/sboot

cd longan/brandy/brandy-2.0/spl 进入spl目录，需设置平台和要编译的模块参数。以sun8iw20p1为例，编译 nand/emmc 的方法如下：

* 编译boot0

```bash
make distclean
make p=sun8iw20p1 m=nand
make boot0

make distclean
make p=sun8iw20p1 m=emmc
make boot0
```

* 编译fes

```bash
make distclean
make p=sun8iw20p1  m=fes
make fes
```

* 编译sboot

```bash
make distclean
make p=sun8iw20p1  m=sboot
make sboot
```