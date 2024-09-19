import React from "react";
import "../../styles/landingpage/landingpage.css";
import HorizontalLine from "../../components/lines/HorizontalLine";
import LandingHero from "./components/LandingHero";

function LandingPage() {
  return (
    <div className="landing__page">
      {/* Hero */}
      <LandingHero />

      {/* Line  */}
      <HorizontalLine />
    </div>
  );
}

export default LandingPage;
