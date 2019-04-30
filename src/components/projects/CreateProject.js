import React from 'react';
import  { connect } from "react-redux";
import { createProject } from "../../store/actions/project";
import {withRouter, Redirect} from 'react-router-dom';

class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showProjectList = this.showProjectList.bind(this);
    }

    showProjectList() {
        this.props.history.push('/');
    }

    handleChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProject(this.state, this.showProjectList);
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;

        if(!auth.uid) return <Redirect to={'/signin'} />

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={ this.handleChange } />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>

                </form>
            </div>
        );
    }
}

/**
 * Get data from store
 * @param state
 */
const mapStateToProps = state => ({
    auth: state.firebase.auth
});

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{UserUpdate: UserUpdateAction}}
 */
const mapActionsToProps = {
    createProject
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(CreateProject));

