import React from 'react';
import "./App.scss";
import MenuBar from './components/MenuBar';
import Main from './components/Main';
import About from './components/About';


const App = () => {
  return (
    <div>
      <MenuBar />
      <Main />
      <About />
    </div>
  );
};

export default App;