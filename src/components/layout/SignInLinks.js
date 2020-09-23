import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/authActions'
const SignInLinks = ({ logOut, profile }) => {
    return (
        <ul className='right'>
            <li><Link to='/create'>New Project</Link></li>
            <li><a onClick={logOut}>Log Out</a></li>
            <li><Link to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</Link></li>
        </ul>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);