import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import './DetailedSearchSidebar.css';

function DetailedSearchSidebar(props) {
  const [city, setCity] = useState('');
  const [educationLevel, setEducationLevel] = useState([]);
  const [type, setType] = useState([]);
  const [minimumFee, setMinimumFee] = useState('');
  const [maximumFee, setMaximumFee] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.filter({
      city: city,
      educationLevel: educationLevel,
      type: type,
      minimumFee: minimumFee,
      maximumFee: maximumFee
    })
  }

  const handleTypeChoice = (event) => {
    if (event.target.checked) {
      setType([...type, event.target.value]);
    } else {
      setType(type.filter(t => t !== event.target.value));
    }
  }

  const handleLevelChoice = (event) => {
    if (event.target.checked) {
      setEducationLevel([...educationLevel, event.target.value]);
    } else {
      setEducationLevel(educationLevel.filter(t => t !== event.target.value));
    }
  }
  return (
    <Card className='privateside'>
      <Card.Body>
        <Card.Title>Filter Result</Card.Title>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formBasicAddress">
            <label className='detailed--search--sidebar--label'>Type in City Name:</label>
            <Form.Control type="text" placeholder="City... " value={city} onChange={(event) => setCity(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formEducationLevel" className='detailed--search--sidebar--container'>
            <label className='detailed--search--sidebar--label'>Educational Level</label>
            <Form.Check className="detailed--search--combined--checkbox" type="checkbox" label="Nursery" value='Nursery' onChange={handleLevelChoice}/>
            <Form.Check className="detailed--search--combined--checkbox" type="checkbox" label="KG" value='KG' onChange={handleLevelChoice}/>
            <Form.Check className="detailed--search--combined--checkbox" type="checkbox" label="Primary" value='Primary' onChange={handleLevelChoice}/>
            <Form.Check className="detailed--search--combined--checkbox" type="checkbox" label="Preparatory" value='Preparatory' onChange={handleLevelChoice}/>
            <Form.Check className="detailed--search--combined--checkbox" type="checkbox" label="Secondary" value='Secondary' onChange={handleLevelChoice}/>
          </Form.Group>

          <Form.Group controlId="formSchoolType" className='detailed--search--sidebar--container'>
            <label className='detailed--search--sidebar--label'>School Type</label>
            <Form.Check className='detailed--search--combined--checkbox' label='National' value='National' onChange={handleTypeChoice}/>
            <Form.Check className='detailed--search--combined--checkbox' label='IGCSE' value='IGCSE' onChange={handleTypeChoice}/>
            <Form.Check className='detailed--search--combined--checkbox' label='American' value='American' onChange={handleTypeChoice}/>
            <Form.Check className='detailed--search--combined--checkbox' label='Lycee' value='Lycee' onChange={handleTypeChoice}/>
            <Form.Check className='detailed--search--combined--checkbox' label='German' value='German' onChange={handleTypeChoice}/>
            <Form.Check className='detailed--search--combined--checkbox' label='IB' value='IB' onChange={handleTypeChoice}/>
          </Form.Group>

          <Form.Group controlId="formBasicFees">
            <label className='detailed--search--sidebar--label'>School Fees:</label>
            <Form.Control className='detailed--search--price' type="text" placeholder="Starting Price... " value={minimumFee} onChange={(event) => setMinimumFee(event.target.value)}/>
            <Form.Control className='detailed--search--price' type="text" placeholder="Final Price... " value={maximumFee} onChange={(event) => setMaximumFee(event.target.value)}/>
          </Form.Group>
          <button style={{ backgroundColor: '#0e2e58' }} type="submit" className="btn btn-secondary">
            Submit
          </button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DetailedSearchSidebar;