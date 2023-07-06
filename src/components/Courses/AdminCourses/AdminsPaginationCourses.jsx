import Carousel from "../../Exams/Carousel/Carousel";
import Course from "../Course/Course";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import { faPenToSquare, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./AdminsPaginationCourses.css";
import AddCoursePopup from "../../AdminsDashboardCourses/AddCoursePopup/AddCoursePopup";

export default function AdminsPaginationCourses(props) {
	// const [course, setCourse] = useState({ courseName: "", about: "", objectives: "", learningOutcomes: "", duration: "", courseLink: "", schoolType: "", coursePrice: 0, courseProvider: "", courseLocation: "", grade: props.grade });
	const courses = [
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 1",
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
			courseName: "course 2",
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
			courseName: "course 3",
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
			courseName: "course 4",
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
			courseName: "course 5",
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
			courseName: "course 6",
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
			courseName: "course 7",
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
			courseName: "course 8",
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
			courseName: "course 9",
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
			courseName: "course 10",
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
	library.add(faPenToSquare, faBan);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [showPopupIndex, setShowPopupIndex] = useState(-1);
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

	const handleCourseClick = (courseName) => {
		setOpenCourse(courseName);
	};

	const handleDeleteCourse = (courseName) => {
		console.log(courseName);
	};

	const openClosePopup = (index) => {
		setShowPopupIndex(showPopupIndex === index ? -1 : index);
	};

	return (
		<div>
			<div className="admins-pagination-courses">
				{subset.map((course, index) => (
					<div key={index}>
						<div className="admins-pagination-courses-edit-popup">{showPopupIndex === index && <AddCoursePopup openClosePopup={() => openClosePopup(index)} grade={props.grade} course={course} index={index} />}</div>
						<FontAwesomeIcon className="admins-pagination-courses-edit-button" icon="pen-to-square" onClick={() => openClosePopup(index)} />
						<FontAwesomeIcon className="admins-pagination-courses-delete-button" icon="fa-solid fa-ban" onClick={() => handleDeleteCourse(course.courseName)} />
						<Course key={index} course={course} onCourseClick={handleCourseClick} openCourse={openCourse} />
					</div>
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
