import './index.scss'
import React from 'react'
import profilePic from '../../images/profile-image.jpg'

const Svg = () => {
    return(
        <div>
        <img className="profile__image" src={profilePic} alt=""/>
        </div>
        
    )
}

export default Svg