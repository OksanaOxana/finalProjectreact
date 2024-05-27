import { useState } from 'react';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { dataCarousel } from './dataCarousel';


function ControlledCarousel({slides, height, width, classPar}) {
  const [index, setIndex] = useState(dataCarousel);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
  <div>
    {slides?.map(slide => {
      const {id, image, description} = slide;
      return(
    <Carousel key={id} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carouselAlla photoFrame' src={image} height={height} width={width} text="1 slide" alt="pic"/>
        <Carousel.Caption>
        <p className={classPar}>{description}</p>
        </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
)})}
    </div>
  );
}

export default ControlledCarousel;