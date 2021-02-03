import "./index.scss";
import React from "react";
import SkillsData from "../../skills.json";

const Mystacks = () => {
  const skills = SkillsData.skills;
  return (
    <div className="container">
      <h3>My Skills</h3>
      <div className="container__mystacks">
        {skills.map((skill) => (
          <div className="container__mystacks__item" key={skill.skillTitle}>
            <h4>{skill.skillTitle}</h4>
            <p>{skill.languages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mystacks;
