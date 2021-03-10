import React, { useState } from 'react';
import ElseTitle from './ElseTitle';
import Card from './Card';

function Else() {
  const projects = [
      // resume (work history), links, codepen, gibbolune mural, music?, videos?, posters?, shirts?
      {image: "test", title: "TEST PROJECT", page: "/else/test"},
      {image: "resume", title: "RESUME", page: "/else/resume"},
      {image: "gibbolune", title: "GIBBOLUNE", page: "/else/gibbolune"},
      {image: "hodgepodge", title: "HODGEPODGE", page: "/else/hodgepodge"},
      {image: "contact", title: "CHAT WITH ME", page: "/else/contact"},
    ];
    
    return (
      <div>
        <ElseTitle />
        <div className="w-screen">
        {
          projects.map((project) => 
          <Card image={project.image} title={project.title} page={project.page} />
          )}
        </div>
      </div>
    )
  };
  
  export default Else;