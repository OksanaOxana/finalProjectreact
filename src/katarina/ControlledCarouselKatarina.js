import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import katarinaOne from "../photo/kat1.jpg";
import katarinaTwo from "../photo/kat2.jpg";
import katarinaThree from "../photo/kat3.jpg";
import katarinaFour from "../photo/kat4.jpg";
import katarinaFive from "../photo/kat5.jpg";
import katarinaSix from "../photo/kat6.jpg";
import katarinaSeven from "../photo/kat7.jpg";
import katarinaEight from "../photo/kat8.jpg";
import katarinaNine from "../photo/kat9.jpg";
import katarinaTen from "../photo/kat10.jpg";
import katarinaEleven from "../photo/kat11.jpg";
import katarinaTwelve from "../photo/kat12.jpg";
import katarinaFourteen from "../photo/kat14.jpg";

function ControlledCarouselKatarina() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="photoFrame" src={katarinaOne} height="450px" width="500px" text="1 slide" alt="pic"/>
          <Carousel.Caption>
          <p className='infoKatarina'>An interesting story about the famous flower pots - 'Moors' heads'</p>
          </Carousel.Caption>
          </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={katarinaTwo}  height="450px" width="500px" text="2 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>On her channel you will learn the difference between “Ti amo” and “Ti voglio bene</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="photoFrame" src={katarinaThree} height="450px" width="500px" text="3 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Katya shows on her page various sights of Sicily and more!</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={katarinaFour} height="450px" width="500px" text="4 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>You will see the city where Katya and Giovanni had their first date. And in general, you will learn the story of their acquaintance!</p>
          </Carousel.Caption>
        </Carousel.Item>
   
        <Carousel.Item>
          <img className="photoFrame" src={katarinaFive} height="450px" width="500px" text="5 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>So many colorful views!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="photoFrame" src={katarinaSix} height="450px" width="500px" text="6 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>You can see how Katya and Giovanni and two cats celebrate Christmas!</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img className="photoFrame" src={katarinaSeven} height="450px" width="500px" text="7 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>View from the famous Turrisi Bar. If you want to know what it is famous for, just look at her page!</p>
          </Carousel.Caption>
        </Carousel.Item>
          
        <Carousel.Item>
          <img className="photoFrame" src={katarinaEight} height="450px" width="500px" text="8 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Italian Halloween vocabulary 'la zucca' - pumpkin, 'la strega' - witch, 'il fantasma' - ghost, 'Dolcetto o scherzetto?!'</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={katarinaNine} height="450px" width="500px" text="9 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>On Katya's page you can find out what her husband Giovanni and the famous actor Al Pacino have in common!</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="photoFrame" src={katarinaTen} height="450px" width="500px" text="10 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>The famous fountain 'Di Trevi' is called so because it is located at the intersection of three streets.</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={katarinaEleven} height="450px" width="500px" text="11 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Three types of coffee that Italians use to escape the heat: 'Affogato' - vanilla ice cream topped with a shot of hot espresso, 'Caffe freddo con panna' - cold espresso with a scoop of coffee granita, 'Crema al caffe' - thick cool coffee cream.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="photoFrame" src={katarinaTwelve} height="450px" width="500px" text="12 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>If you are the owner of several houses and have allowed tenants into the house, then you are not immune from the fact that your tenants may become occupiers! And the law will be on the side of these occupiers! For this reason, some Italians prefer to sell their homes rather than rent them out.</p>
          </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <img className="photoFrame" src={katarinaFourteen} height="450px" width="500px" text="13 slide" alt="pic"/>
          <Carousel.Caption>
            <p className='infoKatarina'>Giovanni is learning Russian, he shares his impressions of Russian culture</p>
          </Carousel.Caption>
        </Carousel.Item>
  
  
      </Carousel>
    );
  }
  
  export default ControlledCarouselKatarina;