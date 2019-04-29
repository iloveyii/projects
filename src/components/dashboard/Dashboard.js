import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from "react-redux";
import {compose} from 'redux';
import 'firebase/database';
import {withRouter} from 'react-router-dom';
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
        const {projects} = this.props;
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

/*
const mapStateToProps = state => {
    return {
        projects: state.project.projects
    }
};
const mapActionsToProps = {
    createProject
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Dashboard));
*/


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)
