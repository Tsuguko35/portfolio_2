import React, { useState, useEffect } from "react";

const HackerEffect = ({
  text,
  className,
  scrambleSpeed = 100,
  startDelay = 0,
}) => {
  const [displayText, setDisplayText] = useState(""); // Text shown during the animation

  useEffect(() => {
    if (text.length === 0) return;

    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const getRandomChar = () =>
      randomChars[Math.floor(Math.random() * randomChars.length)];

    const scrambleCharacter = () => {
      let intervalId = setInterval(() => {
        setDisplayText(getRandomChar());
      }, scrambleSpeed);

      // Stop scrambling and reveal the correct letter after a certain time
      const revealTimeout = setTimeout(() => {
        clearInterval(intervalId);
        setDisplayText(text);
      }, scrambleSpeed * 10); // Adjust multiplier for the duration of scrambling

      return () => {
        clearInterval(intervalId);
        clearTimeout(revealTimeout);
      };
    };

    // Set a timeout to start the scrambling effect after the startDelay
    const delayTimeout = setTimeout(() => {
      scrambleCharacter(); // Start the scrambling effect
    }, startDelay);

    return () => {
      clearTimeout(delayTimeout); // Cleanup delay timeout
    };
  }, [text, scrambleSpeed, startDelay]);

  return <span className={className}>{displayText}</span>;
};

export default HackerEffect;
