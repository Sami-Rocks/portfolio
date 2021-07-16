import React, { useContext, useEffect, useState } from 'react';
import './../assets/styles/App.css';
import locomotiveScroll from 'locomotive-scroll'
import './../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import arr from '../projects_data';
import { AboutContext } from '../App';

const Main = () =>{
const scrollRef = React.createRef();
  const [blocks] = useState(shuffle(arr))
  const {about, setAbout} = useContext(AboutContext)
  
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal',
      repeat: true
    });
  });
    return(
        <>
            <header>
          <h1>
            <Flip left cascade>
              SAMI
            </Flip>
          </h1>
          <h1 onClick={() => setAbout(true)} >
            <Flip right cascade>
              ABOUT ME
            </Flip>
          </h1>
        </header>
        <div className="scroll" ref={scrollRef}>
            <div className="container" data-scroll data-scroll-speed="3" data-scroll-position="top">
              <div className="space"></div>
              {blocks.map(block => {
                return(
                  <>
                  <Fade right cascade>
                    <a  href={block.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} >
                      <div 
                        key={block.id} 
                        style={{ backgroundImage: `url(${block.image})` }} 
                        data-scroll 
                        data-scroll-speed={0.2 * `${block.id}`} 
                        className={block.class} >
                      </div>
                    </a>
                      <Slide left cascade>
                        <div className="texts" data-scroll data-scroll-speed="1">
                          <h2 className="type">{block.type}</h2>
                          <h1 className="title">{block.name}</h1>
                          <p className="description">{block.description} <br/> <b><u>Stack:</u></b> {block.tech}</p>
                          <a href={block.link} target="_blank" rel="noopener noreferrer">Explore</a>
                        </div>
                      </Slide>
                  </Fade>
                  </>
                  )
              })}
            </div>
        </div>
        </>
    )
}

export default Main