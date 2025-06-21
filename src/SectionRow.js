// SectionRow.js
import React from "react";
import "./SectionRow.css";

export default function SectionRow({ title, items = [], onCardClick }) {
  return (
    <div className="section-row">
      <h2>{title}</h2>
      <div className="row-scroll">
        {items.map((item, i) => (
          <div
            className="row-card"
            key={i}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => onCardClick && onCardClick(item)} // ✅ Click support
          >
            <div className="card-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
