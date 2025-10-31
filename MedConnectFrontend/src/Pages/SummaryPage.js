import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    product,
    quantity,
    totalPrice,
    paymentMethod,
  } = location.state || {};
  console.log(totalPrice);
  if (!product) {
    return (
      <div style={{ textAlign: "center", margin: "50px", fontFamily: "Arial, sans-serif" }}>
        <p>No order details available. Go back and place an order.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  // Parent container with background image
  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: "url(.image/blank2.jpg)", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Centered form container
  const formContainerStyle = {
    height: "400px",
    width: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "10px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1.1em",
    border: "1px solid #ced4da",
    borderRadius: "5px",
    backgroundColor: "#f1f1f1",
    color: "#495057",
    width: "100%",
    cursor: "not-allowed",
  };

  const buttonStyle = {
    padding: "8px 16px",  
    backgroundColor: "#8f8787",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em", 
    marginTop: "20px",
    width: "150px", 
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h1>Order Summary</h1>
        <div className="order-summary" style={{ width: "100%" }}>
          <div style={formGroupStyle}>
            <label>Product:</label>
            <input type="text" value={product.name} readOnly style={inputStyle} />
          </div>

          <div style={formGroupStyle}>
            <label>Quantity:</label>
            <input type="number" value={quantity} readOnly style={inputStyle} />
          </div>

          <div style={formGroupStyle}>
            <label>Total Price:</label>
            <input type="text" value={`₹${totalPrice.toFixed(2)}`} readOnly style={inputStyle} />
            
          </div>

          <div style={formGroupStyle}>
            <label>Payment Method:</label>
            <input type="text" value={paymentMethod} readOnly style={inputStyle} />
          </div>
        </div>

        <button onClick={() => navigate(-1)} style={buttonStyle}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
