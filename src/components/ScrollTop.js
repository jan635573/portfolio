import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showBtn,setShowBtn] = useState(false);
  const handleTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  const handleScroll = () => {
    if(window.scrollY > 100){
      setShowBtn(true);
    }else{
      setShowBtn(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  return (
    <div>
      {
        showBtn && <button className="scroll-top" onClick={handleTop}>
          <img src={`${process.env.PUBLIC_URL}/images/scrolltop.svg`} alt="top 버튼"/>
          </button>
      }
    </div>
  );
};

export default ScrollTop;