import { useParams, useNavigate } from "react-router";
import { dataLesyaThree } from "./dataLesyaThree";


function AboutPhotoLesyaThree() {
    const navigate = useNavigate();
    const {titleThree} = useParams();
    return(
        <div>
            {dataLesyaThree.filter((item) => item.titleThree === titleThree).map((elem, index) => {
                return(
                    <div>
                        <div className="smallHeader" key={index}>
                            <img className="photoFrame photoAdapted" src={elem.imageLesyaPageThree} alt="pic" width="500px"/>
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
export default AboutPhotoLesyaThree;