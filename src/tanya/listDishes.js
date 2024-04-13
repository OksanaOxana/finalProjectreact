import { useState } from "react";
import Swal from 'sweetalert2';

function ListDishes () {
    const [addedDishes, setAddedDishes] = useState("");
    const [listOfDishes, setListOfDishes] = useState([]);

const addDishesToCook = (e) => {
    setAddedDishes(e.target.value)
}

const addDish = (e) =>{
if (addedDishes === ""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to add dish!",
        footer: "Try again!"
      })}
else{
    e.preventDefault()
    setListOfDishes([...listOfDishes, addedDishes])
    setAddedDishes('')}
}
 const onFormSubmit =(e) => {
    e.preventDefault()
 }


const crossedDish = (e) => {
    const li = e.target
    li.classList.toggle('crossed')
}
    return (
        <div>
            <div className="smallHeader">
                <h3>What are you planning to cook?</h3>
            </div>
        <form onSubmit={onFormSubmit}>
            <input 
            placeholder="add dishes..."
            type="text"
            onChange={addDishesToCook}
            value = {addedDishes}
            className="inputDish"
            />
                <button className="smallButtonTwo" onClick={addDish}>Add</button>
            <ul>
                {listOfDishes.map((item, index) => (
                    <li onClick={crossedDish} key={index} className="dishLi">{item}</li>
                ))}
            </ul>
            <div className="smallHeader">
            <button className="smallButton" onClick={() => setListOfDishes([])}>Delete</button>
            </div>
        </form>
        </div>
    )
}
export default ListDishes;