---
title: One Plus ace3刷入第三方Rom
date: "2025-12-24"
---

# 以One Plus ace3刷入pixel OS为例

--前言：刷机有风险，救砖最危险 ；耐心刷机最舒适，半途而废不可取；千千万万要备份，数据火葬心滴泪
--重点：必须同步ab分区否则刷完变砖，如何同步参考我上一个帖子

一，刷机所需工具

1.[大侠阿木1+Ace3资源站](https://yun.daxiaamu.com/OnePlus_Roms/%E4%B8%80%E5%8A%A0OnePlus%20ACE%203/)

2.[TWRP](https://w2g0p-my.sharepoint.com/:u:/g/personal/shiroko_w2g0p_onmicrosoft_com/IQAOCAsdA0chRZTa0EQ63pHBARQRiZkKUnbXEUBelg59S0A?e=ovC5oW)

3.[柚坛工具箱](https://w2g0p-my.sharepoint.com/:f:/g/personal/shiroko_w2g0p_onmicrosoft_com/IgBctMU_L8vzQb7n01O3yg-aAa2iADWxtFK_OGaz2pymzms?e=uZ8wA1)

4.[Pixel OS](https://pixelos.net/download/aston)

二，操作流程

1.重启手机至bootloader

2.分别刷入boot, init_boot, vendor_boot, dtbo and recovery images
    fastboot flash boot boot.img
    fastboot flash init_boot init_boot.img
    fastboot flash vendor_boot vendor_boot.img
    fastboot flash dtbo dtbo.img
    fastboot flash recovery recovery.img

3.刷入成功后重启到recovery，在recovery模式中进行sideload（卡刷）

    adb sideload PixelOS*.zip

4.刷完后格式化data分区的数据，然后重启即可