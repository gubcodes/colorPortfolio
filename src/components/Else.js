import React, { useState } from 'react';
import ElseTitle from './ElseTitle';
import Card from './Card';

function Else() {
  const projects = [
      // resume (work history), links, codepen, gibbolune mural, music?, videos?, posters?, shirts?
      // {number: "1", image: "test", title: "TEST PROJECT", page: "/else/test"},
      {number: "2", image: "resume", title: "RESUME", page: "/else/resume"},
      {number: "3", image: "gibbolune", title: "GIBBOLUNE", page: "/else/gibbolune"},
      {number: "4", image: "hodgepodge", title: "HODGEPODGE", page: "/else/hodgepodge"},
      {number: "5", image: "contact", title: "CHAT WITH ME", page: "/else/contact"},
    ];
    
    return (
      <div>
        <ElseTitle />
        <div className="w-screen">
        {
          projects.map((project) => 
          <Card key={project.number} image={project.image} title={project.title} page={project.page} />
          )}
        </div>
      </div>
    )
  };
  
  export default Else;