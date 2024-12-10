import React, { useState, useRef, useEffect } from 'react';
import './jobform.css';
import { FaPaperPlane } from 'react-icons/fa';

function JobApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredContactMethod: [],
    resume: null,
    coverLetter: null,
    position: '',
    availability: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for tracking submission

  // Refs for file inputs to reset their state
  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(''); // Clear any previous messages
    setIsSubmitting(true);  // Set isSubmitting to true when submitting

    // Prepare the form data
    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('position', formData.position);
    data.append('availability', formData.availability);
    data.append('resume', formData.resume);
    data.append('coverLetter', formData.coverLetter);
    data.append(
      'preferredContactMethod',
      JSON.stringify(formData.preferredContactMethod)
    );

    try {
      const response = await fetch('https://dt-backend-2257.onrender.com/send-job-application', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Application submitted successfully!');

        // Reset the form data
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredContactMethod: [],
          resume: null,
          coverLetter: null,
          position: '',
          availability: '',
        });

        // Clear file inputs
        if (resumeInputRef.current) resumeInputRef.current.value = '';
        if (coverLetterInputRef.current) coverLetterInputRef.current.value = '';
      } else {
        setResponseMessage(result.message || 'Error submitting application');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error submitting application');
    } finally {
      setIsSubmitting(false); // Set isSubmitting to false after the response
    }
  };

  // Clear response message after 5 seconds
  useEffect(() => {
    if (responseMessage) {
      const timeout = setTimeout(() => setResponseMessage(''), 5000); // Clear message after 5 seconds
      return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    }
  }, [responseMessage]);

  return (
    <div className="job-apply-form-container">
      <h2 className="form-header">Job Apply</h2>
      <form onSubmit={handleSubmit} className="job-apply-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred contact method</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="preferredContactMethod"
                value="Phone"
                checked={formData.preferredContactMethod.includes('Phone')}
                onChange={handleChange}
              />
              Phone
            </label>
            <label>
              <input
                type="checkbox"
                name="preferredContactMethod"
                value="Email"
                checked={formData.preferredContactMethod.includes('Email')}
                onChange={handleChange}
              />
              Email
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            ref={resumeInputRef}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter">Cover letter</label>
          <input
            type="file"
            id="coverLetter"
            name="coverLetter"
            ref={coverLetterInputRef}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position applied for</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          <FaPaperPlane /> Submit
        </button>
      </form>

      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}
    </div>
  );
}

export default JobApplyForm;
