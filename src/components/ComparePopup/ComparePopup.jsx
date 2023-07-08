import React, { useState, useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Col, Container, Row, Card, ListGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ComparePopup.css";

export default function ComparePopup(props) {
	console.log(props.schools)
	const closePopup = () => {
		props.openClosePopup();
	};
	/* { name: "School 1", address: "city 1", type: "National", gender: "Mixed", rating: "4.5", startingFees: "1000", map: "https://www.google.com/maps" } */

	library.add(faCircleXmark);
	return (
		<div>
			<Card className="compare-popup">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="compare-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="compare-popup-title">
						Compare between {props.schools[0].name} and {props.schools[1].name}
						<hr />
					</Card.Title>
					<Card.Text>
						<Container>
							<Row className="compare-popup-schools">
								{props.schools.map((school, index) => (
									<Col key={index}>
										<Card className="compare-popup-school">
											<Card.Body>
												<Card.Title className="compare-popup-school-title">{school.name}</Card.Title>
												<Card.Text className="compare-popup-school-text">
													<ListGroup className="compare-popup-school-information">
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">School Type: </strong>
															{school.type}
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Genders: </strong>
															{school.gender}
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Educational Level: </strong>
															Primary
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Minimum Fees: </strong>
															{school.MinimumFee}
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Maximum Fees: </strong>
															{school.MaximumFee}
														</ListGroup.Item>
													</ListGroup>
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>
						</Container>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
