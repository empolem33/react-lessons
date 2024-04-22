import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const inc=()=>{
    setCounter(counter + 1)
  }
  const dec=()=>{
    setCounter((counter)=>counter-2 )
  }
  return (
    <>
      <h1>React course</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={inc}>Add value</button>{" "}
      <button onClick={dec}> remove value</button>
      <p>footer:{counter} </p>

    </>
  )
}

export default App
