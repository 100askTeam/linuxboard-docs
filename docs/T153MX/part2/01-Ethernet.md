---
sidebar_position: 1
sidebar_label: 双网口测试
---

# 双千兆以太网测试

本章节将讲解如何测试 OmniGate-T153 的两个千兆以太网接口。

## 准备工作

- OmniGate-T153 开发板
- 一根可以正常使用的网线
- 带 DHCP 功能的路由器或交换机
- 已按[快速启动](../part1/01-QuickStart.md)进入串口终端

## 连接网线

两个 RJ45 网口位于开发板前侧：

![OmniGate-T153 双千兆网口](../images/DshanPI-OminiGate-1.png)

先只连接一个网口，测试完成后再换另一个，这样可以确认物理网口与 Linux 接口名的对应关系。

## 查看以太网接口

在 **开发板 Linux Shell**执行：

```bash
ip link
```

当前设备树已经启用 `gmac0` 和 `gmac1`。Linux 接口通常显示为 `eth0`、`eth1`，实际名称以命令输出为准。

插入网线后，再执行：

```bash
ip -br link
```

可以看到其中一个接口出现 `UP` 或 `LOWER_UP`，记录它对应的物理网口。

## 获取 IP 地址

以下以 `eth0` 为例：

```bash
ip link set eth0 up
udhcpc -i eth0
ip addr show eth0
```

可以看到路由器分配的 IPv4 地址。

## 测试网络

先查看默认网关：

```bash
ip route
```

再 Ping 网关：

```bash
ping -I eth0 -c 4 <GATEWAY_IP>
```

将 `<GATEWAY_IP>` 替换为 `ip route` 显示的网关地址。出现 4 个回复且没有丢包，表示该网口可用。

拔下网线，连接第二个 RJ45，对另一个接口重复以上步骤。两个接口都能获得地址并 Ping 通，双网口测试完成。

## 测试通过标准

- 两个物理网口都能在 Linux 中找到对应接口。
- 插拔网线时，对应接口的链路状态会变化。
- 两个接口都能通过 DHCP 获取 IPv4 地址。
- 分别指定接口 Ping 网关时能够收到回复。

如果接口存在但始终没有 `LOWER_UP`，优先检查网线、交换机端口和 PHY 链路；如果链路正常但无法获取地址，检查 DHCP 服务和路由配置。
