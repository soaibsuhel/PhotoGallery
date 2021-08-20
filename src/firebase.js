import firebase from 'firebase';
import 'firebase/auth';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR5WhNr1jPa_1UktYCY4BhOXPit-3bBrQ",
    authDomain: "photo-gallery-2f485.firebaseapp.com",
    projectId: "photo-gallery-2f485",
    storageBucket: "photo-gallery-2f485.appspot.com",
    messagingSenderId: "898547430302",
    appId: "1:898547430302:web:44119dd38541be174d5c8f",
});

export let db = firebaseApp.firestore();
export let auth = firebase.auth();

export default firebase;