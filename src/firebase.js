import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0HDrUMFE8JoNcIQfHC8TEUx6ZJ_bZK8w",
  authDomain: "netflix-clone-b56a3.firebaseapp.com",
  projectId: "netflix-clone-b56a3",
  storageBucket: "netflix-clone-b56a3.appspot.com",
  messagingSenderId: "165282748048",
  appId: "1:165282748048:web:5e607e00b9b8cea5d52a15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
