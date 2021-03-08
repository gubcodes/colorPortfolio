import React, { useState } from 'react';
import DesignTitle from './DesignTitle';
import Card from './Card';

function Design() {
  const projects = [
    // portfolio2
    {image: "test", title: "TEST PROJECT", page: "/design/test"},
    {image: "portolio3", title: "THIS PORTFOLIO", page: "/design/portfolio3"},
    {image: "porchswing", title: "PORCHSWING", page: "/design/porchswing"},
    {image: "worthekik", title: "WORTHEKIK", page: "/design/worthekik"},
  ];
  
  return (
    <div>
      <DesignTitle />
      <div className="w-screen">
      {
        projects.map((project) => 
        <Card image={project.image} title={project.title} page={project.page} />
        )}
      </div>
    </div>
  )
}

export default Design;