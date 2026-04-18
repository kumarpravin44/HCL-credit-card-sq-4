import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    mobile: '',
    pwd: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (credentials.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      console.log("Logging in with:", credentials);
      alert("Login Successful!");
      // Here you would typically redirect the user to a dashboard
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={{ textAlign: 'center' }}>Welcome Back</h2>
        <p style={{ textAlign: 'center', color: '#666' }}>Login to manage your credit card</p>

        {error && <p style={styles.error}>{error}</p>}

        <label style={styles.label}>Mobile Number</label>
        <input 
          name="mobile" 
          type="tel" 
          maxLength="10"
          placeholder="Enter 10 digit mobile" 
          onChange={handleChange} 
          required 
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input 
          name="pwd" 
          type="password" 
          placeholder="Enter your password" 
          onChange={handleChange} 
          required 
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Verifying..." : "Login"}
        </button>

        <div style={styles.footer}>
          <span>Don't have an account? </span>
          <a href="/register" style={styles.link}>Register Now</a>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '50px 20px', fontFamily: 'Arial, sans-serif' },
  form: { display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '350px', gap: '12px', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #eee' },
  label: { fontSize: '14px', fontWeight: 'bold', color: '#333' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' },
  button: { padding: '12px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px', fontSize: '16px' },
  error: { color: '#721c24', backgroundColor: '#f8d7da', padding: '10px', borderRadius: '4px', fontSize: '14px', textAlign: 'center' },
  footer: { textAlign: 'center', marginTop: '15px', fontSize: '14px' },
  link: { color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }
};

export default Login;