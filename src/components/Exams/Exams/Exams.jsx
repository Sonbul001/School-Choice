import React from "react";
import Exam from "../Exam/Exam";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Exams.css";

export default function Exams(props) {
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
	const itemsPerPage = 5;
	useEffect(() => {
		setTotalPages(Math.ceil(props.exams.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = props.exams.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const [openExam, setOpenExam] = useState("");

	const handleExamClick = (examName) => {
		setOpenExam(examName);
	};

	return (
		<div>
			<div className="admins-pagination-exams">
				{subset.map((exam, index) => (
					<div key={index}>
						<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} />
					</div>
				))}
			</div>
			<ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />
		</div>
	);
}
