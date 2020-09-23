import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../redux/actions/authActions';
const SignUp = ({ auth, authError, signup }) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        lastName: '',
        firstName: ''
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(state);
    }
    if (auth.uid) return <Redirect to='/' />
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
                <div className="center red-text">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signup: (cred) => dispatch(signUp(cred))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);