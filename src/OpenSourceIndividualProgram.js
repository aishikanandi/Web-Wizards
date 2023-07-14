import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './OpenSourceIndividualProgram.css';
import './landingPage.css';
import React,{useEffect} from 'react';
import { useLocation } from "react-router-dom";

function Program(){
    const location = useLocation();
    const { results } = location.state;
    console.log(results);
    const capitalizedProgramName = results.name.toUpperCase();
    return(
        <div className="program">
            <div className="individual-program">
                <div className="program-name">
                    <h1>{capitalizedProgramName}</h1>
                </div>
                <div className="program-logo">
                    <div className="logo-rectangle-1"></div>
                    <div className="logo-rectangle-2">
                        <div className="logo-container">
                            <img src={require('./OpenSourceProgramPageElements/' + results.BGremovedlogo)} />
                        </div>
                    </div>
                </div>
                <div className="program-description">
                    <p>{results.description}</p>
                </div>
            </div>
            <Footer className="footer" />   
        </div>
    );
}

export default Program;