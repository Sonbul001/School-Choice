import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddSchoolPopup.css";

export default function AddSchoolPopup(props) {
	let datesTemp = { time: "", from: "", to: "" };
	let feesTemp = { classroom: "", fees: "" };
	let genderTemp = [];
	let typeTemp = [];
	let educationLevelTemp = [];
	let imagesTemp = [];

	let schoolTemp = {
		name: "",
		type: typeTemp,
		educationLevel: educationLevelTemp,
		gender: genderTemp,
		address: "",
		imgs: imagesTemp,
		dates: [datesTemp],
		fees: [feesTemp],
	};

	if (props.school !== undefined) {
		genderTemp = props.school.gender;
		typeTemp = props.school.type;
		educationLevelTemp = props.school.educationLevel;
		imagesTemp = props.school.imgs;

		schoolTemp = {
			name: props.school.name,
			type: typeTemp,
			educationLevel: educationLevelTemp,
			gender: genderTemp,
			address: props.school.address,
			imgs: imagesTemp,
			dates: props.school.dates,
			fees: [],
		};
	}

	library.add(faCircleXmark);
	const [dates, setDates] = useState([datesTemp]);
	const [fees, setFees] = useState([feesTemp]);
	const [school, setSchool] = useState(schoolTemp);
	const [type, setType] = useState(typeTemp);
	const [educationLevel, setEducationLevel] = useState(educationLevelTemp);
	const [gender, setGender] = useState(genderTemp);
	const [imgs, setImgs] = useState(imagesTemp);
	const [timeOption, setTimeOption] = useState();

	// setDates(...props.school.dates);
	// setFees(props.school.fees);

	if (props.school !== undefined) {
		useEffect(() => {
			setFees(() => {
				const newFees = [];
				props.school.fees.forEach((fee) => {
					newFees.push(fee);
				});
				return newFees;
			});
		}, [props.school.fees]);

		useEffect(() => {
			setDates(() => {
				const newDates = [];
				props.school.dates.forEach((date) => {
					newDates.push(date);
				});
				return newDates;
			});
		}, [props.school.dates]);
	}

	const handleTimeOptionChange = (event) => {
		setTimeOption(event.target.value);
		if (event.target.value === "morningTime") {
			setDates([{ ...datesTemp, time: "Morning Time" }]);
		} else if (event.target.value === "eveningTime") {
			setDates([{ ...datesTemp, time: "Evening Time" }]);
		} else if (event.target.value === "morningAndEveningTimes") {
			setDates([
				{ ...datesTemp, time: "Morning Time" },
				{ ...datesTemp, time: "Evening Time" },
			]);
		}
	};

	const handleImageChange = (event) => {
		const fileList = event.target.files;
		const imagesArray = Array.from(fileList);
		setImgs(imagesArray);
	};

	const handleCheckboxChangeType = (event) => {
		const item = event.target.value;
		const isChecked = event.target.checked;
		if (isChecked) {
			setType([...type, item]);
		} else {
			setType(type.filter((checkedItem) => checkedItem !== item));
		}
	};

	const handleCheckboxChangeEducationLevel = (event) => {
		const item = event.target.value;
		const isChecked = event.target.checked;
		if (isChecked) {
			setEducationLevel([...educationLevel, item]);
		} else {
			setEducationLevel(educationLevel.filter((checkedItem) => checkedItem !== item));
		}
	};

	const handleCheckboxChangeGender = (event) => {
		const item = event.target.value;
		const isChecked = event.target.checked;
		if (isChecked) {
			setGender([...gender, item]);
		} else {
			setGender([gender.filter((checkedItem) => checkedItem !== item)]);
		}
	};

	const handleTimeChange = (event, index) => {
		const { name, value } = event.target;
		const newTimes = [...dates];
		newTimes[index] = { ...newTimes[index], [name]: value };
		setDates(newTimes);
	};

	const handleAddFee = () => {
		setFees([...fees, feesTemp]);
	};

	const handleRemoveFee = (index) => {
		setFees([...fees.slice(0, index), ...fees.slice(index + 1)]);
	};

	const handleFeeChange = (event, index) => {
		const { name, value } = event.target;
		const newFees = [...fees];
		newFees[index] = { ...newFees[index], [name]: value };
		setFees(newFees);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSchool({ ...school, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newSchool = { ...school, imgs, gender, type, educationLevel, dates, fees };
		console.log("New School:", newSchool);
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	return (
		<div className="admin-school-body">
			<div className="admin-school-form">
				<FontAwesomeIcon onClick={closePopup} className="admin-school-form-xmark" icon="fa-solid fa-circle-xmark" />
				<Form onSubmit={handleSubmit}>
					<h1 className="admin-school-form-title">Add New School</h1>
					<Row className="admin-school-form-row">
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Name </Form.Label>
							<Form.Control type="text" name="name" value={school.name} onChange={handleInputChange} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Address </Form.Label>
							<Form.Control type="text" name="address" value={school.address} onChange={handleInputChange} />
						</Form.Group>
					</Row>
					<hr className="admin-school-from-hori-line" />
					<Row className="admin-school-form-group-checklist">
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">Education Level</Form.Label>
							<Form.Check type="checkbox" label="Nursery" value="Nursery" checked={educationLevel.includes("Nursery")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Elementary" value="Elementary" checked={educationLevel.includes("Elementary")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Middle" value="Middle" checked={educationLevel.includes("Middle")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Secondary" value="Secondary" checked={educationLevel.includes("Secondary")} onChange={handleCheckboxChangeEducationLevel} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">Genders</Form.Label>
							<Form.Check type="checkbox" label="Boys" value="Boys" checked={gender.includes("Boys")} onChange={handleCheckboxChangeGender} />
							<Form.Check type="checkbox" label="Girls" value="Girls" checked={gender.includes("Girls")} onChange={handleCheckboxChangeGender} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Type</Form.Label>
							<Form.Check type="checkbox" label="National" value="National" checked={type.includes("National")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="International" value="International" checked={type.includes("International")} onChange={handleCheckboxChangeType} />
						</Form.Group>
					</Row>
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">Images</Form.Label>
						<Form.Control type="file" name="imgs" multiple onChange={handleImageChange} />
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Form.Group className="admin-school-form-group-checklist-items">
						<Form.Label className="admin-school-form-group-checklist-item-label">Communication Times</Form.Label>
						<Form.Check type="radio" label="Morning Time Only" value="morningTime" checked={timeOption === "morningTime"} onChange={handleTimeOptionChange} />
						<Form.Check type="radio" label="Evening Time Only" value="eveningTime" checked={timeOption === "eveningTime"} onChange={handleTimeOptionChange} />
						<Form.Check type="radio" label="Morning and Evening Times" value="morningAndEveningTimes" checked={timeOption === "morningAndEveningTimes"} onChange={handleTimeOptionChange} />
					</Form.Group>
					{dates[0].time !== ""
						? dates.map((time, index) => (
								<div key={index}>
									<Form.Group>
										<Form.Label className="admin-school-form-group-checklist-item-label">{time.time}</Form.Label>
										<Row>
											<Form.Group as={Col}>
												<Form.Label>From</Form.Label>
												<Form.Control type="time" name="from" value={time.from} onChange={(event) => handleTimeChange(event, index)} />
											</Form.Group>
											<Form.Group as={Col}>
												<Form.Label>To</Form.Label>
												<Form.Control type="time" name="to" value={time.to} onChange={(event) => handleTimeChange(event, index)} />
											</Form.Group>
										</Row>
									</Form.Group>
								</div>
						  ))
						: null}
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">Fees</Form.Label>
						{fees.map((fee, index) => (
							<div key={index}>
								<Row>
									<Form.Group as={Col}>
										<Form.Label className="admin-school-form-group-checklist-item-label">Classroom</Form.Label>
										<Form.Control type="text" name="classroom" value={fee.classroom} onChange={(event) => handleFeeChange(event, index)} />
									</Form.Group>
									<Form.Group as={Col}>
										<Form.Label className="admin-school-form-group-checklist-item-label">fees</Form.Label>
										<Form.Control type="number" name="fees" value={fee.fees} onChange={(event) => handleFeeChange(event, index)} />
									</Form.Group>
								</Row>
								{fees.length === 1 ? null : (
									<Button variant="danger" className="admin-school-form-group-checklist-button" type="button" onClick={() => handleRemoveFee(index)}>
										Remove
									</Button>
								)}
							</div>
						))}
						<Button className="admin-school-form-group-checklist-button" type="button" onClick={handleAddFee}>
							Add Fee
						</Button>
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Button className="admin-school-form-group-checklist-button" type="submit">
						Submit form
					</Button>
				</Form>
			</div>
		</div>
	);
}
