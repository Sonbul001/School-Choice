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
	const [height, setHeight] = useState("23rem");

	const handleShow = () => {
		setShow(!show);
		props.onCourseClick(props.course.name);
		if (show) {
			setWidth(30);
			setHeight("39rem");
		} else {
			setWidth(18);
			setHeight("23rem");
		}
	};

	useEffect(() => {
		if (props.openCourse !== props.course.name) {
			setShow(true);
			setWidth(18);
			setHeight("23rem");
		}
	}, [props.openCourse, props.course.name]);

	const handleSave = () => {
		setSaved(!saved);
	};

	// library.add(faBookmark);
	return (
		<div>
			<Card style={{ width: `${width}rem`, height: `${height}`, transition: "0.5s ease-in-out" }}>
				<Card.Img className="course-card-logo" variant="top" src={Logo} />
				{show ? <FaArrowCircleDown className="course-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out" }} /> : <FaArrowCircleDown className="course-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out", transform: "rotate(180deg)" }} />}
				{saved ? <FontAwesomeIcon icon={solidBookmark} className="course--save--logo " onClick={handleSave} /> : <FontAwesomeIcon icon={regularBookmark} className="course--save--logo " onClick={handleSave} />}
				<Card.Body>
					<Card.Title className="course-card-title">{props.course.name}</Card.Title>
					<hr className="course-car-horizontal-line" />
					<div className="course-card-price-provider">
						{props.course.coursePrice > 0 ? <Card.Text className="course-card-price">{props.course.coursePrice} EGP</Card.Text> : <Card.Text className="course-card-price">Free</Card.Text>}
						<Card.Text className="course-card-provider">{props.course.courseProvider}</Card.Text>
					</div>
					<Card.Text className="course-card-location">{props.course.courseLocation}</Card.Text>
					<div className="course-card-more-information" style={{ visibility: `${!show ? "visible" : "hidden"}`, opacity: `${!show ? 1 : 0}`, height: `${!show ? "auto" : 0}`, transition: "height 0.5s ease, opacity 0.5s ease" }}>
						<Card.Text className="course-card-about">About Course: {props.course.about}</Card.Text>
						<hr />
						<Card.Text className="course-card-duration">Approx. {props.course.duration} to finish</Card.Text>
						<div className="course-card-startDate-endDate">
							<Card.Text className="course-card-startDate">Starting at: {props.course.startDate}</Card.Text>
							<Card.Text className="course-card-endDate">Finishing at: {props.course.endDate}</Card.Text>
						</div>
					</div>
				</Card.Body>
				<Card.Footer style={{ marginTop: "-3rem" }}>
					<div className="course-card-footer">
						<div className="course-card-footer-type">
							<img src={earth} className="course--earth--logo" alt="..." />
							<small className="course-card-footer-type-text">{props.course.schoolType}</small>
						</div>
						{props.course.coursePrice > 0 ? (
							<Button className="course-card-footer-button" variant="primary" href={props.course.courseLink}>
								Enroll Now
							</Button>
						) : (
							<Button className="course-card-footer-button" variant="primary" href={props.course.courseLink}>
								Contact
							</Button>
						)}
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
