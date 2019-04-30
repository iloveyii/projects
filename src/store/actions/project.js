import { ADD_PROJECT, ADD_PROJECT_FAIL } from "../types/project";


export const createProject = (project, showProjectsList) => {
    /* return {
        type: ADD_PROJECT,
        payload: {project}
    } */

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
           ...project,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then( () => {
            dispatch( { type: ADD_PROJECT, payload: project, showProjectsList : showProjectsList });
        }).catch( (err) => {
            dispatch( { type: ADD_PROJECT_FAIL, err } );
        })

    }
};
