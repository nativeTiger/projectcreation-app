import React from 'react';
import { Link } from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <ul className='right'>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/signin'>LogIn</Link></li>
        </ul>
    )
}
export default SignOutLinks;