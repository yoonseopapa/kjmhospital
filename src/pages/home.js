import React, { useEffect, useState } from "react";
import Warrap from "../components/warrap";
import {TweenMax,Power2,Power3, Expo, Circ } from "gsap";

const homeAnimation = completeAnimation => {
  TweenMax.to('.left', 2, {
    delay: 0.8,
    width: '30%',
    ease: Power2.easeInOut
  })
  
  TweenMax.to('.right', 2, {
    delay: .6,
    width: '70%',
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
};



const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);


  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  return (
    <>
     {animationComplete}
       <Warrap/>
    </>
  );
};

export default Home;
