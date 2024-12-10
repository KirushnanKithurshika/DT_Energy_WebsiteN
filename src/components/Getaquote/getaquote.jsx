import React, { useEffect, useState } from 'react';
import './getaquote.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import axios from 'axios';

function Getaquote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');  // State for success/error message
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submit button state

  // Initialize AOS (Animate On Scroll) for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Handle form input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');  // Reset previous message before new submission attempt

    try {
      const response = await axios.post('https://dt-backend-2257.onrender.com/send-quote', formData);
      setMessage('Your quote request has been successfully sent!');  // Success message
      setFormData({
        name: '',
        phone: '',
        address: '',
        email: '',
        message: '',
      });  
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('There was an issue sending your request. Please try again.');  // Error message
    } finally {
      setIsSubmitting(false);  // Re-enable submit button
    }
  };

  return (
    <div className="Getaquote-container" data-aos="fade-up">
      <div className="getaquote-content" data-aos="fade-up">
        <div className="left" data-aos="fade-up">
          <div className="up">
            <span className="headgetaquote">Get a Quote</span>
          </div>
          <div className="down">
            <span className="Aspan">
              Fill out the form below, and our friendly team will reach out to you within 24 hours to guide you every step of the way!
              <br />
            </span>
            <span className="Bspan">Got questions? We're here to help. 💬</span>
            <span className="Cspan">
              🎁 <strong>Why wait?</strong> Completing the form gives you access to:
              <br />
              <br />
              📞 A free consultation tailored just for you.
              <br />
              🎯 Expert advice from our seasoned professionals.
              <br />
              🚀 Fast-tracked support for your inquiries.
              <br />
              <br />
              ✨ <em>Don’t miss out – start your journey with us today!</em> ✨
            </span>
          </div>
        </div>

        <div className="right" data-aos="fade-up">
          <form className="transparent-form" onSubmit={handleSubmit}>
            <div className="form-groupA">
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
            <div className="form-groupA">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupA">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-groupA">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-groupA">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>Get a Quote</button>
           </form>
        </div>
      </div>
      {message && <div className="form-message">{message}</div>}
          
    </div>
  );
}

export default Getaquote;
