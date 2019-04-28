import {ADD_PROJECT, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL} from "../types/project";

const initState = {
    projects: [
        { id: 1, title: 'Help me find peach', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
        { id: 2, title: 'Firebase tut', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?" },
        { id: 3, title: 'GraphQL in queue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
        { id: 4, title: 'GCP tut', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic quidem! Animi autem blanditiis, dicta eos fugit impedit incidunt iste, labore magnam maiores mollitia nihil placeat sint unde vitae?' },
    ]
};

const projectReducer = ( state = initState, action ) => {
    switch (action.type) {
        case ADD_PROJECT:
            state.projects.push(action.payload);
            console.log(action.payload);
            return state;

        case ADD_PROJECT_FAIL:
            console.log('Error in create project reducer', action);
        default:
            return state;
    }
    return state;
}

export default projectReducer;
