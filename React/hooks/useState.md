# useState

`useState`是一个 React Hook，它允许你向组件添加一个状态变量。

## 基础语法

```React
const [state, setState] = useState(initialState)
```

### set 函数，例如 setState(nextState)

- nextState 参数，你想要更新的 state 的值；如果 state 是一个对象，你想更新这个对象某个属性，那么 nextState 必须是一个全新的对象，使其对象引用地址不在是原来的地址，否则函数组件无法重新渲染。

## 注意事项

- useState 状态更新是**异步**的 不会立即更新状态，状态更新后会触发组件重新渲染，新的值才会反映在 state 中。
- useState 只能在 组件的顶层 或自己的 Hook 中调用它。你不能在循环或条件语句中调用它。

## 举例

```React
import {useState} from "react"
function Count(){
    [count,setState]=useState
    const addHandle=()=>{
        setState(x=>x+1)
    }
    return(
        <button onClick={addHandle}>{count}</button>
    )
}
```

点击按钮后发生的流程如下：

1. 用户触发事件（点击按钮），这会导致 onClick 事件处理函数被调用。
2. 在事件处理函数内部，setCount(x => x + 1)被调用。这是一个异步操作，它告诉 React 需要更新状态，但不会立刻执行。
3. React 批量处理所有的状态更新，并计算出一个新的状态值。在这个过程中，React 可能会合并多个状态更新，以提高性能。
4. 状态更新被计划好之后，React 会开始准备重新渲染组件。此时，组件函数会被重新执行，使用最新的状态值（即更新后的 count）来生成新的虚拟 DOM。
5. 在重新执行组件函数期间，useState 返回的 count 将是更新后的最新值。
6. React 比较新旧虚拟 DOM 树，确定实际 DOM 需要进行哪些更改以反映新的 UI 状态。
7. 最后，React 更新浏览器中的实际 DOM，用户界面随之更新，显示新的 count 值。

## 所谓的“React 会将这个更新动作安排到下一次渲染中”

当你说“React 会将这个更新动作安排到下一次渲染中”，这意味着 React 并不会立即改变状态并重新渲染组件。相反，它会计划一个状态更新，并在合适的时机执行以下步骤：

1. **排队更新**：当你调用 setState（例如 setCount）时，React 会把这次状态更新放入一个队列中。
2. **批量处理**：为了优化性能，React 可能会等待一段时间，将同一事件循环中的多个状态更新合并成一个更新操作。
3. **准备重新渲染**：一旦确定要进行更新，React 会使用最新的状态值来准备重新渲染受影响的组件。
4. **重新执行函数组件**：在这个阶段，函数组件实际上会被重新执行，以根据新的状态计算出新的虚拟 DOM 树。
5. **Diff 算法**：React 接着会比较新旧虚拟 DOM 树，找出差异。
6. **实际 DOM 更新**：最后，React 仅更新实际 DOM 中发生变化的部分。

## 函数式更新状态

如果新的状态基于之前的旧状态计算得来的，可以用函数式更新函数更新状态，它将接收之前的状态，返回新的状态

```React
import { Button } from 'antd'
import { useState } from 'react'

function UserState() {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(c => c + 1) // setCount(count + 1)
        setCount(c => c + 1) // setCount(count + 1)
        setCount(c => c + 1) // setCount(count + 1)
    }
    return (
        <>
            <div>增加的数量：{count}</div>
            <br />
            <Button type="primary" onClick={clickHandler}>点击</Button>
        </>
    )
}

export default UserState
```

连续点击`点击`按钮，clickHandler 函数里面的`setCount`执行多个，结果是`3`;
`c=>c+1`是更新函数，接收之前的状态，计算更新返回新状态。
React 将更新函数放入`队列`中，然后，在下一次渲染期间，它将按照相同的顺序调用它们：

1. c => c + 1 将接收 0 作为待定状态，并返回 1 作为下一个状态。
2. c => a + 1 将接收 1 作为待定状态，并返回 2 作为下一个状态。
3. c => c + 1 将接收 2 作为待定状态，并返回 3 作为下一个状态。

现在没有其他排队的更新，因此 React 最终将存储 3 作为当前状态。
结论：正印证了上面所说的“React 批量处理所有的状态更新，计划最终的更新状态”

```React
import { Button } from 'antd'
import { useState } from 'react'

function UserState() {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    return (
        <>
            <div>增加的数量：{count}</div>
            <br />
            <Button type="primary" onClick={clickHandler}>点击</Button>
        </>
    )
}

export default UserState
```

点击`点击`按钮，结果是 1；这是因为 set 函数不会改变正在执行的代码状态，它只影响下一次渲染中`useState`返回的内容。而`更新函数`，React 将把你的更新函数放入队列中并重新渲染组件。在下一次渲染期间，React 将通过把队列中`所有更新函数`应用于先前的状态来计算下一个状态

## 更新状态中的对象或数组

在 React 中状态被认为是只读的，如果你想响应式更新页面，你应该替换它而不是改变现有的对象

## 避免重复创建初始状态

```React
function UserState() {
    const createInitial = () => {
        console.log("我走这里了吗")
        return 5
    }

    const [count2, setCount2] = useState(createInitial())
    return (
        <>
            <div>增加数量：{count2}</div>
            <Button type="primary" onClick={() => setCount2(count2 + 1)}>相加</Button>
        </>
    )
}
```

React 只在初次渲染时保存初始化状态，后续渲染时将其忽略。尽管 createInitial()的结果仅用于初始渲染，但你仍然在每次渲染时，调用此函数，这可能会造成浪费。

**解决方法：**useState 初始化时，不调用函数，而是直接传`函数本身`，例如：

```React
function UserState() {
    const createInitial = () => {
        console.log("我走这里了吗")
        return 5
    }

    const [count2, setCount2] = useState(createInitial)
    return (
        <>
            <div>增加数量：{count2}</div>
            <Button type="primary" onClick={() => setCount2(count2 + 1)}>相加</Button>
        </>
    )
}
```
