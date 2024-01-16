import image from "./photo/jonnaJinton.jpg"

function PageTwo() {
    return(
        <div>
            <div className="smallHeader">
            <h2>Jonna Jinton</h2>
            </div>
            <div className="smallHeader">
            <p className="par">Artist living in the woods in the north of Sweden</p>
            </div>
            <div className="smallHeader">
            <img className="mainPhoto" src={image} alt="pic"width="250px"  height="200px"/>
            </div>
            <div>
                <p>An amazing girl lives in the forests of Sweden! 
                She is an artist, photographer, blogger, jewelry maker... 
                She makes interesting videos and takes photos of Swedish nature. 
                On her channel you can listen to ice talking, see swimming 
                in an ice hole at a temperature of -20 degrees, 
                show how to renovate a house with your own hands and much more. 
                And she is a very positive, sincere and wonderful girl!</p>
            </div>
           
        </div>
    )
}
export default PageTwo;