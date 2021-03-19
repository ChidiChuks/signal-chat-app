import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA1k6FhVf9wCTYwfPEZI5boP61GZCv5M9Q",
    authDomain: "signal-chat-app-359fd.firebaseapp.com",
    projectId: "signal-chat-app-359fd",
    storageBucket: "signal-chat-app-359fd.appspot.com",
    messagingSenderId: "483858475076",
    appId: "1:483858475076:web:cf7342186dc8286ed4b411"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };