import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', 
    income: '', ssn: '', address: ''
  });

  const updateFields = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitApp = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Move to Success Page
    }, 2000);
  };

  return (
    <div className="app-container">
      {/* Step 1: Personal Info */}
      {step === 1 && (
        <section>
          <h2>Step 1: Personal Details</h2>
          <input name="firstName" placeholder="First Name" onChange={updateFields} />
          <input name="lastName" placeholder="Last Name" onChange={updateFields} />
          <input name="email" type="email" placeholder="Email" onChange={updateFields} />
          <button onClick={nextStep}>Next: Financial Info</button>
        </section>
      )}

      {/* Step 2: Financial Info */}
      {step === 2 && (
        <section>
          <h2>Step 2: Financial Details</h2>
          <input name="income" type="number" placeholder="Annual Income" onChange={updateFields} />
          <input name="ssn" type="password" placeholder="SSN" onChange={updateFields} />
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button onClick={submitApp}>{loading ? "Processing..." : "Submit Application"}</button>
          </div>
        </section>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <section className="success">
          <h2>🎉 Application Submitted!</h2>
          <p>Thank you, {formData.firstName}. We will review your data.</p>
          <button onClick={() => window.location.reload()}>Start New</button>
        </section>
      )}
    </div>
  );
}