---
sidebar_position: 8
---
# Uboot查看并修改内核设备树节点

### FDT命令说明

FDT：flattened device tree 的缩写在 U-Boot 控制台停下后，输入fdt，可以查看fdt命令帮助。

```
sunxi#fdt
fdt - flattened device tree utility commands
Usage:
fdt addr [-c] <addr> [<length>] - Set the [control] fdt location to <addr>
fdt move <fdt> <newaddr> <length> - Copy the fdt to <addr> and make it active
fdt resize - Resize fdt to size + padding to 4k addr
fdt print <path> [<prop>] - Recursive print starting at <path>
fdt list <path> [<prop>] - Print one level starting at <path>
fdt get value <var> <path> <prop> - Get <property> and store in <var>
fdt get name <var> <path> <index> - Get name of node <index> and store in <var>
fdt get addr <var> <path> <prop> - Get start address of <property> and store in <var>
fdt get size <var> <path> [<prop>] - Get size of [<property>] or num nodes and store in <var>
fdt set <path> <prop> [<val>] - Set <property> [to <val>]
fdt mknode <path> <node> - Create a new node after <path>
fdt rm <path> [<prop>] - Delete the node or <property>
fdt header
fdt bootcpu <id> - Set boot cpuid
fdt memory <addr> <size> - Add/Update memory node
fdt rsvmem print - Show current mem reserves
fdt rsvmem add <addr> <size> - Add a mem reserve
fdt rsvmem delete <index> - Delete a mem reserves
fdt chosen [<start> <end>] - Add/update the /chosen branch in the tree
<start>/<end> - initrd start/end addr
NOTE: Dereference aliases by omiting the leading '/', e.g. fdt print ethernet0。
```

**其中常用的命令就是fdt list 和 fdt set,fdt list 用来查询节点配置,fdt set 用来修改节点配置。**

### 1.  查询配置

首先确定要查询的字段在 device tree 的路径，如果不知道路径，则需要用fdt命令按以下步骤进

行查询。1. 在根目录下查找。

```
sunxi#fdt list /
/ {
    model = "{LICHEE_CHIP}";
    compatible = "arm,{LICHEE_CHIP}", "arm,{LICHEE_CHIP}";
    interrupt-parent = <0x00000001>;
    #address-cells = <0x00000002>;
    #size-cells = <0x00000002>;
    ......................
    cpuscfg {
    };
    ion {
    };
    dram {
    };
    memory@40000000 {
    };
    interrupt-controller@1c81000 {
    };
    sunxi-chipid@1c14200 {
    };
    timer {
    };
    pmu {
    };
    dvfs_table {
    };
    dramfreq {
    };
    gpu@0x01c40000 {
    };
    wlan {
    };
    bt {
    };
    btlpm {
    };
};
```

如果找到需要的配置，比如wlan的配置，运行如下命令即可。

```
sunxi#fdt list /wlan //注意路径中的 /
wlan {
    compatible = "allwinner,sunxi-wlan";
    clocks = <0x00000096>;
    wlan_power = "vcc-wifi";
    wlan_io_regulator = "vcc-wifi-io";
    wlan_busnum = <0x00000001>;
    status = "okay";
    device_type = "wlan";
    wlan_regon = <0x00000077 0x0000000b 0x00000002 0x00000001 0xffffffff 0xffffffff 0
    x00000000>;
    wlan_hostwake = <0x00000077 0x0000000b 0x00000003 0x00000006 0xffffffff 0xffffffff
    0x00000000>;
};
```

1. 在 soc目录下找。如果在第一步中没有发现要找的配置，比如nand0的配置，则该配置可能在soc目录下。

```
sunxi#fdt list /soc
soc@01c00000 {
    compatible = "simple-bus";
    #address-cells = <0x00000002>;
    #size-cells = <0x00000002>;
    ranges;
    device_type = "soc";
    ......................
    hdmi@01ee0000 {
    };
    tr@01000000 {
    };
    pwm@01c21400 {
    };
    nand0@01c03000 {
    };
    thermal_sensor {
    };
    cpu_budget_cool {
    };
    .......................
};
```

然后用如下命令显示即可:

```
sunxi#fdt list /soc/nand0
nand0@01c03000 {
    compatible = "allwinner,sun50i-nand";
    device_type = "nand0";
    reg = <0x00000000 0x01c03000 0x00000000 0x00001000>;
    interrupts = <0x00000000 0x00000046 0x00000004>;
    clocks = <0x00000004 0x0000007e>;
    pinctrl-names = "default", "sleep";
    pinctrl-1 = <0x00000081>;
    nand0_regulator1 = "vcc-nand";
    nand0_regulator2 = "none";
    nand0_cache_level = <0x55aaaa55>;
    nand0_flush_cache_num = <0x55aaaa55>;
    nand0_capacity_level = <0x55aaaa55>;
    nand0_id_number_ctl = <0x55aaaa55>;
    nand0_print_level = <0x55aaaa55>;
    nand0_p0 = <0x55aaaa55>;
    nand0_p1 = <0x55aaaa55>;
    nand0_p2 = <0x55aaaa55>;
    nand0_p3 = <0x55aaaa55>;
    status = "disabled";
    nand0_support_2ch = <0x00000000>;
    pinctrl-0 = <0x000000a9 0x000000aa>;
};
```

