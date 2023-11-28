import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Markdown简历',
  description: '个人简历平台',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Markdown简历',
      description: '个人简历平台',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    colorMode: 'dark',
    navbar: [
      {
        text: '简历',
        link: '/',
      },
      {
        text: '项目',
        children: [
          {
            text: 'nogfw',
            link: 'https://www.github.com/nichuanfang/nogfw',
          },
          {
            text: 'config-server',
            link: 'https://www.github.com/nichuanfang/config-server',
          },
        ],
      },
      {
        text: '个人博客',
        link: 'https://blog.jaychou.site',
      },
    ],
  }),
  repo: 'https://github.com/nichuanfang/blog-docs-next',
  sidebar: 'auto',
  sidebarDepth: 2,
  docsRepo: 'https://github.com/nichuanfang/blog-docs-next',
  docsDir: 'docs',
  docsBranch: 'main',
  editLinkText: '在 GitHub 上编辑此页',
  editLinkPattern: ':repo/-/edit/:branch/:path',
})
