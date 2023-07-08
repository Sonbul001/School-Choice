import React from "react";
import Exam from "../Exam/Exam";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Exams.css";

export default function Exams(props) {
	const [boughtExams, setBoughtExams] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [currentPage2, setCurrentPage2] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [totalPages2, setTotalPages2] = useState(0);
	const itemsPerPage = 5;

	const examsWithoutPrice = props.exams.filter((exam) => exam.price === 0);
	let examsWithPrice = props.exams.filter((exam) => exam.price > 0);

	useEffect(() => {
		fetch(`http://localhost:3000/applicants/bought-exams`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setBoughtExams(data))
			.catch((err) => console.error(err));
	}, [boughtExams]);
	examsWithPrice = examsWithPrice.filter((exam) => !boughtExams.some((boughtExam) => boughtExam.id === exam.id));

	useEffect(() => {
		setTotalPages(Math.ceil(examsWithoutPrice.length / itemsPerPage));
		setTotalPages2(Math.ceil(examsWithPrice.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const startIndex2 = currentPage2 * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const endIndex2 = startIndex2 + itemsPerPage;
	const subset = examsWithoutPrice.slice(startIndex, endIndex);
	const subset2 = examsWithPrice.slice(startIndex2, endIndex2);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const handlePageChange2 = (selectedPage) => {
		setCurrentPage2(selectedPage.selected);
	};

	const [openExam, setOpenExam] = useState("");

	const handleExamClick = (examName) => {
		setOpenExam(examName);
	};

	return (
		<div>
			<h2 className="exams-exams-title">Free Exams:</h2>
			<div className="admins-pagination-exams">
				{subset.map(
					(exam, index) =>
						exam.price === 0 && (
							<div key={index}>
								<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} />
							</div>
						)
				)}
			</div>
			<ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />
			<h2 className="exams-exams-title">Locked Exams:</h2>
			<div className="admins-pagination-exams">
				{subset2.map(
					(exam, index) =>
						exam.price > 0 && (
							<div key={index}>
								<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} />
							</div>
						)
				)}
			</div>
			<ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages2} onPageChange={handlePageChange2} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />
		</div>
	);
}
