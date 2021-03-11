import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Design from './Design';
import Develop from './Develop';
import Else from './Else';
import DesignTest from '../pages/DesignTest';
import DevelopTest from '../pages/DevelopTest';
import ElseTest from '../pages/ElseTest';
import DevelopPortfolio3 from '../pages/DevelopPortfolio3';
import DevelopPortfolio2 from '../pages/DevelopPortfolio2';
import DevelopPorchswing from '../pages/DevelopPorchswing';
import DesignPortfolio3 from '../pages/DesignPortfolio3';
import DevelopTimeTogether from '../pages/DevelopTimeTogether';
import DevelopMars from '../pages/DevelopMars';
import DevelopCatFacts from '../pages/DevelopCatFacts';
import DevelopRecipeazy from '../pages/DevelopRecipeazy';
import DevelopCodepen from '../pages/DevelopCodepen';
import DevelopGithub from '../pages/DevelopGithub';
import DevelopKast from '../pages/DevelopKast';
import DesignPorchswing from '../pages/DesignPorchswing';
import DesignPortfolio2 from '../pages/DesignPortfolio2';
import DesignWorthekik from '../pages/DesignWorthekik';
import ElseResume from '../pages/ElseResume';

function Navbar(props) {
  const [home, setHome] = useState(true);
  
  function toggleHome() {
    setHome(!home);
  }

  return (
    <div>
      {
        home
          ?
          <div className="w-screen h-screen inline-grid grid-cols-12 grid-rows-6 tuffyBold tracking-widest">
            <div className="row-start-1 row-end-3 col-start-1 col-end-7 text-right mt-auto mb-auto text-5xl">
              JESSE<br />HELM
         </div>
              <div className="row-start-3 row-end-4 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
              onClick={() => toggleHome()}>
                <Link to="/design">
                  DESIGN
                </Link>
              </div>
              <div className="row-start-4 row-end-5 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
              onClick={() => toggleHome()}>
                <Link to="/develop">
                  DEVELOP
                </Link>
              </div>
              <div className="row-start-5 row-end-7 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
              onClick={() => toggleHome()}>
                <Link to="/else">
                  EVERY<br />THING<br />ELSE
                </Link>
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
            <nav className="col-start-1 col-end-7 text-right mt-auto mb-auto text-2xl"
            onClick={() => toggleHome()}>
              <Link to="/">
                JESSE HELM
              </Link>
            </nav>
            <div className="col-start-7 col-end-13 text-right mt-auto mb-auto flex">
              <div className="inline-grid grid-cols-4 w-full ml-4">
                {/*  */}
                <div className="col-start-1 col-end-2">
                  <div className="circleSmall dark" onClick={() => props.changeBackground('dark')}></div>
                </div>
                <div className="col-start-2 col-end-3">
                  <div className="circleSmall blue" onClick={() => props.changeBackground('blue')}></div>
                </div>
                <div className="col-start-3 col-end-4">
                  <div className="circleSmall yellow" onClick={() => props.changeBackground('yellow')}></div>
                </div>
                <div className="col-start-4 col-end-5">
                  <div className="circleSmall white" onClick={() => props.changeBackground('white')}></div>
                </div>
              </div>
            </div>
          </div>
      }
      <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/design"><Design /></Route>
          <Route exact path="/develop"><Develop /></Route>
          <Route exact path="/else"><Else /></Route>
          <Route exact path="/design/test"><DesignTest /></Route>
          <Route exact path="/design/portfolio3"><DesignPortfolio3 /></Route>
          <Route exact path="/design/porchswing"><DesignPorchswing /></Route>
          <Route exact path="/design/portfolio2"><DesignPortfolio2 /></Route>
          <Route exact path="/design/worthekik"><DesignWorthekik /></Route>
          <Route exact path="/develop/test"><DevelopTest /></Route>
          <Route exact path="/develop/portfolio3"><DevelopPortfolio3 /></Route>
          <Route exact path="/develop/portfolio2"><DevelopPortfolio2 /></Route>
          <Route exact path="/develop/porchswing"><DevelopPorchswing /></Route>
          <Route exact path="/develop/timetogether"><DevelopTimeTogether /></Route>
          <Route exact path="/develop/catfacts"><DevelopCatFacts /></Route>
          <Route exact path="/develop/recipeazy"><DevelopRecipeazy /></Route>
          <Route exact path="/develop/kast"><DevelopKast /></Route>
          <Route exact path="/develop/codepen"><DevelopCodepen /></Route>
          <Route exact path="/develop/github"><DevelopGithub /></Route>
          <Route exact path="/develop/mars"><DevelopMars /></Route>
          <Route exact path="/else/test"><ElseTest /></Route>
          <Route exact path="/else/resume"><ElseResume /></Route>
        </Switch>
    </div>
  );
}

export default Navbar;