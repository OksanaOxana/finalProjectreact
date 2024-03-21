import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React, { useEffect } from "react";
import './App.css';
import Katarina from "./katarina/Katarina";
import Jonna from "./jonna/Jonna";
import Lesya from "./lesya/Lesya";
import Home from "./home/Home";
import Alla from "./alla/Alla";
import Tanya from "./tanya/Tanya";
import AboutDishes from "./tanya/AboutDishes";
import gsap from "gsap";
import AboutPhoto from "./AboutPhoto";




function App() {
  useEffect(() => {
    const ctx = gsap.context (() => {
        gsap.from('.Link',{opacity: 0, duration: 3, delay: 1.5, stagger: 0.6});
    })
    return() => ctx.revert()
}, [])

  return (
    <div>
  <Router>
    <nav>
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/katarina">Katarina Perotti</Link>
      <Link className="Link"to="/jonna">Jonna Jinton</Link>
      <Link className="Link" to="/tanya">Tanya Romantsevich</Link>
      <Link className="Link" to="/lesya">Content photographer Lesya</Link>
      <Link className="Link" to="/alla">Alla CanSheCode</Link>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/:title" element = {<AboutDishes/>}/>
      <Route path="/katarina" element = {<Katarina/>}/>
      <Route path="/jonna" element = {<Jonna/>}/>
      <Route path="/tanya" element = {<Tanya/>}/>
      <Route path="/alla" element = {<Alla/>}/>
      <Route path="/lesya" element = {<Lesya />}/>
      <Route path="/:name/:title" element = {<AboutPhoto/>}/>
    </Routes>

    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <Link className="foot" to="/"><li className="nav-item px-2">Home</li></Link>
      <Link className="foot" to="/katarina"><li className="nav-item px-2 text-light">Katarina Perotti</li></Link>
      <Link className="foot" to="/jonna"><li className="nav-item px-2 text-light">Jonna Jinton</li></Link>
      <Link className="foot" to="/tanya"><li className="nav-item px-2 text-light">Tanya Romantsevich</li></Link>
      <Link className="foot" to="/lesya"><li className="nav-item px-2 text-light">Content photographer Lesya</li></Link>
      <Link className="foot" to="/alla"><li className="nav-item px-2 text-light">Alla CanSheCode</li></Link>
    </ul>
    <h6 className="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

  <h6 className="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
  </footer>
 </Router>
  </div>
  );
}


export default App;
