import ControlledCarouselJonna from "./ControlledCarouselJonna";
import image from "./photo/jonnaJinton.jpg";
import video from "./videoV.mp4";
import jonnaTen from "./photo/jonna10.jpg";
import jonnaEleven from "./photo/jonna11.jpg";
import jonnaThirteen from "./photo/jonna13.jpg";
import jonnaFourteen from "./photo/jonna14.jpg";
import jonnaFifteen from "./photo/jonna15.jpg";
import jonnaSixteen from "./photo/jonna16.jpg";
import jonnaNineteen from "./photo/jonna19.jpg";
import jonnaTwenty from "./photo/jonna20.jpg";
import songJonna from "./jonna.ogg";
import songJonnaTwo from "./jonnaTwo.ogg";
import songJonnaThree from "./jonnaThree.ogg";
import { useRef, useState } from "react";

function Jonna() {
    const [musicOnePlay, setMusicOnePlay] = useState(true)
    const refAudio = useRef()
    const handlePlay = () => {
        setMusicOnePlay(!musicOnePlay)
        musicOnePlay?refAudio.current.play():refAudio.current.pause()
    }

    const [musicTwoPlay, setMusicTwoPlay] = useState(true)
    const refAudioTwo = useRef()
    const handlePlayTwo = () => {
        setMusicTwoPlay(!musicTwoPlay)
        musicTwoPlay?refAudioTwo.current.play():refAudioTwo.current.pause()
    }

    const [musicThreePlay, setMusicThreePlay] = useState(true)
    const refAudioThree = useRef()
    const handlePlayThree = () => {
        setMusicThreePlay(!musicThreePlay)
        musicThreePlay?refAudioThree.current.play():refAudioThree.current.pause()
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

                <p className="contPar">{showMore? "An amazing girl lives in the forests of Sweden!She is an artist, photographer, blogger, jewelry maker... She makes interesting videos and takes photos of Swedish nature. On her channel you can see many amazing photos and videos of Swedish nature, listen to singing ice, watch swimming in an ice hole at a temperature of -20 degrees,  she shows how to renovate a house with your own hands and much more. And she is a very positive, sincere and wonderful person!": "An amazing girl lives in the forests of Sweden!"}
                <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>
            <div className="smallHeader spaceCont">
                <h3>Just loot at these amazing photos of Sweden!</h3>
            </div>
            <div className="main">
            <div>
                <img className="photoFrame photoJonna" src={jonnaTen} alt="pic" width="400px" height="250px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">Some time ago, Jonna decided to return to the village,
                     the homeland of her ancestors.</p>
                </div> 
            </div>
        </div>
        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">She was tired of the city bustle, she wanted to be closer to nature</p>

                </div>
            </div>
            <div >
                <img className="photoFrame photoJonna" src={jonnaEleven} alt="pic" width="400px"  height="250px"/>
            </div>
        </div>

        <div className="main">
            <div>
                <img className="photoFrame photoJonna" src={jonnaThirteen} alt="pic" width="400px"  height="250px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">She wanted to enjoy the amazing beauty of these places</p>
                </div> 
            </div>
        </div>
        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">She decided to take photos and videos. Also Jonna draws well</p>

                </div>
            </div>
            <div >
                <img className="photoFrame photoJonna" src={jonnaFourteen} alt="pic" width="400px"  height="250px"/>
            </div>
        </div>
        <div className="main">
            <div>
                <img className="photoFrame photoJonna" src={jonnaFifteen} alt="pic" width="400px"  height="250px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">Jonna herself restored the house of her ancestors</p>
                </div> 
            </div>
        </div>
        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">Jonna created a y-tube channel where she uploads videos of Swedish nature her life</p>

                </div>
            </div>
            <div >
                <img className="photoFrame photoJonna" src={jonnaSixteen} alt="pic" width="400px"  height="250px"/>
            </div>
        </div>
        
        <div className="main">
            <div>
                <img className="photoFrame photoJonna" src={jonnaNineteen} alt="pic" width="400px"  height="250px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">On her channel she shows the beauty of nature at different times of the year</p>
                </div> 
            </div>
        </div>
        <div className="main">
            <div>
            <div className="smallHeader">
                <h4>Just listen to Jonna's songs</h4>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                <audio src={songJonna}
                loop = "loop"
                ref = {refAudio}>
                </audio>
                <button  className="musicBtn" onClick={handlePlay}>{musicOnePlay?"Play Spirit Song":"Pause Spirit Song"}</button>
                <audio src={songJonnaTwo}
                loop = "loop"
                ref = {refAudioTwo}>
                </audio>
                <button  className="musicBtn" onClick={handlePlayTwo}>{musicTwoPlay?"Play Wolf Song":"Pause Wolf Song"}</button>
                <audio src={songJonnaThree}
                loop = "loop"
                ref = {refAudioThree}>
                </audio>
                <button  className="musicBtn" onClick={handlePlayThree}>{musicThreePlay?"Play Frozen Call":"Pause Frozen Cal"}</button>
            </div>
            </div>
            </div>
            <div >
                <img className="photoFrame photoJonna" src={jonnaTwenty} alt="pic" width="400px"  height="250px"/>
            </div>
        </div>


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
            <div className="smallHeader spaceCont">
                <h3>Jonna has even more interesting things on her page!</h3>
            </div>
                
        </div>
    )
}
export default Jonna;