import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddTestPopup.css";
import { useState } from "react";

function AddTestPopup(props) {
	library.add(faCircleXmark);
	let returnedTest = {};
	const [test, setTest] = useState({ name: "", type: "", price: 0, link: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(test);
		returnedTest = test;
	};

	const handleChange = (e) => {
		setTest({ ...test, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	return (
		<div className="outer-container">
			<FontAwesomeIcon onClick={closePopup} className="xmark" icon="fa-solid fa-circle-xmark" />
			<form className="inner-container" onSubmit={handleSubmit}>
				<h3>Add Test for {props.grade}</h3>
				<div className="link">
					<label className="text" htmlFor="fileLink">
						File Link:
					</label>
					<input type="url" id="fileLink" name="link" required value={test.link} onChange={handleChange} />
				</div>
				<div className="name-type">
					<div className="name">
						<label className="text" htmlFor="name">
							Test Name:
						</label>
						<input type="text" id="name" name="name" required value={test.name} onChange={handleChange} />
					</div>
					<div className="type">
						<label className="text" htmlFor="type">
							Test Type:
						</label>
						<select name="type" id="type" defaultValue="type" onChange={handleChange}>
							<option value="type" disabled>
								choose a type
							</option>
							<option value="National">National</option>
							<option value="International">International</option>
						</select>
					</div>
				</div>
				<div className="price-button">
					<div className="price">
						<label className="text" htmlFor="price">
							Price:
						</label>
						<input type="number" id="price" name="price" min="0" max="1000" required value={test.price} onChange={handleChange} />
					</div>
					<button className="add-test-popup-button" type="submit">
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddTestPopup;
