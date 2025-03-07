# useDeferredValue

`useDeferredValue`是一个 React Hook，可以让你延迟更新 UI 的某些部分。

```js
const deferredValue = usDeferredValue(value);
```

`useDeferredValue`主要用于性能优化，当组件中使用`useDeferredValue`返回值，并且组件又有大量渲染导致页面卡顿，
当页面重新渲染时，`useDeferredValue`会仍然返回旧值，并在后台使用新值重新渲染，但第二次渲染时发现性能不够，会
仍然返回旧值渲染，直到有空闲时间时，后台才会用新值渲染完成。
