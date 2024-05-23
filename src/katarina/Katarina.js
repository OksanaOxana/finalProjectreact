import image from "../photo/katarineOne.jpg";
import { useEffect, useState } from "react";
import React from "react";
import gsap from "gsap"
import ControlledCarouselKatarina from "./ControlledCarouselKatarina";
import ListOfAttractions from "./ListOfAttractions";
import PlacesInSicily from "./PlacesInSicily";



function Katarina() {
    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('h1',{opacity: 0, duration: 1, delay: 1});
            gsap.from('.mainPhoto',{x:-400, duration: 3, delay: 0.1});
            gsap.from('.contPar',{x:400, duration: 3, delay: 0.1});
            gsap.from('.smallButton', {opacity: 0, duration: 4, delay: 2, repeat: -1});
            gsap.from('.kat',{opacity: 0, duration: 1.5, delay: 0.1, stagger: 0.6, repeat: -1});
        })
        return() => ctx.revert()
    }, [])

    
    const [showMore, setShowMore] = useState(false)
  

    return(
        <div>
            <div className="smallHeader">
                <h1 >Katarina Perotti</h1>
            </div> 
            <div className="smallHeader">
                <h2>A Sicilian, a native of St. Petersburg and two cats</h2>
            </div>
            <div className="smallHeader" >
                <img className="mainPhoto" src={image} alt="pic" width="250px"  height="200px"/>
    
                <p className="contPar">{showMore ? "An interesting story of the meeting between St. Petersburg resident Ekaterina and Sicilian Giovanni. This blog contains beautiful and sunny views of Sicily, as well as interesting facts from the life of Sicilians and not only them." : "An interesting story of the meeting!"} 
                <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>    
            <div className="smallHeader">
                <h3>Here's some information from Katya's Instagram page</h3>
            </div>
            <div className="smallHeader">
                <ControlledCarouselKatarina />
            </div>
       
    <PlacesInSicily />
    <ListOfAttractions />
    </div>
        
    )
   
}
export default Katarina;