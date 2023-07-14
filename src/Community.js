import "./landingPage.css";
import './components/waterText.css'
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProgressBar from './CommunitypageComponents/ProgressBar';
import { ReactComponent as TitleImage } from './CommunitypageComponents/Community-title.svg';
import ProgressBarContent from './CommunitypageComponents/ProgressBarContent';
import './CommunitypageComponents/ProgressBar.css';
import './Community.css';

class CommunityPage extends React.Component {
  render() {
    return (
      <div>
      <div>
  <TitleImage className="title-image" alt="title" />
</div>
        <ProgressBar />
        <ProgressBarContent />
        <div className="footercontainer">
        <Footer className="footer" />
        </div>
       
           
      </div>
    );
  }
}

export default CommunityPage;
