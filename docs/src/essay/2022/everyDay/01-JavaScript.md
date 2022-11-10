# JavaScript

## 一、箭头函数和普通函数有什么区别

1. 写法不同，箭头函数使用箭头定义，写法简洁。 普通函数使用function定义。
2. 箭头函数都是匿名函数，而普通函数既可以是匿名函数，也可以是具名函数。
3. 箭头函数不能作为构造函数来使用，普通函数可以用作构造函数，以此来创建一个对象的实例。
4. this指向不同，箭头函数没有this，在声明的时候，捕获上下文的this供自己使用，一旦确定不会再变化。在普通函数中，this指向调用自己的对象，如果用在构造函数，this指向创建的对象实例。普通函数可以使用call，apply，bind改变this的指向。
5. 箭头函数没有arguments（实参列表，类数组对象），每一个普通函数在调用后都有一个arguments对象，用来存储实际传递的参数。
6. 箭头函数没有原型，而普通函数有。


## 二、如何判断一个数组是数组

1. `Object.prototype.toString.call(arr)`，判断其是否等于`[object Array]`，顶端判断
2. `Array.isArray(arr)`a

## 三、颜色拾取器windows失焦Bug

- 问题存在
  - 选择拾色器以后，错误吸取空白地方，会导致`windows`系统无法切换`中英文`。
  - 使用`fixIMEWin`函数，开启一个新的窗口再关闭。**主要就是让浏览器失去焦点**。
  - 解决方法存在问题：过老的浏览器会有闪烁一下的问题。

```html
<body>
    <input type="text" />
    <input type="color" onclick="fixIME" />

    <script>
      function fixIME() {
        // 是否为windows系统
        const isWindows = navigator.platform.indexOf('Win') > -1
        if (!isWin) {
          return
        }
        let fixIMEWin = window.open()
        fixIMEWin.close()
      }
    </script>
</body>
```

## 四、使用export具名导出和默认导出区别

## 结论

:::tip
开篇先阐述个结论，建议使用具名导出。不推荐使用默认导出。
:::

1.1 **默认导出的缺点**
- 默认导出编辑器提示不完善
- 默认导出可以任意命名，会导致函数语义不固定。
- 命名风格统一比较困难
- 默认导出对重构不友好，需要手动修改。
- 如一个包，你不知道他哪个功能是默认导出，此时就需要去阅读源码和文档。
- 默认导出不利于`Tree shaking`。

1.2 **具名导出的优点**
- 具名导出编辑器提示完善
- 具名导出可以使用编辑器自带的命名工具。
- 具名导出，就可以很快找到对应函数和功能。
- 具名导出则利于`Tree shaking`

1.3 **不适用默认导出的缺点**
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