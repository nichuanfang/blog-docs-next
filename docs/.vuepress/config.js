module.exports = {
  title: 'Markdown简历',
  description: '个人简历平台',
  base: '/',
  host: 'localhost',
  port: 8080,
  themeConfig: {
    // theme: '@vuepress/blog',
    // plugins: ['@vuepress/blog'],
    nav: [
      { text: '简历', link: '/' },
      {
        text: '项目',
        ariaLabel: 'Projects',
        items: [
          { text: 'nogfw', link: 'https://www.github.com/nichuanfang/nogfw' },
          {
            text: 'config-server',
            link: 'https://www.github.com/nichuanfang/config-server',
          },
        ],
      },
      { text: '个人博客', link: 'https://blog.cinima.asia' },
      { text: 'Github', link: 'https://www.github.com/nichuanfang' },
    ],
    sidebar: 'auto',
    navbar: true,
    sidebarDepth: 2,
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,

    repo: 'nichuanfang/blog-docs-next',
    repoLabel: '查看源码',
    // 以下为可选的编辑链接选项
    docsRepo: 'nichuanfang/blog-docs-next',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
  },
}
