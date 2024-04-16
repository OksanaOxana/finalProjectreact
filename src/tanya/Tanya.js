import { useState, useEffect } from "react";
import image from "../photo/tanjaKulinarim.jpg"
import { dataTwo } from "./dataTwo";
import Dishes from "./Dishes";
import Buttons from "./Buttons";
import photo from "../photo/tanja22.jpg";
import Swal from 'sweetalert2';
import searchIcon from "../photo/search.jpg";
import gsap from "gsap"
import ListDishes from "./listDishes";





function Tanya() {
  useEffect(() => {
    const ctx = gsap.context (() => {
        gsap.from('h1',{opacity: 0, duration: 1, delay: 1});
        gsap.from('.mainPhoto',{x:-400, duration: 3, delay: 0.1});
        gsap.from('.contPar',{x:400, duration: 3, delay: 0.1});
        gsap.from('.item-card',{opacity: 0, duration: 1.5, delay: 0.1, stagger: 0.6, repeat: -1});
        gsap.from('.mainBtn',{opacity: 0, duration: 1.5, delay: 0.1, stagger: 0.6, repeat: -1});
    })
    return() => ctx.revert()
}, [])

    const [dishes, setDishes] = useState(dataTwo);
    const chosenDishes = (classDishes) => {
        const newDishes = dataTwo.filter(item =>item.classDishes===classDishes)
        setDishes(newDishes)
    }

    const [mySearch, setMySearch] = useState ();
    const [wordSubmitted, setWordSubmitted] = useState('');
    const [myNutrition, setMyNutrition] = useState ();
  
    
    
    const MY_ID = 'f03c9881';
    const MY_KEY = 'fbaf27612b410239189e915c907793aa';
    const MY_URL = 'https://api.edamam.com/api/nutrition-details'; 
    const fetchData = async(ingr) => {
       
    
      const response = await fetch (`${MY_URL}?app_id=${MY_ID}&app_key=${MY_KEY}`, {
        method: 'POST',
        headers:  {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ingr:ingr})
      })
    
          const handleAlert = () => {
    
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingredients entered incorrectly!",
            footer: "Try again!"
          });
        };
    
      if(response.ok) {
    
        const data = await response.json();
        setMyNutrition(data);
      } else {
          handleAlert(true)
      }
    }
    
    
      const myRecipeSearch = (e) => {
        setMySearch(e.target.value)
      }
    
      const finalSearch = e => {
        e.preventDefault();
        setWordSubmitted(mySearch);
    
      }
    
      useEffect(() => {
        if (wordSubmitted !== '') {
          let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
          fetchData(ingr);
        }
      }, [wordSubmitted])

      const [showMore, setShowMore] = useState(false)
    
    return(
        <div>
            <div className="smallHeader">
                <h1>Cooking with Tanja</h1>
            </div>

            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic"width="250px"  height="200px"/>
                <p className="contPar">{showMore ? "There are many culinary blogs, perhaps because a person cannot live without food and eats 3 times a day. I would like to share this blog for the special energy of a girl blogger! There are so many different recipes on her channel - baking and salads, soups and meat dishes, healthy eating and much more. It's amazing how many recipes you can create from the same ingredients! Tanya clearly explains how to prepare the dish and shows the exact proportions. So, by cooking according to Tanya’s recipes, you will have a masterpiece dish!" : "There are many culinary blogs..."}
                <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
            </div>
            <div className="smallHeader">
                <h3> Just look at these amazing dishes!</h3>
            </div>
            <Buttons filteredDishes = {chosenDishes} setDishes={setDishes}/>
            <Dishes anyDishes = {dishes} />
            <div className="addPlan">
              <div className="smallHeader">
                <ListDishes />
              </div>
            </div>
            <div className="smallHeader spaceCont">
                <h2>If you are looking for a good recipe, 
                    go to the y-tube channel “Cooking with Tanya” - 
                    there are many excellent recipes there!</h2>
            </div>
            <div className="smallHeader">
                <img className="mainPhoto photoTanya" src={photo} alt="pic" width="400px"/>
            </div>
            <div className="smallHeader spaceCont">
                <p className="info">
                It’s simply amazing how from simple products that 
                every housewife has available, you can create culinary 
                masterpieces for every taste!</p>
            </div>

            <div className="addPlan">
            <div className="smallHeader">
                <h3>Check the calorie content of your dishes</h3>
            </div>
            <div className="smallHeader">
                <h6>If you want to know the calorie content of an ingredient, enter the name and quantity.</h6>
            </div>
                <form  className="smallHeader" onSubmit={finalSearch}>
                    <input className="inputPlan" 
                    placeholder='Search...'
                    onChange = {myRecipeSearch} />
                    <button className="iconBtn">
                        <img src = {searchIcon} alt ='pic' width="37px"/>
                    </button>  
                </form>
                <div  className="smallHeader">
        {
          myNutrition && <h4>{myNutrition.calories} kcal</h4>
        }
        </div>    
        </div>
        <div className="smallHeader spaceCont">
            <h3>Create your culinary masterpiece according to your preferences!</h3>
        </div>
    </div>
        
    )
}
export default Tanya;

