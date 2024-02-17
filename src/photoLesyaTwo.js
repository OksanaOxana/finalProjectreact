import { Link } from "react-router-dom";

function PhotoLesyaTwo ({anyPhotosLesyaTwo}) {
    return(
        <div>
            <div className="main-item">
                {anyPhotosLesyaTwo.map(item => {
                    const {id, imageLesyaPageTwo } = item;
                    return(
                        <div className="item-card" key={id}>
                        <Link to={`/${item.titleTwo}`}> 
                            <img className="photoFrame" src={imageLesyaPageTwo} alt="pic" width = "200px"  height="270px"/>
                        </Link>  
                        </div>
                )
            })}
            </div>
        </div>
    )
}
export default PhotoLesyaTwo;