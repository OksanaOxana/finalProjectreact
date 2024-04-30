
import { dataDishes } from "./dataDishes";
function Buttons({filteredDishes, setDishes}) {
  
    return(
        <div className="smallHeader"> 
            <button className="mainBtn" onClick={() =>setDishes(dataDishes)}>All</button>
            <button className="mainBtn" onClick={() =>filteredDishes("cake")}>Cakes</button>
            <button className="mainBtn" onClick={() =>filteredDishes("pie")}>Pies</button>
            <button className="mainBtn" onClick={() =>filteredDishes("no-bake")}>No-bake desserts</button>
            <button className="mainBtn" onClick={() =>filteredDishes("berries")}>Recipes with berries</button>
            <button className="mainBtn" onClick={() =>filteredDishes("chocolate")}>Chocolate recipes</button>
        </div>
    )
}
export default Buttons;