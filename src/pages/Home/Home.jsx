import React, { useRef } from 'react';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Footer from '../../components/footer/Footer';
import Landing from '../Landing/Landing';

function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="homeContainer">
      <div> {/* NavBar */}
        <button onClick={() => handleClick(aboutRef)}>About</button>
        <button onClick={() => handleClick(skillsRef)}>Skills</button>
        <button onClick={() => handleClick(projectsRef)}>Projects</button>
      </div>

      <Landing />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </div>
  );
}

export default Home;
