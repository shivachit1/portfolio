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
            <h2 >My Projects</h2>
            <MobileApps mobileApps={mobileApps}/>
            <h3 >Web Apps</h3>
            <div className="projects__container">
                {webApps.map((project) => (
                    <Project 
                    key={project.imageurl}
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