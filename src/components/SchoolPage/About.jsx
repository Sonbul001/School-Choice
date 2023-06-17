import { Tabs, Tab, ListGroup, Carousel } from 'react-bootstrap';

function About() {
    const images = [
        { src: "./cover.jpg" },
        { src: "./Logo.png" },
        { src: "./cover.jpg" },
        { src: "./cover.jpg" }
    ]
    return (
        <Tabs
            defaultActiveKey="about"
        >
            <Tab eventKey="about" title="About">
                <ListGroup className='school-page-about-listgroup'>
                    <ListGroup.Item><strong>School Type: </strong>International</ListGroup.Item>
                    <ListGroup.Item><strong>Education Level: </strong>Nursery And Elementary</ListGroup.Item>
                    <ListGroup.Item><strong>Gender: </strong>Boys And Girls</ListGroup.Item>
                </ListGroup>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Quae nemo fuga reprehenderit debitis
                    natus optio nobis eius illo voluptates.
                    Iusto voluptate placeat sit quo nostrum illum amet,
                    porro suscipit deserunt?</p>
            </Tab>
            <Tab eventKey="gallery" title="Gallery">
                <div className='school-page-about-carousel'>
                    <Carousel wrap={true}>
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="school-page-about-gallery-images"
                                    src={image.src}
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