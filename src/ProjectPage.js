import React from 'react';
import Footer from "./components/footer";
import './landingPage.css';
import {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './ProjectPage.css';

function Project(){
  const location = useLocation();
  const { results } = location.state;
  console.log(results);
  const capitalizedProgramName = results.projectName.toUpperCase();
  return(
      <div >
          <div >
              <div >
                  <h1>{capitalizedProgramName}</h1>
              </div>
              <div >
                  {/* <img src={require('./OpenSourceProgramPageElements/' + results.BGremovedlogo)} /> */}
              </div>
              <div >
                  <p>{results.description}</p>
              </div>
          </div>
          <Footer className="footer" />   
      </div>
  );
}

export default Project;