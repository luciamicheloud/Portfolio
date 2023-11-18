import { Link } from "react-router-dom";
import "./Landing.css";
import Lucia from "../../images/own-photo.png"

function Landing() {
  return (
    <div className="LandingContainer">

<div className="welcomeContainer">

      <div className="textContainer">
        <p>Hello world!</p>
        <p>I'm</p>
        <h1>Lucia</h1>
        <h1>Micheloud</h1>
        <h2>Fullstack developer</h2>
      </div>

      <div className="btnContainer">
        <Link to="/home">
           <button>
             Let's now me!
           </button>
         </Link>
      </div>
</div>

<div className="imageContainer">
  <img src={Lucia} alt="" />
</div>

    </div>
  );
}

export default Landing;