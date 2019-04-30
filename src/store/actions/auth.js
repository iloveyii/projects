import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGNOUT_FAIL, SIGNOUT_SUCCESS} from "../types/auth";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch( { type : LOGIN_SUCCESS})
        }).catch(  err => {
            dispatch({ type: LOGIN_FAIL, err });
        })
    }
};


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then( () => {
            dispatch( { type : SIGNOUT_SUCCESS})
        }).catch(  err => {
            dispatch({ type: SIGNOUT_FAIL, err });
        })
    }
};
