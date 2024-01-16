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


function PageOne() {
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

    return(
        <div>
            <div className="smallHeader">
                <h2>Katarina Perotti</h2>
            </div> 
            <div className="smallHeader">
                <p className="par">a Sicilian, a native of St. Petersburg and two cats</p>
            </div>
            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic" width="450px"  height="300px"/>
            </div>
            
            <div className="smallHeader">
                <p>An interesting story of the meeting between St. Petersburg resident Ekaterina 
                and Sicilian Giovanni. This blog contains beautiful and sunny views of Sicily, 
                as well as interesting facts from the life of Sicilians and not only them. </p>
            </div>
            <div className="smallHeader">
                <img src={imageOne} alt="pic" width="300px" height="280px"/>
                <img src={imageTwo} alt="pic" width="300px" height="280px"/>
                <img src={imageThree} alt="pic" width="300px" height="280px"/>
                <img src={imageFour} alt="pic" width="300px" height="280px"/>
            </div>
            <div className="smallHeader">
                <img src={imageFive} alt="pic" width="300px"height="280px" />
                <img src={imageSix} alt="pic" width="300px" height="280px"/>
                <img src={imageSeven} alt="pic" width="300px" height="280px"/>
                <img src={imageEight} alt="pic" width="300px" height="280px"/>
            </div>
            <div className="smallHeader">
                <img src={imageTen} alt="pic" width="300px"height="280px" />
                <img src={imageEleven} alt="pic" width="300px" height="280px"/>
                <img src={imageTwelve} alt="pic" width="300px" height="280px"/>
                <img src={imageThirteen} alt="pic" width="300px"height="280px" />
            </div>  
            <div className="smallHeader">
                <p className="par">Perhaps you are wondering what attractions there are in Sicily?</p>
            </div>

            <div className="smallHeader">
                <h2>Interesting places in Sicily</h2>
            </div>

            <div className="smallHeader">
                <h4>{id}-{destination}</h4>
            </div>
            <div className="smallHeader">     
                <img src={imageToSee} alt="pic"/>
            </div>   


            <div className="smallHeader"> 
            <button onClick={previousPlace}>prev</button>
            <button onClick={nextPlace}>next</button>
        </div>

        <p>Perhaps you want to go to Sicily? Create your own unique list of visiting Sicily attractions!</p>
        <h4>If you have already visited this attraction - just click - delete this place</h4>
        <div className="smallHeader">
            <h2>Your personalized list of {placesToVisit.length} places to visit in Sicily</h2>
        </div>
        <h4>If you have already visited this attraction - just click - delete this place</h4>
        <div className="smallHeaderTwo">
        {placesToVisit.map((placeToVisit) => {
            const {id, destination, imageToSee} = placeToVisit;
            return (
                <div key={id}>
                    <h4>{id} - {destination}</h4>
                    <img src={imageToSee} width="300px" alt="pic"/>
                    <button onClick = {() => removePlace(id)}>Remove this place</button>
                </div>
                
            )
        })}</div>
        <div className="smallHeaderTwo">
            <button onClick={() => setPlacesToVisit([])}>Clean list</button>
        </div>
        
    </div>
        
    )
   
}
export default PageOne;