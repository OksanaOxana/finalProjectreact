import { useRef, useState } from "react";
import video from "./videoV.mp4";
import songJonna from "./jonna.ogg";
import songJonnaTwo from "./jonnaTwo.ogg";
import songJonnaThree from "./jonnaThree.ogg";

function VideoAndAudio() {

    const [musicJonnaPlay, setMusicJonnaPlay] = useState(true);
    const refAudio = useRef()

    const handlePlay = (song) => {
        setMusicJonnaPlay(!musicJonnaPlay)
        refAudio.current.src = song;
        musicJonnaPlay?refAudio.current.play():refAudio.current.pause()
    }

    return(
        <div>
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
        </div>
    )
}
export default VideoAndAudio;