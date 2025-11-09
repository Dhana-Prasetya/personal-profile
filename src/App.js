import React from 'react';
import Header from './components/Header';
import Identity from './components/Identity';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-[#FFFFFF] font-poppins">
      <Header/>
      <Identity name="Dhana"/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;