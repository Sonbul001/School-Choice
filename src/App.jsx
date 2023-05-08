import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Navbar'>
        <HomePage/>
      </div>
      
    </div>
  )
}

export default App
