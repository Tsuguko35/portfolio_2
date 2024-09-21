import React from "react";
import "../../styles/footers/minifooter.css";

function MiniFooter() {
  return (
    <footer className="mini__footer">
      <div className="socials">
        <a
          className="light__on"
          style={{ animationDelay: "1s" }}
          href="https://www.facebook.com/tsuguko34"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          className="light__on"
          style={{ animationDelay: "1.4s" }}
          href="https://www.linkedin.com/in/jazphercarpio/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="light__on"
          style={{ animationDelay: "1.8s" }}
          href="https://github.com/Tsuguko35"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default MiniFooter;
