import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJco4o5AFSXuRWGrGRqpC4_Dl9oXDwP0s",
    authDomain: "dash-3bbf6.firebaseapp.com",
    databaseURL: "https://dash-3bbf6.firebaseio.com",
    projectId: "dash-3bbf6",
    storageBucket: "",
    messagingSenderId: "256986537132",
    appId: "1:256986537132:web:a571b050f2108a91"
  };
  // Initialize Firebase
firebase.initializeApp( firebaseConfig );
firebase.firestore();

export default firebase;