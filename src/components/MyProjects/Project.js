import "./index.scss";
import React from "react";

const Project = ({ imageurl, projectTitle, projectDescription, details,demoLink,githubLink, styleName }) => {
  return (
    <div className="projects__container__item">
      
        <img className={styleName} src={imageurl} alt="" />
      
      <div className="projects__container__item__info">
        <h4>{projectTitle}</h4>
        <h5> {projectDescription}</h5>
        <p className="green-text">{details}</p>
        <div>
        <a
                  className="link"
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <button>View Project</button>
          </a>
          <a
            className="link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="green-button">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
