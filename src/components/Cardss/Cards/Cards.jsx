import React from "react";
import Card from "../Card/Card";
import "../Card/Card.css";

export default function Cards(props) {

	const { cards } = props;

	return (
		<div className="cards" style={{ maxWidth: 1360 }}>
			{cards.map((card, index) => (
				<Card
					key={index}
					cardTitle={card.cardTitle}
					cardContent={card.cardContent}
					cardItems={card.cardItems}
				/>
			))}
		</div>
	);
}
