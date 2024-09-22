import React, { useContext, useEffect } from "react";
import "../../styles/preloader/routetransition.css";
import { ProjectContext } from "../../context";
import { useLocation } from "react-router-dom";

function RouteTransition() {
  const location = useLocation();
  const { linkTransitionOpen, setLinkTransitionOpen, setIsOpen } =
    useContext(ProjectContext);

  useEffect(() => {
    document.body.style.overflow = linkTransitionOpen ? "hidden" : "auto";

    if (linkTransitionOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [linkTransitionOpen]);

  useEffect(() => {
    setLinkTransitionOpen(false);
  }, [location.pathname]);
  return (
    <div className={`route__transition ${linkTransitionOpen ? "open" : ""}`}>
      <div className="transition"></div>
    </div>
  );
}

export default RouteTransition;
