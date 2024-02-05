import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import jonnaOne from "./photo/jonna1.jpg";
import jonnaTwo from "./photo/jonna2.jpg";
import jonnaThree from "./photo/jonna3.jpg";
import jonnaFour from "./photo/jonna4.jpg";
import jonnaFive from "./photo/jonna5.jpg";
import jonnaSix from "./photo/jonna6.jpg";
import jonnaSeven from "./photo/jonna7.jpg";
import jonnaEight from "./photo/jonna8.jpg";
import jonnaNine from "./photo/jonna9.jpg";
function ControlledCarouselJonna() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="photoFrame" src={jonnaOne} height="300px" width="350px" text="1 slide" alt="pic"/>
          <Carousel.Caption>
          <p className='infoJonna'>BERG - ARMCUFF</p>
          </Carousel.Caption>
          </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={jonnaTwo}  height="300px" width="350px" text="2 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>BISON - BRACELET</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="photoFrame" src={jonnaThree} height="300px" width="350px" text="3 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonnaTwo'>WILD - NECKLACE</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={jonnaFour} height="300px" width="350px" text="4 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>ANCIENT - RING</p>
          </Carousel.Caption>
        </Carousel.Item>
   
        <Carousel.Item>
          <img className="photoFrame" src={jonnaFive} height="300px" width="350px" text="5 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>BJORK - EARRINGS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="photoFrame" src={jonnaSix} height="300px" width="350px" text="6 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>AURORA BOREALIS - NECKLACE</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={jonnaSeven} height="300px" width="350px" text="7 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonnaTwo'>BODY, MIND, SOUL - NECKLACE</p>
          </Carousel.Caption>
        </Carousel.Item>
          
        <Carousel.Item>
          <img className="photoFrame" src={jonnaEight} height="300px" width="350px" text="8 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>BERG - ARMCUFF</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={jonnaNine} height="300px" width="350px" text="9 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoJonna'>BISON - BRACELET</p>
          </Carousel.Caption>
        </Carousel.Item>
  
  
      </Carousel>
    );
  }
  
  export default ControlledCarouselJonna;