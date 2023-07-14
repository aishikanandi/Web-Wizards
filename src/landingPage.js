import "./landingPage.css";
import './components/waterText.css'
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WaterText from "./components/waterText";
import Waves from "./components/waves";
import Carousel from "./components/CarouselWithoutText";
import Intro from "./components/Intro.js";

function LandingPage() {
  return (
    <React.Fragment className="landingPage">
       {/* <div className="waveUp" />
      <Navbar className="navBar" /> */}
      <div className="MainPagePadding"><div className="mainLogo"><img
        className="centerLogo"
        alt=""
        src="openlakelogo.svg"
      ></img></div>
	  <WaterText/> 
    <div className="tagline"><h2>Embrace the waves of Open Source!</h2></div></div>
      
  <Waves />
    <Intro /> 

    <div className="landingpaagecarousel"><Carousel text='OUR PROJECTS'/></div>
    
    <Footer className="footer" />   
    </React.Fragment> 
  );
}

export default LandingPage;
