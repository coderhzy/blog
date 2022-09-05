# 颜色拾取器windows失焦Bug

## 问题存在

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