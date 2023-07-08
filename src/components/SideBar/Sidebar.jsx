import React, { useEffect, useState } from "react";
import "./Sidebar.css";

import usernameLogo from "../../assets/username-logo.png";
import favoritesLogo from "../../assets/favorites-logo.png";
import testsLogo from "../../assets/tests-logo.png";
import coursesLogo from "../../assets/courses-logo.png";
import { FaUserAlt, FaSchool, FaUser } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { BsFillBasketFill } from "react-icons/bs";
const Sidebar = (props) => {
	return (
		<div className="sidebar--component">
			<div className="sidebar--component--item">
				<FaUser className="sidebar--component--item--icon" />
				<p onClick={() => props.choice(1)}>{props.username}</p>
			</div>
			<div className="sidebar--component--item">
				<FaSchool className="sidebar--component--item--icon" />
				<p onClick={() => props.choice(2)}>Schools</p>
			</div>
			<div className="sidebar--component--item">
				<PiExamFill className="sidebar--component--item--icon" />
				<p onClick={() => props.choice(3)}>Exams</p>
			</div>
			<div className="sidebar--component--item">
				<GiTeacher className="sidebar--component--item--icon" />
				<p onClick={() => props.choice(4)}>Courses</p>
			</div>
			<div className="sidebar--component--item">
				<BsFillBasketFill className="sidebar--component--item--icon" />
				<p className="sidebar--component--item--label" onClick={() => props.choice(5)}>
					Bought Exams
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
