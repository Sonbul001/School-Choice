import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import AddTestPopup from "./AddTestPopup/AddTestPopup";
import AdminNavbar from "./AdminsNavbar/AdminNavbar";
import { faCirclePlus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ExamsGrade from "../Exams/ExamsGrade/ExamsGrade";
import "./AdminsExams.css";
import { useState } from "react";

const examGrades = [
	{
		grade: "Grade 1",
	},
	{
		grade: "Grade 2",
	},
	{
		grade: "Grade 3",
	},
];

function AdminTestsDashboard() {
	library.add(faCirclePlus, faSquarePlus);

	const [showPopup, setShowPopup] = useState(false);
	const [selected, setSelected] = useState(null);

	const openClosePopup = (index) => {
		setShowPopup(!showPopup);
		setSelected(index);
	};

	return (
		<div className="Exams--page">
			<div className="admin-side-navbar">
				<AdminNavbar page="tests" />
			</div>
			<div className="exams-add-button">
				<div style={{ marginBottom: 50 }} className="exams--page--exam--grade--Exams">
					{examGrades.map((examGrade, index) => (
						<div key={index} className="exams-grade">
							<ExamsGrade grade={examGrade.grade} />
							<div>
								<FontAwesomeIcon onClick={() => openClosePopup(index)} className="add-test-button" icon={["fa", "square-plus"]} />
							</div>
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
