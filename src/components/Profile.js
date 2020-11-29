import React from 'react';
import { Component } from 'react';
import { Link } from 'react-scroll';
import cv from '../shivatiwariCV.pdf';
class Profile extends Component {


    render() {

        return (
          
            <div className="profile-container">
                <div className="profile-image-shadow"></div>
                <img className="profileImage" src="https://firebasestorage.googleapis.com/v0/b/portfoliowebsite-8eb68.appspot.com/o/profileImage.jpg?alt=media&token=da13eb2c-081a-4c80-aea8-c931296ddf5d" alt="Profile Pic"></img>
                
                <div id="homepage" className="home-greeting">
                    
                    <h5>Hello, I'm Shiva Tiwari</h5>
                    <h3 className="large-text">Full-Stack Developer.</h3>
                    <h5> Currently living in Helsinki, who have serious passion on designing and developing <strong>web</strong> and <strong>mobile</strong> applications.<br/>
                        On my free time, I also love building <strong>games</strong> for mobile phones.
                    </h5>

                    <a href={cv} target="_blank" rel="noopener noreferrer"><button className="download-cv-btn">Download CV</button></a>
                    <div className="layout"> 
                        <h5>Feel free to checkout my recent projects.</h5>
                        <Link className="link" to="myProjects" spy={true} smooth={true} offset={-50} duration={500}><h6><button className="see-projects-btn">See Projects</button></h6></Link>
                    </div>
                    
    
                </div>
                   

            </div>
        );

    }

}
export default Profile;