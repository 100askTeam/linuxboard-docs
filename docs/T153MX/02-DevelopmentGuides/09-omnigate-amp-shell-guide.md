---
sidebar_position: 10
sidebar_label: OmniGate AMP Shell
description: T153MX OmniGate A7 Linux 与 E907 FreeRTOS 的 remoteproc、RPMsg 和 AMP Shell 开发与调试指南。
toc_max_heading_level: 3
---

# OmniGate AMP Shell 异构开发

本文介绍 OmniGate-T153 上 A7 Linux 与 E907 FreeRTOS 的 AMP Shell 实现，覆盖
`remoteproc` 生命周期管理、MSGBOX/RPMsg 通信、编译打包、交互与单命令调用、自动化验证
以及常见故障处理。

:::info 对应源码

本文对应板级仓库
[`ampcpudev`](https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate/tree/ampcpudev)
分支。该分支包含可应用到 Tina SDK 的 overlay、板端工具、验证脚本和完整源码索引。

:::

## 目标

- 正确区分 A7 Linux UART Shell 与 E907 FreeRTOS AMP Shell。
- 完成 AMP overlay 应用、固件构建、remoteproc 启动和 RPMsg Shell 验证。
- 能够新增 E907 CLI 命令，并收集足够的故障反馈信息。

## 适用范围

本文适用于 T153MX OmniGate、`t153_omnigate_mmc-buildroot` 配置及板级仓库
`ampcpudev` 分支。其他 T153MX 板型可以参考通信架构，但设备树、固件名和 RPMsg 设备名
必须以对应板级配置为准。

## 准备工作

- 已准备完整的 T153 Tina SDK 和 `ampcpudev` overlay。
- 已连接 OmniGate-T153 调试串口，并能进入 Linux `#` Shell。
- 已确认构建主机空间充足，目标板和待烧录固件对应。
- 修改 SDK 前已保存工作区中尚未提交的文件。

## 操作步骤概览

1. 获取 `ampcpudev` 分支并应用 overlay。
2. 运行集成验证脚本，检查 Linux、RTOS、设备树和 Buildroot 配置。
3. 编译并打包 Linux 根文件系统与 `amp_rv0.bin`。
4. 烧录并启动目标板，在 Linux Shell 检查 remoteproc 和 RPMsg 状态。
5. 使用 `omnigate-amp shell` 或 `omnigate-amp exec` 验证 E907 命令收发。

## 1 Shell 环境说明

OmniGate-T153 调试过程中会接触两种 Shell，两者运行位置和命令集不同。

| Shell | 常见提示符 | 运行位置 | 用途 |
| --- | --- | --- | --- |
| Linux UART Shell | `#` | Cortex-A7 / Linux | `dmesg`、eMMC、挂载、网络和 Linux 服务诊断 |
| AMP Shell | `msh >` | E907 / FreeRTOS，经 RPMsg 转发 | RTOS 命令、任务、外设和核间通信调试 |

串口登录后看到 `#`，表示当前仍在 Linux Shell。执行 `omnigate-amp shell` 并看到
`msh >`，才表示已经进入 E907 AMP Shell。

eMMC 是 Linux 管理的块设备，应在 Linux Shell 中通过 `dmesg`、`/proc/partitions` 和
`/sys/block/mmcblk0` 检查。E907 AMP Shell 不提供 Linux 的 `mount`、`df` 或 `/sys`。

## 2 系统架构

```text
开发机串口或 SSH
        |
        v
A7 Linux Shell
        |
        +-- omnigate-amp        状态、启停和诊断入口
        +-- amp_shell           Linux RPMsg Shell 客户端
        +-- /dev/rpmsg_ctrl-*   RPMsg 控制设备
        |
        v
remoteproc + VirtIO/RPMsg + MSGBOX
        |
        v
E907 FreeRTOS multi_console      msh >
```

板级配置将 `t153_e907_bga_demo` 构建为 `amp_rv0.bin`。Linux remoteproc 驱动加载固件，
RTOS 侧 RPMsg multi-console 注册 `console` 服务，Linux 侧 `amp_shell` 创建 endpoint 后
转发输入输出。

## 3 源码组成

### 3.1 Linux 用户态

| 路径 | 作用 |
| --- | --- |
| `device/config/chips/t153/configs/omnigate/buildroot/overlay/usr/bin/omnigate-amp` | 自动查找 E907 remoteproc 和 RPMsg 控制设备，提供统一命令入口 |
| `platform/allwinner/system/amp_shell/files/shell.c` | AMP Shell 交互模式、单命令模式及接收线程 |
| `platform/allwinner/system/amp_shell/files/command.c` | 封装 `OPEN`、`CLOSE`、`WRITE` 控制包 |
| `platform/allwinner/system/amp_shell/files/rawdev/rpmsg.c` | 创建、打开及销毁 RPMsg endpoint |
| `platform/allwinner/system/amp_shell/files/Makefile` | 构建并安装 `/usr/bin/amp_shell` |

