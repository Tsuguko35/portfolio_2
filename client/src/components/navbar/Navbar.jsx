import React, { useState, useEffect } from "react";
import "../../styles/navbar/navbar.css";
import logoImg from "../../assets/images/logo_transparent.png";
import NavbarSlide from "./NavbarSlide";
import HackerEffect from "../animations/HackerEffect";
import Resume from "../../assets/documents/Jazpher_CV.pdf";
import { useLocation } from "react-router-dom";
import DelayedLink from "../animations/DelayedLink";

function Navbar({ isOpen, setIsOpen, isMainVisible }) {
  const location = useLocation();
  const [isMini, setIsMini] = useState(false); // State to track whether the user is at the top
  const title = "— jazpher carpio";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Effect to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMini(true);
      } else {
        setIsMini(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`navbar ${isOpen ? "open" : ""} ${isMini ? "mini" : ""}`}
    >
      {/* Nav Text  */}
      <div className="nav__container">
        {isMainVisible && (
          <div className="logo__text">
            <DelayedLink to={"/"} className="title">
              {title.split("").map((letter, index) => (
                <HackerEffect
                  key={index} // Ensure unique key for each letter
                  text={letter === " " ? "\u00A0" : letter} // Handle spaces
                  className={"letter_decode PPEiko"}
                  scrambleSpeed={10} // Adjust speed as needed
                  startDelay={index * 100}
                />
              ))}
            </DelayedLink>
          </div>
        )}

        {/* Nav Logo  */}
        <div className="logo__container">
          <DelayedLink
            to={"/"}
            className="logo light__on"
            style={{ animationDelay: "3s" }}
          >
            <img src={logoImg} alt="logoIMG" draggable={false} />
          </DelayedLink>
        </div>

        {/* Nav Items  */}
        <div className="nav__items">
          {/* Resume Download  */}
          <a
            href={Resume}
            className="download light__on"
            style={{ animationDelay: "3.1s" }}
            data-text="Resume"
            download={"Jazpher_Resume.pdf"}
          >
            Resume
          </a>

          {/* Hamburger Button  */}
          <div
            className="hamburger__button light__on"
            onClick={() => setIsOpen(!isOpen)}
            style={{ animationDelay: "3.7s" }}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* NavbarSlide  */}
      <NavbarSlide isOpen={isOpen} />
    </header>
  );
}

export default Navbar;
