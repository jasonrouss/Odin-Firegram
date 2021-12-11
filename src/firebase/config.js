import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa6ZAzHr9M1fF5tXtuGvhz62OLEWKZhQY",
  authDomain: "jr-firegram-3b686.firebaseapp.com",
  projectId: "jr-firegram-3b686",
  storageBucket: "jr-firegram-3b686.appspot.com",
  messagingSenderId: "9166328933",
  appId: "1:9166328933:web:434b3ab42f98fc9cd8628c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
