
import React from "react";

export default function Certifications() {
  const certs = [
    "Infosys Springboard: Introduction to NLP, AI, Deep Learning (2024)",
     "Cisco Networking Academy: CCNAv7– Introduction to Networks",
    "Java Programming Fundamentals – Infosys Springboard",
     "Introduction to R Programming – NPTEL",
    "networkx: Introduction to Social Network Analysis – NPTEL",
  ];

  return (
    <div>
      <h3 style={{ color: "white", marginBottom: "10px" }}>Certifications</h3>
      <ul style={{ color: "#ddd", lineHeight: 1.7 }}>
        {certs.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}


