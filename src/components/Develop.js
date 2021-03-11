import React, { useState } from 'react';
import DevelopTitle from './DevelopTitle';
import Card from './Card';

function Develop() {
  const projects = [
    // porchswing, blog, timetogether, last week on mars, cat facts, codepen, github
    // {number: "1", image: "test", title: "TEST PROJECT", page: "/develop/test"},
    {number: "2", image: "portfolio3", title: "THIS PORTFOLIO", page: "/develop/portfolio3"},
    {number: "3", image: "portfolio2", title: "OLD PORTFOLIO", page: "/develop/portfolio2"},
    {number: "4", image: "porchswing", title: "PORCHSWING", page: "/develop/porchswing"},
    {number: "5", image: "timetogether", title: "TIMETOGETHER", page: "/develop/timetogether"},
    {number: "6", image: "mars", title: "LAST WEEK ON MARS", page: "/develop/mars"},
    {number: "7", image: "catfacts", title: "CAT FACTS!", page: "/develop/catfacts"},
    {number: "8", image: "recipeazy", title: "RECIPEAZY", page: "/develop/recipeazy"},
    {number: "9", image: "kast", title: "KAST APP", page: "/develop/kast"},
    {number: "10", image: "codepen", title: "CODEPEN", page: "/develop/codepen"},
    {number: "11", image: "github", title: "GITHUB", page: "/develop/github"},
  ];
  
  return (
    <div>
      <DevelopTitle />
      <div className="w-screen">
      {
        projects.map((project) => 
        <Card key={project.number} image={project.image} title={project.title} page={project.page} />
        )}
      </div>
    </div>
  )
};

export default Develop;