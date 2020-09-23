import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBFkB9Csdv6YRi-u4VhHqVP4X_VhDHFfb8",
    authDomain: "marioplan-bf30e.firebaseapp.com",
    databaseURL: "https://marioplan-bf30e.firebaseio.com",
    projectId: "marioplan-bf30e",
    storageBucket: "marioplan-bf30e.appspot.com",
    messagingSenderId: "714916729906",
    appId: "1:714916729906:web:b30d14e71437495ff0982b",
    measurementId: "G-JX1DYLZ1M1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;