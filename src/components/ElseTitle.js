import React from 'react';
import { Link } from 'react-router-dom';

  function ElseTitle() {

    return (
      <div className="w-screen h-24 mb-5 inline-grid grid-cols-12 tuffyBold tracking-widest">
        <div className="col-start-7 col-end-13 text-left mt-auto mb-auto text-2xl">
            <Link to="/else">EVERY<br/>THING<br/>ELSE</Link>
        </div>
      </div>
    )
  }

export default ElseTitle;