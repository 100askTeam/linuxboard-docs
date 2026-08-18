---
sidebar_position: 2
sidebar_label: Wi-Fi 与蓝牙
description: 检查 AIC8800D80 SDIO Wi-Fi 和 UART 蓝牙驱动，完成无线联网与蓝牙扫描。
---

# Wi-Fi 与 Bluetooth 测试

本章测试板载 AIC8800D80 的 Wi-Fi 和 Bluetooth。当前固件启动时由
`S45aic8800-bluetooth` 加载驱动、创建并拉起 `wlan0`，同时通过 UART7 初始化 `hci0`；连接具体
Wi-Fi 热点仍需要用户提供 SSID 和密码。

| 功能 | 硬件通道 | 默认状态 | 通过条件 |
| --- | --- | --- | --- |
| Wi-Fi | AIC8800D80 SDIO | 驱动加载并创建 `wlan0` | 关联热点、获得 IPv4、Ping 通网关 |
| 蓝牙 | AIC8800D80 UART7 | `hciattach` 初始化 `hci0` | `hci0` 为 `UP RUNNING`，可扫描到附近设备 |

## 准备工作

- 安装匹配的 Wi-Fi/Bluetooth 天线
- 准备 Wi-Fi 名称和密码
- 准备一台已开启蓝牙可发现模式的手机
- 已进入开发板串口终端

## 检查 Wi-Fi 接口

在 **开发板 Linux Shell**执行：

```bash
ip link show wlan0
dmesg | grep -Ei 'aic|wlan|sdio'
```

能够看到 `wlan0`，并且日志中没有 firmware 加载失败，说明无线驱动已经工作。若 `wlan0` 不存在，
再尝试重新执行板级初始化脚本：

```bash
/etc/init.d/S45aic8800-bluetooth restart
ip link show wlan0
```

服务正常时不需要重复执行 restart。

### 本次 ADB 驱动记录

本次实板中没有启动 `wpa_supplicant`，因此只验证无线驱动和蓝牙控制器：

```console
# ip -br link show wlan0
wlan0  UNKNOWN  f4:20:15:67:b7:d7 <BROADCAST,MULTICAST,UP,LOWER_UP>
# dmesg | grep -Ei 'aic|sdio' | tail
mmc2: new high speed SDIO card at address 390b
aicbsp_init, Driver Release Tag: aic-bsp-compatible(sdio)-20250410-002
Driver Release Tag: aic-rwnx-compatible(sdio)-20250410-008
ieee80211 phy0: New interface create wlan0
# wpa_cli -i wlan0 status
Failed to connect to non-global ctrl_ifname: wlan0  error: No such file or directory
```

`wlan0` 和 SDIO firmware 日志证明驱动已工作。`wpa_cli` 的失败只表示当时没有可连接的
`wpa_supplicant` 控制 socket，不是 SDIO 或驱动故障。按下一节创建目录并启动
`wpa_supplicant` 后再执行 `wpa_cli`。

## 连接 Wi-Fi

先备份原配置，并创建控制目录：

```bash
cp -a /etc/wpa_supplicant.conf /etc/wpa_supplicant.conf.bak
mkdir -p /var/run/wpa_supplicant
wpa_passphrase '<SSID>' '<PASSWORD>' > /tmp/wifi-network.conf
{
  echo 'ctrl_interface=/var/run/wpa_supplicant'
  echo 'update_config=1'
  cat /tmp/wifi-network.conf
} > /etc/wpa_supplicant.conf
chmod 600 /etc/wpa_supplicant.conf
```

`<SSID>` 和 `<PASSWORD>` 必须换成实际内容，并保留引号。`wpa_passphrase` 会写入 PSK；不要把
包含密码的配置提交到 Git 仓库。

停止旧进程，再启动 wpa_supplicant：

```bash
killall wpa_supplicant 2>/dev/null || true
wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant.conf
wpa_cli -i wlan0 status
```

第一次查询可能还在 `SCANNING` 或 `ASSOCIATING`。等待 3 秒后再次执行：

```bash
sleep 3
wpa_cli -i wlan0 status
```

连接成功后可以看到：

```text
wpa_state=COMPLETED
ssid=<连接的 Wi-Fi 名称>
```

关联成功不等于已经有 IP。继续请求 DHCP：

```bash
udhcpc -i wlan0
ip -br addr show wlan0
ip route
```

测试网络：

```bash
ping -I wlan0 -c 4 <WIFI_GATEWAY_IP>
```

能收到回复，表示 Wi-Fi 联网成功。

:::note 关于 P2P 提示和驱动打印

启动时出现 `p2p-dev-wlan0`、`P2P interface started`，或 nl80211 报告 `specific type not
supported`，不一定代表普通 STA 联网失败。最终以 `wpa_state=COMPLETED`、获得 IPv4 且能通信
为准。只有同时连接失败时才继续分析该提示。

:::

## 测试 Bluetooth

先查看控制器：

```bash
hciconfig -a
```

当前完整固件通常已经显示 `UP RUNNING`。如果 `hci0` 不存在，先恢复板级服务：

```bash
/etc/init.d/S45aic8800-bluetooth restart
hciconfig -a
```

本次 ADB 读取到的蓝牙状态为：

```console
# hciconfig -a
hci0:   Type: Primary  Bus: UART
        BD Address: 22:22:85:E9:94:84
        UP RUNNING
        RX bytes:1249 acl:0 sco:0 events:45 errors:0
        TX bytes:462 acl:0 sco:0 commands:45 errors:0
        Name: 'AIC8820'
# ps | grep hciattach
360 root  hciattach -n /dev/ttyAS7 aic
```

这证明 UART7、AIC 蓝牙 firmware 和 HCI 控制器已完成初始化。还需执行扫描，能找到附近设备后，
才算完成蓝牙无线链路验证。

进入蓝牙控制台：

```bash
bluetoothctl
```

依次输入：

```text
power on
scan on
```

终端中出现附近手机的名称或 MAC 地址，说明蓝牙扫描正常。测试完成输入：

```text
scan off
quit
```

若 `bluetoothctl` 一直等待，先确认 D-Bus 和 bluetoothd：

```bash
ps | grep -E 'dbus|bluetoothd|hciattach'
hciconfig hci0 up
```

## 测试通过标准

- `wlan0` 存在，驱动和 firmware 日志没有加载失败。
- `wpa_cli` 显示 `wpa_state=COMPLETED`，开发板获得 IP 地址并能 Ping 通网关。
- `hci0` 能够启用，`bluetoothctl` 可以扫描到附近设备。

Wi-Fi 找不到接口时先检查 AIC8800D80 的 SDIO 驱动与 firmware；蓝牙没有 `hci0` 时检查 UART7、
rfkill、`hciattach` 和板级初始化服务，不要只重复执行扫描命令。

:::warning UART7 的复用限制

当前固件把 UART7 的 PB11～PB14 引脚用于 AIC 蓝牙。板上的第二路 RS485 若改用 PJ4/PJ5 的
UART7 复用，就不能再让同一个 UART7 同时服务蓝牙；具体选择见[RS485 测试](./04-RS485.md)。

:::
