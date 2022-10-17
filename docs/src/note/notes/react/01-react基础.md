# React18

## 一、React入门体验

### class组件使用

- class组件注意点
  - 继承React中`Component`组件
  - 在constructor中执行`super()`以及定义`state`
  - 函数定义及绑定，注意`this`指向
    - 1. 函数定义为箭头函数
    - 2. 使用es6 class Filed
    - 3. 使用`bind`来改变this指向
  - 注意使用`setState()`函数来改变`state`中的值，这样React才可以在数据更改后，重新执行render函数。

- case1 
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

- case2

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

- 函数组件注意点
  - 1. 
  - 2. 
  - 3. 
  - 4. 

- case1

```javascript
export function Counter(){
    const [count,setCount] = useState(0)

    handleClick(){
        setCount(counter+1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}
```

- case2

```javascript
```


### 三、JSX语法

- JSX语法用法
  - 