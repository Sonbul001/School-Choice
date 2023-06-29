import { Col, Container, Row, Table, Card } from 'react-bootstrap';

function Fees(props) {
    return (
        <Card className='school-page-fees-card'>
            <Card.Body>
                <Card.Title className='school-page-fees-card-title'>Fees</Card.Title>

                <Card.Text className='school-page-fees-card-text'>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Classroom</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.fees.map((data, index) =>
                            (
                                <tr key={index}>
                                    <td>{data.classroom}</td>
                                    <td>{data.fees}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Fees;