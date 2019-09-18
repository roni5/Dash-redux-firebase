import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
// no more reactReduxFirebase and reduxFirestore
// getFirebase no longer part of the API
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebase,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
