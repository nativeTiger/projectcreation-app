import initialState from './initialState';
import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../types/projectTypes';

const projectReducers = (state = initialState.projects, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log('project crated', action.payload)
            return state;
        case CREATE_PROJECT_ERROR:
            console.log('created project error', action.err)
            return state;
        default:
            return state;
    }
}
export default projectReducers;