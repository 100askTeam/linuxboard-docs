---
sidebar_position: 2
---

# 获取Tina5源码

本章节将讲解如何在 **ubuntu18.04.6** 搭建 T113s4prov1.3 sdnand版本的开发环境。

## 获取Tina5源码

首先，在Windows上访问下面的论坛地址，打开Tina5-SDK基础包获取：通过网盘分享的文件：T113s4sdnand-SDK
链接: https://pan.baidu.com/s/1JhS8JNbhPgcCiaVDay_rYw?pwd=bdz2 提取码: bdz2 

> 通过百度网盘下载，大小约21.81G，名称为 t113s4-tin5SDK-8939a92cf6401f1d2e156bc1e248d5e4.tar.gz 下载完成后通过网络等方式拷贝到虚拟机目录下。

把基础包拷贝到虚拟机之后，执行以下指令，进行解压：

~~~bash
ubuntu@ubuntu1804:~$ tar -xvf t113s4-tin5SDK-8939a92cf6401f1d2e156bc1e248d5e4.tar.gz 
~~~

解压后，sdk基础包的命名是`t113-tin5-v1.2`。

出现以上文件，说明Tina5-SDK源码获取成功。

## 获取补丁包

基于T113s4pro v1.3 sdnand版本开发板，我们提供了一个扩展补丁包，执行以下指令，获取扩展支持仓库，然后加以应用，

~~~ bash
ubuntu@ubuntu1804:~$ git clone https://github.com/DongshanPI/100ASK_T113s4-SdNand_TinaSDK5.git
ubuntu@ubuntu1804:~$ cd t113-tin5-v1.2/
ubuntu@ubuntu1804:~/t113-tin5-v1.2$ cp ../100ASK_T113s4-SdNand_TinaSDK5/* -rfvd .
~~~

![image-20251106114156868](./images/image-20251106114156868.png)

