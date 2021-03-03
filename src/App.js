import React, { useState } from 'react';
import './App.css';
import './assets/fonts/fonts.css';
import Home from './components/Home';
// import Navbar from './components/Navbar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  function changeBackground(value) {
    setBackgroundColor(value);
  };

  return (
    <div className={`w-screen h-screen ${backgroundColor}`}>
      <Home changeBackground={changeBackground} />
    </div>
  );
}

export default App;
