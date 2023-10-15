import React from 'react';
import Navbar from '../../components/navBar/NavBar';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;