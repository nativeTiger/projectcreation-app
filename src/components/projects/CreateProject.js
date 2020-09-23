import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../redux/actions/projectActions';
const CreateProject = ({ createProject, auth, history }) => {
    const [state, setState] = useState({
        title: '',
        content: ''
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createProject(state)
        history.push('/')
    }
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Create Project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Content</label>
                    <input type='text' id='content' className='materialize-textarea' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);