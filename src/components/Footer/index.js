import React from 'react'
import ArrowDown from "../Footer/ArrowDown"
import "./index.scss";

const Footer = ({scrollStatus}) => {
  return (
    <div className="footer-div">
      <ArrowDown scrollStatus={scrollStatus}/>
      <footer>
        <p>All Copyright Reserved. @ Shiva Tiwari </p>
      </footer>
    </div>
      
  )
}

export default Footer
