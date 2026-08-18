---
sidebar_position: 3
sidebar_label: CAN FD 测试
description: 检查 OmniGate-T153 两路 CAN 控制器状态，完成接线、参数确认和双向收发。
---

# CAN FD 通信测试

本章说明两路 CAN/CAN FD 的连接和经典 CAN 收发测试。当前固件已启用控制器，并由 `S42can`
在开机时把 `can0`、`can1` 配置为 1 Mbps、`restart-ms 100`、队列长度 1000。

| 项目 | 默认值 | 判断方法 |
| --- | --- | --- |
| 接口 | `can0`、`can1` | `ip -details link show` |
| 位速率 | 1 Mbps | 两端必须一致 |
| 自动恢复 | `restart-ms 100` | BUS-OFF 后等待 100 ms 尝试恢复 |
| 健康状态 | `ERROR-ACTIVE`，错误计数不增长 | 查看 `berr-counter` 和统计数据 |

## 准备工作

- 两路 CAN 接口均已在当前固件中启用
- CAN_H、CAN_L、GND 连接线
- 总线两端各一个 120 Ω 终端电阻
- 已进入开发板串口终端

:::info 当前默认配置

默认参数保存在：

```text
/etc/default/can
```

默认内容为：

```bash
CAN0_BITRATE=1000000
CAN1_BITRATE=1000000
CAN_RESTART_MS=100
CAN_TX_QUEUE_LEN=1000
```

如果项目使用 500 kbps 等其他速率，修改该文件并重启 `S42can`。所有总线节点必须使用相同速率。

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
ip -br link show | grep can
```

应能看到 `can0` 和 `can1`。如果没有输出，说明控制器尚未启用或当前启动的不是新固件，不要继续执行后面的发送测试。

当前固件已自动完成配置。直接查看：

```bash
ip -details link show can0
ip -details link show can1
```

### 本次 ADB 控制器记录

本次采集时没有连接外部 CAN 对端，因此只确认控制器启动参数和错误状态：

```console
# cat /etc/default/can
CAN0_BITRATE=1000000
CAN1_BITRATE=1000000
CAN_RESTART_MS=100
CAN_TX_QUEUE_LEN=1000
# ip -details -statistics link show can0
4: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UP qlen 1000
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 100
          bitrate 1000000 sample-point 0.750
    RX: bytes packets errors dropped  missed   mcast
             0       0      0       0       0       0
    TX: bytes packets errors dropped carrier collsns
             0       0      0       0       0       0
# ip -details -statistics link show can1
5: can1: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UP qlen 1000
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 100
          bitrate 1000000 sample-point 0.750
```

这组记录证明两路控制器已经启动、位速率正确且暂无错误，但 RX/TX 包计数仍为 0，
所以不能代替下面的实际帧收发测试。

## 测试 CAN0 发送、CAN1 接收

预期状态为 `UP`、`ERROR-ACTIVE`、`bitrate 1000000`，发送和接收错误计数为 0。CAN 是网络接口，
但不需要也不应该给它配置 IPv4 地址。

先监听 CAN1：

```bash
candump -L can1
```

保持该终端运行，另开一个串口/ADB Shell，从 CAN0 发送：

```bash
cansend can0 123#1122334455667788
```

监听端出现 ID `123` 和相同数据，说明 CAN0 到 CAN1 通信正常。按 `Ctrl+C` 结束 `candump`。

交换 `can0` 和 `can1` 再测试一次。两边都能收到相同数据，CAN 通信测试完成。

若项目希望系统继续使用 CAN，无需在测试后关闭；临时停用可执行：

```bash
ip link set can0 down
ip link set can1 down
```

## 测试通过标准

- `can0`、`can1` 均能正常置为 UP，状态中没有持续增长的错误计数。
- CAN0 发送的数据能被 CAN1 原样接收。
- 交换发送和接收方向后仍能通信。

如果接口进入 `BUS-OFF`，先关闭接口，再检查两端波特率、CAN_H/CAN_L、共地和 120 Ω 终端电阻，确认无误后重新启用。

恢复默认配置：

```bash
/etc/init.d/S42can restart
ip -details -statistics link show can0
```

仅执行 `ip a` 时看到 `sunxi-can ... PM runtime resume/suspend` 是驱动运行时电源管理信息，不等于
总线故障。判断通信是否正常应看 `ERROR-ACTIVE/BUS-OFF`、`berr-counter` 和 `candump` 数据。

建议保留本次收发记录：

```text
测试日期：
位速率：
终端电阻：CAN_H 与 CAN_L 之间断电测量 ____ Ω
CAN0 → CAN1：通过 / 失败
CAN1 → CAN0：通过 / 失败
错误计数：
```
