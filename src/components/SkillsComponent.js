

import React, { Component } from 'react';
import SkillsData from '../skills.json';
import Filler from '../components/ProgressBarFiller';

class SkillsComponent extends Component {

    render() {

        const skills = SkillsData.skills;

        return <div id="skills" className="skills-main">
            <h6 className="sub-header">Skills</h6>
            <div>
                {skills.map(({ skillTitle, percentage }) => (
                    <div key={skillTitle} className="wrapper">
                    <h6 className="white-text">{skillTitle}</h6>
                    <p className="right-text">{percentage}%</p>
                    <ProgressBar percentage={percentage} />

                    </div>
                ))}

            </div>

        </div>;
    }

}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
         
            <Filler percentage={props.percentage} />
    
        </div>
    )
}




export default (SkillsComponent);