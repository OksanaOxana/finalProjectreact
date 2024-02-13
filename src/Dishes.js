import { Link } from "react-router-dom";

function Dishes({anyDishes}) {
    return(
        <div className="main-item">
            {anyDishes.map(item => {
                const {id, dishToCook, nameDishes} = item;
                return(
                    <div className="item-card" key={id}>
                        <h3>{nameDishes}</h3>
                        <Link to={`/aboutDishes/${item.title}`}>
                        <img className="mainPhoto" src={dishToCook} alt="pic" width = "250px"/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Dishes;