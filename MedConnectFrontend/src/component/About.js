
import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="mission">
        <h2>MedConnect HealthCare</h2>
        <p>
        medconnect is a platform that helps you to achieve your health and wellness goals by connecting you to a network of healthcare professionals.
        </p>
        <p>It is an innovative Platform to Ordering Medicine,Disease Checker according to your input symptom and monthly reminder for medication purchasing.
        </p>
        <p>To create a healthier world by empowering individuals with the tools and resources necessary for informed healthcare decisions.</p>
      </section>

      <section className="core-values">
        <h2>Our Motive</h2>
        <ul>
          <li> The individual capsule could represent a tailored approach to healthcare based on the needs of each patient.</li>
          <li>Patients gain access to resources that help them understand their conditions and treatment options, leading to more active involvement in their health.</li>
          <li>Increase patient engagement by providing online ordering.</li>
          <li>Alerting Customer for purchasing their doses.</li>
        </ul>
      </section>

    </div>
  );
};

export default About;