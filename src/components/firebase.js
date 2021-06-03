import firebase from "firebase/app";
import 'firebase/firestore'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import config from "./firebaseConfig";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.measurementId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId,
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export {db, storage}