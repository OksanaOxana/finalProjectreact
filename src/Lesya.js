import image from "./photo/lisenok.jpg";
import { useState } from "react";
import { dataLesya } from "./dataLesya";
import { dataLesyaTwo } from "./dataLesyaTwo";
import { dataLesyaThree } from "./dataLesyaThree";
import photo from "./photo/lesya1.jpg";
import PhotoLesya from "./photoLesya";
import PhotoLesyaTwo from "./photoLesyaTwo";
import PhotoLesyaThree from "./photoLesyaThree";

function Lesya() {
    const [advice, setAdvice] = useState("");
    const [photosLesya, setPhotosLesya] = useState(dataLesya);
    const [photosLesyaTwo, setPhotosLesyaTwo] = useState(dataLesyaTwo);
    const [photosLesyaThree, setPhotosLesyaThree] = useState(dataLesyaThree);
   
        const getAdvice = async() => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice);
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
            <div className="smallHeader">
                <h3>Here's some information from Lesya's Instagram page</h3>
            </div>             
            <div className="smallHeader">
                <p className="contPar">Today Lesya is a marketer for a chain of confectionery-bakeries. One of them is BRIOCHE</p>
            </div>
            <PhotoLesya anyPhotosLesya = {photosLesya} anyButtonClick = {setPhotosLesya}/>
            <div className="smallHeader">
                <p className="contPar">She makes videos and photos for a flower shop</p>
            </div>
            <PhotoLesyaTwo anyPhotosLesyaTwo = {photosLesyaTwo} anyButtonClickTwo = {setPhotosLesyaTwo} />

            <div className="smallHeader">
                <p className="contPar">Filming content for personal and expert blogs, provides advice on blogging </p>
            </div>
            <PhotoLesyaThree anyPhotosLesyaThree = {photosLesyaThree} anyButtonClickThree = {setPhotosLesyaThree} />

            <div className="smallHeader spaceCont">
                <p className="info">Among other things, Lesya is a very cheerful and bright person. 
                Her Instagram page radiates positivity! All her stories are interesting, 
                the photographs are very beautiful, bright and colorful. 
                And Olesya always conveys on her page confidence in the future, if a person does not give up, 
                but boldly moves forward, not paying attention to difficulties and obstacles!</p>
            </div> 
            <div className="smallHeader">
                <img className="photoLesya" src={photo} alt="pic" width="400px"/>
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
export default Lesya;