import { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
  return (
    <div className="main" ref={mainRef => (ref.current[0] = mainRef)}>
      {/* <IoIosArrowRoundDown /> */}
      {/* <img src="./images/bg-img.jpg" className="bg-img"/> */}
      <div className="video-over"></div>
      <video muted autoPlay loop className="bg-img">
        <source src={`${process.env.PUBLIC_URL}/images/sea.mp4`} type="video/mp4"/>
      </video>
      <img src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt="화살표 이미지" className="down-icon"/>
      <div className="title-wrap">
        <p>DAM's</p>
        <p>PORTFOLIO</p>
      </div>
    </div>
  );
});

export default Main;