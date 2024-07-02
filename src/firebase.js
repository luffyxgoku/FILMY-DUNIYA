import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA5Vt1WBmTiNiyA2GpdnEE3S0ZiWesmjro",
  authDomain: "netflix-fa89e.firebaseapp.com",
  projectId: "netflix-fa89e",
  storageBucket: "netflix-fa89e.appspot.com",
  messagingSenderId: "594782840474",
  appId: "1:594782840474:web:96b7bea1578dcd6c0d2123"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
  