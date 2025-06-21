import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/banner-bg.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100vw',
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Meghana Pallapothu - AI & Machine Learning Enthusiast</h1>
        <p className="hero-desc">
          Aspiring software engineer with strong skills in Python, 
          machine learning. Built production-ready projects using RAG,
          Streamlit, and IoT systems. Passionate about solving real-world
          problems with scalable technology.
        </p>
        <div className="hero-buttons">
          <a
  href="https://drive.google.com/file/d/1a6upv6ZN0vhNx8fRDq8R9hwUqDHd7u3t/preview"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn"
>
  ▶ Resume
</a>


          <a
            href="https://www.linkedin.com/in/meghana-pallapothu-302a80258/"
            target="_blank"
            rel="noreferrer"
            className="hero-btn secondary"
          >
            ⓘ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
