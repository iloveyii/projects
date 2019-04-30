import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from "react-redux";
import {compose} from 'redux';
import 'firebase/database';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate', nextProps, nextContext);

    }

   componentWillReceiveProps(nextProps, nextContext) {
       console.log('componentWillReceiveProps', nextProps, nextContext);
   }

    componentDidMount() {
        console.log('Component did mount');
    }

    render() {
        const {projects, auth, notifications} = this.props;

        if(!auth.uid) return <Redirect to={'/signin'} />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 50, orderBy : ['time', 'desc'] }
    ])
)(Dashboard)
