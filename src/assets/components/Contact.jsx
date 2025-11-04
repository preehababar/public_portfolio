import React from "react";
import "./Contact.css";
import { FiMail, FiPhone, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-sub">
          Create refined & modern websites. Feel free to reach out.
        </p>

        <div className="contact-grid">

          <a href="mailto:preehababar@gmail.com" className="contact-card">
            <FiMail className="contact-icon" />
            <span className="contact-label">Email</span>
            <span className="contact-value">preehababar@gmail.com</span>
          </a>

          <a href="tel:+923220064320" className="contact-card">
            <FiPhone className="contact-icon" />
            <span className="contact-label">Phone</span>
            <span className="contact-value">+92 322 006 4320</span>
          </a>

          <a href="https://instagram.com/preeha_babar" target="_blank" className="contact-card">
            <FiInstagram className="contact-icon" />
            <span className="contact-label">Instagram</span>
            <span className="contact-value">@preeha_babar</span>
          </a>

          <a href="https://www.linkedin.com/in/preeha-babar" target="_blank" className="contact-card">
            <FiLinkedin className="contact-icon" />
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">preeha-babar</span>
          </a>

        </div>

      </div>
    </section>
  );
}
