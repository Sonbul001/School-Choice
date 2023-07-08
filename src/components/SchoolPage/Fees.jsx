import { Col, Container, Row, Table, Card } from 'react-bootstrap';

function Fees(props) {
    // Group the fees by type
    const feesByType = {};
    props.fees.forEach((section) => {
        feesByType[section.type] = section.fees;
    });

    return (
        <Card className='school-page-fees-card'>
            <Card.Body>
                <Card.Title className='school-page-fees-card-title'>Fees</Card.Title>

                <Card.Text className='school-page-fees-card-text'>
                    {Object.entries(feesByType).map(([type, fees]) => (
                        <div key={type}>
                            {type != 'null' && <h3>{type}</h3>}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Classroom</th>
                                        <th>Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.classroom}</td>
                                            <td>{data.fee} EGP</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Fees;