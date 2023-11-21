import Contact from "../../components/contact/Contact";
import "./Landing.css";
import Lucia from "../../images/own-photo.png";

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

<Contact/>

</div>

<div className="imageContainer">
  <img src={Lucia} alt="" />
</div>

    </div>
  );
}

export default Landing;