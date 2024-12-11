# unknown 类型

## 与 any 类型相似之处

与 any 类型相似之处，所有类型也可以赋值给 unknown 类型，因为它也是顶级类型之一

```Typescript
let x:unknow
x=true //正确
x=42 // 正确
x='hello world' //正确
```

## 与 any 不同之处

- unknown 类型的变量，不能直接赋值给其他类型变量，除了（any 类型和 unknown 类型）

```Typescript
let x: number;
let y: unknown = 123;
x = y; //不能将类型“unknown”分配给类型“number”。
```

- 不能直接调用 unknown 类型变量的方法和属性

```Typescript
let v1: unknown = { a: 1 };
v1.a  //“v1”的类型为“未知”。

let v2: unknown = "hello";
v2.trim()  //v2的类型为未知

let v3:unknown=()=>{}
v3()  //“v3”的类型为“未知”。
```

上面示例中如何 使用`unknown`类型的变量的属性和方法呢，`类型缩小`缩小 unknown 变量的类型范围，确保不会出错

```Typescript
let v1: unknown = { a: 1 };
if(typeof v1 === 'object'){
    (v1 as {a:number}).a
}

let v2: unknown = "hello";
if(typeof v2 === 'string'){
    v2.trim()
}

let v3:unknown=()=>{}
if(typeof v3==='function'){
    v3()
}

let s:unknown='hello world'
if(typeof s==='string'){
    s.length //正确
}
```

上面示例中`v1 as {a:number}`类型断言，告诉 TS 编译器，v1 中断定一定有`{a:number}`类型

- unknown 类型变量能够进行的运算是有限的，只能进行比较运算（运算符`==`、`===`、`!=`、`||`、`&&`、`?`）、
  取反运算符`!`、`typeof`和`instanceof`运算符这几种，其他运算符都会报错。

## unknonw 与其他类型联合或交叉

- unknown 除了与 any 以外, 与其它任何类型组成的`联合类型`最后都是 unknown 类型

```Typescript
type x=unknown|string|number // unknown
type y=unknown|any // any
```

- unknown 与其它任何类型组成的`交叉类型`最后都是其它类型

```Typescript
let x=unknown&string //string
let y=number&unknown // number
```
