module.exports = {
  logo: '/logo.svg',
  title: 'hello',
  description: 'desc',
  lastUpdated: true,
  lang: 'en-US',
  themeConfig: {
    siteTitle: '前端文档',
    algolia: {
      appId: 'OXAFBDQWGS',
      apiKey: '68a645805a0cc46ca96051b6d7d6f1f2',
      indexName: 'liu',
    },
    sidebar: {
      // '/guide':[
      //   { text: '自我介绍', link: '/home' },
      // ],
      '/js':[{
        // text:'js',
        items:[
          {text: 'js对象特征', link: '/js/object'},
          {text: 'class类', link: '/js/class'},
        ]
      }
      ],
      '/nestjs': [
        {
          text: 'nest',
          collapsible: true,
          // collapsed: true,
          items: [
            {text: '用户鉴权', link: '/nestjs/auth'},
            {text: 'typeOrm', link: '/nestjs/typeorm'},
            {text: '内容关系', link: '/nestjs/relation'},
          ],
        },
      ],
    },
    nav: [
      {text: 'js', link: '/js/object'},
      {
        text: 'vue',
        items: [{text: 'jsx', link: '/vue/jsx'}],
      },
      {text: 'typescript', link: '/typescript/'},
      {text: 'nestjs', link: '/nestjs/auth'},
      {text: 'npm', link: '/npm/'},
      {text: 'docker', link: '/docker/'},
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present https://www.webwuyou.com',
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/webwuyou/webwuyou.github.io'},
    ],
  },
}
