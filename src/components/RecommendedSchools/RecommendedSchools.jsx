import React from "react";
import Carousel from "../Exams/Carousel/Carousel";
import SchoolCardComp from "../Cardss/Card/SchoolCardComp";

import "./RecommendedSchools.css";

export default function RecommendedSchools(props) {
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
	return (
		<div className="recommended-schools--component">
			<h2>Recommended Schools</h2>
			<div className="recommended-schools-carousel">
				<Carousel show={3}>
					{staticCards.map((recommendedSchool, index) => (
						<div key={index} className="recommended-schools-card-item">
							<SchoolCardComp schoolInfo={recommendedSchool} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
