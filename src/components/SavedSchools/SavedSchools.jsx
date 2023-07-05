import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import SchoolCardList from "../SchoolCardComp/SchoolCardList/SchoolCardList";
import RecommendedSchools from "../RecommendedSchools/RecommendedSchools";
import "./SavedSchools.css";

function SavedSchools() {
	const [schools, setSchools] = useState([]);
	const staticCards = [
		{ name: "School 1", address: "city 1", type: "National", gender: "Mixed", rating: "4.5", startingFees: "1000", map: "https://www.google.com/maps" },
		{ name: "School 2", address: "city 2", type: "International", gender: "Mixed", rating: "4", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 3", address: "city 3", type: "Lycee", gender: "Mixed", rating: "4.5", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 4", address: "city 4", type: "National", gender: "Mixed", rating: "3", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 5", address: "city 5", type: "National", gender: "Mixed", rating: "4", startingFees: "40000", map: "https://www.google.com/maps" },
		{ name: "School 6", address: "city 6", type: "International", gender: "Mixed", rating: "5", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 7", address: "city 7", type: "International", gender: "Mixed", rating: "4", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 8", address: "city 8", type: "International", gender: "Mixed", rating: "4.5", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 9", address: "city 9", type: "IGCSE", gender: "Mixed", rating: "3", startingFees: "30000", map: "https://www.google.com/maps" },
		{ name: "School 10", address: "city 10", type: "IGCSE", gender: "Mixed", rating: "5", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 11", address: "city 11", type: "IGCSE", gender: "Girls", rating: "3.6", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 12", address: "city 12", type: "Lycee", gender: "Girls", rating: "4", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 13", address: "city 13", type: "Lycee", gender: "Girls", rating: "4", startingFees: "20000", map: "https://www.google.com/maps" },
		{ name: "School 14", address: "city 14", type: "International", gender: "Girls", rating: "5", startingFees: "50000", map: "https://www.google.com/maps" },
		{ name: "School 15", address: "city 15", type: "National", gender: "Girls", rating: "4", startingFees: "60000", map: "https://www.google.com/maps" },
	];
	// useEffect(() => {
	// 	const getSchools = async () => {
	// 		try {
	// 			const response = await fetch('http://localhost:3000/applicants/saved-schools', {
	// 				headers: {
	// 					Authorization: 'Bearer ' + localStorage.getItem('token')
	// 				}
	// 			});
	// 			if (response.status != 401) {
	// 				const data = await response.json();
	// 				setSchools(data);
	// 			} else {
	// 				throw new Error('Unauthorized');
	// 			}
	// 		} catch (error) {
	// 			console.error('Error:', error);
	// 			alert('Failed to fetch data from the server.');
	// 		}
	// 	};

	// 	getSchools();
	// }, []);

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
