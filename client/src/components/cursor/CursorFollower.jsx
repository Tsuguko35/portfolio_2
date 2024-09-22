import React, { useEffect, useRef, useState } from "react";
import "../../styles/cursor/cursorfollower.css";

function CursorFollower() {
  const circleRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true); // To track if the device is desktop
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const circlePosRef = useRef({ x: 0, y: 0 }); // Use a ref for circle position

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

  // Track mouse position including scroll
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setMousePos({
        x: e.pageX, // PageX accounts for scroll offset
        y: e.pageY, // PageY accounts for scroll offset
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  // Function to animate the circle's position with lag
  useEffect(() => {
    if (!isDesktop) return;

    let animationFrameId;

    const animateCircle = () => {
      // Calculate the lag (lerp - linear interpolation)
      const dx = mousePos.x - circlePosRef.current.x;
      const dy = mousePos.y - circlePosRef.current.y;
      const lag = 0.1; // Adjust the lag value (smaller values = more lag)

      // Update the circle's position
      circlePosRef.current.x += dx * lag;
      circlePosRef.current.y += dy * lag;

      // Update the circle's position in the DOM
      if (circleRef.current) {
        circleRef.current.style.left = `${circlePosRef.current.x - 12}px`; // Center circle
        circleRef.current.style.top = `${circlePosRef.current.y - 12}px`; // Center circle
      }

      // Request the next animation frame
      animationFrameId = requestAnimationFrame(animateCircle);
    };

    animateCircle(); // Start animation

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, [mousePos, isDesktop]); // Remove circlePos dependency

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
