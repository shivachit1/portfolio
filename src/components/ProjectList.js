import React, { Component } from "react";
import MyProjects from "../projects";
class ProjectList extends Component {
  render() {
    const projects = MyProjects;

    return (
      <div id="myProjects" className="projects">
        <h4 className="green-text" style={{textAlign:"center"}}>Projects</h4>

          {projects.map((project) => (
            <div key={project.projectTitle} className="project-cardview">
                <h4 className="project-title">{project.projectTitle}</h4>
              <div className="image-container">
                <img className="image" src={project.imageurl} alt="" />
              </div>

              <div className="project-info">
                <div>
                <h6 className="green-text">Used Tools:</h6>
                <p> {project.projectDescription}</p>
                <p className="green-text">{project.details}</p>
                <a
                  className="link"
                  href={project.info.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="green-button">Demo</button>
                </a>
                <a
                  className="link"
                  href={project.info.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="green-button">Code</button>
                </a>
                </div>
              </div>
              
            </div>
          ))}
      </div>
    );
  }
}

export default ProjectList;
