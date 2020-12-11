import React from "react";
import imgaA from "../assets/profile.jpg";
import { NavLink } from "react-router-dom";

const AboutStroy = () => {

  return (
<div>
<body>
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
        <li className="location">skinCare</li>
        </NavLink>

        <NavLink to='/treatment' exact>
        <li className="location">Treatment</li>
        </NavLink>

        
        <a href="#aboutStory">
        <li className="profile">
          <div class="img"></div>
        </li>
        </a>
      </ul>
    </nav>
    <div className="features">
 
          <div className="about">
            <img className="firstCardProfile" width="479" src={imgaA} alt=""/>
        <div>
        <div className="story">
        <h2 > 정확한 진단과 책임있는 진료를 약속하는 <br/>피부과 전문의 김정민 원장.</h2>
        <br/>
        <br/>
        <span> 원장 약력</span>
        <br/>
        <br/>
         <p> - &nbsp;&nbsp;&nbsp;대한 피부과학회 지도전문의 </p>
         <p> - &nbsp;&nbsp;&nbsp;대한 피부과의사회 정회원 </p>
         <p> - &nbsp;&nbsp;&nbsp;전 양산부산대학교병원 피부과 임상교수 </p>
         <p> - &nbsp;&nbsp;&nbsp;부산대학교병원 피부과학교실 외래교수 </p>
         <p> - &nbsp;&nbsp;&nbsp;한국과학기술원(KAIST) 생명과학과 졸업 </p>
         <p> - &nbsp;&nbsp;&nbsp;대한피부레이저학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한피부항노화연구회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한미용피부외과학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한여드름학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한아토피피부염학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한건선학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한백반증학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한광의학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한접촉피부염 및 알레르기학회 정회원</p>
         <p> - &nbsp;&nbsp;&nbsp;대한모발학회 정회원</p>
         <br/>
         <br/>
         <span> 학술활동</span>
         <br/>
         <br/>
         <p>● 피부과 SCI/SCIE급 저널(국제저명학술지) 8편 개제</p>
         <p>● 피부과 국내학술지 14편 개제</p>
        </div>
          </div>
          </div>
         
    </div>
</body>
</div>
  );
};

export default AboutStroy;
