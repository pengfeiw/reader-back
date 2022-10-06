# useEffect和useLayoutEffect的区别

### 一.useEffect和useLayoutEffect的执行过程

首先要说明的是，useLayoutEffect和useEffect很像，函数签名也是一样。唯一的不同点就是**useEffect是异步执行，而useLayoutEffect是同步执行**的。
当函数组件刷新（渲染）时，包含useEffect的组件整个运行过程如下：

1. 触发组件重新渲染（通过改变组件state或者组件的父组件重新渲染，导致子节点渲染）。

2. 组件函数执行。
3. 组件渲染后呈现到屏幕上。
4. `useEffect` hook执行。

当函数组件刷新（渲染）时，包含useLayoutEffect的组件整个运行过程如下：

1. 触发组件重新渲染（通过改变组件state或者组件的父组件重新渲染，导致子组件渲染）。

2. 组件函数执行。
3. `useLayoutEffect` hook执行, React等待useLayoutEffect的函数执行完毕。
4. 组件渲染后呈现到屏幕上。

useEffect异步执行的优点是，react渲染组件不必等待useEffect函数执行完毕，造成阻塞。

**百分之99的情况，使用useEffect就可以了，唯一需要用到useLayoutEffect的情况就是，在使用useEffect的情况下，我们的屏幕会出现闪烁的情况（组件在很短的时间内渲染了两次）。**

例如，下面的代码，组件就会渲染两次。
```tsx
import ReactDom from "react-dom";
import React, {useEffect, useLayoutEffect, useState} from "react";
const App = () => {
    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);
    console.log("render", value);
    return (
        <div onClick={() => setValue(0)}>
            value: {value}
        </div>
    );
};
ReactDom.render(
    <App />,
    document.getElementById("root")
);
```
上面的代码，如果使用useEffect，当你点击div时，会出现短暂的闪烁，屏幕上会先出现0，然后出现useEffect中设定的数字，但是使用useLayoutEffect则不会出现闪烁的情况。

### 二.使用useRef获得组件前一个状态
了解了useEffect的执行过程，我们可以通过useRef获得组件上一个状态的state和props，请看下面的例子：
```tsx
function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(1); // 组件前一个状态
    // useEffect会在组件函数执行后，在执行
    useEffect(() => {
        prevCountRef.current = count;
    });
    
    // 这一句会在useEffect函数执行前执行
    const prevCount = prevCountRef.current;
    return (
        <div>
            <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count => count + 1)}>click</button>
        </div>
    );
}
```

因为useEffect会在组件函数执行之后执行，所以preCountRef会存储之前的值。



(完)