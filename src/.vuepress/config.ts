import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MyDocuments",
  description: "个人文档平台",
  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
