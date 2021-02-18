import React from "react";
import { Link } from "react-scroll";

import "./index.scss";
import navigationImage from "../../images/scrolltabs.gif";
import reactToTypescript from "../../images/reactTypescript.png";

const Blogs = () => {
  return (
    <div className="blogs">
      <h2 id="myBlogs">My Blogs</h2>
      <div className="blogs__container">
        <a
          className="blogs__container__item"
          href="https://shivachit1.medium.com/create-smooth-scrolling-navigation-menu-with-recyclerview-and-linearsnaphelper-c0295f61d8ff"
        >
          <img src={navigationImage} alt="blog gif" />
          <div className="blogs__container__item__details">
            <div className="blogs__container__item__details__item">
              <span>Android</span>
              <span>RecyclerView</span>
              <span>Navigation Menu</span>
            </div>
            <h4>
              Create Smooth Scrolling Navigation menu with RecyclerView and
              LinearSnapHelper
            </h4>
          </div>
        </a>
        <a
          className="blogs__container__item"
          href="https://shivachit1.medium.com/how-to-migrate-your-previous-react-app-into-typescript-94c85a15464e"
        >
          <img src={reactToTypescript} alt="blog gif" />
          <div className="blogs__container__item__details">
            <div className="blogs__container__item__details__item">
              <span>React</span>
              <span>Yarn or Npm</span>
              <span>Typescript</span>
            </div>
            <h4>How to migrate your previous react app into Typescript</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
