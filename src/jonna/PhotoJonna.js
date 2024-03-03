import { Link } from "react-router-dom";

function PhotoJonna({anyPhotosjonna}) {

    return(
        <div className="main-item">
            {anyPhotosjonna.map(item => {
                const {id, imageJonna, title} = item;
                
                return(
                <div className="item-card" key={id}>
                    <Link to={`/${title}`}>
                        <img className="photoFrame photoJonna" src={imageJonna} alt="pic" width="400px"  height="250px"/>
                    </Link>
                </div>
            )})}
        

        </div>
    )}
    export default PhotoJonna;

