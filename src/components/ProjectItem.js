import React from "react";

function ProjectItem({ name, about, technologies, _id }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(technology => {
          return <span key={`${technology}-_id`}>{technology}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
