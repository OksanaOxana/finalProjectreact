import { Link } from "react-router-dom";

function Dishes({anyDishes}) {
    return(
        <div className="main-item">
            {anyDishes.map(item => {
                const {id, dishToCook, nameDishes, title} = item;
                return(
                    <div className="item-card" key={id}>
                        <h3>{nameDishes}</h3>
                        <Link to={`/${title}`}>
                        <img className="mainPhoto" src={dishToCook} alt="pic" width = "250px"/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Dishes;