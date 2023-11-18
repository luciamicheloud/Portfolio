import React from 'react';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Proyects from '../../components/projects/Projects';
import Footer from '../../components/footer/Footer';
import Landing from '../Landing/Landing';

function Home() {
  return (
    <div className="homeContainer">
      <Landing/>
      <About />
      <Skills />
      <Proyects/>
      <Footer />
    </div>
  );
}

export default Home;