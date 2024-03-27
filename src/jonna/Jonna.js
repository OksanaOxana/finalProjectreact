import ControlledCarouselJonna from "./ControlledCarouselJonna";
import image from "../photo/jonnaJinton.jpg";
import video from "./videoV.mp4";

import songJonna from "./jonna.ogg";
import songJonnaTwo from "./jonnaTwo.ogg";
import songJonnaThree from "./jonnaThree.ogg";
import { useEffect, useRef, useState } from "react";

import ButtonsJonna from "./ButtonsJonna";

import gsap from "gsap";
import { data } from "../data";
import Photos from "../Photos";

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

    const [musicJonnaPlay, setMusicJonnaPlay] = useState(true);

    const [transition, setTransition] = useState(false);
    const getTransition = () => {
        setTransition(!transition)
    }
    const [photosJonna, setPhotosJonna] = useState(data['jonna']);
    
    const chosenPhotos = (classPhotos) => {
        console.log(setPhotosJonna)
        const newPhotos = photosJonna.filter(item =>item.classPhotos===classPhotos)
        setPhotosJonna(newPhotos)
    }

    const refAudio = useRef()

    const handlePlay = (song) => {
        setMusicJonnaPlay(!musicJonnaPlay)
        refAudio.current.src = song;
        musicJonnaPlay?refAudio.current.play():refAudio.current.pause()
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



        <ButtonsJonna filteredPhotos = {chosenPhotos} photos = {photosJonna} />
        <Photos  name = {'jonna'}/>


        <div className="header">
            <h2>Jewelry from the north</h2>
        </div>
            <div className="smallHeader">
                <p className="par">Jonna not only does video and photography, 
                drawing, she, together with her husband and mother, also produces silver jewelry.</p>
            </div>

            <div className="smallHeader">
                <ControlledCarouselJonna />
            </div> 
              <div className="smallHeader spaceCont">
                <h3>Take a look at this beauty inspired by Swedish nature!</h3>
            </div>

            <div className="header">  
                <h2>Watch and enjoy</h2>
            </div> 
            <div className="smallHeader">
                <p className="par">What an amazing natural phenomenon - the Northern Lights! 
                    It’s simply amazing how much fabulous beauty there is in the world!</p>
            </div> 
            <div className="smallHeader">
                <video className="videoJonna" autoPlay muted loop width="750px">
                    <source  src={video}></source>
                </video>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <audio 
                    loop = "loop"
                    ref = {refAudio}>
                    </audio>
                    {
                    [songJonna, songJonnaTwo, songJonnaThree].map((song, index)=> (
                        <button
                        key={index}
                        className="musicBtn"
                        onClick={()=> handlePlay(song)}
                        >{musicJonnaPlay ? "Play Song" : "Pause"}</button>
                    ))
                }
               </div>
            </div>
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