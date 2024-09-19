import React, { useEffect, useState, useRef } from "react";

function ProjectImages({ imageSrc, index }) {
  const [yPos, setYPos] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [prevIndex, setPrevIndex] = useState(index); // Track previous index
  const [direction, setDirection] = useState(""); // Track animation direction (up/down)
  const targetY = useRef(0); // Reference to track the target Y position
  const currentY = useRef(0); // Reference to track the current Y position

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetY.current = e.clientY; // Set target Y position based on mouse
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      // Gradually update the currentY towards the targetY with a lag effect
      currentY.current += (targetY.current - currentY.current) * 0.1; // 0.1 is the easing factor

      setYPos(currentY.current);

      requestAnimationFrame(smoothMove); // Continue the animation loop
    };

    smoothMove(); // Start the animation loop

    return () => cancelAnimationFrame(smoothMove); // Cleanup the animation
  }, []);

  // Handle index change for transition effect
  useEffect(() => {
    if (index > prevIndex) {
      setDirection("up");
    } else if (index < prevIndex) {
      setDirection("down");
    }
    setPrevIndex(index); // Update the previous index after change
  }, [index]);

  return (
    <div
      className={`project__image ${!isDesktop ? "mobile" : ""} ${direction}`}
      style={{ top: `${yPos - 95}px` }} // Adjust to center the image on the Y axis
    >
      <img src={imageSrc} alt={imageSrc} />
    </div>
  );
}

export default ProjectImages;
