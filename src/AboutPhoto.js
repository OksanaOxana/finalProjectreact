import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

function AboutPhoto() {
    const navigate = useNavigate();
    const {name, title} = useParams()

    return (
        <div>
            {data[name].filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div>

                        <div className="smallHeader" key={index}>
                            <img className="photoFrame photoAdapted" src={elem.image} alt="pic" width="500px"/>
                        </div>
                        <div className="smallHeader" key={index}>
                            <p className="info  spaceCont">{elem.description}</p>
                        </div> 
                        <div className="smallHeader" key={index}>
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