import React from "react";
import Carousel from "../Carousel/Carousel";
import Exam from "../Exam/Exam";

export default function Exams(props) {
	const exams = [
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 1",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 2",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 3",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 4",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 5",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 6",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 7",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 8",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 9",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		{
			logo: "../../../assets/Logo2.png",
			examName: "Exam 10",
			schoolType: "International",
			price: props.price,
			locked: props.price > 0 ? true : false,
		},
		// Add more exam objects as needed
	];

	return (
		<div style={{ maxWidth: 1360, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
			<Carousel show={5}>
				{exams.map((exam, index) => (
					<Exam key={index} logo={exam.logo} examName={exam.examName} schoolType={exam.schoolType} price={exam.price} locked={exam.locked} />
				))}
			</Carousel>
		</div>
	);
}
