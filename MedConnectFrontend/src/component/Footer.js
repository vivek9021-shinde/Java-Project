import React from 'react';
import '../component/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="title">medConnect HealthCare Services</h2>
        <p>
          Access to healthcare is recognized as a fundamental human right. A robust healthcare system ensures dignity and respect for all individuals.
        </p>
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
     <div> </div>
      <div className="footer-section">
        <div className="footer">
        <h2 className="title">Contact Us</h2>
       <p>
          <strong>Onkar Sontkke:</strong> 9373397997<br />
          <strong>Tanashri Mule:</strong> 9970672765<br />
          <strong>Pawar Sakshi:</strong> 9762939358</p>
        <span><h1>
          <a
            href="https://www.facebook.com/Onkar Sonatakke"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faFacebook} /></a>

          <a
            href="https://twitter.com/@SontakkeOnkar79"
            target="_blank"
            rel="noopener noreferrer"
          > <FontAwesomeIcon icon={faTwitter} /></a>
           <a
            href="https://www.instagram.com/tanshri_2005"
            target="_blank"
            rel="noopener noreferrer"
          > <FontAwesomeIcon icon={faInstagram} /></a>
          <a
            href="https://t.me/Sakshi Pawar55"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faTelegram} /></a>
        </h1>
        <p className="mb-1">
          Email: <a href="mailto:support@example.com" className="email-link">support@example.com</a>
        </p>
        </span>


   </div>

      </div>
    </footer>
  );
}
