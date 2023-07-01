import React, { useState, useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Col, Container, Row, Card, ListGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ComparePopup.css";

export default function ComparePopup(props) {
	const closePopup = () => {
		props.openClosePopup();
	};

	library.add(faCircleXmark);
	return (
		<div className="compare-popup-shadow">
			<Card className="compare-popup">
				<Card.Body>
					<FontAwesomeIcon onClick={closePopup} className="compare-popup-xmark" icon="fa-solid fa-circle-xmark" />
					<Card.Title className="compare-popup-title">
						Compare between {props.schools[0].cardTitle} and {props.schools[1].cardTitle}
						<hr />
					</Card.Title>
					<Card.Text>
						<Container>
							<Row className="compare-popup-schools">
								{props.schools.map((school, index) => (
									<Col key={index}>
										<Card className="compare-popup-school">
											<Card.Body>
												<Card.Title className="compare-popup-school-title">{school.cardTitle}</Card.Title>
												<Card.Text className="compare-popup-school-text">
													<ListGroup className="compare-popup-school-information">
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Rating: </strong>
															5.0
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">School Type: </strong>
															National
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Genders: </strong>
															Mixed
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Educational Level: </strong>
															Primary
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Minimum Fees: </strong>
															10000
														</ListGroup.Item>
														<ListGroup.Item id="compare-popup-school-information-item">
															<strong id="compare-popup-school-information-item-strong">Maximum Fees: </strong>
															20000
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