`rpmsg.c` 会先尝试 Auto Free endpoint ioctl；旧内核不支持时自动回退普通 endpoint
ioctl，并在退出时显式清理 endpoint。

### 3.2 E907 FreeRTOS

| 路径 | 作用 |
| --- | --- |
| `rtos/lichee/rtos/projects/t153_e907/bga_demo/defconfig` | 启用 multi-console 和 RPMsg multi-console |
| `rtos/lichee/rtos/projects/t153_e907/bga_demo/src/main.c` | 初始化 OpenAMP、RPMsg 控制设备和多控制台 |
| `rtos/lichee/rtos-components/aw/multi_console/` | FreeRTOS 多控制台框架 |
| `rtos/lichee/rtos-components/aw/multi_console/rpmsg_console/` | RPMsg console 的 RTOS 端实现 |
| `rtos/lichee/rtos-components/aw/multi_console/shell.c` | FreeRTOS CLI 命令解析和多段输出回传 |

当前 RTOS Shell 会遵循 `FreeRTOS_CLIProcessCommand()` 的返回值：返回 `pdTRUE` 时继续
获取下一段输出，直到返回 `pdFALSE`。因此 `echo-3-parameters` 等多段输出命令可完整返回。

### 3.3 内核与板级配置

OmniGate origin/RT 内核配置包含以下基础能力：

```text
CONFIG_AW_MSGBOX=y
CONFIG_AW_REMOTEPROC=y
CONFIG_AW_REMOTEPROC_E907_BOOT=y
CONFIG_AW_RPMSG_CTRL=y
CONFIG_RPMSG_VIRTIO=y
```

设备树定义 E907 固件区、共享内存、vring、vdev buffer、MSGBOX mailbox 和
`e907_rproc`。remoteproc 序号以及 `/dev/rpmsg_ctrl-*` 名称由内核动态分配，应用程序
不能固定依赖 `remoteproc1` 或某个控制设备名称。

## 4 获取并应用 overlay

```bash
git clone -b ampcpudev \
  https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate.git
```

在 Tina SDK 根目录应用 overlay：

```bash
/path/to/T153MX-Tina5SDK_OmniGate/scripts/apply_overlay.sh "$PWD"
/path/to/T153MX-Tina5SDK_OmniGate/scripts/verify_amp_e907.sh "$PWD"
```

`apply_overlay.sh` 只覆盖 overlay 中列出的文件，不执行删除。运行前仍应保存 SDK 中尚未提交
的本地修改。

## 5 编译与打包

在 SDK 根目录执行：

```bash
source build/envsetup.sh
lunch t153_omnigate_mmc-buildroot
make
pack
```

构建完成后检查：

```bash
test -x out/t153/omnigate/buildroot/buildroot/target/usr/bin/amp_shell
test -x out/t153/omnigate/buildroot/buildroot/target/usr/bin/omnigate-amp
test -s out/t153/omnigate/pack_out/amp_rv0.bin
```

还应确认根文件系统与打包目录使用同一份 E907 固件：

```bash
cmp device/config/chips/t153/bin/amp_rv0.bin \
  out/t153/omnigate/buildroot/buildroot/target/lib/firmware/amp_rv0.bin

cmp device/config/chips/t153/bin/amp_rv0.bin \
  out/t153/omnigate/pack_out/amp_rv0.fex
```

## 6 板端使用

以下命令均先在板卡 Linux `#` 提示符下执行。

### 6.1 查看状态

```bash
omnigate-amp status
```

输出应包含 E907 remoteproc、`firmware=amp_rv0.bin`、运行状态以及 RPMsg 控制设备。
`offline` 表示 E907 尚未启动，不一定是故障。

### 6.2 启动 E907

```bash
omnigate-amp start
```

工具会验证固件名，在 E907 未运行时启动 remoteproc，并等待 `/dev/rpmsg_ctrl-*` 出现。

### 6.3 进入交互式 AMP Shell

```bash
omnigate-amp shell
```

看到 `msh >` 后可以执行：

```text
help
echo-3-parameters AMP SHELL OK
```

退出 Linux 侧 AMP Shell 客户端：

```text
amp_exit
```

应使用 `amp_exit` 正常释放 endpoint，不建议通过 `Ctrl+Z` 挂起客户端。

### 6.4 执行单条 RTOS 命令

```bash
omnigate-amp exec help
omnigate-amp exec "echo-3-parameters AMP SHELL OK"
omnigate-amp exec "console_dump"
```

包含空格的命令必须整体作为 `exec` 的一个参数。单命令模式适合输出较短的任务；持续运行
或输出量较大的命令应使用交互式 Shell。

### 6.5 指定控制设备

系统存在多个 RPMsg 控制设备时，先读取实际名称：

```bash
ls -l /dev/rpmsg_ctrl-* /dev/rpmsg_ctrl[0-9]* 2>/dev/null
```

然后指定设备：

```bash
omnigate-amp shell /dev/rpmsg_ctrl-e907_rproc@0
omnigate-amp exec "help" /dev/rpmsg_ctrl-e907_rproc@0
```

示例名称仅用于说明，应以目标板输出为准。

