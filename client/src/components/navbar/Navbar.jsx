import React, { useState } from "react";
import "../../styles/navbar/navbar.css";
import logoImg from "../../assets/images/logo_transparent.png";
import NavbarSlide from "./NavbarSlide";
import HackerEffect from "../animations/HackerEffect";

function Navbar({ isOpen, setIsOpen }) {
  const title = "— jazpher carpio";
  return (
    <header className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="nav__container">
        <a href="/" className="title">
          {title.split("").map((letter, index) => (
            <HackerEffect
              key={index} // Ensure unique key for each letter
              text={letter === " " ? "\u00A0" : letter} // Handle spaces
              className={"letter_decode PPEiko"}
              scrambleSpeed={10} // Adjust speed as needed
              startDelay={index * 100}
            />
          ))}
        </a>
        <div className="logo__container">
          <a href="/" className="logo light__on">
            <img src={logoImg} alt="logoIMG" draggable={false} />
          </a>
        </div>
        <div className="nav__items ">
          <a
            href="/"
            className="download light__on"
            style={{ animationDelay: "0.6s" }}
          >
            Resume
          </a>
          <div
            className="hamburger__button light__on"
            onClick={() => setIsOpen(!isOpen)}
            style={{ animationDelay: "1.2s" }}
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
