import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoSlack } from "react-icons/io5";
import ArrowDown from "../Footer/ArrowDown"
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-div">
      <ArrowDown/>
      <footer>
        <p>All Copyright Reserved.@Shiva </p>
        <div className="button-container">
          <a href="/" className="button-container__button">
            <IoLogoGithub/>
          </a>
          <a href="/" className="button-container__button">
            <IoLogoLinkedin/>
          </a>
          <a href="/" className="button-container__button">
            <IoLogoSlack/>
          </a>
        </div>
      </footer>
    </div>
      
  )
}

export default Footer
