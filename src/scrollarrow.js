import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./App.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="arrowbox" style={{ display: showScroll ? "flex" : "none" }}>
      <FaAngleUp className="scrollTop" onClick={scrollTop} />
    </div>
  );
};

export default ScrollArrow;
