import React from "react";
import Carousel from "../Exams/Carousel/Carousel";
import SchoolCard from "../SchoolCardComp/SchoolCard/SchoolCard";

import "./RecommendedSchools.css";
import { useEffect } from "react";
import { useState } from "react";

export default function RecommendedSchools(props) {
	const [schools, setSchools] = useState([])

	useEffect(() => {
		fetch(`http://localhost:3000/applicants/recommended-schools-by-school/${props.id}`)
		.then(response => response.json())
		.then(data => setSchools(data))
		.catch(err => console.error(err))
	}, [])
	return (
		<div className="recommended-schools--component">
			<div className="recommended-schools-carousel">
				<Carousel show={3}>
					{schools.map((recommendedSchool, index) => (
						<div key={index} className="recommended-schools-card-item">
							<SchoolCard schoolInfo={recommendedSchool} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
