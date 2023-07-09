import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../assets/Logo2.png";
import { useState, useEffect } from "react";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import earth from "../../../assets/earth.png";

import "./Course.css";

import { library } from "@fortawesome/fontawesome-svg-core";

export default function Course(props) {
	library.add(FaPlus, FaArrowCircleDown);
	const [saved, setSaved] = useState(false);
	const [show, setShow] = useState(true);
	const [width, setWidth] = useState(18);
	const [height, setHeight] = useState("27rem");
	const [duration, setDuration] = useState("");
	const [userCourses, setUserCourses] = useState([]);

	const handleShow = () => {
		setShow(!show);
		props.onCourseClick(props.course.id);
		if (show) {
			setWidth(30);
			setHeight("36rem");
		} else {
			setWidth(18);
			setHeight("27rem");
		}
	};

	useEffect(() => {
		if (localStorage.getItem("token") && !props.user) {
			fetch(`http://localhost:3000/applicants/profile`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setUserCourses(data.savedCourses))
				.catch((err) => console.error(err));
		}
		if (props.openCourse !== props.course.id) {
			setShow(true);
			setWidth(18);
			setHeight("27rem");
		}
		const date1 = new Date(props.course.startDate);
		const date2 = new Date(props.course.endDate);
		const newDurationMonths = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
		if (newDurationMonths === 0) {
			const newDurationDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
			setDuration(`${newDurationDays} Days`);
		} else {
			setDuration(`${newDurationMonths} Months`);
		}
		console.log(newDurationMonths);
	}, [props.openCourse, props.course.id]);

	console.log(duration);

	useEffect(() => {
		if (localStorage.getItem("token") && userCourses.some((course) => course.id === props.course.id)) {
			setSaved(true);
		} else {
			setSaved(false);
		}
	}, [userCourses, props.course.id]);
	const handleSave = () => {
		if (!saved && localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/save-course/${props.course.id}`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then(() => alert("Course saved successfully"))
				.catch((error) => console.error(error));
			setSaved(!saved);
		} else if (saved && localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/unsave-course/${props.course.id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then(() => alert("Course unsaved successfully"))
				.catch((error) => console.error(error));
			setSaved(!saved);
		} else {
			alert("Please login first");
		}
	};
	// library.add(faBookmark);
	return (
		<div>
			<Card style={{ width: `${width}rem`, height: `${height}`, transition: "0.5s ease-in-out" }}>
				<Card.Img className="course-card-logo" variant="top" src={props.course.logo} />
				{show ? <FaArrowCircleDown className="course-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out" }} /> : <FaArrowCircleDown className="course-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out", transform: "rotate(180deg)" }} />}
				{!props.user && (saved ? <FontAwesomeIcon icon={solidBookmark} className="course--save--logo " onClick={handleSave} /> : <FontAwesomeIcon icon={regularBookmark} className="course--save--logo " onClick={handleSave} />)}

				<Card.Body className="course-card-body">
					<Card.Title className="course-card-title">{props.course.name}</Card.Title>
					<hr className="course-car-horizontal-line" />
					<div className="course-card-price-provider">
						{props.course.price > 0 ? <Card.Text className="course-card-price">{props.course.price} EGP</Card.Text> : <Card.Text className="course-card-price">Free</Card.Text>}
						<Card.Text className="course-card-provider">{props.course.provider}</Card.Text>
					</div>
					<Card.Text className="course-card-location">{props.course.location}</Card.Text>
					<div className="course-card-more-information" style={{ visibility: `${!show ? "visible" : "hidden"}`, opacity: `${!show ? 1 : 0}`, height: `${!show ? "auto" : 0}`, transition: "height 0.5s ease, opacity 0.5s ease" }}>
						<Card.Text className="course-card-about">About Course: {props.course.description}</Card.Text>
						<hr />
						<Card.Text className="course-card-duration">Duration: {duration} to finish</Card.Text>
						<div className="course-card-startDate-endDate">
							<Card.Text className="course-card-startDate">Starting at: {props.course.startDate}</Card.Text>
							<Card.Text className="course-card-endDate">Finishing at: {props.course.endDate}</Card.Text>
						</div>
					</div>
				</Card.Body>
				<Card.Footer>
					<div className="course-card-footer">
						<div className="course-card-footer-type">
							<img src={earth} className="course--earth--logo" alt="..." />
							<small className="course-card-footer-type-text">{props.course.type}</small>
						</div>
						{props.course.price > 0 ? (
							<Button className="course-card-footer-button" variant="primary" href={props.course.link}>
								Enroll Now
							</Button>
						) : (
							<Button className="course-card-footer-button" variant="primary" href={props.course.link}>
								Contact
							</Button>
						)}
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
