import { useParams, useNavigate } from "react-router";
import { dataLesya } from "./dataLesya";


function AboutPhotoLesya() {
    const navigate = useNavigate();
    const {title} = useParams();
    return(
        <div>
            {dataLesya.filter((item) => item.title === title).map((elem, index) => {
                return(
                    <div>
                        <div className="smallHeader" key={index}>
                            <img className="photoFrame photoAdapted" src={elem.imageLesyaPage} alt="pic" width="350px"/>
                        </div>
                        <div className="smallHeader" key={index}>
                            <p className="descriptionItems">{elem.description}</p>
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
export default AboutPhotoLesya;