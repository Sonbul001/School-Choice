import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSchool, faFilePdf, faPersonChalkboard, faUser } from "@fortawesome/free-solid-svg-icons";
import "./AdminNavbar.css";
import Logo from "../../assets/Logo2.png";
import { useNavigate } from "react-router-dom";

function AdminNavbar({ page, user }) {
	library.add(faSchool, faFilePdf, faPersonChalkboard, faUser);
	const navigate = useNavigate()
	const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login', {replace:true});
    }
	return (
		<div className="admin-navbar-container">
			<img className="Nav-img" src={Logo} />
			<div className="admin-navbar-links" id="nav-items">
				<div>
					<FontAwesomeIcon icon="fa-solid fa-user" size="lg" />
					<span className="admin-username">Ahmed</span>
				</div>
				<a className="item-link" href="/admins/schools" style={{ textDecoration: page === "schools" ? "underline" : "none", textDecorationColor: "#17cf97" }}>
					<FontAwesomeIcon className="item-icons" icon="fa-solid fa-school" size="xs" />
					Schools
				</a>
				<a className="item-link" href="/admins/tests" style={{ textDecoration: page === "tests" ? "underline" : "none", textDecorationColor: "#17cf97" }}>
					<FontAwesomeIcon className="item-icons" icon="fa-solid fa-file-pdf" size="xs" />
					Exams
				</a>
				<a className="item-link" href="/admins/courses" style={{ textDecoration: page === "courses" ? "underline" : "none", textDecorationColor: "#17cf97" }}>
					<FontAwesomeIcon className="item-icons" icon="fa-solid fa-person-chalkboard" size="xs" />
					Courses
				</a>
				<li><a href='#' onClick={logOut}>Logout</a></li>
			</div>
		</div>
	);
}

export default AdminNavbar;
