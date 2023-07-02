import { Button, Card } from 'react-bootstrap';

export default function Location(props) {
    return (
        <div>
            <Card className='school-page-location-card'>
                <Card.Body>
                    <Card.Title className='school-page-location-card-title'>Location</Card.Title>
                    <Card.Text>
                        {props.location}
                    </Card.Text>
                    <Button variant='info'>View On Map</Button>
                </Card.Body>

            </Card>
        </div>
    )
}