import { useState } from "react";
import { data } from "./data";
import right from "../photo/iconRight.jpg";
import left from "../photo/iconLeft.jpg";

function PlacesInSicily() {

    const [destinationToSee, setDestinationToSee] = useState(0);
    const {id, destination, imageToSee, description} = data[destinationToSee];

   
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
    return (
        <div>
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
             <div className="smallHeader">
                <p className="contPar">{description}</p>
             </div> 
        </div>
    )
}
export default PlacesInSicily;