1. 使用路径别名查找。别名是 device tree 中完整路径的一个简写，有一个专门的节点 ( /aliases) 来表示别名的相关信息，用如下命令可以查看系统中别名的配置情况：

```
sunxi#fdt list /aliases
aliases {
    serial0 = "/soc@01c00000/uart@01c28000";
    ..............
    mmc0 = "/soc@01c00000/sdmmc@01c0f000";
    mmc2 = "/soc@01c00000/sdmmc@01C11000";
    nand0 = "/soc@01c00000/nand0@01c03000";
    disp = "/soc@01c00000/disp@01000000";
    lcd0 = "/soc@01c00000/lcd0@01c0c000";
    hdmi = "/soc@01c00000/hdmi@01ee0000";
    pwm = "/soc@01c00000/pwm@01c21400";
    boot_disp = "/soc@01c00000/boot_disp";
};
sunxi#
```

由于配置了nand0节点的路径别名，因此可以用如下命令来显示nand0的配置信息。

```
sunxi#fdt list nand0
nand0@01c03000 {
    compatible = "allwinner,sun50i-nand";
    device_type = "nand0";
    reg = <0x00000000 0x01c03000 0x00000000 0x00001000>;
    ..................
    pinctrl-names = "default", "sleep";
    pinctrl-1 = <0x00000081>;
};
```

注：在fdt的所有命令中，alias 可以用作path参数。

```
fdt list <path> [<prop>] - Print one level starting at <path>
fdt set <path> <prop> [<val>] - Set <property> [to <val>]
```

### 2. 修改配置

#### 2.1 修改整数配置

命令格式：fdt set path prop 示例：fdt set /wlan wlan_busnum `<0x2>`

```
sunxi#fdt list /wlan
wlan {
    compatible = "allwinner,sunxi-wlan";
    clocks = <0x00000096>;
    wlan_power = "vcc-wifi";
    wlan_io_regulator = "vcc-wifi-io";
    wlan_busnum = <0x00000001>;
    status = "disable";
    device_type = "wlan";
};
sunxi#fdt set /wlan wlan_busnum <0x2>
sunxi#fdt list /wlan
wlan {
    compatible = "allwinner,sunxi-wlan";
    clocks = <0x00000096>;
    wlan_power = "vcc-wifi";
    wlan_io_regulator = "vcc-wifi-io";
    wlan_busnum = <0x00000002>; //修改后
    status = "disable";
    device_type = "wlan";
};
```

注：修改整数时，根据需要也可配置为数组形式，需要用空格来分隔。命令格式：fdt set path prop `<0x1 0x2 0x3>`

#### 2.2 修改字符串配置

命令格式：fdt set path prop "xxxxx" 示例：fdt set /wlan status "disable"

```
sunxi#fdt list /wlan
wlan {
    compatible = "allwinner,sunxi-wlan";
    clocks = <0x00000096>;
    wlan_power = "vcc-wifi";
    wlan_io_regulator = "vcc-wifi-io";
    wlan_busnum = <0x00000001>;
    status = "okay";
    device_type = "wlan";
};
sunxi#fdt set /wlan status "disable"
sunxi#fdt list /wlan
wlan {
    compatible = "allwinner,sunxi-wlan";
    clocks = <0x00000096>;
    wlan_power = "vcc-wifi";
    wlan_io_regulator = "vcc-wifi-io";
    wlan_busnum = <0x00000001>;
    status = "disable"; //修改后
    device_type = "wlan";
};
sunxi#
```

注：修改字符串时，根据需要也可配置为数组形式，需要用空格来分隔。命令格式：fdt set path prop "string1" "string2"

### 3. GPIO 或者 PIN 配置特殊说明

接口对应的数字编号说明如下：

```
#define PA 0
#define PB 1
#define PC 2
#define PD 3
#define PE 4
#define PF 5
#define PG 6
#define PH 7
#define PI 8
#define PJ 9
#define PK 10
#define PL 11
#define PM 12
#define PN 13
#define PO 14
#define PP 15
#define default 0xffffffff
```

Sysconfig 中描述 gpio 的形式如下：`Port:端口+组内序号<功能分配><内部电阻状态><驱动能力><输出电平状态>`

#### 3.1 PIN 配置说明

Pinctrl 节点分为 cpux 和 cpus，对应的节点路径如下：Cpux : /soc/pinctrl@01c20800 Cpus:/soc/pinctrl@01f02c00

#### 3.2 查看 PIN 配置

PIN 配置属性字段说明:

