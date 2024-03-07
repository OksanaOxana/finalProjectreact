import { Link } from "react-router-dom";
import { data } from "./data"

function Photos({name}) {

    return(
        <div className="main-item">
            {data[name].map(item => {
                const {id, image, title} = item;
                
                return(
                <div className="item-card" key={id}>
                    <Link to={`/${name}/${title}`}>
                        <img className="photoFrame photoJonna" src={image} alt="pic" width="400px"  height="250px"/>
                    </Link>
                </div>
            )})}
        

        </div>
    )}
    export default Photos;