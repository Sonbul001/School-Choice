import React from "react";
import Exam from "../Exam/Exam";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Exams.css";

export default function AdminsPaginationExams(props) {
	const exams = [
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 1",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 2",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 3",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 4",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 5",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 6",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 7",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 8",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 9",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "Exam 10",
			description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			subject: "English",
			link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			price: 0,
		},
		// Add more exam objects as needed
	];

	library.add(faPenToSquare, faBan);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
	const itemsPerPage = 5;

	useEffect(() => {
		setTotalPages(Math.ceil(exams.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = exams.slice(startIndex, endIndex);

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
