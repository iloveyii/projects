import React from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from "react-redux";
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

const ProjectDetails = (props) => {
    const {project, auth} = props;

    if (!project) return <div>Loading ...</div>;
    if (!auth.uid) return <Redirect to={'/signin'}/>

    return (

        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title} </span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {project.firstName} </div>
                    <div>2nd September, 2pm</div>

                    <div className="input-field">
                        <button onClick={() => props.history.push('/')} className="btn green lighten-1 z-depth-0">Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    console.log(projects);
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
