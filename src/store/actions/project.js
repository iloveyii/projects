import { ADD_PROJECT, ADD_PROJECT_FAIL } from "../types/project";


export const createProject = (project) => {
    /* return {
        type: ADD_PROJECT,
        payload: {project}
    } */

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log(firestore.collection('projects'));
        firestore.collection('projects').add({
           ...project,
            firstName: 'H',
            lastName: 'Alex',
            createdAt: new Date()
        }).then( () => {
            dispatch( { type: ADD_PROJECT, payload: project });
        }).catch( (err) => {
            dispatch( { type: ADD_PROJECT_FAIL, err } );
        })

    }
};
