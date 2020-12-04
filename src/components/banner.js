import React from "react";
// import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { Carousel } from "react-bootstrap";
import imgaA from "../assets/winter.jpg";
import imgaB from "../assets/winter.jpg";
import imgaC from "../assets/winter.jpg";



const Banner = () => {
  return (
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src= {imgaA}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={imgaB}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={imgaC}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    // <section className='main'>
    //   <div className='container'>
    //     <div className='row'>
    //       <h2>
    //         <div className='line'>
    //           <span>Creating unique brands is</span>
    //         </div>
    //         <div className='line'>
    //           <span>what we do.</span>
    //         </div>
    //       </h2>
    //       <div className='btn-row'>
    //         <a href='/services'>
    //           More about us <RightArrow />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Banner;
