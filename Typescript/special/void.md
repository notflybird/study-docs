# void

void 表示空值，一般用于函数返回值声明类型，虽然也可以给变量声明 void 类型，但是很少使用

## 给变量声明 void 类型

```Typescript
let vz:void
vz=1 // 不能将类型“number”分配给类型“void”
vz='hello world' // 不能将类型“string”分配给类型“void”
vz=true // 不能将类型“boolean”分配给类型“void”
vz=null // 不能将“null”分配给类型“void”
vz=undefined // 不报错
```

上面示例说明，void 类型的变量，只能接收`undefined`

## 函数返回声明 void 类型

```Typescript
function test():void{
    console.log("函数默认返回undefined")
}
function test2():void{
    return undefined
}
// 不能将类型“null”分配给类型“void”。
function test3():void{
    return null
}
```

从上面示例，函数返回值类型是 void 时，只能返回`undefined`;如果函数没有返回值任何值，
函数会隐式返回`undefined`

## void 类型特点

- void 特点之一，调用者不应该依赖该返回值进行操作，例如：

```Typescript
function sayHello():void{
    console.log("hello world")
}

const say=sayHello()
console.log(say) //undefined

// 报错：无法推测`say`真实性
if(say){
    console.log(true)
}else{
    console.log(false)
}
```

- 为了确保 Array.prototype.push 或者 Array.prototype.forEach 等方法期望返回类型是`void`
  函数返回非`undefined`也是可以的

```Typescript
type say = (name: string) => void // 创建一个函数类型，参数为string类型，返回值为void

// 定义一个函数，类型为say
let sayHello: say = (name: string) => {
  console.log(`hello ${name}`)
  return null
}

const res = sayHello('nanjiu')
console.log(res) // null

[1,2].forEach(item=>item*1)
```

这是官方为了适用` Array.prototype.forEach` 这种期望返回 void 类型，而设计的一种类型检查方式，
但需要注意的是，尽管使用类型声明限制函数返回值为 void 时，TS 并不会严格要求函数返回空，但我们还是不能依赖其返回值进行任何操作。
