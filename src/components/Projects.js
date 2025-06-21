// Projects.js
import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Medical Chatbot (RAG)",
    description:
      "Built a real-time medical chatbot using Retrieval Augmented Generation with LLaMA models and Groq API.",
    tech: ["Python", "Streamlit", "LLaMA", "Groq API"],
  },
  {
    title: "Virtual Study Room Web App",
    description:
      "Platform for students to join interest-based rooms with real-time updates and notifications.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Snort-Based Web Firewall",
    description:
      "Custom Snort-based WAF to detect and log suspicious HTTP traffic and prevent common web exploits.",
    tech: ["Snort", "Python", "Flask"],
  },
  {
    title: "IoT Door Safety System",
    description:
      "Raspberry Pi system that alerts when oncoming vehicles approach open car doors using sensors and camera.",
    tech: ["Raspberry Pi", "IoT", "Python"],
  },
  {
    title: "Smart Crop Price Predictor",
    description:
      "ML-powered prediction system that forecasts crop prices to help farmers plan sales for profit.",
    tech: ["Flask", "scikit-learn", "React", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <div className="projects-list">
      {projectData.map((proj, i) => (
        <div key={i} className="project-block">
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-desc">{proj.description}</p>
          <div className="tech-tags">
            {proj.tech.map((tech, idx) => (
              <span key={idx} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
