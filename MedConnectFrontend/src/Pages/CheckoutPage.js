import React, { useState } from "react";
import './CheckoutPage.css';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "", 
  });

  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");

  const [errors, setErrors] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "", 
  });

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name.replace(/([A-Z])/g, " $1")} is required.`;
    } else {
      switch (name) {
        case "fullName":
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            error = "Full Name should only contain letters and spaces.";
          }
          break;
        case "zipCode":
          if (!/^\d{5,6}$/.test(value)) {
            error = "Zip Code should be 5 or 6 digits.";
          }
          break;
        case "email": 
          if (!/\S+@\S+\.\S+/.test(value)) {
            error = "Email is invalid.";
          }
          break;
        default:
          break;
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(shippingDetails).forEach((field) => {
      newErrors[field] = validateField(field, shippingDetails[field]);
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(newQuantity);
    const productPrice = parseFloat(product?.price.replace(/[^\d.-]/g, '')) || 0;
    setTotalPrice(newQuantity * productPrice);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      const orderData = {
        productName: product.name,
        quantity,
        totalPrice,
        fullName: shippingDetails.fullName,
        streetAddress: shippingDetails.streetAddress,
        city: shippingDetails.city,
        state: shippingDetails.state,
        zipCode: shippingDetails.zipCode,
        email: shippingDetails.email, 
        paymentMethod,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/orders', orderData);
        if (response.data === "success") {
          alert("Order has been placed");
        } else if(response.data === "email not matched"){
              alert("email not matched");
        }else {
          alert("Error placing order");
        }

        navigate("/summary", {
          state: {
            product,
            quantity,
            totalPrice,
            shippingDetails,
            paymentMethod,
          },
        });
      } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order. Please try again.');
      }
    }
  };

  if (!product) {
    return (
      <div>
        <p>No product data available. Go back and select a product.</p>
        <button onClick={() => navigate("/")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Checkout</h1>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <p>
          <strong>{product.name}</strong>
        </p>
        <p>Price: {product.price}</p>
        <div className="quantity-input">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>
      </div>

      {/* Shipping Details */}
      <fieldset className="form-fieldset">
       <center> <h3>Shipping Address</h3></center>
        {Object.keys(shippingDetails).map((field) => (
          <div key={field} className="form-group">
            <input
              type={field === "email" ? "email" : "text"} 
              name={field}
              placeholder={
                field === "zipCode"
                  ? "Zip Code"
                  : field === "email" 
                    ? "Email Address"
                    : field.split(/(?=[A-Z])/).join(" ").replace(/^\w/, (c) => c.toUpperCase())
              }
              value={shippingDetails[field]}
              onChange={handleChange}
              className={errors[field] ? "input-error" : ""}
            />
            {errors[field] && <span className="error-tooltip">{errors[field]}</span>}
          </div>
        ))}
      </fieldset>

      {/* Payment Method */}
      <div className="payment-method">
        <h3>Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default CheckoutPage;