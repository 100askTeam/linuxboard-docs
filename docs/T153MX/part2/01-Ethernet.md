---
sidebar_position: 1
sidebar_label: 双网口测试
description: 逐一确认 OmniGate-T153 两个千兆网口的链路、DHCP、路由和通信状态。
---

# 双千兆以太网测试

本章测试两个千兆网口的链路、自动 DHCP 和数据通信。当前固件由 `S40network` 同时管理
`eth0`、`eth1`：插入网线后自动获取地址，拔线后约 1 秒清理该接口的 IPv4 地址和路由。

| 项目 | 说明 |
| --- | --- |
| 准备时间 | 约 5 分钟/网口 |
| 默认行为 | 两个接口开机置为 UP，检测到 carrier 后运行 `udhcpc` |
| 通过条件 | 两个 RJ45 分别获得地址并能 Ping 通网关 |

## 准备工作

- OmniGate-T153 开发板
- 一根可以正常使用的网线
- 带 DHCP 功能的路由器（普通交换机本身通常不分配地址）
- 已按[快速启动](../part1/01-QuickStart.md)进入串口终端

## 连接网线

两个 RJ45 网口位于开发板前侧：

![OmniGate-T153 双千兆网口](../images/DshanPI-OminiGate-1.png)

先只连接一个网口，测试完成后再换另一个，这样可以建立物理 RJ45 与 Linux 接口名的对应关系。
不要仅凭左右位置猜 `eth0`/`eth1`，硬件批次或设备树变化后名称可能不同。

## 查看以太网接口

在 **开发板 Linux Shell**先记录未插线状态：

```bash
ip -br link
```

当前设备树已经启用 `gmac0` 和 `gmac1`，Linux 通常显示为 `eth0`、`eth1`。`UP` 表示接口已被
系统启用，`LOWER_UP` 才表示网线和对端建立了物理链路；看到 `UP` 但没有 `LOWER_UP` 时还不能
说明网络已经连通。

插入网线后，再执行：

```bash
ip -br link
cat /sys/class/net/eth0/carrier
cat /sys/class/net/eth1/carrier
```

插线接口应出现 `LOWER_UP`，对应的 `carrier` 为 `1`。记录这组映射，随后把网线换到另一个 RJ45
重复确认。

### 本次 ADB 实板记录：未插网线

本次采集时两个 RJ45 都没有插线。这组输出可以作为正常的空载基线：

```console
# ip -br link show eth0
eth0  DOWN  02:00:23:63:dd:8f <NO-CARRIER,BROADCAST,MULTICAST,UP>
# ip -br link show eth1
eth1  DOWN  12:00:23:63:dd:8f <NO-CARRIER,BROADCAST,MULTICAST,UP>
# ip -br addr show eth0
eth0  DOWN  fe80::23ff:fe63:dd8f/64
# ip -br addr show eth1
eth1  DOWN  fe80::1000:23ff:fe63:dd8f/64
# /etc/init.d/S40network status
Ethernet link monitor is running (pid 252)
```

这里最容易看错的是 `<...UP>` 和前面的 `DOWN`：

- `<...UP>` 表示系统已经把接口管理状态置为 UP；
- `NO-CARRIER` 和 `DOWN` 表示没有检测到网线物理链路；
- 只有 `fe80::` 是本地 IPv6 地址，不表示已从路由器获得 IPv4；
- `S40network` 监视进程正常，插线后才会触发 DHCP。

## 验证自动获取 IP

插线后等待 3～10 秒，然后执行：

```bash
ip -br addr show eth0
ip route
/etc/init.d/S40network status
```

`eth0` 应出现路由器分配的 IPv4 地址，服务状态应显示 Ethernet link monitor 正在运行。

如果链路正常但没有 IPv4，可手动触发一次 DHCP 并观察输出：

```bash
udhcpc -f -q -i eth0
```

这条命令用于诊断；正常固件不需要每次手动运行。若提示 `no lease`，检查路由器 DHCP 地址池，
不要先修改设备树。

## 测试网络

先从 `ip route` 找到该接口的网关，再测试局域网：

```bash
ip route
```

再 Ping 网关：

```bash
ping -I eth0 -c 4 192.168.1.1
```

上面的 `192.168.1.1` 只是示例，必须换成 `ip route` 中 `dev eth0` 对应的 `via` 地址。若网络允许
访问互联网，再分别验证 IP 和 DNS：

```bash
ping -I eth0 -c 4 1.1.1.1
ping -I eth0 -c 4 example.com
```

能 Ping 通网关但不能 Ping 外网 IP，多半是上级网络没有出口；能 Ping IP 但域名失败，才检查 DNS。

拔下网线后立即观察：

```bash
ip monitor link &
ip monitor address &
```

接口应变为 `NO-CARRIER`，旧 IPv4 地址应很快消失。按 `Ctrl+C` 不能结束已经放到后台的两个命令，
可执行 `killall ip`；或者不加 `&`，分别在两个终端观察。

随后连接第二个 RJ45，对另一个接口重复测试。两个接口都能获得地址并 Ping 通，双网口测试完成。

## 双网口同时连接时

两个网络都提供默认网关时，Linux 会根据路由 metric 选择出口。不要用一次普通 `ping` 判断两个
网口都正常，应始终通过 `-I eth0` 和 `-I eth1` 分别测试：

```bash
ip route
ping -I eth0 -c 4 <ETH0_GATEWAY>
ping -I eth1 -c 4 <ETH1_GATEWAY>
```

生产环境若要固定主备、策略路由或不同子网，需要单独设计路由规则，不能依赖接口枚举顺序。

## 测试通过标准

- 两个物理网口都能在 Linux 中找到对应接口。
- 插拔网线时，对应接口的链路状态会变化。
- 两个接口都能通过 DHCP 获取 IPv4 地址。
- 分别指定接口 Ping 网关时能够收到回复。

建议在测试时留下下表，避免后续将物理端口与 `eth0` / `eth1` 混淆：

| 板上 RJ45 位置 | Linux 接口 | `carrier` | DHCP IPv4 | 网关 Ping |
| --- | --- | --- | --- | --- |
| 待记录 | `eth0` 或 `eth1` | 0 / 1 | 待记录 | 通过 / 失败 |
| 待记录 | `eth0` 或 `eth1` | 0 / 1 | 待记录 | 通过 / 失败 |

如果接口存在但始终没有 `LOWER_UP`，优先检查网线、交换机端口和 PHY 链路；如果链路正常但无法获取地址，检查 DHCP 服务和路由配置。

服务异常时可以恢复默认管理：

```bash
/etc/init.d/S40network restart
/etc/init.d/S40network status
ps | grep -E 'udhcpc|ethernet-link-monitor'
```
