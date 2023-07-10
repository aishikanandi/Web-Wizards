import React,{useEffect} from 'react';
import './programTimeline.css';
import Navbar from "./navbar";
import Footer from "./footer";
import './landingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


const programs = [
    {
        "id": 1,
        "name": "",
        "date": "15th September, 2023",
        "host": "Tushar Bansal",
        "description": ""
    },
    {
        "id": 2,
        "name": "Webwave",
        "date": "1st July, 2023 ",
        "host": "Aditya Dubey and Arnav Prakash",
        "description": "Create a website for Openlake club."
    },
    {
        "id": 3,
        "name": "FOSS Overflow",
        "date": "27th November, 2023",
        "host": "Satvik Vemuganti",
        "description": "Building open source softwares for use within the institute."
    },
    {
        "id": 4,
        "name": "Zapricorn",
        "date": "6th November, 2023",
        "host": "Satvik Vemuganti",
        "description": "Building an Insti-app for IIT Bhilai."
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
    return(
        <div className = "programTimeline">
            <div className="waveUp" />
            <Navbar className="navBar" />
            <div className='container'>
            <div className='top-section'>
                <h1 className='heading'>PROGRAMS</h1>
            </div>
            <div className='timeline'>
                <div className='line'></div>
                {programs.map((program) => (
            <div className='section' key={program.id}>
              <div className='bead'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD" />
                </svg>
              </div>
              <div className='date'>{program.date}</div>
              <div className='content'>
                <div className='big-box'>
                  <h2>{program.name}</h2>
                  <div className='small-box'>
                    <p>Host - {program.host} <br /> {program.description}</p>
                    <button className='detailsButton'>KNOW MORE <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default ProgramTimeline;