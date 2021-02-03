import "./index.scss";
import React from "react";
import SkillsData from "../../skills.json";

const Mystacks = () => {
  const skills = SkillsData.skills;
  return (
    <div className="container">
      <h2>My Skills</h2>
      <div className="container__mystacks">
        {skills.map((skill) => (
          <div className="container__mystacks__item" key={skill.skillTitle}>
              <h3>{skill.skillTitle}</h3>
              <p>{skill.languages}</p>
      
            </div>
        ))}
      </div>
    </div>
  );
};

export default Mystacks;
