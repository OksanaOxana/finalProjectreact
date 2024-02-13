import { Link } from "react-router-dom";

function PhotoLesya ({anyPhotosLesya, anyButtonClick}) {
    return(
        <div>
        <div className="main-item">
            {anyPhotosLesya.map(item => {
                const {id, imageLesyaPage } = item;
                return(
                    <div className="item-card" key={id}>
                        <Link to={`/aboutPhotoLesya/${item.titleOne}`}>
                        <img className="photoFrame" src={imageLesyaPage} alt="pic" width = "200px"  height="270px"/>
                      </Link>
                    </div>
                )
            })}
            </div>
                    <div className="smallHeader">
                    <button className="btn" onClick={() => anyButtonClick([])}>
                        Don't show again</button>
                </div>
                </div>
    )
}
export default PhotoLesya;
