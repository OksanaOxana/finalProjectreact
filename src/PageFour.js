import { useState } from "react";
import image from "./photo/CanSheCode.jpg";
import ControlledCarousel from "./ControlledCarousel";

function PageFour() {
   
    const [userInput, setUserInput] = useState("")

    function onChangeEvent (e) {
    console.log(e.userInput)
        setUserInput(e.userInput)
    }
    return(
        <div>
        <div className="smallHeader">
            <h2>CanSheCode</h2>
        </div>
        <div className="smallHeader">
            <img className="mainPhoto" src={image} alt="pic" width="450px" height="350px"/>
        </div>
        <div className="smallHeader">
            <p className="par">Many people today want to move into IT. 
            If you are also thinking about this, 
            but don’t know which direction to choose? 
            Are you a humanitarian? 
            Are you a woman and think that IT is a male-dominated field? 
            If you are tormented by these and other questions, 
            go to Alla’s Instagram page! Alla helps you get into IT at any age!</p>
          
        </div> 

<div className="header"> <ControlledCarousel /></div> 
        <div className="smallHeader">
                <h3 >Make your own individual plan</h3>
        </div>
        <form className="smallHeader">
            <input 
                placeholder="Your personal plan styding"
                type="text"
                onChange={(e) => onChangeEvent(e.target.value)}
                value={userInput}
                />
            <button>Add</button>            
        </form>
            
        </div>
        
    )
   
}
export default PageFour;