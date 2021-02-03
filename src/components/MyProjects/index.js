import React from 'react'
import './index.scss'
import Project from './Project'

import data from "../../projects";
import MobileApps from './MobileApps';

const MyProjects = () => {
    const mobileApps = data[0]
    const webApps = data[1]
    return (
        <div id="myProjects" className="projects">
            <h3 >My Projects</h3>
            <MobileApps mobileApps={mobileApps}/>
            <h4 >Web Apps</h4>
            <div className="projects__container">
                {webApps.map((project) => (
                    <Project 
                    imageurl={project.imageurl}
                    projectTitle={project.projectTitle}
                    projectDescription={project.projectDescription}
                    details={project.details}
                    demoLink={project.info.demoLink}
                    githubLink={project.info.githubLink}
                    styleName="projects__container__item__webapp-image"
                    />
                ))}
            </div>
        </div>
    )
}

export default MyProjects