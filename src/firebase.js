import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBn7LlVeKLy9lA-hxrHaA_I-YMi6l1LFfg",
    authDomain: "skillin-841e3.firebaseapp.com",
    projectId: "skillin-841e3",
    storageBucket: "skillin-841e3.appspot.com",
    messagingSenderId: "153960442077",
    appId: "1:153960442077:web:84fe6005e40f2812eb1334"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};