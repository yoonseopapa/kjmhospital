import React from "react";
import { NavLink } from "react-router-dom";
import imgaA from "../assets/aging.jpg";
import imgaB from "../assets/freckles.jpg";
import imgaC from "../assets/acne.jpg";
import playerA from "../assets/snowflakes.mp4";
import classes from "../styles/components/BackgroundVideo.scss";

const Laser = () => {
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
      </ul>
    </nav>
    <div className="contentTitle">
      <p>LASER CARE</p>
    </div>
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> 파스텔만의 전문성</p>
        <h1> Laser 치료</h1>
        <h3>정확한 진단과 치료는 피부과전문의의 전문분야 입니다.</h3>
        <h2 >ㅡㅡㅡ
        <br/>개개인의 얼굴타입의 분석을 바탕으로 진단이 
        <br/>정확해야 효과적인 치료,좋은 결과로 이어질수 
        <br/>있습니다.
        </h2>
        </div>
    <div className={classes.Container} >
    <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={playerA} type="video/mp4" />
            </video>
        </div>
</div>


    <div className="features aging">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
            <div className="story">
        <h2 > 누구나에게나 울쎄라가 필요하지도, 써마지가 필요하지도 않습니다.
        <br/>개인별로 필요한 복합시술로 자연스러운 아름다움을 추구합니다. </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
          <div className="marchine">
            <img className="firstCardLaser" src={imgaA} alt=""/>
            <img className="firstCardLaser" src={imgaA} alt=""/>
            <img className="firstCardLaser" src={imgaA} alt=""/>
            <img className="firstCardLaser" src={imgaA} alt=""/>
            </div>
 
    </div>

    <div className="features acne">
          <div className="rightContents">
            <img className="firstCardAcne" src={imgaB} alt=""/>
            <div className="storyAcne">
        <h2 > 색소가 기미인지 주근깨인지 구분하는 것이 무엇보다 중요합니다. 
        <br/>얼굴의 색소는 정확한 진단과 꾸준한 치료로 분명 좋아질 수 있습니다</h2>
        </div>
        
        <div>
          </div>
          </div>
    </div>
    <div className="features freckles">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaC} alt=""/>
            <div className="story">
        <h2 > 여드름, 안면홍조와 흉터는 초기치료가 가장 중요합니다. 
        <br/>여드름 흉터 치료에 앞서 원인교정, 재발 예방에 초점을 두고 접근하며 
        <br/>학생부터 성인여드름까지 여드름종류, 흉터의 타입에 따라 
        <br/>다양한 방법으로 원하는 수준의 결과를 볼 수 있습니다. </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

</body>
</div>
  );
};

export default Laser;
