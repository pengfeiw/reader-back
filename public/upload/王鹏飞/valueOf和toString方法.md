# valueOf()和toString()方法
javascript的Object都有一个默认的值，当你用`alert`打印一个object的时候，会显示这个object的字符串值，将object作为算术运算符（+、-、* ）的操作数时，object也会自动转换成一个**原始值**进行运算。这里的**原始值**即js原始类型（primitive type）:
- String
- Number
- Object
- Boolean
- Number
- Undefined
- Null
- Symbol (es6新增类型)

### 一.valueOf()
在object进行算数运算的时候，object都会提供一个值，这个值就是由valueOf提供。这个值在很多时候用处并不是很大，所以我们常常会忽略掉valueOf()这个函数。
```javascript
const obj1 = {
    value: 3
};

console.log(4 + obj1);

// 打印 4[object Object]
```
上面的代码将会打印`4[object Object]`，表现为字符串的连接操作。如果我们想输出7，就需要利用valueOf方法了。
```javascript
const obj1 = {
    value: 3,
    valueOf: function() {
        return this.value;
    }
};

console.log(4 + obj1);

// 打印 7
```
通过重写valueOf，我们得到结果7。
**综上所述，当对object进行算数运算时，首先会尝试读取object的值，也就是valueOf的返回值，如果我们没有提供valueOf函数，那么会将object转换成字符串，进行字符串操作。** 再看一个例子：
```javascript
const obj1 = { value: 3 };
console.log(4 * obj1);

// 打印 NaN
```
上面的例子会输出NaN，因为obj1既没有实现valueOf函数，乘法运算也不能作用于字符串，所以输出NaN。

拓展： 因为JavaScript不能像C++那样，进行运算符重载，所以可以通过valueOf实现**假运算符重载（fake operator overloading）**。

### 二.toString()
**每当你需要将object转换成字符串形式时，都会调用object的toString方法**。 请看下面的例子：
```javascript
const obj = {
    value: 7,
    toString: function() {
        return "seven";
    }
};

alert(obj);

// alert窗口显示seven
```
因为alert需要一个字符串形式，所以会调用obj的toString方法。再看一个例子：
```javascript
const obj = {
    value: 7,
    toString: function() {
        return "seven";
    },
    valueOf: function() {
        return this.value;
    }
};

console.log(7 + obj);

// 打印14
```
因为再进行算数运算时，获得的是obj的valueOf返回的值，所以输出14。

（完）