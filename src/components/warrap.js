import React from "react";
import { NavLink } from "react-router-dom";

import Cases from "../components/cases";
import Banner from "../components/banner";
import Service from "../components/service"
import Map from "../pages/map";
import Footer from "../pages/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const Warrap = () => {

  return (
<div>
<body>

  <div className="wrapper">
    <div className="left"></div>
    <div className="right"></div>

    <nav className="navg">
      <ul>
        <NavLink to='/' exact>
        <li className="logo">pastel clinic</li>
        </NavLink>

        <NavLink to='/aboutStory' exact>
        <li className="profilefirst ">profile</li>
        </NavLink>

        <NavLink to='/laser' exact>
        <li className="laser ">laser</li>
        </NavLink>

        <NavLink to='/skinCare' exact>
        <li className="skinCare">skinCare</li>
        </NavLink>

        <NavLink to='/treatment' exact>
        <li className="treatment">Treatment</li>
        </NavLink>

        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>

    <div className="content">
      <div className="img-wrapper">
      <Banner/>
      </div>
      <div className="info" id="info">
        <ul>
        <Cases/>
        </ul>
      </div>

      <div className="text">
        <h1>pastel</h1>
        <p align="right">KIM JUNG MIN DIRECTOR</p>
      </div>

      <div className="name">Clinic
          {/* <img src={Logo}></img> */}
      </div>

      <div className="bottomnav">
        <ul>
          <a href="#introduce">
          <li data-hover="profile">INTRODUCE</li>
          </a>
          <a href="#aboutStory">
          <li data-hover="profile">ABOUT STORY</li>
          </a>
          <a href="#laser">
          <li data-hover="portfolio">LASER THERAPY</li>
          </a>
          <a href="#skin">
          <li data-hover="contact">SKIN DISEASE</li>
          </a>
          <a href="#treatment">
          <li data-hover="contact">TREATMENT</li>
          </a>
          <a href="#cosmetic">
          <li data-hover="contact">SKIN CARE</li>
          </a>
          <div id="collection"></div>
        </ul>
      </div>

      <div className="scrolldown">scroll down</div>   
      <div className="next">up next
      <div className="introduce" id="introduce" ></div> 
      </div>

    </div>
     <div className="contents"> 
     <div className="left1"></div>
    <div className="right1"></div>
         <Service/>
     </div>   
     <Map/>
         <Footer/>
  </div>
</body>

</div>
  );
};

export default Warrap;
