import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({

    // apiKey: "AIzaSyCfZKRrkBbCc-jer4MdJmQW_wg2rmtN2qM",
    // authDomain: "thh-form-cf94e.firebaseapp.com",
    // databaseURL: "https://thh-form-cf94e.firebaseio.com",
    // projectId: "thh-form-cf94e",
    // storageBucket: "thh-form-cf94e.appspot.com",
    // messagingSenderId: "304169689960",
    // appId: "1:304169689960:web:60ed8c20f34d4ea79eecdd"
    apiKey: "AIzaSyAHBqD9JOK2xSVdqWeozKmvqtzHOa4DWN8",
    authDomain: "gifting-you.firebaseapp.com",
    projectId: "gifting-you",
    storageBucket: "gifting-you.appspot.com",
    messagingSenderId: "708131784164",
    appId: "1:708131784164:web:0f49e15dad14c50fe433f1",
    measurementId: "G-ZZNX23MF80"

});

var db = firebaseApp.firestore();

var storage = firebaseApp.storage();

export { storage, db, firebaseApp };