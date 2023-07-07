import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import ExamsPageHeader from "./ExamsPageHeader/ExamsPageHeader";
import Exam from "./Exam/Exam";
import ExamSearchBar from "./ExamSearchBar/ExamSearchBar";
import { Card, Button } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import Exams from "./Exams/Exams";
import ExamsGrade from "./ExamsGrade/ExamsGrade";
import Footer from "../Footer/Footer";
import "./ExamsPage.css";
import { useState, useEffect } from "react";

function ExamsPage() {
	const [onSearch, setOnSearch] = useState("");
	const [exams, setExams] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/exams/exam")
			.then((response) => response.json())
			.then((data) => setExams(data))
			.catch((error) => console.error(error));
	}, []);

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

	const handleOnSearch = (searchText) => {
		setOnSearch(searchText);
		console.log(searchText);
	};

	return (
		<div className="Exams--page">
			<div className="navBar">
				<Navbar />
			</div>

			<div className="header">
				<ExamsPageHeader />
			</div>

			<div className="exams--page--search--bar">
				<ExamSearchBar onSearch={handleOnSearch} />
			</div>

			<div style={{ marginBottom: 50 }} className="exams--page--exam--grade--Exams">
				{examGrades.map((examGrade, index) => (
					<ExamsGrade key={index} grade={examGrade.grade} exams={examGrade.exams} />
				))}
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default ExamsPage;
