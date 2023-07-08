import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Header from "../Heading/Heading";
import "./HomePage.css";
import Footer from "../Footer/Footer";
import QuickSearch from "../QuickSearch/QuickSearch";
import SchoolCardList from "../SchoolCardComp/SchoolCardList/SchoolCardList";

function HomePage() {
	const [schools, setSchools] = useState([]);
	useEffect(() => {
		const getSchools = async () => {
			try {
				const response = await fetch('http://localhost:3000/schools/advertise');
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
		<div className="HomePage">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="header">
				<Header />
			</div>
			<QuickSearch />

			<h2>Featured Schools</h2>
			<div className="home-page-cards">
				<SchoolCardList schools={schools}/>
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default HomePage;
