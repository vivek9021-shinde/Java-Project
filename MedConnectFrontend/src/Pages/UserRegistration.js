import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Pages/Register.css";

function AuthPage() {
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(""); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const url = isRegistering
            ? "http://localhost:8080/api/addUser" 
            : "http://localhost:8080/api/loginUser"; 

        try {
            const response = await axios.post(url, formData);
            if (response.data === "success") {
                localStorage.setItem('isLoggedIn', 'true');
                alert(`${isRegistering ? "Account created" : "Logged in"} successfully`);
                setFormData({ name: "", email: "", password: "" }); 
                setMessage(""); 
            } else if (!isRegistering && response.data === "user_not_registered") {
                setMessage("You need to register first to log in.");
            }else if(response.data ==="already have an account"){
                setMessage("already have an account");
            }else if(response.data ==="Invalid Username or Password"){
                    setMessage("Invalid Username or Password");
            }
             else {
                setMessage(`Failed to ${isRegistering ? "register" : "login"}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`An error occurred while ${isRegistering ? "registering" : "logging in"}`);
        }
    };

    return (
        <div className="auth-container">
            {/* Buttons for Login/Register */}
            <div className="toggle-container">
                <button
                    className={`toggle-button ${!isRegistering ? "active" : ""}`}
                    onClick={() => setIsRegistering(false)}
                    aria-label="Login"
                >
                    Login
                </button>
                <button
                    className={`toggle-button ${isRegistering ? "active" : ""}`}
                    onClick={() => setIsRegistering(true)}
                    aria-label="Register"
                >
                  Sign Up
                </button>
            </div>

            {/* Form Container */}
            <div className="form-container">
                <h1>{isRegistering ? "Register" : "Login"}</h1>
                <form onSubmit={handleSubmit}>
                    {isRegistering && (
                        <>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                        value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Enter your name"
                            />
                            <br />
                        </>
                    )}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                         value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Enter your email"
                    />
                    <br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                         value={formData.password}
                        onChange={handleChange}
                        required
                        aria-label="Enter your password"
                    />
                    <br />

                   

                    <input type="submit" value={isRegistering ? "Sign Up" : "Login"} />
                </form>

                {/* Display the message */}
                {message && <p className="error-message">{message}</p>}
            </div>
            <button onClick={() => navigate(-1)} style={buttonStyle}>
          Back
        </button>
        </div>
         
    );
}

export default AuthPage;
