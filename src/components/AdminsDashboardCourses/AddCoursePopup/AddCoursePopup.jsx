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
		courseName: "",
		about: "",
		duration: "",
		startDate: "",
		endDate: "",
		courseLink: "",
		schoolType: "",
		coursePrice: 0,
		courseProvider: "",
		courseLocation: "",
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
		setStartDate(event.target.value);
	}

	function handleEndDateChange(event) {
		setEndDate(event.target.value);
	}

	useEffect(() => {
		const date1 = new Date(startDate);
		const date2 = new Date(endDate);
		const newDurationMonths = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
		if (newDurationMonths === 0) {
			const newDurationDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
			setCourse({ ...course, duration: `${newDurationDays} Days` });
			setCourse({ ...course, startDate: startDate });
			setCourse({ ...course, endDate: endDate });
		} else {
			setCourse({ ...course, duration: `${newDurationMonths} Months` });
			setCourse({ ...course, startDate: startDate });
			setCourse({ ...course, endDate: endDate });
		}
	}, [startDate, endDate]);

	const handleChange = (e) => {
		setCourse({ ...course, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCourse({ ...course, grade: props.grade });
		console.log(course);
		closePopup();
	};

	return (
		<div className="add-course-popup-outer-container">
			<Card className="add-course-popup-inner-container">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="add-course-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="add-course-popup-title">Add Course for {props.grade}</Card.Title>
					<hr />
					<Form onSubmit={handleSubmit}>
						<Form.Group className="add-course-popup-course-name">
							<Form.Label className="add-course-popup-course-name-label">Course Name</Form.Label>
							<Form.Control className="add-course-popup-course-name-control" type="text" placeholder="Enter Course Name" name="courseName" required value={course.courseName} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-about">
							<Form.Label className="add-course-popup-course-about-label">About</Form.Label>
							<Form.Control className="add-course-popup-course-about-control" as="textarea" rows={3} placeholder="Enter Course About" name="about" required value={course.about} onChange={handleChange} />
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
							<Form.Control className="add-course-popup-course-link-control" type="url" placeholder="Enter Course Link" name="courseLink" required value={course.courseLink} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-type">
							<Form.Label className="add-course-popup-course-type-label">Course Type</Form.Label>
							<Form.Control className="add-course-popup-course-type-control" type="text" placeholder="Enter Course Type" name="schoolType" required value={course.schoolType} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-price">
							<Form.Label className="add-course-popup-course-price-label">Course Price</Form.Label>
							<Form.Control className="add-course-popup-course-price-control" type="number" min="0" placeholder="Enter Course Price" name="coursePrice" required value={course.coursePrice} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-provider">
							<Form.Label className="add-course-popup-course-provider-label">Course Provider</Form.Label>
							<Form.Control className="add-course-popup-course-provider-control" type="text" placeholder="Enter Course Provider" name="courseProvider" required value={course.courseProvider} onChange={handleChange} />
						</Form.Group>
						<Form.Group className="add-course-popup-course-location">
							<Form.Label className="add-course-popup-course-location-label">Course Location</Form.Label>
							<Form.Control className="add-course-popup-course-location-control" type="text" placeholder="Enter Course Location" name="courseLocation" required value={course.courseLocation} onChange={handleChange} />
						</Form.Group>
						<div className="add-course-popup-button-container">
							<Button className="add-course-popup-button" type="submit">
								Add
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AddCoursePopup;
