import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import lesyaFifteen from "../photo/lesya15.jpg";
import lesyaSeventeen from "../photo/lesya17.jpg";
import lesyaFive from "../photo/lesya5.jpg";
import lesyaSixteen from "../photo/lesya16.jpg";
import lesyaSeven from "../photo/lesya7.jpg";

function ControlledCarouselLesya() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="photoFrame" src={lesyaFifteen} height="500px" width="350px" text="1 slide" alt="pic"/>
          <Carousel.Caption>
          <p className='infoKatarina'>Eclair is like a work of art! It's even a pity to eat...</p>
          </Carousel.Caption>
          </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={lesyaSeventeen}  height="500px" width="350px" text="2 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>A corner of France in the center of Minsk</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="photoFrame" src={lesyaFive} height="500px" width="350px" text="3 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Lesya is a marketer and content photographer for the entire Brioche network</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={lesyaSixteen} height="500px" width="350px" text="4 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Now there are even more coffee and desserts in Lesya's stories!</p>
          </Carousel.Caption>
        </Carousel.Item>
   
        <Carousel.Item>
          <img className="photoFrame" src={lesyaSeven} height="500px" width="350px" text="5 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>How beautiful it is...</p>
          </Carousel.Caption>
        </Carousel.Item>  
  
      </Carousel>
    );
  }
  
  export default ControlledCarouselLesya;