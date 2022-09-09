# 使用export具名导出和默认导出区别

## 结论

:::tip
开篇先阐述个结论，建议使用具名导出。不推荐使用默认导出。
:::

## 1.1 **默认导出的缺点**
- 默认导出编辑器提示不完善
- 默认导出可以任意命名，会导致函数语义不固定。
- 命名风格统一比较困难
- 默认导出对重构不友好，需要手动修改。
- 如一个包，你不知道他哪个功能是默认导出，此时就需要去阅读源码和文档。
- 默认导出不利于`Tree shaking`。

## 1.2 **具名导出的优点**
- 具名导出编辑器提示完善
- 具名导出可以使用编辑器自带的命名工具。
- 具名导出，就可以很快找到对应函数和功能。
- 具名导出则利于`Tree shaking`

## 1.3 **不适用默认导出的缺点**
- 1. 导出重名问题
  ```JavaScript
  import { Article } from './types'
  import { Article as ArticleComponent } from 'my-design-system'
  ```
- 2. 组件导出
  ![组件导出](https://imgsbed-1301560453.cos.ap-shanghai.myqcloud.com/blog/20220909101029.png)
  ```JavaScript
  export { default as Counter } from './HomeView.vue'
  ```
  作为用户就可以具名使用这个组件了。