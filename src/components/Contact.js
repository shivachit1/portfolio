import React, { Component } from 'react';
import FacebookImage from '../images/fb.png';
import GithubImage from '../images/github.png';
import InstagramImage from '../images/instagram.jpg';
import Img from 'react-image';
class Contact extends Component {



    render() {
        return (

            <div id="contact">
            <div className="contact-div">
                    
                    
                    <h4 className="large-text">Looking for Collabration?</h4>
                    <p> Looking for developer to work on your projects. Always ready to hear ideas.</p>

                    <div className="layout"> 
                    <a className="link" href={"mailto:shivachit1@gmail.com"}><button className="green-btn">Get in touch</button></a>

                       
                    </div>
                    
    
                </div>
                
                <div className="follow-div">
                <h4 className="title">Follow me</h4>
                    <div className="contact-follow">
                        <a  href="https://www.facebook.com/shiva.kalu"><Img className="contactImage" src={FacebookImage}/></a>
                        <p>Facebook</p>
                    </div>
                    <div className="contact-follow">
                        <a  href="https://github.com/shivachit1"><Img className="contactImage" src={GithubImage}/></a>
                        <p>Github</p>
                    </div>
                    <div className="contact-follow">
                        <a  href="https://www.instagram.com/cvatiwari/" ><Img className="contactImage" src={InstagramImage}/></a>
                        <p>Instagram</p>
                    </div>
                    <p>© 2020-present Shiva Tiwari. All Rights Reserved.</p>
                </div>
                
            </div>
        );
    }

}



export default (Contact);