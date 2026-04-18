import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    panCard: '',
    dob: '',
    pwd: '',
    confirmPwd: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    // Convert PAN to uppercase automatically
    const value = e.target.name === 'panCard' ? e.target.value.toUpperCase() : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const validateForm = () => {
    // PAN Card Regex (Standard Indian Format: 5 Letters, 4 Digits, 1 Letter)
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    
    if (!panRegex.test(formData.panCard)) {
      return "Invalid PAN Card format (e.g., ABCDE1234F).";
    }
    if (formData.mobile.length !== 10) {
      return "Mobile number must be 10 digits.";
    }
    if (formData.pwd !== formData.confirmPwd) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    console.log("Form Data Submitted:", formData);
    alert("Registration successful for " + formData.fullName);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ textAlign: 'center' }}>User Registration</h2>
        
        {error && <p style={styles.error}>{error}</p>}

        <label>Full Name</label>
        <input name="fullName" placeholder="John Doe" onChange={handleChange} required style={styles.input} />

        <label>Mobile Number</label>
        <input name="mobile" type="tel" maxLength="10" placeholder="9876543210" onChange={handleChange} required style={styles.input} />

        <label>Email Address</label>
        <input name="email" type="email" placeholder="email@example.com" onChange={handleChange} required style={styles.input} />

        <label>PAN Card</label>
        <input name="panCard" maxLength="10" placeholder="ABCDE1234F" onChange={handleChange} required style={styles.input} />

        <label>Date of Birth</label>
        <input name="dob" type="date" onChange={handleChange} required style={styles.input} />

        <label>Password</label>
        <input name="pwd" type="password" placeholder="••••••••" onChange={handleChange} required style={styles.input} />

        <label>Confirm Password</label>
        <input name="confirmPwd" type="password" placeholder="••••••••" onChange={handleChange} required style={styles.input} />

        <button type="submit" style={styles.button}>Register Now</button>
        <div style={styles.footer}>
  <span>Already have an account? </span>
  <Link to="/login" style={styles.link}>Login Here</Link>
</div>
      </form>
      
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' },
  form: { display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', gap: '10px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '5px' },
  button: { padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
  error: { color: 'red', fontSize: '14px', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '4px' }
};

export default Registration;
