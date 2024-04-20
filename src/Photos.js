import { Link } from "react-router-dom";
import { data } from "./data";


function Photos({images}) {

    return(
        <div className="main-item">
            {data[images].map(item => {
                const {id, image, title} = item;
                
                return(
                <div className="item-card" key={id}>
                    <Link to={`/${images}/${title}`}>
                        <img className="photoFrame photoJonna" src={image} alt="pic" width="180px" height="150px"/>
                    </Link>
                </div>
            )})}
        

        </div>
    )}
    export default Photos;