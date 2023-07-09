import "./landingPage.css";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import WaterText from "./waterText";
import Waves from "./waves";

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
      <Footer className="footer" />  
     
    </React.Fragment> 
  );
}

export default LandingPage;
