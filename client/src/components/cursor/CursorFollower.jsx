import React, { useEffect, useRef } from "react";
import "../../styles/cursor/cursorfollower.css";

function CursorFollower() {
  const mouseCoords = useRef({ x: 0, y: 0 });
  const circleRef = useRef(null);

  // Function to update circle position
  const animateCircles = () => {
    let x = mouseCoords.current.x;
    let y = mouseCoords.current.y + window.scrollY;

    if (circleRef.current) {
      circleRef.current.style.left = x - 12 + "px";
      circleRef.current.style.top = y - 12 + "px";
    }
  };

  // Follow cursor on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseCoords.current = {
        x: e.clientX,
        y: e.clientY,
      };
      animateCircles();
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      animateCircles(); // Update position based on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hover effect
  useEffect(() => {
    const handleMouseEnter = () => {
      if (circleRef.current) {
        circleRef.current.classList.add("cursor__fill");
      }
    };

    const handleMouseLeave = () => {
      if (circleRef.current) {
        circleRef.current.classList.remove("cursor__fill");
      }
    };

    const interactiveElements = document.querySelectorAll(
      "a, .cursor__interact"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="circle"></div>
    </>
  );
}

export default CursorFollower;
