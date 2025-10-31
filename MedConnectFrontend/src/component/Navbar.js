import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"; 
import cartImage from "../images/cartImage.jpg"
import UserHistory from "./UserHistory";
import "../App.css";
import "../component/Navbar.css";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false); 
  const [showUserHistory, setShowUserHistory] = useState(false); 
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup); 
  };
  const navigateToUserHistory = () => {
    navigate("/userhistory"); 
  };

  const handleLogout = () => {
    
    localStorage.removeItem("user"); 
    localStorage.setItem('isLoggedIn', 'false');
    

    
    alert("logout successfully");
    setShowPopup(false); 
    navigate("/");
  };

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src={require("../images/Logo.jpg")} alt="Logo" />
        <span>MedConnect HealthCare</span>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link to="/ourproducts">
            <b>Medicine Ordering</b>
          </Link>
        </li>
        <li>
          <Link to="/Desc">
            <b>Remainder</b>
          </Link>
        </li>
        <li>
          <Link to="/Description">
            <b>Disease Checker</b>
          </Link>
        </li>
        <li className="icon">
          <b>
            <span onClick={navigateToUserHistory} style={{ cursor: "pointer" }}>
              <img src={cartImage} alt="Cart" style={{ width: "24px", height: "24px" }} />
            </span>
          </b>
        </li>
        <li className="icon">
          <b>
            <span onClick={togglePopup} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
          </b>
        </li>
      </ul>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <button className="close-btn" onClick={togglePopup}>
              &times; {/* Close button */}
            </button>
            <ul>
              <li>
                <Link to="/Rgisteration" onClick={togglePopup}>
                  <button>User login / SignUp Registration</button>
                </Link>
                <button onClick={handleLogout}>Logout</button> {/* Logout button */}
              </li>
            </ul>
          </div>
        </div>
      )}
      
    </nav>
  );
}