## 7 验证方法

### 7.1 最小验收

```bash
omnigate-amp status
omnigate-amp start
omnigate-amp exec "echo-3-parameters AMP SHELL OK"
omnigate-amp diagnose
```

验收重点：

1. E907 固件为 `amp_rv0.bin`，状态由 `offline` 变为 `running`。
2. RPMsg 控制设备正常出现。
3. `echo-3-parameters` 依次返回三个参数。
4. 单命令退出后没有残留的 `/dev/rpmsgN` endpoint。

### 7.2 冒烟测试脚本

板级仓库提供：

```text
docs/amp-shell/examples/amp-shell-smoke-test.sh
```

复制到板卡后执行：

```bash
sh amp-shell-smoke-test.sh
sh amp-shell-smoke-test.sh "console_dump"
```

脚本读取 AMP 状态、执行一条 RTOS 命令并收集诊断信息，不停止 E907、不重启 Linux，
也不操作存储。

## 8 新增 E907 Shell 命令

在 E907 工程中可以通过 FINSH 宏注册命令：

```c
#include <stdio.h>
#include <console.h>

static int cmd_board_info(int argc, char **argv)
{
    (void)argc;
    (void)argv;
    printf("board=t153mx core=e907 status=ok\r\n");
    return 0;
}

FINSH_FUNCTION_EXPORT_CMD(cmd_board_info, board_info,
                          show T153MX E907 board information);
```

将源码加入 E907 工程构建后，重新编译、打包和烧录，再执行：

```bash
omnigate-amp exec board_info
```

预期输出：

```text
board=t153mx core=e907 status=ok
```

## 9 MCP 自动化案例

在目标 SDK 目录启动连接到板卡工作台的 Codex：

```bash
codex -c 'mcp_servers={"lynx-t153mx-ominigate-sdk"={url="http://127.0.0.1:18765/mcp"}}'
```

可以使用以下任务描述：

```text
只使用 lynx-t153mx-ominigate-sdk MCP。通过串口进入 Linux Shell，执行
omnigate-amp status、omnigate-amp exec help 和 omnigate-amp diagnose。
不要停止 remoteproc、不要重启或烧录；结束时关闭串口句柄，并报告原始关键行。
```

硬件任务应设置总超时和读取结束标记，并在成功、失败或超时路径中关闭串口句柄，避免后续
烧录、ADB 扫描或串口会话被残留任务占用。

## 10 常见问题

### 10.1 找不到 E907 remoteproc

```bash
ls -l /sys/class/remoteproc
dmesg | grep -Ei 'remoteproc|e907|reserved|vring'
```

若目录为空，应检查运行中的内核和 DTB 是否来自 OmniGate 配置，并核对 remoteproc 内核选项。

### 10.2 固件名称不符合预期

当 `omnigate-amp` 报告 `Unexpected E907 firmware` 时执行：

```bash
cat /sys/class/remoteproc/remoteproc*/firmware
ls -l /lib/firmware/amp_rv0.bin
```

工具会拒绝拉起非 `amp_rv0.bin` 镜像。应修正板级固件映射，不应直接删除这项校验。

### 10.3 E907 已运行但没有 RPMsg 控制设备

```bash
OMNIGATE_AMP_WAIT_SECONDS=20 omnigate-amp start
omnigate-amp diagnose
```

常见原因包括 RTOS 未启用 RPMsg multi-console、共享内存或 vring 配置不匹配，以及 Linux
RPMsg control 驱动未启用。

### 10.4 endpoint ioctl 失败

当前 `amp_shell` 会在 Auto Free ioctl 不受支持时自动回退普通 endpoint ioctl。若回退仍失败，
保存以下信息：

```bash
uname -a
omnigate-amp diagnose
ls -l /dev/rpmsg* 2>/dev/null
```

并确认板端 `/usr/bin/amp_shell` 来自当前分支构建结果。

### 10.5 单命令输出不完整

`amp_shell -e` 适合短命令。输出较慢或内容较多时改用：

```bash
omnigate-amp shell
```

自动化场景可以让 RTOS 命令输出唯一结束标记，读取端看到标记后再关闭会话。

## 11 问题反馈

提交问题时至少附上：

```bash
uname -a
omnigate-amp status
omnigate-amp diagnose
ls -l /dev/rpmsg* 2>/dev/null
sha256sum /usr/bin/amp_shell /lib/firmware/amp_rv0.bin
```

同时注明 SDK/overlay 版本、板型、Linux 内核类型、完整操作顺序、预期与实际结果，以及是否有
其他串口客户端、烧录扫描或硬件任务占用设备。

## 12 参考资料

- [T153MX OmniGate AMP Shell 完整源码指南](https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate/blob/ampcpudev/docs/amp-shell/README.md)
- [A7 Linux 与 E907 FreeRTOS 核间通信说明](https://github.com/dshanpi/T153MX-Tina5SDK_OmniGate/blob/ampcpudev/docs/a7-e907-rpmsg-development.md)
- [T153MX 异构通信框架](./08-heterogeneous-communication-guide.md)
