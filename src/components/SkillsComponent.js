

import React, { Component } from 'react';
import SkillsData from '../skills.json';
import Filler from '../components/ProgressBarFiller';

class SkillsComponent extends Component {

    render() {

        const skills = SkillsData.skills;

        return (
            <div id="skills">
                
                <h3 className="large-text">Skills</h3>

                <div className="flex-container">
                    
                    {skills.map((skill) => (
                        <div key={skill.skillTitle} className="flex-item-div">
                            <h5 className="white-text">{skill.skillTitle}</h5>
                            <div className="skill-info">
                            <p>{skill.languages}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        );
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