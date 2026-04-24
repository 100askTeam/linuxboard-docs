---
sidebar_position: 1
---

# 网络与应用开发

本章节介绍 T113s4-SdNand 开发板的网络配置和高级应用开发。

---

## 网络配置

### WiFi 联网

参考《基础使用 → WiFi 联网》章节。

### 以太网通信

参考《基础使用 → 以太网测试》章节。

### 4G 网络（可选）

开发板支持 USB 4G 模块，插入后即可使用。

```bash
# 查看 USB 设备
lsusb

# 查看网络接口
ifconfig -a
```

---

## LVGL 多媒体播放器

T113s4-SdNand 支持基于 LVGL + TPlayer 的多媒体播放器应用，可在开发板上实现视频播放功能。

### 特性

- 基于 LVGL v9 图形界面
- 支持 H.264/H.265 视频解码（硬件加速）
- 支持多种音频格式
- 触摸屏控制

### 编译部署

在 Tina5 SDK 中通过 Buildroot 配置启用：

```bash
./build.sh buildroot_menuconfig
```

找到对应的 LVGL 多媒体播放器选项并启用，然后重新编译打包固件。

---

## AIC8800 AP 模式

AIC8800D80 WiFi 模组支持 AP（Access Point）模式，可将开发板变为 WiFi 热点。

### 配置步骤

1. 加载 AP 模式固件
2. 配置 hostapd
3. 启动 DHCP 服务
4. 启动热点

```bash
# 启动 AP 模式
hostapd /etc/hostapd.conf &

# 启动 DHCP
udhcpd /etc/udhcpd.conf
```

---

## 常见问题

| 问题 | 解决方法 |
|:---|:---|
| WiFi 无法切换 AP 模式 | 确认 AIC8800 模组支持 AP 功能 |
| 视频播放卡顿 | 检查是否启用了硬件解码 |
| 网络连接不稳定 | 检查天线连接和信号强度 |
