import React, { useEffect, useState } from "react";
import "../../styles/navbar/navbarslide.css";

// Icons
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

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
      path: "/",
    },
    {
      text: "About",
      path: "/",
    },
    {
      text: "Contact",
      path: "/",
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
                <a
                  className="PPEiko reveal"
                  href={item.path}
                  data-text={item.text}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__slide__divider"></div>
        <div className="navbar__slide__bottom">
          <div className="text-container download__container">
            <a className="download reveal" href="/">
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
                <a className="link" href="/">
                  <FaFacebookSquare />
                </a>
                <a className="link" href="/">
                  <FaLinkedin />
                </a>
                <a className="link" href="/">
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
