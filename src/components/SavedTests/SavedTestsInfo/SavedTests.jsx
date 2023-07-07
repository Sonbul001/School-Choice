//This Should contain collection of all Saved Tests
import React, { useEffect, useState } from "react";
import SavedTestInfo from "../SavedTest/SavedTest";
import "./SavedTests.css";
import Exam from "../../Exams/Exam/Exam";
import ReactPaginate from "react-paginate";

export default function SavedTests() {
	const [savedExams, setSavedExams] = useState([]);
	const [recommendedExams, setRecommendedExams] = useState([]);

	useEffect(() => {
		const getSavedExams = async () => {
			try {
				const response = await fetch("http://localhost:3000/applicants/saved-exams", {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				});
				if (response.status != 401) {
					const data = await response.json();
					setSavedExams(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};
		const getRecommendedExams = async () => {
			try {
				const response = await fetch("http://localhost:3000/applicants/recommended-exams", {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				});
				if (response.status != 401) {
					const data = await response.json();
					setRecommendedExams(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};

		getSavedExams();
		getRecommendedExams();
	}, []);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
	const itemsPerPage = 5;
	useEffect(() => {
		setTotalPages(Math.ceil(savedExams.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = savedExams.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const [openExam, setOpenExam] = useState("");

	const handleExamClick = (examName) => {
		setOpenExam(examName);
	};

	return (
		<div className="savedTests--container">
			<h2>Saved Exams</h2>
			<div className="pagination-courses" style={{ marginBottom: "20px" }}>
				{subset.map((exam, index) => (
					<Exam key={index} exam={exam} onExamClick={handleExamClick} openExam={openExam} />
				))}
			</div>
			{savedExams.length > 5 && <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />}
			<div>
				<h2>Recommended Exams</h2>
				<SavedTestInfo exams={recommendedExams} />
			</div>
		</div>
	);
}
