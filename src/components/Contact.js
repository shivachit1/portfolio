import React, { Component } from 'react';
import LinkedIn from '../images/linkedIn.png';
import GithubImage from '../images/github.png';
class Contact extends Component {



    render() {
        return (

            <div id="contact">
            <div className="contact-div">
                    
                    
                    <h4 className="large-text">Looking for Collaboration?</h4>
                    <p> Looking for developer to work on your projects. Always ready to hear ideas.</p>

                    <div className="layout"> 
                    <a className="link" href={"mailto:shivachit1@gmail.com"}><button className="green-btn">Get in touch</button></a>

                       
                    </div>
                    
    
                </div>
                
                <div className="follow-div">
                        <p className="title">Follow me</p>
                    <div className="contact-follow">
                        <a  href="https://www.linkedin.com/in/shiva-tiwari-91b1a884/" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={LinkedIn} alt=""/></a>
                        <a  href="https://github.com/shivachit1" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={GithubImage} alt=""/></a>
                        <p>© 2020-present Shiva Tiwari. All Rights Reserved.</p>
                    </div>
                    
                </div>
                
            </div>
        );
    }

}



export default (Contact);