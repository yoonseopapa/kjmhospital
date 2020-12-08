import React from "react";
import {TweenMax,Power2,Power3, Expo, Circ } from "gsap";
import Cases from "../components/cases";
import Banner from "../components/banner";
import Service from "../components/service"
import Logo from "../assets/logo.png";

const Warrap = () => {

  TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    ease: Power2.easeInOut
  })
  
  TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut
  })
  
  TweenMax.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: Expo.easeInOut
  })
  
  TweenMax.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: Circ.easeInOut
  })
  
  TweenMax.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: Circ.easeInOut
  })
  
  TweenMax.to('.karina', 2, {
    delay: 1.5,
    width: '800px',
    ease: Power2.easeInOut
  })
  
  TweenMax.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut
  }, 0.08)
  
  TweenMax.from('.info', 2, {
    delay: 1.5,
    y: 100,
    ease: Circ.easeInOut
  })
  
  TweenMax.from('.name', 2, {
    delay: 1.5,
    x: -600,
    ease: Circ.easeInOut
  })
  
  return (
<div>
<body>

  <div class="wrapper">
    <div class="left"></div>
    <div class="right"></div>

    <nav class="navg">
      <ul>
        <li class="logo">unsplash</li>
        <li class="menu"><i class="fa fa-bars"></i></li>
        <li class="collection">collection</li>
        <li class="explore">explore</li>
        <li class="search">search</li>
        <li class="profile">
          <div class="img"></div>
        </li>
      </ul>
    </nav>

    <div class="content">
      <div class="img-wrapper">
      <Banner/>
        {/* <div class="karina"></div> */}
      </div>

      <div class="info">
        <ul>
        <Cases/>
          {/* <li>unsplash.com</li>
          <li>@karinates</li>
          <li>karinates.com</li>
          <li><i class="fa fa-share-alt"></i></li> */}
        </ul>
      </div>

      <div class="text">
        <h1>pastel</h1>
        <p align="right">Kim jung min Directer</p>
      </div>

      <div class="name">Clinic
          {/* <img src={Logo}></img> */}
      </div>

      <div class="bottomnav">
        <ul>
          <a href="#card">
          <li data-hover="profile">profile</li>
          </a>
          <a href="#card1">
          <li data-hover="portfolio">portfolio</li>
          </a>
          <a href="#card2">
          <li data-hover="contact">contact</li>
          </a>
        </ul>
      </div>

      <div class="scrolldown">scroll down</div>
      <div class="next">up next</div>


    </div>
     <div class="contents"> 
     <div class="left1"></div>
    <div class="right1"></div>    
         <Service/>
     </div>     
  </div>
</body>

</div>
  );
};

export default Warrap;
