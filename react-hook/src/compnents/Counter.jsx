import React, { useCallback, useEffect, useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    let decrement = () => setCount(count - 1)
    const reset = () => setCount(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`
    });
  return (
    <div>
        <h1>Counter is : {count}</h1>
        <button onClick={() => setCount(count + 5)}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
