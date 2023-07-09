import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddCoursePopup.css";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function AddCoursePopup(props) {
	let courseTemp = {
		name: "",
		description: "",
		startDate: "",
		endDate: "",
		link: "",
		type: "",
		price: 0,
		provider: "",
		location: "",
		classroom: ""
	};

	if (props.course !== undefined) {
		courseTemp = props.course;
		useEffect(() => {
			setStartDate(props.course.startDate);
			setEndDate(props.course.endDate);
		}, [props.course, props.grade]);
	}

	library.add(faCircleXmark);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [course, setCourse] = useState(courseTemp);

	function handleStartDateChange(event) {
		setStartDate(event.target.value)
		setCourse({ ...course, ['startDate']: event.target.value });
	}

	function handleEndDateChange(event) {
		setEndDate(event.target.value);
		setCourse({ ...course, ['endDate']: event.target.value });
	}

	useEffect(() => {
		setCourse({ ...course, classroom: props.grade });
	}, []);

	const handleChange = (e) => {
		setCourse({ ...course, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!props.edit) {
		fetch('http://localhost:3000/courses/course', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(course)
		})
			.then(response => response.json())
			.then(() => alert('Course Added successfully'))
			.then(() => window.location.reload())
			.catch(err => console.error(err))
		} else {
			fetch(`http://localhost:3000/courses/course/${props.course.id}`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(course)
		})
			.then(response => response.json())
			.then(() => alert('Exam Edited successfully'))
			.then(() => window.location.reload())
			.catch(err => console.error(err))
		}
	};

	return (
		<div className="add-course-popup-outer-container">
			<Card className="add-course-popup-inner-container">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="add-course-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="add-course-popup-title">{props.edit ? "Edit" : "Add"} Course for {props.grade}</Card.Title>
					<hr />
					<Form onSubmit={handleSubmit}>
						<Form.Group className="add-course-popup-course-name">
							<Form.Label className="add-course-popup-course-name-label">Course Name</Form.Label>
							<Form.Control className="add-course-popup-course-name-control" type="text" placeholder="Enter Course Name" name="name" required value={course.name} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-name">
							<Form.Label className="add-course-popup-course-name-label">Course Logo</Form.Label>
							<Form.Control className="add-course-popup-course-name-control" type="url" placeholder="Enter Course Logo" name="logo" required value={course.logo} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-about">
							<Form.Label className="add-course-popup-course-about-label">About</Form.Label>
							<Form.Control className="add-course-popup-course-about-control" as="textarea" rows={3} placeholder="Enter Course About" name="description" required value={course.description} onChange={handleChange} />
						</Form.Group>
						<Row>
							<Form.Group as={Col} className="add-course-popup-course-starting date">
								<Form.Label className="add-course-popup-course-starting-label">Starting Date</Form.Label>
								<Form.Control className="add-course-popup-course-starting-control" type="date" placeholder="Enter Course Starting Date" name="startDate" required value={startDate} onChange={handleStartDateChange} />
							</Form.Group>
							<Form.Group as={Col} className="add-course-popup-course-ending date">
								<Form.Label className="add-course-popup-course-ending-label">Ending Date</Form.Label>
								<Form.Control className="add-course-popup-course-ending-control" type="date" placeholder="Enter Course Ending Date" name="endDate" required value={endDate} onChange={handleEndDateChange} />
							</Form.Group>
						</Row>
						<Form.Group className="add-course-popup-course-link">
							<Form.Label className="add-course-popup-course-link-label">Course Link</Form.Label>
							<Form.Control className="add-course-popup-course-link-control" type="url" placeholder="Enter Course Link" name="link" required value={course.link} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-type">
							<Form.Label className="add-course-popup-course-type-label">Course Type</Form.Label>
							<Form.Control className="add-course-popup-course-type-control" type="text" placeholder="Enter Course Type" name="type" required value={course.type} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-price">
							<Form.Label className="add-course-popup-course-price-label">Course Price</Form.Label>
							<Form.Control className="add-course-popup-course-price-control" type="number" min="0" placeholder="Enter Course Price" name="price" required value={course.price} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-provider">
							<Form.Label className="add-course-popup-course-provider-label">Course Provider</Form.Label>
							<Form.Control className="add-course-popup-course-provider-control" type="text" placeholder="Enter Course Provider" name="provider" required value={course.provider} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-location">
							<Form.Label className="add-course-popup-course-location-label">Course Location</Form.Label>
							<Form.Control className="add-course-popup-course-location-control" type="text" placeholder="Enter Course Location" name="location" required value={course.location} onChange={handleChange} />
						</Form.Group>
						<div className="add-course-popup-button-container">
							<Button className="add-course-popup-button" type="submit">
								{props.edit ? "Edit" : "Add"}
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AddCoursePopup;
