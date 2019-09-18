import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom';
// receive props
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    {projects && projects.map( project => {
        return (// key always on parent element
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        );
           })}
    </div>
  );
};

export default ProjectList;
