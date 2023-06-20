import { Col, Container, Row, Card, Image, Form, Button } from 'react-bootstrap';
import { Star, StarOutline } from 'react-ionicons';
import { useState } from 'react';

function Rating() {

    const [rating, setRating] = useState(0);
    const reviewRatings = 4;
    const fullStarsNo = reviewRatings;
    const emptyStarsNo = 5 - reviewRatings;

    const fullStars = [...Array(fullStarsNo)].map((_, index) => (
        <Star key={index} />
    ));

    const emptyStars = [...Array(emptyStarsNo)].map((_, index) => (
        <StarOutline key={index} />
    ));

    const handleRating = (value) => {
        setRating(value);
    };

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
                                <Form.Group>
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
                            <Col xs={1}>
                                <Image src="./cover.jpg" roundedCircle className='school-page-rating-card-image' fluid />
                            </Col>
                            <Col xs={10}>
                                <Form.Label className='school-page-rating-card-reviews-username'>Parent1</Form.Label>
                                <Form.Control
                                    type="text"
                                    disabled
                                    value={"bad review"}
                                />
                                <div className='school-page-rating-card-stars'>
                                    {fullStars}
                                    {emptyStars}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Rating;