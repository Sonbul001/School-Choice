import React from "react";
import Card from "../Card/Card";
import "../Card/Card.css";

export default function Cards(props) {
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

	return (
		<div className="cards" style={{ maxWidth: 1360 }}>
			{staticCards.map((card, index) => (
				<Card key={index} cardTitle={card.cardTitle} cardContent={card.cardContent} cardItem={card.cardItem} cardItem2={card.cardItem2} />
			))}
		</div>
	);
}
