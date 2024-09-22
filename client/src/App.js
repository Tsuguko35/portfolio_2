import "./styles/styles.css";
import "./styles/fontface.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config";
import { CursorFollower, Navbar, Preloader, Scrollbar } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsMainVisible(true);
    }, 2500);

    const timeout2 = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 4300);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  // Animations
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.65;
      const features = document.querySelectorAll(".feature");

      features.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("light__on");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Preloader  */}
      <Preloader />

      {/* Scrollbar */}
      {isMainVisible && <CursorFollower />}

      {/* Navbar  */}
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isMainVisible={isMainVisible}
      />

      {/* Scrollbar */}
      {isMainVisible && <Scrollbar isOpen={isOpen} />}

      {/* Main  */}
      {isMainVisible && (
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
