# 组件通信之ref
react官方文档中是这样描述的：

> Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

### 一.一个简单的例子

下面我们直接看一个例子说明ref的用法，下面是一个函数组件，使用**useRef**创建ref。

```javascript
const App = () => {
    const myRef = useRef();
    return (
        <div>
            <button onClick={() => myRef.current.focus()}>click</button>
            <input ref={myRef} />
        </div>
    );
}
```
上面代码中的App组件会渲染一个button和一个input，当点击button时，input会获得焦点。从例子中可以得到ref的基本用法：
1. 使用useRef(类组件中使用createRef),创建一个ref(reference)。
2. 将ref绑定到`Dom element`或者`class components`，需要注意的是，**ref不能绑定到function component上**，因为function component并不是一个实例，每次渲染函数组件，仅仅是执行这个函数。
3. 通过ref.current访问，被绑定的dom元素或者class component。

将ref绑定到Dom element时，ref.current就是原生的Dom element，所以可以通过ref.current访问dom native方法，如focus()。将ref绑定到class component时，ref.current就是class组件实例，所以可以通过ref.current访问组件的props、state和methods。再次强调**ref不能绑定到函数组件上**。

### 二.将ref绑定到class component
请看下面的例子：
```javascript
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    increase() {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }
    render() {
        return (
            <div>{this.state.count}</div>
        );
    }
}
const App = () => {
    const myRef = useRef();
    return (
        <div>
            <button onClick={() => myRef.current.increase()}>click</button>
            <Child ref={myRef} />
        </div>
    );
}
```
上面，我们定义了一个Child的类组件，Child的state中有一个Count，并且包含了一个increase方法。在App中我们通过将myRef绑定到Child组件后，我们可以通过myRef.current访问Child的state及方法，所以当我们点击button时，myRef.current.increase()实际执行的是Child的increase方法。

### 三.ref如何绑定函数组件？？？
上面提到，ref是不能绑定到函数组件的，因为渲染函数组件时，并不会产生一个函数组件的instance。那怎么将ref绑定到函数组件呢。有两种情况，可能需要将ref绑定到函数组件：

1. 将ref向下传递，绑定到函数组件内部的原生dom或者class componet。
2. 通过ref访问函数组件中声明的方法或者变量。

这时需要使用forwardRef。故其名，思其义，fowardRef就是将ref向前（向下）传递，通过一个例子说明如何使用：

```javascript
const Child = forwardRef((props, ref) => {
    return (
        <input ref={ref} />
    )
});
const App = () => {
    const myRef = useRef();
    return (
        <div>
            <button onClick={() => myRef.current.focus()}>click</button>
            <Child ref={myRef} />
        </div>
    );
}
```
**forwarRef接受一个函数组件，返回一个新的函数组件，这个新的函数组件，可以被ref绑定，并且函数组件内部可以传递ref**。上面的例子，在child组件内部，将ref重新绑定到&lt;input&gt; 元素上。所以在App中，myRef.current实际上绑定的就是Child组件内的&lt;input&gt; dom元素。

第一个需求已经实现，那第二个呢？如何访问函数组件中定义的函数呢？这个时候需要**`useImperativeHandle` **hook登场了。请看：
```javascript
const Child = forwardRef((props, ref) => {
    const [count, setCount] = useState(1);
    const increase = () => {
        setCount(count + 1);
    };
    // 暴露函数和变量给父组件
    useImperativeHandle(ref, () => ({
        increase,
        count
    }));
    return (
        <div>{count}</div>
    )
});
const App = () => {
    const myRef = useRef();
    const btnClick = () => {
        console.log(myRef.current.count);
        myRef.current.increase();
    }
    return (
        <div>
            <button onClick={btnClick}>click</button>
            <Child ref={myRef} />
        </div>
    );
}
```
上面的代码，通过useImperativeHandle函数，将ref绑定到了第二个参数返回的Object上。所以可以通过myRef访问到Child函数组件中定义的方法及state（当然还包括props）。

### 四.useRef和createRef的区别
通常在函数组件中使用useRef，在类组件中使用createRef，到底是为什么呢？根本的区别在于，createRef总是创建一个新的ref，所以在类组件中使用时，通常将createRef语句放到constructor中。在函数组件中不必使用createRef，这样大大浪费内存且效率低，可以使用useRef代替，在函数组件渲染时（执行组件函数）useRef每次都会返回同样的ref。



（完）