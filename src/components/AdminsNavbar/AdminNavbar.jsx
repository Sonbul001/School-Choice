import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSchool, faFilePdf, faPersonChalkboard, faUser } from "@fortawesome/free-solid-svg-icons";
import "./AdminNavbar.css";

function AdminNavbar({ page }) {
	library.add(faSchool, faFilePdf, faPersonChalkboard, faUser);
	if (page === "schools") {
		document.getElementById("schools").classList.add("active");
	} else if (page === "tests") {
		document.getElementById("tests").classList.add("active");
	} else if (page === "courses") {
		document.getElementById("courses").classList.add("active");
	}

	return (
		<div className="container-fluid">
			<div className="row position-absolute top-0 start-0">
				<div className="col-auto min-vh-100 bg-dark">
					<a className="text-decoration-none text-white d-flex justify-content-center">
						<FontAwesomeIcon icon="fa-solid fa-user" size="lg" />
						<span className="ms-2" style={{ fontSize: "16px" }}>
							Ahmed
						</span>
					</a>
					<hr style={{ color: "white" }} />
					<ul className="nav nav-pills flex-column">
						<li className="nav-item text-white fs-4">
							<a className="nav-link text-white fs-5" aria-current="page" href="#" id="schools">
								<FontAwesomeIcon icon="fa-solid fa-school" size="xs" />
								<span className="ms-2" style={{ fontSize: "16px" }}>
									Schools
								</span>
							</a>
						</li>
						<li className="nav-item text-white fs-4">
							<a className="nav-link text-white fs-5" aria-current="page" href="#" id="tests">
								<FontAwesomeIcon icon="fa-solid fa-file-pdf" size="xs" />
								<span className="ms-2" style={{ fontSize: "16px" }}>
									Tests
								</span>
							</a>
						</li>
						<li className="nav-item text-white fs-4">
							<a className="nav-link text-white fs-5" aria-current="page" href="#" id="courses">
								<FontAwesomeIcon icon="fa-solid fa-person-chalkboard" size="xs" />
								<span className="ms-2" style={{ fontSize: "16px" }}>
									Courses
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AdminNavbar;
