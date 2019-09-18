import {
  reactReduxFirebase,
  getFirebase,
} from 'react-redux-firebase';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
// no more reactReduxFirebase and reduxFirestore
// getFirebase no longer part of the API
const initState = {
    authError: null
};
//  reducer.then.switch for mapStateToProps
const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_ERROR':
        console.log('LOGIN ERROR');
        return {
          ...state,
          authError: 'Login Failed',
        };
      case 'LOGIN _SUCCESS':
        console.log('LOGIN SUCCESS');
        return {
          ...state,
          authError: null,
        };
        case 'SIGNOUT_SUCCESS':
            console.log( 'SIGNOUT_SUCCESS' );
            return state
      default:
        return state;
    }
}

export default authReducer;