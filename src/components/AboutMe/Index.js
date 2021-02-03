import AboutMeInfo from "./AboutMeInfo"
import profilePic from '../../images/profilepic.png'
import './index.scss'
import React from 'react'

const Profile = () => {
    return(
        <div className="main">
            <div className="profile">
                <img className="profile__image" src={profilePic} alt=""/>
                <AboutMeInfo/>
            </div>
        </div>
    )
}

export default Profile