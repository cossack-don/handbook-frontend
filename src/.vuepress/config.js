const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Road to the IT',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ['link', { rel: 'icon', href: '/home.png' }],
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // search: true,
    nav: [
      {
        text: 'Инструкция по справочнику',
        link: '/guide/',
      },
      {
        text: 'Javascript',
        link: '/javascript/',
      },
      {
        text: 'Vue',
        link: '/vue/',
      },
      {
        text: 'React',
        link: '/react/',
      },
      {
        text: 'TypeScript',
        link: '/typescript/',
      },
      {
        text: 'Unit tests',
        link: '/tests/',
      },
      {
        text: 'Прочитал на lern.js',
        link: '/config/'
      },
    ],
    sidebar: {
      '/config/': [
        {
          title: 'Интересные инструменты',
          collapsable: false,
          children: [
            '/config/checkList',
            '/config/usefulServices',
          ]
        },

      ],
      '/guide/': [
        {
          title: 'Введение',
          collapsable: false,
          children: [
            '',
          ]
        },

      ],
      '/react/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'Javascript',
          collapsable: false,
          children: [
            '/javascript/1',
            '/javascript/objects'
          ]
        }
      ],
      '/typescript/': [
        {
          title: 'TypeScript',
          collapsable: false,
          children: [
            '/typescript/start',
            '/typescript/data-types',
            '/typescript/array',
            '/typescript/object-description-with-types',
            '/typescript/cycle',
            '/typescript/functions',
            '/typescript/cortege',
            '/typescript/enum',
            '/typescript/types',
            '/typescript/interfaces',
            '/typescript/arrays-in-object',
            '/typescript/object-in-object-or-array',
            '/typescript/objects-in-array',
            '/typescript/integral-object-in-ts',
            '/typescript/other-ts',
          ]
        }
      ],
      '/tests/': [
        {
          title: 'tests',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

base:'/handbook-frontend/'

}
