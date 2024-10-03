import React, { useEffect, useRef, useState } from "react";
import "../../styles/cursor/cursorfollower.css";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

function CursorFollower() {
  const [isDesktop, setIsDesktop] = useState(true); // To track if the device is desktop

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

  // Don't render the cursor follower on mobile devices
  if (!isDesktop) {
    return null;
  }

  return (
    <AnimatedCursor
      innerSize={0}
      showSystemCursor={true}
      outerSize={20}
      outerScale={5}
      outerAlpha={0.8}
      outerStyle={{ mixBlendMode: "difference" }}
      color="255, 255, 255"
      clickables={[
        "a",
        "h1",
        "h2",
        "h3",
        "h4",
        "img",
        "button",
        ".cursor__interact",
        ".hamburger__button",
        ".skill",
      ]}
    />
  );
}

export default CursorFollower;
