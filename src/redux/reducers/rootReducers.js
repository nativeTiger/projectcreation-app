import { combineReducers } from 'redux';
import authReducers from './authReducers';
import projectReducers from './projectReducers';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
    auth: authReducers,
    project: projectReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducers;