import { navbar } from 'vuepress-theme-hope'

export default navbar([
  "/",
  {
    text: "简历",
    icon: "laptop-code",
    link: "/resume/README.md",
  },
  {
    text: "面试指南",
    icon: "lightbulb",
    link: "/interview/README.md",
  },
  {
    text: "面试题精简版",
    icon: "laptop-code",
    link: "https://blog.csdn.net/weixin_46603441/article/details/131891932",
  },
  {
    text: "配置指南",
    icon: "laptop-code",
    link: "/config/README.md",
  },
  {
    text: "项目",
    icon: "lightbulb",
    children: [
      {
        text: "movie-tvshow-spider",
        icon: "lightbulb",
        link: "https://github.com/nichuanfang/movie-tvshow-spider",
      },
      {
        text: "music-tool-kit",
        icon: "lightbulb",
        link: "https://github.com/nichuanfang/music-tool-kit",
      },
      {
        text: "tgbot",
        icon: "lightbulb",
        link: "https://github.com/nichuanfang/tgbot",
      },
    ],
  },
  {
    text: "个人博客",
    icon: "book",
    link: "https://blog.jaychou.site",
  },
]);
