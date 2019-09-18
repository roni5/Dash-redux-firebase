// import { dispatch } from "../../../../Library/Caches/typescript/3.5/node_modules/rxjs/internal/observable/range";
// import { credentials } from "grpc";

import { firebaseStateReducer as firebase } from 'react-redux-firebase';
/**
 * no more reactReduxFirebase and reduxFirestore
 * getFirebase no longer part of the API
 */

export const signIn = credentials => {
  return (dispatch, getState, { firebase }) => {
    // const firebase = firebase();

    firebase()
      .auth()
      .signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
      )
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};
/**
 *
 */
export const signOut = () => {
    return ( dispatch, getState, { firebase } ) => {
        firebase.auth().signOut().then( () => {
            dispatch( { type: 'SIGNOUT_SUCCESS' } )
        } );
;    };
}

