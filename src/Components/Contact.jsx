import React, { useState } from "react";
import './Contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
