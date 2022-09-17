import { version } from '../../package.json'

export default {
  lang: 'en-US',
  title: '童话说雨后会有一道彩虹',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  description: '童话说雨后会有一道彩虹, 一个前端开发者的个人博客',
  base: '/blog/',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/src/note/': sidebarNote(),
      '/src/read/': sidebarRead(),
      '/src/algorithm/': sidebarAlgorithm(),
      '/src/essay/': sidebarEssay()
    },
    editLink: {
      pattern: 'https://github.com/codehzy/blog/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/codehzy' }],
    // algolia: {
    //   appId: 'NUDAMQECCC',
    //   apiKey: '06d48ab40b815a66985f0ae98bbc7c6d',
    //   indexName: 'rainbow'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}

function nav() {
  return [
    {
      text: '笔记',
      link: '/src/note/issue/01-ts-issue',
      activeMatch: '/note/'
    },
    {
      text: '阅读心得',
      link: '/src/read/2022/life/01-穷爸爸富爸爸',
      activeMatch: '/read/'
    },
    {
      text: '算法',
      link: '/src/algorithm/algorithmQA/01-quickSort',
      activeMatch: '/algorithm/'
    },
    {
      text: '随笔',
      link: '/src/essay/2022/technology/01-前端程序员自我修养',
      activeMatch: '/essay/'
    },
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
        { text: 'WebView', link: '/src/note/issue/03-webview-issue' }
      ]
    },
    {
      text: 'TypeScript',
      collapsible: true,
      items: [
        { text: '条件类型', link: '/src/note/typescript/01-ConditionalTypes' },
        { text: 'test', link: '/src/note/typescript/02-Generics' }
      ]
    },
    {
      text: 'Electron',
      collapsible: true,
      items: [
        {
          text: '初始化vite+Electron',
          link: '/src/note/electron/01-init-vite-electron'
        }
      ]
    },
    {
      text: 'Linux',
      collapsible: true,
      items: [
        {
          text: 'vim命令',
          link: '/src/note/linux/01_vim指令记录'
        },
      ]
    },
    {
      text: 'NestJS',
      collapsible: true,
      items: [
        {
          text: 'NestJS入门',
          link: '/src/note/nestjs/01-nestjs入门'
        },
      ]
    },
  ]
}

function sidebarRead() {
  return [
    {
      text: '阅读',
      collapsible: true,
      items: [
        { text: '穷爸爸富爸爸', link: '/src/read/2022/life/01-穷爸爸富爸爸' }
      ]
    },
    {
      text: 'JavaScript高级程序设计',
      collapsible: true,
      items: [
        {
          text: '01-什么是JavaScript',
          link: '/src/read/2022/technology/JavaScriptHighDesign/01-JavaScriptHighDesign'
        },
        {
          text: '02-HTML中的JavaScript',
          link: '/src/read/2022/technology/JavaScriptHighDesign/02-JavaScriptHighDesign'
        }
      ]
    },
    {
      text: 'VueJs设计与实现',
      collapsible: true,
      items: [
        {
          text: '01-权衡艺术',
          link: '/src/read/2022/technology/VueDesign/01-VueDesign'
        }
      ]
    }
  ]
}

function sidebarAlgorithm() {
  return [
    {
      text: '算法',
      collapsible: true,
      items: [
        { text: '快速排序', link: '/src/algorithm/algorithmQA/01-quickSort' }
      ]
    },
    {
      text: '手写API',
      collapsible: true,
      items: [
        {
          text: '遍历数组方法',
          link: '/src/algorithm/handleWriting/01-遍历数组方法'
        }
      ]
    }
  ]
}

function sidebarEssay() {
  return [
    {
      text: '每天进步一点点',
      collapsible: true,
      items: [
        {
          text: '箭头函数和普通函数区别',
          link: '/src/essay/2022/everyDay/01-箭头函数和普通函数有什么区别'
        },
        {
          text: '说一下css盒模型',
          link: '/src/essay/2022/everyDay/02-说一下css盒模型'
        },
        {
          text: '如何判断一个数组是数组',
          link: '/src/essay/2022/everyDay/03-如何判断一个数组是数组'
        },
        {
          text: '颜色拾取器windows失焦Bug',
          link: '/src/essay/2022/everyDay/04-颜色拾取器windows失焦Bug'
        },
        {
          text: 'export具名导出和默认导出区别',
          link: '/src/essay/2022/everyDay/05-使用export具名导出和默认导出区别'
        },
        {
          text: 'css的display双值',
          link: '/src/essay/2022/everyDay/06_css的display双值'
        }
      ]
    },
    {
      text: '技术',
      collapsible: true,
      items: [
        {
          text: '前端程序员自我修养',
          link: '/src/essay/2022/technology/01-前端程序员自我修养'
        }
      ]
    },
    {
      text: '生活',
      collapsible: true,
      items: [{ text: '随风而去', link: '/src/essay/2022/life/01-随风而去' }]
    }
  ]
}
