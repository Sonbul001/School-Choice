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

import "./Exam.css";

import { library } from "@fortawesome/fontawesome-svg-core";

export default function exam(props) {
	library.add(FaPlus, FaArrowCircleDown);
	const [saved, setSaved] = useState(false);
	const [show, setShow] = useState(true);
	const [width, setWidth] = useState(18);
	const [height, setHeight] = useState("22rem");

	const handleShow = () => {
		setShow(!show);
		props.onExamClick(props.exam.name);
		if (show) {
			setWidth(30);
			setHeight("30rem");
		} else {
			setWidth(18);
			setHeight("22rem");
		}
	};

	useEffect(() => {
		if (props.openExam !== props.exam.name) {
			setShow(true);
			setWidth(18);
			setHeight("22rem");
		}
	}, [props.openExam, props.exam.name]);

	const handleSave = () => {
		setSaved(!saved);
	};
	return (
		<div>
			<Card style={{ width: `${width}rem`, height: `${height}`, transition: "0.5s ease-in-out" }}>
				<Card.Img className="exam-card-logo" variant="top" src={Logo} />
				{show ? <FaArrowCircleDown className="exam-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out" }} /> : <FaArrowCircleDown className="exam-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out", transform: "rotate(180deg)" }} />}
				{saved ? <FontAwesomeIcon icon={solidBookmark} className="exam--save--logo " onClick={handleSave} /> : <FontAwesomeIcon icon={regularBookmark} className="exam--save--logo " onClick={handleSave} />}
				<Card.Body>
					<Card.Title className="exam-card-title">{props.exam.name}</Card.Title>
					<hr className="exam-car-horizontal-line" />
					<div className="exam-card-price-subject">
						{props.exam.price > 0 ? <Card.Text className="exam-card-price">{props.exam.price} EGP</Card.Text> : <Card.Text className="exam-card-price">Free</Card.Text>}
						<Card.Text className="exam-card-subject">{props.exam.subject}</Card.Text>
					</div>
					<div className="exam-card-more-information" style={{ visibility: `${!show ? "visible" : "hidden"}`, opacity: `${!show ? 1 : 0}`, height: `${!show ? "auto" : 0}`, transition: "height 0.5s ease, opacity 0.5s ease" }}>
						<Card.Text className="exam-card-about">About Exam: {props.exam.description}</Card.Text>
						<hr />
					</div>
				</Card.Body>
				<Card.Footer style={{ marginTop: "-3rem" }}>
					<div className="exam-card-footer">
						{props.exam.price > 0 ? (
							<Button className="exam-card-footer-button" variant="primary" href={props.exam.link}>
								Buy
							</Button>
						) : (
							<Button className="exam-card-footer-button" variant="primary" href={props.exam.link}>
								Contact
							</Button>
						)}
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
