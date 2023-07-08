import { Col, Container, Row, Table, Card } from 'react-bootstrap';

function Dates(props) {
    return (
        <Card className='school-page-dates-card'>
            <Card.Body>
                <Card.Title>Communicate with school</Card.Title>
                <Card.Text className='school-page-dates-card-text'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Numbers</th>
                                {props.email && <th>Email</th>}
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {props.mobileNumbers.map((number, index) => (
                                        <span key={index}>{number}<br /></span>
                                    ))}
                                </td>
                                {props.email && <td>{props.email}</td>}
                                <td>{props.website}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Dates;