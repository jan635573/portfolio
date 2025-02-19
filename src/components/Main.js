import { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
  return (
    <div className="main" ref={mainRef => (ref.current[0] = mainRef)}>
      {/* <IoIosArrowRoundDown /> */}
      {/* <img src="./images/bg-img.jpg" className="bg-img"/> */}
      <div className="video-over"></div>
      <video muted autoPlay loop className="bg-img">
        <source src="./images/sea.mp4" type="video/mp4" />
      </video>
      <img src="./images/arrow-down.svg" className="down-icon"/>
      <div className="title-wrap">
        <p>DAM's</p>
        <p>PORTFOLIO</p>
      </div>
    </div>
  );
});

export default Main;