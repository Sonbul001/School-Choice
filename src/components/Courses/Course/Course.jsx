import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo2.png";
import saved from "../../../assets/save.png";
import earth from "../../../assets/earth.png";

import "./Course.css";

import lockedLogo from "../../../assets/lockedLogo.png";

export default function Course(props) {
	return (
		<div id="courses--page--course--card" className="card">
			<div className={`card-wrapper ${props.locked ? "locked" : ""}`}>
				{props.locked && (
					<>
						<div className="locked-overlay"></div>
						<img src={lockedLogo} className="locked-logo" alt="locked" />
					</>
				)}
				<img src={Logo} className="courses--page--course--card--img" alt="..." />
				<img src={saved} className="course--save--logo" alt="..." />

				<div className="card-body">
					<h3 className="courses--page--course--name">{props.courseName}</h3>
				</div>
				<div className="courses--page--course--details">
					{props.coursePriceType > 0 ? <span className="courses--page--course--price">{props.coursePriceType} EGP</span> : <span className="courses--page--course--price">Free</span>}
					<span style={{ float: "right" }}>{props.courseProvider}</span>
				</div>
				<div className="courses--page--course--location">
					<span>{props.courseLocation}</span>
				</div>
				<span className="courses--page--course--type">
					<img src={earth} className="course--earth--logo" alt="..." />
					{props.schoolType}
					<Button className="courses--page--course--button" variant="secondary">
						<Link to={props.courseLink}>Contact</Link>
					</Button>
				</span>
			</div>
		</div>
	);
}
