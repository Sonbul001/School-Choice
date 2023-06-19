import { Col, Container, Row, Table, Card } from 'react-bootstrap';

function Dates(props) {
    return (
        <Card className='school-page-dates-card'>
            <Card.Body>
                <Card.Title>Dates for communicating with supervisors</Card.Title>

                <Card.Text className='school-page-dates-card-text'>
                    <Container fluid>
                        <Row>
                            <Col>
                                <p className='school-page-dates-card-text-head'>Morning Times</p>
                                <p className='school-page-dates-card-text-body'>{props.morningFrom} to {props.morningTo}</p>
                            </Col>
                            <Col>
                                <p className='school-page-dates-card-text-head'>Evening Times</p>
                                <p className='school-page-dates-card-text-body'>{props.eveningFrom} to {props.eveningTo}</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>

                <Card.Text className='school-page-dates-card-text'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Supervisor Name</th>
                                <th>Speciality</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.supervisor}</td>
                                <td>{props.spec}</td>
                                <td>{props.mobile}</td>
                                <td>{props.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Dates;