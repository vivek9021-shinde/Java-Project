import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reminder.css'; 

const Reminder = () => {
  const navigate = useNavigate();

  
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!isAuthenticated) {
      alert('You must be logged in to set a reminder. Please log in first.');
      navigate('/Rgisteration');
      return;
    }

    // Validate required fields
    if (!email || !subject || !reminderDate) {
      setError('All fields are required!');
      setStatus('');
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    // Prepared reminder data
    const reminderData = { email, subject, reminderDate };

    try {
      const response = await fetch('http://localhost:8080/api/sendReminder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reminderData),
      });

     
      const data = await response.text();

      if (data === 'success') {
        setStatus('Reminder scheduled successfully!');
        setError('');
        resetForm();
      } else {
        setStatus('');
        setError('Failed to schedule reminder.');
      }
    } catch (error) {
      console.error('Error sending reminder:', error);
      setStatus('');
      setError('Error sending reminder!');
    }
  };

  // Reset form fields after successful submission
  const resetForm = () => {
    setEmail('');
    setSubject('');
    setReminderDate('');
  };

  return (
    <div className="reminder-container">
      <h1>Medicine Reminder System</h1>
      <br />

      <form onSubmit={handleSubmit} className="reminder-form">
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reminderDate">Reminder Date</label>
          <input
            type="date"
            id="reminderDate"
            name="reminderDate"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Set Reminder</button>
      </form>

      {status && <div className="status-message">{status}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Reminder;