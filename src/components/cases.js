import React from "react";
import imgaA from "../assets/map.png";
import imgaB from "../assets/open.jpg";
import imgaC from "../assets/hippocrates.jpg";
import imgaD from "../assets/profile1.jpg";
import Carousel from "react-elastic-carousel"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Cases = () => {
  return (
    <section className='cases' id='cases'>
      <div className='container-fluid'>
        <div className='row'>
        <Carousel breakPoints={breakPoints} >
            <section className='case' key='1'>
              <div className='case-details'>
                <span>오시는길</span>
                <h2>(지번) 서울시 서초구 서초2동 1336-1, 서초리더스원상가</h2>
                <h2>(도로명) 서울시 서초구 서운로 62 -1, 서초 리더스원상가 305호</h2>
              </div>
              <div className='case-image'>
                <img
                  src={imgaA}
                />
              </div>
            </section>
            <section className='case' key='2'>
              <div className='case-details'>
                <span>진료시간</span>
                <h2>평일     :  AM 10:00 ~ PM 6:30 </h2>
                <h2>토요일   :  AM 10:00 ~ PM 6:30 </h2>
                <h2>점심시간 :  PM 2:00 ~ 3:00 </h2>
              </div>
              <div className='case-image'>
                <img
                  src={imgaB}
                />
              </div>
            </section>
            <section className='case' key='3'>
              <div className='case-details'>
                <span>파스텔피부과의 신념</span>
                <h2>근본적인 피부변화를 추구하며 자연스러운 아름다움을 만들어갑니다. 
                     직접 경험해본 좋은 장비와 재료로 피부의 가치를 높여갑니다. 
                    정확한 진단과 책임있는 진료를 약속합니다. </h2>
              </div>
              <div className='case-image'>
                <img
                  src={imgaC}
                />
              </div>
            </section>
            <section className='case' key='4'>
              <div className='case-details'>
                <span>조금은 특별한 이력을 가진 피부과 전문의 김정민원장</span>
                <h2>카이스트를 졸업한 피부과 전문의로서 꼼꼼하고 신뢰할 수 있도록 진료합니다. 
                    내원하시는 모든 분들께 편안하고 건강한 피부를 만들 수 있는 파스텔피부과가 함께 합니다. </h2>
              </div>
              <div className='case-image'>
                <img
                  src={imgaD}
                />
              </div>
            </section>
          </Carousel>
        </div>
    
        </div>
        
    </section>
    
  );
};

export default Cases;
