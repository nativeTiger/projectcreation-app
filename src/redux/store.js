import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducers from './reducers/rootReducers';
import fbConfig from '../config/fbConfig';
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const store = createStore(rootReducers,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true })
    )
);

export default store;