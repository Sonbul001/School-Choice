import React from "react";
import SchoolCard from "../SchoolCard/SchoolCard";
import "../SchoolCard/SchoolCard.css";
import "./SchoolCardList.css";

export default function SchoolCardList(props) {
	return (
		<div className="cards">
			{props.schools.map((card, index) => (
				<SchoolCard schoolInfo={card} key={index}/>
			))}
		</div>
	);
}
