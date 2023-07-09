import React from "react";
import Exams from "../Exams/Exams";
import AdminsPaginationExams from "../AdminsExams/AdminsPaginationExams";

import "./ExamsGrade.css";

export default function ExamsGrade(props) {
	return (
		<div className="exams--page--exam--grade">
			<div className="exams--page--exam--grade--title">
				<h2>{props.grade}</h2>
			</div>

			<div className="exams--page--exam--grade--Exams">
				{props.user === "admin" ? <AdminsPaginationExams grade={props.grade} exams={props.exams} /> : <Exams grade={props.grade} exams={props.exams} />}

				{/* <Exams price={0} />

				<Exams price={100} /> */}
			</div>
		</div>
	);
}
