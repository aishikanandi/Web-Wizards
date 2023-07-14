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
        <div className="open-source-program">
            <div className="individual-open-source-program">
                <div className="open-source-program-name">
                    <h1>{capitalizedProgramName}</h1>
                </div>
                <div className="open-source-program-logo">
                    <img src={require('./OpenSourceProgramPageElements/' + results.BGremovedlogo)} />
                </div>
                <div className="open-source-program-description">
                    <p>{results.description}</p>
                </div>
            </div>
            <Footer className="footer" />   
        </div>
    );
}

export default Program;