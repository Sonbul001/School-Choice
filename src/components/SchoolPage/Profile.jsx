import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Star, StarOutline } from 'react-ionicons';

function Profile(props) {
    const handleFavorite = () => {
        console.log(props.id)
        if (localStorage.getItem('token')) {
            fetch(`http://localhost:3000/applicants/save-school/${props.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                method: 'POST'
            })
            .then(response => response.json())
            .then(() => alert('school added to favorites successfully'))
            .catch(err => console.error(err))
        }
    }
    return (
        <Container className='school-page-profile-container' fluid>
            <Row className='school-page-profile-upper'>
                <Col className='school-page-profile-image' xs={1}>
                    <Image className='school-page-profile-image' src={props.image} rounded />
                </Col>
                <Col className='school-page-profile-name' xs={5}>{props.name}</Col>
                <Col className='school-page-profile-buttons'>
                    <Button variant="light" onClick={handleFavorite}>Add to favourite</Button>
                    {props.email && <Button variant="light" href={`mailto:${props.email}`}>Contact School</Button>}
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;