import React from "react";
import "./App.css";
import blue from "./assets/blue.png";
import grey from "./assets/grey.png";
import red from "./assets/red.png";
import yellow from "./assets/yellow.png";

const profiles = [
  { name: "Recruiter", img: blue },
  { name: "Developer", img: grey },
  { name: "Stalker", img: red },
  { name: "Adventurer", img: yellow },
];

export default function ProfileScreen() {
  return (
    <div className="profile-screen">
      <h2>Who's Watching?</h2>
      <div className="profile-grid">
        {profiles.map((profile, i) => (
          <div key={i} className="profile-box">
            <img src={profile.img} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
