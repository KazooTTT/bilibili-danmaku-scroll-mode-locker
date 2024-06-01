import {
  GM_getValue,
  unsafeWindow,
  GM_registerMenuCommand,
  GM_setValue,
} from "$";
import axios from "axios";

// create a mode enum
enum Mode {
  "scroll" = "1",
  "bottom" = "2",
  "top" = "3",
}

declare global {
  interface Window {
    __NEPTUNE_IS_MY_WAIFU__: {
      roomInfoRes: {
        data: {
          room_info: {
            room_id: string;
          };
        };
      };
    };
  }
}

const useOption = (key: string, title: string, defaultValue: boolean) => {
  if (typeof GM_getValue === "undefined") {
    return {
      value: defaultValue,
    };
  }

  let value = GM_getValue(key, defaultValue);
  const ref = {
    get value() {
      return value;
    },
    set value(v) {
      value = v;
      GM_setValue(key, v);
      location.reload();
    },
  };

  GM_registerMenuCommand(`${title}: ${value ? "✅" : "❌"}`, () => {
    ref.value = !value;
  });

  return ref;
};

const getCsrfToken = (): string => {
  const match = unsafeWindow.document.cookie.match(/\bbili_jct=(.+?)(?:;|$)/);
  return match ? match[1] : "";
};

const hideHomeTabs = useOption(
  "isDanmakuScrollModeLocked",
  "是否锁定弹幕为滚动模式",
  true
);

const setDanmakuLocationConfig = async (csrf: string, mode: Mode) => {
  let data = new FormData();
  data.append("mode", mode);
  data.append("csrf_token", csrf);
  data.append("csrf", csrf);
  data.append(
    "room_id",
    unsafeWindow.__NEPTUNE_IS_MY_WAIFU__.roomInfoRes.data.room_info.room_id
  );
  data.append("visit_id", "");

  const response = await axios.post(
    "https://api.live.bilibili.com/xlive/web-room/v1/dM/AjaxSetConfig",
    data,
    { withCredentials: true }
  );
  if (response.data.code === 0) {
    console.log("设置弹幕位置成功");
  } else {
    console.log("%c Line:68 🍣 response", "color:#3f7cff", response);
    alert("设置弹幕位置失败,请手动设置为滚动模式");
  }
};

if (hideHomeTabs) {
  const csrf = getCsrfToken();
  await setDanmakuLocationConfig(csrf, Mode.scroll);
}
