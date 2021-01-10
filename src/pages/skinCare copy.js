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
    <div className="features aging">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
            <div className="story">
        <h1>Corn/ Verruca</h1>    
        <h1>티눈/ 사마귀</h1>  
        <h3>저절로 호전되는 질환이 아니므로, 꼭 조기치료가 필요합니다. </h3>

        <h2 > 사마귀는 인유두종바이러스(Human Papilloma Virus)의 감염으로 인해 발생하는 질환으로 본인의 신체 내에서 번지거나 주변사람에게 
       전염시킬수 있으므로 반드시 치료가 필요합니다. 반면, 티눈은 물리적 자극이나 마찰이 원인이 되어 발생합니다. 
       즉, 피부의 어떤 부분이 마찰이나 압력을 계속해서 받으면  피부과 헐거나 뚫리는 것을 막기 위해 그 부위를 두껍게 만들어 외부의 힘에 저항하게 됩니다. 
       이렇게 피부의 각질층이 국소적으로 두꺼워지면 통증이 동반될 수 있으므로 치료가 필요합니다. </h2>
        <br/>
        <h2 >
        치료법
        <br/>냉동요법, 주사요법, 약물요법, 레이저치료 등 여러 가지 방법으로 티눈/사마귀를 치료할 수 있는데, 병변의 종류나 위치를 고려하여 적절한 치료법을 선택합니다. 또한 원인까지 제거가 되었는지 꼼꼼히 살펴야 재발을 예방할 수 있기 때문에 더욱 주의 깊은 치료가 필요합니다. 
        </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
            <div className="storyAcneCenter">    
        <h1>BURN/화상</h1>  
        <br/>
        <h3>화상이 흉터로 진행되기 전에 미리 치료받는 것이 중요합니다. </h3>
        <h2 > 불이나 뜨거운 물, 강산이나 강알칼리 등의 화학물질, 아스팔트에 쓸림, 뜨거운 햇빛에 노출 등의 자극에 의해 피부가 손상된 것을 말합니다.  </h2>
        <br/>
        <h2 >
        <div className="firstCardAcne1">
        <img className="firstCardAcneC" src={imgaB} alt=""/>
        </div>
        <br/>
        <br/>
        <br/>병변의 상태에 따라 필요한 경우에는 항생제, 소염제 등의 전신약물치료를 병행하는 것이 필요할 수 있습니다. 
        <br/>가능한 빨리 이물질을 제거하고, 화상병변부위의 소독, 바세린 거즈와 화상연고를 이용하여 2차 감염 및 흉터, 색소 침착등을 방지하는 것이 필요합니다. 
        <br/>또한 LED 재생레이저를 통해 화상으로 인한 염증을 개선하고, 흉터와 색소침착을 예방하면서 손상된 피부의 회복을 촉진시킵니다. 
        </h2>
        <br/>
        </div>
        
        <div>
          </div>
          </div>
    </div>
    <div className="features freckles">
    <div className="rightContents">
       <div className="storyAcneCenter">    
        <h1>HERPES ZOSTER</h1>  
        <h1>대상포진</h1> 
        <br/>
        <h3>피부 뿐만 아니라 면역체계의 회복을 목표로 치료합니다. </h3>
        <h2 >대상포진은 어렸을 때 수두바이러스에 감염된 적이 있는 사람들에게 면역기능이 약해졌을 때 잠복해 있던 
        <br/>바이러스가 신경절을 따라 피부발진과 수포를 유발하는 바이러스질환입니다. </h2>
        <br/>
        <h2 >
        <div className="firstCardAcne1">
        <img className="firstCardAcneC" src={imgaB} alt=""/>
        </div>
        <br/>
        <br/>
        <br/> 
        <br/>유사하게 보이는 질환들과 감별하는 것이 가장 중요하며, 약물치료와 함께 피부에 나타난 홍반성 수포, 물집 등의 증상을 잘 관리하여 2차적인 감염을 에방하면서,
        <br/>초기에 철저한 병변 관리로 흉터를 최소화 하는 것이 중요합니다. 병변부위에 신경차단술을 병행하고, 헬륨네온레이저와 LED파장을 동시에 이용하여 염증과 통증을 
        <br/>줄여주며, 대상포진후  신경통으로의 이행을 예방합니다.  
        </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>
    <div className="features tinea">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
            <div className="story">
        <h1>Corn/ Verruca</h1>    
        <h1>무좀/ 사마귀</h1>  
        <h3>저절로 호전되는 질환이 아니므로, 꼭 조기치료가 필요합니다. </h3>

        <h2 > 사마귀는 인유두종바이러스(Human Papilloma Virus)의 감염으로 인해 발생하는 질환으로 본인의 신체 내에서 번지거나 주변사람에게 
       전염시킬수 있으므로 반드시 치료가 필요합니다. 반면, 티눈은 물리적 자극이나 마찰이 원인이 되어 발생합니다. 
       즉, 피부의 어떤 부분이 마찰이나 압력을 계속해서 받으면  피부과 헐거나 뚫리는 것을 막기 위해 그 부위를 두껍게 만들어 외부의 힘에 저항하게 됩니다. 
       이렇게 피부의 각질층이 국소적으로 두꺼워지면 통증이 동반될 수 있으므로 치료가 필요합니다. </h2>
        <br/>
        <h2 >
        치료법
        <br/>냉동요법, 주사요법, 약물요법, 레이저치료 등 여러 가지 방법으로 티눈/사마귀를 치료할 수 있는데, 병변의 종류나 위치를 고려하여 적절한 치료법을 선택합니다. 또한 원인까지 제거가 되었는지 꼼꼼히 살펴야 재발을 예방할 수 있기 때문에 더욱 주의 깊은 치료가 필요합니다. 
        </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>
    <div className="features atopic">
          <div className="rightContents">
          <img className="firstCardAcne" src={imgaA} alt=""/>
            <div className="storyAcne">
        <h1>ATOPIC DERMATITIS/ SEBORRHEIC DERMATITIS</h1>    
        <h1>아토피피부염 / 지루성피부염</h1>  
        <h3>연령별, 증상별로 원인과 치료법이 다르기 때문에 피부상태에 따른 맞춤치료를 시행합니다. </h3>

        <h2 > 아토피피부염은 여러 가지 알레르기 유발물질에 대해 민감하고 큰 이상반응을 나타내면서 심한 가려움증이 동반되는 만성피부질환입니다. 피부 장벽의 기능에 중요한 성분인 세라마이드가 부족하여 피부가 쉽게 민감해지고 건조하여 염증으로 연결될 수 있습니다. 
              지루성피부염은 만성적인 염증성 피부질환이며 보통 유전적요인, 피지선의 이상, 곰팡이 균의 활동, 환경적∙정신적 문제 등으로 보고 있습니다. 피지선의 비정상적인 분비로 인해 탈모로 연결되는 경우에는 염증, 가려움증, 비듬과 함께 통증과 악취를 유발하기도 합니다. 
        </h2>
        <br/>
        <h2 >
        치료법
        <br/>냉동요법, 주사요법, 약물요법, 레이저치료 등 여러 가지 방법으로 티눈/사마귀를 치료할 수 있는데, 병변의 종류나 위치를 고려하여 적절한 치료법을 선택합니다. 또한 원인까지 제거가 되었는지 꼼꼼히 살펴야 재발을 예방할 수 있기 때문에 더욱 주의 깊은 치료가 필요합니다. 
        </h2>
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
