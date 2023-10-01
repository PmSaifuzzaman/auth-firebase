// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO2boGBZu05ayKTwDEsdSoc_q7p1rA4HM",
  authDomain: "fir-auth-3638f.firebaseapp.com",
  projectId: "fir-auth-3638f",
  storageBucket: "fir-auth-3638f.appspot.com",
  messagingSenderId: "532678797827",
  appId: "1:532678797827:web:36fe260171261b5c657c36"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
