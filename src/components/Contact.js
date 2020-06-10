import React, { Component } from 'react';
import FacebookImage from '../images/fb.png';
import GithubImage from '../images/github.png';
import InstagramImage from '../images/instagram.jpg';
import Img from 'react-image';
class Contact extends Component {



    render() {
        return (

            <div id="contact" className="contact-div">

                <h6>Follow me</h6>
                <div>
                    <div className="contact-follow">
                        <a className="link" href="https://www.facebook.com/shiva.kalu"><Img className="profileImage" src={FacebookImage}/></a>
                        <p>Facebook</p>
                    </div>
                    <div className="contact-follow">
                        <a className="link" href="https://github.com/shivachit1"><Img className="profileImage" src={GithubImage}/></a>
                        <p>Github</p>
                    </div>
                    <div className="contact-follow">
                        <a className="link" href="https://www.instagram.com/cvatiwari/" ><Img className="profileImage" src={InstagramImage}/></a>
                        <p>Instagram</p>
                    </div>

                </div>
                <p className="right-text">© 2020-present Shiva Tiwari. All Rights Reserved.</p>
            </div>
        );
    }

}



export default (Contact);