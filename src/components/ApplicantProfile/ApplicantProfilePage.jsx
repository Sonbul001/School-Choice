import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Modal, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ApplicantProfilePage.css';
import { AiFillEye } from 'react-icons/ai';

function ApplicantProfilePage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getApplicant = async () => {
      try {
        const response = await fetch('http://localhost:3000/applicants/profile', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (response.status != 401) {
          const data = await response.json();
          console.log(data);
          setFullName(data.fullName);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setCity(data.city);
        } else {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch data from the server.');
      }
    };

    getApplicant();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    // 	const response = await fetch("http://localhost:3000/applicants", {
    // 		method: "PUT",
    // 		headers: {
    // 			"Content-Type": "application/json",
    // 		},
    // 		body: JSON.stringify(data),
    // 	});

    // 	if (!response.ok) {
    // 		throw new Error("Network response was not ok");
    // 	}

    // 	alert("Sign up successful!");
    // 	navigate('/login');
    // } catch (error) {
    // 	console.error("Error:", error);
    // 	alert("Sign up failed. Please try again.");
    // }
    console.log('updated')
  };

  const handleDelete = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/applicants/applicant', {
  //       method: 'DELETE',
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('token')
  //       }
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     alert('Account has been deleted successfully.');
  //     navigate('/login');
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to delete the account. Please try again.');
  //   }
  //   setShowDeleteModal(false);
  //   console.log('deleted')
  };

  const handleEdit = () => {
    setEditable(!editable);
  }

  return (
    <Container className="applicant-profile-page-container">
      <Row>
        <Col>
          <h2 className='applicant-profile-page-title'>Applicant Profile Page</h2>
          <Form className="applicant-profile-page-form" onSubmit={handleSubmit}>
            <Button className="applicant-profile-page-edit-btn" variant="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Form.Group controlId="fullName" className='applicant-profile-page-form'>
              <Form.Label className='applicant-profile-page-form-label'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                disabled={!editable}
              />
            </Form.Group>

            <Form.Group controlId="email" className='applicant-profile-page-form'>
              <Form.Label className='applicant-profile-page-form-label'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={!editable}
              />
            </Form.Group>

            <Form.Group controlId="phone" className='applicant-profile-page-form'>
              <Form.Label className='applicant-profile-page-form-label'>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone}
                pattern="01[0-9]{9}"
                title="Please enter a valid phone number starting with 01 and having 11 digits"
                onChange={(event) => setPhone(event.target.value)}
                disabled={!editable}
              />
            </Form.Group>

            <Form.Group controlId="address" className='applicant-profile-page-form'>
              <Form.Label className='applicant-profile-page-form-label'>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                disabled={!editable}
              />
            </Form.Group>

            <Form.Group controlId="city" className='applicant-profile-page-form'>
              <Form.Label className='applicant-profile-page-form-label'>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                disabled={!editable}
              />
            </Form.Group>
            <Button
              className="applicant-profile-page-delete-btn"
              variant="danger"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Account
            </Button>
            {editable && <Button className="applicant-profile-page-save-btn" variant="primary" type="submit">
              Save Changes
            </Button>}
          </Form>
        </Col>
      </Row>
      <Modal
        className="applicant-profile-page-modal"
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onClick = {handleDelete}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your account? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button className="applicant-profile-page-delete-btn" variant="danger" onClick={handleDelete}>
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ApplicantProfilePage;