| 属性字段           | 含义                                        |
| :----------------- | :------------------------------------------ |
| allwinner,function | 对应于 sysconfig 中的主键名                 |
| allwinner,pins     | 对应于 sysconfig 中每个 gpio 配置中的端口名 |
| allwinner,pname    | 对应于 sysconfig 中主键下面子键名字         |
| allwinner,muxsel   | 功能分配                                    |
| allwinner,pull     | 内部电阻状态                                |
| allwinner,drive    | 驱动能力                                    |
| allwinner,data     | 输出电平状态                                |

说明

**其中0xffffffff表示使用默认值。**

按以下方法查看cpux的 PIN 配置。

```
sunxi#fdt list /soc/pinctrl@01c20800/lcd0
lcd0@0 {
    linux,phandle = <0x000000ab>;
    phandle = <0x000000ab>;
    allwinner,pins = "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", "PD18", "PD19", "PD20", "PD21";
    allwinner,function = "lcd0";
    allwinner,pname = "lcdd0", "lcdd1", "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", "lcdd8", "lcdd9";
    allwinner,muxsel = <0x00000003>;
    allwinner,pull = <0x00000000>;
    allwinner,drive = <0xffffffff>;
    allwinner,data = <0xffffffff>;
};
sunxi#
```

按以下方法查看cpus的 PIN 配置。

```
sunxi# fdt list /soc/pinctrl@01f02c00/s_uart0
s_uart0@0 {
    linux,phandle = <0x000000b4>;
    phandle = <0x000000b4>;
    allwinner,pins = "PL2", "PL3";
    allwinner,function = "s_uart0";
    allwinner,pname = "s_uart0_tx", "s_uart0_rx";
    allwinner,muxsel = <0x00000002>;
    allwinner,pull = <0xffffffff>;
    allwinner,drive = <0xffffffff>;
    allwinner,data = <0xffffffff>;
};
sunxi#
```

#### 3.3 修改 PIN 配置

使用fdt set命令可以修改 PIN 中相关属性字段

```
sunxi#fdt set /soc/pinctrl@01c20800/lcd0 allwinner,drive <0x1>
sunxi#fdt list /soc/pinctrl@01c20800/lcd0
lcd0@0 {
    linux,phandle = <0x000000ab>;
    phandle = <0x000000ab>;
    allwinner,pins = "PD12", "PD13", "PD14", "PD15", "PD16", "PD17", "PD18", "PD19", "PD20", "PD21";
    allwinner,function = "lcd0";
    allwinner,pname = "lcdd0", "lcdd1", "lcdd2", "lcdd3", "lcdd4", "lcdd5", "lcdd6", "lcdd7", "lcdd8", "lcdd9";
    allwinner,muxsel = <0x00000003>;
    allwinner,pull = <0x00000000>;
    allwinner,drive = <0x00000001>;
    allwinner,data = <0xffffffff>;
};
```

说明

**示例中该处修改会影响allwinner,pins表示的所有端口的驱动能力配置，修改allwinner,muxsel, allwinner,pull,allwinner,data的值也会产生类似效果。**

####  3.4 GPIO 配置说明

Device tree 中 GPIO 对应关系，以 usb 中usb_id_gpio为例

```
sunxi#fdt list /soc/usbc0
usbc0@0 {
    test = <0x00000002 0x00000003 0x12345678>;
    device_type = "usbc0";
    compatible = "allwinner,sun50i-otg-manager";
    ........
    usb_serial_unique = <0x00000000>;
    usb_serial_number = "20080411";
    rndis_wceis = <0x00000001>;
    status = "okay";
    usb_id_gpio = <0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0xffffffff 0xffffffff>;
};
```

对应于 device tree 中 usb_id_gpio = `<0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0xffffffff 0xffffffff>`，解释如下：

| 属性数值   | 含义                                           |
| :--------- | :--------------------------------------------- |
| 0x00000030 | device tree 内部一个节点相关信息，这里可以略过 |
| 0x00000007 | 端口 PH, 即 #define PH 7                       |
| 0x00000009 | 组内序号, 即 PH09                              |
| 0x00000000 | 功能分配, 即将 PH09 配为输入                   |
| 0x00000001 | 内部电阻状态, 即配为上拉                       |
| 0xffffffff | 驱动能力, 默认值                               |
| 0xffffffff | 输出电平, 默认值                               |

如果需要修改 usb_id_gpio的配置，可按如下方式（示例修改了驱动能力，输出电平两项）：

```
sunxi#fdt set /soc/usbc0 usb_id_gpio `<0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0x2 0x1>`
sunxi#fdt list
usbc0@0 {
    test = <0x00000002 0x00000003 0x12345678>;
    device_type = "usbc0";
    compatible = "allwinner,sun50i-otg-manager";
    ........
    usb_serial_unique = <0x00000000>;
    usb_serial_number = "20080411";
    rndis_wceis = <0x00000001>;
    status = "okay";
    usb_id_gpio = <0x00000030 0x00000007 0x00000009 0x00000000 0x00000001 0x00000002 0x00000001>; //修改ok
};
sunxi#
```