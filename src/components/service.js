import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imgaA from "../assets/profile.jpg";
import imgaB from "../assets/laser.jpg";
import imgaC from "../assets/disease.jpg";
import imgaD from "../assets/satisfaction.jpg";
import imgaE from "../assets/beauty.jpg";


function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

const Service = () => {
  return (
    <div class="cInnerContent">
    {/* <h1 class="header-section gs_reveal ipsType_center">Scroll down and up to see different reveal animations</h1> */}
    
    <div className="features">
     <div id="aboutStory"></div>
      <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
          <div className="card1" id="card">
            <img className="firstCard" width="479" src={imgaA}   alt=""
            />
            <div id="laser"></div>
          </div>
        </div>
        <div className="ipsGrid_span7 ipsType_left1">
          <h2 className="heading_large gs_reveal"><strong>ABOUT STORY</strong>
          </h2>
          <p className="gs_reveal"> 정확한 진단과 책임있는 진료를 약속하는 <br/>피부과 전문의 김정민 원장.
          <div className="scrolldownLeft">scroll down</div> </p>
        </div>
      </div>
      
      <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
        <div className="ipsGrid_span7 ipsType_right1">
        <h2 className="heading_large gs_reveal1"><strong>LASER THERAPY</strong>
         <p>
          레이저 치료
          <br/>
          <br/>
        </p>
        </h2>
        <p className="gs_reveal"> 창문을 깨끗하게 청소하려면 겉과 속, 모두 치료가 필요합니다.<br/>피부의 근본적인 개선을 통해 건강하고 아름다운 피부를 만들 수 있습니다.
        <div className="scrolldownRight">scroll down</div>
        </p>
        </div>
       
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
          <div className="card2" id="card1">
            <img width="479" src={imgaB} alt=""/>
          </div>
        </div>
        
      </div>
      <div id="skin"></div>
      <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
          <div className="card3" id="card2">
            <img width="479" src={imgaC} alt=""/>
          </div>
        </div>
  
        <div className="ipsGrid_span7 ipsType_left2">
        <h2 className="heading_large gs_reveal"><strong>SKIN DISEASE</strong>
        <p>
        피부질환
          <br/>
          <br/>
        </p>
        </h2>
        <p className="gs_reveal"> 국립대학교병원의 피부과에서 지도전문의로서의 자격으로 
        <br/>소아 피부질환부터 중증의 피부질환까지 다양하고 풍부한 
        <br/>치료경험을 가지고 있습니다.
        <br/> 
        <br/>피부질환의 치료에서 미용시술, 의학적 피부관리, 
        <br/>나아가 근본적인 피부의 개선을 위해 진료합니다. 
        <div className="scrolldownLeft">scroll down</div>
        </p>
        </div>
      </div>
      <div id="treatment"></div>
      <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
        <div className="ipsGrid_span7 ipsType_right2">
        <h2 className="heading_large gs_reveal"><strong>TREATMENT WITH VARIOS SATISFACTION LEVELS</strong>
        <p>
        만족도가 다른 시술
          <br/>
          <br/>
        </p>
        </h2>
        <p className="gs_reveal"> - 개인의 특성에 맞춘 시술로 자연스러운 아름다움으로 효과를 극대화합니다.  <br/>- 보톡스, 필러, 실리프팅, 여드름 CROSS시술, 스컬트라, 리쥬란, 쥬베룩, 탈모메조치료
        <div className="scrolldownRight">scroll down</div>
        </p>
        </div>
  
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
          <div className="card4" id="card3">
            <img width="479" src={imgaD} alt=""/>
          </div>
        </div>
      </div>
  
      <div id="cosmetic"></div>
      <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
          <div className="card5" id="card4">
            <img width="479" src={imgaE} alt=""/>
          </div>
        </div>
  
        <div className="ipsGrid_span7 ipsType_left3">
        <h2 className="heading_large gs_reveal"><strong>COSMETIC CONSULTING & SKIN CARE</strong>
        <p>
           &nbsp;화장품컨설팅과 과학적 피부관리
          <br/>
          <br/>
        </p>
        </h2>
        <p className="gs_reveal"> - 화장품과 메이크업을 잘 아는 여의사 피부과전문의가  <br/> &nbsp;&nbsp;개개인의 다른 피부상태를 분석하여나에게 맞는 화장품을 찾고, <br/> &nbsp;&nbsp;효과가 확실히 입증된 스킨케어 프로그램으로 피부를 관리합니다. 
        <div className="scrolldownLeft">scroll down</div>
        </p>
        </div>
      </div>
    </div>
  </div>);
}
export default Service;
