import React from 'react';
import { Form, Button, Alert, Spinner, Col, Row } from 'react-bootstrap';
import { FaUser , FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      console.log('Form submitted');
      setLoading(false);
      setShowAlert(true);
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Thank you for your message!
        </Alert>
      )}
      <center>
      <Form onSubmit={handleSubmit}>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>
                <FaUser  /> Name:
              </Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <FaEnvelope /> Email:
              </Form.Label>
              <Form.Control type="email" name="email" required placeholder="Enter your email" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>
                <FaPhone /> Phone:
              </Form.Label>
              <Form.Control type="tel" name="phone" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" name="message" required placeholder="Your message" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" /> Sending...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send
            </>
          )}
        </Button>
        
      </Form>
      </center>
    </div>
  );
};

export default Contact;