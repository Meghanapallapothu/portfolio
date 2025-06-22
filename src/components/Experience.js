// Experience.js
import React, { useEffect, useRef } from "react";
import "./Experience.css";

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Infosys AI/ML Internship",
      period: "Dec 2024 – Feb 2025",
      description:
        "Worked on an NLP-based medical chatbot using Retrieval-Augmented Generation (RAG) architecture integrated with Groq API and LLaMA models.",
    },
    {
      title: "Hackathon Organizer & Tech Lead",
      period: "2025",
      description:
        "Led technical development for college hackathons,Oversaw problem statement design, team mentorship, and event execution at VRSEC.",
    },
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">📘 Experience</h2>
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="experience-item"
          ref={el => (itemsRef.current[idx] = el)}
        >
          <div className="experience-dot" />
          <div className="experience-content">
            <h3>{exp.title}</h3>
            <span className="experience-period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
