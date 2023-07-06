import React from "react";
import Carousel from "../Exams/Carousel/Carousel";
import SchoolCard from "../SchoolCardComp/SchoolCard/SchoolCard";

import "./RecommendedSchools.css";

export default function RecommendedSchools(props) {
	return (
		<div className="recommended-schools--component">
			<div className="recommended-schools-carousel">
				<Carousel show={3}>
					{props.schools.map((recommendedSchool, index) => (
						<div key={index} className="recommended-schools-card-item">
							<SchoolCard schoolInfo={recommendedSchool} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
