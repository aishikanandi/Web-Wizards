import React,{useEffect} from 'react';
import './programTimeline.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './landingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const programs = [
    {
        "id": 1,
        "name": "TBA",
        "date": "15th September, 2023",
        "host": "Tushar Bansal",
        "description": "To be announced.",
        "poster": ""
    },
    {
        "id": 2,
        "name": "Webwave",
        "date": "1st July, 2023 ",
        "host": "Aditya Dubey and Arnav Prakash",
        "description": "An exhilarating hackathon dedicated to crafting a cutting-edge website that embodies the very essence of Openlake! This immersive event invites you to unleash your creativity and technical prowess as we strive to develop a user-friendly, lightning-fast, and visually stunning website. Participants must form teams consisting of 2-5 members for the competition. The competition is structured into two rounds, with each team undergoing evaluation at the conclusion of each round. Apply Now.",
        "poster": "webwave.jpeg"
    },
    {
        "id": 3,
        "name": "FOSS Overflow",
        "date": "27th November, 2023",
        "host": "Satvik Vemuganti",
        "description": "An intense but carefully designed program to prepare you for a career in Open Source. This time we have planned for the full GSoC experience. For the coming iteration of FOSS Overflow, we are all about building Open Source Software for use within the institute while showing the trend for universities across the country. Each selected student shall have access to a mentor for 4 weeks and get hands-on experience contributing to FOSS.",
        "poster": "FOSS_Overflow.png"
    },
    {
        "id": 4,
        "name": "Zapricon",
        "date": "6th November, 2023",
        "host": "Satvik Vemuganti",
        "description": "It's that time of the year. For Meraz this year, we bring to you a hackathon where the stakes couldn't be bigger. Starting Tuesday, you're tasked with building an Insti-app for IIT Bhilai. The vision is for a final product that can be adapted to all educational institutions across the country. Using the winning app as a base, OpenLake will maintain an Open Source Project taking the best ideas from all submissions.",
        "poster": "Zapricon.png"
    }
]
function ProgramTimeline(){
    useEffect(() => {
        let prevScrollY = window.scrollY;
        let up, down;
        let full = false;
        let set = 0;
        const targetY = window.innerHeight * 0.8;

        function scrollHandler() {
          const scrollY = window.scrollY;
          up = scrollY < prevScrollY;
          down = !up;
          const timelineRect = timeline.getBoundingClientRect();
          const dist = targetY - timelineRect.top;
    
          if (down && !full) {
            set = Math.max(set, dist);
            line.style.bottom = `calc(100% - ${set}px)`;
          }
    
          if (dist > timeline.offsetHeight + 50 && !full) {
            full = true;
            line.style.bottom = '-50px';
          }
    
          sections.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top + item.offsetHeight / 5 < targetY) {
              item.classList.add('show-me');
            }
          });
    
          prevScrollY = scrollY;
        }
    
        const sections = document.querySelectorAll('.section');
        const timeline = document.querySelector('.timeline');
        const line = document.querySelector('.line');
        line.style.bottom = 'calc(100% - 20px)';
        scrollHandler();
        line.style.display = 'block';
        window.addEventListener('scroll', scrollHandler);
    
        return () => {
          window.removeEventListener('scroll', scrollHandler);
        };
      }, []);
      const nav = useNavigate();
      function handleclick(program){
        console.log(program);
        nav("/programtimeline/program", { state: { results: program } });
      }
      function truncateDescription(description) {
        if (description.length > 50) {
          return description.substring(0, 70) + "...";
        }
        return description;
      }
    return(
      <><Navbar className="navBar" />
        <div className = "programTimeline">
            <div className="waveUp" />
            
            <div className='programs-container'>
            <div className='programs-heading'>
                <h1>PROGRAMS</h1>
            </div>
            <div className='timeline'>
                <div className='line'></div>
                {programs.map((program) => (
            <div className='section' key={program.id}>
              <div className='program-bead'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD" />
                </svg>
              </div>
              <div className='program-date'>{program.date}</div>
              <div className='program-content'>
                <div className='program-big-box'>
                  <h2>{program.name}</h2>
                  <div className='program-small-box'>
                    <p>Host - {program.host} <br /> {truncateDescription(program.description)}</p>
                    <button className='program-details' onClick={() => {
                    handleclick(program);
                  }}>KNOW MORE <FontAwesomeIcon icon={faSquareArrowUpRight} /> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
            </div>
            <Footer className="footer" />
        </div></>
    );
}

export default ProgramTimeline;