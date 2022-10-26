# Hooks


## 1. useState

### 1.1 介绍useState
1. useState作为React中函数式组件`定义变量`存在，使用useState将需要的变量勾入。
2. 在某个时刻，则使用setState函数来更改这个变量的定义
3. React会根据调用了setState更改值以后，对组件进行重新渲染。


### 1.2 useState使用

```javascript
import React, { memo } from "react";

const UseStateHook = memo(() => {
  const [message, setMessage] = React.useState("This is code for setState");

  const changeMessage = () => {
    setMessage("state change");
  };
  return (
    <div>
      Message: {message}
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
});

export default UseStateHook;
```


## 2. useEffect

### 2.1 介绍：useEffect

1. `useEffect` 用来执行副作用函数。在函数式组件中，**不允许变更、订阅、计时器、日志记录和其他副作用，进一步会影响UI的渲染**。
2. 我们将要执行的副作用都放在useEffect中执行，而useEffect则在DOM挂载结束后执行一次。
3. 一个函数式组件中，可以调用多个useEffect。
4. useEffect参数
   1. 在DOM挂载后执行
   2. 传入第二个参数作为依赖项，依赖项变更时执行
   3. 在useEffect中返回一个函数，则该函数在组件卸载的时候执行
   4. 如果你只想执行在DOM改在执行一段逻辑，那么useEffect第二个参数则写入一个空数组


### 2.2 清除机制-返回回调函数

- `ClearEffectComponent.jsx`: 清除机制-返回回调函数

```javascript
// .ClearEffectComponent.jsx
import React, { memo, useEffect } from "react";

const ClearEffectComponent = memo(() => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    console.log("set effect, store the handler and name it.");

    // return callback function, that will be executed befor component unmount
    return () => {
      console.log("clear effect, clear the handler.");
    };
  });

  return (
    <div>
      <h2>清除机制</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1{counter}</button>
    </div>
  );
});

export default ClearEffectComponent;
```

### 2.3 逻辑分离-多个Effect

- `SplitMultiEffectComponent.jsx`: 逻辑分离-多个Effect

```javascript
// .SplitMultiEffectComponent.jsx
import React, { memo, useEffect } from "react";

const SplitMultiEffectComponent = memo(() => {
  const [counter, setCounter] = React.useState(0);

  // 一个函数式组件中, 可以存在多个useEffect
  useEffect(() => {
    console.log("first effect!");
  });

  useEffect(() => {
    console.log("second effect!");
  });

  useEffect(() => {
    console.log("third effect!");

    return () => {
      console.log("third effect return!");
    };
  });

  return (
    <div>
      SplitMultiEffectComponent
      <button onClick={(e) => setCounter(counter + 1)}>+1{counter}</button>
    </div>
  );
});

export default SplitMultiEffectComponent;
```


### 2.3 执行时机-控制回调执行

- `ControlExecCallback.jsx`: 执行时机-控制回调执行

```javascript
// .ControlExecCallback.jsx
import React, { memo, useEffect } from "react";

const ControlExecCallback = memo(() => {
  const [counter, setCounter] = React.useState(0);
  const [message, setMessage] = React.useState("This is code for setState.");

  useEffect(() => {
    console.log("mirror redux store state");

    return () => {};
  }, [counter]);

  useEffect(() => {
    console.log("mirror eventBus event");
    return () => {};
  }, []);

  useEffect(() => {
    console.log("get dataList from server by axios");

    return () => {
      console.log("unmount, cancel axios request.");
    };
  }, []);
  return (
    <div>
      ControlExecCallback
      <button onClick={(e) => setCounter(counter + 1)}>+1{counter}</button>
      <button onClick={(e) => setMessage("see hello")}>
        修改Message：{message}
      </button>
    </div>
  );
});

export default ControlExecCallback;

```