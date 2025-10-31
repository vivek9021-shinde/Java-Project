import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserHistory.css'; 

const UserHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        
        const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
        if (!isAuthenticated) {
            alert('You must be logged in to view your order history. Please log in first.');
            navigate('/Rgisteration'); 
            return;
        }

        const fetchOrderHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/order-history`);
                console.log("Response data:", response.data); 

               
                if (Array.isArray(response.data)) {
                    setOrders(response.data);
                } else if (response.data.orders) {
                    setOrders(response.data.orders);
                } else if (response.data.id) {
                   
                    setOrders([response.data]);
                } else {
                    console.error("Unexpected response structure:", response.data);
                    setOrders([]);
                }
            } catch (error) {
                console.error("There was an error fetching the order history!", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderHistory();

        
        return () => {
            setOrders([]);
        };
    }, [navigate]);

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (error) {
        return <p className="error">Error fetching order history: {error.message}</p>;
    }

    const OrderList = ({ orders }) => {
        return (
            <div className="order-list">
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={order.id || index} className="order">
                            <h2>Order #{index + 1}</h2> 
                            <p><strong>Product:</strong> {order.productName}</p>
                            <p><strong>Quantity:</strong> {order.quantity}</p>
                            <p><strong>Date:</strong> {formatDate(order.orderDate)}</p>
                            <p><strong>Total:</strong> {formatCurrency(order.totalPrice)}</p>
                        </div>
                    ))
                )}
            </div>
        );
    };

    const formatCurrency = (amount) => {
        const parsedAmount = parseFloat(amount); 
        if (isNaN(parsedAmount)) {
            return "₹0.00"; 
        }
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(parsedAmount);
    };
    

    const formatDate = (timestamp) => {
        if (!timestamp) {
            return "Date not available"; 
        }
        
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            return "Invalid date"; 
        }

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="order-container">
            <h1>Your Order History</h1>
            <OrderList orders={orders} />
            {/* Back Button */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/")} 
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default UserHistory