import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import CoursesPageHeader from "./CoursesPageHeader/CoursesPageHeader";
import CoursesGrade from "./CoursesGrade/CoursesGrade";
import CourseSearchBar from "./CourseSearchBar/CourseSearchBar";
import Footer from "../Footer/Footer";
import Course from "./Course/Course";
import "./CoursesPage.css";

function CoursesPage() {
	const [onSearch, setOnSearch] = useState("");
	const [courses, setCourses] = useState([]);
	const [returnedSearch, setReturnedSearch] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/courses/search/${onSearch}`)
			.then((response) => response.json())
			.then((data) => setReturnedSearch(data))
			.catch((error) => console.error(error));
	}, [onSearch]);

	useEffect(() => {
		fetch("http://localhost:3000/courses/course")
			.then((response) => response.json())
			.then((data) => setCourses(data))
			.catch((error) => console.error(error));
	}, []);

	const groupedCourses = courses.reduce((result, course) => {
		const classroom = course.classroom;
		if (!result[classroom]) {
			result[classroom] = [];
		}
		result[classroom].push(course);
		return result;
	}, {});

	const courseGrades = Object.keys(groupedCourses).map((classroom) => ({
		grade: classroom,
		courses: groupedCourses[classroom],
	}));

	const handleOnSearch = (searchText) => {
		setOnSearch(searchText);
	};

	return (
		<div className="courses--page">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="header">
				<CoursesPageHeader />
			</div>

			<div className="exams--page--search--bar">
				<CourseSearchBar onSearch={handleOnSearch} />
			</div>

			{returnedSearch.length > 0 ? (
				<div style={{ marginBottom: 50 }} className="courses-page-search-items">
					{returnedSearch.map((course, index) => (
						<Course key={index} course={course} />
					))}
				</div>
			) : (
				<div style={{ marginBottom: 50 }} className="courses--page--course--grade--courses">
					{courseGrades.map((courseGrade, index) => (
						<CoursesGrade key={index} grade={courseGrade.grade} courses={courseGrade.courses} />
					))}
				</div>
			)}

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default CoursesPage;
