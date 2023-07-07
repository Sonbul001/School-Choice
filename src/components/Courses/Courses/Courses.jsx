import Carousel from "../../Exams/Carousel/Carousel";
import Course from "../Course/Course";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Courses.css";

export default function Courses(props) {
	// const [course, setCourse] = useState({ name: "", about: "", objectives: "", learningOutcomes: "", duration: "", courseLink: "", schoolType: "", coursePrice: 0, courseProvider: "", courseLocation: "", grade: props.grade });
	const courses = [
		{
			logo: "../../../assets/Logo2.png",
			name: "course 1",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 2",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 3",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 4",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 5",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 6",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 7",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 8",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 9",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		{
			logo: "../../../assets/Logo2.png",
			name: "course 10",
			about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum",
			duration: "1 month",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
			startDate: "2021-05-01",
			endDate: "2021-05-30",
		},
		// Add more course objects as needed
	];

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const itemsPerPage = 5;

	useEffect(() => {
		setTotalPages(Math.ceil(courses.length / itemsPerPage));
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = courses.slice(startIndex, endIndex);

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
