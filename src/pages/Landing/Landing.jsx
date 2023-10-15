import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="LandingContainer">
      <div>
        <p>Hello!</p>
        <p>I'm</p>
      <h1 className="TitleLanding">Lucia Micheloud</h1>
      </div>
      <div>
      <button className="BtnLanding">
        <Link to="/home">Let's now me!</Link>
      </button>
      </div>
    </div>
  );
}

export default Landing;