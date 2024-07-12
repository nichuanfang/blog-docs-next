import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  // 根据该路径 区分不同导航栏 路径最后面需要加'/' 例如'/resume/'  子项目的link和prefix 只需要写子项目的名称即可 前缀会自动加上父项目的名称 例如 prefix: "base",代表 /resume/base link: "base",代表 /resume/base

  '/config/': [
    {
      text: 'tgbot',
      icon: 'book',
      prefix: 'tgbot',
      link: 'tgbot',
      collapsible: true,
      children: 'structure',
    },
    {
      text: 'nogfw',
      icon: 'book',
      collapsible: true,
      link: 'nogfw',
    },
  ],
  '/interview/': [
    {
      text: 'Overview',
      icon: 'table',
      collapsible: true,
      link: '/interview',
    },
    {
      text: '面试准备',
      icon: 'leaf',
      collapsible: true,
      prefix: '面试准备',
      children: [
        {
          text: '从零开始写好一份简历',
          collapsible: true,
          link: '从零开始写好一份简历',
        },
        {
          text: '给参与秋招的同学几点建议',
          collapsible: true,
          link: '给参与秋招的同学几点建议',
        },
        {
          text: '计算机专业学历真的很重要吗',
          collapsible: true,
          link: '计算机专业学历真的很重要吗',
        },
        {
          text: '项目经验怎么回答',
          collapsible: true,
          link: '项目经验怎么回答',
        },
        {
          text: '没有项目经验，怎么办？',
          collapsible: true,
          link: '没有项目经验，怎么办？',
        },
        {
          text: '你在项目里遇到的最大困难是什么，如何解决的？',
          collapsible: true,
          link: '你在项目里遇到的最大困难是什么，如何解决的？',
        },
        {
          text: '有哪些有梯度的刷题网站或app推荐？',
          collapsible: true,
          link: '有哪些有梯度的刷题网站或app推荐？',
        },
        {
          text: 'HR问目前拿到哪几个offer了，怎么回答好？',
          collapsible: true,
          link: 'HR问目前拿到哪几个offer了，怎么回答好？',
        },
        {
          text: '说说你未来的职业规划是怎样的？',
          collapsible: true,
          link: '说说你未来的职业规划是怎样的？',
        },
        {
          text: '面试官：你有什么要问我的吗？',
          collapsible: true,
          link: '面试官：你有什么要问我的吗？',
        },
        {
          text: '我建议你这样去刷题！',
          collapsible: true,
          link: '我建议你这样去刷题！',
        },
      ],
    },
    {
      text: '面试题&重要知识点',
      icon: 'leaf',
      collapsible: true,
      prefix: '面试题&重要知识点',
      children: [
        {
          text: 'Java',
          collapsible: true,
          prefix: 'Java',
          children: [
            {
              text: 'Java基础高频面试题',
              collapsible: true,
              link: 'Java基础高频面试题',
            },
            {
              text: 'Java集合高频面试题',
              collapsible: true,
              link: 'Java集合高频面试题',
            },
            {
              text: 'Java并发高频面试题',
              collapsible: true,
              link: 'Java并发高频面试题',
            },
            {
              text: 'Java虚拟机高频面试题',
              collapsible: true,
              link: 'Java虚拟机高频面试题',
            },
          ],
        },
        {
          text: '面试题&精简版',
          icon: 'leaf',
          collapsible: true,
          link: '/面试题&精简版/面试题&精简版'
        },
        {
          text: 'web',
          collapsible: true,
          prefix: 'web',
          children: [
            {
              text: 'Tomcat基础知识总结',
              collapsible: true,
              link: 'Tomcat基础知识总结',
            },
          ],
        },
        {
          text: '数据库',
          collapsible: true,
          prefix: '数据库',
          children: [
            {
              text: 'MySQL高频面试题',
              collapsible: true,
              link: 'MySQL高频面试题',
            },
            {
              text: 'MySQL锁相关面试题',
              collapsible: true,
              link: 'MySQL锁相关面试题',
            },
            {
              text: 'Redis高频面试题',
              collapsible: true,
              link: 'Redis高频面试题',
            },
            {
              text: 'Elasticsearch重要知识点总结',
              collapsible: true,
              link: 'Elasticsearch重要知识点总结',
            },
            {
              text: 'MongoDB高频面试题',
              collapsible: true,
              link: 'MongoDB高频面试题',
            },
          ],
        },
        {
          text: '常见框架',
          collapsible: true,
          prefix: '常见框架',
          children: [
            {
              text: 'Spring高频面试题',
              collapsible: true,
              link: 'Spring高频面试题',
            },
            {
              text: 'SpringMVC高频面试题',
              collapsible: true,
              link: 'SpringMVC高频面试题',
            },
            {
              text: 'SpringBoot高频面试题',
              collapsible: true,
              link: 'SpringBoot高频面试题',
            },
            {
              text: 'Mybatis高频面试题',
              collapsible: true,
              link: 'Mybatis高频面试题',
            },
            {
              text: 'SpringCloud高频面试题',
              collapsible: true,
              link: 'SpringCloud高频面试题',
            },
            {
              text: 'Zookeeper高频面试题',
              collapsible: true,
              link: 'Zookeeper高频面试题',
            },
            {
              text: 'Netty重要知识点总结',
              collapsible: true,
              link: 'Netty重要知识点总结',
            },
          ],
        },
        {
          text: '消息队列',
          collapsible: true,
          prefix: '消息队列',
          children: [
            {
              text: '消息队列高频面试题',
              collapsible: true,
              link: '消息队列高频面试题',
            },
            {
              text: 'RabbitMQ高频面试题',
              collapsible: true,
              link: 'RabbitMQ高频面试题',
            },
            {
              text: 'Kafka高频面试题',
              collapsible: true,
              link: 'Kafka高频面试题',
            },
          ],
        },
        {
          text: '计算机基础',
          collapsible: true,
          prefix: '计算机基础',
          children: [
            {
              text: 'TCP协议面试题',
              collapsible: true,
              link: 'TCP协议面试题',
            },
            {
              text: '计算机网络高频面试题',
              collapsible: true,
              link: '计算机网络高频面试题',
            },
            {
              text: '操作系统高频面试题',
              collapsible: true,
              link: '操作系统高频面试题',
            },
            {
              text: '数据结构重要知识点总结',
              collapsible: true,
              link: '数据结构重要知识点总结',
            },
            {
              text: '算法重要知识点总结',
              collapsible: true,
              link: '算法重要知识点总结',
            },
          ],
        },
        {
          text: '分布式',
          collapsible: true,
          prefix: '分布式',
          children: [
            {
              text: '微服务高频面试题',
              collapsible: true,
              link: '微服务高频面试题',
            },
            {
              text: 'RPC高频面试题',
              collapsible: true,
              link: 'RPC高频面试题',
            },
            {
              text: '分布式事务重要知识点总结',
              collapsible: true,
              link: '分布式事务重要知识点总结',
            },
            {
              text: '分布式锁怎么实现？',
              collapsible: true,
              link: '分布式锁怎么实现？',
            },
          ],
        },
        {
          text: '设计模式',
          collapsible: true,
          prefix: '设计模式',
          children: [
            {
              text: '设计模式的六大原则',
              collapsible: true,
              link: '设计模式的六大原则',
            },
            {
              text: '单例模式',
              collapsible: true,
              link: '单例模式',
            },
            {
              text: '工厂模式',
              collapsible: true,
              link: '工厂模式',
            },
            {
              text: '模板模式',
              collapsible: true,
              link: '模板模式',
            },
            {
              text: '策略模式',
              collapsible: true,
              link: '策略模式',
            },
            {
              text: '责任链模式',
              collapsible: true,
              link: '责任链模式',
            },
            {
              text: '迭代器模式',
              collapsible: true,
              link: '迭代器模式',
            },
            {
              text: '装饰者模式',
              collapsible: true,
              link: '装饰者模式',
            },
            {
              text: '适配器模式',
              collapsible: true,
              link: '适配器模式',
            },
            {
              text: '代理模式',
              collapsible: true,
              link: '代理模式',
            },
            {
              text: '观察者模式',
              collapsible: true,
              link: '观察者模式',
            },
            {
              text: '建造者模式',
              collapsible: true,
              link: '建造者模式',
            },
          ],
        },
        {
          text: '开发工具',
          collapsible: true,
          prefix: '开发工具',
          children: [
            {
              text: 'Git面试题',
              collapsible: true,
              link: 'Git面试题',
            },
            {
              text: 'Nginx高频面试题',
              collapsible: true,
              link: 'Nginx高频面试题',
            },
            {
              text: 'Linux重要知识点总结',
              collapsible: true,
              link: 'Linux重要知识点总结',
            },
            {
              text: 'Git重要知识点总结',
              collapsible: true,
              link: 'Git重要知识点总结',
            },
            {
              text: 'Docker重要知识点总结',
              collapsible: true,
              link: 'Docker重要知识点总结',
            },
            {
              text: 'Maven重要知识点总结',
              collapsible: true,
              link: 'Maven重要知识点总结',
            },
          ],
        },
      ],
    },
    {
      text: '系统设计',
      collapsible: true,
      icon: 'star',
      prefix: '系统设计',
      children: [
        {
          text: 'MySQL数据如何实时同步到ES？',
          collapsible: true,
          link: 'MySQL数据如何实时同步到ES？',
        },
        {
          text: '扫码登录原理',
          collapsible: true,
          link: '扫码登录原理',
        },
        {
          text: '如何用Redis统计用户访问量？',
          collapsible: true,
          link: '如何用Redis统计用户访问量？',
        },
        {
          text: '订单30分钟未支付自动取消怎么实现？',
          collapsible: true,
          link: '订单30分钟未支付自动取消怎么实现？',
        },
        {
          text: '如何设计一个短链系统？',
          collapsible: true,
          link: '如何设计一个短链系统？',
        },
        {
          text: '单点登录（SSO）的设计与实现',
          collapsible: true,
          link: '单点登录（SSO）的设计与实现',
        },
        {
          text: '10w级别数据Excel导入优化',
          collapsible: true,
          link: '10w级别数据Excel导入优化',
        },
        {
          text: '如何设计一个高并发系统？',
          collapsible: true,
          link: '如何设计一个高并发系统？',
        },
        {
          text: '如何设计一个注册中心？',
          collapsible: true,
          link: '如何设计一个注册中心？',
        },
        {
          text: '购物车系统怎么设计？',
          collapsible: true,
          link: '购物车系统怎么设计？',
        },
        {
          text: '如何设计一个消息队列？',
          collapsible: true,
          link: '如何设计一个消息队列？',
        },
        {
          text: '如何设计一个抢红包系统',
          collapsible: true,
          link: '如何设计一个抢红包系统',
        },
        {
          text: '权限系统设计方案',
          collapsible: true,
          link: '权限系统设计方案',
        },
        {
          text: '实时订阅推送设计与实现',
          collapsible: true,
          link: '实时订阅推送设计与实现',
        },
        {
          text: '秒杀系统',
          collapsible: true,
          link: '秒杀系统',
        },
        {
          text: '秒杀系统设计的5个要点',
          collapsible: true,
          link: '秒杀系统设计的5个要点',
        },
        {
          text: '微信红包后台系统设计',
          collapsible: true,
          link: '微信红包后台系统设计',
        },
        {
          text: '如何设计一个优惠券系统？',
          collapsible: true,
          link: '如何设计一个优惠券系统？',
        },
      ],
    },
    {
      text: '海量数据场景高频面试题',
      icon: 'star',
      collapsible: true,
      prefix: '海量数据场景高频面试题',
      children: 'structure',
    },
    {
      text: '面经篇',
      collapsible: true,
      prefix: '面经篇',
      children: 'structure',
    },
    {
      text: '校招社招分享',
      collapsible: true,
      prefix: '校招社招分享',
      children: 'structure',
    },
    {
      text: '生产问题&踩坑记录',
      collapsible: true,
      prefix: '生产问题&踩坑记录',
      children: 'structure',
    },
  ],
})
