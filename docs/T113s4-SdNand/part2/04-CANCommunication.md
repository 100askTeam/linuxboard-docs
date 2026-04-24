---
sidebar_position: 4
---

# CAN 通信

本章节将讲解如何在 T113s4-SdNand 开发板上进行 CAN 总线通信。

---

## 准备工作

**硬件：**
- T113s4-SdNand 开发板
- USB Type-C 线 ×1（串口/供电）
- 电源适配器（12V）
- CAN 分析仪或另一块支持 CAN 的开发板

**软件：**
- 串口终端工具（Putty、MobaXterm 等）

---

## CAN 总线概述

CAN（Controller Area Network）是一种广泛应用于工业控制、汽车电子等领域的现场总线协议。

- **通信速率**：最高 1 Mbps
- **支持帧类型**：标准帧（11 位 ID）和扩展帧（29 位 ID）
- **通信距离**：最远可达 10 km（低速模式）
- **多主架构**：任意节点均可主动发送数据

---

## CAN 通信测试

### 1. 查看 CAN 设备节点

```bash
ip link show can0
```

### 2. 配置 CAN 接口

设置波特率为 125000：

```bash
ip link set can0 type can bitrate 125000
```

### 3. 启动 CAN 接口

```bash
ifconfig can0 up
```

### 4. 查看 CAN 接口状态

```bash
ip -d -s link show can0
```

正常状态示例：

```
can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
    bitrate 125000 sample-point 0.875
    tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
```

### 5. 发送 CAN 数据

使用 `cansend` 命令发送标准帧（ID 为 0x123，数据为 8 字节）：

```bash
cansend can0 123#1122334455667788
```

### 6. 接收 CAN 数据

使用 `candump` 命令监听 CAN 总线数据：

```bash
candump can0
```

接收数据示例：

```
can0  123   [8]  11 22 33 44 55 66 77 88
```

---

## 常见问题

| 问题 | 解决方法 |
|:---|:---|
| can0 设备不存在 | 检查内核是否包含 CAN 驱动 |
| 无法启动 can0 | 确认硬件连接正常 |
| 发送数据无响应 | 检查波特率是否匹配 |
