import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Main = forwardRef((props, ref) => {
  useEffect(()=>{
    const tl = gsap.timeline();
    gsap.set(".p-1",{opacity:0, y:-100});
    gsap.set(".p-2",{opacity:0, y:-100});
    tl.to(".p-1",{duration:1, opacity:1, y:0, ease: "bounce.out"})
      .to(".p-2",{duration:0.5, opacity:1, y:0, ease: "bounce.out"},"-=0.2")
  },[]);

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
        <p className="p-1">DAM's</p>
        <p className="p-2">PORTFOLIO</p>
      </div>
    </div>
  );
});

export default Main;