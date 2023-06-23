import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUpPage/SignUp";
import DetailedSearchPage from "./components/DetailedSearch/DetailedSearch";
import AppliedSchools from "./components/SavedSchools/SavedSchools";
import ExamsPage from "./components/Exams/ExamsPage";
import SchoolPage from "./components/SchoolPage/SchoolPage";
import "./App.css";
import CoursesPage from "./components/Courses/CoursesPage";
import AdminsExamsDashboard from "./components/AdminsDashboardTests/AdminsExams";
import AdminsCoursesDashboard from "./components/AdminsDashboardCourses/AdminsCourses";
import SchoolCard from "./components/AdminsDashboardSchools/SchoolCard/SchoolCard";
import AddSchoolPopup from "./components/AdminsDashboardSchools/AddSchoolPopup/AddSchoolPopup";
import AdminsSchools from "./components/AdminsDashboardSchools/AdminsSchools";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" exact Component={HomePage} />
					<Route path="/login" exact Component={Login} />
					<Route path="/signup" exact Component={SignUp} />
					<Route path="/search" exact Component={DetailedSearchPage} />
					<Route path="/exams" exact Component={ExamsPage} />
					<Route path="/courses" exact Component={CoursesPage} />
					<Route path="/admins/tests" exact Component={AdminsExamsDashboard} />
					<Route path="/admins/courses" exact Component={AdminsCoursesDashboard} />
					<Route path="/appliedSchools" exact Component={AppliedSchools} />
					<Route path="/school" exact Component={SchoolPage} />
					<Route path="/admins/schools" exact Component={AdminsSchools} />
					<Route path="/admins/schoolsCard" exact Component={SchoolCard} />
					<Route path="/admins/addSchool" exact Component={AddSchoolPopup} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
