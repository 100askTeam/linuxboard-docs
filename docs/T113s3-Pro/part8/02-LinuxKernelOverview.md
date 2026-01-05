---
sidebar_position: 1
---
# Linux Kernel简介

## 0. Linux历史

**Linux内核**（英語：Linux kernel）是一种开源的[类Unix](https://zh.wikipedia.org/wiki/类Unix系统)[操作系统](https://zh.wikipedia.org/wiki/操作系统)[宏内核](https://zh.wikipedia.org/wiki/宏内核)。整个Linux操作系统家族基于该内核部署在传统计算机平台（如个人计算机和服务器，以Linux发行版的形式[[7\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-7)）和各种嵌入式平台，如[路由器](https://zh.wikipedia.org/wiki/路由器)、[无线接入点](https://zh.wikipedia.org/wiki/無線接入點)、[专用小交换机](https://zh.wikipedia.org/wiki/专用小交换机)、[机顶盒](https://zh.wikipedia.org/wiki/机顶盒)、[FTA接收器](https://zh.wikipedia.org/w/index.php?title=FTA接收器&action=edit&redlink=1)、[智能电视](https://zh.wikipedia.org/wiki/智能电视机)、[数字视频录像机](https://zh.wikipedia.org/wiki/数字视频录像机)、[网络附加存储](https://zh.wikipedia.org/wiki/网络附加存储)（NAS）等。工作于[平板電腦](https://zh.wikipedia.org/wiki/平板電腦)、[智能手机](https://zh.wikipedia.org/wiki/智能手机)及[智能手表](https://zh.wikipedia.org/wiki/智能手表)的[Android](https://zh.wikipedia.org/wiki/Android)操作系统同样通过Linux内核提供的服务完成自身功能。尽管于[桌面电脑](https://zh.wikipedia.org/wiki/桌面電腦)的占用率较低，基于Linux的操作系统统治了几乎从移动设备到主机的其他全部领域。截至2017年11月，世界前500台最强的[超级计算机](https://zh.wikipedia.org/wiki/超级计算机)全部使用Linux。

**Linux内核最早是于1991年由芬兰黑客[林納斯·托瓦茲](https://zh.wikipedia.org/wiki/林納斯·托瓦茲)为自己的个人电脑开发的**，他当时在[Usenet新闻组](https://zh.wikipedia.org/wiki/新闻组)`comp.os.minix`登载帖子[[9\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-9)，这份著名的帖子标志着Linux内核计划的正式开始。如今，该计划已经拓展到支持大量的计算机体系架构，远超其他操作系统和内核。它迅速吸引了一批开发者和用户，利用它作为其他自由软件项目的核心，如著名的 GNU 操作系统。[[10\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-10)而今天，Linux 内核已接受了超过1200家公司的近12000名程序员的贡献，其中包括一些知名的软硬件发行商。[[11\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-11)[[12\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-12)

从技术上说，**Linux 只是一个符合[POSIX 标准](https://zh.wikipedia.org/wiki/POSIX)的内核**。它提供了一套应用程序接口（API），通过接口用户程序能与内核及硬件交互。仅仅一个内核并不是一套完整的操作系统。有一套基于 Linux 内核的完整操作系统叫作[Linux 操作系统](https://zh.wikipedia.org/wiki/Linux)，或是[GNU/Linux](https://zh.wikipedia.org/wiki/GNU/Linux)（在该系统中包含了很多[GNU 计划](https://zh.wikipedia.org/wiki/GNU計劃)的系统组件）。

**Linux 内核是在[GNU通用公共许可证](https://zh.wikipedia.org/wiki/GNU通用公共许可证)第2版之下发布的[[4\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-COPYING-4)（加上一些非自由[固件](https://zh.wikipedia.org/wiki/固件)、[blob](https://zh.wikipedia.org/wiki/二進位大型物件)与各种非自由许可证[[13\]](https://zh.wikipedia.org/wiki/Linux内核#cite_note-13)），是一个开源项目协作的突出例子**。它的版本支持根据版本最长可达6年，貢獻者遍佈世界各地，日常开发相关的讨论在[Linux 内核邮件列表](https://zh.wikipedia.org/w/index.php?title=Linux_内核邮件列表&action=edit&redlink=1)上。

![image-20240307113610041](images\image-20240307113610041.png)

- 上图左面为 Linux logo    右边  Linux祖师爷 Linus本人

### Linux版本资料

* LinuxKernel官网：https://www.kernel.org/  我们一般称Linux官网里面的 Kernel为 主线社区版本。

![image-20240307113906658](images\image-20240307113906658.png)

- 在官网里面 我们需要了解  `mainline  stable  longterm  linux-next` 有什么区别？
- **Mainline：**
  - **特点：** 主线分支是 Linux 内核的主要开发分支，包含最新的开发和功能更新。
  - **目的：** 主要用于推动新功能、改进和实验性的变化。这是开发者提交新代码和功能的主要目标。
- **Stable：**
  - **特点：** 稳定分支是为了提供一个相对较稳定的内核版本，以便企业、发行版制造商和普通用户可以依赖这个版本。
  - **目的：** 稳定分支通常用于修复主线分支中发现的 bug，并且只接受 bug 修复而不引入新功能。这有助于确保长期支持。
- **Longterm：**
  - **特点：** 长期支持 (LTS) 分支是一个更加长期维护的版本，为用户提供相对较长的支持周期。
  - **目的：** LTS 分支通常用于企业和发行版制造商，以提供更长的稳定性和支持，避免频繁的升级。
- **Linux-next：**
  - **特点：** linux-next 分支包含下一个开发周期中的补丁和功能，但这些变化还未进入主线。
  - **目的：** linux-next 提供了一个预览下一个内核版本的机会，以帮助开发者和测试人员在它们进入主线之前发现和解决潜在问题。

总的来说，这些分支在内核开发过程中起到不同的作用，主线用于主要开发，稳定分支用于提供相对较稳定的版本，长期支持分支用于提供更长时间的支持，而 linux-next 则提供一个预览未来开发方向的分支。开发者和用户可以根据其需求选择相应的内核分支。

#### 版本发布周期

- Linux版本发布周期： https://www.kernel.org/category/releases.html

![image-20240307114010886](images\image-20240307114010886.png)

#### 开发方式

- Linux Kernel的开发模式
  - 关注 Merge window （窗口合并期-两周）
  - Bug-fixing period （Bug修复期-6-10周）
  - rc版本[^1] （发布候选版）


![image-20240307114124845](images\image-20240307114124845.png)

#### 文档资料

* LinuxKernel文档中心：https://www.kernel.org/doc/html/latest/

![image-20240307114434348](images\image-20240307114434348.png)

* wiki中心：https://www.wiki.kernel.org/

![image-20240307114442387](images\image-20240307114442387.png)

- 深入介绍每个内核版本的新功能：https://kernelnewbies.org/LinuxChanges

![image-20240307114850995](images\image-20240307114850995.png)

- 每个合并窗口接受的特征讨论说明：https://lwn.net/Kernel/ 

![image-20240307114908758](images\image-20240307114908758.png)

- LinuxKernel PATCH中心：https://patchwork.kernel.org/

![image-20240307114943253](images\image-20240307114943253.png)

- 使用 git 工具阅读理解Linux 代码

![image-20240307115041451](images\image-20240307115041451.png)

* git log --grep=‘imx6ull’ 根据提交信息关键字搜索。

![image-20240307115053908](images\image-20240307115053908.png)

- 根据commit查看详细的提交说明：查看Merge合并提交信息。

- git show –m commit 显示某次Merge合并的详细修改信息。

![image-20240307115109476](images\image-20240307115109476.png)

- 通过使用git命令 查看imx6ull ubi文件系统挂载错误问题，git log –grep ‘imx6ull’ --oneline 如何解决，找到对应的  commit id 最前面 黄色 id 值。

![image-20240307115454436](images\image-20240307115454436.png)

- 确定好提交的commit id值以后 使用 git log –p -1 e4817a1b6b77 来查看详细的操作内容

![image-20240307115251476](images\image-20240307115251476.png)

