# useCallback

`useCallback`是一个允许你在多次渲染中缓存函数 React Hook。

# 用法

useCallback(fn,dependencies)

## 参数

- `fn`:想要缓存的函数
- `dependencies`:控制 fn 是否更新的所有响应值的列表；当依赖项时一个空数组时，useCallback 会返回一个稳定的函数引用，不受组件重新渲染影响。

## 返回值

在初次渲染时，`useCallback`返回你已经传入的 fn 函数
在之后的渲染中，如果依赖没有发生改变，`useCallback`返回上次渲染缓存的 fn 函数；否则返回新的缓存 fn 函数。
