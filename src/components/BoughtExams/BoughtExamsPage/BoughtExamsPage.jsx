import React from "react";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import Sidebar from "../../SideBar/Sidebar";
import "./SavedCoursesPage.css";
import BoughtExamInfo from "../BoughtExamsInfo/BoughtExamsIno";

export default function BoughtExamPage(props) {
	return (
		<div className="savedCourses--component">
			<div className="navBar">
				<Navbar />
			</div>

			<div className="savedCourses--component--content">
				<Sidebar />
				<BoughtExamInfo />
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
