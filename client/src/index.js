import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";

/* Import locomotive-scroll */
import LocomotiveScroll from "locomotive-scroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-container"),
      smooth: true,
      getDirection: true,
      lerp: 0.1,
      reloadOnContextChange: true,
      multiplier: 1,
      class: "ignore-scroll",
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Event listener to prevent Locomotive Scroll from interfering with nested scrollable elements
    const handleWheel = (e) => {
      if (e.target.closest(".ignore-scroll")) {
        e.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: true });

    // Scroll to the top on pathname change
    scroll.scrollTo("top", { immediate: true });

    // Cleanup function to destroy Locomotive Scroll instance and remove event listener
    return () => {
      if (scroll) scroll.destroy();
      document.removeEventListener("wheel", handleWheel);
    };
  }, [pathname]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
