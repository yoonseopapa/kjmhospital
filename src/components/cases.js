import React from "react";
import imgaA from "../assets/curology-min.jpg";
import imgaB from "../assets/lumin-min.jpg";
import imgaC from "../assets/yourspace-min.jpg";
import imgaD from "../assets/head-min.jpg";
import Carousel from "react-elastic-carousel"

const caseStudies = [
  {
    id: "one",
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: imgaA
  },
  {
    id: "two",
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: imgaB
  },
  {
    id: "three",
    subtitle: "Lumin",
    title: "For your best look ever",
    img: imgaC
  },
  {
    id: "four",
    subtitle: "Lumin",
    title: "For your best look ever",
    img: imgaD
  },
  {
    id: "four",
    subtitle: "Lumin",
    title: "For your best look ever",
    img: imgaC
  }
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
        <Carousel breakPoints={breakPoints} >
          {caseStudies.map(caseItem => (
            <section className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={caseItem.img}
                  alt={caseItem.title}
                />
              </div>
            </section>
          ))}
          </Carousel>
        </div>
        </div>
    </section>
    
  );
};

export default Cases;
