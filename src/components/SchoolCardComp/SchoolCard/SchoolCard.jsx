import React from "react";
import { useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../assets/Logo2.png";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./SchoolCard.css";

function SchoolCard(props) {
	const { name, logo, about, type, educationLevel, gender, address, advertised, map, city, images, website, phones, email, MinimumFee, MaximumFee } = props.schoolInfo;
	library.add(faFlag, faPeopleGroup, faStar);
	return (
		<div id="cardd">
			<Card className="school-card">
				<Card.Header className="school-card-header">
					<Row className="school-card-header-row">
						<div className="school-card-header-left">
							<Col className="school-card-header-left-icons">
								<FontAwesomeIcon className="school-card-header-left-icons-item" icon="fa-solid fa-flag" />
								<FontAwesomeIcon className="school-card-header-left-icons-item" icon="fa-solid fa-people-group" />
							</Col>
							<Col>
								<Card.Text className="school-card-header-left-text">{Array.isArray(type) && type.includes("national") ? "National" : "International"}</Card.Text>
								<Card.Text className="school-card-header-left-text">{gender}</Card.Text>
							</Col>
						</div>
					</Row>
				</Card.Header>
				<Card.Img className="school-card-img" variant="top" src={logo} />
				<Card.Body className="school-card-body">
					<Card.Title className="school-card-body-title">{name}</Card.Title>
					<small className="school-card-body-small">{city}</small>
				</Card.Body>
				<Card.Footer className="school-card-footer">
					<Row className="school-card-footer-row">
						<Col className="school-card-footer-row-left col-md-8">
							<small className="school-card-footer-row-left-text">Starting Fees: {MinimumFee} EGP</small>
						</Col>
						<Col className="school-card-footer-row-right col-md-4">
							<Button className="school-card-footer-row-right-button" href={map}>
								Map
							</Button>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default SchoolCard;
