import Footer from "../Footer/Footer";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import AddSchoolPopup from "./AddSchoolPopup/AddSchoolPopup";
import SchoolCard from "./SchoolCard/SchoolCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AdminsSchools.css";
import logo from "../../assets/logo.png";

export default function AdminsSchools() {
	let schools = [
		{
			name: "School 1",
			type: ["National", "International"],
			educationLevel: ["Elementary", "Middle", "Secondary"],
			gender: ["Boys", "Girls"],
			address: "address",
			imgs: [logo, logo, logo],
			dates: [
				{ time: "Morning Time", from: "14:12", to: "16:12" },
				{ time: "Evening Time", from: "19:13", to: "20:13" },
			],
			fees: [
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
			],
		},
		{
			name: "School 1",
			type: ["National"],
			educationLevel: ["Elementary", "Secondary"],
			gender: ["Girls"],
			address: "address",
			imgs: [logo, logo, logo],
			dates: [
				{ time: "Morning Time", from: "14:12", to: "16:12" },
				{ time: "Evening Time", from: "19:13", to: "20:13" },
			],
			fees: [
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
			],
		},
		{
			name: "School 1",
			type: ["International"],
			educationLevel: ["Secondary"],
			gender: ["Boys"],
			address: "address",
			imgs: [logo, logo, logo],
			dates: [
				{ time: "Morning Time", from: "14:12", to: "16:12" },
				{ time: "Evening Time", from: "19:13", to: "20:13" },
			],
			fees: [
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
				{
					classroom: "kg1",
					fees: "2000",
				},
			],
		},
	];

	const [showPopup, setShowPopup] = useState(false);
	const [selected, setSelected] = useState(null);

	const openClosePopup = (index) => {
		setShowPopup(!showPopup);
		setSelected(index);
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
							<SchoolCard school={school} key={index} index={index} openClosePopup={() => openClosePopup(index)} />;
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
