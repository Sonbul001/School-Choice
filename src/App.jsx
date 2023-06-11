import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/login" exact Component={Login} />
          <Route path="/signup" exact Component={SignUp} />
       </Routes>

      </Router>
      
    </div>
  )
}

export default App
