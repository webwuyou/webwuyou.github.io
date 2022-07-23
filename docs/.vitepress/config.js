module.exports = {
  logo: '/logo.svg',
  title: 'hello',
  description: 'desc',
  lastUpdated: true,
  lang: 'en-US',
  themeConfig: {
    siteTitle: '前端文档',
    algolia: {
      apiKey: '7eeb6e245e44d4122e6d2bc592b6b1b6',
      indexName: 'index_name',
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
    nav: [
      {text: 'js', link: '/js/object'},
      {
        text: 'vue',
        items: [{text: 'jsx', link: '/vue/jsx'}],
      },
      {text: 'typescript', link: '/typescript/'},
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