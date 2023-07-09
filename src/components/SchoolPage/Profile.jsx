import { useState, useEffect } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Star, StarOutline } from "react-ionicons";

function Profile(props) {
	const [savedSchools, setSavedSchools] = useState([]);
	const [saved, setSaved] = useState(false);

	if (localStorage.getItem("token")) {
		useEffect(() => {
			fetch(`http://localhost:3000/applicants/saved-schools`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setSavedSchools(data))
				.catch((err) => console.error(err));
		}, []);
	}

	useEffect(() => {
		if (localStorage.getItem("token") && savedSchools.some((school) => school.id === props.id)) {
			setSaved(true);
		} else {
			setSaved(false);
		}
	}, [savedSchools, props.id]);

	const handleFavorite = () => {
		console.log(props.id);
		if (localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/save-school/${props.id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				method: "POST",
			})
				.then((response) => response.json())
				.then(() => alert("school added to favorites successfully"))
				.then(() => window.location.reload())
				.catch((err) => console.error(err));
		}
	};

	const handleRemoveFavorite = () => {
		if (localStorage.getItem("token")) {
			fetch(`http://localhost:3000/applicants/unsave-school/${props.id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => alert("school removed from favorites successfully"))
				.then(() => window.location.reload())
				.catch((err) => console.error(err));
		}
	};

	return (
		<Container className="school-page-profile-container" fluid>
			<Row className="school-page-profile-upper">
				<Col className="school-page-profile-image" xs={1}>
					<Image className="school-page-profile-image" src={props.image} rounded />
				</Col>
				<Col className="school-page-profile-name" xs={5}>
					{props.name}
				</Col>
				<Col className="school-page-profile-buttons">
					{localStorage.getItem("token") &&
						(saved ? (
							<Button variant="light" onClick={handleRemoveFavorite}>
								Remove from favorites
							</Button>
						) : (
							<Button variant="light" onClick={handleFavorite}>
								Add to favorites
							</Button>
						))}
					{props.email && (
						<Button variant="light" href={`mailto:${props.email}`}>
							Contact School
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
}
export default Profile;