# useEffect

`useEffect`是一个 React Hook，是 React 提供的一个“逃生舱”，是 React 高效纯函数式通往副作用的“通道”；它允许你

# 用法

useEffect(setup,dependencies?)

- setup 处理 Effect 的函数，setup 选择性返回一个清理函数。在组件添加到 DOM 后，React 将执行 setup 函数。在每次依赖发生
  变更重新渲染后，React 首先使用旧值执行清理函数，然后使用新值运行 setup 函数。组件销毁时，运行最后一次清楚函数。
- dependencies 依赖项列表，当没有依赖项时，相当于 componentDidUpdate；当依赖项是空数组时，相当于 componentDidMount
  只有组件初始化之后执行一次；当依赖项有值时，依赖项发生变化，组件会重新渲染，setup 函数会执行一次。

## 连接到外部系统

有些组件需要与网络、某些浏览器 API 或第三方库保持连接，当它们显示在页面上时，这些系统不受 React 控制，所以称为`外部
系统`。
要将<span style="color:rgb(8 126 164);">组件与外部某个系统连接</span>，请在组件顶层调用`useEffect`。

```React
import { useEffect, useRef, useState } from "react"

function UseEfefct() {
    const [timeText, setTime] = useState(new Date().toString())
    const [isRumming, setRumming] = useState(false)
    const timer = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isRumming) {
            timer.current = setInterval(() => {
                setTime(new Date().toString())
            }, 1000)
        }
        return () => {
            if (timer.current) {
                clearInterval(timer.current)
            }
        }
    }, [isRumming])


    return (
        <>
            <div>我的时间：{timeText}</div>
            <button onClick={() => setRumming(false)}>暂停时间</button>
            <button onClick={() => setRumming(true)}>开始时间</button>
        </>
    )
}

export default UseEfefct
```

注意：在`开发环境`即使依赖项时空[],setup 和清除函数都会额外运行一次 setup → cleanup → setup，以帮助你发现 bug
