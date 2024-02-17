
import { Link } from "react-router-dom";
function HomePictures ({anyHomePictures}) {
    return(
        <div>
        <div className="main-item">
            {anyHomePictures.map(item => {
                const {id,  pictureHome, description, linkOnPage} = item;
                return(
                    <div className="item-card" key={id}>
                        <h5>{description}</h5>
                        <img className="picInterests photoFrame" src={pictureHome} alt="pic" width="400px" height="450px"/>
                        
                    <div className="smallHeader">
                    <Link to={linkOnPage}>
                        <button className="btn">Click here</button>
                    </Link>
                    </div> 
                    </div>
                    
                )
            })}
            
            </div>
                </div>
    )
}
export default HomePictures;