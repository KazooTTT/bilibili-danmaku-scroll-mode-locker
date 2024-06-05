import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://github.com/kazoottt.png",
        name: "锁定b站直播间发送弹幕为滚动模式",
        namespace:
          "https://github.com/KazooTTT/bilibili-danmaku-scroll-mode-locker",
        match: ["https://live.bilibili.com/*"],
        author: "KazooTTT",
        description: "锁定b站（bilibili）直播间发送弹幕为滚动模式",
        license: "MIT",
        version: "0.0.3"
      },
    }),
  ],
});
