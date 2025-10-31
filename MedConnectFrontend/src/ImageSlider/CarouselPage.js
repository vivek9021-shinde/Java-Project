import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const CarouselPage = () => { 
  return (
    <div className="carousel-container" style={{ margin: '0 auto', maxWidth: '1200px', overflow: 'hidden' }}>
      <Carousel interval={500} fade={true} indicators={true}>
        {[
          {
            src: image1,
            alt: "Handwash",
            title: " Regular handwash is necessory.", 
            description: "Handwashing is the process of cleaning your hands with soap and running water to remove dirt, germs, and other contaminants. It is a crucial practice for preventing the spread of illnesses and maintaining good hygiene. Proper handwashing involves scrubbing all parts of the hands for at least 20 seconds before rinsing to ensure effective cleaning. Here’s a detailed description of handwashing."
          },
          {
            src: image2,
            alt: "Medical Pill",
            title: "Medicine with rich of all essential ingredient.", 
            description: "Natural foods and nutrients are encapsulated within a pill, symbolizing the idea of supplements or vitamins derived from whole foods."
          },
          {
            src: image3,
            alt: "medical shop",
            title: "Importance of medicines in everyones life.",
            description: "Medicines are the unreplacabel part in human lifes ,Medicines are cure of each diseases"
          },
        ].map((item, index) => (
          <Carousel.Item key={index}>
            <img
              style={{ height: '90vh', color:'black', objectFit: 'cover',marginTop:'10px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption style={{ color:'black', background: 'rgba(255, 255, 255, 0.8)', padding: '15px',borderRadius: '10px' }}>
              <h3 className="text-center">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage; 