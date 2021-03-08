import React from 'react';
import { Link } from 'react-router-dom';

  function DevelopTitle() {

    return (
      <div className="w-screen h-12 mb-5 inline-grid grid-cols-12 tuffyBold tracking-widest">
        <div className="col-start-7 col-end-13 text-left mt-auto mb-auto text-2xl">
            <Link to="/develop">DEVELOP</Link>
        </div>
      </div>
    )
  }

export default DevelopTitle;