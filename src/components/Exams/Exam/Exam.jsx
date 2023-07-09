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
import { useLocation } from "react-router-dom";

export default function exam(props) {
	const location = useLocation();
	library.add(FaPlus, FaArrowCircleDown);
	const [saved, setSaved] = useState(false);
	const [show, setShow] = useState(true);
	const [width, setWidth] = useState(18);
	const [height, setHeight] = useState("24rem");
	const [userExams, setUserExams] = useState([]);
	const [boughtExams, setBoughtExams] = useState([]);
	const [buttonText, setButtonText] = useState("Buy");
	const [role, setRole] = useState("");

	const handleShow = () => {
		setShow(!show);
		props.onExamClick(props.exam.id);
		if (show) {
			setWidth(30);
			setHeight("30rem");
		} else {
			setWidth(18);
			setHeight("24rem");
		}
	};

	useEffect(() => {
		if (localStorage.getItem("token") && location.state) {
			fetch(`http://localhost:3000/applicants/profile`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setUserExams(data.savedExams))
				.catch((err) => console.error(err));
			fetch(`http://localhost:3000/applicants/profile`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setBoughtExams(data.boughtExams))
				.catch((err) => console.error(err));
		}
		fetch(`http://localhost:3000/auth/profile`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setRole(data.role))
			.catch((err) => console.error(err));
		if (props.openExam !== props.exam.id) {
			setShow(true);
			setWidth(18);
			setHeight("24rem");
		}
	}, [props.openExam, props.exam.id]);

	useEffect(() => {
		if (localStorage.getItem("token") && userExams.some((exam) => exam.id === props.exam.id)) {
			setSaved(true);
		} else {
			setSaved(false);
		}
	}, [userExams, props.exam.id]);

	useEffect(() => {
		if (localStorage.getItem("token") && boughtExams.some((exam) => exam.id === props.exam.id)) {
			setButtonText("Download");
		}
	}, [boughtExams, props.exam.id]);

	const handleSave = () => {
		if (!saved && localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/save-exam/${props.exam.id}`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then(() => alert("Exam saved successfully"))
				.catch((error) => console.error(error));
			setSaved(!saved);
		} else if (saved && localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/unsave-exam/${props.exam.id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then(() => alert("Exam unsaved successfully"))
				.catch((error) => console.error(error));
			setSaved(!saved);
		} else {
			alert("Please login first");
		}
	};

	const handleBuy = () => {
		if (!boughtExams.some((exam) => exam.id === props.exam.id) && localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/buy-exam/${props.exam.id}`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then(() => alert("Exam bought successfully"))
				.catch((error) => console.error(error));
			setButtonText("Link");
		} else {
			alert("Please login first");
		}
	};

	return (
		<div>
			<Card style={{ width: `${width}rem`, height: `${height}`, transition: "0.5s ease-in-out" }}>
				<Card.Img className="exam-card-logo" variant="top" src={props.exam.logo} />
				{show ? <FaArrowCircleDown className="exam-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out" }} /> : <FaArrowCircleDown className="exam-card-show-button" onClick={handleShow} style={{ transition: "0.5s ease-in-out", transform: "rotate(180deg)" }} />}
				{role === "admin" && (saved ? <FontAwesomeIcon icon={solidBookmark} className="exam--save--logo " onClick={handleSave} /> : <FontAwesomeIcon icon={regularBookmark} className="exam--save--logo " onClick={handleSave} />)}
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
						{!role === "admin" ? (
							props.exam.price > 0 ? (
								buttonText === "Buy" ? (
									<Button className="exam-card-footer-button" variant="primary" onClick={handleBuy}>
										{buttonText}
									</Button>
								) : (
									<Button className="exam-card-footer-button" variant="primary" href={props.exam.link}>
										{buttonText}
									</Button>
								)
							) : (
								<Button className="exam-card-footer-button" variant="primary" href={props.exam.link}>
									Link
								</Button>
							)
						) : (
							<Button className="exam-card-footer-button" variant="primary" href={props.exam.link}>
								Link
							</Button>
						)}
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}
