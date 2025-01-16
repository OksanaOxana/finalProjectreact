import image from "../photo/jonnaJinton.jpg";
import { useEffect, useState } from "react";
import ButtonsJonna from "./ButtonsJonna";
import gsap from "gsap";
import { data } from "../data";
import Photos from "../Photos";
import VideoAndAudio from "./VideoAndAudio";
import ControlledCarousel from "../ControlledCarousel";
import { dataCarousel } from "../dataCarousel";
import BtnForCart from "./BtnForCart";

function Jonna() {
    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('h1',{opacity: 0, duration: 1, delay: 1});
            gsap.from('.mainPhoto',{x:-400, duration: 3, delay: 0.1});
            gsap.from('.contPar',{x:400, duration: 3, delay: 0.1});
            gsap.from('.musicBtn', {opacity: 0, duration: 4, delay: 2, repeat: -1, stagger: 0.8});
            gsap.from('.mainBtn', {opacity: 0, duration: 4, delay: 2, repeat: -1, stagger: 0.8});
        })
        return() => ctx.revert()
    }, [])


    const [transition, setTransition] = useState(false);
    const getTransition = () => {
        setTransition(!transition)
    }
    const [photosJonna, setPhotosJonna] = useState(data['jonna']);
 
    
    const chosenPhotos = (classPhotos) => {
        const newPhotos = data['jonna'].filter(item =>item.classPhotos===classPhotos)
        setPhotosJonna(newPhotos)
    }

    const [showMore, setShowMore] = useState(false)
  
    return(
        <div>
            <div className="smallHeader">
                <h1>Jonna Jinton</h1>
            </div>
            <div className="smallHeader">
                <h2>Artist living in the woods in the north of Sweden</h2>
            </div>


            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic" width="250px"  height="200px"/>
                <p className="contPar">{showMore? "An amazing girl lives in the forests of Sweden! She is an artist, photographer, blogger, jewelry maker... She makes interesting videos and takes photos of Swedish nature. On her channel you can see many amazing photos and videos of Swedish nature, listen to singing ice, watch swimming in an ice hole at a temperature of -20 degrees,  she shows how to renovate a house with your own hands and much more. And she is a very positive, sincere and wonderful person!": "An amazing girl lives in the forests of Sweden!"}
                <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>
            <div className="header spaceCont">
                <h2>Just loot at these amazing photos of Sweden!</h2>
            </div>

        <ButtonsJonna filteredPhotos = {chosenPhotos} setPhotosJonna = {setPhotosJonna}  />
        <Photos  property = {'jonna'} images = {photosJonna} />
      

        <div className="header">
            <h2>Jewelry from the north</h2>
        </div>
            <div className="smallHeader">
                <p className="par">Jonna not only does video and photography, 
                drawing, she, together with her husband and mother, also produces silver jewelry.</p>
            </div>

            <div className="smallHeader">
                <ControlledCarousel     
                    slides = {dataCarousel['jonna']}
                    classPar = {'infoJonna'}
                    height = {'300px'}
                    width = {'350px'}/>
            </div> 
              <div className="smallHeader spaceCont">
                <h3>Take a look at this beauty inspired by Swedish nature!</h3>
            </div>

            <div className="smallHeader spaceCont">
                <BtnForCart />
            </div>

            <VideoAndAudio />
            <div className="smallHeader spaceCont">
                <h3>Jonna has even more interesting things on her channel!</h3>
            </div>
            <form className="smallHeader checkContainer">
                <span className="par">I want to go to Jonna's y-tube channel</span>
                <input onChange={getTransition} type= "checkbox" className="check"/>
            </form>    
            <div className="smallHeader">
                <h2>Welcome!</h2> 
            </div>
            <div className="smallHeader">    
                <h6>{transition && "https://www.youtube.com/@jonnajinton"}</h6>
            </div>

        </div>
    )
}
export default Jonna;