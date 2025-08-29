import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>This React App is to set up different pipelines for a react project to run successfully</h1>

       <button onClick={() => setCount((count) => count + 1)}>Count : {count}</button>
         
    </>
  )
}

export default App
