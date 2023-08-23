// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu10pVp0b1IB4ummvQwg5ynvpvOyFE0SU",
  authDomain: "reel-18f61.firebaseapp.com",
  projectId: "reel-18f61",
  storageBucket: "reel-18f61.appspot.com",
  messagingSenderId: "1090894405351",
  appId: "1:1090894405351:web:590ae799cdb0671165cc42",
  measurementId: "G-NJB39X6RSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)