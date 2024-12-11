# never 类型

never 类型是 Typescript 最`底层类型`，所以 never 类型的变量，可以赋值给其他任何类型的变量。
但是 never 类型的变量不能接收其他类型的变量(除了 never 类型)，即使 any，unknown 类型变量也不能赋值给 never 类型，它表示一个永远不会发生的值的类型，即不可能存在的类型，没有值的类型。

- 函数抛出异常

```Typescript
function x():never{
    throw new Error("error");
}
```

- 无限死循环

```Typescript
while(true){

}
```

- 条件语句永远不会执行的分支

```Typescript
function fn(x:string|number) {
  if (typeof x === 'string') {
    // ...
  } else if (typeof x === 'number') {
    // ...
  } else {
    x; // never 类型
  }
}
```
