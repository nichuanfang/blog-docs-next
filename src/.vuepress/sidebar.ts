import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // 根据该路径 区分不同导航栏 路径最后面需要加'/' 例如'/resume/'  子项目的link和prefix 只需要写子项目的名称即可 前缀会自动加上父项目的名称 例如 prefix: "base",代表 /resume/base link: "base",代表 /resume/base
  "/resume/": [
    {
      text: "基本信息",
      icon: "laptop-code",
      prefix: "base",
      link: "base",
      collapsible: true,
    },
    {
      text: "项目经历",
      icon: "laptop-code",
      prefix: "project",
      collapsible: true,
      children: "structure",
    },
    {
      text: "其他项目",
      icon: "book",
      prefix: "other",
      collapsible: true,
      children: "structure",
    },
  ],
  "/config/": [
    {
      text: "tgbot",
      icon: "book",
      prefix: "tgbot",
      link: "tgbot",
      collapsible: true,
      children: "structure",
    },
    {
      text: "nogfw",
      icon: "book",
      collapsible: true,
      link: "nogfw"
    },
  ],
  "/interview/": [{
      text: "interview",
      icon: "book",
      collapsible: false,
      children: "structure"
    }]
});
