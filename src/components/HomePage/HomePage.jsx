import React from "react";
import Navbar from "../NavBar/Navbar";
import Header from "../Heading/Heading";
import "./HomePage.css";
import Footer from "../Footer/Footer";
import QuickSearch from "../QuickSearch/QuickSearch";
import SchoolCardList from "../SchoolCardComp/SchoolCardList/SchoolCardList";

function HomePage() {
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
				<SchoolCardList />
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default HomePage;
