import image from "./photo/lisenok.jpg";
import imageOne from "./photo/lesya1.jpg";
import imageTwo from "./photo/lesya2.jpg";
import imageThree from "./photo/lesya3.jpg";
import imageFour from "./photo/lesya4.jpg";
import imageFive from "./photo/lesya5.jpg";
import imageSix from "./photo/lesya6.jpg";
import imageSeven from "./photo/lesya7.jpg";
import imageEight from "./photo/lesya8.jpg";
import imageNine from "./photo/lesya9.jpg";
import imageTen from "./photo/lesya10.jpg";
import imageEleven from "./photo/lesya11.jpg";
import imageTwelve from "./photo/lesya12.jpg";
import imageThirteen from "./photo/lesya13.jpg";
import imageFourteen from "./photo/lesya14.jpg";
import { useState } from "react";

function Olesya() {
    const [advice, setAdvice] = useState("");
   
        const getAdvice = async() => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice);
        console.log(data.slip.advice)
        }
        const [showMore, setShowMore] = useState(false)

    return(
        <div>
            <div className="smallHeader">
                <h1>Context photographer Lesya</h1>
            </div>
            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic"width="250px"  height="200px"/>
            <p className="contPar">
                {showMore ? "Brand visualizer and creative idea generator.Turnkey content shooting. From Olesya you can watch delicious videos for business!!! Olesya motivates well with her example of how you need to move forward towards your goal and not give up! She always wanted to do what she loved and she succeeded - her dream came true! Now Olesya is doing what she loves, working hard, learning a lot and is happy about it!" : "Brand visualizer and creative idea generator."}
                 <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>

            <div className="mainContImage">
                <div className="smallHeader spaceCont">
                    <h3>
                Olesya conducts content filming and also teaches different types of photography!!!</h3>
                </div>

           
                <div className="smallHeader">
                    <img className="photoFrame " src={imageOne} alt="pic" width="300px" height="280px"/>
                    <img className="photoFrame " src={imageTwo} alt="pic" width="300px" height="280px"/>
                </div>
                <div className="smallHeader">
                    <img className="photoFrame " src={imageThree} alt="pic" width="300px" height="280px"/>
                    <img className="photoFrame " src={imageFour} alt="pic" width="300px" height="280px"/>
                </div>
            </div>
            <div className="smallHeader spaceCont">
                <h3>Today Olesya is a marketer for a chain of confectionery-bakeries</h3>
            </div>
            <div className="smallHeader">
                <img className="photoFrame " src={imageNine} alt="pic" width="300px" height="370px"/>
                <img className="photoFrame " src={imageTen} alt="pic" width="300px" height="370px"/>
                <img className="photoFrame " src={imageEleven} alt="pic" width="300px" height="370px"/>
            </div>
            <div className="smallHeader spaceCont">
                <h3>She makes videos for a flower shop</h3>
            </div>
            <div className="smallHeader">
                <img className="photoFrame " src={imageThirteen} alt="pic" width="300px" height="370px"/>
                <img className="photoFrame " src={imageTwelve} alt="pic" width="300px"height="370px"/>
                <img className="photoFrame " src={imageFourteen} alt="pic" width="300px" height="370px"/>
            </div>

            <div className="mainContImage">
                <div className="smallHeader spaceCont">
                    <h3>She is promoting a famous pizzeria chain on Tik Tok</h3>
                </div>
                <div className="smallHeader">
                    <img className="photoFrame " src={imageSeven} alt="pic" width="300px" height="280px"/>
                    <img className="photoFrame " src={imageEight} alt="pic" width="300px" height="280px"/>
                </div>
                <div className="smallHeader">
                    <img className="photoFrame " src={imageFive} alt="pic" width="300px" height="280px"/>
                    <img className="photoFrame " src={imageSix} alt="pic" width="300px" height="280px"/>
                </div>
            </div>
            <div className="smallHeader spaceCont">
                <h4>Olesya constantly works on herself, develops and achieves incredible results!</h4>
            </div>
            <div className="smallHeader spaceCont">
                <p className="info">Among other things, Olesya is a very cheerful and bright person. 
                Her Instagram page radiates positivity! All her stories are interesting, 
                the photographs are very beautiful, bright and colorful. 
                And Olesya always conveys on her page confidence in the future, if a person does not give up, 
                but boldly moves forward, not paying attention to difficulties and obstacles!</p>
            </div> 

            <div className="advices">
                <div className="smallHeader">
                    <h2>Some motivational quotes</h2>
                </div>
                <div className="smallHeader">
                    <button className="smallButton" onClick={getAdvice}>Click here!</button> 
                </div>
                <div className="smallHeader">
                    <h3>{advice}</h3>
                </div>
            </div>
        </div>
    )
   
}
export default Olesya;