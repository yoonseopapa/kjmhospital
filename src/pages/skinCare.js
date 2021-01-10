import React from "react";
import { NavLink } from "react-router-dom";
import imgaA from "../assets/skinCare.jpg";
import imgaB from "../assets/ice.jpg";
import imgaC from "../assets/head-min.jpg";
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
      <p>SKIN CARE</p>
    </div>
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> 파스텔만의 피부관리</p>
        <h1> 치료 Cure</h1>
        <h3>근본적인 치료가 필요합니다.</h3>
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

<div className="features price">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
            <div className="story">
        <h2 > 대학교수의 임상경험과 여자 피부과전문의로서의 섬세함으로 
        <br/>정확하게 진단하여 해결합니다. 
        <br/>
        <br/>피부 질환과 미용은 별개의 문제가 아니며 피부의 근본적인 개선을 위해 
        <br/>노력합니다. </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>



    <div className="features aging">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
            <div className="story">
        <h2 > 대학교수의 임상경험과 여자 피부과전문의로서의 섬세함으로 
        <br/>정확하게 진단하여 해결합니다. 
        <br/>
        <br/>피부 질환과 미용은 별개의 문제가 아니며 피부의 근본적인 개선을 위해 
        <br/>노력합니다. </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
            <img className="firstCardAcne" src={imgaB} alt=""/>
            <div className="storyAcne">
        <h2 > 약물치료, 자외선 치료, 냉동치료, 면역치료 등 피부 상태에
        <br/> 따라 적절한 치료법을 모색하여 효과적으로 치료해드립니다. </h2>
        </div>
        
        <div>
          </div>
          </div>
    </div>
    <div className="features freckles">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaC} alt=""/>
            <div className="story">
        <h2 > 재발률이 높은 아토피피부염, 사마귀, 티눈 등과 같은 질환들은 
        <br/>단순한 치료 이후에도 지속적인 유지치료와 관리가 필요한 경우가 많습니다.  </h2>
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

export default SkinCare;
