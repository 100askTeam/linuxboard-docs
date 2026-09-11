---
sidebar_position: 3
sidebar_label: TF 卡
description: 按 V1.4 原理图核对 SDC0 引脚，并用 /sdcard 确认 TF 卡是否识别。
---

# TF 卡测试

MicroSD 接 SDC0，引脚与原理图 V1.4 一致：

| 信号 | GPIO |
|:---|:---|
| D1 | PF0 |
| D0 | PF1 |
| CLK | PF2 |
| CMD | PF3 |
| D3 | PF4 |
| D2 | PF5 |
| CD | PF6（`SDC0_DC`） |

| 验证项 | 通过判据 |
|:---|:---|
| 挂载 | 插卡并重新上电后 `ls /sdcard` 能列出内容 |
| 容量 | `df` 里能看到 `/sdcard`，大小因卡而异 |

SDK 默认打开 `CONFIG_DRIVERS_SDMMC` 和 `CONFIG_DRIVERS_SDMMC_FS`，识别到卡后挂到 `/sdcard`。卡槽检测脚是 PF6；当前工程上电扫描 SD 卡，运行中插拔后需要重新上电再识别。

## 探测

插入一张 **FAT32** 的 TF 卡后上电，然后：

```bash
adb shell ls /sdcard
adb shell df
```

能列出卡上的文件，并且 `df` 里能看到 `/sdcard`，说明已经识别并挂载。不同容量的卡，`df` 显示的大小会不一样。

`ls /dev` 里也可能出现 SD 对应的块设备节点，节点名以当前固件为准。

`sdmmctest` 会直接操作控制器。未插卡时报 `Initial card failed` 是预期现象；这条命令可能占用总线较久，**不要让它在后台长时间挂着**。日常确认用 `/sdcard` 即可。

## 出问题怎么查

| 现象 | 可能原因 | 处理 |
|:---|:---|:---|
| `ls /sdcard` 为空或没有该目录 | 没插卡、没插到底，或卡不是 FAT32 | 确认插紧；用 FAT32 格式化后再试；重新上电后再查 |
| `sdmmctest` 报 `Initial card failed` | 没插卡，或卡未识别 | 先确认 `/sdcard`；仍失败则换一张卡、擦金手指 |
| 插卡后 `/dev` 没有新节点 | `sdc0` 没打开，或 PF 脚被其它外设占用 | 确认 `sys_config.fex` 里 `sdc0_used = 1`，且 PF6 没有被 Wi-Fi 等外设占用 |
| 命令卡住不返回 | `sdmmctest` 在等总线超时 | 不要长时间挂着，重新上电后再用 `/sdcard` 确认 |
