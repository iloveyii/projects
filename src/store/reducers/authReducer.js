import {LOGIN_FAIL, LOGIN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_SUCCESS, SIGNOUT_SUCCESS} from "../types/auth";

const initState = {
    authError : null
};

const authReducer = ( state = initState, action ) => {
    switch (action.type) {
        case LOGIN_FAIL:
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case LOGIN_SUCCESS:
            console.log('Login success');
            return {
                ...state,
                authError: null
            };
        case SIGNOUT_SUCCESS:
            console.log('Sign out success');
            return {
                ...state
            };
        case SIGN_UP_SUCCESS:
            console.log('Sign up success');
            return {
                ...state,
                authError: null
            };
        case SIGN_UP_FAIL:
            console.log('Sign up error');
            return {
                ...state,
                authError: action.err.message
            };

        default:
            return { ...state };
    }
};

export default authReducer;
