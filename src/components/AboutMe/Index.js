import AboutMeInfo from "./AboutMeInfo";
import profilePic from "../../images/profilepic.png";
import "./index.scss";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoSlack } from "react-icons/io5";

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
            <a href="/" className="profile__main__button-container__button">
              <IoLogoGithub />
            </a>
            <a href="/" className="profile__main__button-container__button">
              <IoLogoLinkedin />
            </a>
            <a href="/" className="profile__main__button-container__button">
              <IoLogoSlack />
            </a>
          </div>
        </div>

        <AboutMeInfo />
      </div>
    </div>
  );
};

export default Profile;
