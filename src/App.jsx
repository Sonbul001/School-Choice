import HomePage from './pages/HomePage/HomePage'
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignUpPage/SignUp'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  

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
