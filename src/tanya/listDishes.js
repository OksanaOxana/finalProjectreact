import { useState } from "react"

function ListDishes () {
    const [addedDishes, setAddedDishes] = useState("");
    const [listOfDishes, setListOfDishes] = useState([]);

const addDishesToCook =(e) => {
    console.log(e.target.value)
    setAddedDishes(e.target.value)
}

const addDish = (input) =>{
    listOfDishes.push(input)
    setListOfDishes({listOfDishes, addedDishes:''})
}
    return (
        <div>
            <div className="smallHeader">
                <h3>What are you planning to cook?</h3>
            </div>
        <form>
            <input 
            placeholder="add dishes..."
            type="text"
            onChange={addDishesToCook}
            value = {addedDishes}
            />
            <button onClick={() => addDish(listOfDishes)}>Add</button>
            <ul>
                {listOfDishes.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

        </form>
        </div>
    )
}
export default ListDishes;