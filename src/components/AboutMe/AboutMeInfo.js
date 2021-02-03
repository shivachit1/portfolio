import "./index.scss";
import React from "react";
import { Link } from "react-scroll";

const AboutMeInfo = () => {
  return (
    <div className="profile__info">
      <h2>Hello,</h2>
      <h2>I'm <strong>Shiva Tiwari.</strong></h2>
      <h4>
        Currently living in Helsinki, specializing on designing and developing
      </h4>
      <h1>Android applications</h1>
      <h4>and</h4>
       <h1>Full-stack web applications.</h1> 
      <div className="layout">
        <h4>Feel free to checkout my recent projects.</h4>
      </div>
      <Link
        className="link"
        to="myProjects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <h6>
          <button className="green-button">View Projects</button>
        </h6>
      </Link>
    </div>
  );
};

export default AboutMeInfo;
