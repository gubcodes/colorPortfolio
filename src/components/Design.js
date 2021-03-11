import React, { useState } from 'react';
import DesignTitle from './DesignTitle';
import Card from './Card';

function Design() {
  const projects = [
    // portfolio2
    // {number: "1", image: "test", title: "TEST PROJECT", page: "/design/test"},
    {number: "2", image: "portfolio3", title: "THIS PORTFOLIO", page: "/design/portfolio3"},
    {number: "3", image: "portfolio2", title: "OLD PORTFOLIO", page: "/design/portfolio2"},
    {number: "4", image: "porchswing", title: "PORCHSWING", page: "/design/porchswing"},
    {number: "5", image: "worthekik", title: "WORTHEKIK ELEKTRONIK", page: "/design/worthekik"},
  ];
  
  return (
    <div>
      <DesignTitle />
      <div className="w-screen">
      {
        projects.map((project) => 
        <Card key={project.number} image={project.image} title={project.title} page={project.page} />
        )}
      </div>
    </div>
  )
};

export default Design;