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
