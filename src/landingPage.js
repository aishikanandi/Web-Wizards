import './landingPage.css';
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";

function LandingPage() {
	return (
		<React.Fragment className="landingPage">
      <div className="waveUp"/>
			<Navbar className='navBar' />
      <img className="centerLogo" height="500%" alt="" src="openlakelogo.svg"></img>
      <Footer className="footer"/>
		</React.Fragment>
	);
}

export default LandingPage;
