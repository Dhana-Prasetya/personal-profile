import React from 'react';
import Header from './components/Header';
import Identity from './components/Identity';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {

  const myName = "Dhana";
  const myFullName = "Dhana Prasetya";

  return (
    <div className="bg-[#FFFFFF] font-poppins">
      
      <Header/>

      <div className='border-2 border-[#C8CDD3]'>

        <Identity name = {myName}/>
        <AboutMe name = {myName}/>
        <Skills/>
        <Portofolio/>
        <Contact/>
        <Footer fullName={myFullName}/>
      </div>

    </div>
  );
}

export default App;