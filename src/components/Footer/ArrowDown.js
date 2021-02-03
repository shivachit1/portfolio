import './index.scss'
import React from 'react'

const ArrowDown = () => {
    return(
            <div className="scroll-info">
                <p>Scroll Down</p>
                <button className="scroll-info__scroll-btn">
                    <i className="scroll-info__arrow-down"></i>
                </button>
            </div>
        
    )
}

export default ArrowDown