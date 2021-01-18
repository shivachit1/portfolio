import React from 'react';
import { Component } from 'react';
import { Link } from 'react-scroll';
import cv from '../shivatiwariCV.pdf';
import ProfilePic from '../images/profilepic.png'
class Profile extends Component {


    render() {

        return (
          
            <div className="profile-container">
                <img className="profileImage" src={ProfilePic} alt="Profile Pic"></img>
                
                <div className="home-greeting">
                    
                    <h6>Hello, I'm Shiva Tiwari</h6>
                    <h4 className="green-text">Full-Stack Developer.</h4>
                    <h6> Currently living in Helsinki, who have serious passion on designing and developing <strong>web</strong> and <strong>mobile</strong> applications.<br/>
                        On my free time, I also love building <strong>games</strong> for mobile phones.
                    </h6>

                    <a href={cv} target="_blank" rel="noopener noreferrer"><button className="download-cv-btn">Download CV</button></a>
                    <div className="layout"> 
                        <h6>Feel free to checkout my recent projects.</h6>
                        <Link className="link" to="myProjects" spy={true} smooth={true} offset={-50} duration={500}><h6><button className="see-projects-btn">View Projects</button></h6></Link>
                    </div>
                    
    
                </div>
                   

            </div>
        );

    }

}
export default Profile;