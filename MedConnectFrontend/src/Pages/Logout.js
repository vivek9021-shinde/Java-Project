

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userToken'); 
        navigate("/"); 
    };

    return (
        <div>
            <h1>You have been logged out</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;