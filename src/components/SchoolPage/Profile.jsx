import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Star, StarOutline } from 'react-ionicons';

function Profile(props) {

    const rating = props.rating;
    const fullStarsNo = rating;
    const emptyStarsNo = 5 - rating;

    const fullStars = [...Array(fullStarsNo)].map((_, index) => (
        <Star key={index}/>
    ));

    const emptyStars = [...Array(emptyStarsNo)].map((_, index) => (
        <StarOutline key={index}/>
    ));

    return (
        <Container className='school-page-profile-container' fluid>
            <Row className='school-page-profile-upper'>
                <Col className='school-page-profile-image' xs={1}>
                    <Image className='school-page-profile-image' src={props.image} rounded />
                </Col>
                <Col className='school-page-profile-name' xs={5}>{props.name}</Col>
                <Col className='school-page-profile-buttons'>
                    <Button variant="light">Add to favourite</Button>
                    <Button variant="light">Contact School</Button>
                </Col>
            </Row>
            <Row className='school-page-profile-lower'>
                <div>
                    {fullStars}
                    {emptyStars}
                </div>
            </Row>
        </Container>
    );
};

export default Profile;