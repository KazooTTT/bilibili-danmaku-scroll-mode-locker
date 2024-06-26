# 锁定 bilibili 直播间发送弹幕的位置

这一个油猴脚本，用于锁定 bilibili 直播间发送弹幕的位置为滚动模式。

![example](https://pictures.kazoottt.top/2024/20240601-90b9ad0d4e883e5e27d1d329346bb9c8.webp)

b 站的直播间的弹幕位置有三种，滚动、底部、顶部。
其中当用户在一个直播间上了舰长、提督之后，b 站会自动地将用户的弹幕位置调整为底部模式。
这会导致直播间的内容为看番的时候，底部的弹幕会挡住字幕，影响观看体验。

更严重的是，b 站的这个产品逻辑很多用户都不知道，导致用户在很多时候自己都不知道自己的弹幕位置被调整了。

因此，这个脚本的目的是将用户的弹幕位置锁定为滚动模式，避免用户在不知情的情况下被调整弹幕位置。并且提供一个开关，方便用户选择是否锁定弹幕位置为滚动。

## 安装地址

<https://greasyfork.org/zh-CN/scripts/496765-bilibili-danmaku-scroll-mode-locker>

![油猴脚本安装界面](https://pictures.kazoottt.top/2024/20240601-a22bf6fdb8b0adcb76a4fb290df51e56.webp)

[源代码地址](https://github.com/KazooTTT/bilibili-danmaku-scroll-mode-locker)

## 实现的思路

首先油猴脚本的菜单中需要提供一个开关，用于改变这个全局变量-是否锁定为滚动模式的值，首次安装的时候默认为 true(锁定)。

然后读取全局变量-是否锁定为滚动模式，如果是则强制将用户的弹幕位置调整为滚动模式。如果不是则不做任何操作。

## TODO

1.优化：读取用户的设置，如果本身不是滚动模式则不做任何操作。

2.优化：需要验证一下上舰的时候是否会马上调整为底部模式，如果是的话需要在上舰的时候重新调整为滚动模式/或者定时检查弹幕位置。

3 BUG：有时候用 b 站的切换弹幕模式的接口成功，虽然已经切换到了滚动模式，但是界面上依然显示的是底部模式。

## 感谢

油猴脚本的选项开关参考了 antfu 的[userscript-clean-twitter](https://github.com/antfu/userscript-clean-twitter)

本项目使用的模板为：[vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)
