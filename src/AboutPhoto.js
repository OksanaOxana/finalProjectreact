import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import { useEffect } from "react";
import gsap from "gsap";

function AboutPhoto() {
    const navigate = useNavigate();
    const {name, title} = useParams();

    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('.smallButton',{opacity: 0, duration: 1.5, delay: 0.5, repeat: -1});
            gsap.from('.photoFrame',{opacity: 0, duration: 1.5, delay: 1.0, x: 400});
            gsap.from('.infoTwo',{opacity: 0, duration: 1.5, delay: 1.5, y: -400});

        })
        return() => ctx.revert()
    }, [])

    return (
        <div>
            {data[name].filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>

                        <div className="smallHeader" >
                            <img className="photoFrame photoAdapted" src={elem.image} alt="pic" width="500px"/>
                        </div>
                        <div className="smallHeader">
                            <p className="infoTwo  spaceCont">{elem.description}</p>
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
export default AboutPhoto;