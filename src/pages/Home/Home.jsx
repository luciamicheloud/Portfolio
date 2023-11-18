import React from 'react';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Proyects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import logoutLogo from "../../images/logoutLogo.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
        <li>
          <NavLink to="/">
            <img className="logo" alt="log out" src={logoutLogo} />
          </NavLink>
        </li>
      <About />
      <Skills />
      <Proyects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;