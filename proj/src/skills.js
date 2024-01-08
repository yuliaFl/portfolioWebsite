import React, { useState } from "react";
import './skills.css';

const Skills = () => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };
  return (
    <div id="Skills" className="skills">
      <div className="skills-header">
        <h1>Skillset </h1>
      </div>
      <div className="skill-buttons">
        <button className="Python">Python</button>
        <button className="JavaScript">JavaScript</button>
        <button className="Java">Java</button>
        <button className="React">React</button>
        <button className="ReactNative">React Native</button>
        <button className="center">Center</button>
      </div>
    </div>
  );
};

export default Skills;
