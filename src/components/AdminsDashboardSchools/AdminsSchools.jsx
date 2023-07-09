import Footer from "../Footer/Footer";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import AddSchoolPopup from "./AddSchoolPopup/AddSchoolPopup";
import SchoolAdminCard from "./SchoolCard/SchoolAdminCard";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./AdminsSchools.css";
import logo from "../../assets/logo.png";

export default function AdminsSchools() {
	const [schools, setSchools] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/schools/filter", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		})
			.then((response) => response.json())
			.then((data) => {
				setSchools(data);
			})
			.then(() => console.log(schools))
			.catch((err) => console.error(err));
	}, []);

	const [showPopup, setShowPopup] = useState(false);

	const openClosePopup = () => {
		setShowPopup(!showPopup);
	};
	return (
		<div className="admin-schools-page">
			<div className="admin-side-navbar">
				<AdminNavbar page="schools" />
			</div>
			<div className="admin-schools-page-body">
				<h2 className="admin-schools-page-header">Schools</h2>
				<Button className="admin-schools-page-button" variant="primary" onClick={openClosePopup}>
					Add School
				</Button>
				<div className="admin-schools-page-popup">{showPopup && <AddSchoolPopup openClosePopup={() => openClosePopup()} />}</div>
			</div>
			<div className="admin-schools-page-cards">
				{schools.map((school, index) => {
					return (
						<div>
							<SchoolAdminCard school={school} key={index} index={index} openClosePopup={() => openClosePopup()} />
							<br />
						</div>
					);
				})}
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}