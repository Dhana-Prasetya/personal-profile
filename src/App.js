import React from 'react';
import Header from './components/Header';
import Identity from './components/Identity';

function App() {
  return (
    <div className="bg-[#FFFFFF] font-poppins">
      <Header/>
      <Identity name="Dhana"/>
    </div>
  );
}

export default App;