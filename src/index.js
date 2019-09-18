import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig';
// import { firebase as fbConfig } from './fbconfig'; export default { firebase }
import firebase from './config/fbConfig';
import {reduxFirestore, getFirestore } from 'redux-firestore';
// - import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer  } from 'redux-firestore';

import { firebaseReducer } from 'react-redux-firebase';
// import configureStore from './redux/store';
// no more reactReduxFirebase and reduxFirestore
const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

 const store = createStore(
   rootReducer,
   //applyMiddleware(...thunk),
   //     compose(
   //       reactReduxFirebase(firebase, rrfConfig),
   //     // applyMiddleware(
   //       //  getFirebase,
   //     //   thunk.withExtraArgument({ getFirestore }),
   //     ),
   //     //     reduxFirestore(fbConfig),
   //     //     reactReduxFirebase(fbConfig),
   // //   ),
 );
 const rrfProps = {
   firebase,
   config: rrfConfig,
     dispatch: store.dispatch,
   useFirestoreForProfile: true ,
   createFirestoreInstance,
 };
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
