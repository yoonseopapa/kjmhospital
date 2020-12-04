import React from "react";
// import Navibar from "../components/navibar";
import MapContainer from "../pages/mapContainer";


const Map = () => {
  return (
    <>
    {/* <Navibar/> */}
        <section className='main'>
      <div className='container'>
        <div className='row'>
          <h3>
            <div className='line'>
              <span>오시는길</span>
            </div>
            <div className='contents'>
              <h3>서울시 강남구 뭐시기 뭐시기 빌딩 2층이여라</h3>
            </div>
            <div className='line'>
              <span>지하철역 이용하시는 경우</span>
            </div>
            <div className='contents'>
              <h3>지하철 2번출구로 나오셔가지고서리 그냥 쭉~~~ 직진하시면 편의점이고</h3>
            </div>
            <div className='contents'>
              <h3>쬐금만 더오면 빌딩 2층이여라</h3>
            </div>

            <div className='line'>
              <span>개인차량 이용하시는 경우</span>
            </div>
            <div className='contents'>
              <h3>주차장으로 오시면 되는구마잉</h3>
            </div>

          </h3>
          <div className='btn-row'>
          <MapContainer/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Map;
