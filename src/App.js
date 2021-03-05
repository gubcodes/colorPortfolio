import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
      <Navbar changeBackground={changeBackground} />
      </Router>
      {/* {
        home
          ?
          <Home changeBackground={changeBackground} toggleHome={toggleHome} changePage={changePage} home={home}/>
          :
          <Navbar changeBackground={changeBackground} toggleHome={toggleHome} changePage={changePage} page={page} home={home} />
      } */}
    </div>
  );
}

export default App;
