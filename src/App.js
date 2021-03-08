import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/fonts/fonts.css';
import Navbar from './components/Navbar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');


  function changeBackground(value) {
    setBackgroundColor(value);
  };

  return (
    <div className={`w-screen min-h-screen ${backgroundColor}`}>
      <BrowserRouter>
        <Navbar changeBackground={changeBackground} />
      </BrowserRouter>
    </div>
  );
}

export default App;