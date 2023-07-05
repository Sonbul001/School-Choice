import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import SchoolCardList from "../SchoolCardComp/SchoolCardList/SchoolCardList";
import RecommendedSchools from "../RecommendedSchools/RecommendedSchools";
import "./SavedSchools.css";

function SavedSchools() {
	const [schools, setSchools] = useState([]);
	useEffect(() => {
		const getSchools = async () => {
			try {
				const response = await fetch('http://localhost:3000/applicants/saved-schools', {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				});
				if (response.status != 401) {
					const data = await response.json();
					setSchools(data);
				} else {
					throw new Error('Unauthorized');
				}
			} catch (error) {
				console.error('Error:', error);
				alert('Failed to fetch data from the server.');
			}
		};

		getSchools();
	}, []);

	return (
		<div className="savedSchools--component">
			{/* <div className="navBar">
				<Navbar />
			</div> */}

			<div className="savedSchools--component--content">
				{/* <Sidebar /> */}
				<div className="savedSchools--component--main">
					<div className="savedSchools--component--main--saved">
						<h2>Saved Schools</h2>
						<SchoolCardList schools={staticCards} />
					</div>
					<div>
						<h2>Recommended Schools</h2>
						<RecommendedSchools />
					</div>
				</div>
			</div>

			{/* <div className="footer">
				<Footer />
			</div> */}
		</div>
	);
}

export default SavedSchools;
