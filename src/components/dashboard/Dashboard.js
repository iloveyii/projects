import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from "react-redux";
import firebase from '../../config/firebase';
import {compose} from 'redux';
import 'firebase/database';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        console.log('Component did mount');

        const pRef = firebase.database().ref('projects');
        console.log(pRef);
        pRef.on('value', (snapshot) => {
            console.log('ON');
            this.setState({projects: snapshot.val()});
        });
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

const mapStateToProps = state => {
    return {
        projects: state.project.projects
    }
};


export default compose(
    connect(mapStateToProps)
)(Dashboard);
