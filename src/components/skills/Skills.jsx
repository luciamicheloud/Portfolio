import React from 'react';
import './skills.css';

const Skills = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills-container">
      <p>Basic stack</p>
      <div className="skills-icons">
      <img src="src/images/javascript.png" alt="" />
      <img src="src/images/html.png" alt="" />
      </div>
      <p>Frontend</p>
      <div className="skills-icons">
      <img src="src/images/css.png" alt="" />
      <img src="src/images/react.png" alt="" />
      <img src="src/images/redux-logo.png" alt="" />
      </div>
      <p>Backend</p>
      <div className="skills-icons">
      <img src="src/images/nodejs.png" alt="" />
      <img src="src/images/postgre.png" alt="" />
      </div>
    </div>
  );
});

export default Skills;
