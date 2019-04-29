import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";


const ProjectList = ({projects}) => {

    return(
        <div className="project-list section">
            {
                projects && projects.map( (project, i) => <Link to={'/project/' + project.id} key={i}><ProjectSummary key={i} project={project} /> </Link>)
            }
        </div>
    )
}

export default ProjectList;
