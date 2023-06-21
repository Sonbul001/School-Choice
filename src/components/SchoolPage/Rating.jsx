import { Col, Container, Row, Card, Image, Form, Button } from 'react-bootstrap';
import { Star, StarOutline } from 'react-ionicons';
import { useState } from 'react';

function Rating(props) {

    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        // get the input values and rating value
        const review = event.target[0].value;
        const ratingValue = rating;
        // make the POST request
    }

    return (
        <Card className='school-page-rating-card'>
            <Card.Body>
                <Card.Title className='school-page-rating-card-title'>Reviews</Card.Title>

                <Card.Text className='school-page-rating-card-text'>
                    <Container fluid>
                        <Row>
                            <Col xs={1}>
                                <Image src="./cover.jpg" roundedCircle className='school-page-rating-card-image' fluid />
                            </Col>
                            <Col xs={10}>
                                <Form.Group onSubmit={handleSubmit}>
                                    <Form.Control as="textarea" placeholder='Write a review ...' className="school-page-rating-card-text-area" />
                                    <Button type='submit' className='school-page-rating-card-button' variant='secondary'>Post</Button>


                                    <div className='school-page-rating-card-input-stars'>
                                        {[...Array(5)].map((star, index) => {
                                            const ratingValue = index + 1;

                                            return (
                                                <Button
                                                    key={index}
                                                    variant="link"
                                                    onClick={() => handleRating(ratingValue)}
                                                >
                                                    {ratingValue <= rating ? (
                                                        <Star />
                                                    ) : (
                                                        <StarOutline />
                                                    )}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='school-page-rating-card-reviews'>

                            {props.reviews.map((review, index) =>
                            (
                                <div className='school-page-rating-card-one-review' key={index}>
                                    <Col xs={1}>
                                        <Image src="./cover.jpg" roundedCircle className='school-page-rating-card-image' fluid />
                                    </Col>
                                    <Col xs={11}>
                                        <Form.Label className='school-page-rating-card-reviews-username'>Parent1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={"bad review"}
                                        />
                                        <div className='school-page-rating-card-stars'>
                                            {[...Array(review.rating)].map((_, index) => (
                                                <Star key={index} />
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, index) => (
                                                <StarOutline key={index} />
                                            ))}
                                        </div>
                                    </Col>
                                </div>
                            )
                            )}


                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Rating;