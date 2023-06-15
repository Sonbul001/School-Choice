
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/LoginPage/Login'
import SignUp from './components/SignUpPage/SignUp'
import DetailedSearchPage from './components/DetailedSearch/DetailedSearch'
import TestsPage from './components/Tests/TestsPage'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/login" exact Component={Login} />
          <Route path="/signup" exact Component={SignUp} />
          <Route path="/search" exact Component={DetailedSearchPage} />
          <Route path="/tests" exact Component={TestsPage} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
