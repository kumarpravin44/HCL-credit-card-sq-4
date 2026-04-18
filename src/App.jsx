import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect empty path to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define the page paths */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
