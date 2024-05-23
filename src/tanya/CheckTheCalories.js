import { useEffect, useState } from "react";
import searchIcon from "../photo/search.jpg";
import Swal from 'sweetalert2';

function CheckTheCalories() {

    const [myNutrition, setMyNutrition] = useState();
    const [mySearch, setMySearch] = useState ();
    const [wordSubmitted, setWordSubmitted] = useState('');

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
    return(
        <div>
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
        </div>
    )
}
export default CheckTheCalories;