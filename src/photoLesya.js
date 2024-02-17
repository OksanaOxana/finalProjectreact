import { Link } from "react-router-dom";

function PhotoLesya ({anyPhotosLesya}) {
    return(
        <div>
            <div className="main-item">
                {anyPhotosLesya.map(item => {
                    const {id, imageLesyaPage } = item;
                    return(
                        <div className="item-card" key={id}>
                            <Link to={`/${item.titleOne}`}>
                            <img className="photoFrame" src={imageLesyaPage} alt="pic" width = "200px"  height="270px"/>
                        </Link>
                        </div>
                )
            })}
            </div>

        </div>
    )
}
export default PhotoLesya;
