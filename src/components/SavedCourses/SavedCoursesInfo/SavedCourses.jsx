//This Should contain collection of all Saved Courses
import React, { useEffect, useState } from "react";
import SavedCourseInfo from "../SavedCourse/SavedCourse";
import "./SavedCourses.css";
import Course from "../../Courses/Course/Course";
import ReactPaginate from "react-paginate";

export default function SavedCourses(props) {
	const [savedCourses, setSavedCourses] = useState([]);
	const [recommendedCourses, setRecommendedCourses] = useState([]);

	useEffect(() => {
		const getSavedCourses = async () => {
			try {
				const response = await fetch("http://localhost:3000/applicants/saved-courses", {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				});
				if (response.status != 401) {
					const data = await response.json();
					setSavedCourses(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};
		const getRecommendedCourses = async () => {
			try {
				const response = await fetch("http://localhost:3000/applicants/recommended-courses", {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				});
				if (response.status != 401) {
					const data = await response.json();
					setRecommendedCourses(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};

		getSavedCourses();
		getRecommendedCourses();
	}, []);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
	const itemsPerPage = 5;

	useEffect(() => {
		setTotalPages(Math.ceil(savedCourses.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = savedCourses.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const [openCourse, setOpenCourse] = useState("");

	const handleCourseClick = (name) => {
		setOpenCourse(name);
	};

	return (
		<div className="savedCourses--container">
			<h2>Saved Courses</h2>
			<div className="pagination-courses" style={{ marginBottom: "20px" }}>
				{subset.map((course, index) => (
					<Course key={index} course={course} onCourseClick={handleCourseClick} openCourse={openCourse} />
				))}
			</div>
			{savedCourses.length > 5 && <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />}
			<div>
				<h2>Recommended Courses</h2>
				<SavedCourseInfo courses={recommendedCourses} />
			</div>
		</div>
	);
}
