import { Tabs, Tab, ListGroup, Carousel } from 'react-bootstrap';

function About(props) {
    return (
        <Tabs
            defaultActiveKey="about"
        >
            <Tab eventKey="about" title="About">
                <ListGroup className='school-page-about-listgroup'>
                    {props.type && <ListGroup.Item><strong>School Type: </strong>{props.type.join(', ')}</ListGroup.Item>}
                    <ListGroup.Item><strong>Gender: </strong>{props.gender}</ListGroup.Item>
                </ListGroup>
                <p className='school-page-about-text'>{props.about}</p>
            </Tab>
            <Tab eventKey="gallery" title="Gallery">
                <div className='school-page-about-carousel'>
                    <Carousel wrap={true}>
                        {props.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="school-page-about-gallery-images"
                                    src={image}
                                    alt={`Image ${index}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Tab>
        </Tabs>
    )
}

export default About;