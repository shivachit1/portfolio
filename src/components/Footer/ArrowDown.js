import "./index.scss";
import React, { useEffect, useRef } from "react";

const ArrowDown = ({ scrollStatus }) => {
  
    if (scrollStatus) {
    return (
      <div className="scroll-info">
        <p>Scroll Up</p>
        <div className="scroll-info__scroll-btn">
          <i className="scroll-info__arrow-up"></i>
        </div>
      </div>
    );
  }


  return (
    <div className="scroll-info">
      <p>Scroll Down</p>
      <button className="scroll-info__scroll-btn">
        <i className="scroll-info__arrow-down"></i>
      </button>
    </div>
  );
};

export default ArrowDown;
