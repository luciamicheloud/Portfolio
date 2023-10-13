import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="src/images/LuciaMicheloudImage.jpg" alt="Mi foto" />
      </div>
      <div className="about-text">
        <h2>Lucia Micheloud</h2>
        <p>I'm currently a 19-year-old Full Stack Developer student at Henry.
            I'm passionate about learning new technologies and building innovative projects.
            Apart from my technical skills, I have also improved my soft skills,
            such as assertive communication, teamwork, conflict resolution, and frustration tolerance.
            These skills have helped me to become a better developer and work more efficiently in a team.</p>
      </div>
    </div>
  );
};

export default About;
