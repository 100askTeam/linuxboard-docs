---
sidebar_position: 1
---

# LVGL 从零实现多媒体播放器

本章节将讲解如何在 T113s4-SdNand 开发板上基于 LVGL + TPlayer 实现一个多媒体播放器。

---

## 前置条件

**硬件：**
- T113s4-SdNand 开发板
- 百问网 7 寸 RGB 屏幕（或其他兼容屏幕）
- 3.5mm 耳机或功放扬声器套件
- 12V 锂电池或 12V 电源适配器
- SD 卡（预存 MP4 视频文件）

**软件：**
- 已完成 Tina5 SDK 开发环境搭建
- 已完成 Tina5 SDK 编译打包烧录

**源码：**
- 仓库地址：[100ASK_T113s3-SdNand_TinaSDK5 (pj-100ask_cat_tv 分支)](https://github.com/DongshanPI/100ASK_T113s3-SdNand_TinaSDK5/tree/pj-100ask_cat_tv)
- 作者原始仓库：[t113s3_cattv_demo](https://gitee.com/wangxiankang/t113s3_cattv_demo)

---

## 实现原理

基于 **LVGL + TPlayer** 库实现：

- **TPlayer**：全志 Tina SDK 内置的多媒体播放库，负责解码和播放 SD 卡内的 MP4 文件
- **LVGL**：负责 UI 交互，图层位于 TPlayer 图层之上，并将中心区域设置为透明窗口，用于显示 TPlayer 播放内容

```
┌─────────────────────────────────┐
│           LVGL UI 图层           │
│  (透明窗口区域显示 TPlayer 视频)  │
├─────────────────────────────────┤
│         TPlayer 视频图层         │
└─────────────────────────────────┘
```

---

## 编译项目

### 1. 克隆源码

```bash
git clone https://github.com/DongshanPI/100ASK_T113s3-SdNand_TinaSDK5/ -b pj-100ask_cat_tv
cd 100ASK_T113s3-SdNand_TinaSDK5
```

### 2. 配置 Makefile

编辑项目内置的 `Makefile`，修改以下内容：

- `TINA_SDK_ROOT`：设置为你的 Tina5 SDK 路径
- 交叉编译器路径：设置为 Tina5 SDK 编译输出的工具链路径

> **注意**：必须先编译过 Tina5 SDK 系统镜像，才可以继续后续操作。

### 3. 编译

在项目根目录下执行：

```bash
make -j32
```

编译成功后会生成 `cattv` 可执行程序。

---

## 运行测试

### 1. 准备 SD 卡

SD 卡预存一些 MP4 文件，目录结构如下：

```
SD 卡根目录/
├── tom&jerry/
│   ├── 001.mp4
│   └── 999.mp4
├── xiyangyang/
│   ├── 001.mp4
│   └── 999.mp4
└── ...
```

将 SD 卡插入开发板。

### 2. 设置音频属性

```bash
amixer -D hw:audiocodec cset numid=39 1
amixer -D hw:audiocodec cset numid=38 1
```

### 3. 上传程序到开发板

```bash
adb push cattv /mnt/UDISK
```

### 4. 运行测试

在开发板串口终端中执行：

```bash
cd /mnt/UDISK
chmod +x cattv
./cattv
```

---

## 开机自启

修改 `/etc/profile` 文件，在文件尾部添加：

```bash
amixer -D hw:audiocodec cset numid=39 1
amixer -D hw:audiocodec cset numid=38 1

cd /mnt/UDISK
chmod +x cattv
./cattv > /dev/null &
cd /
```

保存后重启开发板，播放器将自动启动。
