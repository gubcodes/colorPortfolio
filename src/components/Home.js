import React, { useState } from 'react';

function Home(props) {
  //passed in changeBackground, toggleHome, changePage
  
  return (
    <div>
      <div className="w-screen h-screen inline-grid grid-cols-12 grid-rows-6 tuffyBold tracking-widest">
         <div className="row-start-1 row-end-3 col-start-1 col-end-7 text-right mt-auto mb-auto text-6xl">
           JESSE<br/>HELM
         </div>
         <nav className="row-start-3 row-end-4 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
         onClick={() => props.changePage('design')}>
           DESIGN
         </nav>
         <nav className="row-start-4 row-end-5 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
         onClick={() => props.changePage('develop')}>
           DEVELOP
         </nav>
         <nav className="row-start-5 row-end-7 col-start-7 col-end-13 test-left mt-auto mb-auto text-4xl"
         onClick={() => props.changePage('else')}>
           EVERY<br/>THING<br/>ELSE
         </nav>
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
    </div>
  );
}

export default Home;