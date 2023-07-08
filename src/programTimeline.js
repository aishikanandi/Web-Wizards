import React,{useEffect} from 'react';
import './programTimeline.css';
// import Navbar from "./navbar";
// import Footer from "./footer";

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
          const lineRect = line.getBoundingClientRect();
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
        <div className="programTimeline">
            <div className='container'>
            <div className='top-section'>
                <h1 className='heading'>PROGRAMS</h1>
            </div>
            <div className='timeline'>
                <div className='line'></div>
                <div className='section'>
                <div className='bead'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD"/>
</svg></div>
                <div className='content'>
                    <div className='big-box'>
                        <h2>FOSS Overflow</h2>
                        <div className='small-box'>
                            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                            <button className='detailsButton'>KNOW MORE 
                            </button>
                        </div>
                    </div>
                    {/* <div className='date'>6th April, 2023</div> */}
                </div>
                </div>
                <div className='section'>
                <div className='bead'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD"/>
</svg></div>
                <div className='content'>
                    <div className='big-box'>
                        <h2>FOSS Overflow</h2>
                        <div className='small-box'>
                            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                            <button className='detailsButton'>KNOW MORE 
                            </button>
                        </div>
                    </div>
                    {/* <div className='date'>6th April, 2023</div> */}
                </div>
                </div>
                <div className='section'>
                <div className='bead'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD"/>
</svg></div>
                <div className='content'>
                    <div className='big-box'>
                        <h2>FOSS Overflow</h2>
                        <div className='small-box'>
                            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                            <button className='detailsButton'>KNOW MORE 
                            </button>
                        </div>
                    </div>
                    {/* <div className='date'>6th April, 2023</div> */}
                </div>
                </div>
                <div className='section'>
                <div className='bead'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<circle cx="17" cy="17" r="17" transform="rotate(90 17 17)" fill="#FFFDFD"/>
</svg></div>
                <div className='content'>
                    <div className='big-box'>
                        <h2>FOSS Overflow</h2>
                        <div className='small-box'>
                            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                            <button className='detailsButton'>KNOW MORE 
                            </button>
                        </div>
                    </div>
                    {/* <div className='date'>6th April, 2023</div> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProgramTimeline;