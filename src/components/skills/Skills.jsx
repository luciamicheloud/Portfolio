import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-icons">
        <img src="src/images/react.png" alt="" />
        <img src="src/images/javascript.png" alt="" />
        <img src="src/images/html.png" alt="" />
        <img src="src/images/css.png" alt="" />
        <img src="src/images/nodejs.png" alt="" />
        <img src="src/images/postgre.png" alt="" />
        {/* Agregar más imágenes de tecnologías según sea necesario */}
      </div>
    </div>
  );
};

export default Skills;