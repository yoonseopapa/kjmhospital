import React from "react";
import imgaB from "../assets/pro.png";
import imgaA from "../assets/logo.png";


const Intro = () => {
  return (
    <section className='intro' id='intro'>
      <div className='container-fluid'>
              <div className='introTitle'>
              <br/>     
         <p> 여의사의 섬세함과
         <br/>단 2%의 피부과전문의 김정민입니다. </p>
        <h2> 피부를 잘 아는 
        <br/>피부과다운 피부과</h2>
        <br/>
        <h3>
        <img className="pro"
      src= {imgaA}
    />
        김정민 피부과 &nbsp;
        <img className="pro"
      src= {imgaB}
    />
    </h3>
    <br/>
              </div>
              <div className='introContents'>
              <br/>     
              <br/>  
              <br/>  <br/>   <br/> <br/>

        <h2> CLEAN SYSTEM
        <br/></h2>

        <h4>파스텔피부과는 치료시마다 사용하는 모든 기구를 멸균소독하고 
        <br/>1인 1기구사용을 바탕으로 위생관리에 철저한 클린시스템 CLEAN SYSTEM을 적용하고 있습니다. 
        <br/>여드름압출기, 사마귀 및 티눈 시술시 1일 1기구사용과 관리시 사용물품 모두 1회 사용 후 처리로 엄격히 관리합니다. 
    </h4>
    <br/>
              </div>
        </div>
        
    </section>
    
  );
};

export default Intro;
