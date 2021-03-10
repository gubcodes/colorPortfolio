import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/fonts/fonts.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');


  function changeBackground(value) {
    setBackgroundColor(value);
  };

  return (
    <div className={`w-screen min-h-screen ${backgroundColor}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar changeBackground={changeBackground} />
      </BrowserRouter>
    </div>
  );
}

export default App;