import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfX_5zuu7L9O8uLmYN7v34NxR_D92pTbM",
    authDomain: "crwn-db-530f8.firebaseapp.com",
    databaseURL: "https://crwn-db-530f8.firebaseio.com",
    projectId: "crwn-db-530f8",
    storageBucket: "crwn-db-530f8.appspot.com",
    messagingSenderId: "94634829695",
    appId: "1:94634829695:web:7bb539f57e2bd2cb079c4a",
    measurementId: "G-XZSYRV1KLB"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;