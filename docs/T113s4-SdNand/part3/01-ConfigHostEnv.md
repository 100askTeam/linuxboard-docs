---
sidebar_position: 1
---

# 配置开发环境

本章节将指导你搭建 T113s4-SdNand 的开发环境。

---

## 方式一：使用预配置虚拟机（推荐）

如果你不熟悉 Linux 环境配置，推荐使用百问网提供的预配置虚拟机。

### 1. 安装 VMware Workstation

1. 访问 VMware 官网下载页面
2. 点击 **DOWNLOAD NOW** 下载 Windows 版本
3. 使用默认配置一步步安装

### 2. 获取 Ubuntu 虚拟机镜像

1. 访问 [Linux VM Images - Ubuntu 18.04](https://www.linuxvmimages.com/images/ubuntu-1804/)
2. 点击 **VMware Image** 下载
3. 下载时间约 10～30 分钟（取决于网速）

### 3. 运行虚拟机

1. 解压缩虚拟机镜像压缩包
2. 打开 VMware Workstation → **文件** → **打开** → 选择 `.vmx` 文件
3. 编辑虚拟机设置：
   - 内存：**建议 4GB 及以上**
   - 处理器：**建议 4 核及以上**
4. 点击 **开启此虚拟机**
5. 首次启动会提示「虚拟机已经复制」，点击 **我已复制虚拟机**

**默认登录信息：**
- 用户名：`ubuntu`
- 密码：`ubuntu`

> **提示**：Ubuntu 默认会自动共享 Windows 的网络，无需额外配置。

---

## 方式二：使用本地 Ubuntu 系统

如果你已有 Ubuntu 系统（18.04 或更高版本），可以直接使用。

---

## 配置开发环境

### 1. 安装必要依赖包

打开终端（Ctrl + Alt + T），执行以下命令：

```bash
sudo apt install build-essential subversion git-core libncurses5-dev zlib1g-dev gawk flex quilt libssl-dev xsltproc libxml-parser-perl mercurial bzr ecj cvs unzip lib32z1 lib32z1-dev lib32stdc++6 libstdc++6 bison -y
```

### 2. 安装 VMware 共享工具（仅虚拟机需要）

如果无法从 Windows 复制命令到 Ubuntu，先安装：

```bash
sudo apt install open-vm-tools
sudo apt install open-vm-tools-desktop
```

安装完成后重启虚拟机：

```bash
sudo reboot
```

### 3. 验证环境

重启后，可以从 Windows 复制粘贴文件到 Ubuntu，说明环境配置完成。

---

## 下一步

环境配置完成后，参考《获取 Tina5 源码》章节开始开发之旅。
