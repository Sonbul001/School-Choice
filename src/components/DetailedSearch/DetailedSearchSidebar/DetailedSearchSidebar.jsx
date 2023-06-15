import React from 'react';
import { Card, Form } from 'react-bootstrap';
import './DetailedSearchSidebar.css';

function DetailedSearchSidebar () {
  return (
    <Card className='privateside'>
      <Card.Body>
        <Card.Title>Filter Result</Card.Title>
        <Form>

          <Form.Group controlId="formBasicAddress">
          <label className='detailed--search--sidebar--label'>Type in City Name:</label>
          <Form.Control type="text" placeholder="City... " />
          <label className='detailed--search--sidebar--label'>Type in District Name:</label>
          <Form.Control type="text" placeholder="District... " />
          </Form.Group>

          <label className='detailed--search--sidebar--label'>Educational Level</label>
          <Form.Group controlId="formCheckbox">
            <Form.Check  className="detailed--search--combined--checkbox" id='1' type="checkbox" label="KG 1-2-3" />
            <Form.Check  className="detailed--search--combined--checkbox" id='2' type="checkbox" label="Grade 1-2-3-4-5-6" />
            <Form.Check  className="detailed--search--combined--checkbox" id='3' type="checkbox" label="Grade 7-8-9" />
            <Form.Check  className="detailed--search--combined--checkbox" id='4' type="checkbox" label="Grade 10-11-12" />
          </Form.Group>

          <label className='detailed--search--sidebar--label'>School Category</label>
          <Form.Group controlId="formDropdown">
            <Form.Control as="select">
              <option>National</option>
              <option>IGCSE</option>
              <option>American</option>
              <option>Lycee</option>
              <option>German</option>
              <option>Canadian</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicFees">
          <label className='detailed--search--sidebar--label'>School Fees:</label>
          <Form.Control className='detailed--search--price' type="text" placeholder="Starting Price... " />
          <Form.Control className='detailed--search--price' type="text" placeholder="Final Price... " />
          </Form.Group>
          <button style={{backgroundColor:'#0e2e58'}}type="submit" className="btn btn-secondary">
            Submit
          </button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DetailedSearchSidebar;