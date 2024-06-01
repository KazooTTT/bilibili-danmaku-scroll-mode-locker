# 锁定 bilibili 直播间发送弹幕的位置

这一个油猴脚本，用于锁定 bilibili 直播间发送弹幕的位置为滚动模式。
![example](https://pictures.kazoottt.top/2024/20240601-90b9ad0d4e883e5e27d1d329346bb9c8.webp)

b 站的直播间的弹幕位置有三种，滚动、底部、顶部。
其中当用户在一个直播间上了舰长、提督之后，b 站会自动地将用户的弹幕位置调整为底部模式。
这会导致直播间的内容为看番的时候，底部的弹幕会挡住字幕，影响观看体验。

更严重的是，b 站的这个产品逻辑很多用户都不知道，导致用户在很多时候自己都不知道自己的弹幕位置被调整了。

因此，这个脚本的目的是将用户的弹幕位置锁定为滚动模式，避免用户在不知情的情况下被调整弹幕位置。并且提供一个开关，方便用户选择是否锁定弹幕位置为滚动。

## 实现的思路

首先读取全局变量-是否锁定为滚动模式，如果是则强制将用户的弹幕位置调整为滚动模式。如果不是则不做任何操作。

然后油猴脚本的菜单中需要提供一个开关，用于改变这个全局变量-是否锁定为滚动模式的值，首次安装的时候默认为 true(锁定)。