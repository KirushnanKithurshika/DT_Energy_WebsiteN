import React, { useEffect, useState } from "react";
import "./getaquote.css";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

function Getaquote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState(""); // success/error/status message
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Clear message after 5 seconds
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(""), 5000);
    return () => clearTimeout(t);
  }, [message]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("Sending your request...");

    try {
      const response = await axios.post(
        "https://dt-backend-2257.onrender.com/send-quote",
        formData,
        {
          timeout: 60000, // 60 seconds (Render can be slow on cold start)
          headers: { "Content-Type": "application/json" },
        }
      );

      // Show backend response message if present
      const okMsg =
        response?.data?.message || "Your quote request has been successfully sent!";
      setMessage(okMsg);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Show real error message from backend if available
      const serverMsg =
        error?.response?.data?.message ||
        error?.message ||
        "There was an issue sending your request. Please try again.";

      setMessage(serverMsg);
    } finally {
      setIsSubmitting(false);
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
              Fill out the form below, and our friendly team will reach out to
              you within 24 hours to guide you every step of the way!
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
                // optional
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
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get a Quote"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Message output */}
      {message && <div className="form-message">{message}</div>}
    </div>
  );
}

export default Getaquote;
