import React from 'react';
import '../component/Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const servicesData = [
  {
    title: "Medicine Ordering",
    description: "All types of Medicine with doorstep delivery",
    image: require('../images/delivey.jpg'),
    link: '/OurProducts'
  },
  {
    title: "Disease Checker",
    description: "Input symptoms and diagnose your disease ",
    image: require('../images/Cheker.jpg'),
    link: '/Description'
  },
  {
    title: "Remainder",
    description: "To remind you for purchasing Doses.",
    image: require('../images/reminder.jpg'),
    link: '/Desc'
  },
  
];

const OurServices = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2><br/>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch" key={index}>
            <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="mt-auto">
                  <a href={service.link} className="btn btn-primary">Explore</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;
