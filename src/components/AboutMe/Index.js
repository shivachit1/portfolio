import AboutMeInfo from "./AboutMeInfo";
import profilePic from "../../images/profilepic.png";
import "./index.scss";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import ArrowDown from "./ArrowDown";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div>
          <div className="profile__main">
            <span></span>
            <span></span>
            <span></span>
            <img className="profile__main__image" src={profilePic} alt="" />
          </div>

          <div className="profile__main__button-container">
            <a
              href="https://github.com/shivachit1"
              className="profile__main__button-container__button"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-tiwari-91b1a884/"
              className="profile__main__button-container__button"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        <AboutMeInfo />
      </div>
      <ArrowDown />
    </div>
  );
};

export default Profile;
