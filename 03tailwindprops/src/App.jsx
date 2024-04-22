import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl bg-green-500 p-3">can touch this</h1>
     <Card username='mm' test='no way' />
    </>
  )
}

export default App