import React from "react";
import { NavLink } from "react-router-dom";
import imgaA from "../assets/botox.jpg";
import imgaB from "../assets/thread.jpg";
import imgaC from "../assets/hairloss.jpg";
import playerA from "../assets/skinCare.mp4";
import classes from "../styles/components/BackgroundVideo.scss";

const SkinCare = () => {
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
      <p>TREATEMENT</p>
    </div>
   
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> 파스텔만의 노하우</p>
        <h1> 시술 Treatment</h1>
        <h3> 시술자에 따른 미세한 차이가 아름다운 변화로 
         <br/>이어집니다</h3>
        <h2 >ㅡㅡㅡ
        <br/>피부과학을 바탕으로 피부를 나아지게 합니다. 
        <br/>겉으로 보이는 부분만이 아니라 근본적인 부분을 
        <br/>해결합니다. 
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
            <img className="firstCardSecond" src={imgaB} alt=""/>
            <div className="story">
        <h2 >보톡스는 잘 사용하면 주름 뿐만아니라 얼굴 윤곽개선의
        <br/> 효과도 기대 할 수 있습니다. 뿐만아니라 승모근, 허벅지, 종아리 등의 
        <br/> 비대해진 근육의 감소에도효과적인 시술입니다. 
        <br/>
        <br/>또한 확실하게 안전성이 입증된 종류의 실리프팅과 
        <br/>피부에 힘을 실어줄수 있는 스킨부스터의 사용은 외부물질을 
        <br/>주입하는 것보다 좋은 치료가 될 수 있습니다. </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
            <img className="firstCardAcne" src={imgaC} alt=""/>
            <div className="storyAcne">
        <h2 > 탈모 환자의 대다수가 피부과가 아닌 곳에서 치료를 받고 있는 경우가 
        <br/>많습니다. FDA에서 승인된 안전하고 효과적인 약물치료와 두피스케일링, 
        <br/>메조테라피 등을 섬세하고 꼼꼼한 여의사 원장님과 숙련된 두피관리사에게 
        <br/>직접 관리받으실 수 있습니다. </h2>
        </div>
        
        <div>
          </div>
          </div>
    </div>
</body>
</div>
  );
};

export default SkinCare;
