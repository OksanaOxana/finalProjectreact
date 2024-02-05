import { Link } from "react-router-dom";

function Dishes({anyDishes}) {
    return(
        <div className="main">
            {anyDishes.map(item => {
                const {id, dishToCook, nameDishes} = item;
                return(
                    <div className="dish-card" key={id}>
                        <h6>{nameDishes}</h6>
                        <Link to={`/about/${item.title}`}>
                        <img className="mainPhoto" src={dishToCook} alt="pic" width = "250px"/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Dishes;