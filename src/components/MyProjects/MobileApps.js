import React from "react";
import Project from "./Project";

const MobileApps = ({ mobileApps }) => {
  return (
    <div>
      <h4>Mobile Apps</h4>
      <div className="projects__container">
        {mobileApps.map((project) => (
          <Project
            key={project.imageurl}
            imageurl={project.imageurl}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            details={project.details}
            demoLink={project.info.demoLink}
            githubLink={project.info.githubLink}
            styleName="projects__container__item__mobileapp-image"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileApps;
