import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Img from 'react-image';
import MyProjects from '../projects';
import AjnaChatAppPic from '../images/ajna-app.png';
import ChickenFly from '../images/chickenfly.png';
import PortfolioAppPic from '../images/portfolio.png';
class ProjectList extends Component {



    render() {

        const projects = MyProjects;
        console.log(projects);

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
                                            <h5 >{project.projectTitle}</h5>
                                            <p>{project.projectDescription}</p>
                                            <a className="link" href={project.info.demoLink} target="_blank"><button className="blue-btn">Demo</button></a>
                                            <a className="link" href={project.info.githubLink} target="_blank"><button className="blue-btn">Code</button></a>

                                        </div>
                                  

                                    

                           


                        </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default (ProjectList);