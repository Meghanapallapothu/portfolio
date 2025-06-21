import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCoffee,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <img
          className="profile-pic"
          src="/meghana.jpg" // <-- local image from public folder
          alt="Meghana"
        />
        <div className="contact-text">
          <h3>Meghana Pallapothu</h3>
          <p className="role">AI & Machine Learning Enthusiast</p>
          <p className="desc">
            Skilled in  Python, RAG, ML and IoT. Passionate about solving
            real-world problems through scalable technology.
          </p>
          <p className="org">VRSEC | Infosys AI Intern</p>
          <a
            className="profile-btn"
            href="https://www.linkedin.com/in/meghana-pallapothu-302a80258/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 View LinkedIn
          </a>
        </div>
      </div>

      <p className="coffee-invite">
        I’m always up for a chat or a coffee! Feel free to reach out.
      </p>

      <div className="contact-info">
        <div className="info-box">
          <FaEnvelope className="icon" />
          <span>meghanapallapothu123@gmail.com</span>
        </div>
        <div className="info-box">
          <FaPhone className="icon" />
          <span>+91-6303046305</span>
        </div>
        <div className="info-box">
          <FaGithub className="icon" />
          <a
            href="https://github.com/Meghanapallapothu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="coffee-footer">
        Or catch up over a coffee ☕ <FaCoffee />
      </p>
    </div>
  );
}
