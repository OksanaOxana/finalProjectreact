import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React from "react";
import './App.css';
import Katarina from "./Katarina";
import Jonna from "./Jonna";
import Olesya from "./Olesya";
import Home from "./Home";
import Alla from "./Alla";
import Tanja from "./Tanja";
import AboutDishes from "./aboutDishes";


function App() {

  return (
    <div>
  <Router>
    <nav>
    <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/Katarina">Katarina Perotti</Link>
      <Link className="Link"to="/Jonna">Jonna Jinton</Link>
      <Link className="Link" to="/Tanja">Tanya Romantsevich</Link>
      <Link className="Link" to="/Olesya">Context photographer Lesya</Link>
      <Link className="Link" to="/Alla">Alla CanSheCode</Link>
    </nav>
    <Routes>
      <Route path="/about/:title" element = {<AboutDishes/>}/>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Katarina" element = {<Katarina/>}/>
      <Route path="/Jonna" element = {<Jonna/>}/>
      <Route path="/Tanja" element = {<Tanja/>}/>
      <Route path="/Alla" element = {<Alla/>}/>
      <Route path="/Olesya" element = {<Olesya />}/>
    </Routes>
  </Router>



    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-light">Home</a></li>
      <li class="nav-item"><a href="/Katarina" class="nav-link px-2 text-light">Katarina Perotti</a></li>
      <li class="nav-item"><a href="/Jonna" class="nav-link px-2 text-light">Jonna Jinton</a></li>
      <li class="nav-item"><a href="/Tanja" class="nav-link px-2 text-light">Tanya Romantsevich</a></li>
      <li class="nav-item" ><a href="/Olesya" class="nav-link px-2 text-light">Context photographer Lesya</a></li>
      <li class="nav-item" ><a href="/Alla" class="nav-link px-2 text-light">Alla CanSheCode</a></li>
    </ul>
    <h6 class="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

  <h6 class="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
  </footer>
 
  </div>
  );
}


export default App;
