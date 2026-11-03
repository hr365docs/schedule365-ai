import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    numberOfEmployees: '',
    jobTitle: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessEmail) {
      alert('Business Email is mandatory!');
      return;
    }
    console.log('Form Submitted:', formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="firstName"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="lastName"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="businessEmail"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Business Email (Mandatory)
          </label>
          <input
            type="email"
            id="businessEmail"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Enter your business email"
            required
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="companyName"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="numberOfEmployees"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Number of Employees
          </label>
          <select
            id="numberOfEmployees"
            name="numberOfEmployees"
            value={formData.numberOfEmployees}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <option value="">Select an option</option>
            <option value="1-50">1-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="jobTitle"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter your job title"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="phoneNumber"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;