---
sidebar_position: 3
sidebar_label: CAN FD 测试
---

# CAN FD 通信测试

本章节说明 OmniGate-T153 两路 CAN FD 的连接和测试方法。

## 准备工作

- 两路 CAN 接口均已在当前固件中启用
- CAN_H、CAN_L、GND 连接线
- 总线两端各一个 120 Ω 终端电阻
- 已进入开发板串口终端

:::warning 当前基础配置

当前 SDK 的 `linux-5.10-origin/board.dts` 中 `can0`、`can1` 仍为 `disabled`。因此基础镜像不会出现 CAN 网络接口。需要先把两个节点改为 `okay`，重新编译、打包和烧录，再执行本实验。

:::

## 连接两路 CAN

断电后连接：

```text
CAN0_H  -------- CAN1_H
CAN0_L  -------- CAN1_L
GND     -------- GND
```

接口位于开发板左侧绿色端子，具体端子顺序以 PCB 丝印为准。

## 配置 CAN 接口

在 **开发板 Linux Shell**执行：

```bash
ip link set can0 type can bitrate 500000
ip link set can1 type can bitrate 500000
ip link set can0 up
ip link set can1 up
```

查看状态：

```bash
ip -details link show can0
ip -details link show can1
```

## 测试 CAN0 发送、CAN1 接收

先监听 CAN1：

```bash
candump can1 &
```

再从 CAN0 发送：

```bash
cansend can0 123#1122334455667788
```

终端出现 ID `123` 和相同数据，说明 CAN0 到 CAN1 通信正常。

结束后台 `candump` 后，交换 `can0` 和 `can1` 再测试一次。两边都能收到相同数据，CAN 通信测试完成。

测试结束关闭接口：

```bash
ip link set can0 down
ip link set can1 down
```
