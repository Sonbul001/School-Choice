import Carousel from "react-bootstrap/Carousel";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../../../assets/logo.png";
import AddSchoolPopup from "../AddSchoolPopup/AddSchoolPopup";
import { useState, useEffect } from "react";
import "./SchoolAdminCard.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function SchoolAdminCard(props) {
	const [showPopup, setShowPopup] = useState(false);

	const openClosePopup = () => {
		setShowPopup(!showPopup);
	};

	console.log(props.school);

	return (
		<div>
			<div className="admin-schools-page-popup">{showPopup && <AddSchoolPopup school={props.school} openClosePopup={() => openClosePopup()} />}</div>
			<Card className="admins-school-card">
				<Card.Body>
					<Card.Text className="admins-school-card-header">
						<div className="admins-school-card-title-pic">
							<img src={props.school.logo} alt="school logo" className="admins-school-card-header-img" />
							<Card.Title className="admins-school-card-header-title">{props.school.name}</Card.Title>
							<div className="admins-school-card-header-advertised-city">
								{props.school.advertised ? (
									<p className="admins-school-card-header-advertised" style={{ color: "green" }}>
										Advertised
									</p>
								) : (
									<p className="admins-school-card-header-advertised" style={{ color: "red" }}>
										Not Advertised
									</p>
								)}
								<p className="admins-school-card-header-city">{props.school.city}</p>
							</div>
						</div>

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
										{props.school.gender}
									</ListGroup.Item>
									<a href={props.school.map} className="admins-school-card-information-map-link">
										<ListGroup.Item id="admins-school-card-information-item-address">
											<strong id="admins-school-card-information-item-strong">Address: </strong>
											{props.school.address}
										</ListGroup.Item>
									</a>
								</ListGroup>
								<hr id="admins-school-card-information-hr" />
								<p className="admins-school-card-information-about">{props.school.about}</p>
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
							<Tab eventKey="communication" title="Communication" id="admins-school-card-communication-tab">
								<Container fluid className="admins-school-card-communication">
									<Row>
										<p className="admins-school-card-communication-head">Contact Information</p>
										<div className="admins-school-card-communication-phones">
											{props.school.phones.map((phone) => {
												return <p className="admins-school-card-communication-body">{phone}</p>;
											})}
										</div>
									</Row>
									<Row>
										<Col style={{ marginBottom: "20px" }}>
											<p className="admins-school-card-communication-head">Email</p>
											<p className="admins-school-card-communication-body">{props.school.email}</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="admins-school-card-communication-head">Website</p>
											<p className="admins-school-card-communication-body">{props.school.website}</p>
										</Col>
									</Row>
								</Container>
							</Tab>
							<Tab eventKey="fees" title="Fees">
								<Card.Text className="admins-school-card-fees">
									{props.school.feesSection.map((feesSection) => {
										return (
											<div>
												<p className="admins-school-card-fees-head">{feesSection.type}</p>
												<Table striped bordered hover className="admins-school-card-fees-table">
													<thead>
														<tr>
															<th>Classroom</th>
															<th>Fees</th>
														</tr>
													</thead>
													<tbody>
														{feesSection.fees.map((fees) => {
															return (
																<tr>
																	<td>{fees.classroom}</td>
																	<td>{fees.fees}</td>
																</tr>
															);
														})}
													</tbody>
												</Table>
											</div>
										);
									})}
								</Card.Text>
							</Tab>
						</Tabs>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
