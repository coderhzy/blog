# React18


- 文中有些案例过长： 请选择性观看。
- 一文解决React基本使用，如果看不太懂React官网，建议可以看看本文。


## 一、类组件
### 1. **class组件注意点**

  - 继承React中`Component`组件
  - 在constructor中执行`super()`以及定义`state`
  - 函数定义及绑定，注意`this`指向
    - 1. 函数定义为箭头函数
    - 2. 使用es6 class Filed
    - 3. 使用`bind`来改变this指向
  - 注意使用`setState()`函数来改变`state`中的值，这样React才可以在数据更改后，重新执行render函数。

### 2. **case1-Counter**

```javascript
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello world',
      counter: 100,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  // methods
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>current-Counter: {counter}</h2>
           <button onClick={this.increment}>+1</button>
           <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}
```

### 3. **case2-FirstProject**

```javascript
import React, { Component } from 'react'

export default class FirstProject extends Component {
    constructor(props) {
    super(props)

    this.state = {
      movies: ["星际穿越", "流浪地球", "独行月球", "大话西游", "火星救援"]
    }
  }

  render() {
    return (
      <div>
        <h2>movie-list</h2>
        <ul>
          {this.state.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }
}
```

## 二、函数组件

### 1. **函数组件注意点**
  - 1. 函数通过返回`jsx`来进行渲染
  - 2. 注意搭配React-Hooks来使用，详细需要了解[Hook具体用法](https://reactjs.org/docs/hooks-reference.html)
  - 3. 尤其注意：使用Hooks来对你的函数组件进行优化，避免多余的重复渲染。

### 2. **case1：CounterHook**

```javascript
import { memo, useState } from "react";
function CounterHook() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
}

export default memo(CounterHook);
```


## 三、JSX语法

### 1. **介绍JSX**
  - 1. 具体语法参考React官方的[JSX](https://reactjs.org/docs/introducing-jsx.html)
  - 2. 在React中，没有`Vue`的`template`，所有UI部分都是使用JSX来书写。

### 2. **case1-JSXInsertContent**
  
```javascript
import * as React from 'react'

export default class JSXInsertContent extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 100,
      message: 'Hello World',
      names: ['abc', 'cba', 'nba'],

      aaa: undefined,
      bbb: null,
      ccc: true,

      friend: { name: 'kobe' },


      firstName: 'kobe',
      lastName: 'bryant',

      age: 20,

      movies: ['流浪地球', '星际穿越', '独行月球'],
    }
  }

  render() {
    // 1. insert-identifier
    const { message, names, counter } = this.state
    const { aaa, bbb, ccc } = this.state
    const { friend } = this.state

    const { firstName, lastName } = this.state
    const fullName = firstName + ' ' + lastName

    const { age } = this.state
    const ageText = age >= 18 ? '成年人' : '未成年人'
    const liEls = this.state.movies.map((movie) => <li>{movie}</li>)
    return (
      <div>
        <h2>{message}</h2>
        <h2>{names}</h2>
        <h2>{counter}</h2>

        <h2>{counter}</h2>


        <h2>{String(aaa)}</h2>
        <h2>{bbb + ''}</h2>
        <h2>{ccc.toString()}</h2>

        <h2>{friend.name}</h2>
        <h2>{Object.keys(friend)[0]}</h2>

        <h2>{10 + 20}</h2>
        <h2>{fullName}</h2>

        <h2>{ageText}</h2>
        <h2>{age >= 18 ? "one" : "two" }</h2>

        {/* <ul>{liEls}</ul> */}
        <ul>{this.state.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )
  }
}
```

### 3. **case1-JSXBindAttribute**

```javascript
import React, { Component } from 'react'

import './02-attribute.css'

export default class JSXBindAttribute extends Component {
  constructor(){
    super()

    this.state = {
      title: "哈哈哈",
      imgURL: "https://ts1.cn.mm.bing.net/th/id/R-C.95bc299c3f1f0e69b9eb1d0772b14a98?rik=W5QLhXiERW4nLQ&riu=http%3a%2f%2f20178405.s21i.faiusr.com%2f2%2fABUIABACGAAgoeLO-wUo4I3o2gEw8Qs4uAg.jpg&ehk=N7Bxe9nqM08w4evC2kK6yyC%2bxIWTjdd6HgXsQYPbMj0%3d&risl=&pid=ImgRaw&r=0",
      href: "https://www.baidu.com",

      isActive: true,
      objStyle: {color: "red", fontSize: "30px"}
    }
  }
  render() {
    const { href,imgURL,title,isActive,objStyle} = this.state
    return (
      <div>
        <a href={href}>{title}</a>
        <img src={imgURL} alt={title} style={{height:'100px'}}></img>

        <div style={{color: objStyle.color,fontSize: objStyle.fontSize}}>
          add inline-style in JSX
        </div>


        <div className={isActive ? objStyle.color : ''}>
          JSX ----
        </div>
      </div>
    )
  }
}

```

- **JSX本质**
  - 1. React使用`React.createElement`函数将JSX转化，最终创建元素。
  - 2. 会将JSX转换成使用`React.createElement`构建的对应DOM树

- **转换前： React组件编写**

```javascript
// 1.定义App根组件
  class App extends React.Component {
    constructor() {
      super()
      this.state = {
        message: "Hello World"
      }
    }

    render() {
      const { message } = this.state

      return (
        <div>
          <div className="header">Header</div>
          <div className="Content">
            <div>{message}</div>
            <ul>
              <li>列表数据1</li>
              <li>列表数据2</li>
              <li>列表数据3</li>
              <li>列表数据4</li>
              <li>列表数据5</li>
            </ul>
          </div>
          <div className="footer">Footer</div>
        </div>
      )
    }
  }
```

- **转换后： React组件转换后**

```javascript
import React, { Component } from 'react'

export default class JSXConvert extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello World"
        }
    }
    
  render() {

    const element = React.createElement(
        "div",
        null,
/*#__PURE__*/ React.createElement(
          "div",
          {
            className: "header"
          },
          "Header"
        ),
/*#__PURE__*/ React.createElement(
          "div",
          {
            className: "Content"
          },
  /*#__PURE__*/ React.createElement("div", null, "Banner"),
  /*#__PURE__*/ React.createElement(
            "ul",
            null,
    /*#__PURE__*/ React.createElement(
              "li",
              null,
              "\u5217\u8868\u6570\u636E1"
            ),
    /*#__PURE__*/ React.createElement(
              "li",
              null,
              "\u5217\u8868\u6570\u636E2"
            ),
    /*#__PURE__*/ React.createElement(
              "li",
              null,
              "\u5217\u8868\u6570\u636E3"
            ),
    /*#__PURE__*/ React.createElement(
              "li",
              null,
              "\u5217\u8868\u6570\u636E4"
            ),
    /*#__PURE__*/ React.createElement("li", null, "\u5217\u8868\u6570\u636E5")
          )
        ),
/*#__PURE__*/ React.createElement(
          "div",
          {
            className: "footer"
          },
          "Footer"
        )
      );

    return (
      <div>{element}</div>
    )
  }
}
```


## 四、组件生命周期函数

### 1. **介绍： [组件生命周期](https://reactjs.org/docs/react-component.html#componentdidmount)**
  - 1. 通常我们在类组件中使用组件生命周期函数来执行代码，从而保证页面数据正产渲染。
  - 2. 类组件-生命周期函数分类：
    - `componentDidMount`: 组件被渲染到DOM: 被挂载到DOM
    - `componentDidUpdate`:  组件的DOM被更新完成： DOM发生更新
    - `componentWillUnmount`: 组件从DOM中卸载掉： 从DOM移除掉
    - `shouldComponentUpdate`: 该声明周期返回`true`可以正常使得组件执行`componentDidUpdate`渲染，返回`false`则会拒绝更新渲染。
    - `getSnapshotBeforeUpdate`: 它使您的组件能够在DOM可能被更改之前从DOM捕获一些信息（例如滚动位置）
  - 3. 等后文，介绍Hooks时候，对函数式组件怎么来声明周期再详细讲解

### 2. **case1-组件生命周期函数**

```javascript
import React from "react";

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'hello world'
        }
    }

    changeText() {
        this.setState({message: 'hello react'})
    }

    render(){
        const {message} = this.state
        return (
            <div>
                <h2>{message}</h2>
                <p>{message}是程序员的第一个代码!</p>
                <button onClick={e => this.changeText()}>修改文本</button>
            </div>
        )
    }

    // 组件被渲染到DOM: 被挂载到DOM
    componentDidMount() {
        console.log('Hello-world componentDidMount')
    }

    // 组件的DOM被更新完成： DOM发生更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Hello-world componentDidUpdate')
    }

    // 组件从DOM中卸载掉： 从DOM移除掉
    componentWillUnmount() {
        console.log('Hello-world componentWillUnmount')
    }


    // 不常用的生命周期补充
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Hello-world getSnapshotBeforeUpdate')
        return {
            scrollPosition: 1000
        }
    }
}

export default HelloWorld
```

## 五、父子组件通信

- **介绍： 父子组件通信**
  - 1. 父 -> 子
  - 2. 子 -> 父
  - 3. 非父子组件通信
    - Context
    - EventBus

- **详解：父子组件通信**

### 1. **父 -> 子**

- 核心代码
```javascript
<Child title='轮播图' banners={banners} productList={productList}/>
```

- 完整代码

```javascript
// Father.jsx

import React from 'react'
import axios from 'axios'
import Child from "./Child";

export default class Father extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            message: "Father",
            banners: [],
            productList: []
        }
    }

    componentDidMount() {
        const getListData = async () => {
            const {data} = await axios.get('http://123.207.32.32:8000/home/multidata')
            const banners = data.data.banner.list
            const recommends = data.data.recommend.list
            this.setState({banners, productList: recommends})
        }
        getListData()
    }

    render(){
        const {message,banners,productList } = this.state
        return (
                <div className='father'>
                    <div>{message}</div>
                    <Child title='轮播图' banners={banners} productList={productList}/>
                </div>
        )
    }
}

// Child.jsx
import React from "react";
import styled from './fater.module.css'
import PropTypes from "prop-types";
import GrandSon from "./GrandSon";

export default  class Child extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            message: "Child"
        }
    }
    render(){
        const {title,banners,productList } = this.props
        const { message } = this.state
        return (
            <div className={styled.banner}>
                <h2>封装一个轮播图: {title}</h2>
                <ul>
                    {
                        banners.map(item => {
                            return <li key={item.acm}>{message} ----- {item.title}</li>
                        })
                    }
                </ul>
                <GrandSon productList={productList}/>
            </div>
        )
    }
}

Child.propTypes = {
    banners: PropTypes.array,
    title: PropTypes.string
}

Child.defaultProps = {
    banners: [],
    title: '默认标题'
}

// GrandSon.jsx
import React from "react";
import PropTypes from "prop-types";

export default class GrandSon extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            message: "GrandSon"
        }
    }
    render(){
        const { productList } = this.props
        const { message } = this.state
        return (
            <div>
                {
                    productList.map(item => {
                        return <li key={item.acm}>{message} ---- {item.title}</li>
                    })
                }
            </div>
        )
    }
}

GrandSon.propTypes = {
    productList: PropTypes.array
}

GrandSon.defaultProps = {
    productList: []
}
```

### 2. **子 -> 父**

- **核心代码**

```javascript
// Father.jsx
  getTitle(title){
    console.log(title)
    this.setState({sonTitle: title})
  }

  <Son getTitle={title => this.getTitle(title)}/>

// Son.jsx
  handleClick = (title) => {
      this.props.getTitle(title)
  }
  <button onClick={() => this.handleClick(title)}>子传输给父</button>
```

- **完整代码**

```javascript
// Father.jsx
import React from "react";
import Son from "./Son";

export default class Father extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            message: "Father",
            sonTitle: "传输数据"
        }
    }
    getTitle(title){
        console.log(title)
        this.setState({sonTitle: title})
    }

    render(){
        const { message,sonTitle } = this.state
        return (
            <div>
                <div>{message}</div>
                <div>sonSendTitle: {sonTitle}</div>
                <Son getTitle={title => this.getTitle(title)}/>
            </div>
        )
    }
}

// Son.jsx
import React from "react";

export default class Son extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            message: "Son",
            title: "Son的传输数据"
        }
    }

    handleClick = (title) => {
        this.props.getTitle(title)
    }

    render(){
        const { message,title } = this.state
        return (
            <div>
                <div>{message}</div>
                <button onClick={() => this.handleClick(title)}>子传输给父</button>
            </div>
        )
    }
}
```

2. **MAX: 组件通信案例练习 - 实现tab切换，导航栏**

```javascript
// Communicate.jsx
import TabControl from "./TabControl";
import React from "react";

export default class Communicate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titles: ["新款", "精选", "流行"],
            tabIndex: 0
        }
    }

    tabClick(index){
        this.setState({
            tabIndex: index
        })
    }

    render(){
        const {titles, tabIndex} = this.state;
        return (
            <div>
                <TabControl titles={titles} tabClick={(i) => this.tabClick(i)} />
                <h1>{titles[tabIndex]}</h1>
            </div>
        )
    }
}

// TabControl.jsx
import React from "react";
import styled from './styled.module.css'

export default class TabControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    itemClick(index){
        this.setState({
            currentIndex: index
        })

        this.props.tabClick(index);
    }

    render() {
        const { titles }  = this.props;
        const { currentIndex } = this.state;
        return (
            <div className={styled.tabControl}>
                {
                    titles.map((item,index) => {
                        return (
                            <div className={`${styled.item} ${index === currentIndex ? styled.active : ""}`} key={item} onClick={() => this.itemClick(index)}>
                                <span className={styled.text}>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
```

### 3. 非父子组件通信


#### 3.1 Context

- **介绍： Context**
  - 1. 使用`createContext`创建对应的Context
  - 2. 使用创建出的Context的`Provider`作为父组件，其中所有被嵌套的子组件使用对应`Context-Consumer`来**消费**Context中的数据
  - 3. 主要方式方式为： 回调函数，参数为`value`，value中就能拿到外层嵌套的Context中的数据

**case1-Context**


```javascript
// ./context/theme-Context.js
import React from "react";

const ThemeContext = React.createContext({color: 'blue', size: 10})

export default ThemeContext

// ./Context.jsx
import React from "react";
import Home from "./Home";
import ThemeContext from "./Context/theme-context";
import UserContext from "./Context/user-context";

export default  class  Context  extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: { name: "kobe", age: 30 }
        }
    }

    render(){
        const { info } = this.state
        return (
            <div>
                <h1>Context</h1>

                {/* 1. 普通传值   */}
                {/*<Home name={info.name} age={info.age} />*/}
                {/*<Home {...info} />*/}
                  <ThemeContext.Provider value={{color: 'red',size:30}}>
                      <Home {...info} />
                  </ThemeContext.Provider>

            </div>
        )
    }
}

// ./ThemeContext.jsx
import ThemeContext from "./Context/theme-context";

export default function HomeBanner() {
  return (
    <div>
      <h2>HomeBanner</h2>
        <ThemeContext.Consumer>
            {
                value => {
                    return <h2>Banner theme: {value.color}</h2>
                }
            }
        </ThemeContext.Consumer>
    </div>
  );
}
```


#### 3.2 EventBus

- **介绍： 通过EventBus来派发数据**
  - 1. 使用EventBus的`on`方法来添加事件名
  - 2. 使用EventBus的`emit`方法将值传递给对应事件名

```javascript 
// ./utils/event-bus.js

import { HYEventBus } from "hy-event-store"

const eventBus = new HYEventBus()

export default eventBus


// ./EventBus.jsx

import React from "react";
import Home from "./Home";
import eventBus from './utils/event-bus'


export default class EventBus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "kobe",
        age: 30,
        height: 180
    }
  }


  bannerPrevClick(info) {
    console.log("app中监听到bannerPrev", info)
  }

  bannerNextClick(name, age, height) {
    console.log("app中监听到bannerNext", name, age, height)
    this.setState({ name, age, height })
  }

  componentDidMount() {
    eventBus.on('bannerPrev', this.bannerPrevClick,this)
    eventBus.on('bannerNext', this.bannerNextClick,this)
  }



  render() {
    const { name,age,height } = this.state
    return (
      <div>
        <h1>EventBus: Component: {name}-{age}-{height}</h1>
        <Home />
      </div>
    );
  }
}

// ./HomeBanner.jsx

import React from "react";
import eventBus from './utils/event-bus'

export default class HomeBanner extends React.Component {


    prevClick(){
        console.log('上一个')
        eventBus.emit('bannerPrev', {nickname: "kobe", level: 99})
    }

    nextClick(){
        console.log('下一个')
        eventBus.emit('bannerNext', 'james', 35, 190)
    }


    render() {
        return (
            <div>
                <h1>HomeBanner</h1>
                <button onClick={() => this.prevClick()}>上一个</button>
                <button onClick={() => this.nextClick()}>下一个</button>
            </div>
        );
    }
}
```

## 六、React中插槽实现

### 1. 普通插槽
- **介绍： react中并没有类似Vue的插槽**
  - 1. react将要传入的DOM或者组件嵌套在组件标签中
  - 2. 在被使用组件中`props`中获取`children`，children为数组，对应索引就是刚才传入的DOM或者组件，直接从`children`中取出并渲染。

```javascript
// ./Slot.jsx

import React from "react";
import NavBar from "./nav-bar";
import NavBarTwo from "./nav-bar-two";

export default class Slot extends React.Component {
    render() {
        const btn = <button>按钮2</button>;
        return (
            <div>
                <NavBar>
                    <button>按钮</button>
                    <h2>哈哈哈</h2>
                    <i>斜体文本</i>
                </NavBar>

                <NavBarTwo left={btn} center={<h2>hehehe</h2>} right={<i>微软雅黑</i>} />
            </div>
        )
    }
}

// ./nav-bar/index.jsx
import React from "react";
import styled from './styled.module.css'

export default class NavBar extends React.Component {
    render(){
        const { children } = this.props
        return(
            <div className={styled.navBar}>
                <div className={styled.left}>{children[0]}</div>
                <div className={styled.center}>{children[1]}</div>
                <div className={styled.right}>{children[2]}</div>
            </div>
        )
    }
}
```

### 2. 作用域插槽

```javascript

```