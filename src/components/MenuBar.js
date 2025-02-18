import { useEffect, useRef, useState } from "react";
const MenuNav = ['','ABOUT','PROJECT','DESIGN'];

const MenuBar = ({ scrollRef }) => {
  const [navIdx, setNavIdx] = useState(null);
  const navRef = useRef([]);

  useEffect(()=>{
    scrollRef.current[navIdx]?.scrollIntoView({ behavior: 'smooth' });
    setNavIdx(null);
  },[scrollRef,navIdx]);

  useEffect(()=>{
    const changeNavBtn = () => {
      scrollRef.current.forEach((ref, idx)=>{
        if (ref.offsetTop - 180 < window.scrollY){
          navRef.current.forEach(ref => {
            ref.className = ref.className.replace(' active', '');
          });
          navRef.current[idx].className += ' active';
        }
      });
    };
    window.addEventListener("scroll",changeNavBtn);
    return () => {
      window.removeEventListener("scroll",changeNavBtn);
    }
  },[scrollRef]);

  return (
    <nav>
      <div className="nav-contents">
        <h1><a href="#">DAM</a></h1>
        <ul>
          {
            MenuNav.map((name,idx)=>{
              return <li key={idx}
              ref={ref => (navRef.current[idx] = ref)}
              onClick={()=>{setNavIdx(idx)}}
              >
                { name }
                </li>
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;