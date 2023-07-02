import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import SchoolCardComp from "../Cardss/Card/SchoolCardComp";
import "../Cardss/Card/SchoolCardComp.css";
import DetailedSearchHeading from "./DetailedSearchHeader/DetailedSearchHeading";
import DetailedSearchSidebar from "./DetailedSearchSidebar/DetailedSearchSidebar";
import "./DetailedSearch.css";
import DetailedSearchbar from "./DetailedSearchbar/DetailedSearchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SideCompStatusPopup from "../ComparePopup/SideCompStatusPopup/SideCompStatusPopup";

function DetailedSearchPage() {
	library.add(faScaleBalanced, faScaleUnbalancedFlip);

	//const { name, address, type, gender, rating, startingFees, map } = props;

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

	const schoolsTemp = [];
	const [schools, setSchool] = useState(schoolsTemp);
	const [picked, setPicked] = useState([]);

	const addSchool = (card) => {
		if (schools.length === 2) {
			alert("You can only pick 2 schools");
			return;
		}
		setSchool([...schools, card]);
	};

	const pickSchool = (index, card) => {
		if (!picked.includes(index)) {
			setPicked([...picked, index]);
			addSchool(card);
		} else {
			const newPicked = picked.filter((arr) => arr !== index);
			setPicked(newPicked);
			setSchool(schools.filter((school) => school.name !== card.name));
		}
	};

	useEffect(() => {
		console.log("schools", schools);
		console.log("picked", picked);
	}, [schools]);

	return (
		<div className="DetailedSearchPage">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="header">
				<DetailedSearchHeading />
			</div>

			<div className="searchbar">
				<DetailedSearchbar />
			</div>

			<div className="sidebar">
				<DetailedSearchSidebar />
			</div>

			<div className="detailed-search-side-comp-status-popup">{picked.length > 0 && <SideCompStatusPopup picked={picked} schools={schools} pickSchool={pickSchool} />}</div>

			<div>
				<div className="detailed-search-cards">
					{staticCards.map((card, index) => (
						<div key={index} className="detailed-search-card-item">
							{picked.includes(index) ? <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-unbalanced-flip" onClick={() => pickSchool(index, card)} /> : <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-balanced" onClick={() => pickSchool(index, card)} />}
							<SchoolCardComp schoolInfo={card} />
						</div>
					))}
				</div>
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default DetailedSearchPage;
