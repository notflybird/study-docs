# any 类型

any 类型表示没有任何含义，该类型的变量可以被赋予任何类型，因为他是所有类型的顶层类型

```Typescript
let x:any
x=1
x='foo'
x=true
```

## 类型推断问题

Typescript 会自己推导没有定义类型的变量，如果无法推导出类型，默认会是 any 类型

```Typescript
function add(x,y){
    return x+y
}
add(1,[1,2])//不报错
```

上面示例中，函数`add`的参数变量`x`和`y`都没有足够的信息，会推导出是 any 类型
导致 TS 检测不会报错，所以对于哪些类型不明确的变量，一定要声明类型，防止被推到出`any`
Typescript 提供了一个编辑选项 noImplicitAny，当选项为 true 时，只要推导出 any 类型就报错。

```Typescript
let x //不报错
var y // 不报错
```

上面示例中，即使开启`noImplicitAny`也不会报错

```Typescript
const x;// 报错
```

`const`定义一个常量，必须要赋值的

## 污染问题

```Typescript
let x:any='hellow'
let y:number
y=x //不报错
y*123//不报错
```

上面示例 Typescript 检查不会报错，但是运行时会报错
