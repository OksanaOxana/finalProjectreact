import { useParams, useNavigate } from "react-router";
import { dataLesyaTwo } from "./dataLesyaTwo";


function AboutPhotoLesyaTwo() {
    const navigate = useNavigate();
    const {titleTwo} = useParams();
    return(
        <div>
            {dataLesyaTwo.filter((item) => item.titleTwo === titleTwo).map((elem, index) => {
                return(
                    <div>
                        <div className="smallHeader" key={index}>
                            <img className="photoFrame photoAdapted" src={elem.imageLesyaPageTwo} alt="pic" width="500px"/>
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
export default AboutPhotoLesyaTwo;