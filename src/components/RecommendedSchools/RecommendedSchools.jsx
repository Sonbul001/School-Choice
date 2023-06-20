import React from "react";
import Carousel from "../Exams/Carousel/Carousel";
import Card from "../Cardss/Card/Card";

import "./RecommendedSchools.css";

export default function RecommendedSchools(props) {
	const recommendedSchoolsData = [
		{ title: "Card 1", content: "Card content 1", item: "card item 1", item2: "card item2 1" },
		{ title: "Card 2", content: "Card content 2", item: "card item 2", item2: "card item2 2" },
		{ title: "Card 3", content: "Card content 3", item: "card item 3", item2: "card item2 3" },
		{ title: "Card 1", content: "Card content 1", item: "card item 1", item2: "card item2 1" },
		{ title: "Card 2", content: "Card content 2", item: "card item 2", item2: "card item2 2" },
		{ title: "Card 3", content: "Card content 3", item: "card item 3", item2: "card item2 3" },
		{ title: "Card 1", content: "Card content 1", item: "card item 1", item2: "card item2 1" },
		{ title: "Card 2", content: "Card content 2", item: "card item 2", item2: "card item2 2" },
		{ title: "Card 3", content: "Card content 3", item: "card item 3", item2: "card item2 3" },
		{ title: "Card 1", content: "Card content 1", item: "card item 1", item2: "card item2 1" },
		{ title: "Card 2", content: "Card content 2", item: "card item 2", item2: "card item2 2" },
		{ title: "Card 3", content: "Card content 3", item: "card item 3", item2: "card item2 3" },
	];
	return (
		<div className="recommended-schools--component">
			<h2>Recommended Schools</h2>
			<div style={{ maxWidth: 1300, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
				<Carousel show={3}>
					{recommendedSchoolsData.map((recommendedSchool, index) => (
						<div className="cards" key={index}>
							<Card key={index} cardTitle={recommendedSchool.title} cardContent={recommendedSchool.content} cardItem={recommendedSchool.item} cardItem2={recommendedSchool.item2} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
