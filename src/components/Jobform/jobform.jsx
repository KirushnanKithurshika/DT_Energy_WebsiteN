import React, { useState, useRef, useEffect } from "react";
import "./jobform.css";
import { FaPaperPlane } from "react-icons/fa";

function JobApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredContactMethod: [],
    resume: null,
    coverLetter: null,
    position: "",
    availability: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs to clear file inputs
  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
      return;
    }

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files?.[0] || null }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper: fetch with timeout
  const fetchWithTimeout = async (url, options, timeoutMs = 60000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      return res;
    } finally {
      clearTimeout(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMessage("Sending your application...");
    setIsSubmitting(true);

    // Prepare multipart form data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("position", formData.position);
    data.append("availability", formData.availability);

    // Only append files if present (prevents backend crashes)
    if (formData.resume) data.append("resume", formData.resume);
    if (formData.coverLetter) data.append("coverLetter", formData.coverLetter);

    data.append(
      "preferredContactMethod",
      JSON.stringify(formData.preferredContactMethod)
    );

    try {
      const response = await fetchWithTimeout(
        "https://dt-backend-2257.onrender.com/send-job-application",
        {
          method: "POST",
          body: data,
        },
        60000 // 60s timeout (Render cold starts)
      );

      // Read response safely (even if server sends non-JSON)
      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        result = { message: text || "Unexpected response from server" };
      }

      if (response.ok) {
        setResponseMessage(
          result.message || "Application submitted successfully!"
        );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          preferredContactMethod: [],
          resume: null,
          coverLetter: null,
          position: "",
          availability: "",
        });

        // Clear file inputs
        if (resumeInputRef.current) resumeInputRef.current.value = "";
        if (coverLetterInputRef.current) coverLetterInputRef.current.value = "";
      } else {
        setResponseMessage(result.message || "Error submitting application");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.name === "AbortError") {
        setResponseMessage(
          "Server is taking too long to respond (cold start). Please try again in a moment."
        );
      } else {
        setResponseMessage("Error submitting application. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear message after 5 seconds
  useEffect(() => {
    if (!responseMessage) return;
    const timeout = setTimeout(() => setResponseMessage(""), 5000);
    return () => clearTimeout(timeout);
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
                checked={formData.preferredContactMethod.includes("Phone")}
                onChange={handleChange}
              />
              Phone
            </label>
            <label>
              <input
                type="checkbox"
                name="preferredContactMethod"
                value="Email"
                checked={formData.preferredContactMethod.includes("Email")}
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
          <FaPaperPlane /> {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>

      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}
    </div>
  );
}

export default JobApplyForm;
