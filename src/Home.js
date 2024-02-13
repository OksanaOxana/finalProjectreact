
import { useState } from "react";
import { dataPictures } from "./dataPictures";
import HomePictures from "./homePictures";
import image from "./photo/woman.jpg";


function Home() {
    const[imageBloggers, setImageBloggers] = useState(dataPictures);

    return (
    <div>

        <div className="smallHeader">
            <h1>This is a page about my favourite bloggers</h1>
        </div>

            <div className="smallHeader">
                <img className="homePhoto" src={image} width="400px" alt="pic"/>
            </div>

            <div className="smallHeader">
                <p className="info spaceCont">In today's world, blogging has become a popular activity. 
    Depending on the blogger you follow, 
    society make assumptions about your interests!
    Some are passionate about a healthy lifestyle, 
    some are obsessed with fashion, some love to travel, 
    and some follow a variety of topics! 
    Social networks can cater everyone's interests.</p>
            </div>

        <div className ="smallHeader spaceCont" >
            <h2>On this site I will talk about my favourite bloggers 
                and you can draw conclusions about what I am like!</h2> 
        </div>

        <HomePictures anyHomePictures = {imageBloggers} anyButton = {setImageBloggers}/>
  
        <div className="smallHeader spaceCont">
            <h2>These are very different people, but 
                they have one thing in common - 
                each of them is trying to make 
                the world a better place in their own way!</h2>
        </div>
    </div>

    )
}
export default Home;