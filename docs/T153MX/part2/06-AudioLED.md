---
sidebar_position: 6
sidebar_label: 声音与状态灯
description: 测试 OmniGate-T153 板载音频输出和三个可编程状态灯，并说明默认启动行为。
---

# 声音与三个状态灯

本章测试板载 Codec、AW8010 扬声器功放和三个可编程状态灯。当前固件会在开机时自动配置声音
输出，并让三个灯以流水模式循环，不需要每次手工执行 mixer 命令。

| 功能 | 默认状态 | 管理入口 |
| --- | --- | --- |
| 扬声器 | 差分 Line Out、功放通路已打开 | `/etc/init.d/S35audio` |
| LED1～LED3 | 流水灯，间隔 250 ms | `ledctl`、`/etc/init.d/S47ledctl` |

## 1. 检查声卡

在 **开发板 Linux Shell**执行：

```bash
aplay -l
cat /proc/asound/cards
```

预期能看到 card 0 `audiocodec` 及一个 Playback 设备。再查看当前输出配置：

```bash
amixer -c 0 sget 'DAC Output Select'
amixer -c 0 sget 'DAC'
amixer -c 0 sget 'LINEOUT Gain'
amixer -c 0 sget 'SPK'
```

如果声卡存在但通路未打开，可恢复固件默认配置：

```bash
/etc/init.d/S35audio restart
```

### 本次 ADB 声卡记录

```console
# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: audiocodec [audiocodec], device 0: sunxi-snd-plat-aaudio-sunxi-snd-codec 2030000.codec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
# amixer -c 0 sget 'DAC Output Select'
Item0: 'differ'
# amixer -c 0 sget 'DAC'
Mono: 58 [92%] [-6.96dB]
# amixer -c 0 sget 'LINEOUT Gain'
Mono: 6 [86%]
# amixer -c 0 sget 'SPK'
Mono: Playback [on]
```

这与 AW8010 差分输入电路和 `S35audio` 默认配置一致。前期实板试听已确认喇叭能播放测试音；
更换喇叭、功放或结构件后仍应从低音量重新验证。

## 2. 生成一个安全测试音

固件没有自带 `speaker-test`，可在 **Ubuntu 主机**用 Python 标准库生成 3 秒、600 Hz、幅度较低
的 WAV 文件，不需要联网：

```bash
python3 - <<'PY'
import math
import struct
import wave

rate = 48000
seconds = 3
amplitude = 0.12

with wave.open('/tmp/t153-tone.wav', 'wb') as wav:
    wav.setnchannels(2)
    wav.setsampwidth(2)
    wav.setframerate(rate)
    for n in range(rate * seconds):
        value = int(32767 * amplitude * math.sin(2 * math.pi * 600 * n / rate))
        wav.writeframesraw(struct.pack('<hh', value, value))
PY

adb push /tmp/t153-tone.wav /tmp/
```

:::danger 第一次测试先降低音量

先把喇叭远离耳朵，不要戴耳机试听板载扬声器输出。功放和喇叭规格不匹配时，大音量可能损坏器件。

:::

在 **开发板 Linux Shell**先设置较低音量，再播放：

```bash
amixer -q -c 0 set 'DAC' 35
amixer -q -c 0 set 'LINEOUT Gain' 2
aplay -D default /tmp/t153-tone.wav
```

有声音但太小时，逐级增加，不要一步调满：

```bash
amixer -q -c 0 set 'DAC' 45
amixer -q -c 0 set 'LINEOUT Gain' 4
aplay -D default /tmp/t153-tone.wav
```

测试后恢复实板验证过的固件默认值：

```bash
/etc/init.d/S35audio restart
```

当前默认值为 DAC 58、DACL 160、LINEOUT Gain 6，且打开 LINEOUTL 和 SPK。它是板级默认播放
配置，不代表任何喇叭都适合此音量；量产产品仍应按功放、喇叭和结构件做响度及失真测试。

:::info 这块底板默认只有扬声器输出

T153MX 芯片具备音频输入能力，但当前展示的 OmniGate 扬声器电路只把 LINEOUTP/LINEOUTN 接到
AW8010 功放和喇叭座，没有把麦克风输入做成该扬声器接口。能播放不等于已经具备板载录音通路。

:::

## 3. 认识三个逻辑 LED

```bash
ls -1 /sys/class/leds
ledctl status
```

应能看到 `t153:led1`、`t153:led2`、`t153:led3`。`ledctl` 会停止旧动画后再执行手动控制，避免
动画进程马上覆盖你设置的亮灭状态。

本次 ADB 采集时，默认流水灯正在运行，刚好轮到 LED1 亮：

```console
# ledctl status
mode: flow 250
led1: on (255)
led2: off (0)
led3: off (0)
# cat /sys/class/leds/t153:led1/max_brightness
255
```

`status` 是某一时刻的快照，流水模式下重复查看时亮灯编号会变化，这正是正常现象。

### 手动亮灭

```bash
ledctl on 1
ledctl off 1
ledctl only 2
ledctl toggle 3
ledctl on all
ledctl off all
```

### 动画模式

| 模式 | 效果 | 示例 |
| --- | --- | --- |
| `flow` | 1 → 2 → 3 循环 | `ledctl mode flow 250` |
| `bounce` | 1 → 2 → 3 → 2 | `ledctl mode bounce 180` |
| `alternate` | 两侧与中间交替 | `ledctl mode alternate 300` |
| `blink` | 三灯同时闪烁 | `ledctl mode blink 500` |
| `heartbeat` | 双闪后停顿 | `ledctl mode heartbeat 500` |
| `dance` | 多种组合循环 | `ledctl mode dance 150` |

间隔单位为毫秒，允许范围 30～60000。查看和停止：

```bash
ledctl status
ledctl stop
```

## 4. 修改开机默认模式

板端配置位于 `/etc/default/ledctl`：

```bash
sed -n '1,80p' /etc/default/ledctl
```

例如改成 400 ms 的心跳模式：

```text
LEDCTL_MODE="heartbeat"
LEDCTL_INTERVAL_MS="400"
```

修改后执行：

```bash
/etc/init.d/S47ledctl restart
```

要让重新编译、烧录的每台设备都使用新值，应修改 SDK 中
`device/config/chips/t153/configs/omnigate/buildroot/overlay/etc/default/ledctl`，而不是只改当前板端。

## 5. 灯不够亮怎么办

这三个 GPIO 灯当前是开关控制，`brightness` 的 0/255 只代表灭/亮，并非连续 PWM 调光。执行：

```bash
for led in /sys/class/leds/t153:led*; do
  printf '%s: ' "$led"
  cat "$led/max_brightness" "$led/brightness"
done
```

软件设为 255 后仍偏暗，继续增加数值不会变亮。亮度由 LED、限流电阻、晶体管、电源和结构透光
决定，应从硬件检查。不要为了增亮绕过限流电阻。

## 测试通过标准

- `aplay -l` 能识别 `audiocodec`，低音量测试音可以清晰播放；
- `S35audio restart` 后声音通路恢复默认；
- 三个逻辑 LED 都能单独亮灭；
- 六种动画可以切换，重启后按 `/etc/default/ledctl` 自动运行。
