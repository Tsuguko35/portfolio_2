import React, { useEffect } from "react";
import "../../styles/navbar/navbarslide.css";

function NavbarSlide({ isOpen }) {
  return (
    <section className={`navbar__slide ${isOpen ? "open" : ""}`}>
      NavbarSlide
    </section>
  );
}

export default NavbarSlide;
