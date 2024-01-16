
import image from "./photo/woman.jpg";
import imageOne from "./photo/Italy.jpg";
import imageTwo from "./photo/nature.jpg"
import imageThree from "./photo/cooking.jpg"
import imageFour from "./photo/camera.jpg";
import imageFive from "./photo/developer.jpg"
import { useState } from "react";
import PageOne from "./PageOne";


function Home() {

    const [buttonsSicily, setButtonsSicily] = useState()
const clickHere = () =>
setButtonsSicily (<PageOne />)
console.log(<PageOne />)

    return (
    <div className="containerMain">

        <div className="header">
            <h1>This is a page about my favorite bloggers</h1>
        </div>

        <div className="containerTwo">

            <div>
                <img src={image} width="400px" alt="pic"/>
            </div>

        <div className="containerText">
            <p className="info">In today's society, blogging is becoming a popular activity. 
    Now, based on which blogger you follow, 
    society can draw conclusions about your interests!
    Some are passionate about a healthy lifestyle, 
    some are obsessed with fashion, some love to travel, 
    and some follow everything! 
    Social networks can satisfy everyone's interests.</p>
        </div>
        </div>
        <div className="containerThree">
            <h2>On this site I will talk about my favorite bloggers and you can draw conclusions about what I am like!</h2> 
        </div>

        <div className="main">
            <div>
                <img className="picInterests" src={imageOne} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                <p className="par">Witty texts and vivid videos of Sicily</p>
                <button onClick={()=> clickHere(buttonsSicily)} className="btn">Click here</button>
            </div> </div>
        </div>

        <div className="main">
            
            <div className="paragraph">
                <div className="parSmall">
                <p className="par">If you are a nature lover...</p>
                <button className="btn">Click here</button>
            </div></div>
            <div >
                <img className="picInterests" src={imageTwo} alt="pic" width="200px"/>
            </div>
        </div>

        <div className="main">
            <div>
                <img className="picInterests" src={imageThree} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                <p className="par">Perhaps your hobby is cooking, then this is the place for you...</p>
                <button className="btn">Click here</button>
            </div></div>      
        </div>

        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">If you want to see cool photos, come here!</p>
                    <button className="btn">Click here</button>
                </div>
            </div>
            <div>
                <img className="picInterests" src={imageFour} alt="pic" width="200px"/>
            </div>
        </div>

        <div className="main">
            <div>
                <img className="picInterests" src={imageFive} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                <p className="par">Or maybe you are seriously thinking about moving into IT? Here's some useful information for you...</p>
                <button className="btn">Click here</button>
            </div></div>
        </div>







    </div>

    )
}
export default Home;