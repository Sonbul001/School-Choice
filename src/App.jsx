import DetailedSearchPage from './pages/DetailedSearch/DetailedSearch'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignUpPage/SignUp'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import TestsPage from './pages/Tests/TestsPage'

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
