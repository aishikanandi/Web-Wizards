import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './Program.css';
import './landingPage.css';
import React,{useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Carousel from "./components/CarouselWithoutText.js";

function Program(){
    const location = useLocation();
    const { results } = location.state;
    console.log(results);
    const capitalizedProgramName = results.name.toUpperCase();
    const getImagePath = (poster) => {
        return process.env.PUBLIC_URL + '/' + poster;
      };
    return(
        <div className="program">
            <div className="individual-program">
                <div className="program-name">
                    <h1>{capitalizedProgramName}</h1>
                </div>
                <div className="program-poster">
                    <div className="poster-rectangle-1"></div>
                    <div className="poster-rectangle-2">
                        <div className="poster-container">
                            <img src={getImagePath(results.poster)}  alt="" />
                        </div>
                    </div>
                </div>
                <div className="event-date-container">
                    <p>Date - <span class="event-date">{results.date}</span></p>
                </div>
                <div className="program-description">
                    <p>{results.description}</p>
                </div>
            </div>
            <Carousel text=''/>
            <Footer className="footer" />   
        </div>
    );
}

export default Program;