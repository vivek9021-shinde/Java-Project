

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChekerDesc.css';
import diseaseImage from '../images/doctor.jpg';  

const DiseaseCheckerDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="description">
      <h1>What is Disease Checker?</h1>
      <div className="description-content">
        <div className="text-content">
          <p>
            The <strong>Disease Checker</strong> is an innovative tool designed to assist you in identifying potential health issues based on the symptoms you provide. By leveraging a comprehensive database of symptoms and associated diseases, our Disease Checker offers preliminary insights that can help you make informed decisions about seeking medical attention.
          </p>
          <h2>How It Works</h2>
          <p>
            Simply enter the symptoms you're experiencing into the Disease Checker. Our system analyzes the input and cross-references it with a vast collection of medical data to suggest possible conditions that match your symptoms. While it provides valuable information, it's important to consult with a healthcare professional for an accurate diagnosis and personalized treatment plan.
          </p>
          <h2>Benefits</h2>
          <ul>
            <li>Quick preliminary assessment of potential health issues.</li>
            <li>Accessible anytime, anywhere, from the comfort of your home.</li>
            <li>Helps you understand possible conditions before consulting a doctor.</li>
            <li>Encourages proactive management of your health and wellness.</li>
          </ul>
          <blockquote>
            "Empowering individuals with the knowledge to take control of their health."
          </blockquote>
          <p>
            Our mission is to bridge the gap between patients and healthcare providers, ensuring that you have the resources and information needed to make informed healthcare decisions. The Disease Checker is just one of the many tools we offer to support your journey towards better health.
          </p>
          <button
            className="navigate-button"
            onClick={() => navigate('/Cheker')}
          >
            Try Disease Checker
          </button>
          <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#6c757d",
                  width: "190px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => navigate("/")} 
              >
                Back
              </button>
        </div>
        <div className="image-content">
          <img src={diseaseImage} alt="Disease Checker" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseCheckerDescription;
