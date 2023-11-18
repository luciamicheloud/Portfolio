import { Link } from "react-router-dom";
import "./Landing.css";
import Lucia from "../../images/own-photo.png"

function Landing() {
  return (
    <div className="LandingContainer">

<div className="welcomeContainer">

      <div className="textContainer">
        <p>Hello world! I'm</p>
        <h1>Lucia</h1>
        <h1>Micheloud</h1>
        <h2>Fullstack developer</h2>
      </div>

<div className="contact-icons">
        <a href="https://www.linkedin.com/in/lucia-micheloud-300324264/" target="_blank" rel="noopener noreferrer">
          <img src="src/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/luciamicheloud" target="_blank" rel="noopener noreferrer">
          <img src="src/images/github.png" alt="GitHub" />
        </a>
        <a href="ruta-instagram" target="_blank" rel="noopener noreferrer">
          <img src="https://freepnglogo.com/images/all_img/1691832460x-twitter-logo-png.png" alt="twitter" />
        </a>
        <a href="micheloudrionlucia@gmail.com">
          <img src="src/images/gmail.png" alt="Gmail" />
        </a>
</div>

</div>

<div className="imageContainer">
  <img src={Lucia} alt="" />
</div>

    </div>
  );
}

export default Landing;