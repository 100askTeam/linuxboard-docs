---
sidebar_position: 2
sidebar_label: Wi-Fi 与蓝牙
---

# Wi-Fi 与 Bluetooth 测试

本章节将讲解如何测试 OmniGate-T153 板载 AIC8800D80 模块的 Wi-Fi 和 Bluetooth 功能。

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

能够看到 `wlan0`，并且日志中没有 firmware 加载失败，说明无线驱动已经工作。

## 连接 Wi-Fi

生成 wpa_supplicant 配置：

```bash
wpa_passphrase '<SSID>' '<PASSWORD>' > /etc/wpa_supplicant.conf
chmod 600 /etc/wpa_supplicant.conf
```

把 `<SSID>` 和 `<PASSWORD>` 换成实际网络信息。不要把真实密码提交到源码仓库。

启动板级 Wi-Fi 服务：

```bash
/etc/init.d/S46omnigate-wifi restart
wpa_cli -i wlan0 status
```

连接成功后可以看到：

```text
wpa_state=COMPLETED
ssid=<连接的 Wi-Fi 名称>
ip_address=<获得的 IP 地址>
```

测试网络：

```bash
ping -I wlan0 -c 4 <GATEWAY_IP>
```

能收到回复，表示 Wi-Fi 联网成功。

## 测试 Bluetooth

先查看控制器：

```bash
hciconfig -a
```

如果 `hci0` 为 DOWN，执行：

```bash
hciconfig hci0 up
```

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

## 测试通过标准

- `wlan0` 存在，驱动和 firmware 日志没有加载失败。
- `wpa_cli` 显示 `wpa_state=COMPLETED`，开发板获得 IP 地址并能 Ping 通网关。
- `hci0` 能够启用，`bluetoothctl` 可以扫描到附近设备。

Wi-Fi 找不到接口时先检查 AIC8800D80 的 SDIO 驱动与 firmware；蓝牙没有 `hci0` 时检查 UART、复位脚和板级初始化服务，不要只重复执行扫描命令。
