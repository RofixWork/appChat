import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAz2T7vBhFb-htJJ3qaqcBSFbxvMWde8BE",
    authDomain: "appconnect-6793a.firebaseapp.com",
    databaseURL: "https://appconnect-6793a.firebaseio.com",
    projectId: "appconnect-6793a",
    storageBucket: "appconnect-6793a.appspot.com",
    messagingSenderId: "1028201671007",
    appId: "1:1028201671007:web:2c0ee3dcedaacbb4176eea",
    measurementId: "G-1W1YXL2WY6"
};
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth, storage};