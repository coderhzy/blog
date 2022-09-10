# css的display双值

## 介绍

[原文链接](https://hacks.mozilla.org/2019/10/the-two-value-syntax-of-the-css-display-property/)

1. 本文介绍了为display在使用的时候可以设置双值。
2. 主要产生原因阐述
   1. 我们常在开发中使用`display:flex`，其实此时这个属性为`block flex`。因为我们设置以后，无论是行级元素`span`还是块级元素`div`都会被设置为**块元素**。
   2. 因此我们需要了解`display`的双值来应对某个特定的开发场景。
3. ![双值表](https://imgsbed-1301560453.cos.ap-shanghai.myqcloud.com/blog/display-two-values.png)

## 应用

1. 如果想`display: flex`以后，设置为`inline`。可以设置`display: inline-flex`，此时容器为`flex`容器，并且还是行内元素。
2. 普通的`display: flex`，则是`block`。或者可以手动设置`display: block-flex`。