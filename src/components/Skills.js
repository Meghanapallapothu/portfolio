// components/Skills.js
import React from "react";
import "./Skills.css";

const skills = {
  "Programming Languages": ["Python", "Java", "JavaScript", "R"],
  "Web Development": ["React", "HTML", "CSS"],
  "Tools & Platforms": ["MongoDB", "Git", "Linux"],
  "AI/ML": ["scikit-learn", "NLP", "Streamlit", "RAG", "LLaMA", "Groq API"]
};

export default function Skills() {
  return (
    <div className="skills-container">
      {Object.entries(skills).map(([category, list], i) => (
        <div key={i} className="skills-section">
          <h3>{category}</h3>
          <div className="skills-tags">
            {list.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}