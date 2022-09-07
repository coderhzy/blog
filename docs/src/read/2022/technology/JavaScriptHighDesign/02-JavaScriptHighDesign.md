# JavaScript高级程序设计第二章

## HTML中的JavaScript

JavaScript高级程序设计第二章
1. 本章主要讲述了在`HTML`中JavaScript的使用注意。先从`script`属性来介绍了：分别可以设置`async`,`charset`,`crossorigin`,`defer`,`integrity`,`language`,`src`,`type`。重点关注：属性`src`指定的路径发送一个`GET`请求，这个请求初始不受浏览器同源策略限制，但是返回并被执行的JavaScript则受到限制。通过`integrity`来验证签名，提升安全性。
2. JavaScript脚本建议放在`body`标签的最后面，这样处理JS代码之前能完全渲染页面。
3. 推迟脚本执行：`defer`和`async`，书中推荐使用`defer`，因async立即开始下载脚本，不能阻止其他页面动作，这个一步脚本保证会在页面`load`事件前执行，但是可能会在`DOMContentLoaded`之前或者之后执行，因为其不确定其，而`defer`则是多个脚本按照顺序在`DOMContentLoaded`事件之前执行。
4. 提醒了，我们通过`createElement`创建元素的`script`时候，可以明确使用`script.async = false`来将其设为同步加载。并在头部添加
// 上述创建script方式，获取资源对浏览器预加载是不可预见的
// 为了提高性能，我们手动显示声明
```JavaScript
<link rel='preload' href='xxxx.js'> 
```
5. XHTML就不多具体赘述了。另外兼容性处理，加入一行`noscript`来对浏览器不支持脚本或浏览器对脚本的支持被关闭的浏览器显示下方代码。
```JavaScript
<noscript>
  <p>这个浏览器不支持JavaScript</p>  
</noscript>
```
