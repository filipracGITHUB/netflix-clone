import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBndGygJt-KYKlbcoK0WE4rV_Sg_2HOOks",
  authDomain: "netflix-clone-df12a.firebaseapp.com",
  projectId: "netflix-clone-df12a",
  storageBucket: "netflix-clone-df12a.appspot.com",
  messagingSenderId: "112450757699",
  appId: "1:112450757699:web:af7aad2153f52d207ba0f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider();

export { db, auth, provider };
