import initialState from './initialState';
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../types/authTypes';
const authReducers = (state = initialState.authError, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: []
            }
        case LOGIN_FAILED:
            console.log('login failed');
            return {
                ...state,
                authError: 'login unsuccessfull'
            }
        case LOGOUT_SUCCESS:
            console.log('logged out')
        case SIGNUP_SUCCESS:
            console.log('signed up successfully')
            return {
                ...state,
                authError: []
            }
        case SIGNUP_ERROR:
            console.log('signedup error')
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}
export default authReducers;