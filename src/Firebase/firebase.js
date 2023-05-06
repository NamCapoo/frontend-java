import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBHMAwZUSKB3aZsKs-Gg5rQYK3Ihf3KN68",
  authDomain: "watch-shop-pj.firebaseapp.com",
  projectId: "watch-shop-pj",
  storageBucket: "watch-shop-pj.appspot.com",
  messagingSenderId: "903949135713",
  appId: "1:903949135713:web:e8eb02dbe7d664cf379f20"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
//sử dụng server local
// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", "8080");
// }
////////////////////////////////////////////////////////////////
export { db, auth, storage };
export default firebase;
