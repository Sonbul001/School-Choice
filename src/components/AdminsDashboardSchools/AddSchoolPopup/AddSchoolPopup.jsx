import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddSchoolPopup.css";
import logo from "../../../assets/logo.png";

export default function AddSchoolPopup(props) {
	let feeTemp = { classroom: "", fee: "" };
	let feesSectionTemp = { type: "", fees: [feeTemp] };
	let typeTemp = [];
	let educationLevelTemp = [];
	let imagesTemp = [];
	let phonesTemp = "";

	let schoolTemp = {
		name: "",
		logo: "",
		about: "",
		type: typeTemp,
		educationLevel: educationLevelTemp,
		gender: "",
		address: "",
		advertised: false,
		map: "",
		city: "",
		imgs: imagesTemp,
		website: "",
		phones: [phonesTemp],
		email: "",
		feesSection: [feesSectionTemp],
	};

	if (props.school !== undefined) {
		schoolTemp = {
			name: props.school.name,
			about: props.school.about,
			gender: props.school.gender,
			address: props.school.address,
			advertised: props.school.advertised,
			map: props.school.map,
			city: props.school.city,
			website: props.school.website,
			email: props.school.email,
		};
	}

	library.add(faCircleXmark);
	const [feesSection, setFeesSection] = useState([feesSectionTemp]);
	const [school, setSchool] = useState(schoolTemp);
	const [type, setType] = useState(typeTemp);
	const [educationLevel, setEducationLevel] = useState(educationLevelTemp);
	const [gender, setGender] = useState("");
	const [imgs, setImgs] = useState(imagesTemp);
	const [advertised, setAdvertised] = useState(false);
	const [phones, setPhones] = useState([phonesTemp]);

	if (props.school !== undefined) {
		useEffect(() => {
			setFeesSection(props.school.feesSection);
			setType(props.school.type);
			setEducationLevel(props.school.educationLevel);
			setPhones(props.school.phones);
			setGender(props.school.gender);
			console.log(props.school.feesSection);
		}, [props.school.feesSection, props.school.type, props.school.educationLevel, props.school.imgs, props.school.phones, props.school.gender]);
	}

	const handleImageAdd = (event) => {
		const fileList = event.target.files;
		if (fileList.length === 0) {
			return;
		}
		const newImages = [...imgs];
		const imagesArray = Array.from(fileList);
		const images = imagesArray.map((image) => URL.createObjectURL(image));
		newImages.push(...images);
		setImgs(newImages);
	};

	const handleImageRemove = (index) => {
		const newImages = [...imgs];
		newImages.splice(index, 1);
		setImgs(newImages);
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

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handlePhoneChange = (event, index) => {
		const { name, value } = event.target;
		const newPhones = [...phones];
		newPhones[index] = value;
		setPhones(newPhones);
	};

	const handleAddPhone = () => {
		const newPhones = [...phones];
		newPhones.push(phonesTemp);
		setPhones(newPhones);
	};

	const handleRemovePhone = (index) => {
		const newPhones = [...phones];
		newPhones.splice(index, 1);
		setPhones(newPhones);
	};

	const setFeesSectionTemp = () => {
		const newType = [...type];
		const newFeesSection = [];
		newType.forEach((type) => {
			newFeesSection.push({ type: type, fees: [feeTemp] });
		});
		setFeesSection(newFeesSection);
	};

	if (props.school === undefined) {
		useEffect(() => {
			setFeesSectionTemp();
		}, [type]);
	}

	const handleAddFeeInFeeSection = (index) => {
		const newFeesSection = [...feesSection];
		newFeesSection[index].fees.push(feeTemp);
		setFeesSection(newFeesSection);
	};

	const handleRemoveFeeInFeeSection = (index, feeIndex) => {
		const newFeesSection = [...feesSection];
		newFeesSection[index].fees.splice(feeIndex, 1);
		setFeesSection(newFeesSection);
	};

	const handleFeeChangeInFeeSection = (event, index, feeIndex) => {
		const { name, value } = event.target;
		const newFeesSection = [...feesSection];
		newFeesSection[index].fees[feeIndex] = { ...newFeesSection[index].fees[feeIndex], [name]: value };
		setFeesSection(newFeesSection);
	};

	const handleAdvertisementChange = () => {
		setAdvertised(!advertised);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSchool({ ...school, [name]: value });
		if (name === "logo") {
			setSchool({ ...school, [name]: URL.createObjectURL(event.target.files[0]) });
		}
	};

	const closePopup = () => {
		props.openClosePopup();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newSchool = {
			name: school.name,
			logo: school.logo,
			about: school.about,
			type: type,
			educationLevel: educationLevel,
			gender: gender,
			address: school.address,
			advertised: advertised,
			map: school.map,
			city: school.city,
			imgs: imgs,
			website: school.website,
			phones: phones,
			email: school.email,
			feesSection: feesSection,
		};
		console.log(newSchool);
		// const token = localStorage.getItem("token");
		// fetch("http://localhost:3000/schools/school", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// 	body: JSON.stringify(school),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data))
		// 	.catch((error) => console.error(error));
		// closePopup();
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
							<Form.Label className="admin-school-form-group-checklist-item-label">School City </Form.Label>
							<Form.Control type="text" name="city" value={school.city} onChange={handleInputChange} />
						</Form.Group>
					</Row>
					{/* <hr className="admin-school-from-hori-line" /> */}
					<Row>
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Address </Form.Label>
							<Form.Control type="text" name="address" value={school.address} onChange={handleInputChange} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Map </Form.Label>
							<Form.Control type="text" name="map" value={school.map} onChange={handleInputChange} />
						</Form.Group>
					</Row>
					{/* <hr className="admin-school-from-hori-line" /> */}
					<Row>
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Website </Form.Label>
							<Form.Control type="text" name="website" value={school.website} onChange={handleInputChange} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group">
							<Form.Label className="admin-school-form-group-checklist-item-label">Advertised </Form.Label>
							<Form.Check type="checkbox" name="advertised" value={advertised} onChange={handleAdvertisementChange} />
						</Form.Group>
					</Row>
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">School About </Form.Label>
						<Form.Control as="textarea" name="about" value={school.about} onChange={handleInputChange} rows={3} />
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">School Logo</Form.Label>
						<Form.Control type="file" name="logo" value={school.logo} onChange={handleInputChange} />
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Row className="admin-school-form-group-checklist">
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">Education Level</Form.Label>
							<Form.Check type="checkbox" label="KG" value="KG" checked={educationLevel.includes("KG")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Primary" value="Primary" checked={educationLevel.includes("Primary")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Preparatory" value="Preparatory" checked={educationLevel.includes("Preparatory")} onChange={handleCheckboxChangeEducationLevel} />
							<Form.Check type="checkbox" label="Secondary" value="Secondary" checked={educationLevel.includes("Secondary")} onChange={handleCheckboxChangeEducationLevel} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">Genders</Form.Label>
							<Form.Check type="radio" name="gender" label="Boys" value="Boys" checked={gender === "Boys"} onChange={handleGenderChange} />
							<Form.Check type="radio" name="gender" label="Girls" value="Girls" checked={gender === "Girls"} onChange={handleGenderChange} />
							<Form.Check type="radio" name="gender" label="Mixed" value="Mixed" checked={gender === "Mixed"} onChange={handleGenderChange} />
						</Form.Group>
						<Form.Group as={Col} className="admin-school-form-group-checklist-items">
							<Form.Label className="admin-school-form-group-checklist-item-label">School Type</Form.Label>
							<Form.Check type="checkbox" label="National" value="National" checked={type.includes("National")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="IGCSE" value="IGCSE" checked={type.includes("IGCSE")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="American" value="American" checked={type.includes("American")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="Lycee" value="Lycee" checked={type.includes("Lycee")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="German" value="German" checked={type.includes("German")} onChange={handleCheckboxChangeType} />
							<Form.Check type="checkbox" label="Canadian" value="Canadian" checked={type.includes("Canadian")} onChange={handleCheckboxChangeType} />
						</Form.Group>
					</Row>
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">Add Images</Form.Label>
						<Form.Control type="file" name="imgs" defaultValue={imgs} multiple onChange={handleImageAdd} />
						<Form.Label className="admin-school-form-group-checklist-item-label">Remove Images</Form.Label>
						<div className="admin-school-form-imgs">
							{imgs.map((img, index) => (
								<div key={index}>
									<FontAwesomeIcon onClick={() => handleImageRemove(index)} className="admin-school-form-imgs-xmark" icon="fa-solid fa-circle-xmark" />
									<img className="admin-school-form-imgs-item" src={img} alt={index + 1} />
									{console.log(img)}
								</div>
							))}
						</div>
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Form.Group className="admin-school-form-group-checklist-items">
						<Form.Label className="admin-school-form-group-checklist-item-label">Contact Numbers</Form.Label>
					</Form.Group>
					{phones.map((phone, index) => (
						<div key={index}>
							<Form.Label className="admin-school-form-group-checklist-item-label">Phone {index + 1}</Form.Label>
							<Form.Control type="text" name="phone" value={phone} onChange={(event) => handlePhoneChange(event, index)} />
							{phones.length === 1 ? null : (
								<Button variant="danger" className="admin-school-form-group-checklist-button" type="button" onClick={() => handleRemovePhone(index)}>
									Remove
								</Button>
							)}
						</div>
					))}
					<Button className="admin-school-form-group-checklist-button" type="button" onClick={handleAddPhone}>
						Add Phone
					</Button>
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">Email</Form.Label>
						<Form.Control type="email" name="email" value={school.email} onChange={handleInputChange} />
					</Form.Group>
					<hr className="admin-school-from-hori-line" />
					<Form.Group>
						<Form.Label className="admin-school-form-group-checklist-item-label">Fees</Form.Label>
						{type.length === 0 ? (
							<p>Please enter at least 1 type</p>
						) : (
							feesSection.map((section, index) => (
								<div key={index}>
									<Form.Label className="admin-school-form-group-checklist-item-label">{section.type}</Form.Label>
									{section.fees.map((fee, feeIndex) => (
										<div key={feeIndex}>
											<Row>
												<Form.Group as={Col}>
													<Form.Label className="admin-school-form-group-checklist-item-label">Classroom</Form.Label>
													<Form.Control type="text" name="classroom" value={fee.classroom} onChange={(event) => handleFeeChangeInFeeSection(event, index, feeIndex)} />
												</Form.Group>
												<Form.Group as={Col}>
													<Form.Label className="admin-school-form-group-checklist-item-label">Fees</Form.Label>
													<Form.Control type="number" name="fee" value={fee.fee} onChange={(event) => handleFeeChangeInFeeSection(event, index, feeIndex)} />
												</Form.Group>
											</Row>
											{section.fees.length === 1 ? null : (
												<Button variant="danger" className="admin-school-form-group-checklist-button" type="button" onClick={() => handleRemoveFeeInFeeSection(index, feeIndex)}>
													Remove
												</Button>
											)}
										</div>
									))}
									<Button className="admin-school-form-group-checklist-button" type="button" onClick={() => handleAddFeeInFeeSection(index)}>
										Add Fee
									</Button>
								</div>
							))
						)}
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
