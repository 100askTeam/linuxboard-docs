---
sidebar_position: 9
---
# 使用fastboot更新部分系统

### 获取分区信息

``` bash
=> part  list sunxi_flash 0

Partition Map for UNKNOWN device 0  --   Partition Type: EFI

Part    Start LBA       End LBA         Name
        Attributes
        Type GUID
        Partition GUID
  1     0x00008000      0x000097c5      "boot-resource"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e45
  2     0x000097c6      0x000099bd      "env"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e46
  3     0x000099be      0x00009bb5      "env-redund"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e47
  4     0x00009bb6      0x0000b9b5      "boot"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e48
  5     0x0000b9b6      0x0001dac5      "rootfs"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e49
  6     0x0001dac6      0x000202c5      "private"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e4a
  7     0x000202c6      0x00022ac5      "rootfs_data"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e4b
  8     0x00022ac6      0x00039115      "UDISK"
        attrs:  0x8000000000000000
        type:   ebd0a0a2-b9e5-4433-87c0-68b6b72699c7
        guid:   a0085546-4166-744a-a353-fca9272b8e4c
=>
```

### 进入fastboot模式

开发板输入 fastboot进入 烧录模式

``` bash
=> fastboot
sunxi_fastboot_init
recv addr 0x41000000
send addr 0x4415f008
start to display fastbootlogo.bmp
partno erro : can't find partition bootloader
54 bytes read in 1 ms (52.7 KiB/s)
[105.232]bmp_name=fastbootlogo.bmp size 189966
189966 bytes read in 21 ms (8.6 MiB/s)
delay time 0
weak:otg_phy_config
usb init ok
sunxi_usb_fastboot_status=0
set address 0x16
set address 0x16 ok
set address 0x18
set address 0x18 ok
```

### 连接ubuntu系统

ubuntu系统连接 开发板设备

![屏幕截图-2023-03-31-174856](images\屏幕截图-2023-03-31-174856.png)

ubuntu终端下 输入 `sudo fastboot devices `来查看是否有ADB设备存在。 

注意：如果没有fastboot命令则需要单独 安装 android-tools-fastboot 软件包。

![image-20230331175010867](images\image-20230331175010867.png)

之后我们就可以使用  fastboot erase/flash 进行擦除/烧写 系统分区。

### 使用fastboot更新 boot分区

如下举例，单独使用 fastboot更新 boot 分区，也就是存放内核设备树的分区。

首先进入到已经编译好的 tina-sdk  目录内的 out/t113-100ask 可以看到 有很多镜像文件，如下图所示，这些文件里面包含了我们最近编译过可以烧录的系统各个部分镜像。

![image-20230331175420455](images\image-20230331175420455.png)

在开始烧录之前我们还是需要先确定你烧录的镜像文件具体是那个文件。需要通过查看  tina-sdk 目录内的`device/config/chips/t113/configs/100ask/sys_partition.fex`配置文件，可以看到 红色箭头指示的 1 2 3 4 5 表示最终下载的镜像文件名称。

![image-20230331180101518](images\image-20230331180101518.png)

确定了最终各个部分镜像文件名称以后，可以执行 find 命令来进行快速查找，举例 我们需要更新 rootfs.fex镜像文件，那么我们可以在  tina-sdk 目录 `out/t113-100ask`目录内执行 `find  ./ -name  boot.fex `可以找到 一个 在 image目录下的boot.fex 文件，通过 ls -la 来查看这个文件的详细信息，发现这个并不是最终文件而只是一个 链接文件，真正的 文件在`  /home/ubuntu/tina-d1-h/out/t113-100ask/boot.img`目录下，我们更新文件系统需要的也是这个 文件。

![image-20230331181656241](images\image-20230331181656241.png)

确定了更新文件所在位置以后 就可以通过  `sudo  fastboot  flash boot /home/ubuntu/tina-d1-h/out/t113-100ask/boot.img `来更新根文件系统镜像了。

![image-20230331181840442](images\image-20230331181840442.png)

开发板端打印输出信息

![image-20230331181900789](images\image-20230331181900789.png)

更新完成以后，我们就可以按下开发板 复位按键来重启开发板系统了。