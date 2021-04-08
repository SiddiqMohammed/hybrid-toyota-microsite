import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDc1INk48UYiC1k-dnaojsRlPn1zGjn_UM",
  authDomain: "toyota-hybrid-heroes.firebaseapp.com",
  projectId: "toyota-hybrid-heroes",
  storageBucket: "toyota-hybrid-heroes.appspot.com",
  messagingSenderId: "259115542615",
  appId: "1:259115542615:web:9b45d823693f9385321b12",
  measurementId: "G-RGG7XY3XQ9",
});

var db = firebaseApp.firestore();

var storage = firebaseApp.storage();

export { storage, db, firebaseApp };
