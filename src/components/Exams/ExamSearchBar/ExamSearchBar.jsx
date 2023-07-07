import React from "react";
import { Tabs, Tab, Col, Container, Row, Table, Card, ListGroup, Form, Button } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import "./ExamSearchBar.css";

export default function ExamSearchBar(props) {
	const [searchText, setSearchText] = useState("");

	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSearch(searchText);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} className="exam-search-bar">
				<Form.Group className="exam-search-bar-input">
					<Form.Control type="text" placeholder="Enter Exam Name" value={searchText} onChange={handleSearchTextChange} />
				</Form.Group>
				<Form.Group className="exam-search-bar-button">
					<Button variant="primary" type="submit">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						Search
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
}