import "./index.scss";
import React from "react";
import { Link } from "react-scroll";

const AboutMeInfo = () => {
  return (
    <div className="profile__info">
      <p>Hello,</p>
      <p>
        I'm <strong>Shiva Tiwari.</strong>
      </p>
      <p>
        Currently living in Helsinki, specializing on designing and developing
      </p>
      <h1>Android applications</h1>
      <p>and</p>
       <h1>Full-stack web applications.</h1> 
      <div className="layout">
        <p>Feel free to checkout my recent projects.</p>
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
