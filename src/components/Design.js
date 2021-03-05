import React, { useState } from 'react';
import DesignTitle from './DesignTitle';
import Card from './Card';

function Design(props) {
  const projects = [
    {image: "test", title: "TEST PROJECT", page: "/design/test"}
  ];
  
  return (
    <div>
      <DesignTitle />
      <div className="w-screen">
      {/* .map() projects into cards */}
      {
        projects.map((project) => 
        <Card image={project.image} title={project.title} page={project.page} />
        )}
      </div>
    </div>
  )
}

export default Design;