
import { useEffect } from "react";
import { dataPictures } from "./dataPictures";
import HomePictures from "./HomePictures";
import image from "../photo/woman.jpg";
import gsap from "gsap";
import ContactForm from "./Form";



function Home() {
    useEffect(() => {
        const ctx = gsap.context (() => {
            gsap.from('h1', {y: -400, duration: 1, delay: 1});
            gsap.from('h3', {opacity: 0, y: -100, duration: 5, delay: 5, repeat: -1});
            gsap.from('.homePhoto', {opacity: 0, duration: 4, delay: 2});
            gsap.from('.picInterests', {opacity: 0, duration: 4, delay: 2});
            gsap.from('.btn', {opacity: 0, duration: 4, delay: 2, repeat: -1});
        })
        return() => ctx.revert()
    }, [])

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

        <HomePictures anyHomePictures = {dataPictures} />
  
        <div className="smallHeader spaceCont">
            <h2>These are very different people, but 
                they have one thing in common - 
                each of them is trying to make 
                the world a better place in their own way!</h2>
        </div>
        <div className="containerForm">
            <div className="smallHeader">
                <h3>I'm interested in your opinion!</h3>
            </div>
            <div className="smallHeader">
                <ContactForm />
            </div>
        </div>
    </div>

    )
}
export default Home;