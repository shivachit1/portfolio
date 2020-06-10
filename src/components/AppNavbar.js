import React, { Component } from 'react';

import {Navbar} from 'reactstrap';
import { Link } from 'react-scroll';
import Img from 'react-image';
import Profilepic from '../images/profilepic.jpg';
class AppNavbar extends Component {

        render() {

                return (
                        <Navbar>
                                <div className="navbar">

                                        <Link className="link" activeClass="active" to="homepage" spy={true} smooth={true} offset={-200} duration={500}><h5>About Me</h5></Link>
                                        <Link className="link" activeClass="active" to="skills" spy={true} smooth={true} offset={-170} duration={500}><h5>Skills</h5></Link>
                                        <Link className="link" activeClass="active" to="myProjects" spy={true} smooth={true} offset={-170} duration={500}><h5>My Projects</h5></Link>
                                        <Link className="link" activeClass="active" to="contact" spy={true} smooth={true} offset={-300} duration={500}><h5>Contact</h5></Link>


                                </div>

                                <div className="profile-container">

                                        <div className="profile">
                                                <Img className="profileImage" src={Profilepic} ></Img>
                                        </div>

                                        <div className="my-info">
                                                <h5 className="black-text">Shiva Tiwari</h5>
                                                <h6 className="address">Helsinki, Finland</h6>
                                        </div>

                                </div>


                        </Navbar>
                );
        }
}

export default (AppNavbar);