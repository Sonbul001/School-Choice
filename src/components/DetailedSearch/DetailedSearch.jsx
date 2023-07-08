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
import Pagination from "react-bootstrap/Pagination";

function DetailedSearchPage() {
	library.add(faScaleBalanced, faScaleUnbalancedFlip);
	const [schools, setSchools] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [show, setShow] = useState(true);
	let items = [];
	for (let number = 1; number <= totalPages; number++) {
		items.push(
			<Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
				{number}
			</Pagination.Item>
		);
	}

	const filter = {
		city: "",
		educationLevel: [],
		type: [],
		minimumFee: "",
		maximumFee: "",
		name: "",
		sort: "",
	};

	// const [filterState, setFilterState] = useState(filter);

	useEffect(() => {
		fetch(`http://localhost:3000/schools/school?page=${page}&pageSize=12`)
			.then((response) => response.json())
			.then((data) => {
				setSchools(data.data), setTotalPages(data.last_page), setPage(data.page_number);
			})
			.catch((err) => console.error(err));
	}, [page]);

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
		// setFilterState(data.name);
		filter.sort = data.sort;
		// setFilterState(data.sort);
		console.log(filter.sort);
		applyFilters(filter);
	};

	const sideBarFilterFunc = (data) => {
		(filter.city = data.city), (filter.educationLevel = data.educationLevel), (filter.type = data.type), (filter.minimumFee = data.minimumFee), (filter.maximumFee = data.maximumFee), applyFilters(filter);
	};

	const applyFilters = (filters) => {
		const queryParams = new URLSearchParams(filters).toString();
		const url = `http://localhost:3000/schools/filter?page=${page}&pageSize=12`;
		setShow(false);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(filters),
		})
			.then((response) => response.json())
			.then((data) => {
				setSchools(data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="DetailedSearchPage">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="header">
				<DetailedSearchHeading />
			</div>

			<div className="searchbar">
				<DetailedSearchbar filter={searchBarFilterFunc} />
			</div>
			<div className="detailed-search-side-comp-status-popup">{picked.length > 0 && <SideCompStatusPopup picked={picked} schools={compareSchools} pickSchool={pickSchool} />}</div>

			<div className="detailed-search-side-bar-cards">
				<div className="sidebar">
					<DetailedSearchSidebar filter={sideBarFilterFunc} />
				</div>
				<div className="detailed-search-cards">
					{schools.map((card, index) => (
						<div key={index} className="detailed-search-card-item">
							{picked.includes(index) ? <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-unbalanced-flip" onClick={() => pickSchool(index, card)} /> : <FontAwesomeIcon className="detailed-search-card-icon" icon="fa-solid fa-scale-balanced" onClick={() => pickSchool(index, card)} />}
							<SchoolCard schoolInfo={card} />
						</div>
					))}
					<div className="detailed-search-pagination">{show && <Pagination className="detailed-search-pagination">{items}</Pagination>}</div>
				</div>
			</div>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default DetailedSearchPage;
