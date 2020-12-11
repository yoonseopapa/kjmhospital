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
    {/* <h3>김정민 원장</h3> 
      <p>정확한 진단과 책임있는 진료를 약속하는 피부과전문</p>*/}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={imgaB}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>파스텔피부과</h3> 
      <p>믿고다닐수 있는 피부과다운 피부과, 파스텔피부과를 소개합니다.</p>*/}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={imgaC}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3> 
      <p>근본적인 피부변화를 추구하여 자연스러운 아름다움을 만드는 피부과 </p>*/}
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
