import { useParams, useNavigate } from "react-router-dom";
import { dataDishes } from "./dataDishes";
import { useEffect } from "react";
import gsap from "gsap";

function AboutDishes() {
    const navigate = useNavigate();
    const {title} = useParams();
    
    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('.smallButton',{opacity: 0, duration: 1.5, delay: 2.5, repeat: -1});
            gsap.from('.aboutDish',{opacity: 0, duration: 1.5, delay: 0.5, x: 400});
            gsap.from('.descriptionItems',{opacity: 0, duration: 1.5, delay: 1.5, y: 400});
            gsap.from('h3',{opacity: 0, duration: 1.5, delay: 1.5, y: -400});
        })
        return() => ctx.revert()
    }, [])

    return (
        <div>
            {dataDishes.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>
                        <div className="smallHeader">
                            <h3>{elem.nameDishes}</h3>
                        </div> 
                        <div className="smallHeader">
                            <img className="aboutDish" src={elem.dishToCook} alt="pic" width="500px"/>
                        </div>
                        <div className="smallHeader">
                            <p className="descriptionItems spaceCont">{elem.description}</p>
                        </div> 
                        <div className="smallHeader">
                            <button className="smallButton" onClick={() => navigate(-1)}>
                                Go back
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default AboutDishes;