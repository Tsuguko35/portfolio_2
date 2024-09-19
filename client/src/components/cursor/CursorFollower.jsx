import React, { useEffect, useRef, useState } from "react";
import "../../styles/cursor/cursorfollower.css";

function CursorFollower() {
  const mouseCoords = useRef({ x: 0, y: 0 }); // Tracks actual mouse coordinates
  const circleCoords = useRef({ x: 0, y: 0 }); // Tracks the circle's current position
  const circleRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true); // To track if the device is desktop

  const lerpFactor = 0.1; // How much to ease the circle (higher value = less smooth, lower value = more smooth)

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

  // Follow Cursor
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mouseCoords.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY, // Account for scroll position
      };
    };

    const animateCircles = () => {
      if (circleRef.current) {
        const x =
          circleCoords.current.x +
          (mouseCoords.current.x - circleCoords.current.x) * lerpFactor;
        const y =
          circleCoords.current.y +
          (mouseCoords.current.y - circleCoords.current.y) * lerpFactor;

        circleCoords.current = { x, y };

        circleRef.current.style.left = x - 12 + "px";
        circleRef.current.style.top = y - 12 + "px";

        requestAnimationFrame(animateCircles);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCircles(); // Start the animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

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
  }, [isDesktop]);

  // Don't render the cursor follower on mobile devices
  if (!isDesktop) {
    return null;
  }

  return <div ref={circleRef} className="circle"></div>;
}

export default CursorFollower;
