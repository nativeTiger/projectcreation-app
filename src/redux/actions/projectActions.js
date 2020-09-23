import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../types/projectTypes';
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const authId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorfirstName: profile.firstName,
            authorlastName: profile.lastName,
            authorId: authId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: CREATE_PROJECT,
                payload: project
            });
        }).catch((err) => {
            dispatch({
                type: CREATE_PROJECT_ERROR,
                err
            });
        })

    }
}