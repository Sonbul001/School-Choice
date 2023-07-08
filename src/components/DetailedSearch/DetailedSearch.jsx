import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import SchoolCard from "../SchoolCardComp/SchoolCard/SchoolCard";
import "../SchoolCardComp/SchoolCard/SchoolCard.css";
import DetailedSearchHeading from "./DetailedSearchHeader/DetailedSearchHeading";
import DetailedSearchSidebar from "./DetailedSearchSidebar/DetailedSearchSidebar";
import "./DetailedSearch.css";
import DetailedSearchbar from "./DetailedSearchbar/DetailedSearchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SideCompStatusPopup from "../ComparePopup/SideCompStatusPopup/SideCompStatusPopup";
import { json } from "react-router-dom";

function DetailedSearchPage() {
	library.add(faScaleBalanced, faScaleUnbalancedFlip);
	const [schools, setSchools] = useState([]);
	const filter = {
		city: '',
		educationLevel: [],
		type: [],
		minimumFee: '',
		maximumFee: '',
		name: '',
		sort: ''
	};

	useEffect(() => {
		fetch('http://localhost:3000/schools/school')
			.then(response => response.json())
			.then(data => setSchools(data))
			.catch(err => console.error(err))
	}, [])
	const schoolsTemp = [];
	const [compareSchools, setCompareSchools] = useState(schoolsTemp);
	const [picked, setPicked] = useState([]);

	const addSchool = (card) => {
		if (compareSchools.length === 2) {
			alert("You can only pick 2 schools");
			return;
		}
		setCompareSchools([...compareSchools, card]);
	};

	const pickSchool = (index, card) => {
		if (!picked.includes(index)) {
			setPicked([...picked, index]);
			addSchool(card);
		} else {
			const newPicked = picked.filter((arr) => arr !== index);
			setPicked(newPicked);
			setCompareSchools(compareSchools.filter((school) => school.name !== card.name));
		}
	};

	const searchBarFilterFunc = (data) => {
		filter.name = data.name;
		filter.sort = data.sort;
		console.log(filter.sort)
		applyFilters(filter);
	}

	const sideBarFilterFunc = (data) => {
		filter.city = data.city,
		filter.educationLevel = data.educationLevel,
		filter.type = data.type,
		filter.minimumFee = data.minimumFee,
		filter.maximumFee = data.maximumFee,
		applyFilters(filter);
	}

	const applyFilters = (filters) => {
		const queryParams = new URLSearchParams(filters).toString();
		const url = `http://localhost:3000/schools/filter`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(filters)
		})
		.then(response => response.json())
		.then(data => setSchools(data))
		.catch(err => console.error(err))
	}

	return (
		<div className="DetailedSearchPage">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="header">
				<DetailedSearchHeading />
			</div>

			<div className="searchbar">
				<DetailedSearchbar filter={searchBarFilterFunc}/>
			</div>
			<div className="detailed-search-side-comp-status-popup">{picked.length > 0 && <SideCompStatusPopup picked={picked} schools={compareSchools} pickSchool={pickSchool} />}</div>

			<div className="detailed-search-side-bar-cards">
				<div className="sidebar">
					<DetailedSearchSidebar filter={sideBarFilterFunc}/>
				</div>
				<div className="detailed-search-cards">
					{schools.map((card, index) => (
						<div key={index} className="detailed-search-card-item">
							{picked.includes(index) ? <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-unbalanced-flip" onClick={() => pickSchool(index, card)} /> : <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-balanced" onClick={() => pickSchool(index, card)} />}
							<SchoolCard schoolInfo={card} />
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
