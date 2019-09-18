import React from 'react';

const ProjectDetails = ( props ) => {
    const id =props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0 ">
        <div className="card-content">
                  <span className="card-title">Project - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut quaerat asperiores doloremque fugiat debitis nesciunt
            natus laudantium? Quo, eius expedita? Incidunt minima
            ipsam similique. Modi eaque neque similique praesentium
            unde.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div >Posted by Ron</div>
          <div className="">28th August</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
