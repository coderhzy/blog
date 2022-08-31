import { version } from "../../package.json";

export default {
  lang: "en-US",
  title: "VitePress",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  description: "VitePress is a Vite blockchain based documentation system.",
  base: "/blog/",
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
};


function nav() {
    return [
      { text: 'Guide', link: '/guide/ts-issue', activeMatch: '/guide/' },
      { text: 'Configs', link: '/config/start', activeMatch: '/config/' },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
          }
        ]
      }
    ]
  }
  
  function sidebarGuide() {
    return [
      {
        text: 'Introduction',
        collapsible: true,
        items: [
          { text: 'What is VitePress?', link: '/guide/ts-issue' },
          { text: 'Getting Started', link: '/guide/vue-issue' },
        ]
      }
    ]
  }
  
  function sidebarConfig() {
    return [
      {
        text: 'Config',
        items: [
          { text: 'Introduction', link: '/config/start' },
          { text: 'App Configs', link: '/config/ts' },
          { text: 'Theme Configs', link: '/config/vue' },
        ]
      }
    ]
  }
  