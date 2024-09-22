import React, { useEffect, useRef, useState } from "react";
import "../../styles/cursor/cursorfollower.css";
import { motion } from "framer-motion";

function CursorFollower() {
  const [isDesktop, setIsDesktop] = useState(true); // To track if the device is desktop
  const circleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    // Check if the user is on a mobile device by screen width or user agent
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/mobile|android|touch|ipad|tablet/i.test(userAgent)) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    checkDevice(); // Run check when the component mounts

    // Add window resize listener to update on screen size change
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Hover Effect
  useEffect(() => {
    if (!isDesktop) return;

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

    const interactiveElements = document.querySelectorAll("a, h1, h2, h3");

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
  }, [isDesktop]);

  // Don't render the cursor follower on mobile devices
  if (!isDesktop) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25 + window.screenY,
    },
  };

  return (
    <motion.div
      ref={circleRef}
      variants={variants}
      animate="default"
      className="circle"
    />
  );
}

export default CursorFollower;
