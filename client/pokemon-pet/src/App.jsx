import { useState } from 'react'
import reactLogo from '/Poké_Ball_icon.svg.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Poké Ranch</h1>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Let's start
        </button>
      </div>
    </>
  )
}

export default App
