import { useState } from "react";
import { data } from "./data";


function ListOfAttractions() {

    const [placesToVisit, setPlacesToVisit] = useState(data)


    const removePlace = (id) => {
        let newPlacesToVisit = placesToVisit.filter((item => item.id!==id))
     
        setPlacesToVisit(newPlacesToVisit)
    }
    return(
        <div>
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
            <button className="btn cleanList" onClick={() => setPlacesToVisit([])}>Clean list</button>
        </div>
        <div className="smallHeader">
            <h3>Have a nice trip!</h3>
        </div>
        </div>
    )
}
export default ListOfAttractions;