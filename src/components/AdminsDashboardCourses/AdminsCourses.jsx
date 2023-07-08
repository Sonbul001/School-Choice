import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import AddCoursePopup from "./AddCoursePopup/AddCoursePopup";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import { faCirclePlus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import CoursesGrade from "../Courses/CoursesGrade/CoursesGrade";
import "./AdminsCourses.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function AdminCoursesDashboard() {
	library.add(faCirclePlus, faSquarePlus);

	const [showPopup, setShowPopup] = useState(false);
	const [selected, setSelected] = useState(null);
	const [courses, setCourses] = useState([]);

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

	const openClosePopup = (index) => {
		setShowPopup(!showPopup);
		setSelected(index);
	};

	return (
		<div className="Exams--page">
			<div className="admin-side-navbar">
				<AdminNavbar page="courses" />
			</div>
			<div className="exams-add-button">
				<div style={{ marginBottom: 50 }} className="exams--page--exam--grade--Exams">
					{courseGrades.map((courseGrade, index) => (
						<div key={index} className="exams-grade">
							<div>
								<Button className="add-Course" variant="primary" onClick={() => openClosePopup(index)}>
									Add Course
								</Button>
							</div>
							{/* <CoursesGrade key={index} grade={courseGrade.grade} courses={courseGrade.courses} /> */}
							<CoursesGrade key={index} grade={courseGrade.grade} courses={courseGrade.courses} user="admin" />
							<div className="exams-popup">{showPopup && selected === index ? <AddCoursePopup openClosePopup={() => openClosePopup()} grade={courseGrade.grade} /> : null}</div>
						</div>
					))}
				</div>
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default AdminCoursesDashboard;
