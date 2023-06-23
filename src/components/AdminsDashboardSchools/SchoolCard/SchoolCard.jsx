import Carousel from "react-bootstrap/Carousel";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import AddSchoolPopup from "../AddSchoolPopup/AddSchoolPopup";
import { useState, useEffect } from "react";
import "./SchoolCard.css";

export default function SchoolCard(props) {
	const [showPopup, setShowPopup] = useState(false);

	const openClosePopup = (index) => {
		setShowPopup(!showPopup);
	};

	function convertTimeTo12H(time24) {
		// Split the time string into hours and minutes
		const [hours, minutes] = time24.split(":");

		// Convert the hours to a number
		const hoursNum = parseInt(hours);

		// Determine whether it's morning or afternoon
		const meridiem = hoursNum < 12 ? "AM" : "PM";

		// Convert the hours to 12-hour format
		const hours12 = hoursNum % 12 || 12;

		// Combine the hours, minutes, and meridiem into a string
		const time12 = `${hours12}:${minutes} ${meridiem}`;

		return time12;
	}

	const [newDates, setNewDates] = useState([]);

	useEffect(() => {
		const newDates = props.school.dates.map((date) => {
			return {
				...date,
				from: convertTimeTo12H(date.from),
				to: convertTimeTo12H(date.to),
			};
		});
		setNewDates(newDates);
	}, []);

	return (
		<div>
			<div className="admin-schools-page-popup">{showPopup && <AddSchoolPopup school={props.school} openClosePopup={() => openClosePopup()} />}</div>
			<Card className="admins-school-card">
				<Card.Body>
					<Card.Text className="admins-school-card-header">
						<Card.Title className="admins-school-card-header-title">{props.school.name}</Card.Title>
						<div className="admins-school-card-buttons">
							<Button variant="secondary" onClick={openClosePopup}>
								Edit
							</Button>
							<Button variant="danger">Delete</Button>
						</div>
					</Card.Text>
					<Card.Text className="admins-school-card-tab">
						<Tabs defaultActiveKey="about">
							<Tab eventKey="about" title="About">
								<ListGroup className="admins-school-card-information">
									<ListGroup.Item id="admins-school-card-information-item">
										<strong id="admins-school-card-information-item-strong">School Type: </strong>
										{props.school.type.join(" and ")}
									</ListGroup.Item>
									<ListGroup.Item id="admins-school-card-information-item">
										<strong id="admins-school-card-information-item-strong">Educational Level: </strong>
										{props.school.educationLevel.join(" and ")}
									</ListGroup.Item>
									<ListGroup.Item id="admins-school-card-information-item">
										<strong id="admins-school-card-information-item-strong">Gender: </strong>
										{props.school.gender.join(" and ")}
									</ListGroup.Item>
									<ListGroup.Item id="admins-school-card-information-item">
										<strong id="admins-school-card-information-item-strong">Address: </strong>
										{props.school.address}
									</ListGroup.Item>
								</ListGroup>
								<hr id="admins-school-card-information-hr" />
								<Carousel interval={null} className="admins-school-card-information-carousel">
									{props.school.imgs.map((img) => {
										return (
											<Carousel.Item>
												<img id="admins-school-card-information-carousel-item" src={img} alt="First slide" />
											</Carousel.Item>
										);
									})}
								</Carousel>
							</Tab>
							<Tab eventKey="dates" title="Dates">
								<Container fluid className="admins-school-card-dates">
									<Row>
										{newDates.map((date) => {
											return (
												<Col>
													<p className="admins-school-card-dates-head">{date.time}</p>
													<p className="admins-school-card-dates-body">
														{date.from} to {date.to}
													</p>
												</Col>
											);
										})}
									</Row>
								</Container>
							</Tab>
							<Tab eventKey="fees" title="Fees">
								<Card.Text className="admins-school-card-fees">
									<Table striped bordered hover>
										<thead>
											<tr>
												<th>Classroom</th>
												<th>Fees</th>
											</tr>
										</thead>
										<tbody>
											{props.school.fees.map((fee) => {
												return (
													<tr>
														<td>{fee.classroom}</td>
														<td>{fee.fees}</td>
													</tr>
												);
											})}
										</tbody>
									</Table>
								</Card.Text>
							</Tab>
						</Tabs>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
