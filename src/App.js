import React, { useRef, useState } from 'react';
import "./App.scss";
import MenuBar from './components/MenuBar';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Design from './components/Design';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';

const App = () => {
  const scrollRef = useRef([]);
  const [coord, setCoord] = useState({clientX:0, clientY:0});
  const mouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCoord({clientX:mouseX, clientY:mouseY});
  }

  return (
    <div className='app' onMouseMove={mouseMove}>
      <div className='pointer' style={{transform: `translate(${coord.clientX}px, ${coord.clientY}px)`}}></div>
      <ScrollTop />
      <MenuBar scrollRef={scrollRef}/>
      <Main ref={scrollRef}/>
      <About ref={scrollRef}/>
      <Project ref={scrollRef}/>
      <Design ref={scrollRef} />
      <Footer />
    </div>
  );
};

export default App;