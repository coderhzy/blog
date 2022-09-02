import { version } from "../../package.json";

export default {
  lang: "en-US",
  title: "童话说雨后会有一道彩虹",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  description: "童话说雨后会有一道彩虹, 一个前端开发者的个人博客",
  base: "/blog/",
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/src/note/': sidebarNote(),
      '/src/read/': sidebarRead(),
      '/src/algorithm/': sidebarAlgorithm(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codehzy' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
  }
};


function nav() {
    return [
      { text: '笔记', link: '/src/note/issue/01-ts-issue', activeMatch: '/note/issue' },
      { text: '阅读心得', link: '/src/read/2022/life/01-穷爸爸富爸爸', activeMatch: '/read/read/2022/life' },
      { text: '算法', link: '/src/algorithm/algorithmQA/01-quickSort', activeMatch: '/read/algorithm/algorithmQA' },
      {
        text: version,
        items: [
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1714893872178823/posts'
          },
          {
            text: 'VitePress',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          }
        ]
      }
    ]
  }
  
  function sidebarNote() {
    return [
      {
        text: 'issue收集',
        collapsible: true,
        items: [
          { text: 'TypeScript', link: '/src/note/issue/01-ts-issue' },
          { text: 'VueJs', link: '/src/note/issue/02-vue-issue' },
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: '条件类型', link: '/src/note/typescript/01-ConditionalTypes' },
          { text: 'test', link: '/src/note/typescript/02-Generics' },
        ]
      },
      {
        text: 'Electron',
        collapsible: true,
        items: [
          { text: '初始化vite+Electron', link: '/src/note/electron/01-init-vite-electron' },
        ]
      }
    ]
  }
  
  function sidebarRead() {
    return [
      {
        text: '技术',
        items: [
          { text: '穷爸爸富爸爸', link: '/src/read/2022/life/01-穷爸爸富爸爸' },
        ]
      },
      {
        text: '生活',
        items: [
          { text: 'VueJs设计与实现', link: '/src/read/2022/technology/01-VueDesign' },
        ]
      }
    ]
  }

  function sidebarAlgorithm() {
    return [
      {
        text: '算法',
        items: [
          { text: '快速排序', link: '/src/algorithm/algorithmQA/01-quickSort' },
        ]
      },
      {
        text: '手写API',
        items: [
          { text: '遍历数组方法', link: '/src/algorithm/handleWriting/01-遍历数组方法' },
        ]
      },
    ]
  }
  