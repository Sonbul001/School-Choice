import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ComparePopup from "../ComparePopup";
import "./SideCompStatusPopup.css";

export default function SideCompStatusPopup(props) {
	library.add(faCircleXmark, faScaleBalanced);
	const [clickable, setClickable] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [show, setShow] = useState(false);
	const [move, setMove] = useState(-250);

	const handleShow = () => {
		if (show) {
			setMove(0);
			setShow(false);
		} else {
			setMove(-250);
			setShow(true);
		}
	};
	useEffect(() => {
		if (props.schools.length === 2) {
			setClickable(true);
		}
	}, [props.schools]);

	const openClosePopup = () => {
		setShowPopup(!showPopup);
	};

	const pickSchool = (index, card) => {
		props.pickSchool(index, card);
	};

	return (
		<>
			<div className="side-comp-status-compare-popup">{showPopup && <ComparePopup schools={props.schools} openClosePopup={() => openClosePopup()} />}</div>
			{showPopup && <div className="side-comp-status-compare-popup-overlay"></div>}
			<div className="side-comp-status" style={{ right: move, transition: "all 0.3s ease-in-out" }}>
				<div className="left-side-comp-status" onClick={handleShow}>
					<div className="left-side-comp-status-num">{props.schools.length}</div>
					<div className="left-side-comp-status-img">
						<FontAwesomeIcon className="left-side-comp-status-img-icon" icon="fa-solid fa-scale-balanced" />
					</div>
				</div>
				<div className="right-side-comp-status">
					<div className="right-side-comp-status-title">Compare Schools</div>
					<div className="right-side-comp-status-schools">
						{props.schools.map((school, index) => (
							<div key={index} className="right-side-comp-status-school-item">
								<div className="right-side-comp-status-school-item-title">{school.name}</div>
								<FontAwesomeIcon className="right-side-comp-status-school-xmark" icon="fa-solid fa-circle-xmark" onClick={() => pickSchool(props.picked.at(index), school)} />
							</div>
						))}
						{!clickable ? (
							<div className="right-side-comp-status-schools-text">Add School</div>
						) : (
							<button className="right-side-comp-status-schools-button" variant="link" disabled={!clickable} onClick={openClosePopup}>
								Compare
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
