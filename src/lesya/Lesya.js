import image from "../photo/lisenok.jpg";
import { useEffect, useState } from "react";
import photo from "../photo/lesya1.jpg";
import gsap from "gsap"
import Photos from "../Photos";
import { data } from "../data";
import ControlledCarousel from "../ControlledCarousel";
import { dataCarousel } from "../dataCarousel";

function Lesya() {
    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('h1',{opacity: 0, duration: 1, delay: 1});
            gsap.from('.mainPhoto',{x:-400, duration: 3, delay: 0.1});
            gsap.from('.contPar',{x:400, duration: 3, delay: 0.1});
            gsap.from('.photoLesya',{opacity: 0, duration: 5, delay: 1, repeat: -1});
            gsap.from('.quota',{rotation:360, duration: 3, delay: 5, repeat: -1});
            gsap.from('.smallButton', {opacity: 0, duration: 4, delay: 2, repeat: -1});
        })
        return() => ctx.revert()
    }, [])

    const [advice, setAdvice] = useState("");
  


        const getAdvice = async() => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice);
        }
        const [showMore, setShowMore] = useState(false)

    return(
        <div>
            <div className="smallHeader">
                <h1>Content photographer Lesya</h1>
            </div>
            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic"width="250px"  height="200px"/>
            <p className="contPar">
                {showMore ? "Brand visualizer and creative idea generator. Turnkey content shooting. From Olesya you can watch delicious videos for business!!! Olesya motivates well with her example of how you need to move forward towards your goal and not give up! She always wanted to do what she loved and she succeeded - her dream came true! Now Olesya is doing what she loves, working hard, learning a lot and is happy about it!" : "Brand visualizer and creative idea generator."}
                 <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>
            <div className="smallHeader">
                <h2>Here's some information from Lesya's Instagram page</h2>
            </div>             
            <div className="smallHeader">
                <h4>Today Lesya is a marketer for a chain of confectionery-bakeries. One of them is BRIOCHE</h4>
            </div>
            <div className="smallHeader">
            <ControlledCarousel 
                
                slides = {dataCarousel['lesya']}
                classPar = {'infoKatarina'}
                height = {'500px'}
                weight = {'350px'}/>

            </div>
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
            <div className="smallHeader">
                <h3>She makes videos and photos for a flower shop</h3>
            </div>
            <Photos property = {'lesya'} images = {data['lesya']} />

            <div className="smallHeader">
                <h4>Filming content for personal and expert blogs, provides advice on blogging </h4>
            </div>
            <div className="smallHeader">
            <ControlledCarousel 
            slides = {dataCarousel['lesyaTwo']}
            classPar = {'infoKatarina'}
            height = {'500px'}
            weight = {'350px'}/>

            </div>

            <div className="advices">
                <div className="smallHeader">
                    <h2 className="quota">Some motivational quotes</h2>
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