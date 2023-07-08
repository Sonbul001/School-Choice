import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddTestPopup.css";
import { useState } from "react";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Form, Button } from "react-bootstrap";
import { json } from "react-router-dom";
// import { useState, useEffect } from "react";

function AddTestPopup(props) {
	let testTemp = {
		name: "",
		description: "",
		subject: "",
		link: "",
		price: 0,
		logo: "",
		classroom: ""
	};

	if (props.exam !== undefined) {
		testTemp = props.exam;
	}

	library.add(faCircleXmark);
	const [test, setTest] = useState(testTemp);

	useEffect(() => {
		setTest({ ...test, classroom: props.grade })
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!props.edit) {
		fetch('http://localhost:3000/exams/exam', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(test)
		})
			.then(response => response.json())
			.then(() => alert('Exam Added successfully'))
			.then(() => window.location.reload())
			.catch(err => console.error(err))
		} else {
			fetch(`http://localhost:3000/exams/exam/${props.exam.id}`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(test)
		})
			.then(response => response.json())
			.then(() => alert('Exam Edited successfully'))
			.then(() => window.location.reload())
			.catch(err => console.error(err))
		}
	};

	const handleChange = (e) => {
		setTest({ ...test, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	return (
		<div className="add-test-popup-outer-container">
			<Card className="add-test-popup-inner-container">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="add-test-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="add-test-popup-title">{props.edit ? "Edit" : "Add"} Exam for {props.grade}</Card.Title>
					<hr />
					<Form onSubmit={handleSubmit}>
						<Form.Group className="add-test-popup-test-name">
							<Form.Label className="add-test-popup-test-name-label">Exam Name</Form.Label>
							<Form.Control className="add-test-popup-test-name-control" type="text" placeholder="Enter test Name" name="name" required value={test.name} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-name">
							<Form.Label className="add-test-popup-test-name-label">Exam Logo</Form.Label>
							<Form.Control className="add-test-popup-test-name-control" type="url" placeholder="Enter test logo link" name="logo" required value={test.logo} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-about">
							<Form.Label className="add-test-popup-test-about-label">Description</Form.Label>
							<Form.Control className="add-test-popup-test-about-control" as="textarea" rows={3} placeholder="Enter test About" name="description" required value={test.description} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-type">
							<Form.Label className="add-test-popup-test-type-label">Exam Subject</Form.Label>
							<Form.Control className="add-test-popup-test-type-control" type="text" placeholder="Enter test Type" name="subject" required value={test.subject} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-link">
							<Form.Label className="add-test-popup-test-link-label">Exam Link</Form.Label>
							<Form.Control className="add-test-popup-test-link-control" type="url" placeholder="Enter test Link" name="link" required value={test.link} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-price">
							<Form.Label className="add-test-popup-test-price-label">Exam Price</Form.Label>
							<Form.Control className="add-test-popup-test-price-control" type="number" min="0" placeholder="Enter test Price" name="price" required value={test.price} onChange={handleChange} />
						</Form.Group>
						<div className="add-test-popup-button-container">
							<Button className="add-test-popup-button" type="submit">
								{props.edit ? "Edit" : "Add"}
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AddTestPopup;
