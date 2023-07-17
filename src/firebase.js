// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCaOEfYikBCOuG738Co_yNp_818LRlDiAE",
  authDomain: "slack-6c5e3.firebaseapp.com",
  projectId: "slack-6c5e3",
  storageBucket: "slack-6c5e3.appspot.com",
  messagingSenderId: "551834404976",
  appId: "1:551834404976:web:677934767c413b32458cb5",
  measurementId: "G-6GM1V98CWZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Export firestore database
const provider = new GoogleAuthProvider();
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);

export { auth, db, provider };
