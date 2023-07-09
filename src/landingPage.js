import "./landingPage.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WaterText from "./components/waterText";
import Waves from "./components/waves";
import App from "./components/CarouselApp.js";

function LandingPage() {
  return (
    <React.Fragment className="landingPage">
       <div className="waveUp" />
      <Navbar className="navBar" />
      <div className="mainLogo"><img
        className="centerLogo"
        alt=""
        src="openlakelogo.svg"
      ></img></div>
	  <WaterText/> 
    <div className="tagline"><h2>Embrace the waves of Open Source!</h2></div>
    <Waves />
    <App/>
    <Footer className="footer" />   
    </React.Fragment> 
  );
}

export default LandingPage;
