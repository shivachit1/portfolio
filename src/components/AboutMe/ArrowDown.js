import "./index.scss";
import React, { useEffect, useRef } from "react";

const ArrowDown = () => {

    return (
      <div className="scroll-info">
        <p>Scroll Down</p>
        <div className="scroll-info__scroll-btn">
          <i className="scroll-info__arrow-down"></i>
        </div>
      </div>
    );
};

export default ArrowDown;
