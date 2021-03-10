import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  //passed in image, title, page

  return (
    <div className="text-center tuffyBold text-3xl tracking-widest">
      <Link to={props.page}>
        <div className={`card bg-contain ${props.image}-XS sm:${props.image}-SM md:${props.image}-MD lg:${props.image}-LG xl:${props.image}-XL`}
        role="img" 
        aria-label={`${props.title} round`}>
        </div>
        <div className=" mt-3 pb-16 ml-5 mr-5"> 
          {props.title}
        </div>
      </Link>
    </div>
  )
};

export default Card;