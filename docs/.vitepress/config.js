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
          {text: '分片上传', link: '/js/分片上传'},
        ]
      }
      ],
      '/nestjs': [
        // {
        //   text: 'nest',
        //   collapsible: true,
        //   // collapsed: true,
        //   items: [
        //     {text: '控制器', link: '/nestjs/controller'},
        //     {text: '服务', link: '/nestjs/service'},
        //     {text: '模块', link: '/nestjs/module'},
        //   ],
        // },
        {
          text: 'typeOrm',
          collapsible: true,
          // collapsed: true,
          items: [
            {text: '用户鉴权', link: '/nestjs/auth'},
            {text: 'typeOrm', link: '/nestjs/typeorm'},
            {text: '内容关系', link: '/nestjs/relation'},
          ],
        },
      ],
      '/nuxt/nuxt3':[{
        // text:'js',
        items:[
          {text: '目录结构', link: '/nuxt/nuxt3/'},
          {text: '路由配置', link: '/nuxt/nuxt3/router'},
          {text: '静态资源', link: '/nuxt/nuxt3/static'},
        ]
      }
      ],
    },
    nav: [
      {text: 'js', link: '/js/object'},
      {
        text: 'vue',
        items: [{text: 'jsx', link: '/vue/jsx'}],
      },
      {text: 'typescript', link: '/typescript/'},
      {
        text: 'nuxt',
        items: [{text: 'nuxt3', link: '/nuxt/nuxt3'}],
      },
      {text: 'nestjs', link: '/nestjs/auth'},
      {text: 'svelte', link: '/svelte/'},
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
