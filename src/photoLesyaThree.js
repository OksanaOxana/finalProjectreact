import { Link } from "react-router-dom";
function PhotoLesyaThree ({anyPhotosLesyaThree}) {
    return(
        <div>
            <div className="main-item">
                {anyPhotosLesyaThree.map(item => {
                    const {id, imageLesyaPageThree } = item;
                    return(
                        <div className="item-card" key={id}>
                            <Link to={`/${item.titleThree}`}>
                            <img className="photoFrame" src={imageLesyaPageThree} alt="pic" width = "200px"  height="270px"/>
                            </Link>
                        </div>
                )
            })}
            </div>

        </div>
    )
}
export default PhotoLesyaThree;