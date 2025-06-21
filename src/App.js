// App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Hero from "./Hero";
import SectionRow from "./SectionRow";
import DetailModal from "./components/DetailModal";
import blue from "./assets/blue.png";
import grey from "./assets/grey.png";
import red from "./assets/red.png";
import yellow from "./assets/yellow.png";
import "./App.css";

const profiles = [
  { name: "Recruiter", img: blue },
  { name: "Developer", img: grey },
  { name: "Stalker", img: red },
  { name: "Adventurer", img: yellow },
];

const topPicks = [
  { title: "Skills", image: "/images/skills.png" },
  { title: "Experience", image: "/images/experience.png" },
  { title: "Certifications", image: "/images/certs.png" },
  { title: "Projects", image: "/images/projects.png" },
];

const continueWatching = [
  { title: "Contact Me", image: "/images/contact.png" },
];

// --- Splash Screen
function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/profiles"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <h1 className="netflix-title">MEGHANA PALLAPOTHU</h1>
    </div>
  );
}

// --- Profile Selection
function ProfileScreen() {
  const navigate = useNavigate();
  return (
    <div className="profile-screen">
      <h2 className="watching-title">Who's Watching?</h2>
      <div className="profile-grid">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="profile-box"
            onClick={() => navigate("/portfolio")}
          >
            <img src={profile.img} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Portfolio Screen
function PortfolioScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // If modal opened via router state (optional future use)
    if (location.state && location.state.card) {
      setSelectedCard(location.state.card);
    }
  }, [location]);

  return (
    <>
   

      <Hero />
      <SectionRow
        title="Today's Top Picks for Recruiter"
        items={topPicks}
        onCardClick={(card) => setSelectedCard(card.title)} // ✅ FIXED HERE
      />
      <SectionRow
        title="Continue Watching for Recruiter"
        items={continueWatching}
        onCardClick={(card) => setSelectedCard(card.title)} // ✅ FIXED HERE
      />

      {/* Modal opens based on card title */}
      {selectedCard && (
        <DetailModal
          title={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/profiles" element={<ProfileScreen />} />
          <Route path="/portfolio" element={<PortfolioScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
