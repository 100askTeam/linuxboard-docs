---
sidebar_position: 2
---

# 蓝牙配对

本章节将讲解如何在 T113s4-SdNand 开发板上进行蓝牙配对。

---

## 准备工作

**硬件：**
- T113s4-SdNand 开发板
- USB Type-C 线 ×1（串口/供电）
- 电源适配器（12V）
- 蓝牙设备（手机、耳机、音箱等）

**软件：**
- 已烧录支持蓝牙功能的系统镜像
- 确保 WiFi 已连接（蓝牙通常与 WiFi 模组集成）

---

## 登录串口终端

如果不清楚如何连接开发板登录串口，请参考《快速入门》中的「启动开发板」章节。

---

## 蓝牙配置步骤

### 1. 查看蓝牙设备节点

```bash
hciconfig -a
```

### 2. 启动蓝牙服务

```bash
bluetoothd &
```

### 3. 进入蓝牙命令行工具

```bash
bluetoothctl
```

### 4. 扫描蓝牙设备

```bash
[bluetooth]# power on
[bluetooth]# discoverable on
[bluetooth]# scan on
```

等待几秒后，会看到周围可发现的蓝牙设备列表。

### 5. 配对设备

```bash
[bluetooth]# pair <设备MAC地址>
```

### 6. 信任设备（可选）

```bash
[bluetooth]# trust <设备MAC地址>
```

### 7. 退出蓝牙工具

```bash
[bluetooth]# exit
```

---

## 常见问题

| 问题 | 解决方法 |
|:---|:---|
| 找不到蓝牙设备 | 确认 WiFi 模组支持蓝牙功能 |
| 配对失败 | 确认设备处于可发现状态 |
| 蓝牙服务无法启动 | 检查系统是否包含 bluetoothd |
