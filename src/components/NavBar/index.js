import HamburgerMenu from '../HamburgerMenu'
import './index.scss'
import React  from 'react';
import cv from "../../shivatiwariCV.pdf";

const Navbar = () => {

    return (
        <nav>
            <h1>Shiva</h1>
            <HamburgerMenu/>
            <div className="nav-links">
                <ul>
                    <li className="nav-links__link"><a href="/" alt="">Skills</a></li>
                    <li className="nav-links__link"><a href="/">Projects</a></li>
                    <li className="nav-links__link"><a href="./blogs.html">Blogs</a></li>
                    <li className="nav-links__link"><a href={cv} target="_blank" rel="noopener noreferrer">CV</a></li>
                    <li className="nav-links__link"><a href="/">Contact</a></li>
                </ul>
               
            </div>
            
        </nav>
    )
} 

export default Navbar