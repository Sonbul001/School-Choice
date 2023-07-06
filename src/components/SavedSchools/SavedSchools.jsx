import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import SchoolCardList from "../SchoolCardComp/SchoolCardList/SchoolCardList";
import RecommendedSchools from "../RecommendedSchools/RecommendedSchools";
import "./SavedSchools.css";

function SavedSchools() {
	const [savedSchools, setSavedSchools] = useState([]);
	const [recommendedSchools, setRecommendedSchools] = useState([]);
	
	useEffect(() => {
		const getSavedSchools = async () => {
			try {
				const response = await fetch('http://localhost:3000/applicants/saved-schools', {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				});
				if (response.status != 401) {
					const data = await response.json();
					setSavedSchools(data);
				} else {
					throw new Error('Unauthorized');
				}
			} catch (error) {
				console.error('Error:', error);
				alert('Failed to fetch data from the server.');
			}
		};
		const getRecommendedSchools = async () => {
			try {
				const response = await fetch('http://localhost:3000/applicants/recommended-schools-by-saved-schools', {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				});
				if (response.status != 401) {
					const data = await response.json();
					setRecommendedSchools(data);
				} else {
					throw new Error('Unauthorized');
				}
			} catch (error) {
				console.error('Error:', error);
				alert('Failed to fetch data from the server.');
			}
		};

		getSavedSchools();
		getRecommendedSchools();
	}, []);

	return (
		<div className="savedSchools--component">
			<div className="savedSchools--component--content">
				<div className="savedSchools--component--main">
					<div className="savedSchools--component--main--saved">
						<h2>Saved Schools</h2>
						<SchoolCardList schools={savedSchools} />
					</div>
					<div>
						<h2>Recommended Schools</h2>
						<RecommendedSchools schools={recommendedSchools}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SavedSchools;
