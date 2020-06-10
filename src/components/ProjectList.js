import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Img from 'react-image';
import MyProjects from '../projects.json';
import AjnaChatAppPic from '../images/ajna-app.png';
import ChickenFly from '../images/chickenfly.png';
import PortfolioAppPic from '../images/portfolio.png';
class ProjectList extends Component {



    render() {

        const projects = MyProjects.projects;
        console.log(projects);

        return (
            <div id="myProjects" className="myProjects">
                <h6 className="sub-header">My Projects</h6>


                <div className="outer">
                    {projects.map(({ projectTitle, projectDescription, details, imageurl, info }) => (
                        <div key={projectTitle} className="inner-div">

                            <div className="project-info">
                                <div>
                                    <h5 className="black-text" >{projectTitle}</h5>
                                    <h6>{projectDescription}</h6>
                                </div>

                                <div className="image-container">
                                    {(() => {
                                        switch (projectTitle) {
                                            case "Ajna Chat Application": 
                                            return <Img className="image" src={AjnaChatAppPic} />;
                                            case "Chicken Fly": return <Img className="image" src={ChickenFly} />;
                                            case "My portfolio Website": return <div><Img className="image" src={PortfolioAppPic} /> </div>;
                                            default: return "#FFFFFF";
                                        }
                                    })()}

                                </div>
                                <p className="black-white">{details}</p>
                                <a className="link" href={info.downloadLink}><Button className="link-button">View Link</Button></a>
                                <a className="link" href={info.githubLink}><Button className="github-button">View Github</Button></a>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default (ProjectList);