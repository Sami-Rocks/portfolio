import { useContext } from 'react'
import './style.scss'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { AboutContext } from '../App';

const AboutMe =()=>{

    const {about, setAbout} = useContext(AboutContext)

    return(
        <div className="about">
             <header>
            <h1>ABOUT ME</h1>
            <h1 onClick={() => setAbout(false)} >CLOSE</h1>
        </header>
        <div className="about-container">
            <div className="name-desc">
                <h1> <Fade left cascade>SAMUEL <br/>OWUSU-ABOAGYE</Fade></h1>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <p>
                    <Flip left cascade>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, beatae cumque culpa eum ipsum corrupti inventore sequi modi dicta vero nobis itaque aliquid cum dolor natus perferendis quae debitis error?
                    </Flip>
                </p>
            </div>
            <div className="others">
                <Flip left cascade>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, beatae cumque culpa eum ipsum corrupti inventore sequi modi dicta vero nobis itaque aliquid cum dolor natus perferendis quae debitis error?
                </Flip>
            </div>
        </div>
        </div>
    )
}

export default AboutMe