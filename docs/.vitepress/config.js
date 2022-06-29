module.exports = {
  title: 'hello',
  description: 'desc',
  themeConfig: {
    siteTitle: '前端文档',
    nav: [
      { text: 'js', link: '/js/' },
      {
        text: 'vue', items: [
          { text: 'jsx', link: '/vue/jsx' }
        ]
      },
      { text: 'typescript', link: '/typescript/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present https://www.webwuyou.com'
    }
  },
}