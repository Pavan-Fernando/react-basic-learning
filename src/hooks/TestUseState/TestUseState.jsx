import React, { useState } from 'react'

function TestUseState() {

    const [testUseState, setTestUseState] = useState(0);
    const [count, setCount] = useState(0);

    const handleOnclick = () => {
        setTestUseState(5);
    }

    const handlePlusOnclick = () => {
        setCount(count + 1);
    }

    const handleMinusOnclick = () => {
        setCount(count - 1);
    }


  return (
    <div>
      <button onClick={handleOnclick}>Click Me</button>
      <p>{testUseState}</p>

      <br />
      <h2>Counter</h2>
      <button onClick={handleMinusOnclick}>-</button>
      <button onClick={handlePlusOnclick}>+</button>
      <p>{count}</p>
      
    </div>
  )
}

export default TestUseState
