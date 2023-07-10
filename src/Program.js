import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './Program.css';
import './landingPage.css';
import React,{useEffect} from 'react';

function Program(){
    
    return(
        <React.Fragment className="program">
            <div className="waveUp" />
            <Navbar className="navBar" />

        </React.Fragment>
    );
}

export default Program;