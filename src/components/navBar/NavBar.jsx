import { NavLink } from "react-router-dom";
import logoutLogo from "../../images/logoutLogo.png";
import homeLogo from "../../images/homeLogo.webp";
import contactoLogo from "../../images/contactoLogo.png";
import palaLogo from "../../images/palaLogo.png";
import './navBar.css';

function Navbar() {
  return (
    <div className="navBar-container">
      <ul>
        <li>
          <NavLink to="/">
            <img className="logo" alt="log out" src={logoutLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
           <img className="logo" alt="home" src={homeLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
           <img className="logo" alt="contact" src={contactoLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyects">
           <img className="logo" alt="proyects" src={palaLogo} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;