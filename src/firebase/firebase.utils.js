import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEvOgEboRbRq2suypppVtUj8--NcPJ0s8",
    authDomain: "crwn-db-4fed0.firebaseapp.com",
    databaseURL: "https://crwn-db-4fed0.firebaseio.com",
    projectId: "crwn-db-4fed0",
    storageBucket: "",
    messagingSenderId: "929965110614",
    appId: "1:929965110614:web:3343340fe5484e44"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;