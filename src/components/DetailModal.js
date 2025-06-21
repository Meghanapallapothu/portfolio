// components/DetailModal.js
import React from "react";
import Skills from "./Skills";

import Experience from "./Experience";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./DetailModal.css";

export default function DetailModal({ title, onClose }) {
  const getContentComponent = () => {
    switch (title) {
      case "Skills":
        return <Skills />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Certifications":
        return <Certifications />;
      case "Contact Me":
        return <Contact />;
      default:
        return <p>Coming Soon...</p>;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">{getContentComponent()}</div>
      </div>
    </div>
  );
}
