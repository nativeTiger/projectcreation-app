import React, { useState } from 'react';
import { logIn } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const SignIn = ({ signIn, authErr, auth }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
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
        signIn(state);
        console.log(authErr)
    }
    if (auth.uid) return <Redirect to='/' />
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Log in</button>
                </div>
                <div className='center red-text'>
                    {authErr.authError ? <p>{authErr.authError}</p> : null}
                </div>
            </form>
        </div >
    )
}
const mapStateToProps = state => {

    return {
        authErr: state.auth,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signIn: cred => dispatch(logIn(cred))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);