
import "./landingPage.css";
import './components/waterText.css'
import React from "react";
import { lazy, Suspense } from 'react';
import WaterText from "./components/waterText";
import Waves from "./components/waves";
import Intro from "./components/Intro.js";
const LazyCarousel = lazy(() => import('./components/CarouselWithoutText'));
const LazyFooter = lazy(() => import('./components/footer'));
function LandingPage() {
  return (
    <React.Fragment className="landingPage">
      <div className="MainPagePadding"><div className="mainLogo"><img
        className="centerLogo"
        alt=""
        src="openlakelogo.svg"
      ></img></div>
	  <WaterText/> 
    <div className="tagline"><h2>Embrace the waves of Open Source!</h2></div></div>
      
  <Waves />
    <Intro /> 

    <div className="landingpaagecarousel"> <LazyCarousel text="OUR PROJECTS" /></div>
    <Suspense fallback={<div>Loading...</div>}></Suspense>
    <LazyFooter className="footer" />   
    </React.Fragment> 
  );
}

export default LandingPage;
