import Footer from "../Footer/Footer";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import AddSchoolPopup from "./AddSchoolPopup/AddSchoolPopup";
import SchoolCard from "./SchoolCard/SchoolCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AdminsSchools.css";
import logo from "../../assets/logo.png";

export default function AdminsSchools() {
	const schools = [
		{
			id: 1,
			name: "School 1",
			logo: logo,
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl lacinia nisl, vitae aliqua",
			type: ["National", "IGCSE"],
			educationLevel: ["KG", "Primary", "Preparatory", "Secondary"],
			gender: "Mixed",
			address: "Address",
			advertised: false,
			map: "google.maps/example",
			city: "zayed",
			imgs: [logo, logo, logo],
			website: "http://www.example.com",
			phones: ["0123456789", "0123456789"],
			email: "school@gmail.com",
			feesSection: [
				{
					type: "National",
					fees: [
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
					],
				},
				{
					type: "IGCSE",
					fees: [
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
					],
				},
			],
		},
		{
			id: 1,
			name: "School 1",
			logo: logo,
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl lacinia nisl, vitae aliqua",
			type: ["National", "IGCSE"],
			educationLevel: ["KG", "Primary", "Preparatory", "Secondary"],
			gender: "mixed",
			address: "Address",
			advertised: true,
			map: "google.maps/example",
			city: "zayed",
			imgs: [logo, logo, logo],
			website: "http://www.example.com",
			phones: ["0123456789", "0123456789"],
			email: "school@gmail.com",
			feesSection: [
				{
					type: "National",
					fees: [
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
					],
				},
				{
					type: "IGCSE",
					fees: [
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
						{
							classroom: "kg1",
							fee: "2000",
						},
					],
				},
			],
		},
	];

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
							<SchoolCard school={school} key={index} index={index} openClosePopup={() => openClosePopup()} />
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
