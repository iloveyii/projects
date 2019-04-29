import {ADD_PROJECT, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL} from "../types/project";

const initState2 = {
    projects: [
        { id: 1, title: 'Help me find peach', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
        { id: 2, title: 'Firebase tut', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?" },
        { id: 3, title: 'GraphQL in queue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
        { id: 4, title: 'GCP tut', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
    ]
};

const initState = {};

const projectReducer = ( state = initState, action ) => {
    switch (action.type) {
        case ADD_PROJECT:
            const newState = Object.assign({}, state);
            newState.projects.push(action.payload);
            console.log('inside projectReducer' , action);
            return newState;
            break;

        case ADD_PROJECT_FAIL:
            console.log('Error in create project reducer', action);
        default:
            return state;
    }
    return state;
}

export default projectReducer;
