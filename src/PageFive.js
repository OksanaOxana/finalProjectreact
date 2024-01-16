import image from "./photo/lisenok.jpg";
import imageOne from "./photo/lesya1.jpg";
import imageTwo from "./photo/lesya2.jpg";
import imageThree from "./photo/lesya3.jpg";
import imageFour from "./photo/lesya4.jpg";
import imageFive from "./photo/lesya5.jpg";
import imageSix from "./photo/lesya6.jpg";
import imageSeven from "./photo/lesya7.jpg";
import imageEight from "./photo/lesya8.jpg";
function PageFive() {
    return(
        <div>
            <div className="smallHeader">
                <h2>Context photographer Lesya</h2>
            </div>
            <div className="smallHeader">
            <p className="par">
                Brand visualizer and creative idea generator.
                Turnkey content shooting.
                From Olesya you can watch delicious videos for business!!!</p>
                </div>
            <div className="smallHeader">
                <img className="mainPhoto" src={image} alt="pic"width="450px"  height="350px"/>
            </div>
            <div className="smallHeader">
                <h3>
                Olesya conducts content filming and also teaches subject photography, 
                food photography and human photography!</h3>
            </div>
            <div className="smallHeader">
                <img src={imageOne} alt="pic" width="300px" height="280px"/>
                <img src={imageTwo} alt="pic" width="300px" height="280px"/>
                </div>
                <div className="smallHeader">
                    <h3>Today Olesya is a marketer for a chain of confectionery-bakeries</h3>
                </div>
                <div className="smallHeader">
               
                <img src={imageThree} alt="pic" width="300px" height="280px"/>
                <img src={imageFour} alt="pic" width="300px" height="280px"/>
                </div>
                <div className="smallHeader">
                    <h3>She makes videos for a flower shop</h3>
                </div>
                 <div className="smallHeader">
                <img src={imageFive} alt="pic" width="300px" height="280px"/>
                <img src={imageSix} alt="pic" width="300px" height="280px"/>
                </div>
                <div className="smallHeader">
                    <h3>She is promoting a famous pizzeria chain on Tik Tok</h3>
                </div>
                <div className="smallHeader">
                <img src={imageSeven} alt="pic" width="300px" height="280px"/>
                <img src={imageEight} alt="pic" width="300px" height="280px"/>
            </div>
            <div className="smallHeader">
                <p className="par">Olesya constantly works on herself, develops and achieves incredible results!</p>
            </div>
        </div>
        
    )
   
}
export default PageFive;