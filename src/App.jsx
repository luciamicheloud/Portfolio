import React from 'react';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
