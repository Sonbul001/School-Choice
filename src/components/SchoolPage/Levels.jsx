import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default function Levels(props) {
    return (
        <div>
            <Card className='school-page-levels-card'>
                <Card.Body>
                    <Card.Title className='school-page-location-card-title'>Education Levels</Card.Title>
                    <ListGroup>
                        {props.levels.map((level, index) => (
                            <ListGroup.Item key={index}>{level}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>

            </Card>

        </div>
    );
}