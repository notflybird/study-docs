# useContext

`useContext`是一个 React Hook，可以让我们读取通过`creatContext`创建的<span style="color:rgb(8 126 164);">context</span>

# 用法

useContext(SomeContext)

## 参数

- `SomeContext`是由 createContext 创建的 context。context 本身不包含信息，它只代表你可以提供或从组件中读取的信息类型。

## 返回值

返回组件树中最接近`useContext`调用位置，SomeContext.Provider 的 value 值；如果没有 provider，那么返回值将是创建 context 传递给 createContext 的 defaultValue。返回值始终是新的。如果 context 发生变化，React 会自动重新渲染读取 context 组件。

## 实例

```js
const SomeContext = creatContext("默认值");

function MyApp() {
  return (
    // 此处value还可以传对象和函数
    <SomeContext.Provider value="提供值">
      <Button></Button>
    </SomeContext.Provider>
  );
}

function Button() {
  const contextValue = useContext(SomeContext);

  return <button>{contextValue}</button>;
}
```
