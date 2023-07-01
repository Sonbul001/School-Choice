import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../Cardss/Card/Card";
import "../Cardss/Card/Card.css";
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

	const staticCards = [
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
		{ cardTitle: "Card 1", cardContent: "Card content 1", cardItem: "card item 1", cardItem2: "card item2 1" },
		{ cardTitle: "Card 2", cardContent: "Card content 2", cardItem: "card item 2", cardItem2: "card item2 2" },
		{ cardTitle: "Card 3", cardContent: "Card content 3", cardItem: "card item 3", cardItem2: "card item2 3" },
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

	// const removeSchool = (card) => {
	// 	const newSchools = schools.filter((arr) => arr !== card);
	// 	setSchool(newSchools);
	// };

	const pickSchool = (index, card) => {
		if (!picked.includes(index)) {
			setPicked([...picked, index]);
			addSchool(card);
		} else {
			const newPicked = picked.filter((arr) => arr !== index);
			setPicked(newPicked);
			setSchool(schools.filter((school) => school.cardTitle !== card.cardTitle));
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

			<div className="cards">
				<div className="cards" style={{ maxWidth: 1360 }}>
					{staticCards.map((card, index) => (
						<div key={index} className="detailed-search-card">
							{picked.includes(index) ? <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-unbalanced-flip" onClick={() => pickSchool(index, card)} /> : <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-balanced" onClick={() => pickSchool(index, card)} />}
							<Card cardTitle={card.cardTitle} cardContent={card.cardContent} cardItem={card.cardItem} cardItem2={card.cardItem2} />
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
