import React, { useEffect, useRef, useState } from "react";
import { HackerEffect } from "../../../components";

function Landing__Hero() {
  const name = "jazpher carpio";
  const postition = "web developer";
  const label__1 = "Fullstack Developer";
  const label__2 = "based in philippines";

  const videos = [
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1726299160/Portfolio_Files/Official_Files/Videos/jzorystjaomj8beuclrg.webm",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1726299161/Portfolio_Files/Official_Files/Videos/gr2uzqebykjumh1mlqda.webm",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1726299160/Portfolio_Files/Official_Files/Videos/tsiutokfsjsq9wrqe6h5.webm",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1726299161/Portfolio_Files/Official_Files/Videos/b9i44jj65uoe3i7vd2ar.webm",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const videoRefCurrent = useRef(null);
  const videoRefNext = useRef(null);

  // Handle the video fade-out and transition
  const handleVideoEnded = () => {
    setIsFading(true); // Start fading

    // Wait for the fade-out to complete before switching videos
    setTimeout(() => {
      setCurrentVideoIndex(nextVideoIndex);
      setNextVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsFading(false); // Reset fading state
    }, 1000); // 1 second fade-out duration
  };

  useEffect(() => {
    if (videoRefCurrent.current) {
      videoRefCurrent.current.pause(); // Pause the current video
      videoRefCurrent.current.src = videos[currentVideoIndex];
      videoRefCurrent.current.load();
      videoRefCurrent.current
        .play()
        .catch((error) => console.error("Play error:", error));
    }

    if (videoRefNext.current) {
      videoRefNext.current.src = videos[nextVideoIndex];
      videoRefNext.current.load();
    }
  }, [currentVideoIndex, nextVideoIndex]);

  return (
    <>
      <div className="landing__page__hero__background">
        {/* Current Video */}
        <video
          ref={videoRefCurrent}
          autoPlay
          loop={false}
          muted
          playsInline
          onEnded={handleVideoEnded}
          className={`video-layer ${isFading ? "fading-out" : "visible"}`}
        >
          <source src={videos[currentVideoIndex]} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Next Video */}
        <video
          ref={videoRefNext}
          autoPlay
          loop={false}
          muted
          playsInline
          className={`video-layer ${isFading ? "fading-in" : "hidden"}`}
        >
          <source src={videos[nextVideoIndex]} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="wrapper">
        <section className="landing__page__hero">
          <div className="landing__page__baseline">
            <div className="landing__page__baseline__labels">
              <div className="word">
                {label__1.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </div>
              <div className="word">
                {label__2.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="landing__page__h1">
            <div className="landing__page__name">
              {name.split("").map((letter, index) => (
                <HackerEffect
                  key={index} // Ensure unique key for each letter
                  text={letter === " " ? "\u00A0" : letter} // Handle spaces
                  className={"PPEiko"}
                  scrambleSpeed={10} // Adjust speed as needed
                  startDelay={index * 100}
                />
              ))}
            </div>
            <div className="landing__page__position">
              {postition.split("").map((letter, index) => (
                <HackerEffect
                  key={index} // Ensure unique key for each letter
                  text={letter === " " ? "\u00A0" : letter} // Handle spaces
                  className={"PPNeueMontreal"}
                  scrambleSpeed={10} // Adjust speed as needed
                  startDelay={(postition.length - index - 1) * 100} // Delays start from the left
                />
              ))}
            </div>
          </div>
          <div className="landing__page__socials">
            <a className="PPNeueMontreal light__on" href="/">
              Facebook
            </a>
            <a
              className="PPNeueMontreal light__on"
              style={{ animationDelay: "0.6s" }}
              href="/"
            >
              LinkedIn
            </a>
            <a
              className="PPNeueMontreal light__on"
              style={{ animationDelay: "1.2s" }}
              href="/"
            >
              Github
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing__Hero;
