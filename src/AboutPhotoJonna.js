import { useParams, useNavigate } from "react-router-dom";
import { dataJonna } from "./dataJonna";

function AboutPhotoJonna() {
    const navigate = useNavigate();
    const {titleImage} = useParams()

    return (
        <div>
            {dataJonna.filter((item) => item.titleImage === titleImage).map((elem, index) => {
                return (
                    <div>

                        <div className="smallHeader" key={index}>
                            <img className="photoFrame photoAdapted" src={elem.imageJonna} alt="pic" width="500px"/>
                        </div>
                        <div className="smallHeader" key={index}>
                            <p className="descriptionItems spaceCont">{elem.description}</p>
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
export default AboutPhotoJonna;