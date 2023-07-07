import Carousel from "../../Exams/Carousel/Carousel";
import Course from "../Course/Course";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Courses.css";

export default function Courses(props) {

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
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
		<div>
			<div className="pagination-courses">
				{subset.map((course, index) => (
					<Course key={index} course={course} onCourseClick={handleCourseClick} openCourse={openCourse} />
				))}
			</div>

			<ReactPaginate previousLabel={"<"} nextLabel={">"} breakLabel={"..."} pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} containerClassName={"pagination-container"} activeClassName={"pagination-active-page"} pageClassName={"pagination-pages"} />
		</div>
	);
}

{
	/* <div style={{ maxWidth: 1360, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
<Carousel show={4}>
  {courses.map((course, index) => (
    <Course key={index} course={course} />
  ))}
</Carousel>
</div> */
}
