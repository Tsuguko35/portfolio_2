import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context";

function DelayedLink({ to, children, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { linkTransitionOpen, setLinkTransitionOpen } =
    useContext(ProjectContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (location.pathname.toLowerCase() !== to.toLowerCase()) {
      setLinkTransitionOpen(true);
      const randomDelay = 1900; // 1 to 1.5 seconds in milliseconds

      setTimeout(() => {
        navigate(to);
      }, randomDelay);
    }
  };
  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default DelayedLink;
