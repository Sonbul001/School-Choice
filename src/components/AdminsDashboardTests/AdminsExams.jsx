import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import AddTestPopup from "./AddTestPopup/AddTestPopup";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import { faCirclePlus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ExamsGrade from "../Exams/ExamsGrade/ExamsGrade";
import "./AdminsExams.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

function AdminTestsDashboard() {
	library.add(faCirclePlus, faSquarePlus);

	const [showPopup, setShowPopup] = useState(false);
	const [selected, setSelected] = useState(null);
	const [exams, setExams] = useState([]);

	const openClosePopup = (index) => {
		setShowPopup(!showPopup);
		setSelected(index);
	};

	const groupedExams = exams.reduce((result, exam) => {
		const classroom = exam.classroom;
		if (!result[classroom]) {
			result[classroom] = [];
		}
		result[classroom].push(exam);
		return result;
	}, {});

	const examGrades = Object.keys(groupedExams).map((classroom) => ({
		grade: classroom,
		exams: groupedExams[classroom],
	}));

	useEffect(() => {
		fetch("http://localhost:3000/exams/exam")
			.then((response) => response.json())
			.then((data) => setExams(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="Exams--page">
			<div className="admin-side-navbar">
				<AdminNavbar page="tests" />
			</div>
			<div className="exams-add-button">
				<div style={{ marginBottom: 50 }} className="exams--page--exam--grade--Exams">
					{examGrades.map((examGrade, index) => (
						<div key={index} className="exams-grade">
							<div>
								<Button className="add-test" variant="primary" onClick={() => openClosePopup(index)}>
									Add Test
								</Button>
							</div>
							<ExamsGrade grade={examGrade.grade} user="admin" exams={examGrade.exams}/>
							<div className="exams-popup">{showPopup && selected === index ? <AddTestPopup openClosePopup={() => openClosePopup()} grade={examGrade.grade} /> : null}</div>
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

export default AdminTestsDashboard;
