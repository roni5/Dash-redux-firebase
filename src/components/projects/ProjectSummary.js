import React from 'react';
// Data recieved via props
const ProjectSummary = ({project}) => {

  return (
    <div className="card z-depth-0 project-summary ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title"> {project.title}</span>
        <p>Posted by Dash</p>
        <p className="grey-text">28th August 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
