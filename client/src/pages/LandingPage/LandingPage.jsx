import React from "react";
import "../../styles/landingpage/landingpage.css";
import LandingHero from "./components/LandingHero";

function LandingPage() {
  return (
    <div className="landing__page">
      {/* Hero */}
      <LandingHero />
    </div>
  );
}

export default LandingPage;
