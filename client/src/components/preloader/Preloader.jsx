import React, { useEffect, useState } from "react";
import "../../styles/preloader/preloader.css";
import logoIMG from "../../assets/images/logo_transparent.png";

function Preloader() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // 10ms intervals to reach 100 in 1 second
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="counter PPNeueMontreal">{count}/100</span>
        <img src={logoIMG} alt="logoIMG" className="light__on" />
        <span className="counter PPNeueMontreal">{count}/100</span>
      </div>
    </div>
  );
}

export default Preloader;
