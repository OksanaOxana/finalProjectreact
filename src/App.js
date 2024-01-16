import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React from "react";
import './App.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import Home from "./Home";


function App() {

  return (
    <div>
  <Router>
    <nav>
    <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/PageOne">Katarina Perotti</Link>
      <Link className="Link"to="/PageTwo">Jonna Jinton</Link>
      <Link className="Link" to="/PageThree">Tanya Romantsevich</Link>
      <Link className="Link" to="/PageFive">Context photographer Lesya</Link>
      <Link className="Link" to="/PageFour">Alla CanSheCode</Link>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/PageOne" element = {<PageOne/>}/>
      <Route path="/PageTwo" element = {<PageTwo/>}/>
      <Route path="PageThree" element = {<PageThree/>}/>
      <Route path="PageFour" element = {<PageFour/>}/>
      <Route path="PageFive" element = {<PageFive/>}/>
    </Routes>
  </Router>



    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-light">Home</a></li>
      <li class="nav-item"><a href="/PageOne" class="nav-link px-2 text-light">Katarina Perotti</a></li>
      <li class="nav-item"><a href="/PageTwo" class="nav-link px-2 text-light">Jonna Jinton</a></li>
      <li class="nav-item"><a href="/PageThree" class="nav-link px-2 text-light">Tanya Romantsevich</a></li>
      <li class="nav-item" ><a href="/PageFive" class="nav-link px-2 text-light">Context photographer Lesya</a></li>
      <li class="nav-item" ><a href="/PageFour" class="nav-link px-2 text-light">Alla CanSheCode</a></li>
    </ul>
    <h6 class="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

  <h6 class="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
  </footer>
 
  </div>
  );
}


export default App;
