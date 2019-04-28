import { ADD_PROJECT } from "../types/project";


export const createProject = (project) => {
    /* return {
        type: ADD_PROJECT,
        payload: {project}
    } */

    return (dispatch, getState) => {
        dispatch( { type: ADD_PROJECT, payload: project });
    }
}
