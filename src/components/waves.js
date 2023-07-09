import React, {useEffect} from 'react';
import './waves.css'

function Waves() {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const wave1 = document.getElementById('wave1');
      const wave2 = document.getElementById('wave2');
      const wave3 = document.getElementById('wave3');
      const wave4 = document.getElementById('wave4');
      wave1.style.backgroundPositionX = 400+value*4+'px';
      wave2.style.backgroundPositionX = 300+value*-4+'px';
      wave3.style.backgroundPositionX = 200+value*2+'px';
      wave4.style.backgroundPositionX = 100+value*-2+'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wavesMainDiv">
        <section>
        <div className='wav' id="wave1" style={{'--i':1}} ></div>
            <div className='wav' id="wave2" style={{'--i':2}}></div>
            <div className='wav' id="wave3" style={{'--i':3}}></div>
            <div className='wav' id="wave4" style={{'--i':4}}></div>
        </section>
    </div>
  )
}

export default Waves;
