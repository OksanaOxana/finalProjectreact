import { useState } from "react";
import image from "./photo/tanjaKulinarim.jpg"
import { dataTwo } from "./dataTwo";
import Dishes from "./Dishes";
import Buttons from "./buttons";

function PageThree() {
    const [dishes, setDishes] = useState(dataTwo)


    return(
        <div>
            <div className="smallHeader">
                <h2>Cooking with Tanja</h2>
            </div>
            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic"width="250px"  height="200px"/>
            </div>
            <div className="smallHeader">
                <p className="par">There are many culinary blogs, perhaps because a person cannot live without 
                    food and eats 3 times a day. I would like to share this blog for the special
                    energy of a girl blogger! There are so many different recipes on her channel 
                    - baking and salads, soups and meat dishes, healthy eating and much more.
                    It's amazing how many recipes you can create from the same ingredients!</p>
            </div>
            <Buttons/>
            <Dishes anyDishes = {dishes} />



        </div>
        
    )
}
export default PageThree;