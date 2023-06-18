import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../../assets/images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Test.css";
import { Link } from "react-router-dom";

function Test({ name, type, price, link }) {
	library.add(faGlobe);
	return (
		<div className="container-item">
			<img src={pic} alt="pdf page" className="img" />
			<h3 className="name">{Name}</h3>
			<div className="nationality-link">
				<div className="left-side">
					<FontAwesomeIcon icon="fa-solid fa-globe" />
					<span>{type}</span>
				</div>
				{price > 0 ? <button className="button">Buy</button> : <button className="button">Link</button>}
			</div>
			{price > 0 && <hr />}
			{price > 0 && <div id="price"> {price} EGP</div>}
		</div>
	);
}

export default Test;
