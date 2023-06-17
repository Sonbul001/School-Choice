import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/LoginPage/Login'
import SignUp from './components/SignUpPage/SignUp'
import DetailedSearchPage from './components/DetailedSearch/DetailedSearch'
import ExamsPage from './components/Exams/ExamsPage'
import SchoolPage from './components/SchoolPage/SchoolPage'
import './App.css'
import CoursesPage from './components/Courses/CoursesPage'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={SchoolPage} />
          <Route path="/login" exact Component={Login} />
          <Route path="/signup" exact Component={SignUp} />
          <Route path="/search" exact Component={DetailedSearchPage} />
          <Route path="/exams" exact Component={ExamsPage} />
          <Route path="/courses" exact Component={CoursesPage} />

          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
