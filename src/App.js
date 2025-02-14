import React from 'react';
import "./App.scss";
import MenuBar from './components/MenuBar';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Design from './components/Design';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <div>
      <ScrollTop />
      <MenuBar />
      <Main />
      <About />
      <Project />
      <Design />
    </div>
  );
};

export default App;