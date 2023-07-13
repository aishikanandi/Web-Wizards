import "./landingPage.css";
import './components/waterText.css'
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WaterText from "./components/waterText";
import Waves from "./components/waves";
import Carousel from "./components/CarouselApp.js";
import Intro from "./components/Intro.js";
import ProgressBar from './ProgressBar';
import ProgressBarContent from './ProgressBarContent';
import './ProgressBar.css';

class CommunityPage extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar />
        <ProgressBarContent />
      </div>
    );
  }
}

export default CommunityPage;
