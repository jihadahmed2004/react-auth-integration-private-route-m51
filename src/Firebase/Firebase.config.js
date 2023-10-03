// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0PKPFIuWy4PxXYnhyRmppeNOaxH-U2w",
  authDomain: "auth-integration-private-9ee8b.firebaseapp.com",
  projectId: "auth-integration-private-9ee8b",
  storageBucket: "auth-integration-private-9ee8b.appspot.com",
  messagingSenderId: "86156357019",
  appId: "1:86156357019:web:5997af040644fb4434c53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;