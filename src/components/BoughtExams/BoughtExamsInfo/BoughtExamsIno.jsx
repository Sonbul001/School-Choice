//This Should contain collection of all Saved Courses
import React, { useEffect, useState } from "react";
import Exam from "../../Exams/Exam/Exam";
import ReactPaginate from "react-paginate";
import "./BoughtExamInfo.css";

export default function BoughtExamInfo(props) {
	const [boughtExams, setBoughtExams] = useState([]);

	useEffect(() => {
		const getBoughtExams = async () => {
			try {
				const response = await fetch("http://localhost:3000/applicants/bought-exams", {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				});
				if (response.status != 401) {
					const data = await response.json();
					setBoughtExams(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};

		getBoughtExams();
	}, []);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const itemsPerPage = 5;
	useEffect(() => {
		setTotalPages(Math.ceil(boughtExams.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = boughtExams.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const [openExam, setOpenExam] = useState("");

	const handleExamClick = (examName) => {
		setOpenExam(examName);
	};

	return (
		<div className="savedTests--container">
			<h2>Bought Exams</h2>
			<div className="pagination-courses" style={{ marginBottom: "20px" }}>
				{subset.map((exam, index) => (
					<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} />
				))}
			</div>
			{boughtExams.length > 5 && <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />}
		</div>
	);
}
