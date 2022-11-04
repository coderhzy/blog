# solution

## 一：vue禁止遮罩层下的页面滚动

解决： 功能开发过程中写遮罩时，遇到遮罩下页面还可以滚动的问题。

```vue
<template>
	<div :class="isPopup ? 'disableRoll' : ''">
    <div>
      ...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopup: false,
    }
  }
}
</script>

<style>
  .disableRoll {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
  }
</style>
```

## 二：vue使用element-ui的modal接入微前端出现蒙层

解决： 查看element-ui的文档，modal-append-to-body设置为false

```js
<el-dialog
      title="监控条件选择"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      destroy-on-close
    >
</el-dialog>
```

## 三：vue单页应用h5禁止用户缩放

解决：在index.html的mate加入以下属性

```js
width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0
```

## 四：vue3的reactive对象初始化

解决：
1. 在reactive中如果直接赋值给一个空对象的话，会丢掉响应式
2. 在ts检测时候，Object.key遍历的值会访问显示string类型索引错误。

```typescript
const registerInfo = reactive<RegisterInfoType>({
  name: '',
  age: '',
  password: '',
});

type registerInfoItem = keyof typeof registerInfo;

/**
 * 重置注册表单
 */
const onReset = () => {
  Object.keys(registerInfo).forEach((key) => {
    registerInfo[key as registerInfoItem] = '';
  });
};
```


## 五： 图片禁止拖拽成缩略图

问题：在h5上禁止用户拖拽某张图片使其有缩略图

- 解决办法

```js
<img class="mtitimg" src="images/m1titimg3.png" draggable="false">
```

## 六: vue移动端禁止IOS的图片按住默认事件

问题：在一个移动端H5页面上，IOS手机可以按住显示拷贝一系列选项菜单

- 解决办法
```css
/* common.css */
*{
  -webkit-touch-callout:none; /*系统默认菜单被禁用*/
  -webkit-user-select:none; /*webkit浏览器*/
  -khtml-user-select:none; /*早期浏览器*/
  -moz-user-select:none;/*火狐*/
  -ms-user-select:none; /*IE10*/
  user-select:none;
}
```

增加上述设置后可以显示IOS的长按出现菜单选项问题。不过会出现输入框没办法输入的问题。还需要增加以下代码才能让你的代码正常工作。

```css
input {
  -webkit-user-select:auto; /*webkit浏览器*/
}

/* 如果存在textarea也输入不进文本的情况下，加上这个 */

textarea {                                                               
  -webkit-user-select:auto; /*webkit浏览器*/
}
```