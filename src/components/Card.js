import React, { useState } from 'react';

function Card(props) {
  //passed in image, title, page

  return (
    <div className="text-center tuffyBold text-3xl tracking-widest">
      <a href={props.page}>
        <div className={`card bg-contain ${props.image}-XS sm:${props.image}-SM`}>
        </div>
        <div className=" mt-3 pb-16 ml-5 mr-5">
          {props.title}
        </div>
      </a>
    </div>
  )
};

export default Card;