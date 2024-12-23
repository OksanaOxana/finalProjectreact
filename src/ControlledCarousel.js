import { useState } from 'react';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel({slides, height, width, classPar}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  <div>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
    {slides?.map((slide, id) => {
      const {image, description} = slide;
      return(
      <Carousel.Item key={id}>
        <img className='carouselAlla photoFrame' src={image} height={height} width={width} text="1 slide" alt="pic"/>
        <Carousel.Caption>
        <p className={classPar}>{description}</p>
        </Carousel.Caption>
        </Carousel.Item>
        )})}
     </Carousel>
    

    </div>
  );
}
export default ControlledCarousel;