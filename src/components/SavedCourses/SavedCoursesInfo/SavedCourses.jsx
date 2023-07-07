//This Should contain collection of all Saved Courses
import React, { useEffect, useState } from "react";
import SavedCourseInfo from "../SavedCourse/SavedCourse";
import "./SavedCourses.css";

export default function SavedCourses(props) {
	const [savedCourses, setSavedCourses] = useState([]);
	const [recommendedCourses, setRecommendedCourses] = useState([]);

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

	// useEffect(() => {
	// 	const getSavedCourses = async () => {
	// 		try {
	// 			const response = await fetch("http://localhost:3000/applicants/saved-courses", {
	// 				headers: {
	// 					Authorization: "Bearer " + localStorage.getItem("token"),
	// 				},
	// 			});
	// 			if (response.status != 401) {
	// 				const data = await response.json();
	// 				setSavedCourses(data);
	// 			} else {
	// 				throw new Error("Unauthorized");
	// 			}
	// 		} catch (error) {
	// 			console.error("Error:", error);
	// 			alert("Failed to fetch data from the server.");
	// 		}
	// 	};
	// 	const getRecommendedCourses = async () => {
	// 		try {
	// 			const response = await fetch("http://localhost:3000/applicants/recommended-courses", {
	// 				headers: {
	// 					Authorization: "Bearer " + localStorage.getItem("token"),
	// 				},
	// 			});
	// 			if (response.status != 401) {
	// 				const data = await response.json();
	// 				setRecommendedCourses(data);
	// 			} else {
	// 				throw new Error("Unauthorized");
	// 			}
	// 		} catch (error) {
	// 			console.error("Error:", error);
	// 			alert("Failed to fetch data from the server.");
	// 		}
	// 	};

	// 	getSavedCourses();
	// 	getRecommendedCourses();
	// }, []);
	return (
		<div className="savedCourses--container">
			<div>
				<h2>Saved Courses</h2>
				{courses.map((course, index) => (
					<SavedCourseInfo key={index} course={course} />
				))}
			</div>
			{/* <div>
				<h2>Recommended Courses</h2>
				{courses.map((course, index) => (
					<SavedCourseInfo key={index} course={course} />
				))}
			</div> */}
		</div>
	);
}
