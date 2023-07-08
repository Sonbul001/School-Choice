import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddTestPopup.css";
import { useState } from "react";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Form, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";

function AddTestPopup(props) {
	let testTemp = {
		name: "",
		description: "",
		subject: "",
		link: "",
		price: 0,
	};

	if (props.exam !== undefined) {
		testTemp = props.exam;
	}

	library.add(faCircleXmark);
	const [test, setTest] = useState(testTemp);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTest({ ...test, classroom: props.grade });
		console.log(test);
	};

	const handleChange = (e) => {
		setTest({ ...test, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};
	// name varchar(255) 
	// subject varchar(255) 
	// description varchar(255) 
	// maxGrade int 
	// duration int 
	// link varchar(255) 
	// classroom varchar(255) 
	// price int 
	// logo varchar(255) 
	// type varchar(255)

	return (
		<div className="add-test-popup-outer-container">
			<Card className="add-test-popup-inner-container">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="add-test-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="add-test-popup-title">Add Test for {props.grade}</Card.Title>
					<hr />
					<Form onSubmit={handleSubmit}>
						<Form.Group className="add-test-popup-test-name">
							<Form.Label className="add-test-popup-test-name-label">Test Name</Form.Label>
							<Form.Control className="add-test-popup-test-name-control" type="text" placeholder="Enter test Name" name="testName" required value={test.name} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-about">
							<Form.Label className="add-test-popup-test-about-label">Description</Form.Label>
							<Form.Control className="add-test-popup-test-about-control" as="textarea" rows={3} placeholder="Enter test About" name="about" required value={test.description} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-type">
							<Form.Label className="add-test-popup-test-type-label">Test Subject</Form.Label>
							<Form.Control className="add-test-popup-test-type-control" type="text" placeholder="Enter test Type" name="schoolType" required value={test.subject} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-link">
							<Form.Label className="add-test-popup-test-link-label">Test Link</Form.Label>
							<Form.Control className="add-test-popup-test-link-control" type="url" placeholder="Enter test Link" name="testLink" required value={test.link} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-test-popup-test-price">
							<Form.Label className="add-test-popup-test-price-label">Test Price</Form.Label>
							<Form.Control className="add-test-popup-test-price-control" type="number" min="0" placeholder="Enter test Price" name="testPrice" required value={test.price} onChange={handleChange} />
						</Form.Group>
						<div className="add-test-popup-button-container">
							<Button className="add-test-popup-button" type="submit">
								Add
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AddTestPopup;
