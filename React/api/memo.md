# memo

`memo`允许你的组件在 `props` 没有改变的情况下跳过重新渲染。接收两个参数：第一个参数是任何有效的组件(函数组件、forward 组件)；第二个是可选参数，是一个函数，接收两个参数，组件前一个 props 和新的 props，返回 boolean 值。
调用 memo 会返回一个新组件被称为`记忆化组件`。

# 基础语法

```React
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

# 注意

记忆化组件只和 props 变化有关，当记忆化组件内 state、context 发生改变，记忆化组件仍然重新渲染。
