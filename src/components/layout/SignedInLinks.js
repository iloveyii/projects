import React from 'react';
import { NavLink } from "react-router-dom";
import {signIn} from "../../store/actions/auth";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut} to='/'>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AA</NavLink></li>
        </ul>
    )
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
};
const mapActionsToProps = {
    signOut
};

export default connect(mapStateToProps, mapActionsToProps)(SignedInLinks);
