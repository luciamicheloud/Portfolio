import React, { useRef } from 'react';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Footer from '../../components/footer/Footer';
import Landing from '../Landing/Landing';

function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', duration: '5000' });
  }

  return (
    <div className="homeContainer">
      
<div> //NavBar
      <button onClick={handleClick}>About</button>
      <button onClick={handleClick}>Skills</button>
      <button onClick={handleClick}>Projects</button>
</div>

      <Landing />
      <About ref={ref} text="about" />
      <Skills ref={ref} text="skills" />
      <Projects ref={ref} text="projects" />
      <Footer />
    </div>
  );
}

export default Home;
