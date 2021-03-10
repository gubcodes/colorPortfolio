import React, { useState } from 'react';
import DevelopTitle from './DevelopTitle';
import Card from './Card';

function Develop() {
  const projects = [
    // porchswing, blog, timetogether, last week on mars, cat facts, codepen, github
    {image: "test", title: "TEST PROJECT", page: "/develop/test"},
    {image: "portfolio3", title: "THIS PORTFOLIO", page: "/develop/portfolio3"},
    {image: "portfolio2", title: "OLD PORTFOLIO", page: "/develop/portfolio2"},
    {image: "porchswing", title: "PORCHSWING", page: "/develop/porchswing"},
    {image: "timetogether", title: "TIMETOGETHER", page: "/develop/timetogether"},
    {image: "mars", title: "LAST WEEK ON MARS", page: "/develop/mars"},
    {image: "catfacts", title: "CAT FACTS!", page: "/develop/catfacts"},
    {image: "recipeazy", title: "RECIPEAZY", page: "/develop/recipeazy"},
    {image: "kast", title: "KAST APP", page: "/develop/kast"},
    {image: "codepen", title: "CODEPEN", page: "/develop/codepen"},
    {image: "github", title: "GITHUB", page: "/develop/github"},
  ];
  
  return (
    <div>
      <DevelopTitle />
      <div className="w-screen">
      {
        projects.map((project) => 
        <Card image={project.image} title={project.title} page={project.page} />
        )}
      </div>
    </div>
  )
};

export default Develop;