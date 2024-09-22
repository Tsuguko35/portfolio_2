import React, { useEffect, useState } from "react";
import "../../styles/navbar/navbarslide.css";

// Icons
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import Resume from "../../assets/documents/Jazpher_CV.pdf";
import DelayedLink from "../animations/DelayedLink";

function NavbarSlide({ isOpen }) {
  const [isFirstRender, setIsFirstRender] = useState(true); // Track initial render

  useEffect(() => {
    // Set first render to false after the first render completes
    setIsFirstRender(false);
  }, []);

  const nav__list = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Projects",
      path: "/projects",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <section
      className={`navbar__slide ${
        isFirstRender ? "" : isOpen ? "open" : "close"
      }`}
    >
      <div className="navbar__slide__container">
        <nav>
          <ul className="navbar__slide__list">
            {nav__list.map((item, index) => (
              <li key={index}>
                <DelayedLink
                  className="PPEiko reveal"
                  to={item.path}
                  data-text={item.text}
                >
                  {item.text}
                </DelayedLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__slide__divider"></div>
        <div className="navbar__slide__bottom">
          <div className="text-container download__container">
            <a
              className="download reveal"
              href={Resume}
              download={"Jazpher_Resume.pdf"}
            >
              Resume
            </a>
          </div>

          <div className="navbar__slide__card">
            <div className="text-container">
              <span className="name reveal PPEiko">JAZPHER CARPIO</span>
            </div>
            <div className="text-container">
              <span className="position reveal PPNeueMontreal">
                Web Developer
              </span>
            </div>
          </div>

          <div className="navbar__slide__card">
            <div className="text-container">
              <span className="title reveal PPNeueMontreal">Contact</span>
            </div>

            <div className="text-container">
              <p className="text reveal PPNeueMontreal">
                carpio.johnjazpher.dc.3188@gmail.com
              </p>
            </div>
          </div>

          <div className="navbar__slide__card">
            <div className="text-container">
              <span className="title reveal PPNeueMontreal">Socials</span>
            </div>

            <div className="text-container">
              <div className="social__links reveal">
                <a
                  className="link"
                  href="https://www.facebook.com/tsuguko34"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/jazphercarpio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="link"
                  href="https://github.com/Tsuguko35"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarSlide;
