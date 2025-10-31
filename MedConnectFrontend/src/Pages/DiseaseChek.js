import React, { useState } from "react";
import "./Diseasechek.css";
import { useNavigate } from 'react-router-dom';

const symptomDiseaseMapping = {
  fever: ["Flu", "Malaria", "Typhoid"],
  cough: ["Common Cold", "Bronchitis", "COVID-19"],
  headache: ["Migraine", "Tension Headache", "Sinusitis"],
  fatigue: ["Anemia", "Hypothyroidism", "Chronic Fatigue Syndrome"],
  rash: ["Allergy", "Chickenpox", "Measles"],
};

const DiseaseCheck = () => {
  const navigate = useNavigate();

  const [symptom, setSymptom] = useState("");
  const [suggestedDiseases, setSuggestedDiseases] = useState([]);

 
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!isAuthenticated) {
      alert("You must be logged in to check diseases. Please log in first.");
      navigate("/Rgisteration");
      return;
    }

    const diseases = symptomDiseaseMapping[symptom.toLowerCase()] || [];
    setSuggestedDiseases(diseases);
  };

  return (
    <div className="disease-check-container">
      <h1>Disease Checker</h1>
      <form onSubmit={handleSubmit} className="disease-check-form">
        <label htmlFor="symptom">Enter Your Symptom:</label>
        <input
          type="text"
          id="symptom"
          value={symptom}
          onChange={handleSymptomChange}
          placeholder="e.g., fever, cough"
        />
        <button type="submit">Check Disease</button>
      </form>

      
      <div className="back-button-container">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            width: "190px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={() => navigate("/Description")} 
        >
          Back
        </button>
      </div>

      {suggestedDiseases.length > 0 && (
        <div className="results">
          <h2>Possible Diseases:</h2>
          <ul>
            {suggestedDiseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>
      )}

      {suggestedDiseases.length === 0 && symptom && (
        <p className="no-results">No diseases found for the entered symptom.</p>
      )}
    </div>
  );
};

export default DiseaseCheck;
