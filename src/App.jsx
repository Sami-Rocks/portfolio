import React, { createContext, useState } from 'react';
import './assets/styles/App.css';
import Flip from 'react-reveal/Flip';
import AboutMe from './AboutMe';
import Main from './Main';
import Helmet from 'react-helmet'

export const AboutContext = createContext({
  about:false,
  setAbout: () => { }
})

function App() {
  const [about, setAbout] = useState(false)


  return (
    <AboutContext.Provider value={{about, setAbout}}>
            <Helmet 
              title={"Sami Rocks"} 
              meta={[
                {
                  name: `description`,
                  content: `I'm a designer and Front-end Engineer based in Accra, Ghana. I design and build strong and striking visual concepts that arouse curiosity, create enthusiasm and show ambition. This website is mainly to display my creative work.`
                },
                {
                  property: `og:description`,
                  content: ` I'm a designer and Front-end Engineer based in Accra, Ghana. I design and build strong and striking visual concepts that arouse curiosity, create enthusiasm and show ambition. This website is mainly to display my creative work.`
                },
                {
                  property: `og:title`,
                  content: `Sami Rocks`
                },
                {
                  property: `og:type`,
                  content: `website`
                },
                {
                  name: `keywords`,
                  content: `Samuel Owusu-Aboagye, Software Engineer, Programmer, Developer, The best software engineer, CSS artist, Sami, Sami-Rocks, Sami Rocks, Samuel, Owusu-Aboagye, React, React Developer`,
                }
              ]}>
            </Helmet>
      <div className="App">
        {about ? <AboutMe /> : <Main/>}
        
        {!about && 
          <div className="-scroll">
            <Flip left cascade >
              <p>SCROLL</p>
              <p>   
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </p>

            </Flip>
          </div>
        }
      </div>
    </AboutContext.Provider>
  );
}

export default App;
