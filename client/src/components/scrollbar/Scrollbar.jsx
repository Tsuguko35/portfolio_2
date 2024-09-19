import React, { useEffect, useRef, useState } from "react";
import "../../styles/scrollbar/scrollbar.css";

function Scrollbar({ isOpen }) {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = () => {
    // Clear previous timeout if any
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Calculate the thumb position
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const trackHeight = windowHeight;

    // Set thumb height and position based on scroll
    const newThumbHeight = (windowHeight / documentHeight) * trackHeight;
    const newThumbPosition =
      (scrollTop / (documentHeight - windowHeight)) *
      (trackHeight - newThumbHeight);

    setThumbHeight(newThumbHeight);
    setThumbPosition(newThumbPosition);
  };

  useEffect(() => {
    // Update the thumb height initially
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recalculate on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className={`scrollbar ${isOpen ? "hide" : ""}`}>
      <div className="track">
        <div
          className="thumb"
          style={{
            height: `${thumbHeight}px`,
            top: `${thumbPosition}px`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Scrollbar;
