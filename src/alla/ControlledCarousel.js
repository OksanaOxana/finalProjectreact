import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import allaOne from '../photo/alla1.jpg';
import allaTwo from '../photo/alla2.jpg';
import allaThree from '../photo/alla3.jpg';
import allaFour from '../photo/alla4.jpg';
import allaFive from '../photo/alla5.jpg';
import allaSix from '../photo/alla6.jpg';
import allaSeven from '../photo/alla7.jpg';
import allaEight from '../photo/alla8.jpg';
import allaNine from '../photo/alla9.jpg';
import allaTen from '../photo/alla10.jpg';
import allaEleven from '../photo/alla11.jpg';
import allaTwelve from '../photo/alla12.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaOne} height="650px" width="800px" text="1 slide" alt="pic"/>
        <Carousel.Caption>
        <p className='infoAllaTwo'>Here you can learn about IT!</p>
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaTwo}  height="650px" width="800px" text="2 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Alla shares information about controlling gadgets with the power of thought</p>
        </Carousel.Caption>
      </Carousel.Item>
 
      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaFive} height="650px" width="800px" text="3 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Alla also gives useful information in various areas of life</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaThree} height="650px" width="800px" text="4 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>For example, she pays great attention to 
          a healthy lifestyle and proper nutrition!</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaFour} height="650px" width="800px" text="5 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>
Alla knows how to present any information in such a way that it becomes very interesting</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaSix} height="650px" width="800px" text="6 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Model Shudu shoots for famous brands. 
          But this is not a living person, 
                but a digital supermodel!!!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaSeven} height="650px" width="800px" text="7 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>She teaches not only how to write code correctly, 
                but also supports and helps in every possible way!!!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaEight} height="650px" width="800px" text="8 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>DermaSensor is a portable device for detecting skin cancer based on artificial intelligence.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaNine} height="650px" width="800px" text="9 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>The screen of the new Motorola smartphone can bend like a watch.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaTen} height="650px" width="800px" text="10 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>The new director of a private school in the UK is a chatbot.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaEleven} height="650px" width="800px" text="11 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Late rapper Turak was presented using technology and special effects.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={allaTwelve} height="650px" width="800px" text="12 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Alla is always happy for her students and shares their successes!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;