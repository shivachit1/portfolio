import React, { Component } from 'react';
import Img from 'react-image';
import Profilepic from '../images/profilepic.jpg';
class AboutMe extends Component {



    render() {
        return (

            <div className="profile-container">
                    <Img className="profileImage" src={Profilepic} ></Img>
               

                <div className="my-info">
                    <h5 className="black-text">Shiva Tiwari</h5>
                    <h6 className="address">Helsinki, Finland</h6>
                </div>

            </div>
        );
    }

}



export default (AboutMe);