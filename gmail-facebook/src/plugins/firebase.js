// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDhYTJkafqjvMyYcuHpcb4Yi9YJZMDgMA",
    authDomain: "facey-27d18.firebaseapp.com",
    projectId: "facey-27d18",
    storageBucket: "facey-27d18.appspot.com",
    messagingSenderId: "404725452387",
    appId: "1:404725452387:web:60b5339e83c7349bce3256"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {app, db, auth, storage}
