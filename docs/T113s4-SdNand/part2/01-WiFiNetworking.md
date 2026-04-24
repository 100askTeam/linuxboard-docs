---
sidebar_position: 1
---

# WiFi 联网

本章节将讲解如何在 T113s4-SdNand 开发板上使用 WiFi 模块连接网络。

---

## 准备工作

**硬件：**
- T113s4-SdNand 开发板
- USB Type-C 线 ×1（串口/供电）
- 电源适配器（12V）

**软件：**
- 已烧录支持 WiFi 的系统镜像

---

## 登录串口终端

如果不清楚如何连接开发板登录串口，请参考《快速入门》中的「启动开发板」章节。

---

## WiFi 网络配置

### 1. 扫描周围 WiFi

```bash
iw dev wlan0 scan | grep SSID
```

扫描结果示例：

```
SSID: MyWiFi
SSID: GuestWiFi
SSID: Office_5G
```

### 2. 创建 WiFi 连接配置文件

```bash
wpa_passphrase <SSID> <密码> > /etc/wpa_supplicant.conf
```

**示例：**

```bash
wpa_passphrase MyWiFi 12345678 > /etc/wpa_supplicant.conf
```

### 3. 建立 WiFi 连接

```bash
wpa_supplicant -B -Dnl80211 -iwlan0 -c/etc/wpa_supplicant.conf
```

出现以下信息表示正在尝试连接：

```
Successfully initialized wpa_supplicant
```

### 4. 获取 IP 地址

```bash
udhcpc -i wlan0
```

获取成功示例：

```
udhcpc: started, v1.31.1
udhcpc: sending discover
udhcpc: sending select for 192.168.1.100
udhcpc: lease of 192.168.1.100 obtained, lease time 86400
```

### 5. 验证网络连接

```bash
ping -I wlan0 www.baidu.com
```

能正常收到回复表示 WiFi 连接成功。

---

## 常见问题

| 问题 | 解决方法 |
|:---|:---|
| 找不到 wlan0 设备 | 确认系统镜像已包含对应 WiFi 模组驱动 |
| 连接失败 | 检查 SSID 和密码是否正确 |
| 获取不到 IP | 确认路由器 DHCP 功能已开启 |
