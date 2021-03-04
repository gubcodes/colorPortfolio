import React, { useState } from 'react';
import './App.css';
import './assets/fonts/fonts.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [home, setHome] = useState(true);
  const [page, setPage] = useState('develop');

  function changeBackground(value) {
    setBackgroundColor(value);
  };

  function toggleHome(value) {
    setHome(value);
  };

  function changePage(value) {
    setHome(false);
    setPage(value);
  };

  return (
    <div className={`w-screen h-screen ${backgroundColor}`}>
      {
        home
          ?
          <Home changeBackground={changeBackground} toggleHome={toggleHome} changePage={changePage} />
          :
          <Navbar changeBackground={changeBackground} toggleHome={toggleHome} page={page} />
      }
    </div>
  );
}

export default App;
