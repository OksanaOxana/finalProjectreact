
import image from "./photo/woman.jpg";
import imageOne from "./photo/Italy.jpg";
import imageTwo from "./photo/nature.jpg"
import imageThree from "./photo/cooking.jpg"
import imageFour from "./photo/camera.jpg";
import imageFive from "./photo/developer.jpg"
import { Link } from "react-router-dom";



function Home() {


    return (
    <div className="containerMain">

        <div className="header">
            <h1>This is a page about my favourite bloggers</h1>
        </div>

        <div className="containerTwo">

            <div className="containerImage">
                <img className="homePhoto" src={image} width="400px" alt="pic"/>
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
            <h2>On this site I will talk about my favourite bloggers 
                and you can draw conclusions about what I am like!</h2> 
        </div>

        <div className="main">
            <div>
                <img className="picInterests photoFrame" src={imageOne} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">Witty texts and vivid videos of Sicily</p>
                    <Link to={`/Katarina`}>
                        <button className="btn">Click here</button>
                    </Link>
                </div> 
            </div>
        </div>

        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">If you are a nature lover...</p>
                    <Link to={`/Jonna`}>
                        <button className="btn">Click here</button>
                    </Link>
                </div>
            </div>
            <div >
                <img className="picInterests photoFrame" src={imageTwo} alt="pic" width="200px"/>
            </div>
        </div>
        <div className="main">
            <div>
                <img className="picInterests photoFrame" src={imageThree} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">Perhaps your hobby is cooking, then this is the place for you...</p>
                    <Link to={`/Tanja`}>
                        <button className="btn">Click here</button>
                    </Link>
               </div> 
            </div>     
        </div>

        <div className="main">
            <div className="paragraph">
                <div className="parSmall">
                    <p className="par">If you want to see cool photos, come here!</p>
                    <Link to={`/Olesya`}>
                        <button className="btn">Click here</button>
                    </Link>
                </div>
            </div>
            <div>
                <img className="picInterests photoFrame" src={imageFour} alt="pic" width="200px"/>
            </div>
        </div>
        <div className="main">
            <div>
                <img className="picInterests photoFrame" src={imageFive} alt="pic" width="200px"/>
            </div>
            <div className="paragraph">
                <div className="parSmall">
                <p className="par">Or maybe you are seriously thinking about moving into IT? Here's some useful information for you...</p>
             <Link to={`/Alla`}>
                    <button className="btn">Click here</button>
            </Link>
            </div></div>
        </div>
        <div className="smallHeader spaceCont">
            <h2>These are very different people, but 
                they have one thing in common - 
                each of them is trying to make 
                the world a better place in their own way!</h2>
        </div>
    </div>

    )
}
export default Home;