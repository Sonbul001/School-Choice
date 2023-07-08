import Footer from "../Footer/Footer";
import AdminNavbar from "../AdminsNavbar/AdminNavbar";
import AddSchoolPopup from "./AddSchoolPopup/AddSchoolPopup";
import SchoolAdminCard from "./SchoolCard/SchoolAdminCard";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./AdminsSchools.css";
import logo from "../../assets/logo.png";

export default function AdminsSchools() {
	// const [schools, setSchools] = useState([]);
	useEffect(() => {
		const getSchools = async () => {
			try {
				const response = await fetch("http://localhost:3000/schools/school");
				if (response.status != 401) {
					const data = await response.json();
					setSchools(data);
				} else {
					throw new Error("Unauthorized");
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Failed to fetch data from the server.");
			}
		};
		getSchools();
	}, []);

	const schools = [
		{
			name: "Misr Language Schools",
			logo: "https://cdn.egyptschools.info/wp-content/uploads/2020/07/download-2-1-e1595245781561.jpg",
			about: "مدارس مصر للغات بالرماية - الهرم\nتعتبر مدارس مصر للغات - Misr Laguage Schools من مدارس الجمعيات التعاونية التعليمية حيث انها هي من المدارس الغير هادفة للربح، أسس المدرسة كل من عثمان أحمد عثمان وإسماعيل عثمان وماجدة موسى سنة 1985 في مصر.\nمدارس مصر للغات هي مدرسة دولية ذات خمسة أقسام: الطلاب الفرنسيون والأمريكيون والبريطانيون الناشونال وذوي الاحتياجات الخاصة.",
			type: ["Lycee", "American", "IGCSE", "National"],
			educationLevel: ["Preparatory", "Primary", "Nursery", "Secondary", "KG"],
			gender: "Mixed",
			address: "طريق القاهرة الفيوم الصحراوى - الهرم - ميدان الرماية - الجيزة",
			map: "http://maps.google.com/maps?daddr=29.98003%2C31.118305",
			city: "الهرم",
			images: ["https://cdn.egyptschools.info/wp-content/uploads/2020/07/Home.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/IMGP0221-scaled.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/m_DSC1_271.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/STAFF.jpg"],
			website: "https://www.mls-egypt.org/",
			phones: ["0233763060", "20233760170", "01000251297"],
			email: "Info@mls-egypt.com",
			feesSection: [
				{
					type: "National",
					fees: [
						{
							fee: 21530.0,
							classroom: "Pre-KG",
						},
						{
							fee: 23722.0,
							classroom: "KG 1",
						},
						{
							fee: 23722.0,
							classroom: "KG 2 ",
						},
						{
							fee: 26040.0,
							classroom: "Grade 1 - 5",
						},
						{
							fee: 24761.0,
							classroom: "Grade 6",
						},
						{
							fee: 25408.0,
							classroom: "Grade 7",
						},
						{
							fee: 25524.0,
							classroom: "Grade 8",
						},
						{
							fee: 25779.0,
							classroom: "Grade 9",
						},
						{
							fee: 25636.0,
							classroom: "Grade 10",
						},
						{
							fee: 25344.0,
							classroom: "Grade 11",
						},
						{
							fee: 24244.0,
							classroom: "Grade 12",
						},
					],
				},
				{
					type: "American",
					fees: [
						{
							fee: 50038.0,
							classroom: "Pre-KG ",
						},
						{
							fee: 50130.0,
							classroom: " KG 1 - 2",
						},
						{
							fee: 54646.0,
							classroom: "Grade 1",
						},
						{
							fee: 59055.0,
							classroom: "Grade 2",
						},
						{
							fee: 53110.0,
							classroom: "Grade 3 - 4",
						},
						{
							fee: 59455.0,
							classroom: "Grade 5",
						},
						{
							fee: 61364.0,
							classroom: "Grade 6",
						},
						{
							fee: 65241.0,
							classroom: "Grade 7",
						},
						{
							fee: 68053.0,
							classroom: "Grade 8",
						},
						{
							fee: 69468.0,
							classroom: "Grade 9",
						},
						{
							fee: 70401.0,
							classroom: "Grade 10",
						},
						{
							fee: 70384.0,
							classroom: "Grade 11",
						},
					],
				},
				{
					type: "Lycee",
					fees: [
						{
							fee: 44686.0,
							classroom: "Pre-KG",
						},
						{
							fee: 44776.0,
							classroom: "KG 1",
						},
						{
							fee: 47472.0,
							classroom: "KG 2 ",
						},
						{
							fee: 53000.0,
							classroom: "Grade 1 - 3",
						},
						{
							fee: 56295.0,
							classroom: "Grade 4 - 5 ",
						},
						{
							fee: 68439.0,
							classroom: "Grade 6 ",
						},
						{
							fee: 68454.0,
							classroom: "Grade 7 - 9",
						},
						{
							fee: 80823.0,
							classroom: "Grade 10 ",
						},
						{
							fee: 84167.0,
							classroom: "Grade 11",
						},
						{
							fee: 92127.0,
							classroom: "Grade 12",
						},
					],
				},
				{
					type: "IGCSE",
					fees: [
						{
							fee: 45423.0,
							classroom: "Grade 7 - 8",
						},
						{
							fee: 47347.0,
							classroom: "Grade 9",
						},
						{
							fee: 49427.0,
							classroom: "Grade 10",
						},
						{
							fee: 52718.0,
							classroom: "Grade 11",
						},
						{
							fee: 63178.0,
							classroom: "Grade 12",
						},
					],
				},
			],
		},
		{
			name: "Misr Language Schools",
			logo: "https://cdn.egyptschools.info/wp-content/uploads/2020/07/download-2-1-e1595245781561.jpg",
			about: "مدارس مصر للغات بالرماية - الهرم\nتعتبر مدارس مصر للغات - Misr Laguage Schools من مدارس الجمعيات التعاونية التعليمية حيث انها هي من المدارس الغير هادفة للربح، أسس المدرسة كل من عثمان أحمد عثمان وإسماعيل عثمان وماجدة موسى سنة 1985 في مصر.\nمدارس مصر للغات هي مدرسة دولية ذات خمسة أقسام: الطلاب الفرنسيون والأمريكيون والبريطانيون الناشونال وذوي الاحتياجات الخاصة.",
			type: ["Lycee", "American", "IGCSE", "National"],
			educationLevel: ["Preparatory", "Primary", "Nursery", "Secondary", "KG"],
			gender: "Mixed",
			address: "طريق القاهرة الفيوم الصحراوى - الهرم - ميدان الرماية - الجيزة",
			map: "http://maps.google.com/maps?daddr=29.98003%2C31.118305",
			city: "الهرم",
			images: ["https://cdn.egyptschools.info/wp-content/uploads/2020/07/Home.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/IMGP0221-scaled.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/m_DSC1_271.jpg", "https://cdn.egyptschools.info/wp-content/uploads/2020/07/STAFF.jpg"],
			website: "https://www.mls-egypt.org/",
			phones: ["0233763060", "20233760170", "01000251297"],
			email: "Info@mls-egypt.com",
			feesSection: [
				{
					type: "National",
					fees: [
						{
							fee: 21530.0,
							classroom: "Pre-KG",
						},
						{
							fee: 23722.0,
							classroom: "KG 1",
						},
						{
							fee: 23722.0,
							classroom: "KG 2 ",
						},
						{
							fee: 26040.0,
							classroom: "Grade 1 - 5",
						},
						{
							fee: 24761.0,
							classroom: "Grade 6",
						},
						{
							fee: 25408.0,
							classroom: "Grade 7",
						},
						{
							fee: 25524.0,
							classroom: "Grade 8",
						},
						{
							fee: 25779.0,
							classroom: "Grade 9",
						},
						{
							fee: 25636.0,
							classroom: "Grade 10",
						},
						{
							fee: 25344.0,
							classroom: "Grade 11",
						},
						{
							fee: 24244.0,
							classroom: "Grade 12",
						},
					],
				},
				{
					type: "American",
					fees: [
						{
							fee: 50038.0,
							classroom: "Pre-KG ",
						},
						{
							fee: 50130.0,
							classroom: " KG 1 - 2",
						},
						{
							fee: 54646.0,
							classroom: "Grade 1",
						},
						{
							fee: 59055.0,
							classroom: "Grade 2",
						},
						{
							fee: 53110.0,
							classroom: "Grade 3 - 4",
						},
						{
							fee: 59455.0,
							classroom: "Grade 5",
						},
						{
							fee: 61364.0,
							classroom: "Grade 6",
						},
						{
							fee: 65241.0,
							classroom: "Grade 7",
						},
						{
							fee: 68053.0,
							classroom: "Grade 8",
						},
						{
							fee: 69468.0,
							classroom: "Grade 9",
						},
						{
							fee: 70401.0,
							classroom: "Grade 10",
						},
						{
							fee: 70384.0,
							classroom: "Grade 11",
						},
					],
				},
				{
					type: "Lycee",
					fees: [
						{
							fee: 44686.0,
							classroom: "Pre-KG",
						},
						{
							fee: 44776.0,
							classroom: "KG 1",
						},
						{
							fee: 47472.0,
							classroom: "KG 2 ",
						},
						{
							fee: 53000.0,
							classroom: "Grade 1 - 3",
						},
						{
							fee: 56295.0,
							classroom: "Grade 4 - 5 ",
						},
						{
							fee: 68439.0,
							classroom: "Grade 6 ",
						},
						{
							fee: 68454.0,
							classroom: "Grade 7 - 9",
						},
						{
							fee: 80823.0,
							classroom: "Grade 10 ",
						},
						{
							fee: 84167.0,
							classroom: "Grade 11",
						},
						{
							fee: 92127.0,
							classroom: "Grade 12",
						},
					],
				},
				{
					type: "IGCSE",
					fees: [
						{
							fee: 45423.0,
							classroom: "Grade 7 - 8",
						},
						{
							fee: 47347.0,
							classroom: "Grade 9",
						},
						{
							fee: 49427.0,
							classroom: "Grade 10",
						},
						{
							fee: 52718.0,
							classroom: "Grade 11",
						},
						{
							fee: 63178.0,
							classroom: "Grade 12",
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
