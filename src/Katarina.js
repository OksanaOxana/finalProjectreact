import image from "./photo/katarineOne.jpg";
import imageOne from "./photo/kat1.jpg";
import imageTwo from "./photo/kat2.jpg";
import imageThree from "./photo/kat3.jpg";
import imageFour from "./photo/kat4.jpg";
import imageFive from "./photo/kat5.jpg";
import imageSix from "./photo/kat6.jpg";
import imageSeven from "./photo/kat7.jpg";
import imageEight from "./photo/kat8.jpg";
import imageTen from "./photo/kat10.jpg";
import imageEleven from "./photo/kat11.jpg";
import imageTwelve from "./photo/kat12.jpg";
import imageThirteen from "./photo/kat13.jpg";
import { data } from "./data";
import { useState } from "react";
import right from "./photo/iconRight.jpg";
import left from "./photo/iconLeft.jpg";
import React from "react";


function Katarina() {
    const [destinationToSee, setDestinationToSee] = useState(0)
    const {id, destination, imageToSee} = data[destinationToSee]

    const previousPlace = () => {
        setDestinationToSee((destinationToSee => {
            destinationToSee --;
            if(destinationToSee<0){
                destinationToSee = data.length-1;
            }
            return destinationToSee
    }))}

    const nextPlace = () => {
        setDestinationToSee((destinationToSee => {
            destinationToSee ++;
            if(destinationToSee>data.length-1){
                destinationToSee = 0;
            }
            return destinationToSee
        }))

    }
    const [placesToVisit, setPlacesToVisit] = useState(data)
    const removePlace = (id) => {
        console.log(id)
        let newPlacesToVisit = placesToVisit.filter((item => item.id!==id))
     
        setPlacesToVisit(newPlacesToVisit)
    }

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
            <div className="smallHeader smallHeaderTwo">
           
                <img className="photoFrame " src={imageOne} alt="pic" width="300px" height="280px"/>
                <img className="photoFrame " src={imageTwo} alt="pic" width="300px" height="280px"/>

                <img className="photoFrame " src={imageThree} alt="pic" width="300px" height="280px"/>
                <img className="photoFrame " src={imageFour} alt="pic" width="300px" height="280px"/>
            
            </div>
            <div className="smallHeader smallHeaderTwo">
          
                <img className="photoFrame " src={imageFive} alt="pic" width="300px"height="280px" />
                <img className="photoFrame " src={imageSix} alt="pic" width="300px" height="280px"/>

                <img className="photoFrame " src={imageSeven} alt="pic" width="300px" height="280px"/>
                <img className="photoFrame " src={imageEight} alt="pic" width="300px" height="280px"/>
            
            </div>
            <div className="smallHeader smallHeaderTwo">
       
                <img className="photoFrame " src={imageTen} alt="pic" width="300px"height="280px" />
                <img className="photoFrame " src={imageEleven} alt="pic" width="300px" height="280px"/>

                <img className="photoFrame " src={imageTwelve} alt="pic" width="300px" height="280px"/>
                <img className="photoFrame "src={imageThirteen} alt="pic" width="300px"height="280px" />
   
            </div>
            <div className="smallHeader">
                <p className="info">On Katya's page you can see not only 
                    stunning views of Sicily. 
                    Katya also shares interesting facts about life in Italy. 
                    For example, if you are the owner of several houses and 
                    have allowed tenants into the house, 
                    then you are not insured against 
                    the fact that your tenants may become occupiers! 
                    And the law will be on the side of these occupiers!</p>
            </div>
       
            <div className="smallHeader createPlan">
                <p className="par">Perhaps you are wondering what attractions there are in Sicily?</p>
            </div>

            <div className="smallHeader">
                <h2>Interesting places in Sicily</h2>
            </div>

            <div className="smallHeader">
                <h4>{id}-{destination}</h4>
            </div>
            <div className="smallHeader">
                <button className="iconBtn" onClick={previousPlace}><img src={left} alt = 'pic' width = "40px" /></button>     
                <img className="photoFrame photoDest" src={imageToSee} width="450px" height="320px" alt="pic"/>
                <button className="iconBtn" onClick={nextPlace}><img src = {right} alt = 'pic' width="40px" /></button>
            </div>   

        <div className="smallHeader createPlan" >  
            <p className="par">Perhaps you want to go to Sicily? Create your own unique list of visiting Sicily attractions!</p>
        </div>

        <div className="smallHeaderTwo">


        <div className="smallHeader">
            <h2>Your personalized list of places to visit in Sicily</h2>
        </div>
        <div className="smallHeader">
            <h5>If you have already visited this attraction - just click - remove this place</h5>
        </div>
        {placesToVisit.map((placeToVisit) => {
            const {id, destination, imageToSee} = placeToVisit;
            return (
                <div className="destiny" key={id}>
                    <h3>{destination}</h3>
                    <img className="photoFrame" src={imageToSee} width="300px"height="200px" alt="pic"/>
                    <button className="smallButton" onClick = {() => removePlace(id)}>Remove this place</button>
                </div>

            )
        })}
                    <div className="smallHeader">
                        <h4>Your plan consists of {placesToVisit.length} places</h4>
                </div>
                </div>
        <div className="smallHeaderTwo">
            <button className="btn cleanList"onClick={() => setPlacesToVisit([])}>Clean list</button>
        </div>
        <div className="smallHeader">
                        <h3>Have a nice trip!</h3>
                </div>
    </div>
        
    )
   
}
export default Katarina;