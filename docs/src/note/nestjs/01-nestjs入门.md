# NestJS入门

## 一、什么是NestJS

Nest 是一个NodeJS服务端框架。区别于 Express/Koa/Fastify 没有(弱)主张的、纯粹提供HTTP服务器封装和异步流程串并行的思路的基础框架，NestJS提供架构主张，有自己一套架构模式，开发者需要按照NestJS要求的架构来组织代码。适合团队用于构建高效、可靠的、高可拓展、松散耦合、易于测试的大型NodeJS服务端应用。

:::tip
In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture. Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular. -- Documentation | NestJS - A progressive Node.js framework 官方的这段介绍和我看到的非常一致，注意作者说是高效地解决，我的理解是现在 Node.js 或者说 JavaScript 框架都是各做各的，都是些点，可能确实有做的很不错的，但是整体而言并没有一个把各种好东西串链起来做成一种通用模式的框架，或者说是架构。 -- keelii
:::

## 二、项目搭建

1. 使用cli创建项目
```shell
npm i -g @nestjs/cli  //安装nest脚手架
nest new project_name // 创建nest项目，选择yarn
cd project_name // 进入项目目录
yarn start:dev  // 启动项目
```

访问http://localhost:3000，会得到一个hello

2. 项目目录介绍

<img src="https://imgsbed-1301560453.cos.ap-shanghai.myqcloud.com/blog/image-20220916174029931.png" alt="image-20220916174029931" style="zoom:50%;" />

```js
/server
	/dist //项目打包后的文件
	/node_modules //项目依赖
	/src
		/app.controller.spec.ts // 测试文件
		/app.controller.ts // 控制器（消费者）
		/app.module.ts // module（连接）
		/app.service.ts // 服务（生产者）
    /main.ts // 主入口
	/test // 测试文件夹
	/.eslintrc.js // eslint配置
	/.gitignore // git忽略跟踪文件
  /.prettierrc // 项目格式化文件
  /nest-cli.json
 	/package.json // 依赖配置
  /README.md // 项目说明文件
	/tsconfig.json // typescript配置文件
	/yarn.lock // yarn锁定版本文件
```

**简要介绍**

- 项目的启动端口`main.ts`中，项目默认是3000

- 使用`postman`测试初始项目的正常，新增一个get请求

  <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/503ac5fdc8f647faa1793844a5a0afb4~tplv-k3u1fbpfcp-zoom-1.image" alt="image-20220614170921426" style="zoom:50%;" />

## 三、项目架构介绍

NestJS主要依附于`module`service`controller`。是一款oop开发的项目。通常情况下，将具体的业务功能都写入到`service`中，`service`中的方法可以被导出，最终通过`module`的连接使其注入到`controller`中使用。因此划分代码接口会比较清晰。



## 四、写在结尾

GitHub地址: [彩虹](https://github.com/codehzy/blog)

