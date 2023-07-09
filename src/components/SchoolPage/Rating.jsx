import { Col, Container, Row, Card, Image, Form, Button } from "react-bootstrap";
import { Star, StarOutline } from "react-ionicons";
import { useState } from "react";

function Rating(props) {
	const [rating, setRating] = useState(0);

	const handleRating = (value) => {
		setRating(value);
	};

	function handleSubmit(event) {
		event.preventDefault();

		const review = event.target[0].value;
		const ratingValue = rating;

		fetch(`http://localhost:3000/schools/reviews/${props.id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ feedback: review, totalRating: ratingValue }),
		})
			.then((response) => response.json())
			.then(() => alert("review added successfully"))
			.then(() => window.location.reload())
			.catch((err) => console.error(err));
	}

	return (
		<Card className="school-page-rating-card">
			<Card.Body>
				<Card.Title className="school-page-rating-card-title">Reviews</Card.Title>

				<Card.Text className="school-page-rating-card-text">
					<Container fluid>
						<Row>
							<Col>
								<Form onSubmit={handleSubmit}>
									<Form.Group>
										<Form.Control as="textarea" placeholder="Write a review ..." className="school-page-rating-card-text-area" />
										<Button type="submit" className="school-page-rating-card-button" variant="secondary">
											Post
										</Button>

										<div className="school-page-rating-card-input-stars">
											{[...Array(5)].map((star, index) => {
												const ratingValue = index + 1;

												return (
													<Button key={index} variant="link" onClick={() => handleRating(ratingValue)}>
														{ratingValue <= rating ? <Star /> : <StarOutline />}
													</Button>
												);
											})}
										</div>
									</Form.Group>
								</Form>
							</Col>
						</Row>
						<Row className="school-page-rating-card-reviews">
							{props.reviews.map((review, index) => (
								<div className="school-page-rating-card-one-review" key={index}>
									<Col>
										<Form.Label className="school-page-rating-card-reviews-username">{review.reviewerName}</Form.Label>
										<Form.Control type="text" disabled value={review.feedback} />
										<div className="school-page-rating-card-stars">
											<div>
												{[...Array(review.totalRating)].map((_, index) => (
													<Star key={index} />
												))}
												{[...Array(5 - review.totalRating)].map((_, index) => (
													<StarOutline key={index} />
												))}
											</div>
											<h6 className="school-page-rating-card-source">Source: {review.source}</h6>
										</div>
									</Col>
								</div>
							))}
						</Row>
					</Container>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Rating;
