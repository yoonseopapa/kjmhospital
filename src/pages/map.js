import React from "react";
import MapContainers from "../pages/mapContainer";


const Map = () => {
  return (
    <>
    {/* <Navibar/> */}
        <section className='mapMain' id='mapRow'>
      <div className='mapContainer'>
        <div className='mapRow' >
          <h3>
            <div className='line'>
              <span>CONTACT
              <br/>
              <br/>
              </span>
              
              <p className="ment"></p>
              <p className="ment"> 진료시간 : AM 10:00~ PM 6:30 </p>
              <p className="ment"> 토요일 : AM 10:00 ~ PM 4:00</p>
              <p className="ment"> 점심시간 : PM 2:00 ~ 3:00</p>
              <br/>
              <h2 className="mentTitle">
              Location:
              </h2>
              <p className="ment"></p>
              <p className="mentAddr">
              (지번) 서울시 서초구 서초2동 1336-1, 서초리더스원상가 305호
              <br/>
	            <br/>(도로명) 서울시 서초구 서운로 62 -1, 서초 리더스원상가 305호
              </p>
              <h2 className="mentTitle">
              <br/>
              Tel : 010-2222-2222
              </h2>
              <h2 className="mentTitle">
              <br/>
              Fax : 02-888-8888
              </h2>
              <h2 className="mentTitle">
              <br/>
              E-mail : teltelte@naver.com
              </h2>
            </div>
          </h3>
        </div>
        <div className='mapKakao'>

          {/* <MapContainers/> */}          </div>
      </div>
    </section>
    </>
  );
};

export default Map;
