import React from 'react';
import { Component } from 'react';
import { Link } from 'react-scroll';
import cv from '../shivatiwariCV.pdf';
class Profile extends Component {


    render() {

        return (
          
            <div className="profile-container">
                
                <img className="profileImage" src="https://firebasestorage.googleapis.com/v0/b/portfoliowebsite-8eb68.appspot.com/o/profilepic.jpg?alt=media&token=fde2c30d-5497-45d3-8fab-f93f69422d44" alt="Profile Pic"></img>
                
                <div id="homepage" className="home-greeting">
                    
                    <h5>Hello, I'm Shiva Tiwari</h5>
                    <h3 className="large-text">Full-Stack Developer.</h3>
                    <h5> Currently living in Helsinki, who have serious passion on designing and developing <span>web</span> and <span>mobile</span> applications.<br/>
                        On my free time, I also love building <span>games</span> for mobile phones.
                    </h5>

                    <a href={cv} target="_blank" rel="noopener noreferrer"><button className="blue-btn">Download CV</button></a>
                    <div className="layout"> 
                        <h5>Feel free to checkout my recent projects.</h5>
                        <Link className="link" to="myProjects" spy={true} smooth={true} offset={-50} duration={500}><h6><button className="green-btn">See Projects</button></h6></Link>
                    </div>
                    
    
                </div>
                   

            </div>
        );

    }

}
export default Profile;