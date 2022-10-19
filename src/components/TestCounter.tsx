import React, { useState } from 'react'

export const TestCounter = () => {
  const [count, setCount] = useState(0)

  const increase = () => setCount((prev) => prev + 1)
  const decrease = () => setCount((prev) => prev - 1)

  return (
    <div>
      <h3>Test Counter</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
