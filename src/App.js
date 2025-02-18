import React, { useRef } from 'react';
import "./App.scss";
import MenuBar from './components/MenuBar';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Design from './components/Design';
import ScrollTop from './components/ScrollTop';

const App = () => {
  const scrollRef = useRef([]);
  
  return (
    <div>
      <ScrollTop />
      <MenuBar scrollRef={scrollRef}/>
      <Main ref={scrollRef}/>
      <About ref={scrollRef}/>
      <Project ref={scrollRef}/>
      <Design ref={scrollRef}/>
    </div>
  );
};

export default App;