import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import lesyaTwo from "../photo/lesya2.jpg";
import lesyaThree from "../photo/lesya3.jpg";
import lesyaSix from "../photo/lesya6.jpg";
import lesyaFour from "../photo/lesya4.jpg";
import lesyaEighteen from "../photo/lesya18.jpg";
import lesyaTwenty from "../photo/lesya20.jpg";
import lesyaEight from "../photo/lesya8.jpg";
import lesyaThirteen from "../photo/lesya13.jpg";

function ControlledCarouselLesyaSecond() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="photoFrame" src={lesyaTwo} height="500px" width="350px" text="1 slide" alt="pic"/>
          <Carousel.Caption>
          <p className='infoKatarina'>Advice from Lesya: 'Be yourself and don’t be afraid to express yourself on the blog!</p>
          </Carousel.Caption>
          </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={lesyaThree}  height="500px" width="350px" text="2 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Lesya will show you the main mistakes: 'non-trigger photos, lack of highlights, photos in the feed are not diverse'</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="photoFrame" src={lesyaSix} height="500px" width="350px" text="3 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Another advice from Lesya: be sincere and real, don’t be afraid to share not only your successes, but also your failures</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={lesyaFour} height="500px" width="350px" text="4 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>This is what Lesya says about her work: It’s so great to do something that brings pleasure and share this knowledge with others, and see how people’s eyes light up!</p>
          </Carousel.Caption>
        </Carousel.Item>
   
        <Carousel.Item>
          <img className="photoFrame" src={lesyaEighteen} height="500px" width="350px" text="5 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>She is always for unusual ideas and not being like everyone else!</p>
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item>
          <img className="photoFrame" src={lesyaTwenty} height="500px" width="350px" text="6 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Every shoot by Lesya is special, she devotes herself 100% to the process, knows how to feel people and reveal them</p>
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item>
          <img className="photoFrame" src={lesyaEight} height="500px" width="350px" text="7 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>For her filming, Lesya writes down a whole list of photo ideas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="photoFrame" src={lesyaThirteen} height="500px" width="350px" text="8 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Lesya provides consultations and gives advice on improving the blog</p>
          </Carousel.Caption>
        </Carousel.Item>  
  
      </Carousel>
    );
  }
  
  export default ControlledCarouselLesyaSecond;