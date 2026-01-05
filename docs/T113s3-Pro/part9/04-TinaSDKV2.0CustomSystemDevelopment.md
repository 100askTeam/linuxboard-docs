---
sidebar_position: 1
---
# Tina4SDK自定义系统开发

## 什么是自定义系统？

## TinaSDK Kconfig界面配置

Tina Linux采用 Kconfig 机制对 SDK 和内核进行配置。

Kconfig 是一种固定格式的配置文件。Linux 编译环境中的 menuconfig 程序可以识别这种格式的配置文件，并提取出有效信息生成可视化的配置菜单。

Tina Linux 包含两个 menuconfig，一个是对内核进行管理和配置的 `kernel_menuconfig`，一个是对软件包进行管理和配置的 `Tina menuconfig`。

### kernel menuconfig

在 `Tina Linux` 的配置环境中配置好环境变量进入可编译状态后，输入

```
make kernel_menuconfig
```

即可进入 `kernel menuconfig` 配置菜单。

配置菜单源文件为：

```
/home/ubuntu/tina-d1-h/device/config/chips/t113/configs/100ask/linux #t113和100ask分别为芯片名和实际方案名，根据当前选择的编译方案决定
```

输出 `cconfig` 可快速转跳到该目录。

### Tina menuconfig

在 `Tina Linux` 的配置环境中配置好环境变量进入可编译状态后，输入

```
make menuconfig
```

即可进入Tina menuconfig配置菜单。

配置菜单源文件为  **target/allwinner/t113-100ask/defconfig**  ：

```
ubuntu@ubuntu1804:~/tina-d1-h/target/allwinner/t113-100ask$ ls
base-files  BoardConfig.mk  busybox-init-base-files  defconfig  defconfig_ota  Makefile  modules.mk  swupdate  t113_100ask.mk  TinaProducts.mk  vendorsetup.s
```

输出 `cdevice` 可快速转跳到该目录。
