import React, { createContext, useEffect, useState } from 'react';
import './assets/styles/App.css';
import locomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import AboutMe from './AboutMe';
import imag1 from './assets/images/first.png'
import imag2 from './assets/images/second.png'
import imag3 from './assets/images/third.png'
import imag4 from './assets/images/fourth.png'
const arr = [
  {
    id: 1, 
    name: 'Egg Illustration',
    description: "An illustration of an egg with CSS",
    type: "CSS Art",
    link: "https://codepen.io/sami-rocks/pen/qBmBwwM",
    image: imag1,
    class: 'block'
  },
  {
    id: 2, 
    name: 'Homer Simpson',
    description: "Drawing The Simpsons characters with CSS was definately fun",
    type: "CSS Art",
    link: "https://codepen.io/sami-rocks/pen/MWmWdaE",
    image: imag2,
    class: 'block'
  },
  {
    id: 3, 
    name: 'Fruit Illustration',
    description: "A fruit illustration with CSS & HTML",
    type: "CSS Art",
    link: "https://codepen.io/sami-rocks/pen/OJmJGKV",
    image: imag3,
    class: 'block'
  },
  {
    id: 4, 
    name: 'LOL Emoji',
    type: "CSS Art",
    description: "Be Happy! with CSS and HTML",
    link: "https://codepen.io/sami-rocks/pen/VwbwOwN",
    image: imag4,
    class: 'block'
  }
]

export const AboutContext = createContext({
  about:false,
  setAbout: () => { }
})

function App() {
  const scrollRef = React.createRef();
  const [blocks] = useState(arr)
  const [about, setAbout] = useState(false)
  

  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal',
      repeat: true
    });
  });

  return (
    <AboutContext.Provider value={{about, setAbout}}>
      <div className="App">
        {about && <AboutMe />}
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
                    <div 
                      key={block.id} 
                      style={{ backgroundImage: `url(${block.image})` }} 
                      data-scroll 
                      data-scroll-speed={0.2 * `${block.id}`} 
                      className={block.class} >
                    </div>
                    <Slide left cascade>
                      <div className="texts" data-scroll data-scroll-speed="1">
                        <h2 className="type">{block.type}</h2>
                        <h1 className="title">{block.name}</h1>
                        <p className="description">{block.description}</p>
                        <a href={block.link} target="_blank" rel="noopener noreferrer">Explore_</a>
                      </div>

                    </Slide>
                  </Fade>
                  </>
                  )
              })}
            </div>
        
        </div>
      </div>
    </AboutContext.Provider>
  );
}

export default App;
