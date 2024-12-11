# 数组类型

## 基本使用

- 第一种写法

```Typescript
let arr:number[]=[1,2]
```

- 第二种写法，泛型写法

```Typescript
let arr:Array<number>=[1,2]

let arr1:Array<number|string>=[1,'2']
```

- TS 推导类型，如果数组变量不定义任何类型，或者定义为`[]`，TS 将推导出`any[]`类型

```Typescript
let arr:[] //any[]

const arr1=[] // any[]

const arr2=[1] // number[]

const arr3=['2'] // string[]
```

- 联合数组类型

```Typescript
let arr:(string|number)[]=['1',2] //数组里面，既可以是字符串类型，也可以是数字类型
```

- 只读数组类型

```Typescript
// 第一种写法
let arr: readonly number[]=[1,2]
arr.push(3)   // 报错：类型“readonly [number]”上不存在属性“push”
delete arr[0] // 报错："delete" 运算符的操作数不能是只读属性
arr[0]=3      // 报错：无法为“0”赋值，因为它是只读属性。
arr=[1,2,3]   // 不报错

// 第二种写法
let arr2: ReadonlyArray<number>=[1,2]

// 第三种写法
let arr3: Readonly<number[]>=[0,1]

// 第四种写法 const 断言
const arr4=[0,1] as const
```

只读数组类型，只能读，不能修改、删除、新增；但是如果重新赋值是可以的。

- 多维数组
  TypeScript 使用 T[][]的形式，表示二维数组，T 是最底层数组成员的类型。

```Typescript
const  multi:number[][] =
  [[1,2,3], [23,24,25]];
```

上面示例中，变量 multi 的类型是 number[][]，表示它是一个二维数组，最底层的数组成员类型是 number。

## 数组类型特点

- 数组类型声明以后，成员数量是不限制的，任何数量成员都可以，也可以是空数组

```Typescript
let arr:number[]=[]
arr=[1]
arr[3]=4
arr.length=2
```

数组成员是可以动态变化的，上示例中，数组增减成员都是可以的。

- `TypeScript` 将`readonly number[]`与`number[]`视为两种不一样的类型，**后者是前者的子类型**。
  这是因为只读数组没有 pop()、push()之类会改变原数组的方法，所以 number[]的方法数量要多于 readonly number[]，这意味着 number[]其实是 readonly number[]的子类型。

```Typescript
  let a1:number[]=[0,1]
  let a2:readonly number[]=a1 //正确
  a1=a2 // 报错
```

上面示例中，子类型`number[]`可以赋值给父类型`readonly number[]`,但是反过来报错。
由于只读数组是数组的父类型，所以它不能代替数组。这一点很容易产生令人困惑的报错。

```Typescript
function getSum(s:number[]){

}
const s1:readonly number[]=[1]
getSum(s1) //报错 类型“readonly number[]”的参数不能赋给类型“number[]”的参数。
```

上面示例中，形参是一个子类型`number[]`，实参是一个父类型`readonly number[]`，父类型不能替代子类型，
这里涉及到**逆变**和**协变**。

- 读取数组成员类型

```Typescript
type Names=string[]
type Name=Names[0] //string
```

上面示例中，类型`Names`是字符串数组类型，那么`Names[0]`返回的类型是`string`。
由于数组成员的索引类型都是`number`，所以读取成员类型也可以写成下面这样：

```Typescript
type Names=(string|number)[]
type Name=Names[number] //string|number
```
