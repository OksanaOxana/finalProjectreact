import { useParams, useNavigate } from "react-router-dom";
import { dataTwo } from "./dataTwo";

function AboutDishes() {
    const navigate = useNavigate();
    const {title} = useParams()

    return (
        <div>
            {dataTwo.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div>
                    <div className="smallHeader" key={index}>
                        <h3>{elem.nameDishes}</h3>
                        </div> 
                        <div className="smallHeader" key={index}>
                        <img className="aboutDish" src={elem.dishToCook} alt="pic" width="500px"/>
                        </div>
                         <div className="smallHeader" key={index}>
                        <p className="descriptionDishes">{elem.description}</p>
                        </div> 
                        <div className="smallHeader" key={index}>
                        <button className="smallButton" onClick={() => navigate(-1)}>
                            Go back
                        </button>
                    </div></div>
                )
            })}
        </div>
    )
}
export default AboutDishes;