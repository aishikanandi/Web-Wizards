import React from "react";
import "./Introtest.css";

const Intro = () => {
  return (
    <div className="intro-container">
    <div className="intro-flex">
      <div className="intro-info">
        <h1>Looking for a COMMITment, <br />that never breaks your heart?</h1>
        <div className="intro-para">
          <p>Experience the world of open-source at OpenLake!</p>
          <p>Unleash the potential of community-driven development.</p>
          <p>Contribute to exciting projects and share your ideas.</p>
          <p>Together, let's unlock endless possibilities!</p>
        </div>
      </div>
      <div className="intro-connect">
        <div className="intro-connect-top">
          <h2>CONNECT.</h2><br />
          <h2 className="second" style={{ color: "black" }}>COLLABORATE.</h2><br />
          <h2 className="third">CONTRIBUTE.</h2>
        </div>
        <div className="intro-connect-bottom">
          <img alt="" src="openSource2.svg" />
        </div>
      </div>
    </div>
    <div className="rocketimg">
      <img alt="" className="rocket" src="rocket3.svg" />
    </div>
  </div>  

    
  );
};

export default Intro;
