

import React, { Component } from 'react';
import SkillsData from '../skills.json';

class SkillsComponent extends Component {

    render() {

        const skills = SkillsData.skills;

        return (
            <div id="skills">
                
                

                <div className="skills">
                    
                <div className="card-view">
                <h4 className="green-text" style={{textAlign:"center"}}>Skills</h4>
                    {skills.map((skill) => (
                        <div className="skill-info" key={skill.skillTitle}>
                            <h5 className="white-text">{skill.skillTitle}</h5>
                            <p className="green-text">{skill.languages}</p>
                            {skills.indexOf(skill) < skills.length - 1 ?
                            <div className="line"></div>
                            :
                            null
                            }
                            
                        </div>
                    ))}
                </div>
                </div>

            </div>
        );
    }

}





export default (SkillsComponent);