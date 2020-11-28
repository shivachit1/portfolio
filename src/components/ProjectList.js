import React, { Component } from 'react';
import MyProjects from '../projects';
class ProjectList extends Component {



    render() {

        const projects = MyProjects;

        return (
            <div id="myProjects" className="myProjects">
               
               <h3 className="large-text">Projects</h3>


                <div className="flex-container">
                    {projects.map((project) => (
                        <div key={project.projectTitle} className="project-item-div">

    
                                    <div className="image-container">
                                    <img className="image" src={project.imageurl} alt=""/>
                                    </div>
                                    
                                        <div className="project-info">
                                            <h5 className="project-title">{project.projectTitle}</h5>
                                            <p>{project.projectDescription}</p>
                                            <a className="link" href={project.info.demoLink} target="_blank" rel="noopener noreferrer"><button className="blue-btn">Demo</button></a>
                                            <a className="link" href={project.info.githubLink} target="_blank" rel="noopener noreferrer"><button className="blue-btn">Code</button></a>

                                        </div>
                                  

                                    

                           


                        </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default (ProjectList);