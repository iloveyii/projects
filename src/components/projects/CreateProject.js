import React from 'react';

class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
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

export default CreateProject;
