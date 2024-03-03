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
import AboutPhotoLesya from "./lesya/AboutPhotoLesya";
import AboutPhotoJonna from "./jonna/AboutPhotoJonna";

import gsap from "gsap"



function App() {
  useEffect(() => {
    const ctx = gsap.context (() => {
        gsap.from('.Link',{opacity: 0, duration: 3, delay: 1.5, stagger: 0.6, repeat: -1});
    })
    return() => ctx.revert()
}, [])

  return (
    <div>
  <Router>
    <nav>
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/Katarina">Katarina Perotti</Link>
      <Link className="Link"to="/Jonna">Jonna Jinton</Link>
      <Link className="Link" to="/Tanya">Tanya Romantsevich</Link>
      <Link className="Link" to="/Lesya">Content photographer Lesya</Link>
      <Link className="Link" to="/Alla">Alla CanSheCode</Link>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>}/>

      <Route path="/:title" element = {<AboutPhotoJonna/>}/>
      <Route path="/:title" element = {<AboutDishes/>}/>
      <Route path="/:title" element = {<AboutPhotoLesya />}/>
      <Route path="/Katarina" element = {<Katarina/>}/>
      <Route path="/Jonna" element = {<Jonna/>}/>
      <Route path="/Tanya" element = {<Tanya/>}/>
      <Route path="/Alla" element = {<Alla/>}/>
      <Route path="/Lesya" element = {<Lesya />}/>
    </Routes>
  </Router>



    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-light">Home</a></li>
      <li class="nav-item"><a href="/Katarina" class="nav-link px-2 text-light">Katarina Perotti</a></li>
      <li class="nav-item"><a href="/Jonna" class="nav-link px-2 text-light">Jonna Jinton</a></li>
      <li class="nav-item"><a href="/Tanya" class="nav-link px-2 text-light">Tanya Romantsevich</a></li>
      <li class="nav-item"><a href="/Lesya" class="nav-link px-2 text-light">Content photographer Lesya</a></li>
      <li class="nav-item"><a href="/Alla" class="nav-link px-2 text-light">Alla CanSheCode</a></li>
    </ul>
    <h6 class="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

  <h6 class="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
  </footer>
 
  </div>
  );
}


export default App;
