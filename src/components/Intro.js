import React from "react";
import "./Intro.css";

const Intro = () => {
  return (<>
  <div className="intro-container">
      <div className="intro-info">
    <h1>Looking for a COMMITment,</h1>
    <h1>that never breaks your heart?</h1>
    <div className="intro-para">
    <p>Experience the world of open-source at OpenLake, IIT Bhilai.</p>
    <p>Unleash the potential of community-driven development.</p>
    <p>Contribute to exciting projects and share your ideas.</p>
    <p>Together, let's unlock endless possibilities!</p>
    </div>
      </div>
      <div className="intro-connect">
        <div className="intro-connect-top">
          <h2>CONNECT.</h2><br></br>
          <h2 className="second" style={{color:"black"}}>COLLABORATE.</h2><br></br>
          <h2 className="third">CONTRIBUTE.</h2>
        </div>
        <div className="intro-connect-bottom">
          <img alt="" src="openSource.svg" />
        </div>
      </div>
    </div>
    <div>
        <img alt="" className="rocket" src="2nd.svg" />
    </div>
  </>
    
  );
};

export default Intro;
