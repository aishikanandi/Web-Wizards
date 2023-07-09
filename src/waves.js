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
        <div className='sec'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ac eros ac molestie. Nam a ante vitae ex dignissim tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed dui neque. Donec nisl nibh, pharetra nec dui sit amet, ultrices tempor nisi. Praesent scelerisque efficitur turpis, sed rhoncus dolor mattis eu. Ut quis condimentum leo. Ut blandit porta nisl sed euismod. Praesent pretium, tortor ac efficitur vehicula, ex lorem scelerisque nisi, non vestibulum felis mauris quis nunc. Donec feugiat, justo venenatis elementum posuere, ante justo porta nulla, id aliquet leo dolor et ligula. Nulla vitae nibh malesuada, lacinia nunc in, ornare sem. Donec interdum mauris non sapien finibus, non interdum mauris elementum.

Cras tincidunt rutrum euismod. Suspendisse vitae ultricies odio, sit amet maximus tellus. Morbi tincidunt faucibus ante, nec condimentum dolor vehicula et. Nullam scelerisque pretium feugiat. Nulla molestie nibh at viverra venenatis. Aenean at consequat felis. Morbi vel porttitor dui, eu interdum nisi. Maecenas pharetra quis neque ut facilisis. Nam lacinia ullamcorper rutrum. Curabitur eu rutrum leo. Nunc porttitor risus sit amet magna hendrerit vestibulum. Pellentesque odio ipsum, viverra a accumsan sit amet, elementum eget neque. Morbi at nibh consequat, lobortis metus quis, dapibus dui. Nullam a orci a neque luctus laoreet. Vestibulum tincidunt risus sit amet ultricies aliquet. Vestibulum gravida convallis orci eu ornare.
          </p>
        </div>
    </div>
  )
}

export default Waves;
