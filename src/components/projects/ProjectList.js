import React from 'react';
import ProjectSummary from './ProjectSummary';


const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            {
                projects && projects.map( (project, i) => <ProjectSummary key={i} project={project} />)
            }
        </div>
    )
}

export default ProjectList;
