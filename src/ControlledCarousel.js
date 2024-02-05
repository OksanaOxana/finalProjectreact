import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import allaOne from './photo/alla1.jpg';
import allaTwo from './photo/alla2.jpg';
import allaThree from './photo/alla3.jpg';
import allaFour from './photo/alla4.jpg';
import allaFive from './photo/alla5.jpg';
import allaSix from './photo/alla6.jpg';
import allaSeven from './photo/alla7.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carouselAlla' src={allaOne} height="450px" width="550px" text="1 slide" alt="pic"/>
        <Carousel.Caption>
        <p className='infoAllaTwo'>Here you can learn about IT!</p>
        </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla' src={allaTwo}  height="450px" width="550px" text="2 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Alla shares information about controlling gadgets with the power of thought</p>
        </Carousel.Caption>
      </Carousel.Item>
 
      <Carousel.Item>
        <img className='carouselAlla' src={allaFive} height="450px" width="550px" text="3 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Alla also gives useful information in various areas of life</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla' src={allaThree} height="450px" width="550px" text="4 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>For example, she pays great attention to 
          a healthy lifestyle and proper nutrition!</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img className='carouselAlla' src={allaFour} height="450px" width="550px" text="5 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>
Alla knows how to present any information in such a way that it becomes very interesting</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img className='carouselAlla' src={allaSix} height="450px" width="550px" text="6 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>Model Shudu shoots for famous brands. 
          But this is not a living person, 
                but a digital supermodel!!!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='carouselAlla' src={allaSeven} height="450px" width="550px" text="7 slide" alt="pic"/>
        <Carousel.Caption>
          <p className='infoAllaTwo'>She teaches not only how to write code correctly, 
                but also supports and helps in every possible way!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;