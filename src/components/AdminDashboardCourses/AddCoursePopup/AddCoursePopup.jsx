import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddCoursePopup.css";
import { useState } from "react";

function AddCoursePopup(props) {
	library.add(faCircleXmark);
	const [course, setCourse] = useState({ courseName: "", courseLink: "", schoolType: "", coursePrice: 0, courseProvider: "", courseLocation: "", grade: props.grade });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(course);
	};

	const handleChange = (e) => {
		setCourse({ ...course, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	return (
		<div className="popup-outer-container">
			<FontAwesomeIcon onClick={closePopup} className="popup-xmark" icon="fa-solid fa-circle-xmark" />
			<form className="popup-inner-container" onSubmit={handleSubmit}>
				<h3>Add Test for {props.grade}</h3>
				<div className="popup-link">
					<label className="popup-text" htmlFor="fileLink">
						Course Link:
					</label>
					<input type="url" id="fileLink" name="courseLink" required value={course.courseLink} onChange={handleChange} />
				</div>
				<div className="popup-name-type">
					<div className="popup-name">
						<label className="popup-text" htmlFor="name">
							Course Name:
						</label>
						<input type="text" id="courseName" name="courseName" required value={course.courseName} onChange={handleChange} />
					</div>
					<div className="popup-type">
						<label className="popup-text" htmlFor="type">
							Course Type:
						</label>
						<select name="schoolType" id="schoolType" defaultValue="schoolType" onChange={handleChange}>
							<option value="schoolType" disabled>
								choose a type
							</option>
							<option value="National">National</option>
							<option value="International">International</option>
						</select>
					</div>
				</div>
				<div className="popup-provider-location">
					<div className="popup-provider">
						<label className="popup-text" htmlFor="provider">
							Course Provider:
						</label>
						<input type="text" id="courseProvider" name="courseProvider" required value={course.courseProvider} onChange={handleChange} />
					</div>
					<div className="popup-location">
						<label className="popup-text" htmlFor="location">
							Course Location:
						</label>
						<input type="text" id="courseLocation" name="courseLocation" required value={course.courseLocation} onChange={handleChange} />
					</div>
				</div>
				<div className="popup-price-button">
					<div className="popup-price">
						<label className="popup-text" htmlFor="price">
							Price:
						</label>
						<input type="number" id="coursePrice" name="coursePrice" min="0" max="1000" required value={course.coursePrice} onChange={handleChange} />
					</div>
					<button className="add-test-popup-button" type="submit">
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddCoursePopup;
