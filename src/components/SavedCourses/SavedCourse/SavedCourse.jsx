//Course + Course Info
import React from "react";
import CourseInfo from "../CourseInformation/CourseInfo";
import Course from "../../Courses/Course/Course";
import ReactPaginate from "react-paginate";
import "./SavedCourse.css";
import { useState, useEffect } from "react";

export default function SavedCourseInfo(props) {
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
	const itemsPerPage = 5;

	useEffect(() => {
		setTotalPages(Math.ceil(props.courses.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = props.courses.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const [openCourse, setOpenCourse] = useState("");

	const handleCourseClick = (name) => {
		setOpenCourse(name);
	};

	return (
		<div className="course--component--container">
			<div className="pagination-courses" style={{ marginBottom: "20px" }}>
				{subset.map((course, index) => (
					<Course key={index} course={course} onCourseClick={handleCourseClick} openCourse={openCourse} />
				))}
			</div>
			{props.courses.length > 5 && <ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />}
		</div>
	);
}
