import React from "react";
import Exam from "../Exam/Exam";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import AddTestPopup from "../../AdminsDashboardTests/AddTestPopup/AddTestPopup";
import "./AdminsPaginationExams.css";

export default function AdminsPaginationExams(props) {

	library.add(faPenToSquare, faBan);
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

	const handleDeleteExam = (id) => {
		fetch(`http://localhost:3000/exams/exam/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then(response => response.json())
			.then(() => alert('Exam Deleted successfully'))
			.then(() => window.location.reload())
			.catch(err => console.error(err))
	};

	const openClosePopup = (index) => {
		setShowPopupIndex(showPopupIndex === index ? -1 : index);
	};

	return (
		<div>
			<div className="admins-pagination-exams">
				{subset.map((exam, index) => (
					<div key={index}>
						<div className="admins-pagination-exams-edit-popup">{showPopupIndex === index && <AddTestPopup openClosePopup={() => openClosePopup(index)} grade={props.grade} exam={exam} index={index} edit={true} />}</div>
						<FontAwesomeIcon className="admins-pagination-exams-edit-button" icon="pen-to-square" onClick={() => openClosePopup(index)} />
						<FontAwesomeIcon className="admins-pagination-exams-delete-button" icon="fa-solid fa-ban" onClick={() => handleDeleteExam(exam.id)} />
						<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} user='admin'/>
					</div>
				))}
			</div>
			<ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />
		</div>
	);
}
