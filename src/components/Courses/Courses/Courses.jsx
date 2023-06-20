import Carousel from "../../Exams/Carousel/Carousel";
import Course from "../Course/Course";

export default function Courses(props) {
	const courses = [
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 1",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 2",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 3",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 4",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 5",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 6",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 7",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 8",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 9",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		{
			logo: "../../../assets/Logo2.png",
			courseName: "course 10",
			courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
			schoolType: "International",
			coursePrice: 0,
			courseProvider: "Udemy",
			courseLocation: "Online",
		},
		// Add more course objects as needed
	];

	return (
		<div style={{ maxWidth: 1360, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
			<Carousel show={5}>
				{courses.map((course, index) => (
					<Course key={index} logo={course.logo} courseLink={course.courseLink} courseName={course.courseName} schoolType={course.schoolType} coursePrice={course.coursePrice} courseProvider={course.courseProvider} courseLocation={course.courseLocation} />
				))}
			</Carousel>
		</div>
	);
}
