import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Design from './Design';
import Develop from './Develop';
import Else from './Else';
import DesignTest from '../pages/DesignTest'

function Navbar(props) {
  // changeBackground={changeBackground} toggleHome={toggleHome} changePage={changePage} page={page} home={home}
  // const [home, setHome] = useState(true);
  // const [page, setPage] = useState('develop');

  // function toggleHome(value) {
  //   setHome(value);
  // };

  // function changePage(value) {
  //   setHome(false);
  //   setPage(value);
  // };

  return (
    <div>
      {
        window.location.pathname === "/" || ""
          ?
          <div className="w-screen h-screen inline-grid grid-cols-12 grid-rows-6 tuffyBold tracking-widest">
            <div className="row-start-1 row-end-3 col-start-1 col-end-7 text-right mt-auto mb-auto text-5xl">
              JESSE<br />HELM
         </div>
              <div className="row-start-3 row-end-4 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl">
                <a href="/design">
                  DESIGN
                </a>
              </div>
              <div className="row-start-4 row-end-5 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl">
                <a href="/develop">
                  DEVELOP
                </a>
              </div>
              <div className="row-start-5 row-end-7 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl">
                <a href="/else">
                  EVERY<br />THING<br />ELSE
                </a>
              </div>
            <div className="row-start-1 row-end-3 col-start-7 col-end-13 mt-auto mb-auto ml-auto mr-auto">
              <div className="circle white" onClick={() => props.changeBackground('white')}></div>
            </div>
            <div className="row-start-3 row-end-4 col-start-1 col-end-7 mt-auto mb-auto ml-auto mr-auto">
              <div className="circle yellow" onClick={() => props.changeBackground('yellow')}></div>
            </div>
            <div className="row-start-4 row-end-5 col-start-1 col-end-7 mt-auto mb-auto ml-auto mr-auto">
              <div className="circle blue" onClick={() => props.changeBackground('blue')}></div>
            </div>
            <div className="row-start-5 row-end-6 col-start-1 col-end-7 mt-auto mb-auto ml-auto mr-auto">
              <div className="circle dark" onClick={() => props.changeBackground('dark')}></div>
            </div>
          </div>
          :
          <div className="w-screen h-16 inline-grid grid-cols-12 tuffyBold tracking-widest">
            <nav className="col-start-1 col-end-7 text-right mt-auto mb-auto text-2xl">
              <a href="/">
                JESSE HELM
              </a>
            </nav>
            <div className="col-start-7 col-end-13 text-right mt-auto mb-auto flex">
              <div className="inline-grid grid-cols-4 w-full ml-4">
                <div className="col-start-1 col-end-2">
                  <div className="circleSmall white" onClick={() => props.changeBackground('white')}></div>
                </div>
                <div className="col-start-2 col-end-3">
                  <div className="circleSmall yellow" onClick={() => props.changeBackground('yellow')}></div>
                </div>
                <div className="col-start-3 col-end-4">
                  <div className="circleSmall blue" onClick={() => props.changeBackground('blue')}></div>
                </div>
                <div className="col-start-4 col-end-5">
                  <div className="circleSmall dark" onClick={() => props.changeBackground('dark')}></div>
                </div>
              </div>
            </div>
          </div>
      }
      {/* {
        props.page === 'design'
          ?
          <Design />
          :
          null
      }
      {
        props.page === 'develop'
          ?
          <Develop />
          :
          null
      }
      {
        props.page === 'else'
          ?
          <Else />
          :
          null
      } */}
      {/* routing below */}
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/design"><Design /></Route>
        <Route exact path="/develop"><Develop /></Route>
        <Route exact path="/else"><Else /></Route>
        <Route exact path="/design/test"><DesignTest /></Route>
      </Switch>
    </div>
  );
}

export default Navbar;