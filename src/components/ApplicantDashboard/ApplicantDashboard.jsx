import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Footer/Footer";
import ApplicantProfilePage from "../ApplicantProfile/ApplicantProfilePage";
import "./ApplicantDashboard.css";
import { useState } from "react";
import SavedCourses from "../SavedCourses/SavedCoursesInfo/SavedCourses";
import SavedTests from "../SavedTests/SavedTestsInfo/SavedTests";
import SavedSchools from "../SavedSchools/SavedSchools";
import BoughtExamInfo from "../BoughtExams/BoughtExamsInfo/BoughtExamsIno";
import { useNavigate } from "react-router";

export default function ApplicantDashboard() {
	const [sidebarChoice, setSidebarChoice] = useState(1);
	const [userProfile, setUserProfile] = useState(null);
	const navigate = useNavigate();
	const sidebarChoiceFunc = (data) => {
		setSidebarChoice(data);
	};
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			fetch("http://localhost:3000/applicants/profile", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setUserProfile(data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} else {
			navigate("/login", { replace: true });
		}
	}, [navigate]);
	return (
		<div className="applicant-dashboard">
			<div>
				<Navbar />
			</div>
			<div className="applicant-dashboard-container">
				<div className="applicant-dashboard-sidebar">
					<Sidebar choice={sidebarChoiceFunc} username={userProfile && userProfile.fullName} />
				</div>
				<div className="applicant-dashboard-content">
					{userProfile && sidebarChoice == 1 && <ApplicantProfilePage user={userProfile} />}
					{sidebarChoice == 2 && <SavedSchools />}
					{sidebarChoice == 3 && <SavedTests />}
					{sidebarChoice == 4 && <SavedCourses />}
					{sidebarChoice == 5 && <BoughtExamInfo />}
				</div>
			</div>
			<div className="applicant-dashboard-footer">
				<Footer />
			</div>
		</div>
	);
}
