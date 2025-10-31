import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import pharmacy from '../images/reminder.jpg';
import './RemindDesc.css';

const Sell = () => {
  const navigate = useNavigate();
  return (
    <div className="sell-page">
      <Container fluid>
        <div className="title-holder mb-5 text-center">
          <br />
          <h1><b>MedConnect Reminder System</b></h1>
        </div>

        {/* Main Content */}
        <Row>
          {/* Left Column: Image */}
          <Col sm={6} className="text-center">
            <Image
              src={pharmacy}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
              alt="Pharmacy Reminder"
            />
          </Col>

          {/* Right Column: Overview */}
          <Col sm={6}>
            <div className="store-info">
              <h3>Overview</h3>
              <ul>
                <li>
                  <h5>
                    <b>Purpose of the Reminder:</b> Remind customers when their medication supply is about to run out. Encourage timely refills to ensure continuity of treatment.
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Automated System:</b> Record prescription details (quantity dispensed, dosage, and duration) and set up alerts based on medication schedules.
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Friendly Reminder Example:</b> "Dear [Customer Name], your [Medication Name] is running low. Please visit [Pharmacy Name] or order online to ensure continuity. Contact us for assistance at [Phone/Website]."
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Benefits:</b> Improves medication adherence, reduces the risk of treatment gaps, and builds customer loyalty and trust.
                  </h5>
                </li>
              </ul>

              {/* Call-to-Action Button */}
              <div className="mt-4">
                <Link to="/reminder" className="btn btn-primary">
                  Set a Reminder Now
                </Link>
              </div>
            </div>
            <div>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#6c757d",
                  width: "190px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginLeft: "0px",
                }}
                onClick={() => navigate("/")} 
              >
                Back
              </button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Sell;
