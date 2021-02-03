import HamburgerMenu from "../HamburgerMenu";
import "./index.scss";
import React from "react";
import cv from "../../shivatiwariCV.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const hideResponsiveNav = () => {
    const menu = document.querySelector('.menu');
    const links = document.querySelector(".nav-links");
    links.classList.toggle("active");
    menu.classList.toggle("change");
  };

  return (
    <nav>
      <h1>Shiva</h1>
      <HamburgerMenu />
      <div className="nav-links">
        <ul>
          <li className="nav-links__link">
            <Link
            className="link"
              to="mySkills"
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              ignoreCancelEvents={true}
              onClick={() => hideResponsiveNav()}
            >
              Skills
            </Link>
          </li>
          <li className="nav-links__link">
            <Link
            className="link"
              activeClass="active"
              to="myProjects"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={() => hideResponsiveNav()}
            >
              Projects
            </Link>
          </li>
          <li className="nav-links__link">
            <Link
            className="link"
              activeClass="active"
              to="myBlogs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => hideResponsiveNav()}
            >
              Blogs
            </Link>
          </li>
          <li className="nav-links__link">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => hideResponsiveNav()}
            >
              CV
            </a>
          </li>
          <li className="nav-links__link">
            <Link
            className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}

              onClick={() => hideResponsiveNav()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
